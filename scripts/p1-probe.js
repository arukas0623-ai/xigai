"use strict";
const { spawn } = require("child_process");
const http = require("http");
const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const PORT = 9338;
const wsLib = require("C:/Users/35074/AppData/Local/npm-cache/_npx/b86ed90107c62dab/node_modules/ws");
const EXPR = "(async()=>{\n  const X = window.Xigai; const out = {};\n  X.openConcept('贝叶斯定理');\n  await new Promise(r=>setTimeout(r,700));\n  const d = document.getElementById('detail');\n  out.whyBlock = d ? (d.querySelector('.why-block') ? d.querySelector('.why-block').textContent.slice(0,90) : 'NO WHY-BLOCK') : 'NO DETAIL';\n  X.openChat();\n  X.askAI('贝叶斯定理');\n  await new Promise(r=>setTimeout(r,700));\n  const body = document.getElementById('chat-body');\n  const msgs = body ? body.textContent : '';\n  out.chatHasStatus = msgs.includes('已收录') && msgs.includes('可信度');\n  out.chatHasVer = msgs.includes('独立核验');\n  out.chatHasSrc = msgs.includes('来源');\n  X.openDomain('天文学');\n  await new Promise(r=>setTimeout(r,900));\n  const dp = document.getElementById('domain-panel');\n  out.domainText = dp ? dp.textContent.replace(/\\s+/g,' ').slice(0,160) : 'NO DOMAIN PANEL';\n  return JSON.stringify(out);\n})()";
function req(method, url) {
  return new Promise((res, rej) => {
    const u = new URL(url);
    const r = http.request({ hostname: u.hostname, port: u.port, path: u.pathname + u.search, method, timeout: 15000 }, x => { let d = ""; x.on("data", c => d += c); x.on("end", () => { try { res(JSON.parse(d)); } catch (e) { res(d); } }); });
    r.on("error", rej); r.on("timeout", () => { r.destroy(); rej(new Error("timeout")); }); r.end();
  });
}
(async () => {
  const chrome = spawn(CHROME, ["--headless=new","--disable-gpu","--remote-debugging-port="+PORT,"--no-first-run","about:blank"], { stdio: "ignore" });
  await new Promise(r=>setTimeout(r, 2500));
  const tab = await req("PUT", "http://127.0.0.1:" + PORT + "/json/new?" + encodeURIComponent("http://127.0.0.1:8765/?p1=1"));
  const ws = new wsLib(tab.webSocketDebuggerUrl);
  await new Promise(r => ws.on("open", r));
  let id = 0;
  const send = (m, p) => new Promise((res, rej) => { const i = ++id; const hh = ev => { const d = JSON.parse(ev); if (d.id === i) { ws.off("message", hh); d.error ? rej(new Error(d.error.message)) : res(d.result); } }; ws.on("message", hh); ws.send(JSON.stringify({ id: i, method: m, params: p || {} })); });
  await new Promise(r => setTimeout(r, 4000));
  const ev = await send("Runtime.evaluate", { expression: EXPR, awaitPromise: true, returnByValue: true });
  console.log("P1 UI:", ev.result && ev.result.value, ev.exceptionDetails ? JSON.stringify(ev.exceptionDetails.exception).slice(0,200) : "");
  chrome.kill();
  process.exit(0);
})();
