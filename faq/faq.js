// Kaş Guide – FAQ list (non-clickable cards)
// Requirements:
// - No tags
// - Single column
// - Only emojis (🔴 for question, 🟢 for answer)
// - Left accent rail + Q&A badge in rotating colors
// - Search filters by keyword in question+answer

(function () {
  const grid = document.getElementById("cardsGrid");
  const search = document.getElementById("faqSearch");

  // NEW: counters
  const totalEl = document.getElementById("faqTotalCount");
  const resultEl = document.getElementById("faqResultCount");

  if (!grid || !search) return;

  if (!Array.isArray(window.faqData)) {
    grid.innerHTML = "<div style='opacity:.7'>FAQ verisi bulunamadı (faqData).</div>";
    return;
  }

  const colors = [
    "#8f1627", // deep red (Kaş/CAL vibe)
    "#2980b9", // blue
    "#27ae60", // green
    "#f39c12", // amber
    "#8e44ad", // purple
    "#16a085", // teal
    "#2c3e50", // dark
    "#c0392b"  // red alt
  ];

  function escapeHtml(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function setCounts(total, shown) {
    if (totalEl) totalEl.textContent = String(total);
    if (resultEl) resultEl.textContent = String(shown);
  }

  function render(list) {
    grid.innerHTML = "";

    // NEW: always keep counts in sync
    setCounts(window.faqData.length, list.length);

    if (!list.length) {
      grid.innerHTML = "<div style='padding:14px 6px;opacity:.7'>Sonuç bulunamadı.</div>";
      return;
    }

    list.forEach((item, idx) => {
      const accent = colors[idx % colors.length];

      const card = document.createElement("article");
      card.className = "faq-card";
      card.style.setProperty("--accent", accent);

      const q = escapeHtml(item.question || "");
      const a = escapeHtml(item.answer || "");

      card.innerHTML = `
        <h3 class="faq-q">🔴 ${q}</h3>
        <p class="faq-a">🟢 ${a}</p>
      `;

      // non-clickable by design (no listeners)
      grid.appendChild(card);
    });
  }

  function applyFilter() {
    const q = (search.value || "").trim().toLowerCase();
    if (!q) {
      render(window.faqData);
      return;
    }

    const filtered = window.faqData.filter(x => {
      const qq = (x.question || "").toLowerCase();
      const aa = (x.answer || "").toLowerCase();
      return qq.includes(q) || aa.includes(q);
    });

    render(filtered);
  }

  search.addEventListener("input", applyFilter);

  // init
  setCounts(window.faqData.length, window.faqData.length);
  render(window.faqData);
})();
