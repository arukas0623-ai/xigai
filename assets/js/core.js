/* ============================================================
   析概 · 核心 core.js
   工具函数 / 数据加载 / 索引 / 模糊搜索 / 馆区分组 / 书架状态
   ============================================================ */
(function () {
  const X = (window.Xigai = window.Xigai || {});

  /* ── 存储 ─────────────────────────────────────────── */
  X.store = {
    get(k, d) {
      try { const v = localStorage.getItem("xigai:" + k); return v == null ? d : JSON.parse(v); }
      catch (e) { return d; }
    },
    set(k, v) { try { localStorage.setItem("xigai:" + k, JSON.stringify(v)); } catch (e) {} },
  };

  X.state = {
    theme: X.store.get("theme", "gold"),
    fontScale: X.store.get("fontScale", 1),
    lineHeight: X.store.get("lineHeight", 1),
    viewMode: X.store.get("viewMode", "shelf"),      // shelf | list | 3d
    favorites: X.store.get("favorites", []),          // [id,...]
    history: X.store.get("history", []),              // [{id,t}]
    readCount: X.store.get("readCount", {}),          // {id: n}
    lastSearch: X.store.get("lastSearch", ""),
    hiddenBooks: X.store.get("hiddenBooks", []),      // 从书架藏起的书 id
    deskBooks: X.store.get("deskBooks", []),          // 桌面浮窗书 [{id,x,y}]
  };
  X.saveState = function () {
    X.store.set("theme", X.state.theme);
    X.store.set("fontScale", X.state.fontScale);
    X.store.set("lineHeight", X.state.lineHeight);
    X.store.set("viewMode", X.state.viewMode);
    X.store.set("favorites", X.state.favorites);
    X.store.set("history", X.state.history.slice(0, 60));
    X.store.set("readCount", X.state.readCount);
    X.store.set("hiddenBooks", X.state.hiddenBooks.slice(0, 200));
    X.store.set("deskBooks", X.state.deskBooks.slice(0, 24));
  };

  /* ── 小工具 ───────────────────────────────────────── */
  X.esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  };
  X.hashStr = function (s) {
    let h = 2166136261;
    for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  };
  X.slug = function (s) {
    const P = window.pinyinPro;
    let base = "";
    try {
      base = P ? P.pinyin(s, { pattern: "first", toneType: "none", type: "array" }).join("") : "";
    } catch (e) { base = ""; }
    const ascii = String(s).replace(/[^\x00-\x7f]/g, "");
    return (base || ascii || "x").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 48) || "x";
  };
  X.fmtTime = function (t) {
    const d = new Date(t);
    const p = n => (n < 10 ? "0" + n : "" + n);
    return d.getFullYear() + "-" + p(d.getMonth() + 1) + "-" + p(d.getDate()) + " " + p(d.getHours()) + ":" + p(d.getMinutes());
  };
  X.daySeed = function () {
    const d = new Date();
    return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
  };
  X.debounce = function (fn, ms) {
    let t = null;
    return function (...a) { clearTimeout(t); t = setTimeout(() => fn.apply(this, a), ms); };
  };

  /* ── 领域排序 / 印章 / 馆区分组 ───────────────────── */
  X.DOMAIN_ORDER = [
    "人工智能", "AI工程与模型", "大模型横评",
    "计算机科学", "数学", "物理学", "天文学", "生物学", "医学健康", "地理气候",
    "工程技术", "经济学", "心理学", "哲学", "法律", "历史文明", "语言与思维",
    "文学艺术", "音乐", "影视游戏",
  ];
  const SEALS = {
    "计算机科学": "⚙", "人工智能": "◈", "AI工程与模型": "◇", "大模型横评": "★",
    "数学": "∞", "物理学": "⚛", "天文学": "☾", "生物学": "❋", "医学健康": "⚕",
    "地理气候": "◉", "工程技术": "⚒", "经济学": "￥", "心理学": "Ψ", "哲学": "◎",
    "法律": "⚖", "历史文明": "史", "语言与思维": "§", "文学艺术": "藝",
    "音乐": "♪", "影视游戏": "▣",
  };
  X.sealOf = function (name) { return SEALS[name] || "✦"; };

  /* 馆区（书架上的分区大标题） */
  X.WINGS = [
    { name: "AI 专区", desc: "人工智能 · 工程实践 · 模型横评", domains: ["人工智能", "AI工程与模型", "大模型横评"] },
    { name: "自然科学", desc: "数学 · 物理 · 天文 · 生命与健康 · 地球", domains: ["数学", "物理学", "天文学", "生物学", "医学健康", "地理气候"] },
    { name: "技术与工程", desc: "计算机 · 工程制造 · 通信", domains: ["计算机科学", "工程技术"] },
    { name: "社会科学", desc: "经济 · 心理 · 哲学 · 法律 · 历史 · 语言", domains: ["经济学", "心理学", "哲学", "法律", "历史文明", "语言与思维"] },
    { name: "艺术与媒介", desc: "文学 · 音乐 · 影视 · 游戏", domains: ["文学艺术", "音乐", "影视游戏"] },
  ];
  X.wingOf = function (domain) {
    const w = X.WINGS.find(w => w.domains.includes(domain));
    return w ? w.name : "其他";
  };

  /* ── 数据装载 ─────────────────────────────────────── */
  X.data = [];       // 全部概念（扁平）
  X.byId = new Map();
  X.byName = new Map();
  X.domains = [];    // [{key,name,seal,concepts}]

  X.loadData = function () {
    X.data = []; X.byId = new Map(); X.byName = new Map(); X.domains = [];
    const raw = window.XIGAI || {};
    const names = Object.keys(raw).sort((a, b) => {
      const ia = X.DOMAIN_ORDER.indexOf(a), ib = X.DOMAIN_ORDER.indexOf(b);
      return (ia < 0 ? 999 : ia) - (ib < 0 ? 999 : ib);
    });
    for (const name of names) {
      const arr = raw[name];
      if (!Array.isArray(arr) || !arr.length) continue;
      const dom = { key: X.slug(name), name, seal: X.sealOf(name), concepts: [] };
      for (const c of arr) {
        if (!c || !c.name) continue;
        c.domain = name;
        c.id = c.id || X.slug(c.name);
        if (X.byId.has(c.id)) c.id = X.slug(c.name) + "-" + X.data.length;
        dom.concepts.push(c);
        X.data.push(c);
        X.byId.set(c.id, c);
        X.byName.set(c.name, c);
      }
      X.domains.push(dom);
    }
  };

  /* ── 搜索索引（拼音增强） ─────────────────────────── */
  X._idx = null;
  X.buildIndex = function () {
    const P = window.pinyinPro;
    X._idx = X.data.map(c => {
      const text = [c.name, c.domain, (c.aliases || []).join(" "), (c.tags || []).join(" "), c.summary || ""].join(" ").toLowerCase();
      let py = "", ini = "";
      try {
        if (P) {
          py = P.pinyin(c.name, { toneType: "none", type: "array" }).join("");
          ini = P.pinyin(c.name, { pattern: "first", toneType: "none", type: "array" }).join("");
        }
      } catch (e) {}
      return { c, text, py, ini };
    });
  };

  X.search = function (q, limit) {
    limit = limit || 30;
    q = (q || "").trim().toLowerCase();
    if (!q) return [];
    if (!X._idx) X.buildIndex();
    const tokens = q.split(/[\s,，。；;]+/).filter(Boolean);
    const isLatin = /[a-z]/.test(q);
    const scored = [];
    for (const it of X._idx) {
      let score = 0, matched = true;
      for (const tk of tokens) {
        let s = 0;
        const n = it.c.name.toLowerCase();
        if (n === tk) s = 110;
        else if (n.startsWith(tk)) s = 95;
        else if (n.includes(tk)) s = 80;
        else if (it.text.includes(tk)) {
          if (it.c.aliases && it.c.aliases.some(a => a.toLowerCase().includes(tk))) s = 60;
          else if (it.c.tags && it.c.tags.some(t => t.toLowerCase().includes(tk))) s = 45;
          else if (it.c.summary && it.c.summary.toLowerCase().includes(tk)) s = 25;
          else s = 12;
        }
        else if (isLatin && tk.length >= 2 && (it.py.includes(tk) || it.ini.includes(tk))) s = 55;
        else if (isLatin && tk.length >= 1 && it.ini.includes(tk)) s = 30;
        else { matched = false; break; }
        score += s;
      }
      if (matched) scored.push({ it, score });
    }
    scored.sort((a, b) => b.score - a.score || (a.it.c.name.length - b.it.c.name.length));
    return scored.slice(0, limit).map(x => x.it.c);
  };

  /* ── 收藏 / 历史 / 藏书 / 桌面书 ──────────────────── */
  X.isFav = id => X.state.favorites.includes(id);
  X.toggleFav = function (id) {
    const i = X.state.favorites.indexOf(id);
    if (i >= 0) X.state.favorites.splice(i, 1); else X.state.favorites.unshift(id);
    X.saveState();
    return X.isFav(id);
  };
  X.recordRead = function (c) {
    X.state.history = [{ id: c.id, t: Date.now() }, ...X.state.history.filter(h => h.id !== c.id)].slice(0, 60);
    X.state.readCount[c.id] = (X.state.readCount[c.id] || 0) + 1;
    X.saveState();
  };
  X.isHidden = id => X.state.hiddenBooks.includes(id);
  X.toggleHidden = function (id) {
    const i = X.state.hiddenBooks.indexOf(id);
    if (i >= 0) X.state.hiddenBooks.splice(i, 1); else X.state.hiddenBooks.push(id);
    X.saveState();
  };
  X.addDeskBook = function (id, x, y) {
    X.state.deskBooks = X.state.deskBooks.filter(b => b.id !== id);
    X.state.deskBooks.push({ id, x: x || 60 + Math.random() * 30, y: y || 60 + Math.random() * 30 });
    X.saveState();
  };
  X.removeDeskBook = function (id) {
    X.state.deskBooks = X.state.deskBooks.filter(b => b.id !== id);
    X.saveState();
  };

  /* ── 书籍配色（按主题） ───────────────────────────── */
  X.PALETTES = {
    gold: [
      ["#7c2f2f", "#a8544a"], ["#274a6d", "#3d6d94"], ["#2e5a3e", "#4a7c58"],
      ["#5a3a6b", "#7a5490"], ["#6b4a22", "#8f6a33"], ["#3a4a5c", "#56708c"],
      ["#6d2f4a", "#8f4a6b"], ["#4a4a5c", "#666680"], ["#5c3a2a", "#7c553c"],
    ],
    midnight: [
      ["#1d2f55", "#2c4a80"], ["#143a4a", "#1f5c74"], ["#2a3a66", "#3d5288"],
      ["#3a2a55", "#544080"], ["#4a3a1f", "#6e5a2c"], ["#1f4a3a", "#2c6e54"],
      ["#552a3a", "#803e52"], ["#333355", "#4a4a78"], ["#2a2a40", "#3d3d5c"],
    ],
    parchment: [
      ["#7a3a2a", "#9c5540"], ["#5a4a2a", "#7c6a3e"], ["#3a5a4a", "#547a66"],
      ["#6a3a5a", "#8c547a"], ["#4a4a3a", "#66665a"], ["#7a5a3a", "#9c7c54"],
      ["#5a3a3a", "#7c5454"], ["#3a4a6a", "#546a8c"], ["#6a5a2a", "#8c7c3e"],
    ],
    emerald: [
      ["#1d4a35", "#2c6e4a"], ["#2a4a3e", "#3d6e58"], ["#334a2a", "#4a6e3e"],
      ["#3a4a55", "#546e80"], ["#4a3a22", "#6e5a30"], ["#2a3a4a", "#3d546e"],
      ["#4a2a3a", "#6e3e54"], ["#2a4a4a", "#3d6e6e"], ["#4a4430", "#6e663f"],
    ],
    light: [
      ["#c96a5c", "#e39a88"], ["#6a94c9", "#9ab8e3"], ["#7ab892", "#a8d4b8"],
      ["#9a7cc9", "#bca8e3"], ["#c9a35c", "#e3c68a"], ["#7ca8b8", "#a8ccd4"],
      ["#c97c9a", "#e3a8bc"], ["#8a8ab0", "#b0b0d4"], ["#b08a6a", "#ccac8c"],
    ],
    rose: [
      ["#b06a5a", "#cc8a78"], ["#a0788a", "#c09aa8"], ["#8a9a6a", "#acbc88"],
      ["#a080a0", "#c0a0c0"], ["#b08a5a", "#ccac7c"], ["#7a90a0", "#9cb4c0"],
      ["#b05a6a", "#cc7c8a"], ["#908a68", "#b0ac88"], ["#a06a8a", "#c08caa"],
    ],
  };
  X.spineStyle = function (c, theme) {
    const pal = X.PALETTES[theme] || X.PALETTES.gold;
    const h = X.hashStr(c.id);
    const palIdx = h % pal.length;
    const [c1, c2] = pal[palIdx];
    const w = 20 + (h % 17);
    const ht = 148 + ((h >> 3) % 62);
    const rot = ((h >> 5) % 3) - 1;
    const isDark = /gold|midnight|emerald/.test(theme);
    return {
      width: w + "px", height: ht + "px",
      background: "linear-gradient(95deg, " + c1 + " 0%, " + c2 + " 45%, " + c1 + " 100%)",
      "--spine-ink": isDark ? "#f2e3b0" : "#3a2c14",
      transform: "rotate(" + rot + "deg)",
      boxShadow: "inset 3px 0 4px rgba(255,255,255,.18), inset -3px 0 6px rgba(0,0,0,.3), 2px 6px 12px var(--shadow)",
      depth: ((h >> 7) % 26) + 6,  // 3D 厚度
    };
  };

  /* ── 数据刷新（AI 回填后调用） ─────────────────────── */
  X.reloadData = function () {
    X.loadData();
    X.buildIndex();
    X.fire("data-updated");
  };
})();
