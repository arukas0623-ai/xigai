/* ============================================================
   析概 · 本地服务器 server.js
   静态文件服务 + POST /api/ai（调用 dsh headless 联网+AI 解析）
   用法：node server.js [端口]（默认 8765）
   ============================================================ */
"use strict";
const http = require("http");
const fs = require("fs");
const path = require("path");
const { execFile } = require("child_process");

const ROOT = __dirname;
const PORT = Number(process.argv[2] || process.env.PORT || 8765);
const CACHE_DIR = path.join(ROOT, ".cache", "ai");
const DSH_BIN = "C:\\Users\\35074\\AppData\\Local\\npm-cache\\_npx\\1e7f6d9597241db0\\node_modules\\@deepseek-ai\\dsh\\lib\\bin.js";

const MIME = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8", ".svg": "image/svg+xml",
  ".json": "application/json; charset=utf-8", ".png": "image/png",
  ".jpg": "image/jpeg", ".webp": "image/webp", ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8", ".md": "text/markdown; charset=utf-8",
};

function send(res, code, body, type) {
  res.writeHead(code, { "Content-Type": type || "text/plain; charset=utf-8", "Cache-Control": "no-cache" });
  res.end(body);
}

/* 剥离 AI 输出的前导说明，保留正文 markdown */
function stripPreamble(text) {
  const m = String(text || "").match(/^#+\s/m);
  if (m && m.index > 0) return String(text).slice(m.index);
  return String(text || "");
}

/* ── AI 深度解析 ─────────────────────────────────── */
function handleAi(res, payload) {
  const name = String(payload.name || "").trim();
  if (!name) return send(res, 200, JSON.stringify({ ok: false, error: "缺少概念名" }));
  const id = String(payload.id || name).replace(/[^a-z0-9-]/gi, "") || "concept";
  fs.mkdirSync(CACHE_DIR, { recursive: true });
  const cacheFile = path.join(CACHE_DIR, id + ".md");
  try {
    const st = fs.statSync(cacheFile);
    if (Date.now() - st.mtimeMs < 7 * 864e5) {
      const text = stripPreamble(fs.readFileSync(cacheFile, "utf8"));
      return send(res, 200, JSON.stringify({ ok: true, cached: true, text }));
    }
  } catch (e) {}
  const researchDir = path.join(ROOT, ".cache", "research", id);
  fs.mkdirSync(researchDir, { recursive: true });
  const prompt = [
    "你是「析概」知识库的 AI 研究员。请联网搜索（优先使用 web_search 工具）并深度解析概念：",
    name,
    "。输出一份结构清晰的简体中文深度解析，使用 markdown，包含以下章节：",
    "## 定义 / ## 背景与历史 / ## 核心要点（3-5 条）/ ## 实际应用 / ## 常见误解 / ## 相关概念 / ## 参考来源（列出你搜索到的来源 URL）。",
    "全文 500-900 字，事实准确。如果 web_search 不可用，则基于你的知识回答并在开头注明「（未联网，基于知识库）」。",
  ].join("");
  // 付费预算守卫（用户主动路径）
  const budgetBlock = paidBudgetCheck();
  if (budgetBlock) return send(res, 200, JSON.stringify({ ok: false, error: budgetBlock }));
  bumpPaid("deep-dive", "user", 0);
  console.log("[ai] 开始深度解析(付费):", name, "| 本次搜索上限", AI_POLICY.searchMaxUses);
  execFile(process.execPath, [DSH_BIN, "--profile", "headless", prompt],
    { cwd: researchDir, timeout: 300000, maxBuffer: 16 * 1024 * 1024, windowsHide: true },
    (err, stdout, stderr) => {
      let text = "";
      if (err && !stdout) {
        console.error("[ai] 失败:", err.message, (stderr || "").slice(0, 600));
        return send(res, 200, JSON.stringify({ ok: false, error: "AI 引擎调用失败: " + String(err.message).slice(0, 160) }));
      }
      // 优先采用 AI 在工作目录产出的 md 交付文件（更完整），其次 stdout
      let bestFile = null, bestLen = 0;
      try {
        for (const f of fs.readdirSync(researchDir)) {
          if (f.endsWith(".md")) {
            const p = path.join(researchDir, f);
            const l = fs.statSync(p).size;
            if (l > bestLen) { bestLen = l; bestFile = p; }
          }
        }
      } catch (e) {}
      text = bestFile ? fs.readFileSync(bestFile, "utf8") : String(stdout || "");
      text = stripPreamble(text).trim();
      if (!text) return send(res, 200, JSON.stringify({ ok: false, error: "AI 引擎返回为空" }));
      try { fs.writeFileSync(cacheFile, text); } catch (e) {}
      try { fs.rmSync(researchDir, { recursive: true, force: true }); } catch (e) {}
      console.log("[ai] 完成:", name, "→", text.length, "字符");
      send(res, 200, JSON.stringify({ ok: true, cached: false, text }));
    });
}




/* ── 免费 AI：本地引擎检测 / 设备 AI 工具 / 打开应用 ── */
const FREE_ENGINES = [
  { name: "ollama",   url: "http://127.0.0.1:11434", tags: "/api/tags",    gen: "/api/generate", type: "generate" },
  { name: "lmstudio", url: "http://127.0.0.1:1234/v1", tags: "/models",    chat: "/chat/completions", type: "chat" },
];
function pickModel(models) {
  const pref = ["qwen2.5", "qwen2", "deepseek-r1", "deepseek", "llama3", "llama", "glm4", "gemma2", "mistral", "yi", "gpt"];
  for (const p of pref) { const m = (models || []).find(m => String(m).toLowerCase().startsWith(p)); if (m) return m; }
  return (models && models[0]) || "";
}
async function detectEngines() {
  const found = [];
  for (const e of FREE_ENGINES) {
    try {
      const r = await fetch(e.url + e.tags, { signal: AbortSignal.timeout(3000) });
      if (!r.ok) continue;
      const d = await r.json();
      const models = e.type === "generate" ? (d.models || []).map(m => m.name) : (d.data || []).map(m => m.id);
      if (models.length) found.push({ name: e.name, models, type: e.type, url: e.url, gen: e.gen, chat: e.chat });
    } catch (e2) {}
  }
  return found;
}
function freeAsk(res, payload) {
  const q = String(payload.q || "").trim();
  if (!q) return send(res, 200, JSON.stringify({ ok: false, error: "问题为空" }));
  detectEngines().then(engines => {
    if (!engines.length) return send(res, 200, JSON.stringify({ ok: false, engines: [] }));
    const eng = engines[0];
    const model = pickModel(eng.models);
    if (!model) return send(res, 200, JSON.stringify({ ok: false, engines }));
    const prompt = "你是「析概」知识图书馆的 AI 解析员。用简体中文清晰、具体、有深度地解释下面的问题：先一句话核心定义，再展开关键细节、实际用法或例子，最后给出相关术语。控制在 300-800 字。问题：" + q;
    const finish = (ok, extra) => send(res, 200, JSON.stringify(Object.assign({ ok, engine: eng.name, model }, extra)));
    if (eng.type === "generate") {
      fetch(eng.url + eng.gen, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ model, prompt, stream: false, options: { temperature: 0.6 } }), signal: AbortSignal.timeout(240000) })
        .then(r => r.json()).then(d => { const t = String(d.response || "").trim(); t ? finish(true, { text: t }) : finish(false, { error: "模型返回为空" }); })
        .catch(e => finish(false, { error: "Ollama 调用失败: " + e.message.slice(0, 120) }));
    } else {
      fetch(eng.url + eng.chat, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ model, messages: [{ role: "user", content: prompt }], stream: false, temperature: 0.6 }), signal: AbortSignal.timeout(240000) })
        .then(r => r.json()).then(d => { const t = ((d.choices || [])[0] || {}).message ? ((d.choices[0].message || {}).content || "") : ""; const t2 = String(t).trim(); t2 ? finish(true, { text: t2 }) : finish(false, { error: "模型返回为空" }); })
        .catch(e => finish(false, { error: "LM Studio 调用失败: " + e.message.slice(0, 120) }));
    }
  }).catch(e => send(res, 200, JSON.stringify({ ok: false, error: e.message })));
}

/* 设备 AI 工具检测 */
function detectDesktopTools() {
  const tools = [];
  const cand = [
    { key: "doubao",   name: "豆包",       exe: "D:\\工具软件\\Doubao\\app\\Doubao.exe", web: "https://www.doubao.com/" },
    { key: "chatgpt",  name: "ChatGPT",    exe: "", web: "https://chatgpt.com/" },
    { key: "kimi",     name: "Kimi",       exe: "", web: "https://kimi.moonshot.cn/" },
    { key: "deepseek", name: "DeepSeek",   exe: "", web: "https://chat.deepseek.com/" },
    { key: "tongyi",   name: "通义千问",   exe: "", web: "https://tongyi.aliyun.com/qianwen/" },
    { key: "wenxin",   name: "文心一言",   exe: "", web: "https://yiyan.baidu.com/" },
    { key: "glm",      name: "智谱清言",   exe: "", web: "https://chatglm.cn/" },
  ];
  for (const t of cand) {
    let installed = t.exe ? fs.existsSync(t.exe) : false;
    if (!installed) {
      // 扫描开始菜单快捷方式
      try {
        const lnks = [];
        for (const dir of [path.join(process.env.APPDATA || "", "Microsoft", "Windows", "Start Menu"), path.join(process.env.ProgramData || "", "Microsoft", "Windows", "Start Menu")]) {
          for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
            if (f.name.toLowerCase().endsWith(".lnk")) lnks.push(f.name.toLowerCase());
          }
        }
        installed = lnks.some(n => n.includes(t.name.toLowerCase()) || n.includes(t.key));
      } catch (e) {}
    }
    if (installed) tools.push(t);
  }
  return tools;
}
function handleFreeTools(res) {
  detectEngines().then(engines => {
    send(res, 200, JSON.stringify({ ok: true, engines, tools: detectDesktopTools() }));
  });
}
function handleLaunchTool(res, payload) {
  const tool = detectDesktopTools().find(t => t.key === payload.tool);
  if (!tool || !tool.exe) return send(res, 200, JSON.stringify({ ok: false, error: "未找到该应用，请用网页版" }));
  try {
    const cp = require("child_process");
    cp.spawn(tool.exe, [], { detached: true, stdio: "ignore", windowsHide: false }).unref();
    send(res, 200, JSON.stringify({ ok: true, tool: tool.key, name: tool.name }));
  } catch (e) {
    send(res, 200, JSON.stringify({ ok: false, error: "启动失败: " + e.message.slice(0, 120) }));
  }
}

/* ── AI 问答解析（网页内提问） ──────────────────────── */
function simpleHash(s) {
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) >>> 0;
  return h.toString(36);
}
function handleAsk(res, payload) {
  const q = String(payload.q || "").trim();
  if (!q) return send(res, 200, JSON.stringify({ ok: false, error: "问题不能为空" }));
  if (q.length > 2000) return send(res, 200, JSON.stringify({ ok: false, error: "问题过长（2000 字以内）" }));
  const key = "ask_" + simpleHash(q);
  const cacheFile = path.join(CACHE_DIR, key + ".md");
  try {
    const st = fs.statSync(cacheFile);
    if (Date.now() - st.mtimeMs < 24 * 3600e3) {
      const text = fs.readFileSync(cacheFile, "utf8");
      return send(res, 200, JSON.stringify({ ok: true, cached: true, text }));
    }
  } catch (e) {}
  const rdir = path.join(ROOT, ".cache", "research", key);
  try { fs.mkdirSync(rdir, { recursive: true }); } catch (e) { return send(res, 200, JSON.stringify({ ok: false, error: "研究目录创建失败" })); }
  const prompt = [
    "你是「析概」知识图书馆的 AI 解析员。用户会提出一个概念/术语/问题。",
    "请优先使用 web_search 联网核实，然后用简体中文清晰、具体、有深度地解释：先给一句话核心定义，再展开关键细节、实际用法或例子，如有需要列出相关术语，最后附上你搜索到的参考来源。",
    "如果问题涉及行话/黑话/缩写，请解释其全称、出处与使用场景。控制篇幅 300-800 字，事实准确。",
    "用户问题：",
    q,
  ].join("\n");
  const budgetBlock2 = paidBudgetCheck();
  if (budgetBlock2) return send(res, 200, JSON.stringify({ ok: false, error: budgetBlock2 }));
  bumpPaid("chat-ask", "user", 0);
  console.log("[ask] 提问(付费):", q.slice(0, 60), "| 搜索上限", AI_POLICY.searchMaxUses);
  execFile(process.execPath, [DSH_BIN, "--profile", "headless", prompt],
    { cwd: rdir, timeout: 300000, maxBuffer: 16 * 1024 * 1024, windowsHide: true },
    (err, stdout, stderr) => {
      let text = "";
      if (err && !stdout) {
        console.error("[ask] 失败:", err.message);
        return send(res, 200, JSON.stringify({ ok: false, error: "AI 引擎调用失败: " + String(err.message).slice(0, 160) }));
      }
      let bestFile = null, bestLen = 0;
      try {
        for (const f of fs.readdirSync(rdir)) {
          if (f.endsWith(".md")) {
            const p = path.join(rdir, f);
            const l = fs.statSync(p).size;
            if (l > bestLen) { bestLen = l; bestFile = p; }
          }
        }
      } catch (e) {}
      text = bestFile ? fs.readFileSync(bestFile, "utf8") : String(stdout || "");
      text = stripPreamble(text).trim();
      if (!text) return send(res, 200, JSON.stringify({ ok: false, error: "AI 引擎返回为空" }));
      try { fs.writeFileSync(cacheFile, text); } catch (e) {}
      try { fs.rmSync(rdir, { recursive: true, force: true }); } catch (e) {}
      console.log("[ask] 完成:", q.slice(0, 40), "→", text.length, "字符");
      send(res, 200, JSON.stringify({ ok: true, cached: false, text }));
    });
}

