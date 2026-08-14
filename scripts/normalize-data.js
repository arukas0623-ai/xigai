/* 阶段0 数据归一化：relations 清理 + 统一 id + 反向补全 + 回写
   运行：node scripts/normalize-data.js（数据已备份至 data-backup-2026-08-14） */
"use strict";
const fs = require("fs");
const path = require("path");
const DATA = path.join(__dirname, "..", "data");

const VOCAB = ["prerequisite", "followup", "related", "dependsOn", "evolvedFrom", "appliesTo"];
const INVERSE = { related: "related", prerequisite: "followup", followup: "prerequisite", dependsOn: "prerequisite", evolvedFrom: "related", appliesTo: "related" };

// 1) 加载全部数据文件，记录 domain→file
const w = { XIGAI: {} };
const domainFile = {};
const files = fs.readdirSync(DATA).filter(f => f.endsWith(".js") && f !== "manifest.js").sort();
for (const f of files) {
  const before = new Set(Object.keys(w.XIGAI));
  const code = fs.readFileSync(path.join(DATA, f), "utf8");
  new Function("window", code)(w);
  for (const k of Object.keys(w.XIGAI)) if (!before.has(k)) domainFile[k] = f;
}

// 2) 索引
const byId = new Map(), byName = new Map(), byAlias = new Map();
const all = [];
for (const name of Object.keys(w.XIGAI)) {
  for (const c of w.XIGAI[name]) {
    if (!c || !c.name) continue;
    c.domain = name;
    c.id = c.id || String(c.name).replace(/[^a-zA-Z0-9\u4e00-\u9fa5]+/g, "-").slice(0, 40);
    all.push(c);
    if (!byId.has(c.id)) byId.set(c.id, c);
    const nk = String(c.name).replace(/[\s，。；、·．.:：()（）""''「」【】]+/g, "").toLowerCase();
    if (!byName.has(nk)) byName.set(nk, c);
    for (const a of (c.aliases || [])) {
      const ak = String(a).replace(/[\s，。；、·．.:：()（）""''「」【】]+/g, "").toLowerCase();
      if (ak && !byAlias.has(ak)) byAlias.set(ak, c);
    }
  }
}
const resolve = t => {
  if (t == null || t === "") return null;
  const s = String(t);
  if (byId.has(s)) return byId.get(s);
  if (byName.has(s)) return byName.get(s);
  const nk = s.replace(/[\s，。；、·．.:：()（）""''「」【】]+/g, "").toLowerCase();
  if (byName.has(nk)) return byName.get(nk);
  if (byAlias.has(nk)) return byAlias.get(nk);
  return null;
};

// 3) 逐概念清理
const stats = { before: 0, afterClean: 0, afterReverse: 0, selfLoops: 0, dups: 0, invalid: 0, resolved: 0, unresolved: 0 };
for (const c of all) {
  // 并入遗留字段（related/prerequisites/followUps）
  const mk = (type, list) => (list || []).filter(Boolean).map(t => ({ type, target: String(t) }));
  c.relations = (Array.isArray(c.relations) ? c.relations : [])
    .concat(mk("related", c.related), mk("prerequisite", c.prerequisites), mk("followup", c.followUps));
  stats.before += c.relations.length;
  const seen = new Set();
  const cleaned = [];
  for (const r of c.relations) {
    if (!r || typeof r.target !== "string" || !r.target.trim()) { stats.invalid++; continue; }
    const type = VOCAB.includes(r.type) ? r.type : "related";
    const t = resolve(r.target);
    if (t && t.id === c.id) { stats.selfLoops++; continue; }
    const key = type + "|" + (t ? t.id : r.target);
    if (seen.has(key)) { stats.dups++; continue; }
    seen.add(key);
    cleaned.push({ type, target: t ? t.id : r.target.trim(), note: r.note || "" });
    if (t) stats.resolved++; else stats.unresolved++;
  }
  c.relations = cleaned;
  stats.afterClean += cleaned.length;
}

// 4) 反向补全（双向边）
for (const c of all) {
  for (const r of c.relations) {
    const t = byId.get(r.target);
    if (!t || t.id === c.id) continue;
    const inv = INVERSE[r.type] || "related";
    if (!t.relations.some(x => x.type === inv && x.target === c.id)) {
      t.relations.push({ type: inv, target: c.id, note: "" });
    }
  }
}
for (const c of all) stats.afterReverse += c.relations.length;

// 5) 回写
for (const name of Object.keys(w.XIGAI)) {
  const f = domainFile[name];
  if (!f) continue;
  const out = "window.XIGAI = window.XIGAI || {};\nwindow.XIGAI[" + JSON.stringify(name) + "] = " + JSON.stringify(w.XIGAI[name], null, 2) + ";\n";
  fs.writeFileSync(path.join(DATA, f), out, "utf8");
}

// 6) 指标
console.log("=== 阶段0 指标 ===");
console.log("概念总数:", all.length);
console.log("关系条数: 清理前", stats.before, "→ 清理后", stats.afterClean, "→ 反向补全后", stats.afterReverse);
console.log("清理: 自循环", stats.selfLoops, "| 重复", stats.dups, "| 无效", stats.invalid);
console.log("解析: 命中id", stats.resolved, "| 未命中", stats.unresolved, "| 命中率", Math.round(stats.resolved / Math.max(1, stats.resolved + stats.unresolved) * 100) + "%");
const withRel = all.filter(c => c.relations.length).length;
console.log("覆盖率: 有关系概念", withRel, "/", all.length, "=", Math.round(withRel / all.length * 100) + "%");
