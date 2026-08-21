"use strict";
const { spawn } = require("child_process");
const http = require("http");
const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const PORT = 9341;
const wsLib = require("C:/Users/35074/AppData/Local/npm-cache/_npx/b86ed90107c62dab/node_modules/ws");
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
  const tab = await req("PUT", "http://127.0.0.1:" + PORT + "/json/new?" + encodeURIComponent("http://127.0.0.1:8765/?quiz=1"));
  const ws = new wsLib(tab.webSocketDebuggerUrl);
  await new Promise(r => ws.on("open", r));
  let id = 0;
  const send = (m, p) => new Promise((res, rej) => { const i = ++id; const hh = ev => { const d = JSON.parse(ev); if (d.id === i) { ws.off("message", hh); d.error ? rej(new Error(d.error.message)) : res(d.result); } }; ws.on("message", hh); ws.send(JSON.stringify({ id: i, method: m, params: p || {} })); });
  await new Promise(r => setTimeout(r, 4000));
  const expr = `(async()=>{
    const X = window.Xigai; const out = {};
    X.openConcept('图灵机');
    await new Promise(r=>setTimeout(r,600));
    const btn = document.getElementById('quiz-btn');
    out.hasBtn = !!btn;
    if (btn) btn.click();
    await new Promise(r=>setTimeout(r,900));
    const panel = document.getElementById('quiz-panel');
    out.panel = !!panel && !panel.classList.contains('hidden');
    const body = panel ? panel.querySelector('.quiz-body') : null;
    out.bodyText = body ? body.textContent.replace(/\s+/g,' ').slice(0,120) : 'NO BODY';
    out.hasOptions = body ? body.querySelectorAll('.quiz-opt').length : 0;
    if (body && body.querySelector('.quiz-opt')) body.querySelector('.quiz-opt').click();
    await new Promise(r=>setTimeout(r,500));
    out.hasFeedback = body ? !!body.querySelector('.quiz-fb .quiz-ok, .quiz-fb .quiz-no') : false;
    out.hasNext = body ? !!body.querySelector('.quiz-next') : false;
    return JSON.stringify(out);
  })()`;
  const ev = await send("Runtime.evaluate", { expression: expr, awaitPromise: true, returnByValue: true });
  console.log("QUIZ UI:", ev.result && ev.result.value);
  chrome.kill();
  process.exit(0);
})();