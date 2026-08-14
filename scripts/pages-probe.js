"use strict";
const { spawn } = require("child_process");
const http = require("http");
const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const PORT = 9344;
const wsLib = require("C:/Users/35074/AppData/Local/npm-cache/_npx/1e7f6d9597241db0/node_modules/ws");
function req(method, url) {
  return new Promise((res, rej) => {
    const u = new URL(url);
    const r = http.request({ hostname: u.hostname, port: u.port, path: u.pathname + u.search, method, timeout: 20000 }, x => { let d = ""; x.on("data", c => d += c); x.on("end", () => { try { res(JSON.parse(d)); } catch (e) { res(d); } }); });
    r.on("error", rej); r.on("timeout", () => { r.destroy(); rej(new Error("timeout")); }); r.end();
  });
}
(async () => {
  const chrome = spawn(CHROME, ["--headless=new","--disable-gpu","--remote-debugging-port="+PORT,"--no-first-run","--user-data-dir=C:/Temp/chrome-pages","about:blank"], { stdio: "ignore" });
  await new Promise(r=>setTimeout(r, 2500));
  const tab = await req("PUT", "http://127.0.0.1:" + PORT + "/json/new?" + encodeURIComponent("https://arukas0623-ai.github.io/xigai/?pages=1"));
  const ws = new wsLib(tab.webSocketDebuggerUrl);
  await new Promise(r => ws.on("open", r));
  let id = 0;
  const send = (m, p) => new Promise((res, rej) => { const i = ++id; const hh = ev => { const d = JSON.parse(ev); if (d.id === i) { ws.off("message", hh); d.error ? rej(new Error(d.error.message)) : res(d.result); } }; ws.on("message", hh); ws.send(JSON.stringify({ id: i, method: m, params: p || {} })); });
  await new Promise(r => setTimeout(r, 6000));
  const expr = `(async()=>{
    const X = window.Xigai; const out = {};
    out.domains = X.domains && X.domains.length;
    out.concepts = X.data && X.data.length;
    out.search = JSON.stringify((X.search('图灵')||[]).slice(0,2).map(c=>c.name));
    X.openConcept('turing-machine');
    await new Promise(r=>setTimeout(r,600));
    out.detail = !!document.getElementById('detail') && !document.getElementById('detail').classList.contains('hidden');
    try { X.openGraph('turing-machine'); await new Promise(r=>setTimeout(r,500)); out.graph = !!document.querySelector('svg'); } catch(e) { out.graph = 'err:'+e.message; }
    return JSON.stringify(out);
  })()`;
  const ev = await send("Runtime.evaluate", { expression: expr, awaitPromise: true, returnByValue: true });
  console.log("PAGES:", ev.result && ev.result.value);
  chrome.kill();
  process.exit(0);
})();