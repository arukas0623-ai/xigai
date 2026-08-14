/* ============================================================
   析概 · 启动与全局交互 app.js
   ============================================================ */
(function () {
  const X = window.Xigai;
  let booted = false;

  function init() {
    if (booted) return;
    booted = true;
    X.loadData();
    X.buildIndex();
    const vp = new URLSearchParams(location.search).get("view");
    if (vp === "3d" || vp === "list" || vp === "shelf") { X.state.viewMode = vp; X.saveState(); }
    X.applyTheme(X.state.theme);

    // 今日藏书
    const dt = X.dailyTerm();
    const dw = document.getElementById("daily-term");
    if (dw && dt) {
      dw.innerHTML = "📖 今日藏书：<b>" + X.esc(dt.name) + "</b> — " + X.esc(dt.summary || "") + "（" + X.esc(dt.domain) + "）";
      dw.style.cursor = "pointer";
      dw.addEventListener("click", () => X.openConcept(dt.id));
    }

    X.updateStats();
    X.renderShelves("");
    X.applyViewMode();
    X.updateFavBadge();
    X.makeDust();
    X.initDnD();
    X.initParallax();
    X.renderDesk();
    X.initChat();
    X.on("data-updated", X.updateStats);

    // 搜索
    const input = document.getElementById("search");
    const clear = document.getElementById("search-clear");
    const doSearch = X.debounce(() => X.renderSearch(input.value), 90);
    input.addEventListener("input", doSearch);
    input.addEventListener("keydown", e => {
      if (e.key === "ArrowDown") { e.preventDefault(); X.moveSel(1); }
      else if (e.key === "ArrowUp") { e.preventDefault(); X.moveSel(-1); }
      else if (e.key === "Enter") {
        e.preventDefault();
        const list = X.searchResults;
        if (list.length) {
          const c = list[X._selIdx >= 0 ? X._selIdx : 0];
          X.closeSearch(); input.value = ""; X.state.lastSearch = ""; X.saveState();
          X.openConcept(c.id);
        } else {
          // 无结果 → 询问是否 AI 深度解析
          const name = input.value.trim();
          X.closeSearch();
          if (name && confirm("本地书库没有「" + name + "」。要让 AI 联网研究这个新概念吗？（消耗少量模型额度，结果缓存 7 天）")) {
            const fake = { id: X.slug(name), name, domain: "待收录" };
            input.value = "";
            X.openConcept(fake.id);
            // openConcept 找不到 → 直接用 AI 面板
            document.getElementById("detail").classList.add("hidden");
            X.aiDeepDiveForNew(name);
          }
        }
      }
    });
    input.addEventListener("focus", () => { if (input.value) X.renderSearch(input.value); });
    clear.addEventListener("click", () => { input.value = ""; X.closeSearch(); input.focus(); });
    document.addEventListener("click", e => {
      if (!e.target.closest(".search-wrap")) X.closeSearch();
    });

    // 快捷键
    document.addEventListener("keydown", e => {
      const typing = /INPUT|TEXTAREA/.test(document.activeElement.tagName);
      if (e.key === "/" && !typing) { e.preventDefault(); input.focus(); return; }
      if ((e.key === "k" || e.key === "K") && (e.ctrlKey || e.metaKey)) { e.preventDefault(); input.focus(); return; }
      if (e.key === "Escape") {
        const kg = document.getElementById("kgraph-panel");
        if (kg && !kg.classList.contains("hidden")) { X.closeGraph(); return; }
        const pp = document.getElementById("personal-panel");
        if (pp && !pp.classList.contains("hidden")) { pp.classList.add("hidden"); document.body.style.overflow = ""; return; }
        const cmp = document.getElementById("compare-panel");
        if (cmp && !cmp.classList.contains("hidden")) { cmp.classList.add("hidden"); document.body.style.overflow = ""; return; }
        if (!document.getElementById("detail").classList.contains("hidden")) X.closeDetail();
        else if (!document.getElementById("side-panel").classList.contains("hidden")) document.getElementById("side-panel").classList.add("hidden");
        else if (!document.getElementById("theme-panel").classList.contains("hidden")) document.getElementById("theme-panel").classList.add("hidden");
        else X.closeSearch();
        document.body.style.overflow = "";
        return;
      }
      if (typing) return;
      const ovOpen = !document.getElementById("detail").classList.contains("hidden");
      if (ovOpen && (e.key === "ArrowLeft" || e.key === "ArrowRight")) {
        const c = X.byId.get(X.currentId);
        if (c) {
          const dom = X.domains.find(d => d.name === c.domain);
          if (dom) {
            const i = dom.concepts.findIndex(x => x.id === c.id);
            const next = dom.concepts[(i + (e.key === "ArrowRight" ? 1 : dom.concepts.length - 1)) % dom.concepts.length];
            if (next && next.id !== c.id) X.openConcept(next.id);
          }
        }
      } else if (e.key === "r" || e.key === "R") X.randomBook();
      else if (e.key === "f" || e.key === "F") { const c = X.byId.get(X.currentId); if (c) { X.toggleFav(c.id); X.updateFavBadge(); X.toast(X.isFav(c.id) ? "已收藏 ♥" : "已取消收藏"); } }
      else if (e.key === "t" || e.key === "T") X.showThemePanel();
      else if (e.key === "v" || e.key === "V") { const order = ["shelf", "3d", "list"]; X.state.viewMode = order[(order.indexOf(X.state.viewMode) + 1) % order.length]; X.saveState(); X.renderShelves(X._currentFilter); X.toast("已切换为" + X.VIEW_LABELS[X.state.viewMode]); }
    });

    // 顶栏按钮
    document.getElementById("btn-theme").addEventListener("click", X.showThemePanel);
    const personalBtn = document.getElementById("btn-personal");
    if (personalBtn) personalBtn.addEventListener("click", X.openPersonal);
    document.getElementById("btn-fav").addEventListener("click", () => X.showSidePanel("fav"));
    document.getElementById("btn-hist").addEventListener("click", () => X.showSidePanel("hist"));
    document.getElementById("btn-random").addEventListener("click", X.randomBook);
    document.getElementById("btn-daily").addEventListener("click", () => {
      const dt = X.dailyTerm();
      if (dt) X.openConcept(dt.id);
    });
    const trashBtn = document.getElementById("btn-trash");
    if (trashBtn) trashBtn.addEventListener("click", () => {
      if (!X.state.hiddenBooks.length) X.toast("没有藏起的书——把书拖到 🗑 上即可藏起");
      else X.toast("已藏起 " + X.state.hiddenBooks.length + " 本，可在主题面板「恢复被藏书」");
    });
    const viewBtn = document.getElementById("btn-view");
    if (viewBtn) viewBtn.addEventListener("click", () => {
      const order = ["shelf", "3d", "list"];
      X.state.viewMode = order[(order.indexOf(X.state.viewMode) + 1) % order.length];
      X.saveState();
      X.renderShelves(X._currentFilter);
      X.toast("已切换为" + X.VIEW_LABELS[X.state.viewMode]);
    });

    // URL 参数直达
    const gp = new URLSearchParams(location.search).get("graph");
    if (gp) { const gc = X.byId.get(gp) || X.data.find(x => X.slug(x.name) === X.slug(gp)); if (gc) setTimeout(() => X.openGraph(gc.id), 120); }
    const q = new URLSearchParams(location.search).get("c");
    if (q) {
      const c = X.byId.get(q) || X.data.find(x => X.slug(x.name) === X.slug(q));
      if (c) setTimeout(() => X.openConcept(c.id), 120);
    }
    X.toast("欢迎来到析概知识图书馆 📚", 2600);
  }

  X.updateStats = function () {
    const st = document.getElementById("wl-stats");
    if (!st) return;
    st.innerHTML = "<span><b>" + X.domains.length + "</b>个领域</span><span><b>" + X.data.length + "</b>册藏书</span><span><b>" + Object.keys(X.state.readCount).length + "</b>本已读</span><span><b>" + X.state.favorites.length + "</b>本收藏</span>";
  };

  /* 新概念 AI 研究（书库未收录） */
  X.aiDeepDiveForNew = function (name) {
    const ov = document.getElementById("detail");
    ov.innerHTML = "";
    const card = document.createElement("div");
    card.className = "panel-card";
    card.innerHTML =
      '<button class="panel-close">✕</button>' +
      '<div class="detail-head"><div class="detail-crumb"><a data-goto="home">🏛 图书馆</a> › 新概念研究</div>' +
      '<div class="detail-title"><h2>' + X.esc(name) + "</h2></div></div>" +
      '<div class="detail-body"><div id="ai-area"></div><div id="baike-box"></div></div>' +
      '<div class="detail-actions"><button class="btn primary" id="ai-btn">✨ AI 深度解析</button><button class="btn" id="bk-btn">📖 百科速览</button></div>';
    ov.appendChild(card);
    ov.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    ov.querySelector(".panel-close").addEventListener("click", X.closeDetail);
    ov.querySelector("[data-goto=home]").addEventListener("click", X.closeDetail);
    const fake = { id: X.slug(name), name, domain: "待收录" };
    ov.querySelector("#ai-btn").addEventListener("click", () => X.aiDeepDive(fake));
    ov.querySelector("#bk-btn").addEventListener("click", () => X.baikeLookup(name));
  };

  /* 尘埃粒子 */
  X.makeDust = function () {
    const scene = document.getElementById("scene");
    if (!scene || scene.querySelector(".dust")) return;
    for (let i = 0; i < 16; i++) {
      const d = document.createElement("div");
      d.className = "dust";
      const s = 2 + Math.random() * 3;
      d.style.cssText = "left:" + (Math.random() * 100) + "%;top:" + (30 + Math.random() * 60) + "%;width:" + s + "px;height:" + s + "px;animation-duration:" + (14 + Math.random() * 18) + "s;animation-delay:" + (-Math.random() * 20) + "s;";
      scene.appendChild(d);
    }
  };

  /* 数据装载：manifest 驱动 */
  const manifest = window.XIGAI_MANIFEST || [];
  if (manifest.length) {
    let remain = manifest.length;
    manifest.forEach(f => {
      const s = document.createElement("script");
      s.src = "data/" + f;
      s.onload = s.onerror = () => { if (--remain <= 0) init(); };
      document.head.appendChild(s);
    });
  } else {
    init();
  }
})();
