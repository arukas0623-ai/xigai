/* ============================================================
   析概 · AI 解析员聊天 chat.js
   网页内直接向 AI 提问任意概念/术语/黑话
   ============================================================ */
(function () {
  const X = (window.Xigai = window.Xigai || {});

  const SUGGESTIONS = [
    "什么是 CLI？", "K8s 和 Docker 有什么区别？", "解释一下「赋能」这个黑话",
    "什么是零信任安全模型？", "PE 和 VC 的区别是什么？", "「美拉德反应」是什么？",
  ];

  X.chatHistory = X.store.get("chatHistory", []); // [{role:'q'|'a', t, text}]
  X.tutorMode = false;   // 苏格拉底导师模式（P1-3）

  X.openChat = function () {
    const d = document.getElementById("chat-drawer");
    if (!d) return;
    d.classList.remove("hidden");
    X.renderChat();
    const inp = document.getElementById("chat-input");
    if (inp) setTimeout(() => inp.focus(), 60);
  };
  X.closeChat = function () {
    document.getElementById("chat-drawer").classList.add("hidden");
  };
  X.toggleChat = function () { X.isChatOpen() ? X.closeChat() : X.openChat(); };
  X.isChatOpen = function () { const d = document.getElementById("chat-drawer"); return d && !d.classList.contains("hidden"); };

  /* markdown 轻渲染（多行） */
  X.mdChat = function (t) {
    let out = [], inCode = false, codeBuf = [];
    const lines = String(t || "").split(/\r?\n/);
    for (const raw of lines) {
      const ln = raw.trimEnd();
      if (/^```/.test(ln)) {
        if (inCode) { out.push('<pre class="chat-code">' + X.esc(codeBuf.join("\n")) + "</pre>"); codeBuf = []; inCode = false; }
        else inCode = true;
        continue;
      }
      if (inCode) { codeBuf.push(ln); continue; }
      if (/^#{1,4}\s/.test(ln)) {
        const lvl = ln.match(/^#+/)[0].length;
        out.push('<div class="chat-h h' + lvl + '">' + X.mdInline(ln.replace(/^#+\s*/, "")) + "</div>");
      } else if (/^[-*]\s/.test(ln)) {
        out.push('<div class="chat-li">• ' + X.mdInline(ln.replace(/^[-*]\s*/, "")) + "</div>");
      } else if (/^\d+\.\s/.test(ln)) {
        out.push('<div class="chat-li">' + X.mdInline(ln) + "</div>");
      } else if (!ln.trim()) {
        out.push("<div class='chat-gap'></div>");
      } else {
        out.push("<p>" + X.mdInline(ln) + "</p>");
      }
    }
    if (inCode) out.push('<pre class="chat-code">' + X.esc(codeBuf.join("\n")) + "</pre>");
    return out.join("");
  };
  X.mdInline = function (s) {
    let out = X.esc(s);
    // 1) markdown 链接 → 占位符
    const ph = [];
    out = out.replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, (m, t, u) => { ph.push({ t, u }); return "@@L" + (ph.length - 1) + "@@"; });
    // 2) 裸 URL → 链接
    out = out.replace(/(https?:\/\/[^\s<>"']+)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>');
    // 3) 还原 markdown 链接
    out = out.replace(/@@L(\d+)@@/g, (m, i) => { const p = ph[+i]; return p ? '<a href="' + p.u + '" target="_blank" rel="noopener">' + p.t + "</a>" : m; });
    // 4) 行内样式
    out = out.replace(/\*\*(.+?)\*\*/g, "<b>$1</b>")
      .replace(/\*([^*]+?)\*/g, "<i>$1</i>")
      .replace(/`([^`]+)`/g, "<code>$1</code>");
    return out;
  };

  X.renderChat = function () {
    const body = document.getElementById("chat-body");
    if (!body) return;
    body.innerHTML = "";
    if (!X.chatHistory.length) {
      body.innerHTML = '<div class="chat-empty">你好，我是析概的概念答疑。<br>可查询任何概念、术语、缩写或行业黑话的含义——已收录的直接引用书库，未收录的将联网检索整理。<br>例如：</div>';
      return;
    }
    X.chatHistory.forEach((m, i) => {
      const div = document.createElement("div");
      div.className = m.role === "q" ? "chat-msg q" : "chat-msg a";
      div.innerHTML = '<div class="chat-bubble">' + (m.isHtml ? m.text : (m.role === "a" ? X.mdChat(m.text) : X.esc(m.text))) + "</div>";
      if (m.role === "a" && m.text.length > 40 && !m.isHtml) {
        const row = document.createElement("div");
        row.className = "chat-btnrow";
        const add = document.createElement("button");
        add.className = "chat-addbtn";
        add.textContent = "📥 加入书库";
        add.addEventListener("click", () => X.addAnswerToLibrary(m));
        const ext = document.createElement("button");
        ext.className = "chat-addbtn";
        ext.textContent = "🔍 识别概念";
        ext.addEventListener("click", () => X.extractFromAnswer(m, row));
        row.appendChild(add);
        row.appendChild(ext);
        div.appendChild(row);
      }
      body.appendChild(div);
    });
    body.scrollTop = body.scrollHeight;
  };
  X.renderSuggestions = function () {
    const box = document.getElementById("chat-sugg");
    if (!box) return;
    box.innerHTML = "";
    const gr = document.createElement("button");
    gr.className = "chat-chip gr-chip";
    gr.textContent = "🧠 图谱增强问答";
    gr.title = "基于知识图谱相关概念作答（免费）";
    gr.addEventListener("click", () => {
      const inp = document.getElementById("chat-input");
      const q = (inp && inp.value.trim()) || "什么是大语言模型？";
      X.graphAsk(q);
      if (inp) inp.value = "";
    });
    box.appendChild(gr);
    SUGGESTIONS.forEach(s => {
      const b = document.createElement("button");
      b.className = "chat-chip";
      b.textContent = s;
      b.addEventListener("click", () => X.askAI(s));
      box.appendChild(b);
    });
  };

  X.askAI = function (q, opts) {
    q = String(q || "").trim();
    if (!q) return;
    if (!X.isChatOpen()) X.openChat();
    // 本地命中：零成本直接展示，不调用任何外部服务
    if (!opts || !opts.force) {
      const local = X.findLocalConcept(q);
      if (local) {
        X.chatHistory.push({ role: "q", t: Date.now(), text: q });
        const _st = local.status === "verified" ? "已收录" : local.status === "generated" ? "待验证" : "未公开";
        const _conf = local.confidence != null ? " · 可信度 " + Math.round(local.confidence * 100) + "%" : "";
        const _src = " · 来源 " + ((local.sources || []).length) + " 处";
        const _ver = local.verification && local.verification.score != null ? " · 已独立核验(" + Math.round(local.verification.score * 100) + ")" : "";
        X.chatHistory.push({ role: "a", t: Date.now(), text: "已收录「" + local.name + "」（" + local.domain + " · " + _st + _conf + _src + _ver + "）：\n" + (local.summary || ""), isHtml: false, localId: local.id });
        X.store.set("chatHistory", X.chatHistory.slice(-40));
        const inp = document.getElementById("chat-input");
        if (inp) inp.value = "";
        X.renderChat();
        const body = document.getElementById("chat-body");
        if (body && body.lastElementChild) {
          const btn = document.createElement("button");
          btn.className = "chat-addbtn";
          btn.textContent = "查看收录依据";
          btn.addEventListener("click", () => X.openConcept(local.id));
          body.lastElementChild.appendChild(btn);
        }
        return;
      }
    }
    opts = opts || {};
    // 立即显示用户问题
    X.chatHistory.push({ role: "q", t: Date.now(), text: q });
    // 输入框清空
    const inp = document.getElementById("chat-input");
    if (inp) inp.value = "";
    const typing = { role: "a", t: Date.now(), text: "", typing: true };
    X.chatHistory.push(typing);
    X.renderChat();
    X.store.set("chatHistory", X.chatHistory.slice(-40));

    if (X.tutorMode) {
      X.chatHistory.push({ role: "a", t: Date.now(), text: "🧑🏫 导师模式已开启：我将通过提问引导你思考，先不直接给答案。你可以输入「提示」「答案」「退出导师」切换。" });
      X.renderChat();
    }
    X._askResolve(typing, q);
  };
  /* P5：从 AI 回答中识别概念 → 检查书库 → 缺失可入库 */
  X.extractFromAnswer = function (m, row) {
    row.innerHTML = '<span class="chat-addbtn" style="opacity:.7">🔍 识别中…</span>';
    fetch("/api/extract-concepts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: m.text }),
    }).then(r => r.json()).then(d => {
      if (!d.ok || !d.concepts || !d.concepts.length) { row.innerHTML = '<span class="chat-addbtn" style="opacity:.6">未识别到概念</span>'; return; }
      row.innerHTML = "";
      d.concepts.forEach(cn => {
        const chip = document.createElement("button");
        chip.className = "chat-addbtn";
        if (cn.exists) {
          const stc = cn.status === "verified" ? "已收录" : cn.status === "generated" ? "待验证" : "未公开";
          const confc = cn.confidence != null ? " · 可信度" + Math.round(cn.confidence * 100) + "%" : "";
          const whyc = cn.verification && cn.verification.score != null ? " · 已核验" : "";
          chip.textContent = "✓ " + cn.name + "（" + stc + confc + whyc + "）";
          chip.title = "已收录：查看收录依据（来源/独立校验）";
          chip.addEventListener("click", () => X.openConcept(cn.concept.id));
        } else {
          chip.textContent = "+ " + cn.name + "（缺失·入库）";
          chip.addEventListener("click", () => {
            chip.textContent = "⏳ 生成中…";
            chip.disabled = true;
            fetch("/api/grow", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ q: cn.name }) })
              .then(r => r.json()).then(g => {
                if (g.ok) {
                  const c = g.concept; c.id = c.id || X.slug(c.name);
                  window.XIGAI[g.domain] = window.XIGAI[g.domain] || [];
                  if (!X.byId.has(c.id) && !window.XIGAI[g.domain].some(x => x.name === c.name)) window.XIGAI[g.domain].push(c);
                  X.reloadData(); X.renderShelves(X._currentFilter);
                  chip.textContent = "✓ 已入库（" + g.domain + "）"; chip.classList.add("ok");
                  X.toast("已入库：" + c.name);
                } else { chip.textContent = g.reject ? "已拒绝：" + g.reason : (g.dup ? "已存在" : "失败：" + (g.error || "")); }
              }).catch(() => { chip.textContent = "入库失败"; });
          });
        }
        row.appendChild(chip);
      });
    }).catch(() => { row.innerHTML = '<span class="chat-addbtn" style="opacity:.6">识别失败</span>'; });
  };

  /* 苏格拉底导师包装 */
  X.tutorWrap = function (q) {
    return "（苏格拉底式导师模式）请针对「" + q + "」通过层层提问引导用户独立思考，先不要直接给出答案；每次只问 1 个引导性问题。如果用户说「提示」给一个小提示；说「答案」才给出解释。";
  };
  /* 免费优先：本地引擎（Ollama/LM Studio）→ 免费面板 → 付费兜底 */
  X._askResolve = function (typing, q) {
    const done = text => {
      const idx = X.chatHistory.indexOf(typing);
      if (idx >= 0) X.chatHistory.splice(idx, 1);
      X.chatHistory.push({ role: "a", t: Date.now(), text });
      X.store.set("chatHistory", X.chatHistory.slice(-40));
      X.renderChat();
    };
    const sendQ = X.tutorMode ? X.tutorWrap(q) : q;
    fetch("/api/free-ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ q: sendQ }),
    }).then(r => r.json()).then(fd => {
      if (fd.ok) {
        done("🆓 免费·" + (fd.engine === "ollama" ? "Ollama" : "LM Studio") + "（" + fd.model + "）" + (X.tutorMode ? "🧑🏫 导师：\n\n" : "本地回答：\n\n") + fd.text);
      } else {
        X.freeAIPanel(q, typing);
      }
    }).catch(() => X.freeAIPanel(q, typing));
  };
  /* 付费引擎（显式选择，消耗模型额度） */
  X.askPaid = function (q, typing) {
    const done = text => {
      const idx = typing ? X.chatHistory.indexOf(typing) : -1;
      if (idx >= 0) X.chatHistory.splice(idx, 1);
      X.chatHistory.push({ role: "a", t: Date.now(), text });
      X.store.set("chatHistory", X.chatHistory.slice(-40));
      X.renderChat();
    };
    fetch("/api/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ q }),
    }).then(r => r.json()).then(d => {
      if (d.ok) done("深入解析（联网检索）\n\n" + d.text);
      else done("（解析失败：" + (d.error || "未知错误") + "）");
    }).catch(() => done("（无法连接本地服务）"));
  };
  /* 免费问 AI 面板：打开本机 AI 应用 / 免费网页 AI */
  X.freeAIPanel = function (q, typing) {
    fetch("/api/free-tools").then(r => r.json()).then(d => {
      const tools = (d && d.tools) || [];
      let html = "<div class='free-title'>🆓 免费问 AI —— 本机未检测到可免费调用的本地引擎，任选一种免费方式：</div><div class='free-opts'>";
      tools.forEach(t => {
        html += '<button class="free-opt" data-tool="' + t.key + '">📱 打开 ' + t.name + '（已安装）</button>';
        html += '<a class="free-opt" href="' + t.web + '" target="_blank" rel="noopener">🌐 ' + t.name + ' 网页版</a>';
      });
      html += '<a class="free-opt" href="https://www.bing.com/search?q=' + encodeURIComponent(q) + '" target="_blank" rel="noopener">🆓 Bing AI 搜索（自动填入）</a>';
      html += '<a class="free-opt" href="https://metaso.cn/?q=' + encodeURIComponent(q) + '" target="_blank" rel="noopener">🆓 秘塔 AI 搜索（自动填入）</a>';
      html += '<a class="free-opt" href="https://www.perplexity.ai/search?q=' + encodeURIComponent(q) + '" target="_blank" rel="noopener">🆓 Perplexity（自动填入）</a>';
      html += "</div><div class='free-note'>点击「打开」会自动把问题复制到剪贴板并启动应用，粘贴即可提问。</div>";
      html += '<button class="chat-addbtn" id="free-paid-fallback">💠 也可用付费本地引擎解析（消耗少量额度）</button>';
      const idx = X.chatHistory.indexOf(typing);
      if (idx >= 0) X.chatHistory.splice(idx, 1);
      X.chatHistory.push({ role: "a", t: Date.now(), text: html, isHtml: true });
      X.store.set("chatHistory", X.chatHistory.slice(-40));
      X.renderChat();
      const body = document.getElementById("chat-body");
      if (body) {
        body.querySelectorAll(".free-opt[data-tool]").forEach(b => b.addEventListener("click", () => {
          const tool = b.dataset.tool;
          navigator.clipboard.writeText(q).catch(() => {});
          fetch("/api/launch-tool", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ tool }) })
            .then(r => r.json()).then(d2 => {
              if (d2.ok) X.toast("已打开 " + d2.name + "，问题已复制到剪贴板，粘贴即可提问");
              else X.toast(d2.error || "打开失败，可用网页版");
            }).catch(() => X.toast("打开失败，可用网页版"));
        }));
        const fb = body.querySelector("#free-paid-fallback");
        if (fb) fb.addEventListener("click", () => X.askPaid(q, typing));
      }
    }).catch(() => {
      const idx = X.chatHistory.indexOf(typing);
      if (idx >= 0) X.chatHistory.splice(idx, 1);
      X.chatHistory.push({ role: "a", t: Date.now(), text: "（无法获取免费 AI 选项，请确认本地服务运行中）" });
      X.renderChat();
    });
  };

  /* 聊天答案 → 结构化入库（自增长管道 /api/grow：去重/可信度/分类） */
    X.addAnswerToLibrary = function (m) {
    const q = (X.chatHistory.find(h => h.role === "q" && X.chatHistory.indexOf(h) < X.chatHistory.indexOf(m)) || {}).text || "AI 解析";
    const name = String(q).replace(/^(什么是|解释|介绍一下|解释一下|说说|讲一下)\s*/i, "").replace(/[？?。！!]+$/g, "").trim().slice(0, 24) || "AI 解析";
    fetch("/api/grow", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ q: name }),
    }).then(r => r.json()).then(d => {
      if (d.ok) {
        if (d.source === "local") { X.toast("「" + d.concept.name + "」已在书库中，无需入库"); X.openConcept(d.concept.id); return; }
        const c = d.concept;
        c.id = c.id || X.slug(c.name);
        window.XIGAI[d.domain] = window.XIGAI[d.domain] || [];
        if (!X.byId.has(c.id) && !window.XIGAI[d.domain].some(x => x.name === c.name)) window.XIGAI[d.domain].push(c);
        X.reloadData(); X.renderShelves(X._currentFilter); X.renderDesk();
        X.toast("已结构化入库「" + c.name + "」（" + d.domain + "）📚 刷新后全站可见");
      } else if (d.dup) { X.toast(d.reason || "已存在，跳过入库"); }
      else if (d.reject) { X.toast("已拒绝入库：" + (d.reason || "")); }
      else { X.toast("入库失败：" + (d.error || "")); }
    }).catch(() => X.toast("无法连接本地服务"));
  };

  X.clearChat = function () {
    X.chatHistory = [];
    X.store.set("chatHistory", []);
    X.renderChat();
  };

  X.initChat = function () {
    const btn = document.getElementById("btn-chat");
    if (btn) btn.addEventListener("click", X.toggleChat);
    const close = document.getElementById("chat-close");
    if (close) close.addEventListener("click", X.closeChat);
    const send = document.getElementById("chat-send");
    const inp = document.getElementById("chat-input");
    if (send) send.addEventListener("click", () => X.askAI(inp ? inp.value : ""));
    if (inp) {
      inp.addEventListener("keydown", e => {
        if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); X.askAI(inp.value); }
      });
      inp.addEventListener("input", () => {
        inp.style.height = "auto";
        inp.style.height = Math.min(120, inp.scrollHeight) + "px";
      });
    }
    const clear = document.getElementById("chat-clear");
    if (clear) clear.addEventListener("click", X.clearChat);
    const head = document.querySelector("#chat-drawer .chat-head");
    if (head && !document.getElementById("chat-tutor")) {
      const tb = document.createElement("button");
      tb.id = "chat-tutor";
      tb.title = "苏格拉底导师模式：通过提问引导思考";
      tb.textContent = "🧑🏫";
      tb.style.cssText = "font-size:14px;width:28px;height:28px;border-radius:50%;color:var(--ink-3);";
      tb.addEventListener("click", () => {
        X.tutorMode = !X.tutorMode;
        tb.style.background = X.tutorMode ? "var(--sel)" : "";
        tb.style.color = X.tutorMode ? "var(--accent)" : "var(--ink-3)";
        X.toast(X.tutorMode ? "🧑🏫 苏格拉底导师模式已开启" : "已退出导师模式");
      });
      head.querySelector(".chat-tools").appendChild(tb);
    }
    X.renderSuggestions();
  };
})();
