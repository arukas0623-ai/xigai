"use strict";
const fs = require("fs"), path = require("path");
const GROW_VOCAB = ["prerequisite", "followup", "related", "dependsOn", "evolvedFrom", "appliesTo"];
const MAX_RELATIONS = 24;
const normStr = s => String(s||"").replace(/[\s，。；、·．.:：()（）""''「」【】《》!！?？]/g,"").toLowerCase();
function extractJSON(text){
  const t=String(text||""); const i0=t.indexOf("{"); const i1=t.lastIndexOf("}");
  if(i0<0||i1<=i0) return null;
  const raw=t.slice(i0,i1+1).replace(/,(\s*[}\]]])/g,"$1");
  try{ return JSON.parse(raw); }catch(e){ return null; }
}
const relationConfidenceFor=(type,resolved,note,fd,td)=>{ const base={related:0.8,prerequisite:0.85,followup:0.85,dependsOn:0.8,evolvedFrom:0.75,appliesTo:0.75}[type]||0.6; if(!resolved)return 0.3; let c=base; if(note)c+=0.1; if(fd&&td&&fd===td)c+=0.05; if(fd&&td&&fd!==td)c-=0.05; return Math.min(1,Math.round(c*100)/100); };
(async()=>{
  const w={XIGAI:{}};
  fs.readdirSync("D:/析概/data").filter(f=>f.endsWith(".js")&&f!=="manifest.js").forEach(f=>{ try{ new Function("window",fs.readFileSync("D:/析概/data/"+f,"utf8"))(w); }catch(e){} });
  const byId=new Map(),byName=new Map(),byAlias=new Map(); const all=[];
  for(const dom of Object.keys(w.XIGAI)) for(const c of (w.XIGAI[dom]||[])){ if(!c||!c.name)continue; c.domain=dom; all.push(c); if(!byId.has(c.id))byId.set(c.id,c); const nk=normStr(c.name); if(!byName.has(nk))byName.set(nk,c); for(const a of (c.aliases||[])){const ak=normStr(a); if(ak&&!byAlias.has(ak))byAlias.set(ak,c);} }
  const c = all.find(x=>x.id==="turing-test");
  if(!c){ console.log("目标概念缺失"); return; }
  const prompt=["为概念「"+c.name+"」补充缺失字段。已知定义："+(c.definition||"").slice(0,300),
    '只输出一个 JSON 对象：{"principle":"原理","pros":[],"cons":[],"relations":[{"type":"related","target":"已收录概念A","reason":"依据1"},{"type":"prerequisite","target":"已收录概念B","reason":"依据2"}]}',
    "必须输出 2-4 条 relations，target 必须是知识库中确实已收录的概念名（如 图灵机、机器学习、算法复杂度 这类真实存在的概念），reason 写一句依据。"].join("\n");
  const r = await fetch("http://127.0.0.1:11434/api/generate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"qwen2.5:7b",prompt,stream:false,options:{temperature:0.3}}),signal:AbortSignal.timeout(120000)});
  const obj = extractJSON((await r.json()).response);
  if(!obj||!Array.isArray(obj.relations)){ console.log("Ollama 未返回 relations"); return; }
  const kept=[];
  for(const rel of obj.relations.slice(0,6)){
    const t=byId.get(rel.target)||byName.get(normStr(rel.target))||byAlias.get(normStr(rel.target));
    if(t && t.id!==c.id && !(c.relations||[]).some(x=>x.type===(GROW_VOCAB.includes(rel.type)?rel.type:"related")&&x.target===t.id)){
      kept.push({type:GROW_VOCAB.includes(rel.type)?rel.type:"related",target:t.id,evidence:String(rel.reason||rel.note||"纵向补全发现").slice(0,120),confidence:relationConfidenceFor(rel.type,true,rel.note,c.domain,t.domain)});
    }
  }
  console.log("Ollama 候选关系:", (obj.relations||[]).length, "条");
  console.log("过滤后可解析+evidence:", kept.length, "条");
  kept.forEach(k=>console.log("  "+k.type+"→"+k.target+" conf="+k.confidence+" evidence="+k.evidence.slice(0,18)));
  const total=(c.relations||[]).length+kept.length;
  console.log("预算检查: 现有"+ (c.relations||[]).length +" + 新增"+kept.length+" = "+total+" ≤ "+MAX_RELATIONS+" :", total<=MAX_RELATIONS);
})();
