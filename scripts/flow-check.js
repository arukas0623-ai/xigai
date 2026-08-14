"use strict";
const { spawn } = require("child_process");
const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const wsLib = require("C:/Users/35074/AppData/Local/npm-cache/_npx/1e7f6d9597241db0/node_modules/ws");
const PORT = 9335;
function req(method, url, body) { return new Promise((res, rej) => { const u = new URL(url); const http = require("http"); const r = http.request({ hostname: u.hostname, port: u.port, path: u.pathname + u.search, method, headers: { "Content-Type": "application/json" } }, x => { let d = ""; x.on("data", c => d += c); x.on("end", () => res(JSON.parse(d || "{}"))); }); r.on("error", rej); if (body) r.write(JSON.stringify(body)); r.end(); }); }
(async () => {
  const chrome = spawn(CHROME, ["--headless=new", "--disable-gpu", "--remote-debugging-port=" + PORT, "--no-first-run", "about:blank"], { stdio: "ignore" });
  await new Promise(r => setTimeout(r, 2500));
  const check = async (url, expr, label) => {
    try {
      const tab = await req("PUT", "http://127.0.0.1:" + PORT + "/json/new?" + encodeURIComponent(url), null);
      const ws = new wsLib(tab.webSocketDebuggerUrl);
      let id = 0;
      const send = (m, p) => new Promise((res, rej) => { const i = ++id; ws.on("message", function h(ev) { const d = JSON.parse(ev); if (d.id === i) { ws.off("message", h); d.error ? rej(new Error(d.error.message)) : res(d.result); } }); ws.send(JSON.stringify({ id: i, method: m, params: p || {} })); });
      await new Promise(r => ws.on("open", r));
      await send("Emulation.setDeviceMetricsOverride", { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
      await send("Page.enable");
      await new Promise(r => setTimeout(r, 3500));
      const ev = await send("Runtime.evaluate", { expression: expr, returnByValue: true });
      console.log(label + ": " + (ev.result && ev.result.value));
      ws.close();
    } catch (e) { console.log(label + ": ERR " + e.message); }
  };
  await check("http://127.0.0.1:8765/?c=turing-machine", "JSON.stringify({selfcheck:!!document.querySelector('.selfcheck'), path:!!document.getElementById('path-box'), rel:!!document.getElementById('rel-sec'), graphBtn:!!document.getElementById('graph-btn'), reportBtn:!!document.getElementById('report-btn'), aiBtn:!!document.getElementById('free-btn'), chatInput:!!document.querySelector('.chat-input-row textarea'), overflow:document.documentElement.scrollWidth>window.innerWidth+2})", "详情流");
  await check("http://127.0.0.1:8765/?c=turing-machine", "JSON.stringify({tutorBtn:!!document.getElementById('chat-tutor'), graphChip:!!document.querySelector('.gr-chip'), cmpTray:!!document.getElementById('cmp-tray'), personalBtn:!!document.getElementById('btn-personal')})", "入口组件");
  chrome.kill(); process.exit(0);
})();
