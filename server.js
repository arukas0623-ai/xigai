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
      if (models.length) found.push({ name: e.name, models });
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

/* ── 静态服务 ─────────────────────────────────────── */
const server = http.createServer((req, res) => {
  const url = new URL(req.url, "http://x");
  if (url.pathname === "/api/health") return send(res, 200, "ok");
  if (url.pathname === "/api/free-tools") return handleFreeTools(res);
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
