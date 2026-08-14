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
  console.log("[ai] 开始深度解析:", name);
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
  console.log("[ask] 提问:", q.slice(0, 60));
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

/* 内存语料索引（启动与每次入库后重建） */
let CORPUS = null;
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
  CORPUS = { byId, byName, byAlias, all, domains: Object.keys(w.XIGAI) };
}
loadCorpus();

/* 统计 */
function readStats() {
  try { return JSON.parse(fs.readFileSync(STATS_FILE, "utf8")); } catch (e) { return { localHits: 0, cacheHits: 0, ollamaCalls: 0, paidCalls: 0, ingests: 0, dupSkips: 0, rejects: 0, errors: 0, rejectReasons: {}, since: Date.now() }; }
}
function bumpStat(key, by) {
  try {
    const s = readStats();
    s[key] = (s[key] || 0) + (by || 1);
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
    const raw = raw0.replace(/,([\s}\]])/g, "$1");
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
function classifyDomain(c) {
  const suggested = String(c.field || "").trim();
  if (suggested && CORPUS.domains.includes(suggested)) return suggested;
  if (suggested && CORPUS.domains.some(d => d.includes(suggested) || suggested.includes(d))) return CORPUS.domains.find(d => d.includes(suggested) || suggested.includes(d));
  return "AI 生成";
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
    // 版本历史
    try {
      fs.mkdirSync(VERSION_DIR, { recursive: true });
      const vf = path.join(VERSION_DIR, concept.id + ".json");
      const hist = fs.existsSync(vf) ? JSON.parse(fs.readFileSync(vf, "utf8")) : [];
      hist.push({ at: Date.now(), domain: dom, name: concept.name });
      fs.writeFileSync(vf, JSON.stringify(hist, null, 2));
    } catch (e) {}
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


/* 可信度评分：来源数/定义长度/要点数 → 0-1；低可信(pending)不进入公共搜索 */
function computeConfidence(c) {
  let conf = 0.5;
  const defLen = String(c.definition || "").length;
  const srcs = (c.sources || []).length;
  if (defLen >= 150) conf += 0.2;
  if (srcs >= 2) conf += 0.2;
  else if (srcs === 1) conf += 0.05;
  if ((c.core || []).length >= 3) conf += 0.1;
  if (/https?:\/\//.test(String(c.definition || ""))) conf -= 0.1;
  return Math.min(1, Math.max(0, Math.round(conf * 100) / 100));
}
function statusOf(conf) { return conf >= 0.7 ? "verified" : conf >= 0.5 ? "generated" : "pending"; }

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
    merged.status = statusOf(merged.confidence || 0.5) === "pending" ? "needs_update" : merged.status || "verified";
    merged.searchedAt = new Date().toISOString().slice(0, 10);
    arr[idx] = merged;
    const out = "window.XIGAI = window.XIGAI || {};\nwindow.XIGAI[" + JSON.stringify(domain) + "] = " + JSON.stringify(arr, null, 2) + ";\n";
    const tmp = fp + ".tmp";
    fs.writeFileSync(tmp, out, "utf8");
    fs.renameSync(tmp, fp);
    try {
      fs.mkdirSync(VERSION_DIR, { recursive: true });
      const vf = path.join(VERSION_DIR, oldConcept.id + ".json");
      const hist = fs.existsSync(vf) ? JSON.parse(fs.readFileSync(vf, "utf8")) : [];
      hist.push({ at: Date.now(), domain, action: "update", status: merged.status });
      fs.writeFileSync(vf, JSON.stringify(hist, null, 2));
    } catch (e) {}
    loadCorpus();
    return { ok: true, concept: merged };
  });
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
  growOllama(q, prompt).then(text => {
    if (!text) { bumpStat("ollamaCalls", 1); bumpStat("paidCalls", 1); bumpStat("errors", 1); return send(res, 200, JSON.stringify({ ok: false, error: "本地模型与付费引擎均不可用，请稍后再试" })); }
    bumpStat("ollamaCalls", 1);
    const obj = extractJSON(text);
    if (!obj) { bumpStat("errors", 1); return send(res, 200, JSON.stringify({ ok: false, error: "AI 输出无法解析为结构化词条" })); }
    obj.relations = normalizeGrowRelations(obj.relations);
    if (!Array.isArray(obj.pros)) obj.pros = [];
    if (!Array.isArray(obj.cons)) obj.cons = [];
    if (obj.principle == null) obj.principle = "";
    obj.id = normStr(obj.name).slice(0, 48) || "concept-" + Date.now();
    obj.confidence = computeConfidence(obj);
    obj.status = statusOf(obj.confidence);
    // 4) 去重
    const dup = dedupCheck(obj);
    if (dup) {
      if (force) {
        // 强制重新验证：更新已有概念
        bumpStat("updates", 1);
        return updateConcept(dup.domain, dup, obj).then(r => {
          if (r.ok) { try { fs.writeFileSync(cacheFile, JSON.stringify(obj)); } catch (e) {} send(res, 200, JSON.stringify({ ok: true, source: "ai", updated: true, domain: dup.domain, concept: r.concept })); }
          else send(res, 200, JSON.stringify({ ok: false, error: r.error || "更新失败" }));
        });
      }
      bumpStat("dupSkips", 1);
      return send(res, 200, JSON.stringify({ ok: false, dup: true, existing: dup, reason: "与已有概念重复" }));
    }
    // 5) 可信度/垃圾过滤
    const reason = junkCheck(obj, q);
    if (reason) { bumpReject(reason); return send(res, 200, JSON.stringify({ ok: false, reject: true, reason })); }
    if (obj.confidence < 0.5) obj.status = "pending"; // 低可信：入库但不进入公共搜索
    // 6) 分类
    const domain = classifyDomain(obj);
    // 7) 入库（串行写）
    obj.searchedAt = new Date().toISOString().slice(0, 10);
    obj.status = "generated";
    appendConcept(domain, obj).then(r => {
      if (r.ok) {
        bumpStat("ingests", 1);
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
    if (!text) { bumpStat("paidCalls", 1); return growPaid(name, prompt).then(pt => finish(pt)); }
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
    if (!text) { bumpStat("paidCalls", 1); return growPaid(q, prompt).then(pt => finish(pt)); }
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
    if (!t) { bumpStat("paidCalls", 1); return growPaid(text.slice(0, 20), prompt).then(pt => finish(pt)); }
    bumpStat("ollamaCalls", 1);
    finish(t);
    function finish(t) {
      if (!t) { bumpStat("errors", 1); return send(res, 200, JSON.stringify({ ok: false, error: "引擎不可用" })); }
      const arr = extractJSON(t) || [];
      const names = (Array.isArray(arr) ? arr : Array.isArray(arr.questions) ? arr.questions : []).map(String).map(s => s.trim()).filter(s => s.length >= 2 && s.length <= 24).slice(0, 6);
      const out = names.map(n => ({ name: n, exists: !!findLocal(n), concept: findLocal(n) || null }));
      send(res, 200, JSON.stringify({ ok: true, concepts: out }));
    }
  });
}

/* ── 静态服务 ─────────────────────────────────────── */
const server = http.createServer((req, res) => {
  const url = new URL(req.url, "http://x");
  if (url.pathname === "/api/health") return send(res, 200, "ok");
  if (url.pathname === "/api/free-tools") return handleFreeTools(res);
  if (url.pathname === "/api/stats") return send(res, 200, JSON.stringify(readStats()));
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
  if (req.method === "POST" && (url.pathname === "/api/grow" || url.pathname === "/api/quiz" || url.pathname === "/api/extract-concepts")) {
    let body = "";
    req.on("data", c => (body += c));
    req.on("end", () => { let p = {}; try { p = JSON.parse(body || "{}"); } catch (e) {} if (url.pathname === "/api/quiz") handleQuiz(res, p); else if (url.pathname === "/api/extract-concepts") handleExtract(res, p); else handleGrow(res, p); });
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
server.listen(PORT, () => {
  console.log("[析概] 知识图书馆服务已启动: http://127.0.0.1:" + PORT);
});