/* ── AI 解析回填书库（自生长） ─────────────────────── */
let writeQueue = Promise.resolve();
function enqueueWrite(fn) {
  writeQueue = writeQueue.then(fn).catch(e => console.error("[write] 失败:", e.message));
  return writeQueue;
}
function parseAnalysis(name, domain, text) {
  const sec = {};
  let cur = null;
  for (const ln of String(text || "").split(/\r?\n/)) {
    const m = ln.match(/^#{1,4}\s*(.+)$/);
    if (m) { cur = m[1].replace(/[#*\s\u3010\u3011【】]/g, "").trim(); sec[cur] = []; continue; }
    if (cur && ln.trim()) sec[cur].push(ln.trim());
  }
  const pick = keys => { for (const k of keys) if (sec[k] && sec[k].length) return sec[k].join("\n"); return ""; };
  const list = keys => {
    for (const k of keys) {
      if (sec[k] && sec[k].length) {
        const items = [];
        for (const l of sec[k]) { const s = l.replace(/^[-*\d.、\s]+/, "").replace(/^[-*]\s*/, "").trim(); if (s && !/^https?:\/\//.test(s)) items.push(s); }
        if (items.length) return items;
      }
    }
    return [];
  };
  const srcRe = /https?:\/\/[^\s)"'，。；]+/g;
  const sources = [...new Set((String(text).match(srcRe) || []))].slice(0, 5);
  const slug = String(name).replace(/[^a-zA-Z0-9\u4e00-\u9fa5]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 30) || "new-concept";
  return {
    id: slug, name, field: domain,
    aliases: [], tags: [domain], difficulty: 3,
    summary: (pick(["概述", "定义"]) || name).slice(0, 30),
    definition: pick(["定义"]) || name,
    background: pick(["背景与历史", "背景", "历史"]),
    core: list(["核心要点", "核心", "要点"]).slice(0, 6),
    applications: list(["实际应用", "应用"]).slice(0, 5),
    misconceptions: list(["常见误解", "误解", "局限"]).slice(0, 3),
    related: list(["相关概念", "关联概念"]).slice(0, 5),
    references: list(["参考来源", "来源"]).slice(0, 4),
    sources, searchedAt: new Date().toISOString().slice(0, 10),
    generated: true,
  };
}
function handleAddConcept(res, payload) {
  const name = String(payload.name || "").trim();
  const analysis = String(payload.analysis || "").trim();
  if (!name || !analysis) return send(res, 200, JSON.stringify({ ok: false, error: "缺少概念名或解析内容" }));
  const concept = parseAnalysis(name, payload.domain || "AI 生成", analysis);
  const genFile = path.join(ROOT, "data", "generated.js");
  enqueueWrite(() => {
    let js = "";
    try { js = fs.readFileSync(genFile, "utf8"); } catch (e) {}
    if (!js.includes('"AI 生成"')) {
      js = "window.XIGAI = window.XIGAI || {};\nwindow.XIGAI[\"AI 生成\"] = [];\n";
    }
    const m = js.match(/window\.XIGAI\["AI 生成"\] = \[([\s\S]*?)\];/);
    const arrBody = m ? m[1] : "";
    let arr = [];
    try { arr = arrBody.trim() ? JSON.parse("[" + arrBody + "]") : []; } catch (e) { arr = []; }
    const exists = arr.some(c => c.id === concept.id || c.name === concept.name);
    if (!exists) arr.push(concept);
    const newJs = 'window.XIGAI = window.XIGAI || {};\nwindow.XIGAI["AI 生成"] = ' + JSON.stringify(arr, null, 2) + ";\n";
    fs.writeFileSync(genFile, newJs);
    // 重建 manifest
    const files = fs.readdirSync(path.join(ROOT, "data")).filter(f => f.endsWith(".js") && f !== "manifest.js").sort();
    fs.writeFileSync(path.join(ROOT, "data", "manifest.js"), "window.XIGAI_MANIFEST = " + JSON.stringify(files) + ";\n");
    console.log("[add] 已加入书库:", name, "| 共", arr.length, "条 AI 生成");
    send(res, 200, JSON.stringify({ ok: true, domain: "AI 生成", concept, total: arr.length }));
  });
}


/* ═══ 阶段1：联网自增长管道（server.js 唯一公共写入口） ═══ */
const GROW_DIR = path.join(ROOT, ".cache", "grow");
const VERSION_DIR = path.join(ROOT, ".cache", "versions");
const STATS_FILE = path.join(ROOT, ".cache", "stats.json");
const GROW_TTL = 7 * 864e5;
const VERIFY_TTL = 7 * 864e5;   // 独立校验结果缓存 7 天

/* 内存语料索引（启动与每次入库后重建） */
let CORPUS = null;
let DOMAIN_INDEX = null;   // field/tags/name → 领域 多数投票索引（语料变更时失效）
function normStr(s) {
  return String(s || "").replace(/[\s，。；、·．.:：()（）""''「」【】《》!！?？]/g, "").toLowerCase();
}
function loadCorpus() {
  const w = { XIGAI: {} };
  const files = fs.readdirSync(path.join(ROOT, "data")).filter(f => f.endsWith(".js") && f !== "manifest.js");
  for (const f of files) {
    try { new Function("window", fs.readFileSync(path.join(ROOT, "data", f), "utf8"))(w); } catch (e) {}
  }
  const byId = new Map(), byName = new Map(), byAlias = new Map();
  const all = [];
  for (const dom of Object.keys(w.XIGAI)) {
    for (const c of (w.XIGAI[dom] || [])) {
      if (!c || !c.name) continue;
      c.domain = dom;
      c.id = c.id || normStr(c.name).slice(0, 40);
      all.push(c);
      if (!byId.has(c.id)) byId.set(c.id, c);
      const nk = normStr(c.name);
      if (!byName.has(nk)) byName.set(nk, c);
      for (const a of (c.aliases || [])) { const ak = normStr(a); if (ak && !byAlias.has(ak)) byAlias.set(ak, c); }
    }
  }
  // 图谱中心度：degree / in-degree / out-degree
  const cent = {};
  for (const c of all) {
    cent[c.id] = { in: 0, out: 0, deg: 0 };
  }
  for (const c of all) {
    for (const r of (c.relations || [])) {
      if (byId.has(r.target) && byId.get(r.target).id !== c.id) {
        cent[c.id].out++;
        cent[byId.get(r.target).id].in++;
      }
    }
  }
  for (const id of Object.keys(cent)) cent[id].deg = cent[id].in + cent[id].out;
  CORPUS = { byId, byName, byAlias, all, domains: Object.keys(w.XIGAI), centrality: cent };
  DOMAIN_INDEX = null;   // 语料变更 → 领域索引失效重建
}
loadCorpus();

/* 统计 */
function readStats() {
  try { return JSON.parse(fs.readFileSync(STATS_FILE, "utf8")); } catch (e) {
    return { localHits: 0, cacheHits: 0, ollamaCalls: 0, paidCalls: 0, paidSpawns: 0, webSearchCalls: 0, ingests: 0, updates: 0, dupSkips: 0, rejects: 0, errors: 0, quizzes: 0, graphragCalls: 0, rejectReasons: {}, since: Date.now(), paid: { byEntry: {}, bySource: {} } };
  }
}
function writeStats(s) { try { fs.writeFileSync(STATS_FILE, JSON.stringify(s, null, 2)); } catch (e) {} }
function bumpStat(key, by) {
  try {
    const s = readStats();
    s[key] = (s[key] || 0) + (by || 1);
    fs.writeFileSync(STATS_FILE, JSON.stringify(s, null, 2));
  } catch (e) {}
}
/* ── AI 调用策略与预算（P3/P4） ─────────────────────── */
const AI_POLICY = {
  autoPaidEnabled: false,            // 系统自动任务禁用付费（硬开关）
  searchMaxUses: 2,                  // DeepSeek web_search 每会话上限（headless patch 同步）
  budget: { perTask: { calls: 4 }, daily: { calls: 20 }, monthly: { calls: 500 } },
};
function todayStr() { const d = new Date(); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }
function monthStr() { const d = new Date(); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0"); }
/* 付费预算检查：达到上限立即阻断（返回原因或 null=允许） */
function paidBudgetCheck() {
  const s = readStats();
  const day = todayStr(), mon = monthStr();
  const d = s.paid.daily || (s.paid.daily = { date: day, calls: 0 });
  const m = s.paid.monthly || (s.paid.monthly = { month: mon, calls: 0 });
  if (d.date !== day) { d.date = day; d.calls = 0; }
  if (m.month !== mon) { m.month = mon; m.calls = 0; }
  if (d.calls >= AI_POLICY.budget.daily.calls) return "今日付费预算已用尽（" + AI_POLICY.budget.daily.calls + " 次/日）";
  if (m.calls >= AI_POLICY.budget.monthly.calls) return "本月付费预算已用尽（" + AI_POLICY.budget.monthly.calls + " 次/月）";
  return null;
}
/* 记录一次付费调用（按入口/来源），并估算 webSearch 次数（≤maxUses，预估上限） */
function bumpPaid(entry, source, tokens) {
  try {
    const s = readStats();
    s.paidCalls = (s.paidCalls || 0) + 1;
    s.paidSpawns = (s.paidSpawns || 0) + 1;
    s.paid.byEntry = s.paid.byEntry || {};
    s.paid.byEntry[entry] = (s.paid.byEntry[entry] || 0) + 1;
    s.paid.bySource = s.paid.bySource || {};
    s.paid.bySource[source] = (s.paid.bySource[source] || 0) + 1;
    s.paid.tokens = (s.paid.tokens || 0) + (tokens || 0);
    s.paid.daily = s.paid.daily || { date: todayStr(), calls: 0 };
    s.paid.monthly = s.paid.monthly || { month: monthStr(), calls: 0 };
    if (s.paid.daily.date !== todayStr()) { s.paid.daily = { date: todayStr(), calls: 0 }; }
    if (s.paid.monthly.month !== monthStr()) { s.paid.monthly = { month: monthStr(), calls: 0 }; }
    s.paid.daily.calls++; s.paid.monthly.calls++;
    s.webSearchCalls = (s.webSearchCalls || 0) + AI_POLICY.searchMaxUses;  // 预估上限（真实值在 headless 内部）
    fs.writeFileSync(STATS_FILE, JSON.stringify(s, null, 2));
  } catch (e) {}
}
function bumpReject(reason) {
  try {
    const s = readStats();
    s.rejectReasons = s.rejectReasons || {};
    s.rejectReasons[reason] = (s.rejectReasons[reason] || 0) + 1;
    s.rejects = (s.rejects || 0) + 1;
    fs.writeFileSync(STATS_FILE, JSON.stringify(s, null, 2));
  } catch (e) {}
}

/* 本地命中：不调用任何外部服务 */
function findLocal(q) {
  if (!CORPUS) loadCorpus();
  const nk = normStr(q);
  if (CORPUS.byName.has(nk)) return CORPUS.byName.get(nk);
  if (CORPUS.byAlias.has(nk)) return CORPUS.byAlias.get(nk);
  if (CORPUS.byId.has(q)) return CORPUS.byId.get(q);
  // 前缀/包含降级
  const hit = CORPUS.all.find(c => normStr(c.name) === nk || normStr(c.name).includes(nk) || nk.includes(normStr(c.name)));
  return hit || null;
}

/* 去重：名称/别名/归一化 + Levenshtein ≥0.9 */
function levenshtein(a, b) {
  const m = a.length, n = b.length;
  const d = Array.from({ length: m + 1 }, (_, i) => [i, ...Array(n).fill(0)]);
  for (let j = 0; j <= n; j++) d[0][j] = j;
  for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++)
    d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return d[m][n];
}
function dedupCheck(c) {
  const nk = normStr(c.name);
  for (const x of CORPUS.all) {
    if (normStr(x.name) === nk) return x;
    if ((x.aliases || []).some(a => normStr(a) === nk)) return x;
    if (x.name.length > 2 && c.name.length > 2) {
      const dist = levenshtein(nk, normStr(x.name));
      if (dist / Math.max(nk.length, normStr(x.name).length) < 0.1) return x;
    }
  }
  return null;
}

/* 垃圾/低可信过滤：返回原因或 null（允许入库） */
const JUNK_QUESTION = /(你好|您好|你是谁|你能|可以吗|怎么|如何|为什么|多少|什么(是|叫)|解释一下|介绍一下|帮我|写|翻译|总结|推荐|比较|区别|是不是|有没有)/;
function junkCheck(c, q) {
  const name = String(c.name || "").trim();
  const def = String(c.definition || "").trim();
  if (name.length < 2) return "名称过短";
  if (JUNK_QUESTION.test(name) && !/[一-鿿]{4,}/.test(def)) return "疑似提问而非概念";
  if (def.length < 40) return "定义过短";
  if (/(无法回答|不清楚|我不知道|抱歉|对不起，|未联网|无法获取|没有找到关于)/.test(def.slice(0, 120)) && def.length < 150) return "AI 未有效回答";
  if (/(system|ignore previous|忽略以上|破解|越狱|prompt injection)/i.test(def)) return "可疑注入内容";
  if (!(c.sources || []).length) return "无来源（低可信）";
  return null;
}

/* 修复常见 JSON 缺失逗号问题（本地小模型常见） */
function repairJSON(raw) {
  let s = raw;
  s = s.replace(/(")\s+(")/g, '$1,$2');                 // "x" "y" → "x","y"
  s = s.replace(/(["\}\]\d])\s*(?=["{])/g, '$1,');   // 值后紧跟 键/值 → 补逗号
  s = s.replace(/\}\s*\{/g, '},{');
  s = s.replace(/\]\s*\[/g, '],[');
  return s;
}
/* 从 AI 文本中提取 JSON（对象或数组） */
function extractJSON(text) {
  const t = String(text || "");
  const fenced = t.match(/```(?:json)?\s*([\s\S]*?)```/i);
  const body = fenced ? fenced[1] : t;
  const tryParse = raw0 => {
    const raw = raw0.replace(/,(\s*[}\]])/g, "$1");
    const attempts = [raw, repairJSON(raw), repairJSON(repairJSON(raw))];
    for (const a of attempts) { try { return JSON.parse(a); } catch (e) {} }
    return null;
  };
  const i0 = body.indexOf("{"); const i1 = body.lastIndexOf("}");
  if (i0 >= 0 && i1 > i0) { const r = tryParse(body.slice(i0, i1 + 1)); if (r) return r; }
  const j0 = body.indexOf("["); const j1 = body.lastIndexOf("]");
  if (j0 >= 0 && j1 > j0) { const r = tryParse(body.slice(j0, j1 + 1)); if (r) return r; }
  return null;
}
const GROW_VOCAB = ["prerequisite", "followup", "related", "dependsOn", "evolvedFrom", "appliesTo"];
/* 关系规范化：字符串→related 对象；非法类型→related；裁剪 */
function normalizeGrowRelations(rels) {
  if (!Array.isArray(rels)) return [];
  return rels.map(r => {
    if (typeof r === "string") return { type: "related", target: r };
    if (r && typeof r.target === "string" && r.target.trim()) return { type: GROW_VOCAB.includes(r.type) ? r.type : "related", target: r.target.trim(), note: r.note || "" };
    return null;
  }).filter(Boolean).slice(0, 10);
}

/* 分类：建议领域校验 → 已知领域则用之，否则 AI 生成 */
function buildDomainIndex() {
  if (DOMAIN_INDEX) return DOMAIN_INDEX;
  if (!CORPUS) loadCorpus();
  const idx = {};
  for (const c of CORPUS.all) {
    const dom = c.domain;
    if (!dom || dom === "AI 生成" || dom === "待分类") continue;
    const words = [c.name, c.field].concat(c.tags || []);
    for (const w of words) {
      if (!w || typeof w !== "string") continue;
      const k = normStr(w);
      if (k.length < 2) continue;
      idx[k] = idx[k] || {};
      idx[k][dom] = (idx[k][dom] || 0) + 1;
    }
  }
  DOMAIN_INDEX = idx;
  return idx;
}
function classifyDomain(c) {
  const suggested = String(c.field || "").trim();
  if (suggested && CORPUS.domains.includes(suggested)) return suggested;
  if (suggested && CORPUS.domains.some(d => d.includes(suggested) || suggested.includes(d))) return CORPUS.domains.find(d => d.includes(suggested) || suggested.includes(d));
  // 分段匹配："医学/免疫学" → 医学健康
  if (suggested) {
    const segs = suggested.split(/[/、,，·\s]/).map(s => s.trim()).filter(Boolean);
    for (const seg of segs) {
      if (CORPUS.domains.includes(seg)) return seg;
      const m = CORPUS.domains.find(d => d.includes(seg) || seg.includes(d));
      if (m) return m;
    }
  }
  const idx = buildDomainIndex();
  const votes = {};
  const words = [suggested, c.name].concat(c.tags || []).concat(c.aliases || []);
  for (const w of words) {
    if (!w || typeof w !== "string") continue;
    const k = normStr(w);
    const entry = idx[k];
    if (entry) for (const dom of Object.keys(entry)) votes[dom] = (votes[dom] || 0) + entry[dom];
  }
  if (Object.keys(votes).length) {
    const best = Object.entries(votes).sort((a, b) => b[1] - a[1])[0];
    if (best && best[1] >= 2) return best[0];
  }
  return "待分类";   // 无法可靠分类 → 待分类（不强行归入 AI 生成）
}

/* Ollama 结构化生成（免费优先） */
function growOllama(q, prompt) {
  return new Promise(resolve => {
    fetch("http://127.0.0.1:11434/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: "qwen2.5:7b", prompt, stream: false, options: { temperature: 0.3 } }),
      signal: AbortSignal.timeout(240000),
    }).then(r => r.json()).then(d => resolve(String(d.response || "").trim())).catch(() => resolve(null));
  });
}
/* 付费兜底：dsh headless */
function growPaid(q, prompt) {
  return new Promise(resolve => {
    const rdir = path.join(ROOT, ".cache", "research", "grow_" + Date.now());
    try { fs.mkdirSync(rdir, { recursive: true }); } catch (e) {}
    execFile(process.execPath, [DSH_BIN, "--profile", "headless", prompt],
      { cwd: rdir, timeout: 300000, maxBuffer: 16 * 1024 * 1024, windowsHide: true },
      (err, stdout) => {
        let text = "";
        try {
          const mds = fs.readdirSync(rdir).filter(f => f.endsWith(".md"));
          if (mds.length) text = fs.readFileSync(path.join(rdir, mds[0]), "utf8");
        } catch (e) {}
        text = text || String(stdout || "");
        try { fs.rmSync(rdir, { recursive: true, force: true }); } catch (e) {}
        resolve(text.trim() || null);
      });
  });
}
function growPrompt(q) {
  return [
    "你是「析概」知识库的结构化研究员。请把「" + q + "」整理为一个概念词条。",
    "只输出一个 JSON 对象，不要输出任何其他文字、代码块标记或解释。字段：",
    '{ "name": "概念名", "aliases": ["别名"], "field": "最贴切的领域名(如 人工智能/计算机术语/金融投资/前沿科技 等)", "tags": ["2-3个"], "difficulty": 1-5, "summary": "≤30字", "definition": "150-250字精确定义", "principle": "原理(可选)", "background": "80-150字", "core": ["3-4条"], "pros": ["1-3条优点"], "cons": ["1-3条缺点"], "applications": ["2-3条"], "misconceptions": ["1-2条"], "related": ["相关概念名"], "relations": [{"type":"prerequisite|followup|related|dependsOn|evolvedFrom|appliesTo","target":"概念名"}], "sources": ["1-3个真实来源URL"] }',
    "要求：事实准确；如果「" + q + "」不是一个值得收录的概念/术语（例如只是日常问题），definition 会极短并注明不可收录。",
  ].join("\n");
}

/* 入库（唯一写入口，经 writeQueue 串行；原子写 + 版本历史 + 重建语料） */
function appendConcept(domain, concept) {
  return enqueueWrite(() => {
    const dataDir = path.join(ROOT, "data");
    let file = "generated.js";
    if (domain && domain !== "AI 生成" && fs.existsSync(path.join(dataDir, domain2file(domain)))) file = domain2file(domain);
    const fp = path.join(dataDir, file);
    let w = { XIGAI: {} };
    try { new Function("window", fs.readFileSync(fp, "utf8"))(w); } catch (e) {}
    const dom = domain || "AI 生成";
    const arr = w.XIGAI[dom] || (w.XIGAI[dom] = []);
    if (arr.some(c => (concept.id && c.id === concept.id) || c.name === concept.name)) return { ok: false, dup: true };
    arr.push(concept);
    const out = "window.XIGAI = window.XIGAI || {};\nwindow.XIGAI[" + JSON.stringify(dom) + "] = " + JSON.stringify(arr, null, 2) + ";\n";
    const tmp = fp + ".tmp";
    fs.writeFileSync(tmp, out, "utf8");
    fs.renameSync(tmp, fp);   // 原子替换
    pushVersion(concept.id, dom, "create", concept);
    loadCorpus();
    return { ok: true, file, domain: dom, concept };
  });
}
function domain2file(domain) {
  const files = fs.readdirSync(path.join(ROOT, "data")).filter(f => f.endsWith(".js") && f !== "manifest.js");
  for (const f of files) {
    try {
      const w = { XIGAI: {} };
      new Function("window", fs.readFileSync(path.join(ROOT, "data", f), "utf8"))(w);
      if (w.XIGAI[domain]) return f;
    } catch (e) {}
  }
  return "generated.js";
}



/* 阈值规则：≥0.85 可自动公开(verified)；0.6~0.85 generated(后台验证)；<0.6 pending(不公开) */
function statusOf(conf) { return conf >= 0.85 ? "verified" : conf >= 0.6 ? "generated" : "pending"; }
/* 来源置信度：数量 + 权威域 + 多源一致性 */
function sourceConfidence(c) {
  const srcs = (c.sources || []).filter(Boolean);
  if (!srcs.length) return 0.1;
  let s = 0.3;
  const QUALITY = /(wikipedia|baike|edu|ac\.cn|gov|org|stanford|mit|nature|science|w3c|mdn|github|arxiv|openai|anthropic|google|microsoft|aliyun|tencent|baidu|zhihu|kepuchina|case|sci)/i;
  const doms = new Set();
  for (const u of srcs) {
    if (QUALITY.test(u)) s += 0.15;
    try { doms.add(new URL(u).hostname); } catch (e) {}
  }
  if (doms.size >= 2) s += 0.15;
  if (srcs.length >= 2) s += 0.1;
  return Math.min(1, Math.round(s * 100) / 100);
}
/* 单条关系置信度：类型基分 + 解析 + note + 同域/跨域 */
function relationConfidenceFor(type, resolved, note, fromDom, toDom) {
  const base = { related: 0.8, prerequisite: 0.85, followup: 0.85, dependsOn: 0.8, evolvedFrom: 0.75, appliesTo: 0.75 }[type] || 0.6;
  if (!resolved) return 0.3;
  let c = base;
  if (note) c += 0.1;
  if (fromDom && toDom && fromDom === toDom) c += 0.05;
  if (fromDom && toDom && fromDom !== toDom) c -= 0.05;
  return Math.min(1, Math.round(c * 100) / 100);
}
/* 关系集置信度（概念级）= 平均 */
function relationConfidence(c, corpus) {
  const rels = c.relations || [];
  if (!rels.length) return 0.3;
  const sum = rels.reduce((s, r) => s + relationConfidenceFor(r.type, corpus ? corpus.byId.has(r.target) : false, r.note, c.domain, null), 0);
  return Math.round(sum / rels.length * 100) / 100;
}
/* 低置信联网验证（免费百科 + 缓存，仅验证不重复） */
const VERIFY_DIR = path.join(ROOT, ".cache", "verify");
function verifyViaBaike(name) {
  const key = normStr(name).slice(0, 40);
  const cf = path.join(VERIFY_DIR, key + ".json");
  try {
    const st = fs.statSync(cf);
    if (Date.now() - st.mtimeMs < 7 * 864e5) return Promise.resolve(JSON.parse(fs.readFileSync(cf, "utf8")));
  } catch (e) {}
  return fetch("https://baike.baidu.com/api/openapi/BaikeLemmaCardApi?scope=103&format=json&appid=379020&bk_key=" + encodeURIComponent(name) + "&bk_length=200", { headers: { "User-Agent": "Xigai/1.0" }, signal: AbortSignal.timeout(15000) })
    .then(r => r.json()).then(d => {
      const ok = !!(d && d.title);
      const out = { ok, title: d && d.title, verified: ok, at: Date.now() };
      try { fs.mkdirSync(VERIFY_DIR, { recursive: true }); fs.writeFileSync(cf, JSON.stringify(out)); } catch (e) {}
      bumpStat("webVerifies", ok ? 1 : 1);
      return out;
    }).catch(() => ({ ok: false, verified: false, at: Date.now() }));
}

/* 独立校验：生成后由独立核查（与生成提示分离），结果参与置信度；缓存 7 天避免重复消耗 */
function verifyConceptStep(obj) {
  const key = normStr(obj.name || "").slice(0, 40);
  const cf = path.join(VERIFY_DIR, key + ".verify.json");
  try {
    const st = fs.statSync(cf);
    if (Date.now() - st.mtimeMs < VERIFY_TTL) {
      const cached = JSON.parse(fs.readFileSync(cf, "utf8"));
      if (cached && typeof cached.score === "number") { bumpStat("verifyCacheHits", 1); return Promise.resolve(cached); }
    }
  } catch (e) {}
  const prompt = [
    "你是一名独立的事实核查员（与词条生成者无关）。以下词条由 AI 生成，请逐项核对 定义/原理/关系 是否事实准确、有无明显错误或编造。",
    "词条：",
    "名称：" + (obj.name || ""),
    "定义：" + String(obj.definition || "").slice(0, 400),
    "原理：" + String(obj.principle || "").slice(0, 300),
    "关系：" + (obj.relations || []).slice(0, 5).map(r => r.type + "→" + r.target).join("；"),
    "只输出一个 JSON 对象，不要其他文字：",
    '{"score":0到1的小数,"issues":["问题1","问题2"],"note":"一句话结论"}',
    "score=1 表示完全可信；有明显事实错误或编造时 score≤0.4 并列出 issues。",
  ].join("\n");
  return growOllama(obj.name, prompt).then(text => {
    bumpStat("ollamaCalls", 1);
    const out = { by: "ollama", score: null, issues: [], note: "", at: Date.now(), cached: false };
    if (text) {
      const j = extractJSON(text);
      if (j) {
        out.score = Math.max(0, Math.min(1, Number(j.score) || 0.5));
        out.issues = Array.isArray(j.issues) ? j.issues.slice(0, 4).map(String) : [];
        out.note = String(j.note || "").slice(0, 120);
      }
    }
    bumpStat("verifies", 1);
    try { fs.mkdirSync(VERIFY_DIR, { recursive: true }); fs.writeFileSync(cf, JSON.stringify(out)); } catch (e) {}
    return out;
  });
}

function computeConfidence(c) {
  let conf = 0.5;
  const defLen = String(c.definition || "").length;
  const srcs = (c.sources || []).filter(Boolean);
  const defs = String(c.definition || "");
  // 来源质量：权威域加权
  const QUALITY = /(wikipedia|baike|edu|ac\.cn|gov|org|stanford|mit|nature|science|w3c|mdn|github|arxiv|openai|anthropic|google|microsoft|aliyun|tencent|baidu|zhihu|kepuchina|case|sci)/i;
  const qDoms = srcs.filter(s => QUALITY.test(s)).length;
  // 多源一致性：≥2 个不同域名
  const doms = new Set();
  for (const s of srcs) { try { doms.add(new URL(s).hostname); } catch (e) {} }
  // 内容完整度
  let complete = 0;
  if (defLen >= 150) conf += 0.15; else if (defLen >= 80) conf += 0.08;
  if (srcs.length >= 2) conf += 0.15; else if (srcs.length === 1) conf += 0.05;
  if (qDoms >= 2) conf += 0.15; else if (qDoms === 1) conf += 0.08;
  if (doms.size >= 2) conf += 0.10;
  if (c.definition) complete++; if (c.background) complete++; if ((c.core || []).length >= 3) complete++; if ((c.applications || []).length) complete++;
  conf += complete * 0.05;
  if (/https?:\/\//.test(defs)) conf -= 0.10;
  return Math.min(1, Math.max(0, Math.round(conf * 100) / 100));
}
function statusOf(conf) { return conf >= 0.85 ? "verified" : conf >= 0.6 ? "generated" : "pending"; }

/* 更新已有概念（force 重新验证）：保留 id/名称，替换内容，记录版本 */
function updateConcept(domain, oldConcept, newConcept) {
  return enqueueWrite(() => {
    const dataDir = path.join(ROOT, "data");
    let file = domain2file(domain);
    if (!file) file = "generated.js";
    const fp = path.join(dataDir, file);
    const w = { XIGAI: {} };
    try { new Function("window", fs.readFileSync(fp, "utf8"))(w); } catch (e) { return { ok: false }; }
    const arr = w.XIGAI[domain] || [];
    const idx = arr.findIndex(c => c.id === oldConcept.id || c.name === oldConcept.name);
    if (idx < 0) return { ok: false, error: "目标概念不存在" };
    const merged = Object.assign({}, oldConcept, newConcept, { id: oldConcept.id, name: oldConcept.name, domain: oldConcept.domain });
    // 智能合并：保留更长定义、别名/来源取并集、关系取并集去重、置信度取高
    const oldDef = String(oldConcept.definition || ""), newDef = String(newConcept.definition || "");
    if (newDef.length > oldDef.length) merged.definition = newDef; else if (oldDef) merged.definition = oldDef;
    merged.aliases = [...new Set([...(oldConcept.aliases || []), ...(newConcept.aliases || [])].map(String).filter(Boolean))].slice(0, 8);
    merged.sources = [...new Set([...(oldConcept.sources || []), ...(newConcept.sources || [])].filter(Boolean))].slice(0, 6);
    const relMap = new Map();
    for (const r of [...(oldConcept.relations || []), ...(newConcept.relations || [])]) if (r && r.target) relMap.set((r.type || "related") + "|" + r.target, r);
    merged.relations = [...relMap.values()].slice(0, 40);
    merged.confidence = Math.min(0.9, Math.max(oldConcept.confidence || 0.3, newConcept.confidence || 0.3));
    merged.verification = newConcept.verification || oldConcept.verification || null;
    merged.status = statusOf(merged.confidence);
    merged.searchedAt = new Date().toISOString().slice(0, 10);
    arr[idx] = merged;
    const out = "window.XIGAI = window.XIGAI || {};\nwindow.XIGAI[" + JSON.stringify(domain) + "] = " + JSON.stringify(arr, null, 2) + ";\n";
    const tmp = fp + ".tmp";
    fs.writeFileSync(tmp, out, "utf8");
    fs.renameSync(tmp, fp);
    pushVersion(oldConcept.id, domain, "update", merged);
    loadCorpus();
    return { ok: true, concept: merged };
  });
}


/* 结构化后统一加工：置信度拆分 + 低置信联网验证 + 关系置信度 */
function enrichConcept(obj, q) {
  obj.confidence = Math.min(0.9, computeConfidence(obj));   // conceptConfidence（自动不封顶 1）
  obj.sourceConfidence = sourceConfidence(obj);
  // 规范化别名：去"又称/又名"前缀、去重
  if (Array.isArray(obj.aliases)) {
    obj.aliases = [...new Set(obj.aliases.map(a => String(a).replace(/^(又称|又名|也称|亦作|简称|俗称|也叫|即)\s*/, "").trim()).filter(Boolean))].slice(0, 8);
  } else obj.aliases = [];
  // 关系置信度（写入每条关系）
  (obj.relations || []).forEach(r => {
    r.confidence = relationConfidenceFor(r.type, !!findLocal(r.target), r.note, classifyDomain(obj), null);
  });
  obj.relationConfidence = obj.relations && obj.relations.length
    ? Math.round(obj.relations.reduce((s, r) => s + (r.confidence || 0.3), 0) / obj.relations.length * 100) / 100
    : 0.3;
  obj.status = statusOf(obj.confidence);
  // 低置信（<0.6）→ 免费联网验证（百科，缓存），通过则提升
  if (obj.confidence < 0.6) {
    return verifyViaBaike(obj.name).then(v => {
      if (v && v.verified) {
        obj.confidence = Math.min(0.9, obj.confidence + 0.25);
        obj.sourceConfidence = Math.min(1, obj.sourceConfidence + 0.2);
        const src = "https://baike.baidu.com/item/" + encodeURIComponent(obj.name);
        if (!(obj.sources || []).includes(src)) (obj.sources = obj.sources || []).push(src);
        obj.status = statusOf(obj.confidence);
      }
      return obj;
    });
  }
  return Promise.resolve(obj);
}
/* /api/grow 主流程 */
function handleGrow(res, payload) {
  const q = String(payload.q || "").trim();
  if (!q) return send(res, 200, JSON.stringify({ ok: false, error: "缺少查询" }));
  const force = !!payload.force;
  const normQ = normStr(q);
  const cacheFile = path.join(GROW_DIR, normQ.slice(0, 40) + ".json");
  fs.mkdirSync(GROW_DIR, { recursive: true });

  // 1) 本地命中（零成本）
  const local = findLocal(q);
  if (local && !force) {
    bumpStat("localHits", 1);
    return send(res, 200, JSON.stringify({ ok: true, source: "local", concept: local }));
  }
  // 2) 缓存
  if (!force) {
    try {
      const st = fs.statSync(cacheFile);
      if (Date.now() - st.mtimeMs < GROW_TTL) {
        const cached = JSON.parse(fs.readFileSync(cacheFile, "utf8"));
        bumpStat("cacheHits", 1);
        return send(res, 200, JSON.stringify({ ok: true, source: "cache", concept: cached }));
      }
    } catch (e) {}
  }
  // 3) 联网 + AI 结构化（Ollama 优先，付费兜底）
  const prompt = growPrompt(q);
  if (!AI_POLICY.autoPaidEnabled) { /* 系统任务禁用付费（硬开关） */ }
  growOllama(q, prompt).then(async text => {
    if (!text) { bumpStat("ollamaCalls", 1); bumpStat("errors", 1); return send(res, 200, JSON.stringify({ ok: false, error: "本地模型不可用（系统自动任务已禁用付费兜底），已跳过" })); }
    bumpStat("ollamaCalls", 1);
    let obj = extractJSON(text);
    if (!obj) { bumpStat("errors", 1); return send(res, 200, JSON.stringify({ ok: false, error: "AI 输出无法解析为结构化词条" })); }
    obj.relations = normalizeGrowRelations(obj.relations);
    if (!Array.isArray(obj.pros)) obj.pros = [];
    if (!Array.isArray(obj.cons)) obj.cons = [];
    if (obj.principle == null) obj.principle = "";
    obj.id = normStr(obj.name).slice(0, 48) || "concept-" + Date.now();
    obj.provenance = { discoveredBy: "user", discoveredAt: Date.now(), evidence: "user-request:" + q.slice(0, 40) };
    obj = await enrichConcept(obj, q);
    // 4a) 独立校验（质量门）：生成与校验分离，禁止自我验证
    const v = await verifyConceptStep(obj);
    obj.verification = { by: v.by, score: v.score, issues: (v.issues || []).slice(0, 2), note: v.note, at: v.at };
    if (v.score != null) {
      obj.confidence = Math.min(0.9, Math.round((obj.confidence * 0.6 + v.score * 0.4) * 100) / 100);
      obj.status = statusOf(obj.confidence);
    }
    if (v.score != null && v.score < 0.5) {
      // 事实疑点：不直接入库，进入人工审核队列
      const mq = readModeration();
      mq.push({ status: "pending", kind: "concept-verify-fail", conceptId: obj.id || normStr(obj.name).slice(0, 48), name: obj.name, definition: String(obj.definition || "").slice(0, 200), issues: (v.issues || []).slice(0, 3), note: v.note, at: Date.now() });
      writeModeration(mq);
      bumpStat("conflictsDetected", 1);
      return send(res, 200, JSON.stringify({ ok: false, pending: true, reason: "存在事实疑点，已进入人工审核队列", verification: v }));
    }
    // 4b) 去重：已有概念优先更新/补全（不重复创建）
    const dup = dedupCheck(obj);
    if (dup) {
      bumpStat("updates", 1);
      return updateConcept(dup.domain, dup, obj).then(r => {
        if (r.ok) { try { fs.writeFileSync(cacheFile, JSON.stringify(obj)); } catch (e) {} send(res, 200, JSON.stringify({ ok: true, source: "ai", updated: true, domain: dup.domain, concept: r.concept })); }
        else send(res, 200, JSON.stringify({ ok: false, error: r.error || "更新失败" }));
      });
    }
    // 5) 可信度/垃圾过滤
    const reason = junkCheck(obj, q);
    if (reason) { bumpReject(reason); return send(res, 200, JSON.stringify({ ok: false, reject: true, reason })); }
    // 6) 分类
    const domain = classifyDomain(obj);
    // 7) 入库（串行写，status/confidence 已由 enrichConcept 按阈值设定）
    obj.searchedAt = new Date().toISOString().slice(0, 10);
    appendConcept(domain, obj).then(r => {
      if (r.ok) {
        bumpStat("ingests", 1);
        if (obj.status === "verified") bumpStat("yieldVerified", 1);
        const effRels = (obj.relations || []).filter(x => CORPUS.byId.has(x.target) && (x.confidence != null ? x.confidence : 0.6) >= 0.6).length;
        if (effRels) bumpStat("yieldRelations", effRels);
        try { fs.writeFileSync(cacheFile, JSON.stringify(obj)); } catch (e) {}
        send(res, 200, JSON.stringify({ ok: true, source: "ai", domain: r.domain, concept: obj }));
      } else if (r.dup) {
        bumpStat("dupSkips", 1);
        send(res, 200, JSON.stringify({ ok: false, dup: true, reason: "入库时发现重复" }));
      } else {
        bumpStat("errors", 1);
        send(res, 200, JSON.stringify({ ok: false, error: "入库失败" }));
      }
    });
  });
}



/* 语料指标：关系有效率 / 高置信率 */
function corpusMetrics() {
  if (!CORPUS) loadCorpus();
  const all = CORPUS.all;
  let relations = 0, resolved = 0, valid = 0, highConf = 0, publicN = 0;
  for (const c of all) {
    const rels = c.relations || [];
    relations += rels.length;
    for (const r of rels) {
      const ok = CORPUS.byId.has(r.target);
      if (ok) resolved++;
      const rc = r.confidence != null ? r.confidence : (ok ? 0.6 : 0.3);
      if (ok && rc >= 0.6) valid++;
    }
    const conf = c.confidence != null ? c.confidence : 1;  // 旧数据视为可信
    if (conf >= 0.85) highConf++;
    if (c.status !== "pending" && conf >= 0.6) publicN++;
  }
  return {
    concepts: all.length,
    relations,
    resolvedRate: relations ? Math.round(resolved / relations * 100) : 0,
    relationEfficiency: relations ? Math.round(valid / relations * 100) : 0,   // 可解析 ∧ 可信
    highConfidenceRate: all.length ? Math.round(highConf / all.length * 100) : 0,
    publicRate: all.length ? Math.round(publicN / all.length * 100) : 0,
    pending: all.filter(c => c.status === "pending" || (c.confidence != null && c.confidence < 0.6)).length,
    withConfidence: all.filter(c => c.confidence != null).length,
  };
}
/* ── AI 测试（P1-4）：Ollama 出题 + 缓存 ─────────────── */
function handleQuiz(res, payload) {
  const name = String(payload.name || "").trim();
  if (!name) return send(res, 200, JSON.stringify({ ok: false, error: "缺少概念名" }));
  const key = "quiz_" + normStr(name).slice(0, 40);
  const cacheFile = path.join(CACHE_DIR, key + ".json");
  try {
    const st = fs.statSync(cacheFile);
    if (Date.now() - st.mtimeMs < 24 * 3600e3) {
      return send(res, 200, JSON.stringify({ ok: true, cached: true, quiz: JSON.parse(fs.readFileSync(cacheFile, "utf8")) }));
    }
  } catch (e) {}
  // 附上书库已知内容帮助出题
  let context = "";
  const known = findLocal(name);
  if (known) {
    context = "概念要点：" + (known.definition || "").slice(0, 300) + " 核心：" + ((known.core || []).slice(0, 3).join("；"));
  }
  const prompt = [
    "你是「析概」知识库的出题老师。请为概念「" + name + "」出 3 道中文单选题，检验对该概念的理解。",
    context,
    "只输出一个 JSON 对象，不要任何其他文字：",
    '{"questions":[{"q":"题干","options":["选项A","选项B","选项C","选项D"],"answer":0,"explain":"解析"}]}',
    "要求：answer 为正确选项索引(0-3)；题目有区分度（含一个易错项）；解析简洁准确。",
  ].join("\n");
  growOllama(name, prompt).then(text => {
    if (!text) { bumpStat("ollamaCalls", 1); bumpStat("errors", 1); return send(res, 200, JSON.stringify({ ok: false, error: "本地模型不可用（系统任务已禁用付费）" })); }
    bumpStat("ollamaCalls", 1);
    finish(text);
    function finish(t) {
      if (!t) { bumpStat("errors", 1); return send(res, 200, JSON.stringify({ ok: false, error: "出题引擎不可用" })); }
      const obj = extractJSON(t);
      if (!obj || !Array.isArray(obj.questions) || !obj.questions.length) { bumpStat("errors", 1); return send(res, 200, JSON.stringify({ ok: false, error: "题目解析失败" })); }
      const qs = obj.questions.slice(0, 3).map(q => ({
        q: String(q.q || "").slice(0, 200),
        options: (Array.isArray(q.options) ? q.options.slice(0, 4) : []).map(String),
        answer: Math.min(3, Math.max(0, parseInt(q.answer, 10) || 0)),
        explain: String(q.explain || "").slice(0, 200),
      })).filter(q => q.q && q.options.length >= 2);
      if (!qs.length) { bumpStat("errors", 1); return send(res, 200, JSON.stringify({ ok: false, error: "题目无效" })); }
      try { fs.writeFileSync(cacheFile, JSON.stringify(qs)); } catch (e) {}
      bumpStat("quizzes", 1);
      send(res, 200, JSON.stringify({ ok: true, cached: false, quiz: qs }));
    }
  });
}


/* ═══ 阶段3（P2）：版本历史 + GraphRAG ═══ */


/* 浏览热度（客户端 openConcept 时上报，用于 Patrol 优先级） */
const HEAT_FILE = path.join(ROOT, ".cache", "heat.json");
function readHeat() { try { return JSON.parse(fs.readFileSync(HEAT_FILE, "utf8")); } catch (e) { return {}; } }
function bumpHeat(id) { try { const h = readHeat(); h[id] = (h[id] || 0) + 1; if (Object.keys(h).length > 5000) { for (const k of Object.keys(h)) if (h[k] <= 1) delete h[k]; } fs.writeFileSync(HEAT_FILE, JSON.stringify(h)); } catch (e) {} }
function handleHeat(res, payload) {
  const id = String(payload.id || "").slice(0, 60);
  if (!id) return send(res, 200, JSON.stringify({ ok: false }));
  bumpHeat(id);
  bumpStat("heatSync", 1);
  send(res, 200, JSON.stringify({ ok: true }));
}
/* ═══ P0 自维护 ═══ */
const RELPOOL_FILE = path.join(ROOT, '.cache', 'relpool.json');
const MODERATION_FILE = path.join(ROOT, '.cache', 'moderation.json');
const MAX_RELATIONS = 24;   // 普通概念关系预算
const MAX_RELATIONS_CORE = 40; // 核心节点（图谱中心度前10%）动态提高
function readRelPool() { try { return JSON.parse(fs.readFileSync(RELPOOL_FILE, 'utf8')); } catch (e) { return {}; } }
function writeRelPool(p) { try { fs.writeFileSync(RELPOOL_FILE, JSON.stringify(p)); } catch (e) {} }
function readModeration() { try { return JSON.parse(fs.readFileSync(MODERATION_FILE, 'utf8')); } catch (e) { return []; } }
function writeModeration(m) { try { fs.writeFileSync(MODERATION_FILE, JSON.stringify(m)); } catch (e) {} }

function healthScore() {
  if (!CORPUS) loadCorpus();
  const heat = readHeat();
  const cent = CORPUS.centrality || {};
  const maxDeg = Math.max(1, ...Object.values(cent).map(c => c.deg || 0));
  // 领域重要性（按领域规模归一）
  const domSize = {};
  CORPUS.all.forEach(c => { domSize[c.domain] = (domSize[c.domain] || 0) + 1; });
  const maxDom = Math.max(1, ...Object.values(domSize));
  // 核心节点：degree 前 10%
  const sortedDeg = Object.values(cent).map(c => c.deg || 0).sort((a, b) => b - a);
  const coreThreshold = sortedDeg[Math.max(0, Math.floor(sortedDeg.length * 0.1))] || 1;
  const coreIds = new Set(Object.keys(cent).filter(id => (cent[id].deg || 0) >= coreThreshold && (cent[id].deg || 0) > 0));

  let concepts = 0, compSum = 0, sourceCovered = 0, multiSource = 0, isolated = 0, pendingC = 0;
  let relations = 0, valid = 0, lowConfRels = 0, pendingRel = 0, debtSum = 0;
  let coreTotal = coreIds.size, coreComplete = 0, coreWithRel = 0;
  const pendingGrade = { high: 0, normal: 0, low: 0 };
  const conflictList = [];
  const gapList = [];
  // 前置循环冲突检测
  for (const c of CORPUS.all) {
    concepts++;
    let comp = 0;
    if (c.definition && c.definition.length >= 60) comp++;
    if (c.principle) comp++;
    if ((c.pros || []).length) comp++;
    if ((c.cons || []).length) comp++;
    if ((c.applications || []).length) comp++;
    if ((c.background || "").length >= 40) comp++;
    compSum += comp / 6;
    const srcs = (c.sources || []).filter(Boolean);
    if (srcs.length) sourceCovered++;
    const doms = new Set();
    srcs.forEach(s => { try { doms.add(new URL(s).hostname); } catch (e) {} });
    if (doms.size >= 2) multiSource++;
    if (c.status === "pending" || (c.confidence != null && c.confidence < 0.6)) pendingC++;
    const rels = c.relations || [];
    let eff = 0;
    for (const r of rels) {
      const ok = CORPUS.byId.has(r.target);
      const rc = r.confidence != null ? r.confidence : (ok ? 0.6 : 0.3);
      if (ok) { if (rc >= 0.6) eff++; } else pendingRel++;
      if (rc < 0.6) lowConfRels++;
    }
    relations += rels.length; valid += eff;
    const iso = eff < 2;
    if (iso) isolated++;
    // 知识债务：缺失字段 + 缺来源 + 低置信关系 + 孤立
    const missingCount = 6 - comp;
    let debt = missingCount / 6 * 50;
    if (!srcs.length) debt += 25;
    debt += Math.min(15, lowConfRelsIn(c, rels) * 5);
    if (iso) debt += 10;
    debt = Math.round(Math.min(100, debt));
    debtSum += debt;
    // 冲突：前置循环（A 前置 B 且 B 前置 A）
    for (const r of rels) {
      if (r.type === "prerequisite" && CORPUS.byId.has(r.target)) {
        const t = CORPUS.byId.get(r.target);
        if (t.relations && t.relations.some(x => x.type === "prerequisite" && (x.target === c.id || (CORPUS.byId.get(x.target) || {}).id === c.id))) {
          conflictList.push({ type: "prereq-cycle", a: c.id, b: r.target, aName: c.name, bName: t.name });
        }
      }
    }
    // 核心节点
    if (coreIds.has(c.id)) {
      if (eff >= 1) coreWithRel++;
      if (comp >= 4) coreComplete++;
    }
    // 缺口列表（带优先级）
    if (gapList.length < 40) {
      const heatN = heat[c.id] || 0;
      const heatMax = Math.max(1, ...Object.values(heat));
      const priority = Math.round((debt / 100) * 0.4 + (heatN / heatMax) * 0.25 + ((cent[c.id] ? cent[c.id].deg : 0) / maxDeg) * 0.25 + (domSize[c.domain] / maxDom) * 0.1 * 100);
      if (debt > 25) gapList.push({ kind: debt >= 60 ? "high-debt" : debt >= 40 ? "mid-debt" : "low-debt", id: c.id, name: c.name, domain: c.domain, debt, priority, isolated: iso, heat: heatN, degree: cent[c.id] ? cent[c.id].deg : 0 });
    }
  }
  function lowConfRelsIn(c, rels) { return rels.filter(r => (r.confidence != null ? r.confidence : (CORPUS.byId.has(r.target) ? 0.6 : 0.3)) < 0.6).length; }
  // pending 目标分级
  const pendingFreq = {};
  for (const c of CORPUS.all) {
    for (const r of (c.relations || [])) {
      if (!CORPUS.byId.has(r.target)) pendingFreq[r.target] = (pendingFreq[r.target] || 0) + 1;
    }
  }
  for (const [t, n] of Object.entries(pendingFreq)) {
    if (n >= 3) pendingGrade.high++;
    else if (n === 2) pendingGrade.normal++;
    else pendingGrade.low++;
  }
  gapList.sort((a, b) => b.priority - a.priority);
  // 学习覆盖（P1）：领域覆盖 / 核心概念覆盖 / prerequisite 覆盖 / 路径完整度 / 孤立比例
  const domSet = new Set(CORPUS.all.map(c => c.domain).filter(d => d !== "AI 生成"));
  const domSizeMap = {};
  CORPUS.all.forEach(c => { domSizeMap[c.domain] = (domSizeMap[c.domain] || 0) + 1; });
  const realDomains = [...domSet].filter(d => (domSizeMap[d] || 0) >= 3).length;
  const allDomains = domSet.size;
  let withPrereq = 0, hardWithPrereq = 0, hardTotal = 0;
  for (const c of CORPUS.all) {
    const rels = c.relations || [];
    const hasPrereq = rels.some(r => r.type === "prerequisite" && (CORPUS.byId.has(r.target) || normStr(r.target).length >= 2));
    if (hasPrereq) withPrereq++;
    if ((c.difficulty || 3) >= 3) {
      hardTotal++;
      if (rels.some(r => r.type === "prerequisite" && CORPUS.byId.has(r.target))) hardWithPrereq++;
    }
  }
  const learningCoverage = {
    domainCoverage: allDomains ? Math.round(realDomains / allDomains * 100) : 0,          // ≥3 概念的领域占比
    coreConceptCoverage: hardTotal ? Math.round(hardWithPrereq / hardTotal * 100) : 100,  // 高难度概念有可解析前置
    prerequisiteCoverage: concepts ? Math.round(withPrereq / concepts * 100) : 0,
    learningPathCompleteness: hardTotal ? Math.round(hardWithPrereq / hardTotal * 100) : 100,
    isolatedRatio: concepts ? Math.round(isolated / concepts * 100) : 0,
  };
  // 知识健康循环：最近更新质量（7天内新增/完善/复查的概念）
  const nowMs = Date.now();
  let rCount = 0, rComp = 0, rVerified = 0, rEff = 0, rRel = 0;
  for (const c of CORPUS.all) {
    const t = Math.max(
      (c.provenance && c.provenance.discoveredAt) || 0,
      (c.verification && c.verification.at) || 0,
      c.searchedAt ? new Date(String(c.searchedAt).slice(0, 10) + "T00:00:00").getTime() : 0
    );
    if (!t || nowMs - t > 7 * 864e5) continue;
    rCount++;
    let cc = 0;
    if (c.definition && c.definition.length >= 60) cc++;
    if (c.principle) cc++;
    if ((c.applications || []).length) cc++;
    rComp += cc / 3;
    if ((c.confidence || 0) >= 0.85) rVerified++;
    const rels = c.relations || [];
    const ve = rels.filter(r => CORPUS.byId.has(r.target) && (r.confidence != null ? r.confidence : 0.6) >= 0.6).length;
    rEff += ve; rRel += rels.length;
  }
  const recentUpdateQuality = rCount ? {
    count: rCount,
    avgCompleteness: Math.round(rComp / rCount * 100),
    verifiedRate: Math.round(rVerified / rCount * 100),
    relationEfficiency: rRel ? Math.round(rEff / rRel * 100) : 100,
  } : { count: 0 };
  return {
    concepts,
    avgCompleteness: concepts ? Math.round(compSum / concepts * 100) : 0,
    knowledgeDebt: concepts ? Math.round(debtSum / concepts) : 0,
    relationEfficiency: relations ? Math.round(valid / relations * 100) : 0,
    sourceCoverage: concepts ? Math.round(sourceCovered / concepts * 100) : 0,
    multiSourceRate: concepts ? Math.round(multiSource / concepts * 100) : 0,
    pending: pendingC,
    pendingRelations: pendingRel,
    pendingQuality: pendingGrade,
    isolated,
    lowConfidenceRelations: lowConfRels,
    coreNodes: coreTotal,
    coreCoverage: coreTotal ? Math.min(100, Math.round(coreWithRel / coreTotal * 100)) : 100,
    coreCompleteness: coreTotal ? Math.round(coreComplete / coreTotal * 100) : 100,
    conflicts: conflictList.length,
    conflictList: conflictList.slice(0, 10),
    relationPool: Object.keys(readRelPool()).length,
    moderationQueue: readModeration().length,
    gaps: gapList,
    recentUpdateQuality,
    learningCoverage,
  };
}

function runPatrol() {
  const h = healthScore();
  let enqueued = 0;
  const seen = new Set();
  // 1) 冲突 → moderation（不自动覆盖）
  (h.conflictList || []).slice(0, 2).forEach(cf => {
    const m = readModeration();
    if (!m.some(x => x.type === 'conflict' && x.conceptId === cf.a && x.relationTarget === cf.b)) {
      m.push({ id: 'm' + Date.now() + Math.random().toString(36).slice(2, 5), at: Date.now(), type: 'conflict', conceptId: cf.a, relationTarget: cf.b, detail: '前置循环冲突：' + cf.aName + ' ↔ ' + cf.bName, status: 'pending' });
      writeModeration(m.slice(-200));
    }
  });
  // 2) 优先级：核心概念缺字段 > 高热度缺字段 > 高价值 pending 关系 > 孤立节点 > 新概念（discover）
  const byDebt = (h.gaps || []).filter(g => g.id && g.debt > 0);
  const coreT = coreThresholdOf();
  const heatMap = readHeat();
  const coreCands = byDebt.filter(g => g.degree >= coreT);
  for (const g of coreCands) {
    if (enqueued >= 2) break;
    const key = 'enrich|' + g.id;
    if (seen.has(key)) continue;
    seen.add(key);
    if (enqueueTask('enrich', g.id, 'patrol-core', { priority: 16 })) enqueued++;
  }
  const hotCands = byDebt.filter(g => (g.heat || 0) >= 5 || (heatMap[g.id] || 0) >= 5);
  for (const g of hotCands) {
    if (enqueued >= 3) break;
    const key = 'enrich|' + g.id;
    if (seen.has(key)) continue;
    seen.add(key);
    if (enqueueTask('enrich', g.id, 'patrol-hot', { priority: 14 })) enqueued++;
  }
  // 3) 高价值 pending 关系（高频跨域目标 → 新概念）
  if (enqueued < 3) {
    const freq = {};
    for (const c of CORPUS.all) for (const r of (c.relations || [])) if (!CORPUS.byId.has(r.target)) freq[r.target] = (freq[r.target] || 0) + 1;
    const top = Object.entries(freq).sort((a, b) => b[1] - a[1])[0];
    if (top && top[1] >= 3 && enqueueTask('concept', top[0], 'patrol-pending', { priority: 15 })) enqueued++;
  }
  // 4) 孤立节点（缺关系 → 纵向补全补关系）
  if (enqueued < 3) {
    const iso = byDebt.filter(g => g.isolated);
    if (iso.length) {
      const key = 'enrich|' + iso[0].id;
      if (!seen.has(key) && enqueueTask('enrich', iso[0].id, 'patrol-isolated', { priority: 12 })) enqueued++;
    }
  }
  // 4) 自动复查：抽样低置信/旧来源/高热度概念
  if (enqueued < 3) {
    const heat = readHeat();
    const cands = CORPUS.all
      .filter(c => (c.confidence || 0.9) < 0.7 || (c.searchedAt || "").slice(0, 7) < "2026-07" || (heat[c.id] || 0) >= 5)
      .sort((a, b) => ((a.confidence || 1) - (b.confidence || 1)) || ((heat[b.id] || 0) - (heat[a.id] || 0)));
    const pick = cands[0];
    if (pick && enqueueTask('review', pick.id, 'patrol-review', { priority: 8 })) enqueued++;
  }
  bumpStat('patrolRuns', 1);
  try { seedGrowthCandidates(); } catch (e) {}
  if (GROW_QUEUE.length) setTimeout(pumpQueue, 100);
  return { ok: true, health: h, enqueued, recentUpdateQuality: h.recentUpdateQuality };
}

function applyRelationBudget(c) {
  const rels = c.relations || [];
  const cent = (CORPUS && CORPUS.centrality) || {};
  const sortedDeg = Object.values(cent).map(x => x.deg || 0).sort((a, b) => b - a);
  const coreThreshold = sortedDeg[Math.max(0, Math.floor(sortedDeg.length * 0.1))] || 1;
  const isCore = (cent[c.id] ? cent[c.id].deg : 0) >= coreThreshold && (cent[c.id] ? cent[c.id].deg : 0) > 0;
  const budget = isCore ? MAX_RELATIONS_CORE : MAX_RELATIONS;   // 核心节点动态提高
  if (rels.length <= budget) return rels;
  const sorted = rels.slice().sort((a, b) => (b.confidence || 0) - (a.confidence || 0));
  const keep = sorted.slice(0, MAX_RELATIONS);
  const overflow = sorted.slice(MAX_RELATIONS);
  const pool = readRelPool();
  pool[c.id] = (pool[c.id] || []).concat(overflow.map(r => ({ type: r.type, target: r.target, confidence: r.confidence, at: Date.now() }))).slice(-60);
  writeRelPool(pool);
  c.relations = keep;
  return keep;
}

function pushVersion(id, domain, action, concept) {
  try {
    fs.mkdirSync(VERSION_DIR, { recursive: true });
    const vf = path.join(VERSION_DIR, id + '.json');
    const hist = fs.existsSync(vf) ? JSON.parse(fs.readFileSync(vf, 'utf8')) : [];
    hist.push({ at: Date.now(), domain, action, snap: concept ? { name: concept.name, definition: concept.definition, relations: (concept.relations || []).length, confidence: concept.confidence, status: concept.status } : null });
    fs.writeFileSync(vf, JSON.stringify(hist.slice(-50), null, 2));
  } catch (e) {}
}

function handleRollback(res, payload) {
  const id = String(payload.id || '').replace(/[^a-zA-Z0-9\u4e00-\u9fa5-]/g, '').slice(0, 60);
  const vf = path.join(VERSION_DIR, id + '.json');
  try {
    const hist = JSON.parse(fs.readFileSync(vf, 'utf8'));
    const c = findLocalById(id);
    if (!c) return send(res, 200, JSON.stringify({ ok: false, error: '概念不存在' }));
    c.status = 'needs_update';
    pushVersion(id, c.domain, 'rollback', c);
    writeConcept(c).then(r => send(res, 200, JSON.stringify({ ok: true, concept: c })));
  } catch (e) { send(res, 200, JSON.stringify({ ok: false, error: '回滚失败' })); }
}

function handleFeedback(res, payload) {
  const type = ['wrong-concept', 'wrong-relation', 'duplicate', 'wrong-source'].includes(payload.type) ? payload.type : 'wrong-concept';
  const conceptId = String(payload.conceptId || '').slice(0, 60);
  const detail = String(payload.detail || '').slice(0, 500);
  const relationTarget = String(payload.relationTarget || '').slice(0, 60);
  if (!conceptId) return send(res, 200, JSON.stringify({ ok: false, error: '缺少概念' }));
  const m = readModeration();
  m.push({ id: 'm' + Date.now(), at: Date.now(), type, conceptId, relationTarget, detail, status: 'pending' });
  writeModeration(m.slice(-200));
  bumpStat('feedback', 1);
  send(res, 200, JSON.stringify({ ok: true, queued: m.length }));
}

function processModeration() {
  const m = readModeration();
  const pending = m.filter(x => x.status === 'pending' && x.conceptId && findLocalById(x.conceptId)).slice(0, 2);
  if (!pending.length) return Promise.resolve({ ok: true, processed: 0 });
  return Promise.all(pending.map(item => {
    const c = findLocalById(item.conceptId);
    if (!c) { item.status = 'ignored'; return Promise.resolve(item); }
    const prompt = ['用户对概念「' + c.name + '」提交纠错：类型=' + item.type + '，详情=' + (item.detail || '无') + (item.relationTarget ? '，关系目标=' + item.relationTarget : ''),
      '概念定义：' + (c.definition || '').slice(0, 200),
      '判断反馈是否合理，只输出 JSON：{"valid":true或false,"reason":"一句话"}'].join('\n');
    return growOllama(item.conceptId, prompt).then(text => {
      bumpStat('ollamaCalls', 1);
      const obj = extractJSON(text);
      const valid = obj && obj.valid === true;
      item.valid = valid;
      item.reason = obj && obj.reason ? String(obj.reason).slice(0, 200) : '';
      if (valid) {
        if (item.type === 'wrong-source' && item.detail && c.sources) {
          c.sources = c.sources.filter(s => !s.includes(item.detail));
          pushVersion(c.id, c.domain, 'moderation-wrong-source', c);
          writeConcept(c);
        } else if (item.type === 'wrong-relation' && item.relationTarget) {
          c.relations = (c.relations || []).filter(r => !(r.target === item.relationTarget || normStr(r.target) === normStr(item.relationTarget)));
          pushVersion(c.id, c.domain, 'moderation-wrong-relation', c);
          writeConcept(c);
        } else {
          c.status = 'needs_update';
          pushVersion(c.id, c.domain, 'moderation-flag', c);
          writeConcept(c);
        }
        item.status = 'fixed';
        bumpStat('moderationFixed', 1);
      } else { item.status = 'pending-review'; bumpStat('moderationPending', 1); }
      return item;
    }).catch(() => { item.status = 'error'; return item; });
  })).then(items => { writeModeration(m); return { ok: true, processed: items.length }; });
}


/* ═══ 主动发现：候选池 / 搜索驱动 / 溯源 / 复查 / 任务上限 ═══ */
const CANDIDATES_FILE = path.join(ROOT, ".cache", "candidates.json");
const SEARCHLOG_FILE = path.join(ROOT, ".cache", "searchlog.json");
function readCandidates() { try { return JSON.parse(fs.readFileSync(CANDIDATES_FILE, "utf8")); } catch (e) { return {}; } }
function demoteCandidate(name) {
  try {
    const c = readCandidates();
    const k = normStr(name);
    if (c[k]) { c[k].fail = (c[k].fail || 0) + 1; if (c[k].fail >= 3) delete c[k]; writeCandidates(c); }
  } catch (e) {}
}
function writeCandidates(p) { try { fs.writeFileSync(CANDIDATES_FILE, JSON.stringify(p)); } catch (e) {} }
function readSearchLog() { try { return JSON.parse(fs.readFileSync(SEARCHLOG_FILE, "utf8")); } catch (e) { return {}; } }
function writeSearchLog(p) { try { fs.writeFileSync(SEARCHLOG_FILE, JSON.stringify(p)); } catch (e) {} }
/* 搜索词登记（客户端搜索未命中时上报） */
function handleSearchLog(res, payload) {
  const q = String(payload.q || "").trim().slice(0, 30);
  const k = normStr(q);
  if (k.length >= 2) {
    const s = readSearchLog();
    s[k] = { name: q, count: (s[k] ? s[k].count : 0) + 1, at: Date.now() };
    if (s[k].count > 99) s[k].count = 99;
    writeSearchLog(s);
    bumpStat("searchLog", 1);
  }
  send(res, 200, JSON.stringify({ ok: true }));
}
/* 候选概念池生成：pending 关系目标 + 高频搜索词 + 别名（去重/规范化/垃圾过滤） */
function generateCandidates() {
  if (!CORPUS) loadCorpus();
  const cand = {};
  for (const c of CORPUS.all) for (const r of (c.relations || [])) if (!CORPUS.byId.has(r.target)) {
    const k = normStr(r.target);
    if (k.length >= 2 && !findLocal(r.target)) { cand[k] = cand[k] || { name: r.target, freq: 0, sources: {} }; cand[k].freq++; cand[k].sources.relation = true; }
  }
  const sl = readSearchLog();
  for (const k of Object.keys(sl)) {
    if (sl[k].count >= 2 && !findLocal(sl[k].name)) {
      cand[k] = cand[k] || { name: sl[k].name, freq: 0, sources: {} };
      cand[k].freq += Math.min(3, sl[k].count);
      cand[k].sources.search = true;
    }
  }
  for (const c of CORPUS.all) for (const a of (c.aliases || [])) {
    const k = normStr(a);
    if (k.length >= 2 && !findLocal(a)) {
      cand[k] = cand[k] || { name: a, freq: 0, sources: {} };
      cand[k].freq += 0.5;
      cand[k].sources.alias = true;
    }
  }
  // 生长2.0：旧式字段（prerequisites/followUps）中的缺失概念
  for (const c of CORPUS.all) for (const f of ["prerequisites", "followUps"]) for (const t of (c[f] || [])) {
    if (typeof t !== "string") continue;
    const k = normStr(t);
    if (k.length < 2 || findLocal(t)) continue;
    cand[k] = cand[k] || { name: t, freq: 0, sources: {} };
    cand[k].freq += 1;
    cand[k].sources.legacy = true;
  }
  // 生长2.0：跨域引用加权（同一缺失目标被 ≥2 个领域引用 → 交叉知识线索）
  const crossRef = {};
  for (const c of CORPUS.all) {
    for (const r of (c.relations || [])) {
      if (CORPUS.byId.has(r.target)) continue;
      const k = normStr(r.target);
      (crossRef[k] = crossRef[k] || new Set()).add(c.domain);
    }
  }
  for (const k of Object.keys(crossRef)) {
    if (cand[k] && crossRef[k].size >= 2) cand[k].freq += 1;   // 跨域交叉知识
  }
  const JUNK = /(什么|如何|怎么|为什么|是不是|有没有|好吗|可以吗|你是谁|你好|^[a-zA-Z0-9]{1,2}$|^.$)/;
  for (const k of Object.keys(cand)) if (JUNK.test(cand[k].name) || cand[k].name.length > 24) delete cand[k];
  return cand;
}
/* 自动任务上限（防爆量/防循环）：小时 6 / 日 40；队列上限 50 */
function autoCapOK() {
  const s = readStats();
  const now = new Date();
  const hk = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate() + "H" + now.getHours();
  const dk = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate();
  s.autoOps = s.autoOps || { hour: { k: "", n: 0 }, day: { k: "", n: 0 } };
  if (s.autoOps.hour.k !== hk) { s.autoOps.hour = { k: hk, n: 0 }; }
  if (s.autoOps.day.k !== dk) { s.autoOps.day = { k: dk, n: 0 }; }
  try { fs.writeFileSync(STATS_FILE, JSON.stringify(s)); } catch (e) {}
  return s.autoOps.hour.n < 6 && s.autoOps.day.n < 40 && GROW_QUEUE.length < 50;
}
function autoOpUsed() {
  const s = readStats();
  const now = new Date();
  const hk = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate() + "H" + now.getHours();
  const dk = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate();
  s.autoOps = s.autoOps || { hour: { k: "", n: 0 }, day: { k: "", n: 0 } };
  if (s.autoOps.hour.k !== hk) s.autoOps.hour = { k: hk, n: 0 };
  if (s.autoOps.day.k !== dk) s.autoOps.day = { k: dk, n: 0 };
  s.autoOps.hour.n++; s.autoOps.day.n++;
  try { fs.writeFileSync(STATS_FILE, JSON.stringify(s)); } catch (e) {}
}
/* 学习队列：任务带优先级（pump 按优先级处理） */
function queueKey(kind, key) { return kind + "|" + key; }
function enqueueTask(kind, key, source, data) {
  if (!key) return false;
  const k = queueKey(kind, key);
  const done = QUEUE_DONE.get(k);
  if (done) {
    const backoff = done.ok ? QUEUE_COOLDOWN : Math.min(QUEUE_BACKOFF_MAX, QUEUE_COOLDOWN * Math.pow(2, done.fail || 0));
    if (Date.now() - done.at < backoff) return false;   // 失败指数退避 5m→10m→…→4h
  }
  if (GROW_QUEUE.some(t => t.k === k)) return false;
  if (!autoCapOK()) return false;
  const priority = (data && data.priority) || 5;
  GROW_QUEUE.push({ k, kind, key, source, data: data || {}, at: Date.now(), priority });
  return true;
}
/* pump：按优先级处理 */
async function pumpQueue() {
  if (queueBusy) return;
  if (!GROW_QUEUE.length) {
    // 自适应：空队列 → 节流健康检查 + 主动发现补货（上限满时 enqueueTask 自会拦截）
    try {
      const st = readStats();
      let act = false;
      if (!st.lastAutoCheck || Date.now() - st.lastAutoCheck > 6 * 3600e3) { st.lastAutoCheck = Date.now(); writeStats(st); autoHealthCheck(); act = true; }
      if (!st.lastDiscover || Date.now() - st.lastDiscover > 5 * 60e3) { st.lastDiscover = Date.now(); writeStats(st); try { discoverCandidates(2); } catch (e2) {} act = true; }
      if (act) setTimeout(pumpQueue, 15000);
    } catch (e) {}
    return;
  }
  // 自适应：达到小时/日上限 → 自动暂停（每分钟重试，跨小时自动恢复；不影响用户功能）
  if (!autoCapOK()) { setTimeout(pumpQueue, 60e3); return; }
  queueBusy = true;
  GROW_QUEUE.sort((a, b) => (b.priority || 0) - (a.priority || 0) || ((b.kind === "enrich" ? 1 : 0) - (a.kind === "enrich" ? 1 : 0)));   // 同优先级先纵向补全
  const task = GROW_QUEUE.shift();
  autoOpUsed();
  const rec = (k, ok) => { const prev = QUEUE_DONE.get(k); QUEUE_DONE.set(k, { at: Date.now(), ok, fail: ok ? 0 : ((prev && prev.fail) || 0) + 1 }); if (!ok) bumpStat("taskFails", 1); };
  try {
    let r = null;
    if (task.kind === "concept") {
      const mates = GROW_QUEUE.filter(t => t.kind === "concept").slice(0, Math.max(1, batchSizeFor() - 1));
      if (mates.length) {
        mates.forEach(t => GROW_QUEUE.splice(GROW_QUEUE.indexOf(t), 1));
        const names = [task.key].concat(mates.map(t => t.key));
        const br = await growBatch(names);
        const results = (br && br.results) || [];
        rec(task.k, !!(results[0] && (results[0].ok || results[0].concept)));
        mates.forEach((t, i) => rec(t.k, !!(results[i + 1] && (results[i + 1].ok || results[i + 1].concept))));
        bumpStat("queueConcepts", names.length);
        r = br;
      } else {
        r = await growTarget({ target: task.key });
        rec(task.k, !!(r && (r.ok || r.concept)));
        bumpStat("queueConcepts", 1);
      }
    } else {
      if (task.kind === "enrich") r = await enrichConceptTask(task.key);
      else if (task.kind === "review") r = await reviewConceptTask(task.key);
      rec(task.k, !!(r && (r.ok || r.concept)));
      if (task.kind === "enrich") bumpStat("queueEnriches", 1);
      if (task.kind === "review") bumpStat("reviews", 1);
    }
  } catch (e) {
    const prev = QUEUE_DONE.get(task.k);
    QUEUE_DONE.set(task.k, { at: Date.now(), ok: false, fail: ((prev && prev.fail) || 0) + 1 });
    bumpStat("errors", 1);
    bumpStat("taskFails", 1);
  }
  queueBusy = false;
  if (GROW_QUEUE.length) setTimeout(pumpQueue, 8000);
  else {
    // 自适应：队列空闲 → 节流健康检查 + 主动发现补货
    try {
      const st = readStats();
      if (!st.lastAutoCheck || Date.now() - st.lastAutoCheck > 6 * 3600e3) {
        st.lastAutoCheck = Date.now(); writeStats(st);
        autoHealthCheck();
      }
      if (!st.lastDiscover || Date.now() - st.lastDiscover > 5 * 60e3) {
        st.lastDiscover = Date.now(); writeStats(st);
        try { discoverCandidates(2); } catch (e2) {}
      }
    } catch (e) {}
  }
}
/* 自动复查：抽样低置信/旧来源/高热度概念，重新检查；变化入版本，不确定保留旧版 */
function reviewConceptTask(id) {
  const c = findLocalById(id);
  if (!c) return Promise.resolve({ ok: false, error: "概念不存在" });
  const prompt = [
    "复查知识库概念「" + c.name + "」：现有定义=" + (c.definition || "").slice(0, 250) + " 来源=" + ((c.sources || []).slice(0, 2).join("; ")),
    "请判断并只输出 JSON：{\"confirmed\":true或false,\"note\":\"一句话\",\"conflict\":false或\"描述冲突\"}",
    "confirmed=true 表示定义与来源仍可信；conflict 若发现明显矛盾则描述。",
  ].join("\n");
  return growOllama(c.name, prompt).then(text => {
    bumpStat("ollamaCalls", 1);
    if (!text) return { ok: false, error: "本地模型不可用" };
    const obj = extractJSON(text);
    if (!obj) return { ok: false, error: "解析失败" };
    if (obj.conflict) {
      const m = readModeration();
      m.push({ id: "m" + Date.now() + Math.random().toString(36).slice(2, 5), at: Date.now(), type: "conflict", conceptId: c.id, detail: String(obj.conflict).slice(0, 200), status: "pending" });
      writeModeration(m.slice(-200));
      bumpStat("conflictsDetected", 1);
    }
    c.searchedAt = new Date().toISOString().slice(0, 10);
    // 关系质量：刷新置信度 + 清理自循环/重复（保留 pending）
    let relChanged = false;
    const seenRel = new Set();
    c.relations = (c.relations || []).filter(r => {
      if (!r || !r.target || typeof r.target !== "string") return false;
      if (r.target === c.name || r.target === c.id) { relChanged = true; return false; }   // 自循环
      const t = CORPUS.byId.get(r.target) || CORPUS.byName.get(normStr(r.target));
      const key = (r.type || "related") + "|" + (t ? t.id : normStr(r.target));
      if (seenRel.has(key)) { relChanged = true; return false; }                            // 重复
      seenRel.add(key);
      const nc = relationConfidenceFor(r.type, !!t, r.note, c.domain, t && t.domain);
      if (r.confidence == null || Math.abs(r.confidence - nc) > 0.05) { r.confidence = nc; relChanged = true; }
      return true;
    });
    pushVersion(c.id, c.domain, obj.confirmed ? "review-pass" : "review-uncertain", c);
    if (obj.confirmed || relChanged) { writeConcept(c); }
    return { ok: true, confirmed: !!obj.confirmed, conflict: !!obj.conflict, note: obj.note, relationsRefreshed: relChanged };
  });
}
/* 主动发现入口（升级版 /api/discover）：生成候选→按优先级入队 */
function discoverCandidates(limit) {
  if (!CORPUS) loadCorpus();
  const fresh = generateCandidates();
  const pool = readCandidates();
  let merged = 0;
  for (const k of Object.keys(fresh)) {
    if (!pool[k]) { pool[k] = Object.assign({ fail: 0 }, fresh[k]); merged++; }
  }
  if (merged) writeCandidates(pool);
  try { seedGrowthCandidates(); } catch (e) {}
  const refreshed = readCandidates();
  bumpStat("candidatesFound", Object.keys(refreshed).length);
  const scored = prioritizeCandidates(50);
  let added = 0;
  const addedList = [];
  for (const s of scored.slice(0, limit || 3)) {
    if (enqueueTask("concept", s.name, "discover", { priority: Math.min(20, 5 + Math.round(s.score)) })) {
      added++;
      addedList.push({ name: s.name, score: s.score, fail: s.fail, source: s.source });
      if (refreshed[normStr(s.name)]) delete refreshed[normStr(s.name)];
    }
  }
  writeCandidates(refreshed);
  setTimeout(pumpQueue, 100);
  return { candidates: Object.keys(refreshed).length, enqueued: added, top: addedList, queue: GROW_QUEUE.length };
}
function handleDiscover2(res, payload) {
  const limit = Math.min(5, Math.max(1, payload.limit || 3));
  send(res, 200, JSON.stringify(Object.assign({ ok: true }, discoverCandidates(limit))));
}

function handleVersion(res, payload) {
  const id = String(payload.id || "").replace(/[^a-zA-Z0-9\u4e00-\u9fa5-]/g, "").slice(0, 60);
  const vf = path.join(VERSION_DIR, id + ".json");
  try {
    const hist = JSON.parse(fs.readFileSync(vf, "utf8"));
    return send(res, 200, JSON.stringify({ ok: true, versions: hist.slice(-20) }));
  } catch (e) { return send(res, 200, JSON.stringify({ ok: true, versions: [] })); }
}

/* GraphRAG-lite：本地命中 → 图谱扩展（1跳相关概念上下文）→ Ollama 生成 */
function graphContext(q) {
  if (!CORPUS) loadCorpus();
  const nk = normStr(q);
  const seeds = CORPUS.all.filter(c =>
    normStr(c.name) === nk || normStr(c.name).includes(nk) || nk.includes(normStr(c.name)) ||
    (c.aliases || []).some(a => normStr(a) === nk)
  ).slice(0, 3);
  if (!seeds.length) return { seed: null, context: "" };
  const seen = new Set(seeds.map(s => s.id));
  const ctx = [];
  for (const s of seeds) {
    ctx.push("· " + s.name + "（" + s.domain + "）：" + (s.definition || "").slice(0, 200));
    for (const r of (s.relations || [])) {
      const t = CORPUS.byId.get(r.target);
      if (t && !seen.has(t.id)) { seen.add(t.id); ctx.push("  ↳相关[" + r.type + "] " + t.name + "（" + t.domain + "）：" + (t.definition || "").slice(0, 140)); }
    }
  }
  return { seed: seeds[0], context: ctx.join("\n").slice(0, 2400) };
}
function handleGraphRag(res, payload) {
  const q = String(payload.q || "").trim();
  if (!q) return send(res, 200, JSON.stringify({ ok: false, error: "问题为空" }));
  const { seed, context } = graphContext(q);
  const prompt = [
    "你是「析概」知识库的 AI 解析员。用户问题：" + q,
    context ? "以下是知识图谱中与之相关的概念信息（GraphRAG 上下文）：\n" + context : "（书库未找到直接相关概念）",
    "请结合上下文与你的知识，用简体中文清晰回答：先一句话核心结论，再展开关键细节与相关概念。300-700 字。",
  ].join("\n");
  growOllama(q, prompt).then(text => {
    if (!text) { bumpStat("ollamaCalls", 1); bumpStat("errors", 1); return send(res, 200, JSON.stringify({ ok: false, error: "本地模型不可用（系统任务已禁用付费）" })); }
    bumpStat("ollamaCalls", 1);
    finish(text);
    function finish(t) {
      if (!t) { bumpStat("errors", 1); return send(res, 200, JSON.stringify({ ok: false, error: "引擎不可用" })); }
      bumpStat("graphragCalls", 1);
      send(res, 200, JSON.stringify({ ok: true, text: stripPreamble(t), seed: seed ? seed.name : null, ctxCount: context ? context.split("\n").length : 0 }));
    }
  });
}


/* ── P5：AI 回答中的概念识别（提取候选概念名） ───────── */
function handleExtract(res, payload) {
  const text = String(payload.text || "").trim();
  if (!text || text.length < 20) return send(res, 200, JSON.stringify({ ok: false, error: "文本过短" }));
  const prompt = [
    "从下面这段文字中提取 3-6 个值得收录为「知识词条」的概念/术语（名词性、有独立含义；排除人名、公司名、普通动词与口语）。",
    "只输出 JSON 数组，如 [\"概念1\",\"概念2\"]，不要任何其他文字。",
    "文字：",
    text.slice(0, 1500),
  ].join("\n");
  growOllama(text.slice(0, 20), prompt).then(t => {
    if (!t) { bumpStat("ollamaCalls", 1); bumpStat("errors", 1); return send(res, 200, JSON.stringify({ ok: false, error: "本地模型不可用（系统任务已禁用付费）" })); }
    bumpStat("ollamaCalls", 1);
    finish(t);
    function finish(t) {
      if (!t) { bumpStat("errors", 1); return send(res, 200, JSON.stringify({ ok: false, error: "引擎不可用" })); }
      const arr = extractJSON(t) || [];
      const names = (Array.isArray(arr) ? arr : Array.isArray(arr.questions) ? arr.questions : []).map(String).map(s => s.trim()).filter(s => s.length >= 2 && s.length <= 24).slice(0, 6);
      const out = names.map(n => {
        const c = findLocal(n);
        if (c) return { name: n, exists: true, concept: c, status: c.status, confidence: c.confidence, verification: c.verification || null, domain: c.domain };
        return { name: n, exists: false };
      });
      send(res, 200, JSON.stringify({ ok: true, concepts: out }));
    }
  });
}


/* ═══ 关系目标自动补全（核心闭环） ═══ */
const GROW_INFLIGHT = new Map();      // target → promise（单飞：同一目标并发只允许一个任务）
const PENDING_FILE = path.join(ROOT, ".cache", "pending.json");
const PENDING_COOLDOWN = 30 * 60e3;   // 失败冷却 30 分钟
function readPending() { try { return JSON.parse(fs.readFileSync(PENDING_FILE, "utf8")); } catch (e) { return {}; } }
function writePending(p) { try { fs.writeFileSync(PENDING_FILE, JSON.stringify(p)); } catch (e) {} }

/* 批量查询关系目标状态：exists / cacheHit / pending / growing */
function handleCompletionStatus(res, payload) {
  const targets = (Array.isArray(payload.targets) ? payload.targets : []).map(String).filter(Boolean).slice(0, 20);
  const out = {};
  const pending = readPending();
  for (const t of targets) {
    const local = findLocal(t);
    if (local) { out[t] = { status: "ready", id: local.id }; continue; }
    if (GROW_INFLIGHT.has(normStr(t))) { out[t] = { status: "growing" }; continue; }
    const p = pending[normStr(t)];
    if (p && Date.now() - p.at < PENDING_COOLDOWN) { out[t] = { status: "pending", at: p.at }; continue; }
    const cache = fs.existsSync(path.join(GROW_DIR, normStr(t).slice(0, 40) + ".json"));
    out[t] = { status: cache ? "cached" : "todo" };
  }
  send(res, 200, JSON.stringify({ ok: true, statuses: out }));
}

/* 后台补全单个目标（本地→缓存→Ollama 结构化→去重→质量→入库；禁付费；单飞） */
/* 生成后统一管线：独立校验 → 去重/更新 → 垃圾过滤 → 分类入库（growTarget 与 growBatch 共用） */
async function processGeneratedConcept(obj, meta) {
  const query = meta.query || obj.name || "";
  const wkey = candSrcKey(meta.poolSource || meta.provenanceSource);   // 自适应权重键（候选池来源优先）
  if (!meta.skipPrep) {
    if (!Array.isArray(obj.pros)) obj.pros = [];
    if (!Array.isArray(obj.cons)) obj.cons = [];
    if (obj.principle == null) obj.principle = "";
    obj.relations = normalizeGrowRelations(obj.relations);
    obj.id = normStr(obj.name).slice(0, 48) || "concept-" + Date.now();
    obj.provenance = obj.provenance || { discoveredBy: meta.provenanceSource || "system", discoveredAt: Date.now(), evidence: "candidate:" + (meta.provenanceSource || "system") };
    obj = await enrichConcept(obj, query);
  }
  const v = meta.preVerified || await verifyConceptStep(obj);
  obj.verification = { by: v.by, score: v.score, issues: (v.issues || []).slice(0, 2), note: v.note, at: v.at };
  if (v.score != null) {
    obj.confidence = Math.min(0.9, Math.round((obj.confidence * 0.6 + v.score * 0.4) * 100) / 100);
    obj.status = statusOf(obj.confidence);
  }
  if (v.score != null && v.score < 0.5) {
    const mq = readModeration();
    mq.push({ status: "pending", kind: "concept-verify-fail", conceptId: obj.id || meta.key, name: obj.name, definition: String(obj.definition || "").slice(0, 200), issues: (v.issues || []).slice(0, 3), note: v.note, at: Date.now() });
    writeModeration(mq);
    bumpStat("conflictsDetected", 1);
    candWeightAdjust(wkey, -0.2);
    return { ok: false, pending: true, reason: "存在事实疑点，已进入人工审核队列" };
  }
  const dup = dedupCheck(obj);
  if (dup) {
    bumpStat("updates", 1);
    const ur = await updateConcept(dup.domain, dup, obj);
    if (ur.ok) {
      if ((ur.concept && ur.concept.status) === "verified") bumpStat("yieldVerified", 1);
      candWeightAdjust(wkey, +0.1);
      try { if (meta.cacheFile) fs.writeFileSync(meta.cacheFile, JSON.stringify(obj)); } catch (e) {}
      if (meta.key) { const p = readPending(); delete p[meta.key]; writePending(p); }
      const cpool = readCandidates(); const ck = normStr(obj.name); if (cpool[ck]) { delete cpool[ck]; writeCandidates(cpool); }
      return { ok: true, source: "update", updated: true, concept: ur.concept };
    }
    bumpStat("dupSkips", 1);
    candWeightAdjust(wkey, -0.2);
    return { ok: true, source: "dup", concept: dup };
  }
  const reason = junkCheck(obj, query);
  if (reason) { bumpReject(reason); candWeightAdjust(wkey, -0.2); return { ok: false, reject: true, reason }; }
  const domain = classifyDomain(obj);
  obj.searchedAt = new Date().toISOString().slice(0, 10);
  const r = await appendConcept(domain, obj);
  if (r.ok) {
    bumpStat("ingests", 1);
    if (obj.status === "verified") bumpStat("yieldVerified", 1);
    candWeightAdjust(wkey, +0.1);   // 入库成功 → 该来源候选增权
    const effRels = (obj.relations || []).filter(x => CORPUS.byId.has(x.target) && (x.confidence != null ? x.confidence : 0.6) >= 0.6).length;
    if (effRels) bumpStat("yieldRelations", effRels);
    try { if (meta.cacheFile) fs.writeFileSync(meta.cacheFile, JSON.stringify(obj)); } catch (e) {}
    if (meta.key) { const p = readPending(); delete p[meta.key]; writePending(p); }
    const cpool = readCandidates(); const ck = normStr(obj.name); if (cpool[ck]) { delete cpool[ck]; writeCandidates(cpool); }
    return { ok: true, source: "ai", domain, concept: obj };
  }
  if (r.dup) { bumpStat("dupSkips", 1); return { ok: true, source: "dup" }; }
  return { ok: false, error: r.error || "入库失败" };
}
/* 批处理：一次 Ollama 调用生成 2 个候选概念（各自仍走独立校验质量门） */
function batchSizeFor() { try { const s = readStats(); return Math.max(2, Math.min(8, s.batchSize || 4)); } catch (e) { return 4; } }
function batchSizeAdjust(delta) {
  try {
    const s = readStats();
    s.batchSize = Math.max(2, Math.min(8, (s.batchSize || 4) + delta));
    fs.writeFileSync(STATS_FILE, JSON.stringify(s, null, 2));
  } catch (e) {}
}
function growBatch(names) {
  const targets = names.filter(Boolean).slice(0, batchSizeFor());
  if (!targets.length) return Promise.resolve({ ok: false, error: "空批" });
  const listHtml = targets.map((t, i) => (i + 1) + ". " + t).join("\n");
  const prompt = [
    "你是「析概」知识库的结构化研究员。请把以下 " + targets.length + " 个概念各整理为一个概念词条：",
    listHtml,
    "只输出一个 JSON 数组（长度 " + targets.length + "，与上面顺序一一对应），每个元素是词条对象，字段：",
    '{ "name": "概念名", "aliases": ["别名"], "field": "最贴切的领域名", "tags": ["2-3个"], "difficulty": 1-5, "summary": "≤25字", "definition": "100-160字精确定义", "principle": "原理(一句话)", "core": ["2-3条"], "applications": ["2条"], "relations": [{"type":"prerequisite|followup|related","target":"概念名"}], "sources": ["1-2个真实来源URL"] }',
    "严格限制长度：definition 与 principle 合计 ≤ 200 字/词条，整个数组 ≤ 2500 字；不要输出额外说明。",
  ].join("\n");
  const key = "batch:" + targets.join("+").slice(0, 30);
  if (GROW_INFLIGHT.has(key)) return GROW_INFLIGHT.get(key);
  const task = (async () => {
    const text = await growOllama(key, prompt);
    bumpStat("ollamaCalls", 1);
    bumpStat("batchCalls", 1);
    if (!text) {
      targets.forEach(t => demoteCandidate(t));
      batchSizeAdjust(-2);   // 全失败 → 降级小批
      return { ok: false, error: "本地模型不可用" };
    }
    const arr = extractJSON(text);
    if (!Array.isArray(arr) || !arr.length) {
      targets.forEach(t => demoteCandidate(t));
      batchSizeAdjust(-2);   // 解析失败 → 降级小批
      return { ok: false, error: "批量解析失败" };
    }
    const results = [];
    const missing = [];      // 批内缺失项 → 单概念降级重试
    const prepped = [];
    for (let i = 0; i < targets.length; i++) {
      const obj = arr[i] && typeof arr[i] === "object" ? arr[i] : null;
      if (!obj || !obj.name) { missing.push(targets[i]); continue; }
      if (!Array.isArray(obj.pros)) obj.pros = [];
      if (!Array.isArray(obj.cons)) obj.cons = [];
      if (obj.principle == null) obj.principle = "";
      obj.relations = normalizeGrowRelations(obj.relations);
      obj.id = normStr(obj.name).slice(0, 48) || "concept-" + Date.now();
      obj.provenance = { discoveredBy: "batch", discoveredAt: Date.now(), evidence: "candidate:batch" };
      try { obj = await enrichConcept(obj, targets[i]); } catch (e) {}
      prepped.push({ obj, target: targets[i], idx: i });
    }
    // 批量校验：2 词条一次调用（各词条仍独立判定）
    for (let i = 0; i < prepped.length; i += 2) {
      const pair = prepped.slice(i, i + 2);
      const vs = await verifyConceptBatch(pair.map(p => p.obj));
      for (let j = 0; j < pair.length; j++) {
        const p = pair[j];
        const cacheFile = path.join(GROW_DIR, normStr(p.target).slice(0, 40) + ".json");
        const _ps = (readCandidates()[normStr(p.target)] && readCandidates()[normStr(p.target)].source) || "batch";
        const r = await processGeneratedConcept(p.obj, { query: p.target, cacheFile, key: normStr(p.target), provenanceSource: "batch", poolSource: _ps, skipPrep: true, preVerified: vs[j] });
        results[p.idx] = Object.assign({ name: p.obj.name }, r);
      }
    }
    // 批内缺失项 → 单概念降级重试（不浪费已生成部分）
    for (const mname of missing) {
      const fb = await growTarget({ target: mname, source: "batch-fallback" });
      const idx = targets.indexOf(mname);
      results[idx] = Object.assign({ name: mname }, fb);
    }
    // 补齐缺失位
    for (let i = 0; i < targets.length; i++) if (!results[i]) results[i] = { name: targets[i], ok: false, error: "批内缺失" };
    const okN = results.filter(r => r && (r.ok || r.concept)).length;
    if (okN >= Math.ceil(targets.length * 0.6)) batchSizeAdjust(+1);   // 成功率高 → 增批
    else batchSizeAdjust(-1);
    return { ok: true, results };
  })();
  GROW_INFLIGHT.set(key, task);
  task.finally(() => GROW_INFLIGHT.delete(key)).catch(() => {});
  return task;
}

function growTarget(payload) {
  const raw = String(payload.target || "").trim();
  const provenanceSource = String(payload.source || "system").slice(0, 20);
  const target = raw.length > 40 ? raw.slice(0, 40) : raw;
  if (!target) return Promise.resolve({ ok: false, error: "目标为空" });
  const key = normStr(target);
  if (GROW_INFLIGHT.has(key)) return GROW_INFLIGHT.get(key);   // 单飞复用
  const task = (async () => {
    // 1) 本地命中（0 调用）
    const local = findLocal(target);
    if (local) return { ok: true, source: "local", concept: local };
    // 2) 缓存
    const cacheFile = path.join(GROW_DIR, key.slice(0, 40) + ".json");
    try {
      const st = fs.statSync(cacheFile);
      if (Date.now() - st.mtimeMs < 7 * 864e5) {
        bumpStat("cacheHits", 1);
        return { ok: true, source: "cache", concept: JSON.parse(fs.readFileSync(cacheFile, "utf8")) };
      }
    } catch (e) {}
    // 3) Ollama 结构化（系统自动：禁付费）
    const prompt = growPrompt(target);
    const text = await growOllama(target, prompt);
    bumpStat("ollamaCalls", 1);
    if (!text) {
      const p = readPending(); p[key] = { at: Date.now(), reason: "ollama-empty" }; writePending(p);
      demoteCandidate(target);
      return { ok: false, error: "本地模型不可用", pending: true };
    }
    let obj = extractJSON(text);
    if (!obj) {
      const p = readPending(); p[key] = { at: Date.now(), reason: "parse-fail" }; writePending(p);
      return { ok: false, error: "结构化解析失败", pending: true };
    }
    const _poolSrc = (readCandidates()[normStr(target)] && readCandidates()[normStr(target)].source) || provenanceSource;
    const pipe = await processGeneratedConcept(obj, { query: target, cacheFile, key, provenanceSource, poolSource: _poolSrc });
    return pipe;
  })();
  GROW_INFLIGHT.set(key, task);
  task.finally(() => GROW_INFLIGHT.delete(key)).catch(() => {});
  return task;
}
function handleGrowTarget(res, payload) {
  growTarget(payload).then(d => send(res, 200, JSON.stringify(d)));
}

/* 关系维护：解析→id、删无效/自循环/垃圾目标，报告有效率 */
function handleMaintain(res) {
  if (!CORPUS) loadCorpus();
  let relations = 0, resolved = 0, valid = 0, dropped = 0, rewritten = 0, lowConf = 0;
  const JUNK_TARGET = /(什么|如何|怎么|为什么|是不是|有没有|好吗|可以吗|你是谁|你好|^\d+$|^.$)/;
  for (const c of CORPUS.all) {
    const keep = [];
    const seen = new Set();
    for (const r of (c.relations || [])) {
      if (!r || typeof r.target !== "string" || !r.target.trim()) { dropped++; continue; }
      const type = GROW_VOCAB.includes(r.type) ? r.type : "related";
      let t = CORPUS.byId.get(r.target) || CORPUS.byName.get(normStr(r.target)) || CORPUS.byAlias.get(normStr(r.target));
      if (!t) {
        // 模糊解析：目标包含某概念名（长度差 ≤6）→ 重写为该概念 id
        const nk = normStr(r.target);
        if (nk.length >= 2) {
          const hit = CORPUS.all.find(x => {
            const xn = normStr(x.name);
            if (!xn || x.id === c.id) return false;
            const a = nk.indexOf(xn), b = xn.indexOf(nk);
            return (a >= 0 && nk.length - xn.length <= 6) || (b >= 0 && xn.length - nk.length <= 6);
          });
          if (hit) t = hit;
        }
      }
      if (t && t.id === c.id) { dropped++; continue; }                       // 自循环
      const targetVal = t ? t.id : r.target;
      if (!t && JUNK_TARGET.test(r.target)) { dropped++; continue; }          // 垃圾目标
      const key = type + "|" + targetVal;
      if (seen.has(key)) { dropped++; continue; }                             // 重复
      seen.add(key);
      // 关系置信度：未解析=待补全(pending)，不删除；仅自循环/重复/垃圾删除
      const conf = relationConfidenceFor(type, !!t, r.note, c.domain, t && t.domain);
      if (!t) lowConf++;
      if (t && r.target !== t.id) { rewritten++; }                            // 名称→id 重写
      keep.push({ type, target: targetVal, note: r.note || "", confidence: conf });
      relations++;
      if (t) resolved++;
      if (t && conf >= 0.6) valid++;
    }
    c.relations = applyRelationBudget(c);   // 关系预算：超额进候选池
    c.relationConfidence = c.relations.length ? Math.round(c.relations.reduce((s, x) => s + (x.confidence || 0.3), 0) / c.relations.length * 100) / 100 : 0.3;
  }
  // 回写数据文件
  const dataDir = path.join(ROOT, "data");
  for (const name of CORPUS.domains) {
    const f = domain2file(name);
    if (!f) continue;
    const fp = path.join(dataDir, f);
    const w = { XIGAI: {} };
    try { new Function("window", fs.readFileSync(fp, "utf8"))(w); } catch (e) { continue; }
    const arr = w.XIGAI[name] || [];
    for (const c of arr) {
      const cc = CORPUS.byId.get(c.id || normStr(c.name));
      if (cc && cc.relations) c.relations = cc.relations;
    }
    const out = "window.XIGAI = window.XIGAI || {};\nwindow.XIGAI[" + JSON.stringify(name) + "] = " + JSON.stringify(arr, null, 2) + ";\n";
    const tmp = fp + ".tmp";
    try { fs.writeFileSync(tmp, out, "utf8"); fs.renameSync(tmp, fp); } catch (e) {}
  }
  loadCorpus();
  send(res, 200, JSON.stringify({ ok: true, relations, resolved, rate: relations ? Math.round(resolved / relations * 100) : 0, valid, validRate: relations ? Math.round(valid / relations * 100) : 0, dropped, rewritten, pendingRelations: lowConf }));
}


/* ═══ 自增长任务队列（横向补全 + 纵向补全） ═══ */
const GROW_QUEUE = [];
const QUEUE_DONE = new Map();        // key → {at, ok, fail}  去重/冷却/失败退避
const QUEUE_COOLDOWN = 5 * 60e3;     // 成功任务冷却 5 分钟
const QUEUE_BACKOFF_MAX = 4 * 3600e3; // 失败最大退避 4 小时
let queueBusy = false;

/* 纵向补全：为概念生成缺失字段（principle/pros/cons/applications/misconceptions） */
function enrichConceptTask(id) {
  const c = findLocalById(id);
  if (!c) return Promise.resolve({ ok: false, error: "概念不存在" });
  const missing = [];
  if (!c.principle) missing.push("principle(原理)");
  if (!(c.pros || []).length) missing.push("pros(优点)");
  if (!(c.cons || []).length) missing.push("cons(缺点)");
  if (!(c.applications || []).length) missing.push("applications(应用)");
  if (!(c.misconceptions || []).length) missing.push("misconceptions(误解)");
  if (!missing.length) return Promise.resolve({ ok: true, noop: true });
  const eff = (c.relations || []).filter(r => findLocal(r.target) && (r.confidence != null ? r.confidence : 0.6) >= 0.6).length;
  const relReq = eff < 2 ? ',"relations":[{"type":"related","target":"已收录概念A","reason":"依据1"},{"type":"prerequisite","target":"已收录概念B","reason":"依据2"}]' : "";
  const prompt = [
    "为概念「" + c.name + "」补充以下缺失字段。已知定义：" + (c.definition || "").slice(0, 300),
    "只输出一个 JSON 对象（不要其他文字），只包含有意义的字段：",
    '{"principle":"原理(机制/工作方式，100-200字)","pros":["优点1","优点2"],"cons":["缺点1"],"applications":["应用1"],"misconceptions":["误解1"]' + relReq + "}",
    "缺失字段：" + missing.join("、") + "。已存在字段不要重复输出。" + (relReq ? " 必须输出 2-4 条 relations，target 必须是知识库中确实已收录的概念名（如 图灵机、机器学习、算法复杂度 这类真实存在的概念），reason 写一句依据。": ""),
  ].join("\n");
  return growOllama(c.name, prompt).then(text => {
    bumpStat("ollamaCalls", 1);
    if (!text) return { ok: false, error: "本地模型不可用" };
    const obj = extractJSON(text);
    if (!obj) return { ok: false, error: "解析失败" };
    // 合并（仅缺失字段）
    // principle 规范化：嵌套对象取首个字符串值，数组取 join，避免 [object Object]
    let princRaw = obj.principle;
    if (princRaw && typeof princRaw === "object") {
      if (Array.isArray(princRaw)) princRaw = princRaw.join("；");
      else princRaw = Object.values(princRaw).find(v => typeof v === "string") || Object.values(princRaw).filter(v => typeof v === "object").map(v => JSON.stringify(v)).join("；");
    }
    if (c.principle == null && princRaw) c.principle = String(princRaw).slice(0, 400);
    if (!(c.pros || []).length && Array.isArray(obj.pros)) c.pros = obj.pros.slice(0, 4).map(String);
    if (!(c.cons || []).length && Array.isArray(obj.cons)) c.cons = obj.cons.slice(0, 4).map(String);
    if (!(c.applications || []).length && Array.isArray(obj.applications)) c.applications = obj.applications.slice(0, 4).map(String);
    if (!(c.misconceptions || []).length && Array.isArray(obj.misconceptions)) c.misconceptions = obj.misconceptions.slice(0, 3).map(String);
    c.confidence = Math.min(0.9, computeConfidence(c));
    c.status = statusOf(c.confidence);
    c.searchedAt = new Date().toISOString().slice(0, 10);
    // 孤立概念补关系：仅保留可解析目标，带 evidence（禁止无依据建边）
    const eff = (c.relations || []).filter(r => CORPUS.byId.has(r.target) && (r.confidence != null ? r.confidence : 0.6) >= 0.6).length;
    if (eff < 2 && Array.isArray(obj.relations) && obj.relations.length) {
      const kept = [];
      for (const r of obj.relations.slice(0, 6)) {
        const t = CORPUS.byId.get(r.target) || CORPUS.byName.get(normStr(r.target)) || CORPUS.byAlias.get(normStr(r.target));
        if (t && t.id !== c.id && !(c.relations || []).some(x => x.type === (GROW_VOCAB.includes(r.type) ? r.type : "related") && x.target === t.id)) {
          kept.push({ type: GROW_VOCAB.includes(r.type) ? r.type : "related", target: t.id, evidence: String(r.reason || r.note || "纵向补全发现").slice(0, 120), confidence: relationConfidenceFor(r.type, true, r.note, c.domain, t.domain) });
        }
      }
      if (kept.length) {
        c.relations = (c.relations || []).concat(kept).slice(0, MAX_RELATIONS);
        bumpStat("relationsAdded", kept.length);
      }
    }
    return writeConcept(c);
  });
}
function findLocalById(id) {
  if (!CORPUS) loadCorpus();
  return CORPUS.byId.get(id) || null;
}
function writeConcept(c) {
  return enqueueWrite(() => {
    const domain = c.domain || "AI 生成";
    const file = domain2file(domain) || "generated.js";
    const fp = path.join(ROOT, "data", file);
    const w = { XIGAI: {} };
    try { new Function("window", fs.readFileSync(fp, "utf8"))(w); } catch (e) { return { ok: false }; }
    const arr = w.XIGAI[domain] || [];
    const idx = arr.findIndex(x => x.id === c.id || x.name === c.name);
    if (idx >= 0) arr[idx] = c; else arr.push(c);
    const out = "window.XIGAI = window.XIGAI || {};\nwindow.XIGAI[" + JSON.stringify(domain) + "] = " + JSON.stringify(arr, null, 2) + ";\n";
    const tmp = fp + ".tmp";
    try { fs.writeFileSync(tmp, out, "utf8"); fs.renameSync(tmp, fp); } catch (e) { return { ok: false }; }
    pushVersion(c.id, domain, "enrich", c);
    loadCorpus();
    return { ok: true, concept: c };
  });
}
/* 队列处理入口 */
function handleEnqueue(res, payload) {
  const kind = payload.kind === "enrich" ? "enrich" : payload.kind === "review" ? "review" : "concept";
  const key = String(kind === "concept" ? payload.target : payload.id || "").trim();
  const added = enqueueTask(kind, key, payload.source || "user", payload);
  setTimeout(pumpQueue, 100);
  send(res, 200, JSON.stringify({ ok: true, added, queue: GROW_QUEUE.length }));
}
/* 自动发现：扫描待补全关系目标 → 入队（按被引用频次） */



/* 生长2.0：最近动态（最近新增/最近完善/正在补全） */
function handleRecentActivity(res) {
  if (!CORPUS) loadCorpus();
  const nowMs = Date.now();
  const pick = (list, n) => list.slice(0, n).map(c => ({ id: c.id, name: c.name, domain: c.domain, difficulty: c.difficulty || 3, status: c.status }));
  const added = CORPUS.all.filter(c => c.provenance && c.provenance.discoveredAt).sort((a, b) => b.provenance.discoveredAt - a.provenance.discoveredAt);
  const refined = CORPUS.all.filter(c => c.verification && c.verification.at).sort((a, b) => b.verification.at - a.verification.at);
  const byTouch = CORPUS.all
    .map(c => ({ c, t: Math.max((c.provenance && c.provenance.discoveredAt) || 0, (c.verification && c.verification.at) || 0, c.searchedAt ? new Date(String(c.searchedAt).slice(0, 10) + "T00:00:00").getTime() : 0) }))
    .filter(x => x.t > 0 && nowMs - x.t < 14 * 864e5)
    .sort((a, b) => b.t - a.t)
    .map(x => x.c);
  const gaps = healthScore().gaps.filter(g => g.kind !== "low-debt").slice(0, 6);
  const growing = gaps.map(g => ({ id: g.id, name: g.name, domain: g.domain, debt: g.debt, isolated: g.isolated, heat: g.heat, degree: g.degree }));
  send(res, 200, JSON.stringify({
    ok: true,
    recentAdded: pick(added, 6),
    recentlyRefined: pick(refined, 6),
    recentlyTouched: pick(byTouch, 6),
    growing,
    at: nowMs,
  }));
}
/* 生长2.0：显式触发健康检查（只记录不修改） */
function handleHealthCheck(res) {
  const log = autoHealthCheck();
  send(res, 200, JSON.stringify({ ok: true, log }));
}
/* 生长2.0：触发候选播种 + 断层提议（Ollama 缓存） */
function handleSeedCandidates(res, payload) {
  const s1 = seedGrowthCandidates();
  learningGapCandidates(Number((payload && payload.limit) || 3)).then(s2 => {
    send(res, 200, JSON.stringify({ ok: true, seeded: s1 + s2, subdomainLegacy: s1, pathGaps: s2, pool: Object.keys(readCandidates()).length }));
  }).catch(e => send(res, 200, JSON.stringify({ ok: false, error: String(e).slice(0, 120) })));
}



/* ═══ P0 候选质量：多因子评分 + 低价值过滤 + 近似去重 + 失败冷却 ═══ */
function coreThresholdOf() {
  const cent = (CORPUS && CORPUS.centrality) || {};
  const sortedDeg = Object.values(cent).map(x => x.deg || 0).sort((a, b) => b - a);
  return sortedDeg[Math.max(0, Math.floor(sortedDeg.length * 0.1))] || 1;
}
function candSrcKey(src) { return String(src || "relation").split(":")[0]; }
function candWeightAdjust(source, delta) {
  try {
    const s = readStats();
    s.candidateWeights = s.candidateWeights || {};
    const k = candSrcKey(source);
    const w = (s.candidateWeights[k] == null ? 1.0 : s.candidateWeights[k]) + delta;
    s.candidateWeights[k] = Math.max(0.3, Math.min(2.0, Math.round(w * 10) / 10));
    fs.writeFileSync(STATS_FILE, JSON.stringify(s, null, 2));
  } catch (e) {}
}
function scoreCandidate(name, cand) {
  if (!CORPUS) loadCorpus();
  const cent = (CORPUS && CORPUS.centrality) || {};
  const coreT = coreThresholdOf();
  const heat = readHeat();
  let score = (cand.freq || 1);
  const s = readStats();
  const w = (s.candidateWeights && s.candidateWeights[candSrcKey(cand.source)]) || 1.0;
  score *= w;   // 自适应：该来源候选的历史成功率权重
  const src = cand.sources || {};
  if (src.cross) score += 1;             // 跨域引用
  if (src.legacy) score += 0.5;          // 旧式字段
  if (src.subdomain) score += 1.5;       // 子领域代表概念
  if (src["path-gap"]) score += 1.5;     // 学习路径缺口
  const refs = CORPUS.all.filter(c => (c.relations || []).some(r => normStr(r.target) === normStr(name) && CORPUS.byId.has(c.id)));
  const coreRefs = refs.filter(c => (cent[c.id] ? cent[c.id].deg : 0) >= coreT).length;
  if (coreRefs) score += coreRefs * 2;   // 核心节点关联
  const heatSum = refs.reduce((s, c) => s + (heat[c.id] || 0), 0);
  if (heatSum) score += Math.min(2, heatSum / 10);
  const domSizes = {};
  refs.forEach(c => { domSizes[c.domain] = (domSizes[c.domain] || 0) + 1; });
  if (Object.values(domSizes).some(n => n < 8)) score += 1;   // 领域重要性（藏书少领域）
  if ((cand.fail || 0) >= 2) score *= 0.2;                    // 连续失败冷却
  else if ((cand.fail || 0) >= 1) score *= 0.5;
  return Math.round(score * 10) / 10;
}
function lowValueCandidate(name) {
  const n = String(name || "").trim();
  if (n.length < 2 || n.length > 12) return true;
  if (/[？?]/.test(n)) return true;
  if (/^(什么是|什么叫做|如何|怎样|怎么|为什么|有哪些|介绍一下|解释)/.test(n)) return true;
  if (/与|和|及其|包括|以及/.test(n)) return true;
  if (/(问题|概述|导论|入门|基本概念|相关知识|主要内容|介绍|方法|方式|方面|领域|体系|应用场景|案例)$/.test(n)) return true;
  if (/^[a-zA-Z0-9]{1,2}$/.test(n)) return true;
  if (/^[a-zA-Z0-9]+$/.test(n) && n.length < 4) return true;
  return false;
}
function dedupeCandidate(name) {
  if (!CORPUS) loadCorpus();
  const k = normStr(name);
  for (const c of CORPUS.all) {
    const ck = normStr(c.name);
    if (ck === k || (c.aliases || []).some(a => normStr(a) === k)) return true;
    if (ck.length > 2 && k.length > 2) {
      const d = levenshtein(k, ck);
      if (d / Math.max(k.length, ck.length) < 0.15) return true;   // 近似名
    }
  }
  return false;
}
function prioritizeCandidates(limit) {
  if (!CORPUS) loadCorpus();
  const pool = readCandidates();
  const sc = [];
  for (const k of Object.keys(pool)) {
    const cand = pool[k];
    if (!cand || !cand.name) continue;
    if (lowValueCandidate(cand.name)) continue;
    if (findLocal(cand.name) || dedupeCandidate(cand.name)) continue;
    sc.push({ name: cand.name, score: scoreCandidate(cand.name, cand), fail: cand.fail || 0, source: cand.source || "" });
  }
  sc.sort((a, b) => b.score - a.score);
  // 候选间近似去重（编辑距离 <0.2 只留高分者），避免同义候选重复进 Ollama
  const final = [];
  for (const c of sc) {
    const cb = normStr(c.name);
    let dup = false;
    for (const f of final) {
      const fb = normStr(f.name);
      if (cb.length > 2 && fb.length > 2) {
        const d = levenshtein(cb, fb);
        if (d / Math.max(cb.length, fb.length) < 0.2) { dup = true; break; }
      }
    }
    if (!dup) final.push(c);
  }
  return final.slice(0, limit || 10);
}


/* ═══ P1 纵向生长：为高难度概念补前置关系（学习路径完整度） ═══ */
function buildLearningPaths(limit) {
  if (!CORPUS) loadCorpus();
  const heat = readHeat();
  const cands = CORPUS.all
    .filter(c => (c.difficulty || 3) >= 3 && c.status !== "pending" && !(c.relations || []).some(r => r.type === "prerequisite"))
    .sort((a, b) => (heat[b.id] || 0) - (heat[a.id] || 0) || ((b.relations || []).length - (a.relations || []).length))
    .slice(0, limit || 5);
  const jobs = cands.map(c => {
    const key = normStr(c.name).slice(0, 30);
    const cf = path.join(SUBDOMAIN_DIR, "path-" + key + ".json");
    try {
      const st = fs.statSync(cf);
      if (Date.now() - st.mtimeMs < VERIFY_TTL) return Promise.resolve(JSON.parse(fs.readFileSync(cf, "utf8")));
    } catch (e) {}
    // 知识库候选：仅同域（防跨域污染），按中心度排序
    const cent = CORPUS.centrality || {};
    const same = CORPUS.all.filter(x => x.domain === c.domain && x.id !== c.id && (x.difficulty || 3) <= (c.difficulty || 3)).sort((a, b) => (cent[b.id] ? cent[b.id].deg : 0) - (cent[a.id] ? cent[a.id].deg : 0)).slice(0, 24).map(x => x.name);
    const opts = [...new Set(same)];
    if (opts.length < 2) return Promise.resolve({ name: c.name, prereqs: [], at: Date.now(), skipped: true });
    const prompt = [
      "知识库概念「" + c.name + "」（领域：" + c.domain + "）",
      "以下知识库已收录的概念中，哪些是学习它之前应先掌握的？从中选 2-3 个最相关的前置概念（只能从列表选，不要自创）。",
      "候选：" + (opts.join("、") || "（无）"),
      '只输出 JSON 数组：["前置概念1","前置概念2"]',
    ].join("\n");
    return growOllama(c.name, prompt).then(text => {
      bumpStat("ollamaCalls", 1);
      const out = { name: c.name, prereqs: [], at: Date.now() };
      if (text) {
        const arr = extractJSON(text);
        if (Array.isArray(arr)) out.prereqs = arr.map(String).map(s => s.trim()).filter(s => s.length >= 2 && s.length <= 12 && !/与|和|及其|包括|以及/.test(s)).slice(0, 3);
      }
      try { fs.mkdirSync(SUBDOMAIN_DIR, { recursive: true }); fs.writeFileSync(cf, JSON.stringify(out)); } catch (e) {}
      return out;
    });
  });
  return Promise.all(jobs).then(results => {
    let addedRel = 0;
    for (const r of results) {
      const c = CORPUS.all.find(x => x.name === r.name);
      if (!c) continue;
      const existing = new Set((c.relations || []).map(x => (x.type || "related") + "|" + normStr(x.target)));
      const newRels = [];
      for (const p of (r.prereqs || [])) {
        if (!p || normStr(p) === normStr(c.name)) continue;
        const key = "prerequisite|" + normStr(p);
        if (existing.has(key)) continue;
        const t = CORPUS.byId.get(p) || CORPUS.byName.get(normStr(p)) || CORPUS.byAlias.get(normStr(p));
        newRels.push({ type: "prerequisite", target: t ? t.id : p, note: "", confidence: relationConfidenceFor("prerequisite", !!t, "", c.domain, t && t.domain), evidence: t ? "学习路径补全（目标已收录）" : "" });
        existing.add(key);
      }
      if (newRels.length) {
        c.relations = (c.relations || []).concat(newRels).slice(0, 40);
        pushVersion(c.id, c.domain, "path-enrich", c);
        writeConcept(c);
        bumpStat("relationsAdded", newRels.length);
        addedRel += newRels.length;
      }
    }
    loadCorpus();
    return addedRel;
  });
}
function handleBuildPaths(res, payload) {
  const limit = Number((payload && payload.limit) || 5);
  buildLearningPaths(limit).then(added => {
    const h = healthScore();
    send(res, 200, JSON.stringify({ ok: true, addedRelations: added, health: { concepts: h.concepts, debt: h.knowledgeDebt, relEff: h.relationEfficiency, learning: h.learningCoverage, pendingR: h.pendingRelations } }));
  }).catch(e => send(res, 200, JSON.stringify({ ok: false, error: String(e).slice(0, 120) })));
}

/* 效率指标：候选→入库转化率 / Ollama-新增比 / 重复率 / 失败率 / 关系增长 / 完整度提升 */
function handleEfficiency(res) {
  if (!CORPUS) loadCorpus();
  const s = readStats();
  const h = healthScore();
  const candDisc = s.candidatesFound || 0;
  const prev = s.lastEfficiency;
  const candSince = candDisc - ((prev && prev.cumCandidates) || 0);
  const ingestSince = (s.ingests || 0) - ((prev && prev.ingests) || 0);
  const queuedSince = (s.queueConcepts || 0) - ((prev && prev.queueConcepts) || 0);
  const ollamaSince = (s.ollamaCalls || 0) - ((prev && prev.ollamaCalls) || 0);
  const verSince = (s.yieldVerified || 0) - ((prev && prev.yieldVerified) || 0);
  const relSince = (s.yieldRelations || 0) - ((prev && prev.yieldRelations) || 0);
  const e = {
    ok: true,
    at: Date.now(),
    windowConversionRate: candSince > 0 ? Math.round(ingestSince / candSince * 1000) / 10 : 0,   // 窗口候选→入库 %
    windowTaskSuccessRate: queuedSince > 0 ? Math.round(ingestSince / queuedSince * 100) : 0,
    windowOllamaPerConcept: ingestSince > 0 ? Math.round(ollamaSince / ingestSince * 10) / 10 : 0,
    dupRate: (s.queueConcepts || 0) ? Math.round((s.dupSkips || 0) / s.queueConcepts * 100) : 0,
    failRate: (s.queueConcepts || 0) ? Math.round((s.taskFails || 0) / s.queueConcepts * 100) : 0,
    relationsGrowth: s.relationsAdded || 0,
    funnel: {
      candidates: candDisc,
      generated: s.queueConcepts || 0,
      verified: s.yieldVerified || 0,
      ingested: s.ingests || 0,
      updated: s.updates || 0,
      dupSkips: s.dupSkips || 0,
      rejects: s.rejects || 0,
      errors: s.errors || 0,
    },
    rejectRate: (s.queueConcepts || 0) ? Math.round((s.rejects || 0) / s.queueConcepts * 100) : 0,
    ollamaPerVerified: verSince > 0 ? Math.round(ollamaSince / verSince * 10) / 10 : 0,
    yieldVerified: verSince, yieldRelations: relSince,
    effectiveGrowthRate: ollamaSince > 0 ? Math.round((verSince + relSince) / ollamaSince * 100) / 100 : 0,   // 每次 Ollama 调用产出的 verified+有效关系
    ollamaSince,
    batchCalls: s.batchCalls || 0,
    cum: { candidates: candDisc, ingests: s.ingests || 0, updates: s.updates || 0, dupSkips: s.dupSkips || 0, errors: s.errors || 0, taskFails: s.taskFails || 0, queueConcepts: s.queueConcepts || 0, ollamaCalls: s.ollamaCalls || 0, yieldVerified: s.yieldVerified || 0, yieldRelations: s.yieldRelations || 0 },
    completeness: h.avgCompleteness, debt: h.knowledgeDebt, relEff: h.relationEfficiency,
    learning: h.learningCoverage,
  };
  if (prev && prev.completeness != null) {
    e.delta = { completeness: e.completeness - prev.completeness, debt: e.debt - prev.debt, relEff: e.relEff - prev.relEff };
  }
  e.cumCandidates = candDisc;
  s.lastEfficiency = e;
  writeStats(s);
  send(res, 200, JSON.stringify(e));
}

/* ═══ P0 自动维护：自循环/明确垃圾目标 → 确认后清除（留 version，重算 Health） ═══ */
const MAINT_FILE = path.join(ROOT, ".cache", "maintenance.json");
function readMaint() { try { return JSON.parse(fs.readFileSync(MAINT_FILE, "utf8")); } catch (e) { return []; } }
function writeMaint(m) { try { fs.writeFileSync(MAINT_FILE, JSON.stringify(m)); } catch (e) {} }
function scanMaintenance() {
  if (!CORPUS) loadCorpus();
  const JUNK_T = /(什么|如何|怎么|为什么|是不是|有没有|好吗|可以吗|你是谁|你好|^.$)/;
  const items = [];
  for (const c of CORPUS.all) {
    for (const r of (c.relations || [])) {
      const t = r.target;
      if (!t || typeof t !== "string") continue;
      const k = normStr(t);
      const resolvable = CORPUS.byId.has(t) || CORPUS.byName.has(k) || CORPUS.byAlias.has(k);
      if (t === c.name || t === c.id) items.push({ kind: "self-loop", conceptId: c.id, conceptName: c.name, domain: c.domain, target: t, type: r.type, at: Date.now() });
      else if (!resolvable && JUNK_T.test(t)) items.push({ kind: "junk-target", conceptId: c.id, conceptName: c.name, domain: c.domain, target: t, type: r.type, at: Date.now() });
    }
  }
  return items;
}
function applyMaintenance() {
  if (!CORPUS) loadCorpus();
  const items = scanMaintenance();
  const queue = readMaint();
  const mq = new Map(queue.map(x => [x.conceptId + "|" + x.target + "|" + x.type, x]));
  let removed = 0, versions = 0;
  for (const it of items) {
    const key = it.conceptId + "|" + it.target + "|" + it.type;
    if (mq.has(key) && mq.get(key).confirmed === false) continue;   // 人工驳回
    // 自循环：定义性错误，直接确认；垃圾目标：明确无意义才清
    if (it.kind === "self-loop" || it.kind === "junk-target") {
      const c = findLocalById(it.conceptId);
      if (!c) continue;
      const before = (c.relations || []).length;
      c.relations = (c.relations || []).filter(x => !(x.type === it.type && (x.target === it.target || normStr(x.target) === normStr(it.target))));
      if (c.relations.length < before) {
        pushVersion(c.id, c.domain, "maintain-remove-" + it.kind, c);
        writeConcept(c);
        mq.set(key, { conceptId: it.conceptId, conceptName: it.conceptName, domain: it.domain, target: it.target, type: it.type, kind: it.kind, confirmed: true, removedAt: Date.now() });
        removed++; versions++;
      }
    }
  }
  writeMaint([...mq.values()].slice(-200));
  loadCorpus();                       // 重算前刷新语料
  const h = healthScore();            // 自动重算 Health
  bumpStat("maintenanceRuns", 1);
  bumpStat("relationsRemoved", removed);
  return { ok: true, scanned: items.length, removed, versions, health: { concepts: h.concepts, debt: h.knowledgeDebt, relEff: h.relationEfficiency, pendingR: h.pendingRelations, isolated: h.isolated, conflicts: h.conflicts } };
}
function handleMaintenance(res) {
  const r = applyMaintenance();
  send(res, 200, JSON.stringify(r));
}

/* 批量独立校验：一次 Ollama 调用校验 2 个词条（缓存 7 天，省 50% 校验调用） */
function verifyConceptBatch(objs) {
  const items = objs.slice(0, 2);
  if (!items.length) return Promise.resolve([]);
  const key = "vbatch:" + items.map(o => normStr(o.name).slice(0, 20)).join("+");
  const cf = path.join(VERIFY_DIR, key + ".json");
  try {
    const st = fs.statSync(cf);
    if (Date.now() - st.mtimeMs < VERIFY_TTL) {
      const cached = JSON.parse(fs.readFileSync(cf, "utf8"));
      if (Array.isArray(cached) && cached.length === items.length) { bumpStat("verifyCacheHits", 1); return Promise.resolve(cached); }
    }
  } catch (e) {}
  const lines = items.map((o, i) =>
    "词条" + (i + 1) + "：名称=" + (o.name || "") + "，定义=" + String(o.definition || "").slice(0, 300) + "，原理=" + String(o.principle || "").slice(0, 200) + "，关系=" + (o.relations || []).slice(0, 4).map(r => r.type + "→" + r.target).join("；")
  ).join("\n");
  const prompt = [
    "你是一名独立的事实核查员（与词条生成者无关）。以下 " + items.length + " 个词条由 AI 生成，请逐项核对定义/原理/关系是否事实准确、有无明显错误或编造。",
    lines,
    '只输出一个 JSON 数组（长度 ' + items.length + '，与上面顺序一一对应）：[{"score":0到1,"issues":["问题"],"note":"一句话"},...]',
    "score=1 表示完全可信；有明显事实错误或编造时 score≤0.4 并列出 issues。",
  ].join("\n");
  return growOllama("vbatch:" + items[0].name, prompt).then(text => {
    bumpStat("ollamaCalls", 1);
    const out = items.map(() => ({ by: "ollama", score: null, issues: [], note: "", at: Date.now(), cached: false }));
    if (text) {
      const arr = extractJSON(text);
      if (Array.isArray(arr)) {
        items.forEach((o, i) => {
          const j = arr[i] || {};
          out[i].score = Math.max(0, Math.min(1, Number(j.score) || 0.5));
          out[i].issues = Array.isArray(j.issues) ? j.issues.slice(0, 3).map(String) : [];
          out[i].note = String(j.note || "").slice(0, 120);
        });
      }
    }
    bumpStat("verifies", items.length);
    try { fs.mkdirSync(VERIFY_DIR, { recursive: true }); fs.writeFileSync(cf, JSON.stringify(out)); } catch (e) {}
    return out;
  });
}

/* ═══ 领域体系扩展：覆盖分析 → 子领域候选 → 校验落盘 ═══ */
const SUBDOMAIN_DIR = path.join(ROOT, ".cache", "subdomains");
const SUBDOMAIN_FILE = path.join(SUBDOMAIN_DIR, "hierarchy.json");
function readSubdomains() { try { return JSON.parse(fs.readFileSync(SUBDOMAIN_FILE, "utf8")); } catch (e) { return {}; } }
function writeSubdomains(h) { try { fs.mkdirSync(SUBDOMAIN_DIR, { recursive: true }); fs.writeFileSync(SUBDOMAIN_FILE, JSON.stringify(h)); } catch (e) {} }
function domainCoverage() {
  if (!CORPUS) loadCorpus();
  const size = {}, debt = {}, isolated = {}, cross = {};
  for (const c of CORPUS.all) {
    size[c.domain] = (size[c.domain] || 0) + 1;
    if (!c.principle || !(c.applications || []).length) debt[c.domain] = (debt[c.domain] || 0) + 1;
    const rels = (c.relations || []).filter(r => CORPUS.byId.has(r.target));
    const cc = rels.filter(r => CORPUS.byId.get(r.target).domain !== c.domain).length;
    cross[c.domain] = (cross[c.domain] || 0) + cc;
    if (rels.length < 2) isolated[c.domain] = (isolated[c.domain] || 0) + 1;
  }
  return Object.keys(size).filter(d => d !== "AI 生成").map(d => {
    const n = size[d];
    const priority = (n < 8 ? 3 : 0) + ((debt[d] || 0) >= n * 0.5 ? 2 : 0) + ((cross[d] || 0) >= 3 ? 1 : 0) + ((isolated[d] || 0) >= n * 0.5 ? 1 : 0);
    return { domain: d, size: n, debt: debt[d] || 0, isolated: isolated[d] || 0, cross: cross[d] || 0, priority };
  }).sort((a, b) => b.priority - a.priority);
}
function proposeSubdomains(domain) {
  const key = normStr(domain).slice(0, 30);
  const cf = path.join(SUBDOMAIN_DIR, key + ".propose.json");
  try {
    const st = fs.statSync(cf);
    if (Date.now() - st.mtimeMs < VERIFY_TTL) return Promise.resolve(JSON.parse(fs.readFileSync(cf, "utf8")));
  } catch (e) {}
  const prompt = [
    "知识库「析概」的领域「" + domain + "」需要建立「子领域 → 概念」的体系。",
    "请基于该领域的通用知识体系，提出 3-5 个子领域，每个子领域给出：名称、边界（一句话）、2-3 个代表性概念名（该领域常见、成体系、有独立知识含量的概念）。",
    '只输出 JSON 数组：[{"name":"子领域名","boundary":"边界说明","reps":["概念1","概念2"]}]',
    "要求：子领域边界清晰、互不重叠；代表概念真实存在；宁缺毋滥，不要为凑数编造。",
  ].join("\n");
  return growOllama(domain, prompt).then(text => {
    bumpStat("ollamaCalls", 1);
    const out = { domain, subs: [], at: Date.now() };
    if (text) {
      const arr = extractJSON(text);
      if (Array.isArray(arr)) out.subs = arr.slice(0, 5).map(s => ({ name: String(s.name || "").trim(), boundary: String(s.boundary || "").slice(0, 80), reps: Array.isArray(s.reps) ? s.reps.slice(0, 4).map(String) : [] })).filter(s => s.name.length >= 2);
    }
    bumpStat("subdomainProposals", 1);
    try { fs.mkdirSync(SUBDOMAIN_DIR, { recursive: true }); fs.writeFileSync(cf, JSON.stringify(out)); } catch (e) {}
    return out;
  });
}
function validateSubdomains(domain, subs) {
  const out = [];
  for (const s of (subs || [])) {
    const matched = [];
    for (const rp of (s.reps || [])) {
      const c = CORPUS.byId.get(rp) || CORPUS.byName.get(normStr(rp)) || CORPUS.byAlias.get(normStr(rp));
      if (c && c.domain === domain && !matched.includes(c.id)) matched.push(c.id);
    }
    if (matched.length < 2) {
      const sk = normStr(s.name);
      for (const c of CORPUS.all) {
        if (c.domain !== domain || matched.length >= 6) continue;
        const tagHit = (c.tags || []).some(t => { const tk = normStr(t); return tk && (tk.includes(sk) || sk.includes(tk)); });
        const nameHit = normStr(c.name).includes(sk) || (c.aliases || []).some(a => normStr(a).includes(sk));
        if ((tagHit || nameHit) && !matched.includes(c.id)) matched.push(c.id);
      }
    }
    if (matched.length >= 2) out.push({ name: s.name, boundary: s.boundary || "", concepts: [...new Set(matched)].slice(0, 8), at: Date.now() });
  }
  return out;
}
/* 生长2.0：候选播种（子领域代表概念 + 旧式字段） */
function seedGrowthCandidates() {
  if (!CORPUS) loadCorpus();
  const cpool = readCandidates();
  let seeded = 0;
  const hier = readSubdomains();
  for (const dom of Object.keys(hier)) {
    for (const s of (hier[dom] || [])) {
      for (const rp of (s.reps || [])) {
        if (findLocal(rp)) continue;
        const k = normStr(rp);
        if (k.length < 2 || cpool[k]) continue;
        cpool[k] = { name: rp, fail: 0, source: "subdomain:" + dom + "/" + s.name, at: Date.now() };
        seeded++;
      }
    }
  }
  for (const c of CORPUS.all) {
    for (const f of ["prerequisites", "followUps"]) {
      for (const t of (c[f] || [])) {
        if (typeof t !== "string" || findLocal(t)) continue;
        const k = normStr(t);
        if (k.length < 2 || cpool[k]) continue;
        cpool[k] = { name: t, fail: 0, source: "legacy:" + f, at: Date.now() };
        seeded++;
      }
    }
  }
  if (seeded) { writeCandidates(cpool); bumpStat("candidatesSeeded", seeded); }
  return seeded;
}
/* 生长2.0：学习路径断层 → 缺失前置概念候选（Ollama 提议，7天缓存） */
function learningGapCandidates(limit) {
  if (!CORPUS) loadCorpus();
  const heat = readHeat();
  const cands = CORPUS.all
    .filter(c => (c.difficulty || 3) >= 4 && c.status !== "pending" && !(c.relations || []).some(r => r.type === "prerequisite" && CORPUS.byId.has(r.target)))
    .sort((a, b) => (heat[b.id] || 0) - (heat[a.id] || 0))
    .slice(0, limit || 3);
  const cpool = readCandidates();
  let seeded = 0;
  const jobs = cands.map(c => {
    const key = normStr(c.name).slice(0, 30);
    const cf = path.join(SUBDOMAIN_DIR, "gap-" + key + ".json");
    try {
      const st = fs.statSync(cf);
      if (Date.now() - st.mtimeMs < VERIFY_TTL) return Promise.resolve(JSON.parse(fs.readFileSync(cf, "utf8")));
    } catch (e) {}
    const prompt = [
      "知识库中概念「" + c.name + "」难度较高，但缺少前置概念（prerequisite）。",
      "请提议 1-2 个学习它之前应先掌握的**单一概念名词**（2-8 个字，如「线性代数」「编译原理」；不要短语、不要句子、不要含「与/和/及其」的连接式表述）。",
      '只输出 JSON 数组：["前置概念1","前置概念2"]',
    ].join("\n");
    const JUNK_PHRASE = /与|和|及其|基本概念|相关知识|主要内容|包括|以及|(概念|关系|原理)$/;
    return growOllama(c.name, prompt).then(text => {
      bumpStat("ollamaCalls", 1);
      const out = { name: c.name, prereqs: [], at: Date.now() };
      if (text) { const arr = extractJSON(text); if (Array.isArray(arr)) out.prereqs = arr.map(String).map(s => s.trim()).filter(s => s.length >= 2 && s.length <= 12 && !JUNK_PHRASE.test(s)).slice(0, 2); }
      try { fs.mkdirSync(SUBDOMAIN_DIR, { recursive: true }); fs.writeFileSync(cf, JSON.stringify(out)); } catch (e) {}
      return out;
    });
  });
  return Promise.all(jobs).then(results => {
    for (const r of results) {
      for (const p of (r.prereqs || [])) {
        if (findLocal(p)) continue;
        const k = normStr(p);
        if (k.length < 2 || cpool[k]) continue;
        cpool[k] = { name: p, fail: 0, source: "path-gap:" + r.name, at: Date.now() };
        seeded++;
      }
    }
    if (seeded) { writeCandidates(cpool); bumpStat("candidatesSeeded", seeded); }
    return seeded;
  });
}
/* 生长2.0：自动健康检查（每次增长后/定时，只记录不修改数据） */
function autoHealthCheck() {
  if (!CORPUS) loadCorpus();
  let dups = {}, selfLoops = 0, junkTargets = 0, noSource = 0;
  const JUNK_T = /(什么|如何|怎么|为什么|是不是|有没有|好吗|可以吗|你是谁|你好|^\d+$|^.$)/;
  for (const c of CORPUS.all) {
    if (!(c.sources || []).length) noSource++;
    for (const r of (c.relations || [])) {
      const t = r.target;
      if (typeof t === "string" && t) {
        const k = normStr(t);
        const resolvable = CORPUS.byId.has(t) || CORPUS.byName.has(k) || CORPUS.byAlias.has(k);
        if (JUNK_T.test(t) && !resolvable) junkTargets++;
        if (t === c.name || t === c.id) selfLoops++;
        if (CORPUS.byId.has(t) || CORPUS.byName.get(k)) { const other = CORPUS.byId.get(t) || CORPUS.byName.get(k); if (other && other.id !== c.id && other.name === c.name) dups[c.name] = (dups[c.name] || 0) + 1; }
      }
    }
  }
  const h = healthScore();
  const log = {
    at: Date.now(),
    concepts: CORPUS.all.length,
    duplicateNames: Object.keys(dups).length,
    selfLoops, junkTargets, noSource,
    isolated: h.isolated, conflicts: h.conflicts, debt: h.knowledgeDebt, pendingRel: h.pendingRelations,
  };
  try { fs.mkdirSync(path.join(ROOT, ".cache"), { recursive: true }); fs.appendFileSync(path.join(ROOT, ".cache", "healthlog.jsonl"), JSON.stringify(log) + "\n"); } catch (e) {}
  bumpStat("autoChecks", 1);
  return log;
}

function handleDomainAnalysis(res, payload) {
  const build = !!(payload && payload.build);
  const coverage = domainCoverage();
  const h = readSubdomains();
  const result = { ok: true, coverage: coverage.slice(0, 12), hierarchy: h, built: [] };
  if (build) {
    const priority = coverage.slice(0, 4);
    Promise.all(priority.map(d => proposeSubdomains(d.domain))).then(results => {
      const nh = Object.assign({}, h);
      for (const r of results) {
        if (!r.subs || !r.subs.length) continue;
        const valid = validateSubdomains(r.domain, r.subs);
        if (valid.length) { nh[r.domain] = valid; result.built.push({ domain: r.domain, subdomains: valid.length }); }
      }
      writeSubdomains(nh);
      result.hierarchy = nh;
      send(res, 200, JSON.stringify(result));
    }).catch(e => send(res, 200, JSON.stringify(Object.assign(result, { error: String(e).slice(0, 120) }))));
    return;
  }
  send(res, 200, JSON.stringify(result));
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, "http://x");
  if (url.pathname === "/api/health") return send(res, 200, JSON.stringify(healthScore()));
  if (req.method === "POST" && url.pathname === "/api/heat") {
    let b1 = ""; req.on("data", c => (b1 += c)); req.on("end", () => { let p = {}; try { p = JSON.parse(b1 || "{}"); } catch (e) {} handleHeat(res, p); });
    return;
  }
  if (req.method === "POST" && url.pathname === "/api/rollback") {
    let b2 = ""; req.on("data", c => (b2 += c)); req.on("end", () => { let p = {}; try { p = JSON.parse(b2 || "{}"); } catch (e) {} handleRollback(res, p); });
    return;
  }
  if (req.method === "POST" && (url.pathname === "/api/feedback" || url.pathname === "/api/moderation")) {
    let b3 = ""; req.on("data", c => (b3 += c)); req.on("end", () => {
      let p = {}; try { p = JSON.parse(b3 || "{}"); } catch (e) {}
      if (url.pathname === "/api/feedback") handleFeedback(res, p);
      else processModeration().then(r => send(res, 200, JSON.stringify(r)));
    });
    return;
  }
  if (url.pathname === "/api/free-tools") return handleFreeTools(res);
  if (url.pathname === "/api/stats") {
    const s = readStats();
    const day = todayStr(), mon = monthStr();
    const d = (s.paid && s.paid.daily) || { date: day, calls: 0 };
    const m = (s.paid && s.paid.monthly) || { month: mon, calls: 0 };
    const dl = AI_POLICY.budget.daily.calls, ml = AI_POLICY.budget.monthly.calls;
    s.costPanel = {
      today: { calls: d.date === day ? d.calls : 0, limit: dl, remaining: Math.max(0, dl - (d.date === day ? d.calls : 0)) },
      month: { calls: m.month === mon ? m.calls : 0, limit: ml, remaining: Math.max(0, ml - (m.month === mon ? m.calls : 0)) },
      tokens: s.paid && s.paid.tokens || 0,
      policy: { autoPaidEnabled: AI_POLICY.autoPaidEnabled, searchMaxUses: AI_POLICY.searchMaxUses },
    };
    s.corpus = corpusMetrics();
    return send(res, 200, JSON.stringify(s));
  }
  if (url.pathname === "/api/version") {
    let qs = new URL(req.url, "http://x").searchParams;
    return handleVersion(res, { id: qs.get("id") || "" });
  }
  if (req.method === "POST" && url.pathname === "/api/graphrag") {
    let body = "";
    req.on("data", c => (body += c));
    req.on("end", () => { let p = {}; try { p = JSON.parse(body || "{}"); } catch (e) {} handleGraphRag(res, p); });
    return;
  }
  if (url.pathname === "/api/health") return send(res, 200, JSON.stringify(healthScore()));
  if (req.method === "POST" && url.pathname === "/api/patrol") return send(res, 200, JSON.stringify(runPatrol()));
  if (req.method === "POST" && url.pathname === "/api/rollback") {
    let b2 = ""; req.on("data", c => (b2 += c)); req.on("end", () => { let p = {}; try { p = JSON.parse(b2 || "{}"); } catch (e) {} handleRollback(res, p); });
    return;
  }
  if (req.method === "POST" && (url.pathname === "/api/feedback" || url.pathname === "/api/moderation")) {
    let b3 = ""; req.on("data", c => (b3 += c)); req.on("end", () => {
      let p = {}; try { p = JSON.parse(b3 || "{}"); } catch (e) {}
      if (url.pathname === "/api/feedback") handleFeedback(res, p);
      else processModeration().then(r => send(res, 200, JSON.stringify(r)));
    });
    return;
  }
  if (url.pathname === "/api/completion-status") {
    let b2 = ""; req.on("data", c => (b2 += c)); req.on("end", () => { let p = {}; try { p = JSON.parse(b2 || "{}"); } catch (e) {} handleCompletionStatus(res, p); });
    return;
  }
  if (req.method === "POST" && url.pathname === "/api/maintain") return handleMaintain(res);
  if (req.method === "POST" && url.pathname === "/api/enqueue") {
    let b2 = ""; req.on("data", c => (b2 += c)); req.on("end", () => { let p = {}; try { p = JSON.parse(b2 || "{}"); } catch (e) {} handleEnqueue(res, p); });
    return;
  }
  if (req.method === "POST" && url.pathname === "/api/discover") {
    let b3 = ""; req.on("data", c => (b3 += c)); req.on("end", () => { let p = {}; try { p = JSON.parse(b3 || "{}"); } catch (e) {} handleDiscover2(res, p); });
    return;
  }
  if (req.method === "POST" && url.pathname === "/api/search-log") {
    let b4 = ""; req.on("data", c => (b4 += c)); req.on("end", () => { let p = {}; try { p = JSON.parse(b4 || "{}"); } catch (e) {} handleSearchLog(res, p); });
    return;
  }
  if ((req.method === "GET" || req.method === "POST") && url.pathname === "/api/build-paths") {
    let bp = ""; req.on("data", c => (bp += c)); req.on("end", () => { let p = {}; try { p = JSON.parse(bp || "{}"); } catch (e) {} handleBuildPaths(res, p); }); return;
  }
  if ((req.method === "GET" || req.method === "POST") && url.pathname === "/api/efficiency") { handleEfficiency(res); return; }
  if ((req.method === "GET" || req.method === "POST") && url.pathname === "/api/maintenance") { handleMaintenance(res); return; }
  if ((req.method === "GET" || req.method === "POST") && url.pathname === "/api/recent-activity") { handleRecentActivity(res); return; }
  if ((req.method === "GET" || req.method === "POST") && url.pathname === "/api/health-check") { handleHealthCheck(res); return; }
  if ((req.method === "GET" || req.method === "POST") && url.pathname === "/api/seed-candidates") {
    let bs = ""; req.on("data", c => (bs += c)); req.on("end", () => { let p = {}; try { p = JSON.parse(bs || "{}"); } catch (e) {} handleSeedCandidates(res, p); }); return;
  }
  if ((req.method === "GET" || req.method === "POST") && url.pathname === "/api/domain-analysis") {
    let bd = ""; req.on("data", c => (bd += c)); req.on("end", () => { let p = {}; try { p = JSON.parse(bd || "{}"); } catch (e) {} handleDomainAnalysis(res, p); }); return;
  }
  if (req.method === "POST" && (url.pathname === "/api/grow" || url.pathname === "/api/quiz" || url.pathname === "/api/extract-concepts" || url.pathname === "/api/grow-target")) {
    let body = "";
    req.on("data", c => (body += c));
    req.on("end", () => { let p = {}; try { p = JSON.parse(body || "{}"); } catch (e) {} if (url.pathname === "/api/quiz") handleQuiz(res, p); else if (url.pathname === "/api/extract-concepts") handleExtract(res, p); else if (url.pathname === "/api/grow-target") handleGrowTarget(res, p); else handleGrow(res, p); });
    return;
  }
  if (req.method === "POST" && url.pathname === "/api/launch-tool") {
    let body = "";
    req.on("data", c => (body += c));
    req.on("end", () => { let p = {}; try { p = JSON.parse(body || "{}"); } catch (e) {} handleLaunchTool(res, p); });
    return;
  }
  if (req.method === "POST" && url.pathname === "/api/free-ai") {
    let body = "";
    req.on("data", c => (body += c));
    req.on("end", () => { let p = {}; try { p = JSON.parse(body || "{}"); } catch (e) {} freeAsk(res, p); });
    return;
  }
  if (req.method === "POST" && ["/api/ai", "/api/ask", "/api/add-concept"].includes(url.pathname)) {
    let body = "";
    req.on("data", c => (body += c));
    req.on("end", () => {
      let payload = {};
      try { payload = JSON.parse(body || "{}"); } catch (e) {}
      if (url.pathname === "/api/add-concept") handleAddConcept(res, payload);
      else if (url.pathname === "/api/ask") handleAsk(res, payload);
      else handleAi(res, payload);
    });
    return;
  }
  if (req.method !== "GET" && req.method !== "HEAD") return send(res, 405, "Method Not Allowed");
  let p = decodeURIComponent(url.pathname);
  if (p === "/") p = "/index.html";
  const file = path.normalize(path.join(ROOT, p));
  if (!file.startsWith(ROOT) || path.basename(file).startsWith(".") || p.includes("/.cache/") || p.startsWith("/.cache")) {
    return send(res, 403, "Forbidden");
  }
  fs.readFile(file, (err, data) => {
    if (err) return send(res, 404, "Not Found");
    send(res, 200, data, MIME[path.extname(file).toLowerCase()] || "application/octet-stream");
  });
});

server.on("error", e => {
  if (e.code === "EADDRINUSE") console.error("[析概] 端口 " + PORT + " 被占用，请换端口: node server.js <port>");
  else console.error("[析概] 服务器错误:", e.message);
  process.exit(1);
});
setInterval(() => { try { processModeration(); } catch (e) {} }, 15 * 60e3);
setInterval(() => { try { if (GROW_QUEUE.length < 3) runPatrol(); } catch (e) {} }, 15 * 60e3);
setInterval(() => { try { if (!queueBusy) setTimeout(pumpQueue, 100); } catch (e) {} }, 30e3);
server.listen(PORT, () => {
  console.log("[析概] 知识图书馆服务已启动: http://127.0.0.1:" + PORT);
});
