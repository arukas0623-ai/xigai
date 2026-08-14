/* ============================================================
   析概 · 交互式知识图谱 + AI 学习路线 kgraph.js
   P1-1：基于 relations 的自绘 SVG 图谱（2 跳）+ 前置/后续学习路径
   ============================================================ */
(function () {
  const X = (window.Xigai = window.Xigai || {});

  const W = 860, H = 620, CX = 430, CY = 305;

  /* 图谱数据：中心 + 1跳 + 2跳（带边类型） */
  X.buildGraphData = function (id, maxHop) {
    maxHop = maxHop || 2;
    const root = X.byId.get(id);
    if (!root) return null;
    const nodes = [{ id: root.id, name: root.name, domain: root.domain, hop: 0 }];
    const edges = [];
    const seen = new Set([root.id]);
    const queue = [{ c: root, hop: 0 }];
    while (queue.length) {
      const { c, hop } = queue.shift();
      if (hop >= maxHop) continue;
      for (const r of X.getRelations(c)) {
        if (r.resolved && r.concept) {
          if (!seen.has(r.concept.id)) {
            seen.add(r.concept.id);
            nodes.push({ id: r.concept.id, name: r.concept.name, domain: r.concept.domain, hop: hop + 1 });
            queue.push({ c: r.concept, hop: hop + 1 });
          }
          edges.push({ from: c.id, to: r.concept.id, type: r.type, note: r.note, pending: false });
        } else if (r.target) {
          // 待定节点（书库外名词）：展示为虚线，不可聚焦
          const pid = "~" + r.target;
          if (!seen.has(pid)) {
            seen.add(pid);
            nodes.push({ id: pid, name: r.target, domain: "待收录", hop: hop + 1, pending: true });
          }
          edges.push({ from: c.id, to: pid, type: r.type, note: r.note, pending: true });
        }
      }
    }
    return { root, nodes, edges };
  };

  /* 学习路线：前置(BFS) → 核心 → 后续 */
  X.learningPath = function (id, maxDepth) {
    maxDepth = maxDepth || 2;
    const root = X.byId.get(id);
    if (!root) return null;
    const prereqs = [], followups = [];
    const seenP = new Set(), seenF = new Set();
    const walk = (c, depth, list, seen, edgeTypes, reverse) => {
      if (depth > maxDepth) return;
      for (const r of X.getRelations(c)) {
        if (!r.resolved || !r.concept) continue;
        const isPrereqOfC = reverse ? r.type === "prerequisite" || r.type === "dependsOn" : r.type === "followup" || r.type === "appliesTo";
        const match = reverse ? (r.type === "prerequisite" || r.type === "dependsOn" || r.type === "evolvedFrom") : (r.type === "followup" || r.type === "appliesTo");
        if (!match) continue;
        if (!seen.has(r.concept.id)) { seen.add(r.concept.id); list.push({ c: r.concept, depth }); }
        walk(r.concept, depth + 1, list, seen, edgeTypes, reverse);
      }
    };
    // 前置：root 的 prerequisite/dependsOn 目标（先学）
    for (const r of X.getRelations(root)) {
      if (r.resolved && (r.type === "prerequisite" || r.type === "dependsOn" || r.type === "evolvedFrom") && !seenP.has(r.concept.id)) {
        seenP.add(r.concept.id);
        prereqs.push({ c: r.concept, depth: 1 });
        walk(r.concept, 2, prereqs, seenP, null, false);
      }
    }
    // 后续：root 的 followup/appliesTo 目标（后学）
    for (const r of X.getRelations(root)) {
      if (r.resolved && (r.type === "followup" || r.type === "appliesTo") && !seenF.has(r.concept.id)) {
        seenF.add(r.concept.id);
        followups.push({ c: r.concept, depth: 1 });
        walk(r.concept, 2, followups, seenF, null, false);
      }
    }
    // 兜底：无方向边时，按难度从已解析的相关概念推导路径
    if (!prereqs.length && !followups.length) {
      const rel = X.getRelations(root).filter(r => r.resolved && r.concept.id !== root.id);
      const diff = root.difficulty || 3;
      const lower = rel.filter(r => (r.concept.difficulty || 3) < diff).sort((a, b) => (b.concept.difficulty || 3) - (a.concept.difficulty || 3));
      const higher = rel.filter(r => (r.concept.difficulty || 3) > diff).sort((a, b) => (a.concept.difficulty || 3) - (b.concept.difficulty || 3));
      lower.slice(0, 3).forEach(r => { if (!seenP.has(r.concept.id)) { seenP.add(r.concept.id); prereqs.push({ c: r.concept, depth: 1 }); } });
      higher.slice(0, 3).forEach(r => { if (!seenF.has(r.concept.id)) { seenF.add(r.concept.id); followups.push({ c: r.concept, depth: 1 }); } });
    }
    return { root, prereqs: prereqs.slice(0, 8), followups: followups.slice(0, 8) };
  };

  /* 打开图谱覆盖层 */
  X.openGraph = function (id) {
    const data = X.buildGraphData(id, 2);
    if (!data) { X.toast("无法生成图谱"); return; }
    const path = X.learningPath(id, 2);
    let ov = document.getElementById("kgraph-panel");
    if (!ov) { ov = document.createElement("div"); ov.id = "kgraph-panel"; ov.className = "overlay hidden"; document.body.appendChild(ov); }
    ov.innerHTML = "";
    const card = document.createElement("div");
    card.className = "panel-card kgraph-card";

    // 径向布局
    const pos = {}; pos[data.root.id] = { x: CX, y: CY };
    const hop1 = data.nodes.filter(n => n.hop === 1);
    const hop2 = data.nodes.filter(n => n.hop === 2);
    hop1.forEach((n, i) => {
      const a = (Math.PI * 2 * i) / Math.max(1, hop1.length) - Math.PI / 2;
      pos[n.id] = { x: CX + Math.cos(a) * 150, y: CY + Math.sin(a) * 150 };
    });
    hop2.forEach((n, i) => {
      // 尽量靠近其父节点方向
      const parent = data.edges.find(e => e.to === n.id);
      const pn = parent && pos[parent.from] ? pos[parent.from] : { x: CX, y: CY };
      const a = Math.atan2(pn.y - CY, pn.x - CX) + ((i % 2) ? 0.5 : -0.5);
      pos[n.id] = { x: pn.x + Math.cos(a) * 118, y: pn.y + Math.sin(a) * 118 };
    });

    const edgeSvg = data.edges.map(e => {
      const a = pos[e.from], b = pos[e.to];
      if (!a || !b) return "";
      const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
      const color = X.relColor(e.type);
      return '<line x1="' + a.x + '" y1="' + a.y + '" x2="' + b.x + '" y2="' + b.y + '" stroke="' + color + '" stroke-width="1.6"' + (e.pending ? ' stroke-dasharray="5 4" opacity=".4"' : ' opacity=".7"') + "/>" +
        '<text x="' + (mx + 4) + '" y="' + (my - 4) + '" class="kg-edge" fill="' + color + '">' + X.esc(X.relLabel(e.type)) + "</text>";
    }).join("");
    const nodeSvg = data.nodes.map(n => {
      const p = pos[n.id]; if (!p) return "";
      const r = n.hop === 0 ? 34 : n.hop === 1 ? 24 : 16;
      const fill = n.hop === 0 ? "var(--accent)" : n.hop === 1 ? "#8a6a4a" : "#6a7a8a";
      const extra = n.pending ? ' opacity=".45" stroke-dasharray="4 3"' : ' stroke="#fff" stroke-width="1.5" opacity=".92"';
      return '<g class="kg-node' + (n.pending ? " pending" : "") + '" data-id="' + X.esc(n.id) + '" title="' + X.esc(n.name + (n.pending ? "（待收录）" : "（" + n.domain + "）· 点击聚焦")) + '">' +
        '<circle cx="' + p.x + '" cy="' + p.y + '" r="' + r + '" fill="' + fill + '"' + extra + "/>" +
        '<text x="' + p.x + '" y="' + p.y + '" class="kg-node-name" text-anchor="middle" dominant-baseline="middle">' + X.esc(n.name.length > 6 ? n.name.slice(0, 6) : n.name) + "</text></g>";
    }).join("");
    const legend = X.RELATION_TYPES.map(t => '<span class="kg-leg"><i style="background:' + t.color + '"></i>' + t.label + "</span>").join("");

    let pathHtml = "";
    if (path) {
      const step = (item, i, tag) => '<div class="path-step"><span class="path-no">' + i + '</span><span class="path-tag">' + tag + '</span><b data-path="' + X.esc(item.c.id) + '">' + X.esc(item.c.name) + "</b><small>" + X.esc(item.c.domain) + "</small></div>";
      let n = 1;
      const pre = path.prereqs.map(p => step(p, n++, "前置")).join("");
      const core = '<div class="path-step cur"><span class="path-no">' + n++ + '</span><span class="path-tag cur">核心</span><b data-path="' + X.esc(data.root.id) + '">' + X.esc(data.root.name) + "</b><small>" + X.esc(data.root.domain) + "</small></div>";
      const fol = path.followups.map(p => step(p, n++, "后续")).join("");
      pathHtml = pre || fol || core ? '<div class="kg-path"><div class="kg-path-title">📈 AI 学习路线</div>' + (pre || '<div class="path-none">无前置要求</div>') + core + (fol || '<div class="path-none">无后续进阶</div>') + "</div>" : "";
    }

    card.innerHTML =
      '<button class="panel-close">✕</button>' +
      '<div class="kg-head"><h3>🕸 知识图谱：' + X.esc(data.root.name) + '</h3><span class="kg-sub">' + data.nodes.length + " 节点 · " + data.edges.length + " 条关系 · 点击节点聚焦</span></div>" +
      '<div class="kg-body"><svg viewBox="0 0 ' + W + " " + H + '" class="kg-svg">' + edgeSvg + nodeSvg + "</svg>" +
      '<div class="kg-legend">' + legend + "</div></div>" +
      '<div class="kg-path-wrap">' + pathHtml + "</div>";
    ov.appendChild(card);
    ov.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    ov.querySelector(".panel-close").addEventListener("click", X.closeGraph);
    ov.addEventListener("click", e => { if (e.target === ov) X.closeGraph(); });
    ov.querySelectorAll(".kg-node:not(.pending)").forEach(g => g.addEventListener("click", () => X.openGraph(g.dataset.id)));
    ov.querySelectorAll("[data-path]").forEach(b => b.addEventListener("click", () => X.openConcept(b.dataset.path)));
  };
  X.closeGraph = function () {
    const ov = document.getElementById("kgraph-panel");
    if (ov) ov.classList.add("hidden");
    document.body.style.overflow = "";
  };
})();
