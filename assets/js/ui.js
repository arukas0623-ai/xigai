/* ============================================================
   析概 · 界面 ui.js
   书架渲染 / 概念详情 / 搜索下拉 / 面板 / 主题 / 交互
   ============================================================ */
(function () {
  const X = (window.Xigai = window.Xigai || {});

  /* ── 主题 ─────────────────────────────────────────── */
  X.THEMES = [
    { key: "gold",     name: "鎏金学院", emoji: "📚" },
    { key: "midnight", name: "深蓝夜读", emoji: "🌙" },
    { key: "parchment",name: "古典羊皮", emoji: "📜" },
    { key: "emerald",  name: "墨绿学者", emoji: "🌿" },
    { key: "light",    name: "晨光极简", emoji: "☀️" },
    { key: "rose",     name: "蔷薇暖阳", emoji: "🌹" },
  ];
  X.applyTheme = function (key) {
    X.state.theme = key;
    X.saveState();
    document.body.dataset.theme = key;
    document.documentElement.style.fontSize = (X.state.fontScale * 100) + "%";
    document.documentElement.style.setProperty("--body-lh", String(X.state.lineHeight || 1));
    const sw = document.getElementById("theme-panel");
    if (sw) sw.querySelectorAll(".theme-item").forEach(el => el.classList.toggle("active", el.dataset.key === key));
    if (X._shelvesRendered) X.renderShelves(X._currentFilter);
    X.fire("theme", key);
  };

  /* ── Toast ────────────────────────────────────────── */
  X.toast = function (msg, ms) {
    let t = document.getElementById("toast");
    if (!t) { t = document.createElement("div"); t.id = "toast"; document.body.appendChild(t); }
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(X._toastT);
    X._toastT = setTimeout(() => t.classList.remove("show"), ms || 2400);
  };

  /* ── 书架渲染 ─────────────────────────────────────── */
  X._shelvesRendered = false;
  X._currentFilter = "";
  X.renderShelves = function (filter) {
    X._currentFilter = filter || "";
    X._shelvesRendered = true;
    const wrap = document.getElementById("shelves");
    if (!wrap) return;
    const doms = X.domains.filter(d => !X._currentFilter || d.name === X._currentFilter);
    if (!doms.length) { wrap.innerHTML = '<div class="empty-tip">书架空空如也——知识正在路上…</div>'; return; }
    const frag = document.createDocumentFragment();
    // 按馆区分组渲染（筛选时不分馆区）
    let grouped = X._currentFilter ? [[null, doms]] : X.WINGS.map(w => [w, doms.filter(d => w.domains.includes(d.name))]).filter(g => g[1].length);
    // 附加未分区领域（如 AI 生成架）
    const groupedNames = new Set();
    grouped.forEach(g => g[1].forEach(d => groupedNames.add(d.name)));
    const rest = doms.filter(d => !groupedNames.has(d.name));
    if (rest.length) grouped.push([{ name: "其他馆区", desc: "AI 生成与未分区新书", domains: [] }, rest]);
    grouped.forEach((grp) => {
      const wing = grp[0], list = grp[1];
      if (wing) {
        const wh = document.createElement("div");
        wh.className = "wing-head";
        wh.innerHTML = '<span class="wing-seal">' + X.esc(wing.name.slice(0, 1)) + "</span><div><h3>" + X.esc(wing.name) + '</h3><small>' + X.esc(wing.desc) + "</small></div>";
        frag.appendChild(wh);
      }
      list.forEach(d => {
        const row = document.createElement("section");
        row.className = "shelf-row";
        row.id = "shelf-" + X.esc(d.key);
        const books = d.concepts.filter(c => !X.isHidden(c.id) && X.isPublic(c)).map(c => {
          const st = X.spineStyle(c, X.state.theme);
          const fav = X.isFav(c.id);
          const title = X.esc(c.name.length > 9 ? c.name.slice(0, 9) : c.name);
          const depth = X.state.viewMode === "3d" ? " --book-depth:" + st.depth + "px" : "";
          return '<div class="book' + (fav ? " faved" : "") + '" draggable="true" data-id="' + X.esc(c.id) + '" title="' + X.esc(c.name + " — " + (c.summary || "")) + '" style="width:' + st.width + ";height:" + st.height + ";background:" + st.background + ";--spine-ink:" + st["--spine-ink"] + ";transform:" + st.transform + depth + '">' +
            '<div class="book-title">' + title + "</div>" +
            '<div class="book-tag">' + X.esc(d.seal) + "</div>" +
            '<div class="fav-dot">♥</div></div>';
        }).join("");
        row.innerHTML =
          '<div class="cornice"></div>' +
          '<div class="shelf-plaque" data-domain="' + X.esc(d.name) + '"><span class="seal">' + X.esc(d.seal) + "</span><div><h2>" + X.esc(d.name) + '</h2><small>' + d.concepts.length + " 册 · 点击进入领域</small></div></div>" +
          '<div class="shelf-books">' + books + '<div class="bookend"></div></div>' +
          '<div class="shelf-plank"></div>';
        frag.appendChild(row);
      });
    });
    wrap.innerHTML = "";
    wrap.appendChild(frag);
    wrap.querySelectorAll(".book").forEach(b => {
      b.addEventListener("click", () => X.openConcept(b.dataset.id));
      b.addEventListener("dragstart", X.onBookDragStart);
    });
    wrap.querySelectorAll(".shelf-plaque").forEach(p => {
      p.addEventListener("click", () => X.openDomain(p.dataset.domain));
    });
    X.updateChips();
    X.applyViewMode();
  };
  X.applyViewMode = function () {
    const lib = document.getElementById("library");
    if (!lib) return;
    lib.classList.toggle("list-view", X.state.viewMode === "list");
    lib.classList.toggle("view-3d", X.state.viewMode === "3d");
  };

  X.updateChips = function () {
    const rail = document.getElementById("domains-rail");
    if (!rail) return;
    rail.innerHTML = X.domains.map(d =>
      '<button class="chip' + (X._currentFilter === d.name ? " active" : "") + '" data-dom="' + X.esc(d.name) + '">' + X.esc(d.name) + '<span class="cnt">' + d.concepts.length + "</span></button>"
    ).join("");
    rail.querySelectorAll(".chip").forEach(ch => ch.addEventListener("click", () => {
      if (X._currentFilter === ch.dataset.dom) { X._currentFilter = ""; X.renderShelves(""); }
      else X.renderShelves(ch.dataset.dom);
    }));
  };

  /* ── 搜索下拉 ─────────────────────────────────────── */
  X.searchResults = [];
  X._selIdx = -1;
  X.renderSearch = function (q) {
    const box = document.getElementById("search-results");
    if (!q) { box.classList.remove("open"); return; }
    const res = X.search(q, 24);
    X.searchResults = res;
    X._selIdx = -1;
    const intent = X.detectIntent(q);
    if (!res.length) {
      // 搜索驱动增长：未命中 → 登记候选（Patrol 后续自动学习）
      fetch("/api/search-log", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ q }) }).catch(() => {});
      box.innerHTML = '<div class="sr-empty">没有找到「' + X.esc(q) + '」<br>试试拼音、别名或更换关键词<br><span style="font-size:12px;color:var(--ink-3)">也可以直接问 AI 解析员</span></div>' +
        '<div class="sr-hint"><button class="mini-btn" id="sr-ask">💬 问 AI 解析「' + X.esc(q) + '」</button> · Esc 关闭</div>';
      const srAsk = box.querySelector("#sr-ask");
      if (srAsk) srAsk.addEventListener("click", () => { X.closeSearch(); const inp = document.getElementById("search"); if (inp) inp.value = ""; X.askAI(q); });
    } else {
      let html = '';
      if (intent.type === "compare" && intent.concepts.length === 2) {
        html += '<div class="sr-intent">检测到对比意图：<button class="mini-btn" id="int-cmp">⚖ 对比 ' + X.esc(intent.concepts[0].name) + ' × ' + X.esc(intent.concepts[1].name) + '</button></div>';
      } else if ((intent.type === "learn" || intent.type === "relation") && intent.concepts.length === 1) {
        html += '<div class="sr-intent">检测到' + (intent.type === "learn" ? "学习" : "关系") + '意图：<button class="mini-btn" id="int-learn">📈 学习路线</button><button class="mini-btn" id="int-rel">🕸 关系图谱</button></div>';
      }
      html += '<div class="sr-head">共 ' + res.length + " 个结果</div>";
      res.forEach((c, i) => {
        const st = X.spineStyle(c, X.state.theme);
        html += '<div class="sr-item" data-idx="' + i + '">' +
          '<span class="sr-book" style="background:' + st.background + '"></span>' +
          '<div class="sr-main"><div class="sr-name">' + X.hl(c.name, q) + (c._rel ? ' <span class="sr-rel">相关</span>' : "") + "</div>" +
          '<div class="sr-meta">' + X.esc(c.summary || "") + "</div></div>" +
          '<span class="sr-field">' + X.esc(c.domain) + "</span></div>";
      });
      html += '<div class="sr-hint">↑↓ 选择 · ⏎ 打开 · Esc 关闭 · 模糊匹配拼音/别名/标签</div>';
      box.innerHTML = html;
      box.querySelectorAll(".sr-item").forEach(el => el.addEventListener("click", () => {
        const c = X.searchResults[+el.dataset.idx];
        if (c) { X.closeSearch(); X.openConcept(c.id); }
      }));
    }
    const intCmp = box.querySelector("#int-cmp");
    if (intCmp) intCmp.addEventListener("click", () => {
      X.closeSearch();
      X.compareList = intent.concepts.map(c => c.id);
      X.renderCompareTray();
      X.showCompare();
    });
    const intLearn = box.querySelector("#int-learn");
    const intRel = box.querySelector("#int-rel");
    if (intLearn) intLearn.addEventListener("click", () => { X.closeSearch(); X.openGraph(intent.concepts[0].id); });
    if (intRel) intRel.addEventListener("click", () => { X.closeSearch(); X.openGraph(intent.concepts[0].id); });
    box.classList.add("open");
    X._updateSel();
  };
  X.hl = function (text, q) {
    const e = X.esc(text);
    const ql = q.trim().toLowerCase();
    if (!ql || !/[\u4e00-\u9fa5]/.test(ql)) return e;
    let out = "", rest = text, idx;
    while ((idx = rest.toLowerCase().indexOf(ql)) >= 0) {
      out += X.esc(rest.slice(0, idx)) + "<mark>" + X.esc(rest.slice(idx, idx + ql.length)) + "</mark>";
      rest = rest.slice(idx + ql.length);
    }
    return out + X.esc(rest);
  };
  X._updateSel = function () {
    const box = document.getElementById("search-results");
    if (!box) return;
    box.querySelectorAll(".sr-item").forEach(el => el.classList.toggle("sel", +el.dataset.idx === X._selIdx));
    const cur = box.querySelector(".sr-item.sel");
    if (cur) cur.scrollIntoView({ block: "nearest" });
  };
  X.moveSel = function (dir) {
    if (!X.searchResults.length) return;
    X._selIdx = (X._selIdx + dir + X.searchResults.length) % X.searchResults.length;
    X._updateSel();
  };
  X.closeSearch = function () {
    const box = document.getElementById("search-results");
    if (box) box.classList.remove("open");
    X.searchResults = [];
  };

  /* ── 概念详情 ─────────────────────────────────────── */
  X.currentId = null;
  X.openConcept = function (id) {
    const c = X.byId.get(id) || X.byId.get(X.slug(id)) || X.data.find(x => x.id === id || X.slug(x.name) === X.slug(id));
    if (!c) { X.toast("未找到该概念"); return; }
    X.currentId = c.id;
    X.recordRead(c);
    fetch("/api/heat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: c.id }) }).catch(() => {});
    try { history.replaceState(null, "", "?c=" + encodeURIComponent(c.id)); } catch (e) {}
    const ov = document.getElementById("detail");
    ov.innerHTML = "";
    const card = document.createElement("div");
    card.className = "panel-card";
    const aliases = (c.aliases || []).map(a => "<span>" + X.esc(a) + "</span>").join("");
    const tags = (c.tags || []).map(t => '<span class="tag">' + X.esc(t) + "</span>").join("");
    const diffDots = Array.from({ length: 5 }, (_, i) => "<i class='" + (i < (c.difficulty || 3) ? "on" : "off") + "'></i>").join("");
    const core = (c.core || []).map(s => "<li>" + X.md(s) + "</li>").join("");
    const apps = (c.applications || []).map(s => "<li>" + X.md(s) + "</li>").join("");
    const miscon = (c.misconceptions || []).map(s => "<li>" + X.md(s) + "</li>").join("");
    // 类型化关系（含旧式 related 兼容，按类型分组）
    const relGroups = {};
    X.getRelations(c).forEach(r => { (relGroups[r.type] = relGroups[r.type] || []).push(r); });
    const relHtml = Object.keys(relGroups).map(type => {
      const chips = relGroups[type].map(r => {
        if (r.resolved) {
          return '<span class="rel-chip" data-rel="' + X.esc(r.targetId) + '">' + X.esc(r.targetName) + (r.note ? '<i class="rel-note">' + X.esc(r.note) + "</i>" : "") + "</span>";
        }
        return '<span class="rel-chip miss" data-miss="' + X.esc(r.target) + '">' + X.esc(r.target) + (r.note ? '<i class="rel-note">' + X.esc(r.note) + "</i>" : "") + "</span>";
      }).join("");
      return '<div class="rel-group"><span class="rel-group-label" style="background:' + X.relColor(type) + '">' + X.relLabel(type) + '</span><div class="related-chips">' + chips + "</div></div>";
    }).join("");
    const principle = c.principle ? '<div class="sec"><h3>原理</h3><p>' + X.md(c.principle) + "</p></div>" : "";
    const prosHtml = (c.pros || []).length ? c.pros.map(s => "<li>" + X.md(s) + "</li>").join("") : "";
    const consHtml = (c.cons || []).length ? c.cons.map(s => "<li>" + X.md(s) + "</li>").join("") : "";
    const proscons = (prosHtml || consHtml) ? '<div class="sec"><h3>优缺点</h3><div class="proscons">' +
      (prosHtml ? '<div class="pc pros"><h4>✓ 优点</h4><ul>' + prosHtml + "</ul></div>" : "") +
      (consHtml ? '<div class="pc cons"><h4>✕ 缺点</h4><ul>' + consHtml + "</ul></div>" : "") +
      "</div></div>" : "";
    // 收录依据：独立核验 + 可信度 + 状态（P1 可解释）
    let whyHtml = "";
    if (c.verification && c.verification.score != null) {
      const vs = Math.round(c.verification.score * 100);
      whyHtml = '<div class="why-block"><span class="why-item">独立核验 ' + vs + "%</span>" +
        (c.verification.note ? '<span class="why-note">' + X.esc(c.verification.note) + "</span>" : "") +
        ((c.verification.issues || []).length ? '<span class="why-issue">待核查：' + X.esc((c.verification.issues || []).join("；")) + "</span>" : "") + "</div>";
    }
    // 来源卡片化：标题 + URL + 检索日期（references 与 sources 按序对应）
    const refs = c.references || [];
    const srcItems = (c.sources || []).map((s, i) =>
      '<li class="src-card"><a href="' + X.esc(s) + '" target="_blank" rel="noopener">' + X.esc(refs[i] || s) + '</a><span class="src-url">' + X.esc(s) + '</span>' + (c.searchedAt ? '<span class="src-date">检索于 ' + X.esc(c.searchedAt) + "</span>" : "") + "</li>"
    );
    const srcs = srcItems.join("") || '<li class="src-card" style="color:var(--ink-3)">（本条内容暂未标注外部来源，仅供学习参考）</li>';

    card.innerHTML =
      '<button class="panel-close" title="关闭 (Esc)">✕</button>' +
      '<div class="detail-head">' +
        '<div class="detail-crumb"><a data-goto="home">🏛 图书馆</a> › <a data-goto="dom" data-dom="' + X.esc(c.domain) + '">' + X.esc(c.domain) + "</a> › " + X.esc(c.name) + "</div>" +
        '<div class="detail-title-row"><div class="detail-title"><h2>' + X.esc(c.name) + "</h2>" +
        (aliases ? '<div class="aliases">' + aliases + "</div>" : "") + "</div>" +
        '<span class="detail-field">' + X.esc(c.domain) + "</span></div>" +
        (tags ? '<div class="detail-tags">' + tags + "</div>" : "") +
        '<div class="detail-diff">理解难度 <span class="diff-dots">' + diffDots + "</span><span>" + (c.difficulty || 3) + "/5 · 已读 " + (X.state.readCount[c.id] || 0) + " 次</span>" +
        (function(){ const m = X.masteryLabel(c.id); return m ? ' <span class="mastery-badge ' + m.cls + '">' + m.text + "（" + X.masteryOf(c.id).score + "%）</span>" : ""; })() + "</div>" +
      "</div>" +
      '<div class="detail-body">' +
        (c.summary ? '<div class="detail-summary">' + X.esc(c.summary) + "</div>" : "") +
        '<div class="selfcheck">' + X.selfCheck(c) + "</div>" +
        (c.definition ? '<div class="sec"><h3>定义与解释</h3><p>' + X.md(c.definition) + "</p></div>" : "") +
        (principle ? principle : "") +
        (relHtml ? '<div class="sec" id="rel-sec"><h3>概念关系</h3>' + relHtml + "</div>" : "") +
        '<div class="sec" id="path-sec"><h3>学习路径</h3><div id="path-box" class="detail-path"><span class="path-none">计算中…</span></div></div>' +
        (apps ? '<div class="sec"><h3>现实应用</h3><ul>' + apps + "</ul></div>" : "") +
        (c.background ? '<div class="sec"><h3>背景与历史</h3><p>' + X.md(c.background) + "</p></div>" : "") +
        (core ? '<div class="sec"><h3>核心要点</h3><ul>' + core + "</ul></div>" : "") +
        (proscons ? proscons : "") +
        (miscon ? '<div class="sec"><h3>常见误解</h3><ul>' + miscon + "</ul></div>" : "") +
        '<div class="sec"><h3>参考来源' + (c.generated ? ' <span class="gen-badge">联网检索生成</span>' : "") + '</h3>' + (whyHtml || "") + '<ul class="src-list">' + srcs + "</ul></div>" +
        '<div class="sec" id="footprint-sec" style="display:none"><h3>学习足迹</h3><div id="footprint-box"></div></div>' +
        '<div id="ai-area"></div><div id="baike-box"></div>' +
      "</div>" +
      '<div class="detail-actions">' +
        '<button class="btn primary" id="free-btn">免费查询</button>' +
        '<button class="btn" id="ai-btn">深入解析</button>' +
        '<button class="btn" id="bk-btn">📖 百科速览</button>' +
        '<button class="btn" id="quiz-btn">📝 测试</button>' +
        '<button class="btn" id="graph-btn">🕸 图谱</button>' +
        '<button class="btn" id="cmp-btn">⚖ 对比</button>' +
        '<button class="btn" id="fav-btn">' + (X.isFav(c.id) ? "♥ 已收藏" : "☆ 收藏") + "</button>" +
        '<button class="btn" id="copyfull-btn">📋 复制全文</button>' +
        '<button class="btn" id="copy-btn">🔗 复制链接</button>' +
        '<button class="btn" id="report-btn" title="纠错反馈，进入审核队列，不直接修改数据">纠错</button>' +
        '<button class="btn" id="print-btn">🖨 打印</button>' +
      "</div>";
    ov.appendChild(card);
    ov.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    X.renderFootprint(c);
    X.renderInlinePath(c);
    X.wireDetail(c);
    X.refreshRelationStatus(c);
    X.updateReadProgress();
    X.maybeEnqueue(c);
  };
  /* 用户浏览触发自增长：缺失纵向字段→enrich 入队；待补全关系→concept 入队（队列统一节奏，去重冷却） */
  X._enqueueTried = {};
  X.maybeEnqueue = function (c) {
    if (X._enqueueTried[c.id]) return;
    X._enqueueTried[c.id] = true;
    const needVertical = !c.principle || !(c.pros || []).length || !(c.cons || []).length || !(c.applications || []).length;
    if (needVertical) {
      fetch("/api/enqueue", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ kind: "enrich", id: c.id, source: "browse" }) });
    }
    const miss = c.relations.filter(r => { const t = X.resolveConcept(r.target); return !t; }).slice(0, 2);
    miss.forEach(r => {
      fetch("/api/enqueue", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ kind: "concept", target: r.target, source: "browse" }) });
    });
  };

  /* 关系目标状态芯片 + 后台自动补全（无刷新更新） */
  X._relGrowing = {};
  X.refreshRelationStatus = function (c) {
    const sec = document.getElementById("rel-sec");
    if (!sec) return;
    const miss = Array.from(sec.querySelectorAll(".rel-chip.miss"));
    if (!miss.length) return;
    const targets = miss.map(m => m.dataset.miss);
    fetch("/api/completion-status", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ targets }),
    }).then(r => r.json()).then(d => {
      if (!d.ok || !d.statuses) return;
      const todos = [];
      miss.forEach(m => {
        const st = d.statuses[m.dataset.miss];
        if (!st) return;
        if (st.status === "ready" || st.status === "cached") {
          const t = X.resolveConcept(m.dataset.miss);
          if (t) { m.classList.remove("miss"); m.dataset.rel = t.id; m.textContent = t.name; }
        } else if (st.status === "growing") {
          m.classList.add("growing"); m.textContent = "⌛ 正在收录…";
        } else if (st.status === "pending") {
          m.classList.add("waiting"); m.textContent = "⏸ 待验证（点击重试）";
          m.addEventListener("click", () => X._growRelation(m.dataset.miss));
        } else {
          m.classList.add("todo"); m.textContent = "⏳ 待收录（点击生成）";
          m.addEventListener("click", () => X._growRelation(m.dataset.miss));
          todos.push(m.dataset.miss);
        }
      });
      // 后台自动补全前 2 个待收录目标（经队列，不阻塞）
      todos.slice(0, 2).forEach(t => {
        fetch("/api/enqueue", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ kind: "concept", target: t, source: "browse" }) }).then(() => {
          if (sec) sec.querySelectorAll('.rel-chip[data-miss="' + X.esc(t) + '"]').forEach(m => { m.classList.add("growing"); m.textContent = "⌛ 已排入队列…"; });
        });
      });
    }).catch(() => {});
  };
  X._growRelation = function (target, silent) {
    if (X._relGrowing[target]) return;         // 单飞：同一目标只允许一个任务
    X._relGrowing[target] = true;
    const sec = document.getElementById("rel-sec");
    if (sec) sec.querySelectorAll('.rel-chip[data-miss="' + X.esc(target) + '"]').forEach(m => { m.classList.add("growing"); m.textContent = "⌛ 正在收录…"; });
    if (!silent) X.toast("正在收录「" + target + "」…（免费本地模型）");
    fetch("/api/grow-target", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ target }),
    }).then(r => r.json()).then(d => {
      X._relGrowing[target] = false;
      if (d.ok && (d.concept || d.source === "dup" || d.source === "local" || d.source === "cache")) {
        // 数据已更新：重载语料并刷新当前详情的关系区（无刷新）
        X.reloadData();
        X.renderShelves(X._currentFilter);
        const cur = X.currentId && X.byId.get(X.currentId);
        if (cur && document.getElementById("detail") && !document.getElementById("detail").classList.contains("hidden")) {
          X.refreshRelationStatus(cur);
        }
        X.toast("已收录「" + (d.concept ? d.concept.name : target) + "」✓");
      } else {
        if (sec) sec.querySelectorAll('.rel-chip[data-miss="' + X.esc(target) + '"]').forEach(m => { m.classList.add("waiting"); m.textContent = "⏸ 待验证（点击重试）"; });
        if (!silent) X.toast(d.reject ? "已拒绝：" + d.reason : (d.error || "收录失败"));
      }
    }).catch(() => { X._relGrowing[target] = false; });
  };
  /* 概念自检报告：各字段完整度 */
  X.selfCheck = function (c) {
    const f = [
      ["定义", c.definition && c.definition.length >= 60],
      ["原理", !!c.principle],
      ["应用", !!(c.applications || []).length],
      ["前置", !!c.prerequisites || (c.relations || []).some(r => r.type === "prerequisite")],
      ["后续", (c.relations || []).some(r => r.type === "followup")],
      ["来源", !!(c.sources || []).length],
      ["关系", (c.relations || []).length >= 2],
    ];
    return '<span class="sc-title">自检</span>' + f.map(x => '<span class="sc-item ' + (x[1] ? "on" : "off") + '">' + x[0] + (x[1] ? "✓" : "✗") + "</span>").join("");
  };

  X.renderInlinePath = function (c) {
    const box = document.getElementById("path-box");
    if (!box) return;
    const p = X.learningPath(c.id, 2);
    if (!p) { box.innerHTML = '<span class="path-none">暂无学习路径</span>'; return; }
    let n = 1, html = "";
    const mk = (item, tag) => '<span class="path-step-mini" data-id="' + X.esc(item.c.id) + '"><span class="path-no">' + n++ + '</span><span class="path-tag">' + tag + '</span>' + X.esc(item.c.name) + "</span>";
    html += (p.prereqs.length ? p.prereqs.map(x => mk(x, "前置")).join("") : "") +
      '<span class="path-step-mini cur" data-id="' + X.esc(c.id) + '"><span class="path-no">' + n++ + '</span><span class="path-tag cur">核心</span>' + X.esc(c.name) + "</span>" +
      (p.followups.length ? p.followups.map(x => mk(x, "后续")).join("") : "");
    box.innerHTML = html || '<span class="path-none">暂无学习路径</span>';
    box.querySelectorAll(".path-step-mini").forEach(b => b.addEventListener("click", () => X.openConcept(b.dataset.id)));
  };

  X.renderFootprint = function (c) {
    const sec = document.getElementById("footprint-sec");
    if (!sec) return;
    const box = document.getElementById("footprint-box");
    const rc = X.state.readCount[c.id] || 0;
    const m = X.masteryOf(c.id);
    const lastRead = X.state.history.find(h => h.id === c.id);
    let html = "";
    html += '<div class="fp-row">已读 <b>' + rc + "</b> 次" + (lastRead ? " · 最近 " + X.fmtTime(lastRead.t) : "") + "</div>";
    if (m) html += '<div class="fp-row">掌握度 <span class="mastery-badge ' + X.masteryLabel(c.id).cls + '">' + X.masteryLabel(c.id).text + " " + m.score + "%</span>（" + m.correct + "/" + m.total + "）</div>";
    fetch("/api/version?id=" + encodeURIComponent(c.id)).then(r => r.json()).then(d => {
      if (d.ok && d.versions && d.versions.length) {
        const act = { create: "新增", update: "更新", enrich: "纵向补全", rollback: "回滚", "moderation-wrong-source": "来源修正", "moderation-wrong-relation": "关系修正", "moderation-flag": "标记复审" };
        html += '<div class="fp-row">版本时间线</div><div class="fp-timeline">' + d.versions.slice(-8).map(v => '<div class="fp-node"><i></i><span>' + (act[v.action] || v.action) + "</span><small>" + X.fmtTime(v.at) + "</small></div>").join("") + "</div>";
      }
      if (html) { sec.style.display = ""; box.innerHTML = html; }
    }).catch(() => { if (html) { sec.style.display = ""; box.innerHTML = html; } });
  };

  X.wireDetail = function (c) {
    const ov = document.getElementById("detail");
    ov.querySelector(".panel-close").addEventListener("click", X.closeDetail);
    ov.querySelectorAll("[data-goto=home]").forEach(a => a.addEventListener("click", X.closeDetail));
    ov.querySelectorAll("[data-goto=dom]").forEach(a => a.addEventListener("click", () => {
      X.closeDetail();
      X.renderShelves(a.dataset.dom);
      const el = document.getElementById("shelf-" + X.slug(a.dataset.dom));
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "center" }), 60);
    }));
    ov.querySelectorAll(".rel-chip[data-rel]").forEach(ch => ch.addEventListener("click", () => X.openConcept(ch.dataset.rel)));
    ov.querySelectorAll(".rel-chip.miss").forEach(ch => ch.addEventListener("click", () => X.toast("「" + ch.dataset.miss + "」尚未收录——可深入解析研究")));
    ov.querySelector("#graph-btn").addEventListener("click", () => X.openGraph(c.id));
    ov.querySelector("#quiz-btn").addEventListener("click", () => X.openQuiz(c));
    ov.querySelector("#cmp-btn").addEventListener("click", () => X.compareAdd(c.id));
    ov.querySelector("#fav-btn").addEventListener("click", () => {
      const on = X.toggleFav(c.id);
      ov.querySelector("#fav-btn").textContent = on ? "♥ 已收藏" : "☆ 收藏";
      X.renderShelves(X._currentFilter);
      X.updateFavBadge();
      X.toast(on ? "已加入收藏 ♥" : "已取消收藏");
    });
    ov.querySelector("#copy-btn").addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(location.origin + location.pathname + "?c=" + encodeURIComponent(c.id));
        X.toast("链接已复制");
      } catch (e) { X.toast("复制失败，请手动复制地址栏链接"); }
    });
    ov.querySelector("#print-btn").addEventListener("click", () => X.printConcept(c));
    ov.querySelector("#report-btn").addEventListener("click", () => X.openReport(c));
    ov.querySelector("#copyfull-btn").addEventListener("click", () => {
      const parts = [c.name + "（" + c.domain + "）", c.summary, c.definition, c.background,
        "核心要点：\n- " + (c.core || []).join("\n- "),
        "现实应用：\n- " + (c.applications || []).join("\n- "),
        "常见误解：\n- " + (c.misconceptions || []).join("\n- "),
        "相关概念：\n- " + (c.related || []).join("\n- "),
        "参考来源：\n- " + (c.sources || []).join("\n- ")];
      const txt = parts.filter(Boolean).join("\n\n");
      navigator.clipboard.writeText(txt).then(() => X.toast("全文已复制")).catch(() => X.toast("复制失败"));
    });
    ov.querySelector("#bk-btn").addEventListener("click", () => X.baikeLookup(c.name));
    ov.querySelector("#free-btn").addEventListener("click", () => {
      X.closeDetail();
      X.askAI("解析概念「" + c.name + "」：" + (c.summary || ""));
    });
    ov.querySelector("#ai-btn").addEventListener("click", () => X.aiDeepDive(c));
    // 滚动进度
    const card = ov.querySelector(".panel-card");
    card.addEventListener("scroll", X.updateReadProgress);
  };

  /* ── 概念测试（openQuiz 补全：原按钮无实现） ─────────────── */
  X.openQuiz = function (c) {
    let ov = document.getElementById("quiz-panel");
    if (!ov) { ov = document.createElement("div"); ov.id = "quiz-panel"; ov.className = "overlay hidden"; document.body.appendChild(ov); }
    ov.innerHTML = '<div class="panel-card quiz-card"><button class="panel-close" title="关闭">✕</button><h3 class="cmp-title">📝 ' + X.esc(c.name) + ' · 测试</h3><div class="quiz-body"><div class="sp-empty">加载中…</div></div></div>';
    ov.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    const qb = ov.querySelector(".quiz-body");
    ov.querySelector(".panel-close").addEventListener("click", () => { ov.classList.add("hidden"); document.body.style.overflow = ""; });
    ov.addEventListener("click", e => { if (e.target === ov) { ov.classList.add("hidden"); document.body.style.overflow = ""; } });
    fetch("/api/quiz", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: c.name }) })
      .then(r => r.json()).then(d => {
        if (!d.ok || !d.quiz || !d.quiz.length) { qb.innerHTML = '<div class="sp-empty">出题失败：' + X.esc(d.error || "未知错误") + '</div>'; return; }
        X._renderQuiz(qb, c, d.quiz, !!d.cached);
      }).catch(() => { qb.innerHTML = '<div class="sp-empty">无法连接服务</div>'; });
  };
  X._renderQuiz = function (qb, c, quiz, cached) {
    let idx = 0, correct = 0;
    const mk = () => {
      const q = quiz[idx];
      const opts = q.options.map((o, i) => '<button class="quiz-opt" data-i="' + i + '">' + X.esc(o) + '</button>').join("");
      qb.innerHTML = '<div class="quiz-q"><span class="quiz-progress">' + (idx + 1) + '/' + quiz.length + '</span>' + X.esc(q.q) + '</div><div class="quiz-opts">' + opts + '</div>' +
        '<div class="quiz-fb"></div>' + (cached ? '<small class="quiz-cached">（题目来自 24h 缓存）</small>' : "");
      qb.querySelectorAll(".quiz-opt").forEach(b => b.addEventListener("click", () => {
        const i = Number(b.dataset.i);
        const fb = qb.querySelector(".quiz-fb");
        const right = i === q.answer;
        if (right) correct++;
        b.classList.add(right ? "right" : "wrong");
        qb.querySelectorAll(".quiz-opt").forEach(x => { if (Number(x.dataset.i) === q.answer) x.classList.add("right"); x.disabled = true; });
        fb.innerHTML = (right ? '<span class="quiz-ok">✓ 回答正确</span>' : '<span class="quiz-no">✕ 回答错误</span>') +
          (q.explain ? '<div class="quiz-explain">' + X.esc(q.explain) + "</div>" : "") +
          (idx < quiz.length - 1 ? '<button class="btn quiz-next">下一题</button>' : '<button class="btn quiz-next">查看结果</button>');
        fb.querySelector(".quiz-next").addEventListener("click", () => {
          idx++;
          if (idx < quiz.length) mk(); else finish();
        });
      }));
    };
    const finish = () => {
      X.recordMastery(c.id, correct, quiz.length);
      const m = X.masteryLabel(c.id);
      const score = Math.round(correct / quiz.length * 100);
      qb.innerHTML = '<div class="quiz-result"><div class="quiz-score">' + score + '%</div><div class="mastery-badge ' + m.cls + '">' + m.text + '</div><p>答对 ' + correct + ' / ' + quiz.length + ' 题</p>' +
        '<button class="btn quiz-retry">再测一次</button></div>';
      qb.querySelector(".quiz-retry").addEventListener("click", () => { idx = 0; correct = 0; mk(); });
    };
    mk();
  };
  X.closeDetail = function () {
    document.getElementById("detail").classList.add("hidden");
    document.body.style.overflow = "";
    X.updateReadProgress(true);
  };

  X.updateReadProgress = function (reset) {
    const bar = document.getElementById("read-progress");
    if (!bar) return;
    const card = document.querySelector("#detail .panel-card");
    if (!card || reset) { bar.style.width = "0%"; return; }
    const p = card.scrollTop / Math.max(1, card.scrollHeight - card.clientHeight);
    bar.style.width = Math.min(100, p * 100) + "%";
  };

  /* ── markdown 轻渲染 ─────────────────────────────── */
  X.md = function (s) {
    return X.esc(s).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/\*([^*]+?)\*/g, "<i>$1</i>").replace(/`([^`]+)`/g, "<code style='font-family:var(--font-mono);background:var(--sel);padding:1px 5px;border-radius:4px;font-size:.92em'>$1</code>");
  };

  /* ── 打印 ─────────────────────────────────────────── */
  X.printConcept = function (c) {
    const w = window.open("", "_blank", "width=820,height=900");
    if (!w) { X.toast("浏览器阻止了弹窗，请允许后重试"); return; }
    const core = (c.core || []).map(s => "<li>" + X.md(s) + "</li>").join("");
    const apps = (c.applications || []).map(s => "<li>" + X.md(s) + "</li>").join("");
    const srcs = (c.sources || []).map(s => "<li>" + X.esc(s) + "</li>").join("");
    w.document.write("<!doctype html><html lang=zh-CN><head><meta charset=utf-8><title>" + X.esc(c.name) + " · 析概</title>" +
      "<style>body{font-family:'Songti SC',SimSun,serif;max-width:720px;margin:30px auto;padding:0 20px;color:#2e2417;line-height:1.9}h1{letter-spacing:4px;border-bottom:2px solid #c9a227;padding-bottom:10px}h2{color:#8a6d1d;letter-spacing:2px;margin-top:26px;font-size:18px}li{margin:5px 0}code{background:#f2ead2;padding:1px 5px}.meta{color:#8a7a60;font-size:13px}.sum{font-style:italic;font-size:17px;border-left:3px solid #c9a227;padding-left:14px;margin:20px 0}a{color:#8a6d1d;word-break:break-all}@media print{body{margin:0}}</style></head><body>" +
      "<h1>" + X.esc(c.name) + "</h1>" +
      '<div class="meta">' + X.esc(c.domain) + " · " + (c.aliases || []).join(" / ") + " · 难度 " + (c.difficulty || 3) + "/5 · 析概知识库整理" + "</div>" +
      (c.summary ? '<p class="sum">' + X.esc(c.summary) + "</p>" : "") +
      (c.definition ? "<h2>定义与解释</h2><p>" + X.md(c.definition) + "</p>" : "") +
      (c.background ? "<h2>背景与历史</h2><p>" + X.md(c.background) + "</p>" : "") +
      (core ? "<h2>核心要点</h2><ul>" + core + "</ul>" : "") +
      (apps ? "<h2>现实应用</h2><ul>" + apps + "</ul>" : "") +
      (srcs ? "<h2>参考来源</h2><ul>" + srcs + "</ul>" : "") +
      '<p class="meta" style="margin-top:30px">由「析概 · 知识图书馆」整理 · ' + X.fmtTime(Date.now()) + "</p>" +
      "</body></html>");
    w.document.close();
    setTimeout(() => { try { w.print(); } catch (e) {} }, 300);
  };

  /* ── 百度百科速览 ─────────────────────────────────── */
  X.baikeLookup = function (name) {
    const box = document.getElementById("baike-box");
    box.innerHTML = '<div class="ai-box"><div class="ai-head"><span class="spin">⏳</span> 正在查询百科词条「' + X.esc(name) + '」…</div></div>';
    const url = "https://baike.baidu.com/api/openapi/BaikeLemmaCardApi?scope=103&format=json&appid=379020&bk_key=" + encodeURIComponent(name) + "&bk_length=600&callback=__xigai_baike";
    window.__xigai_baike = function (data) {
      if (!data || !data.title) {
        box.innerHTML = '<div class="baike-card">未找到「' + X.esc(name) + '」的百科词条。</div>';
        return;
      }
      const cards = (data.card || []).map(c =>
        '<div><b>' + X.esc(c.name || "") + "</b>：" + X.esc(c.value || c.text || "") + "</div>"
      ).join("");
      box.innerHTML = '<div class="baike-card"><div class="bk-title">📖 ' + X.esc(data.title) + '</div><div>' + X.esc(data.desc || "") + "</div>" + cards +
        '<div class="bk-desc">来源：百度百科 · ' + X.esc(data.url || "") + "</div></div>";
      delete window.__xigai_baike;
    };
    const s = document.createElement("script");
    s.src = url;
    s.onerror = function () {
      box.innerHTML = '<div class="baike-card">百科查询失败（网络受限或词条不存在）。</div>';
      delete window.__xigai_baike;
    };
    document.head.appendChild(s);
    setTimeout(() => { if (window.__xigai_baike) { box.innerHTML = '<div class="baike-card">百科查询超时。</div>'; delete window.__xigai_baike; } }, 12000);
  };

  /* ── AI 深度解析（走本地服务 → dsh headless） ─────── */
  X.aiDeepDive = function (c) {
    const area = document.getElementById("ai-area");
    // 免费优先：先看本地是否有可免费调用的引擎
    fetch("/api/free-ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ q: "深度解析概念「" + c.name + "」：" + (c.summary || "") }),
    }).then(r => r.json()).then(fd => {
      if (fd.ok) {
        area.innerHTML = '<div class="ai-box"><div class="ai-head">🆓 免费 · ' + (fd.engine === "ollama" ? "Ollama" : "LM Studio") + "（" + fd.model + "）</div><pre>" + X.esc(fd.text) + "</pre></div>";
        return;
      }
      X.aiDeepDivePaid(c, area);
    }).catch(() => X.aiDeepDivePaid(c, area));
  };
  X.aiDeepDivePaid = function (c, area) {
    const cachedKey = "ai:" + c.id;
    const cached = X.store.get(cachedKey, null);
    if (cached && cached.t > Date.now() - 7 * 864e5) {
      area.innerHTML = '<div class="ai-box"><div class="ai-head">深入解析（缓存）</div><pre>' + X.esc(cached.text) + '</pre><div class="ai-meta">生成于 ' + X.fmtTime(cached.t) + '</div><div style="margin-top:10px"><button class="mini-btn" id="ai-add">📥 加入书库（自生长）</button></div></div>';
      const addBtn2 = area.querySelector("#ai-add");
      if (addBtn2) addBtn2.addEventListener("click", () => X.addConceptToLibrary(c, cached.text));
      X.toast("已展示缓存的 AI 解析");
      return;
    }
    if (!confirm("本机没有可免费调用的本地 AI 引擎。付费方式将调用 DeepSeek 模型联网研究「" + c.name + "」，消耗少量模型额度，结果缓存 7 天。是否继续？")) return;
    area.innerHTML = '<div class="ai-box"><div class="ai-head"><span class="spin">⏳</span> 正在联网检索与分析「' + X.esc(c.name) + '」…</div></div>';
    fetch("/api/ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: c.id, name: c.name, domain: c.domain }),
    }).then(r => r.json()).then(data => {
      if (data.ok) {
        X.store.set(cachedKey, { t: Date.now(), text: data.text });
        area.innerHTML = '<div class="ai-box"><div class="ai-head">深入解析' + (data.cached ? "（缓存）" : "（联网生成）") + '</div><pre>' + X.esc(data.text) + '</pre><div class="ai-meta">' + (data.cached ? "来自缓存" : "检索整理完成 · 结果已缓存 7 天") + '</div><div style="margin-top:10px"><button class="mini-btn" id="ai-add">📥 加入书库（自生长）</button></div></div>';
        const addBtn = area.querySelector("#ai-add");
        if (addBtn) addBtn.addEventListener("click", () => X.addConceptToLibrary(c, data.text));
      } else {
        area.innerHTML = '<div class="ai-error">解析失败：' + X.esc(data.error || "未知错误") + '<br><span style="font-size:12px">请确认本地服务（server.js）正在运行。</span></div>';
      }
    }).catch(e => {
      area.innerHTML = '<div class="ai-error">无法连接本地检索服务（' + X.esc(e.message) + "）。<br><span style='font-size:12px'>提示：在 D:\析概 目录运行 <b>node server.js</b> 启动服务后重试。</span></div>";
    });
  };

  /* ── 侧边面板：收藏/历史 ──────────────────────────── */
  X._panelTab = "fav";
  X.showSidePanel = function (tab) {
    X._panelTab = tab || X._panelTab;
    const ov = document.getElementById("side-panel");
    ov.innerHTML = "";
    const card = document.createElement("div");
    card.className = "panel-card";
    const favs = X.state.favorites.map(id => X.byId.get(id)).filter(Boolean);
    const hist = X.state.history.map(h => ({ ...h, c: X.byId.get(h.id) })).filter(h => h.c);
    const li = arr => arr.map(it => {
      const c = it.c || it;
      const st = X.spineStyle(c, X.state.theme);
      return '<li data-id="' + X.esc(c.id) + '"><span class="bk" style="background:' + st.background + '"></span>' +
        '<span class="nm">' + X.esc(c.name) + '</span><span class="fd">' + X.esc(c.domain) + "</span>" +
        (it.t ? '<span class="tm">' + X.fmtTime(it.t) + "</span>" : "") +
        '<span class="rm" data-rm="' + X.esc(c.id) + '">✕</span></li>';
    }).join("");
    card.innerHTML =
      '<button class="panel-close">✕</button>' +
      "<h3>我的书斋 <span class='count'>" + (X._panelTab === "fav" ? favs.length + " 本收藏" : hist.length + " 条足迹") + "</span></h3>" +
      '<div class="sp-tabs"><button class="sp-tab' + (X._panelTab === "fav" ? " active" : "") + '" data-tab="fav">♥ 收藏</button>' +
      '<button class="sp-tab' + (X._panelTab === "hist" ? " active" : "") + '" data-tab="hist">🕘 阅读历史</button></div>' +
      '<ul class="sp-list">' + (X._panelTab === "fav" ? (li(favs) || '<li class="sp-empty">还没有收藏——点开一本书，点 ♥ 收藏</li>') : (li(hist) || '<li class="sp-empty">还没有阅读记录</li>')) + "</ul>" +
      '<div class="sp-actions"><button class="mini-btn" id="sp-clear">清空' + (X._panelTab === "fav" ? "收藏" : "历史") + "</button>" +
      '<button class="mini-btn" id="sp-export">导出' + (X._panelTab === "fav" ? "收藏" : "历史") + "</button></div>";
    ov.appendChild(card);
    ov.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    ov.querySelector(".panel-close").addEventListener("click", () => { ov.classList.add("hidden"); document.body.style.overflow = ""; });
    ov.querySelectorAll(".sp-tab").forEach(t => t.addEventListener("click", () => X.showSidePanel(t.dataset.tab)));
    ov.querySelectorAll("li[data-id]").forEach(li => li.addEventListener("click", e => {
      if (e.target.classList.contains("rm")) return;
      ov.classList.add("hidden"); document.body.style.overflow = "";
      X.openConcept(li.dataset.id);
    }));
    ov.querySelectorAll("[data-rm]").forEach(rm => rm.addEventListener("click", e => {
      e.stopPropagation();
      const id = rm.dataset.rm;
      if (X._panelTab === "fav") { X.state.favorites = X.state.favorites.filter(x => x !== id); }
      else { X.state.history = X.state.history.filter(h => h.id !== id); }
      X.saveState(); X.updateFavBadge(); X.showSidePanel(X._panelTab); X.toast("已移除");
    }));
    ov.querySelector("#sp-clear").addEventListener("click", () => {
      if (X._panelTab === "fav") X.state.favorites = []; else X.state.history = [];
      X.saveState(); X.updateFavBadge(); X.showSidePanel(X._panelTab); X.toast("已清空");
    });
    ov.querySelector("#sp-export").addEventListener("click", () => {
      const list = X._panelTab === "fav" ? X.state.favorites.map(id => X.byId.get(id)).filter(Boolean).map(c => ({ name: c.name, domain: c.domain })) : X.state.history;
      const txt = JSON.stringify(list, null, 2);
      const ta = document.createElement("textarea");
      ta.value = txt; document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); X.toast("已复制到剪贴板"); } catch (e) { X.toast(txt); }
      ta.remove();
    });
  };
  X.updateFavBadge = function () {
    const b = document.getElementById("fav-badge");
    if (b) { b.textContent = X.state.favorites.length; b.classList.toggle("hidden", !X.state.favorites.length); }
  };

  /* ── 主题面板 ─────────────────────────────────────── */
  X.showThemePanel = function () {
    const ov = document.getElementById("theme-panel");
    ov.innerHTML = "";
    const card = document.createElement("div");
    card.className = "panel-card";
    const items = X.THEMES.map(t =>
      '<div class="theme-item' + (t.key === X.state.theme ? " active" : "") + '" data-key="' + t.key + '"><div class="theme-swatch" data-swatch="' + t.key + '">' + t.emoji + "</div><p>" + t.name + "</p></div>"
    ).join("");
    card.innerHTML =
      '<button class="panel-close">✕</button><h3>🖌 主题换肤</h3>' +
      '<div class="theme-grid">' + items + "</div>" +
      '<div class="settings-row"><label>阅读字号</label><div class="ctrl"><button class="mini-btn" id="fs-dec">A−</button><span id="fs-val" style="min-width:44px;text-align:center;font-size:13px">' + Math.round(X.state.fontScale * 100) + '%</span><button class="mini-btn" id="fs-inc">A+</button></div></div>' +
      '<div class="settings-row"><label>行距</label><div class="ctrl"><button class="mini-btn" id="lh-dec">紧凑</button><span id="lh-val" style="min-width:56px;text-align:center;font-size:13px">' + (X.state.lineHeight ? "舒适" : "紧凑") + '</span><button class="mini-btn" id="lh-inc">宽松</button></div></div>' +
      '<div class="settings-row"><label>书架视图</label><div class="ctrl"><button class="mini-btn" id="vw-toggle">' + X.VIEW_LABELS[X.state.viewMode] + '</button><button class="mini-btn" id="vw-restore">恢复被藏书 (' + X.state.hiddenBooks.length + ')</button></div></div>';
    ov.appendChild(card);
    ov.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    ov.querySelector(".panel-close").addEventListener("click", () => { ov.classList.add("hidden"); document.body.style.overflow = ""; });
    ov.querySelectorAll(".theme-item").forEach(it => it.addEventListener("click", () => X.applyTheme(it.dataset.key)));
    ov.querySelectorAll(".theme-swatch").forEach(s => {
      const k = s.dataset.swatch;
      s.style.background = X.swatchBg(k);
    });
    ov.querySelector("#fs-dec").addEventListener("click", () => { X.state.fontScale = Math.max(.8, +(X.state.fontScale - .05).toFixed(2)); X.applyTheme(X.state.theme); ov.querySelector("#fs-val").textContent = Math.round(X.state.fontScale * 100) + "%"; });
    ov.querySelector("#fs-inc").addEventListener("click", () => { X.state.fontScale = Math.min(1.3, +(X.state.fontScale + .05).toFixed(2)); X.applyTheme(X.state.theme); ov.querySelector("#fs-val").textContent = Math.round(X.state.fontScale * 100) + "%"; });
    ov.querySelector("#lh-dec").addEventListener("click", () => { X.state.lineHeight = 0; X.applyTheme(X.state.theme); ov.querySelector("#lh-val").textContent = "紧凑"; });
    ov.querySelector("#lh-inc").addEventListener("click", () => { X.state.lineHeight = 1; X.applyTheme(X.state.theme); ov.querySelector("#lh-val").textContent = "舒适"; });
    ov.querySelector("#vw-toggle").addEventListener("click", () => {
      const order = ["shelf", "3d", "list"];
      X.state.viewMode = order[(order.indexOf(X.state.viewMode) + 1) % order.length];
      X.saveState();
      X.renderShelves(X._currentFilter);
      ov.querySelector("#vw-toggle").textContent = X.VIEW_LABELS[X.state.viewMode];
      X.toast("已切换为" + X.VIEW_LABELS[X.state.viewMode]);
    });
    ov.querySelector("#vw-restore").addEventListener("click", () => {
      X.state.hiddenBooks = [];
      X.saveState();
      X.renderShelves(X._currentFilter);
      X.toast("已恢复全部被藏书籍");
      X.showThemePanel();
    });
  };
  X.VIEW_LABELS = { shelf: "平面书架", "3d": "3D 书架", list: "列表视图" };
  X.swatchBg = function (key) {
    const map = {
      gold: "linear-gradient(135deg,#2a1f15 45%,#c9a227)", midnight: "linear-gradient(135deg,#0e1626 45%,#e0b94a)",
      parchment: "linear-gradient(135deg,#e3d5b5 45%,#8c6a1f)", emerald: "linear-gradient(135deg,#111f19 45%,#d4af37)",
      light: "linear-gradient(135deg,#f6f4ee 45%,#b8860b)", rose: "linear-gradient(135deg,#f6ebe8 45%,#b76e3c)",
    };
    return map[key] || map.gold;
  };

  /* ── 随机 / 每日 ──────────────────────────────────── */
  X.randomBook = function () {
    if (!X.data.length) return;
    const c = X.data[Math.floor(Math.random() * X.data.length)];
    X.openConcept(c.id);
    X.toast("随机翻开一本书：" + c.name);
  };
  X.dailyTerm = function () {
    if (!X.data.length) return null;
    const i = X.daySeed() % X.data.length;
    return X.data[i];
  };


  /* ── 桌面书（拖到页面的浮窗书） ───────────────────── */
  X.renderDesk = function () {
    let holder = document.getElementById("desk-layer");
    if (!holder) { holder = document.createElement("div"); holder.id = "desk-layer"; document.body.appendChild(holder); }
    holder.innerHTML = "";
    X.state.deskBooks.forEach(b => {
      const c = X.byId.get(b.id);
      if (!c) return;
      const st = X.spineStyle(c, X.state.theme);
      const el = document.createElement("div");
      el.className = "desk-book";
      el.dataset.id = c.id;
      el.title = c.name + "（双击打开）";
      el.style.cssText = "left:" + b.x + "px;top:" + b.y + "px;background:" + st.background + ";--spine-ink:" + st["--spine-ink"] + ";width:36px;height:58px";
      el.innerHTML = '<div class="book-title" style="font-size:10px;letter-spacing:1px">' + X.esc(c.name.length > 6 ? c.name.slice(0, 6) : c.name) + '</div><button class="db-x" title="收起">✕</button>';
      el.addEventListener("mousedown", e => { if (e.target.classList.contains("db-x")) return; X.dragDesk(el, e); });
      el.querySelector(".db-x").addEventListener("click", e => { e.stopPropagation(); X.removeDeskBook(c.id); X.renderDesk(); });
      el.addEventListener("dblclick", () => X.openConcept(c.id));
      holder.appendChild(el);
    });
  };
  X.dragDesk = function (el, e) {
    e.preventDefault();
    const move = ev => { el.style.left = (ev.clientX - 18) + "px"; el.style.top = (ev.clientY - 29) + "px"; };
    const up = ev => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseup", up);
      const entry = X.state.deskBooks.find(b => b.id === el.dataset.id);
      if (entry) { entry.x = Math.max(0, ev.clientX - 18); entry.y = Math.max(0, ev.clientY - 29); X.saveState(); }
    };
    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", up);
  };
  X.onBookDragStart = function (e) {
    const book = e.target.closest(".book");
    if (!book) return;
    const id = book.dataset.id;
    document.body.classList.add("dragging");
    e.dataTransfer.setData("text/xigai-id", id);
    e.dataTransfer.effectAllowed = "copyMove";
    const c = X.byId.get(id);
    if (c) {
      const st = X.spineStyle(c, X.state.theme);
      const g = document.createElement("div");
      g.style.cssText = "width:" + st.width + ";height:" + st.height + ";background:" + st.background + ";border-radius:4px;opacity:.85";
      document.body.appendChild(g);
      e.dataTransfer.setDragImage(g, 14, 14);
      setTimeout(() => g.remove(), 0);
    }
  };
  X.initDnD = function () {
    ["btn-fav", "btn-hist"].forEach(bid => {
      const t = document.getElementById(bid);
      if (!t) return;
      t.addEventListener("dragover", e => { e.preventDefault(); e.dataTransfer.dropEffect = "move"; });
      t.addEventListener("drop", e => {
        e.preventDefault();
        const cid = e.dataTransfer.getData("text/xigai-id");
        const c = X.byId.get(cid);
        if (!c) return;
        if (t.id === "btn-fav") { X.toggleFav(cid); X.updateFavBadge(); X.renderShelves(X._currentFilter); X.toast(c.name + (X.isFav(cid) ? " 已收藏 ♥" : " 已取消收藏")); }
        else { X.recordRead(c); X.openConcept(c.id); }
      });
    });
    const trash = document.getElementById("btn-trash");
    if (trash) {
      trash.addEventListener("dragover", e => { e.preventDefault(); e.dataTransfer.dropEffect = "move"; });
      trash.addEventListener("drop", e => {
        e.preventDefault();
        const cid = e.dataTransfer.getData("text/xigai-id");
        if (!cid) return;
        X.toggleHidden(cid);
        X.renderShelves(X._currentFilter);
        X.toast("已藏起此书（可在主题面板恢复）");
      });
    }
    document.addEventListener("dragend", () => document.body.classList.remove("dragging"));
    document.addEventListener("dragover", e => { if (e.target.closest(".book,.desk-book,#search-results,.overlay")) return; e.preventDefault(); e.dataTransfer.dropEffect = "copy"; });
    document.addEventListener("drop", e => {
      if (e.target.closest(".book,.desk-book,#search-results,.overlay,button")) return;
      const cid = e.dataTransfer.getData("text/xigai-id");
      if (!cid) return;
      e.preventDefault();
      X.addDeskBook(cid, e.clientX - 18, e.clientY - 29);
      X.renderDesk();
      X.toast("书已放到你的书桌上 📌（可拖动、双击打开）");
    });
  };

  /* ── 3D 视差 ──────────────────────────────────────── */
  X.initParallax = function () {
    const lib = document.getElementById("library");
    if (!lib) return;
    lib.addEventListener("mousemove", e => {
      if (X.state.viewMode !== "3d") { lib.style.setProperty("--rx", "0deg"); lib.style.setProperty("--ry", "0deg"); return; }
      const r = lib.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width - 0.5;
      const ny = (e.clientY - r.top) / r.height - 0.5;
      lib.style.setProperty("--rx", (-ny * 6).toFixed(2) + "deg");
      lib.style.setProperty("--ry", (nx * 8).toFixed(2) + "deg");
    });
  };

  /* ── AI 解析回填书库（自生长） ────────────────────── */
  X.addConceptToLibrary = function (c, text) {
    fetch("/api/add-concept", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: c.id, name: c.name, domain: c.domain, analysis: text }),
    }).then(r => r.json()).then(d => {
      if (d.ok) {
        const cnew = d.concept;
        window.XIGAI["AI 生成"] = window.XIGAI["AI 生成"] || [];
        if (!X.byId.has(cnew.id)) window.XIGAI["AI 生成"].push(cnew);
        X.reloadData();
        X.renderShelves(X._currentFilter);
        X.renderDesk();
        X.toast("已加入书库「AI 生成」架 📚 刷新后永久保留");
      } else {
        X.toast("加入失败：" + (d.error || "未知错误"));
      }
    }).catch(() => X.toast("无法连接本地服务，加入失败"));
  };

  /* ── 概念对比 ─────────────────────────────────────── */
  X.compareList = [];   // 最多 3 个，会话内
  X.compareAdd = function (id) {
    const c = X.byId.get(id);
    if (!c) return 0;
    if (X.compareList.includes(id)) { X.toast("已在对比列表中"); return X.compareList.length; }
    if (X.compareList.length >= 3) { X.toast("最多同时对比 3 个概念"); return X.compareList.length; }
    X.compareList.push(id);
    X.renderCompareTray();
    X.toast("已加入对比（" + X.compareList.length + "/3）");
    return X.compareList.length;
  };
  X.compareRemove = function (id) {
    X.compareList = X.compareList.filter(x => x !== id);
    X.renderCompareTray();
    if (!X.compareList.length) X.closeCompare();
  };
  X.renderCompareTray = function () {
    let tray = document.getElementById("cmp-tray");
    if (!tray) { tray = document.createElement("div"); tray.id = "cmp-tray"; document.body.appendChild(tray); }
    if (!X.compareList.length) { tray.classList.add("hidden"); return; }
    tray.classList.remove("hidden");
    const items = X.compareList.map(id => {
      const c = X.byId.get(id);
      if (!c) return "";
      const st = X.spineStyle(c, X.state.theme);
      return '<span class="cmp-chip" style="background:' + st.background + '"><i>' + X.esc(c.name.length > 8 ? c.name.slice(0, 8) : c.name) + '</i><b data-rm="' + X.esc(id) + '">✕</b></span>';
    }).join("");
    tray.innerHTML = '<span class="cmp-label">⚖ 对比</span>' + items +
      (X.compareList.length >= 2 ? '<button class="mini-btn" id="cmp-go">开始对比</button>' : "") +
      '<button class="mini-btn" id="cmp-clear">清空</button>';
    tray.querySelectorAll("[data-rm]").forEach(b => b.addEventListener("click", () => X.compareRemove(b.dataset.rm)));
    const go = tray.querySelector("#cmp-go");
    if (go) go.addEventListener("click", X.showCompare);
    const cl = tray.querySelector("#cmp-clear");
    if (cl) cl.addEventListener("click", () => { X.compareList = []; X.renderCompareTray(); X.closeCompare(); });
  };
  X.closeCompare = function () {
    const ov = document.getElementById("compare-panel");
    if (ov) ov.classList.add("hidden");
  };
  X.showCompare = function () {
    const list = X.compareList.map(id => X.byId.get(id)).filter(Boolean);
    if (list.length < 2) { X.toast("至少选择 2 个概念对比"); return; }
    let ov = document.getElementById("compare-panel");
    if (!ov) { ov = document.createElement("div"); ov.id = "compare-panel"; ov.className = "overlay hidden"; document.body.appendChild(ov); }
    ov.innerHTML = "";
    const card = document.createElement("div");
    card.className = "panel-card compare-card";
    const row = (label, cells, tag) =>
      '<tr><th>' + label + "</th>" + cells.map(h => "<td" + (tag ? ' class="' + tag + '"' : "") + ">" + h + "</td>").join("") + "</tr>";
    const cell = h => "<td>" + (h || '<span class="cmp-na">—</span>') + "</td>";
    const head = "<tr><th class='cmp-th'>对比项</th>" + list.map(c => "<th>" + X.esc(c.name) + '<br><small>' + X.esc(c.domain) + "</small></th>").join("") + "</tr>";
    const html =
      '<button class="panel-close" id="cmp-close">✕</button>' +
      "<h3 class='cmp-title'>⚖ 概念对比</h3>" +
      '<div class="cmp-scroll"><table class="cmp-table">' +
      head +
      row("难度", list.map(c => "★".repeat(Math.min(5, c.difficulty || 3)) + " " + (c.difficulty || 3) + "/5")) +
      row("一句话", list.map(c => X.esc(c.summary || ""))) +
      row("定义", list.map(c => X.md(c.definition || ""))) +
      (list.some(c => c.principle) ? row("原理", list.map(c => X.md(c.principle || ""))) : "") +
      (list.some(c => (c.pros || []).length || (c.cons || []).length) ?
        row("优缺点", list.map(c => (c.pros || []).map(s => "＋" + s).concat((c.cons || []).map(s => "－" + s)).join("<br>") || "")) : "") +
      row("应用", list.map(c => (c.applications || []).map(s => "· " + s).join("<br>") || "")) +
      row("误解", list.map(c => (c.misconceptions || []).map(s => "· " + s).join("<br>") || "")) +
      (list.some(c => (c.sources || []).length) ? row("来源", list.map(c => (c.sources || []).map(s => "<a href='" + X.esc(s) + "' target='_blank' rel='noopener'>↗</a> ").join(" ") + (c.sources || []).length + " 条")) : "") +
      "</table></div>" +
      '<div class="cmp-actions"><button class="mini-btn" id="cmp-swap">⇄ 交换顺序</button><button class="mini-btn" id="cmp-done">完成</button></div>';
    card.innerHTML = html;
    ov.appendChild(card);
    ov.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    ov.querySelector("#cmp-close").addEventListener("click", X.closeCompare);
    ov.querySelector("#cmp-done").addEventListener("click", () => { ov.classList.add("hidden"); document.body.style.overflow = ""; });
    ov.querySelector("#cmp-swap").addEventListener("click", () => {
      X.compareList.reverse();
      X.renderCompareTray();
      X.showCompare();
    });
    ov.addEventListener("click", e => { if (e.target === ov) { ov.classList.add("hidden"); document.body.style.overflow = ""; } });
  };

  /* ── 事件总线（极简） ─────────────────────────────── */
  X._ev = {};
  X.on = function (name, fn) { (X._ev[name] = X._ev[name] || []).push(fn); };
  X.fire = function (name, ...a) { (X._ev[name] || []).forEach(f => f(...a)); };
})();
