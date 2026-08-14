/* 移动端视口仿真测试：node scripts/mobile-cdp.js */
"use strict";
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const PORT = 9333;
const wsLib = require("C:/Users/35074/AppData/Local/npm-cache/_npx/1e7f6d9597241db0/node_modules/ws");
const URL_ = "http://127.0.0.1:8765/";
const SIZES = [[320,568],[375,667],[390,844],[430,932],[768,1024]];

function req(method, url, body) {
  return new Promise((res, rej) => {
    const u = new URL(url);
    const http = require("http");
    const r = http.request({ hostname: u.hostname, port: u.port, path: u.pathname + u.search, method, headers: { "Content-Type": "application/json" } }, x => { let d = ""; x.on("data", c => d += c); x.on("end", () => res(JSON.parse(d || "{}"))); });
    r.on("error", rej);
    if (body) r.write(JSON.stringify(body));
    r.end();
  });
}
(async () => {
  const chrome = spawn(CHROME, ["--headless=new", "--disable-gpu", "--remote-debugging-port=" + PORT, "--no-first-run", "about:blank"], { stdio: "ignore" });
  await new Promise(r => setTimeout(r, 2500));
  for (const [w, h] of SIZES) {
    try {
      const tab = await req("PUT", "http://127.0.0.1:" + PORT + "/json/new?" + encodeURIComponent(URL_), null);
      const ws = new wsLib(tab.webSocketDebuggerUrl);
      let id = 0;
      const send = (m, p) => new Promise((res, rej) => { const i = ++id; ws.on("message", function h(ev) { const d = JSON.parse(ev); if (d.id === i) { ws.off("message", h); d.error ? rej(new Error(d.error.message)) : res(d.result); } }); ws.send(JSON.stringify({ id: i, method: m, params: p || {} })); });
      await new Promise(r => ws.on("open", r));
      await send("Emulation.setDeviceMetricsOverride", { width: w, height: h, deviceScaleFactor: 1, mobile: true });
      await send("Page.enable");
      await new Promise(r => setTimeout(r, 4000));
      const ev = await send("Runtime.evaluate", { expression: "JSON.stringify((window.Xigai&&window.Xigai.mobileAudit?Xigai.mobileAudit():{error:'no audit'}))", returnByValue: true });
      console.log("[" + w + "x" + h + "] " + (ev.result && ev.result.value || "N/A"));
      ws.close();
    } catch (e) { console.log("[" + w + "x" + h + "] ERR " + e.message); }
  }
  chrome.kill();
  process.exit(0);
})();
