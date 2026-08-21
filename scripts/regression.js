"use strict";
const { spawn } = require("child_process");
const http = require("http");
const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const PORT = 9334;
const wsLib = require("C:/Users/35074/AppData/Local/npm-cache/_npx/b86ed90107c62dab/node_modules/ws");
const BASE = "http://127.0.0.1:8765";
const EXPR = "(async()=>{ const X = window.Xigai; const out={}; const S=(n,f)=>{try{return f()}catch(e){out[n+'_err']=String(e).slice(0,80);return null}};\n out.domains=S('domains',()=>X.domains&&X.domains.length);\n out.concepts=S('concepts',()=>X.data&&X.data.length);\n out.search=S('search',()=>JSON.stringify((X.search('图灵')||[]).slice(0,3).map(c=>c.name||c.id)));\n out.intent=S('intent',()=>JSON.stringify(X.detectIntent('什么是神经网络')).slice(0,60));\n out.pending=S('pending',()=>X.pendingConcepts?X.pendingConcepts().length:'n/a');\n S('open',()=>X.openConcept('turing-test'));\n await new Promise(r=>setTimeout(r,700));\n out.detail=S('detail',()=>!!document.getElementById('detail'));\n out.graph=S('graph',()=>{X.openGraph('turing-machine'); return true});\n out.self=S('self',()=>JSON.stringify(X.selfCheck(X.resolveConcept('turing-test')||{})).slice(0,100));\n out.mob=S('mob',()=>JSON.stringify(X.mobileAudit()).slice(0,200));\n return JSON.stringify(out);})()";
function req(method, url, body) {
  return new Promise((res, rej) => {
    const u = new URL(url);
    const r = http.request({ hostname: u.hostname, port: u.port, path: u.pathname + u.search, method, headers: { "Content-Type": "application/json" }, timeout: 150000 }, x => { let d = ""; x.on("data", c => d += c); x.on("end", () => { try { res({ status: x.statusCode, body: JSON.parse(d || "{}") }); } catch (e) { res({ status: x.statusCode, body: d }); } }); });
    r.on("error", rej); r.on("timeout", () => { r.destroy(); rej(new Error("timeout")); });
    if (body) r.write(JSON.stringify(body));
    r.end();
  });
}
(async () => {
  const results = [];
  const ok = (name, pass, detail) => results.push((pass ? "PASS " : "FAIL ") + name + (detail ? " | " + detail : ""));
  try { const h = await req("GET", BASE + "/api/health"); ok("health", h.status === 200 && h.body.concepts > 0, "concepts=" + h.body.concepts + " debt=" + h.body.knowledgeDebt + " conflicts=" + h.body.conflicts); } catch (e) { ok("health", false, e.message); }
  try { const s = await req("GET", BASE + "/api/stats"); ok("stats", s.status === 200, "paid=" + s.body.paidCalls + " autoPaid=" + (s.body.costPanel && s.body.costPanel.policy && s.body.costPanel.policy.autoPaidEnabled)); } catch (e) { ok("stats", false, e.message); }
  try { const v = await req("GET", BASE + "/api/version"); ok("version", v.status === 200, JSON.stringify(v.body).slice(0, 60)); } catch (e) { ok("version", false, e.message); }
  try { const c = await req("GET", BASE + "/api/completion-status"); ok("completion-status", c.status === 200, JSON.stringify(c.body).slice(0, 60)); } catch (e) { ok("completion-status", false, e.message); }
  try { const m = await req("POST", BASE + "/api/moderation", {}); ok("moderation", m.status === 200 && m.body.ok !== false, JSON.stringify(m.body).slice(0, 80)); } catch (e) { ok("moderation", false, e.message); }
  try { const p = await req("POST", BASE + "/api/patrol", { limit: 2 }); ok("patrol", p.status === 200 && p.body.ok !== false, JSON.stringify(p.body).slice(0, 90)); } catch (e) { ok("patrol", false, e.message); }
  try { const t = await req("POST", BASE + "/api/heat", { id: "turing-test", v: 1 }); ok("heat", t.status === 200, JSON.stringify(t.body).slice(0, 50)); } catch (e) { ok("heat", false, e.message); }
  try { const r = await req("POST", BASE + "/api/rollback", { id: "turing-test" }); ok("rollback", r.status === 200 && r.body.ok !== false, JSON.stringify(r.body).slice(0, 70)); } catch (e) { ok("rollback", false, e.message); }
  try { const q = await req("POST", BASE + "/api/quiz", { name: "图灵机" }); ok("quiz", q.status === 200 && (q.body.quiz || q.body.ok), JSON.stringify(q.body).slice(0, 80)); } catch (e) { ok("quiz", false, e.message); }
  try { const g = await req("POST", BASE + "/api/graphrag", { q: "什么是图灵机" }); ok("graphrag", g.status === 200, JSON.stringify(g.body).slice(0, 80)); } catch (e) { ok("graphrag", false, e.message); }
  try { const f = await req("GET", BASE + "/api/free-tools"); ok("free-tools", f.status === 200, JSON.stringify(f.body).slice(0, 60)); } catch (e) { ok("free-tools", false, e.message); }
  try { const d = await req("POST", BASE + "/api/discover", { limit: 1 }); ok("discover", d.status === 200, JSON.stringify(d.body).slice(0, 80)); } catch (e) { ok("discover", false, e.message); }
  const chrome = spawn(CHROME, ["--headless=new", "--disable-gpu", "--remote-debugging-port=" + PORT, "--no-first-run", "about:blank"], { stdio: "ignore" });
  await new Promise(r => setTimeout(r, 2500));
  const SIZES = [[1280, 800], [390, 844], [320, 568]];
  for (const [w, h] of SIZES) {
    try {
      const tab = await req("PUT", "http://127.0.0.1:" + PORT + "/json/new?" + encodeURIComponent(BASE + "/?regression=1"), null);
      const ws = new wsLib(tab.body.webSocketDebuggerUrl);
      await new Promise(r => ws.on("open", r));
      let id = 0;
      const send = (m, p) => new Promise((res, rej) => { const i = ++id; const hh = ev => { const d = JSON.parse(ev); if (d.id === i) { ws.off("message", hh); d.error ? rej(new Error(d.error.message)) : res(d.result); } }; ws.on("message", hh); ws.send(JSON.stringify({ id: i, method: m, params: p || {} })); });
      await send("Emulation.setDeviceMetricsOverride", { width: w, height: h, deviceScaleFactor: 1, mobile: w <= 768 });
      await new Promise(r => setTimeout(r, 4500));
      const ev = await send("Runtime.evaluate", { expression: EXPR, awaitPromise: true, returnByValue: true });
      const val = ev.result && ev.result.value;
      const o = JSON.parse(val || "{}");
      const label = w + "x" + h;
      ok("browser-load " + label, o.domains >= 30 && o.concepts >= 500, "domains=" + o.domains + " concepts=" + o.concepts + " errs=" + JSON.stringify({ d: o.domains_err, i: o.intent_err, s: o.self_err, g: o.graph_err }));
      ok("search " + label, !o.search_err && o.search && o.search.includes("图灵"), o.search + " " + (o.search_err || ""));
      ok("intent " + label, !o.intent_err && !!o.intent && o.intent.includes("question"), o.intent + " " + (o.intent_err || ""));
      ok("detail " + label, o.detail === true, "detail=" + o.detail + " " + (o.detail_err || ""));
      ok("graph " + label, o.graph === true, "graph=" + o.graph + " " + (o.graph_err || ""));
      ok("selfCheck " + label, !o.self_err && !!o.self, o.self + " " + (o.self_err || ""));
      ok("mobileAudit " + label, !o.mob_err, o.mob + " " + (o.mob_err || ""));
      ws.close();
    } catch (e) { ok("browser " + w + "x" + h, false, e.message); }
  }
  chrome.kill();
  console.log(results.join("\n"));
  const fails = results.filter(r => r.startsWith("FAIL"));
  console.log("\n=== " + (results.length - fails.length) + "/" + results.length + " passed ===");
  process.exit(fails.length ? 1 : 0);
})();
