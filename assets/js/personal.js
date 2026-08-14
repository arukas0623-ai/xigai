/* ============================================================
   析概 · 个人学习系统 personal.js（P2）
   个人知识图谱 / 知识盲区 / 个性化推荐 / 学习足迹
   ============================================================ */
(function () {
  const X = (window.Xigai = window.Xigai || {});

  /* 已知（读过/收藏/测过） */
  X.isKnown = function (id) {
    return X.state.readCount[id] > 0 || X.isFav(id) || !!X.masteryOf(id);
  };

  /* 知识盲区 */
  X.knowledgeGaps = function () {
    const gaps = [];
    for (const c of X.data) {
      if (!X.isKnown(c.id)) continue;
      const m = X.masteryOf(c.id);
      if (m && m.score < 50) gaps.push({ concept: c, reason: "测试未通过（" + m.score + "%）", type: "mastery" });
      for (const r of X.getRelations(c)) {
        if (!r.resolved || !r.concept) continue;
        if (X.isKnown(r.concept.id)) continue;
        if (r.type === "prerequisite" || r.type === "dependsOn" || r.type === "evolvedFrom") {
          gaps.push({ concept: r.concept, reason: "「" + c.name + "」的" + X.relLabel(r.type) + "未学习", type: "prereq" });
        } else if ((r.concept.difficulty || 3) < (c.difficulty || 3)) {
          gaps.push({ concept: r.concept, reason: "更基础的「" + X.relLabel(r.type) + "」概念未学习", type: "base" });
        }
      }
    }
    const seen = new Set();
    return gaps.filter(g => { const k = g.concept.id + g.type; if (seen.has(k)) return false; seen.add(k); return true; }).slice(0, 12);
  };

  /* 个性化推荐 */
  X.recommendations = function (limit) {
    limit = limit || 8;
    const domainScore = {};
    X.data.forEach(c => {
      const n = X.state.readCount[c.id] || 0;
      if (n) domainScore[c.domain] = (domainScore[c.domain] || 0) + n;
    });
    const relatedIds = new Set();
    for (const c of X.data) {
      if (X.isKnown(c.id)) for (const r of X.getRelations(c)) if (r.resolved) relatedIds.add(r.concept.id);
    }
    const scored = [];
    for (const c of X.data) {
      if (X.isKnown(c.id)) continue;
      let score = 0; let why = "";
      if (relatedIds.has(c.id)) { score += 3; why = "与已学概念相关"; }
      if (domainScore[c.domain]) { score += 2; why = (why ? why + "，" : "") + "你常读" + c.domain; }
      const m = X.masteryOf(c.id);
      if (m && m.score >= 80 && X.state.readCount[c.id] > 0) { score += 1; }
      if (score > 0) scored.push({ concept: c, score, why });
    }
    scored.sort((a, b) => b.score - a.score || (a.concept.difficulty || 3) - (b.concept.difficulty || 3));
    return scored.slice(0, limit);
  };

  /* 个人知识图谱（我学过的概念的关联子图） */
  X.personalGraph = function () {
    const ids = X.data.filter(c => X.isKnown(c.id)).map(c => c.id).slice(0, 40);
    const idSet = new Set(ids);
    const nodes = ids.map(id => X.byId.get(id)).filter(Boolean);
    const edges = [];
    for (const c of nodes) {
      for (const r of X.getRelations(c)) {
        if (r.resolved && idSet.has(r.concept.id) && r.concept.id !== c.id) {
          if (!edges.some(e => (e.from === r.concept.id && e.to === c.id))) edges.push({ from: c.id, to: r.concept.id, type: r.type });
        }
      }
    }
    return { nodes, edges };
  };

  /* 打开个人面板 */
  X.openPersonal = function () {
    let ov = document.getElementById("personal-panel");
    if (!ov) { ov = document.createElement("div"); ov.id = "personal-panel"; ov.className = "overlay hidden"; document.body.appendChild(ov); }
    ov.innerHTML = "";
    const card = document.createElement("div");
    card.className = "panel-card personal-card";
    const gaps = X.knowledgeGaps();
    const recs = X.recommendations(8);
    const masters = Object.keys(X.state.mastery).map(id => ({ id, m: X.state.mastery[id], c: X.byId.get(id) })).filter(x => x.c).sort((a, b) => b.m.score - a.m.score);
    // 个人图谱 SVG（圆形布局）
    const pg = X.personalGraph();
    const W = 560, H = 380, CX = W / 2, CY = H / 2;
    const pos = {};
    pg.nodes.forEach((n, i) => {
      const a = (Math.PI * 2 * i) / Math.max(1, pg.nodes.length) - Math.PI / 2;
      const rr = 130 + (i % 3) * 22;
      pos[n.id] = { x: CX + Math.cos(a) * rr, y: CY + Math.sin(a) * rr };
    });
    const pgSvg = pg.nodes.length < 2 ? '<div class="path-none">读过/收藏/测过 2 个以上概念后这里会出现关联图谱</div>' :
      '<svg viewBox="0 0 ' + W + " " + H + '" class="kg-svg">' +
      pg.edges.map(e => { const a = pos[e.from], b = pos[e.to]; if (!a || !b) return ""; return '<line x1="' + a.x + '" y1="' + a.y + '" x2="' + b.x + '" y2="' + b.y + '" stroke="' + X.relColor(e.type) + '" stroke-width="1.2" opacity=".5"/>'; }).join("") +
      pg.nodes.map(n => { const p = pos[n.id]; if (!p) return ""; const m = X.masteryLabel(n.id); const fill = m ? (m.cls === "master" ? "#3f8f4f" : m.cls === "learning" ? "#c08a2a" : "#a34a4a") : "#6a7a8a"; return '<g class="kg-node" data-id="' + X.esc(n.id) + '"><circle cx="' + p.x + '" cy="' + p.y + '" r="15" fill="' + fill + '" stroke="#fff" stroke-width="1.4"/><text x="' + p.x + '" y="' + p.y + '" class="kg-node-name" text-anchor="middle" dominant-baseline="middle" font-size="10">' + X.esc(n.name.slice(0, 4)) + "</text></g>"; }).join("") +
      "</svg>";

    card.innerHTML =
      '<button class="panel-close">✕</button>' +
      '<h3 class="cmp-title">🧑🎓 我的学习中心</h3>' +
      '<div class="sp-tabs"><button class="sp-tab active" data-ptab="graph">🕸 图谱</button><button class="sp-tab" data-ptab="master">🎯 掌握度</button><button class="sp-tab" data-ptab="gaps">🧩 盲区<span class="cnt">' + gaps.length + '</span></button><button class="sp-tab" data-ptab="recs">✨ 推荐</button><button class="sp-tab" data-ptab="pending">🕓 待验证<span class="cnt">' + X.pendingConcepts().length + '</span></button></div>' +
      '<div class="p-tab" data-ptab="graph">' + pgSvg + "</div>" +
      '<div class="p-tab hidden" data-ptab="master">' +
        (masters.length ? '<ul class="sp-list">' + masters.map(x => '<li data-id="' + X.esc(x.c.id) + '"><span class="nm">' + X.esc(x.c.name) + '</span><span class="fd">' + X.esc(x.c.domain) + "</span><span class='mastery-badge " + X.masteryLabel(x.c.id).cls + "'>" + X.masteryLabel(x.c.id).text + " " + x.m.score + "%</span></li>").join("") + "</ul>" : '<div class="sp-empty">还没有测试记录——在概念详情页点「📝 测试」</div>') + "</div>" +
      '<div class="p-tab hidden" data-ptab="gaps">' +
        (gaps.length ? '<ul class="sp-list">' + gaps.map(g => '<li data-id="' + X.esc(g.concept.id) + '"><span class="nm">' + X.esc(g.concept.name) + '</span><span class="fd">' + X.esc(g.reason) + "</span></li>").join("") + "</ul>" : '<div class="sp-empty">暂无知识盲区 🎉（学过更基础的相关概念或通过测试后消除）</div>') + "</div>" +
      '<div class="p-tab hidden" data-ptab="recs">' +
        (recs.length ? '<ul class="sp-list">' + recs.map(r => '<li data-id="' + X.esc(r.concept.id) + '"><span class="nm">' + X.esc(r.concept.name) + '</span><span class="fd">' + X.esc(r.why) + "</span></li>").join("") + "</ul>" : '<div class="sp-empty">多读几本书后会有推荐</div>') + "</div>" +
      '<div class="p-tab hidden" data-ptab="pending">' +
        (X.pendingConcepts().length ? '<ul class="sp-list">' + X.pendingConcepts().map(c => '<li data-id="' + X.esc(c.id) + '"><span class="nm">' + X.esc(c.name) + '</span><span class="fd">confidence ' + (c.confidence != null ? c.confidence : "?") + ' · ' + X.esc(c.status || "?") + "</span><span class='rm' data-rv='1'>↻ 重验</span></li>").join("") + "</ul>" : '<div class="sp-empty">没有待验证条目 🎉</div>') + "</div>";
    ov.appendChild(card);
    ov.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    ov.querySelector(".panel-close").addEventListener("click", () => { ov.classList.add("hidden"); document.body.style.overflow = ""; });
    ov.addEventListener("click", e => { if (e.target === ov) { ov.classList.add("hidden"); document.body.style.overflow = ""; } });
    ov.querySelectorAll(".sp-tab").forEach(t => t.addEventListener("click", () => {
      ov.querySelectorAll(".sp-tab").forEach(x => x.classList.toggle("active", x === t));
      ov.querySelectorAll(".p-tab").forEach(x => x.classList.toggle("hidden", x.dataset.ptab !== t.dataset.ptab));
    }));
    ov.querySelectorAll(".kg-node[data-id]").forEach(g => g.addEventListener("click", () => { ov.classList.add("hidden"); document.body.style.overflow = ""; X.openConcept(g.dataset.id); }));
    ov.querySelectorAll(".sp-list li[data-id]").forEach(li => li.addEventListener("click", (e) => {
      if (e.target.classList.contains("rm")) return;
      ov.classList.add("hidden"); document.body.style.overflow = ""; X.openConcept(li.dataset.id);
    }));
    ov.querySelectorAll("[data-rv]").forEach(btn => btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = btn.closest("li").dataset.id;
      const c = X.byId.get(id);
      if (!c) return;
      X.toast("正在重新验证「" + c.name + "」…（免费本地模型）");
      fetch("/api/grow", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ q: c.name, force: true }) })
        .then(r => r.json()).then(d => {
          if (d.ok && (d.updated || d.source === "local")) { X.reloadData(); X.renderShelves(X._currentFilter); X.openPersonal(); X.toast("已重新验证"); }
          else if (d.ok) { X.reloadData(); X.renderShelves(X._currentFilter); X.openPersonal(); X.toast("已更新（" + (d.concept.status || "verified") + "）"); }
          else X.toast("重验失败：" + (d.reason || d.error || ""));
        }).catch(() => X.toast("无法连接服务"));
    }));
  };

  /* 领域首页：子领域导航 + 概念列表 + 跨域关系 + 学习入口 */
  X.openDomain = function (name) {
    const dom = X.domains.find(d => d.name === name);
    if (!dom) { X.toast("领域不存在"); return; }
    let ov = document.getElementById("domain-panel");
    if (!ov) { ov = document.createElement("div"); ov.id = "domain-panel"; ov.className = "overlay hidden"; document.body.appendChild(ov); }
    ov.innerHTML = "";
    const card = document.createElement("div");
    card.className = "panel-card domain-card";
    // 子领域分组（按 tags[0]）
    const groups = {};
    dom.concepts.forEach(c => { const g = (c.tags && c.tags[0]) || "其他"; (groups[g] = groups[g] || []).push(c); });
    const groupHtml = Object.keys(groups).map(g =>
      '<div class="dom-group"><div class="dom-group-title">' + X.esc(g) + '<small>' + groups[g].length + " 个概念</small></div><div class='dom-concepts'>" +
      groups[g].map(c => '<span class="dom-concept" data-id="' + X.esc(c.id) + '">' + X.esc(c.name) + "</span>").join("") + "</div></div>"
    ).join("");
    // 跨域关系（本领域概念指向其他领域的关系目标）
    const cross = {};
    dom.concepts.forEach(c => X.getRelations(c).forEach(r => { if (r.resolved && r.concept.domain !== name) { cross[r.concept.name] = r.concept; } }));
    const crossHtml = Object.keys(cross).length ? '<div class="dom-cross"><h4>跨领域关联</h4><div class="dom-concepts">' + Object.keys(cross).slice(0, 12).map(k => '<span class="dom-concept" data-id="' + X.esc(cross[k].id) + '">' + X.esc(cross[k].name) + '<small>·' + X.esc(cross[k].domain) + "</small></span>").join("") + "</div></div>" : "";
    // 难度排序的学习路径建议
    const ordered = dom.concepts.slice().sort((a, b) => (a.difficulty || 3) - (b.difficulty || 3));
    const pathHtml = '<div class="dom-path"><h4>学习路径建议（按难度）</h4><ol>' + ordered.slice(0, 6).map((c, i) => '<li><button data-id="' + X.esc(c.id) + '">' + (i + 1) + '. ' + X.esc(c.name) + '</button><small>难度 ' + (c.difficulty || 3) + "</small></li>").join("") + "</ol></div>";
    card.innerHTML =
      '<button class="panel-close">✕</button>' +
      '<div class="dom-head"><span class="dom-seal">' + X.esc(dom.seal) + '</span><div><h3>' + X.esc(dom.name) + '</h3><small>' + dom.concepts.length + " 个概念 · " + Object.keys(groups).length + " 个子领域 · " + Object.keys(cross).length + " 个跨域关联</small></div></div>" +
      '<div class="dom-body">' + groupHtml + crossHtml + pathHtml + "</div>";
    ov.appendChild(card);
    ov.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    ov.querySelector(".panel-close").addEventListener("click", () => { ov.classList.add("hidden"); document.body.style.overflow = ""; });
    ov.addEventListener("click", e => { if (e.target === ov) { ov.classList.add("hidden"); document.body.style.overflow = ""; } });
    ov.querySelectorAll("[data-id]").forEach(b => b.addEventListener("click", () => { ov.classList.add("hidden"); document.body.style.overflow = ""; X.openConcept(b.dataset.id); }));
  };

  /* 聊天 GraphRAG 问答 */
  X.graphAsk = function (q) {
    if (!X.isChatOpen()) X.openChat();
    X.chatHistory.push({ role: "q", t: Date.now(), text: q });
    const typing = { role: "a", t: Date.now(), text: "", typing: true };
    X.chatHistory.push(typing);
    X.renderChat();
    fetch("/api/graphrag", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ q }),
    }).then(r => r.json()).then(d => {
      const idx = X.chatHistory.indexOf(typing);
      if (idx >= 0) X.chatHistory.splice(idx, 1);
      if (d.ok) X.chatHistory.push({ role: "a", t: Date.now(), text: "🧠 图谱增强问答" + (d.seed ? "（锚定「" + d.seed + "」+" + d.ctxCount + " 条图谱上下文）" : "") + "：\n\n" + d.text });
      else X.chatHistory.push({ role: "a", t: Date.now(), text: "（图谱问答失败：" + (d.error || "") + "）" });
      X.store.set("chatHistory", X.chatHistory.slice(-40));
      X.renderChat();
    }).catch(() => {
      const idx = X.chatHistory.indexOf(typing);
      if (idx >= 0) X.chatHistory.splice(idx, 1);
      X.chatHistory.push({ role: "a", t: Date.now(), text: "（无法连接本地服务）" });
      X.renderChat();
    });
  };
})();
