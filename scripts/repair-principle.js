"use strict";
const fs = require("fs");
const FILE = "D:/析概/data/arch.js";
const w = { XIGAI: {} };
new Function("window", fs.readFileSync(FILE, "utf8"))(w);
const dom = Object.keys(w.XIGAI).find(d => w.XIGAI[d].some(c => c.id === "circulation"));
const arr = w.XIGAI[dom];
const c = arr.find(x => x.id === "circulation");
if (!c) { console.log("concept missing"); process.exit(1); }
if (c.principle) { console.log("already has principle:", String(c.principle).slice(0,40)); process.exit(0); }
const missing = ["principle(原理)"];
const eff = (c.relations || []).filter(r => findLocal(r.target)).length;
function findLocal(t) { const n = normStr(t); return arr.some(x => x.id === t || normStr(x.name) === n || (x.aliases||[]).some(a => normStr(a) === n)); }
function normStr(s){ return String(s||"").replace(/[\s，。；、·．.:：()（）""''「」【】《》!！?？]/g,"").toLowerCase(); }
const relReq = ',"relations":[{"type":"related","target":"已收录概念A","reason":"依据1"},{"type":"prerequisite","target":"已收录概念B","reason":"依据2"}]';
const prompt = [
  "为概念「" + c.name + "」补充以下缺失字段。已知定义：" + (c.definition || "").slice(0, 300),
  "只输出一个 JSON 对象（不要其他文字），只包含有意义的字段：",
  '{"principle":"原理(机制/工作方式，100-200字)","pros":["优点1","优点2"],"cons":["缺点1"],"applications":["应用1"],"misconceptions":["误解1"]' + relReq + "}",
  "缺失字段：" + missing.join("、") + "。已存在字段不要重复输出。",
].join("\n");
(async () => {
  const r = await fetch("http://127.0.0.1:11434/api/generate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"qwen2.5:7b",prompt,stream:false,options:{temperature:0.3}}),signal:AbortSignal.timeout(120000)});
  const j = await r.json();
  const obj = extractJSON(j.response);
  if (!obj) { console.log("解析失败:", j.response.slice(0,150)); process.exit(1); }
  let princRaw = obj.principle;
  if (princRaw && typeof princRaw === "object") {
    if (Array.isArray(princRaw)) princRaw = princRaw.join("；");
    else princRaw = Object.values(princRaw).find(v => typeof v === "string") || Object.values(princRaw).filter(v => typeof v === "object").map(v => JSON.stringify(v)).join("；");
  }
  if (c.principle == null && princRaw) c.principle = String(princRaw).slice(0, 400);
  console.log("new principle:", c.principle ? c.principle.slice(0, 80) : "(still empty)");
  if (!c.principle) { console.log("principe empty after merge, bail"); process.exit(1); }
  // 原子写回（同 server 方式）
  const out = "window.XIGAI = window.XIGAI || {};\nwindow.XIGAI[" + JSON.stringify(dom) + "] = " + JSON.stringify(arr, null, 2) + ";\n";
  const tmp = FILE + ".tmp";
  fs.writeFileSync(tmp, out, "utf8"); fs.renameSync(tmp, FILE);
  console.log("written OK, relations kept:", (c.relations||[]).length);
})();
function extractJSON(text){
  const t=String(text||""); const i0=t.indexOf("{"); const i1=t.lastIndexOf("}");
  if(i0<0||i1<=i0) return null;
  const raw=t.slice(i0,i1+1).replace(/,(\s*[}\]]])/g,"$1");
  try{ return JSON.parse(raw); }catch(e){ return null; }
}
