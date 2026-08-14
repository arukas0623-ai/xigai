"use strict";
const fs = require("fs"), path = require("path");
const DATA = path.join(__dirname, "..", "data");
const files = fs.readdirSync(DATA).filter(f => f.endsWith(".js") && f !== "manifest.js").sort();
let cleaned = 0;
for (const f of files) {
  const p = path.join(DATA, f);
  const w = { XIGAI: {} };
  new Function("window", fs.readFileSync(p, "utf8"))(w);
  const names = Object.keys(w.XIGAI);
  if (!names.length) continue;
  let changed = false;
  for (const name of names) {
    for (const c of w.XIGAI[name]) {
      if (c && (c.related !== undefined || c.prerequisites !== undefined || c.followUps !== undefined)) changed = true;
      if (c) { delete c.related; delete c.prerequisites; delete c.followUps; }
    }
  }
  if (changed) {
    const out = "window.XIGAI = window.XIGAI || {};\nwindow.XIGAI[" + JSON.stringify(names[0]) + "] = " + JSON.stringify(w.XIGAI[names[0]], null, 2) + ";\n";
    fs.writeFileSync(p, out, "utf8");
    cleaned++;
    console.log("cleaned:", f);
  }
}
console.log("清理文件数:", cleaned);
