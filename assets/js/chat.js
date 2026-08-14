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
      body.innerHTML = '<div class="chat-empty">🤖 你好，我是析概的 AI 解析员。<br>可以问我任何概念、术语、缩写或行业黑话的含义——我会联网搜索并给出深度解析。<br>例如：</div>';
      return;
    }
    X.chatHistory.forEach((m, i) => {
      const div = document.createElement("div");
      div.className = m.role === "q" ? "chat-msg q" : "chat-msg a";
      div.innerHTML = '<div class="chat-bubble">' + (m.role === "a" ? X.mdChat(m.text) : X.esc(m.text)) + "</div>";
      if (m.role === "a" && m.text.length > 40) {
        const add = document.createElement("button");
        add.className = "chat-addbtn";
        add.textContent = "📥 加入书库";
        add.addEventListener("click", () => X.addAnswerToLibrary(m));
        div.appendChild(add);
      }
      body.appendChild(div);
    });
    body.scrollTop = body.scrollHeight;
  };
  X.renderSuggestions = function () {
    const box = document.getElementById("chat-sugg");
    if (!box) return;
    box.innerHTML = "";
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

    fetch("/api/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ q }),
    }).then(r => r.json()).then(d => {
      const idx = X.chatHistory.indexOf(typing);
      if (idx >= 0) X.chatHistory.splice(idx, 1);
      if (d.ok) {
        X.chatHistory.push({ role: "a", t: Date.now(), text: d.text });
      } else {
        X.chatHistory.push({ role: "a", t: Date.now(), text: "（AI 解析失败：" + (d.error || "未知错误") + "。请确认本地服务运行中。）" });
      }
      X.store.set("chatHistory", X.chatHistory.slice(-40));
      X.renderChat();
    }).catch(() => {
      const idx = X.chatHistory.indexOf(typing);
      if (idx >= 0) X.chatHistory.splice(idx, 1);
      X.chatHistory.push({ role: "a", t: Date.now(), text: "（无法连接本地 AI 服务。请确认 D:\\析概 下运行 node server.js）" });
      X.store.set("chatHistory", X.chatHistory.slice(-40));
      X.renderChat();
    });
  };

  /* 聊天答案 → 书库 */
  X.addAnswerToLibrary = function (m) {
    const q = (X.chatHistory.find(h => h.role === "q" && X.chatHistory.indexOf(h) < X.chatHistory.indexOf(m)) || {}).text || "AI 解析";
    const name = String(q).replace(/^(什么是|解释|介绍一下|解释一下|说说|讲一下)\s*/i, "").replace(/[？?。！!]+$/g, "").slice(0, 24) || "AI 解析";
    fetch("/api/add-concept", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: X.slug(name), name, domain: "AI 生成", analysis: m.text }),
    }).then(r => r.json()).then(d => {
      if (d.ok) {
        window.XIGAI["AI 生成"] = window.XIGAI["AI 生成"] || [];
        if (!X.byId.has(d.concept.id)) window.XIGAI["AI 生成"].push(d.concept);
        X.reloadData();
        X.renderShelves(X._currentFilter);
        X.renderDesk();
        X.toast("已加入书库「AI 生成」架 📚");
      } else X.toast("加入失败：" + (d.error || ""));
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
    X.renderSuggestions();
  };
})();
