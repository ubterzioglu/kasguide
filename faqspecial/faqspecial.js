// faqspecial.js
(function () {
  const PLACEHOLDER = "—";

  function escapeHtml(str) {
    return String(str ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function getId() {
    return new URLSearchParams(window.location.search).get("id");
  }

  function getById(id) {
    const list = (typeof faqspecialSeries !== "undefined" && Array.isArray(faqspecialSeries)) ? faqspecialSeries : [];
    return list.find((x) => String(x.id) === String(id));
  }

  function initBackToTop() {
    const btn = document.querySelector(".back-to-top");
    if (!btn) return;
    btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  function render() {
    const root = document.getElementById("faqRoot");
    if (!root) return;

    const id = getId();
    const item = getById(id);

    if (!id || !item) {
      root.innerHTML = `
        <div class="faq-card">
          <div class="faq-hero">
            <h2 class="faq-title">İçerik bulunamadı</h2>
          </div>
          <div class="faq-body muted">
            ${PLACEHOLDER}
          </div>
        </div>
      `;
      return;
    }

    root.innerHTML = `
      <div class="faq-card">
        <div class="faq-hero">
          <h2 class="faq-title">${escapeHtml(item.title || PLACEHOLDER)}</h2>
          ${item.description ? `<p class="muted" style="margin-top:.35rem">${escapeHtml(item.description)}</p>` : ""}
        </div>
        <div class="faq-body">${escapeHtml(item.longText || PLACEHOLDER)}</div>
      </div>
    `;
  }

  document.addEventListener("DOMContentLoaded", () => {
    initBackToTop();
    render();
  });
})();
