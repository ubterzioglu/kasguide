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

  // Update page meta tags dynamically
  function updateMetaTags(item) {
    if (!item) return;

    const title = `${item.title || "Özel Seri"} - Kaş Guide`;
    const description = item.description || item.longText || "Kaş hakkında özel seriler ve detaylı rehber içerikleri.";
    const canonical = `https://kasguide.de/faqspecial/faqspecial.html?id=${item.id}`;

    // Update document title
    document.title = title;

    // Update or create meta description
    setMetaTag('name', 'description', description.substring(0, 160));

    // Update canonical
    updateCanonical(canonical);

    // Update Open Graph tags
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description.substring(0, 160));
    setMetaTag('property', 'og:url', canonical);

    // Update Twitter tags
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description.substring(0, 160));
  }

  function setMetaTag(attr, name, content) {
    let meta = document.querySelector(`meta[${attr}="${name}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute(attr, name);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  }

  function updateCanonical(href) {
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', href);
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

    // Update meta tags first
    updateMetaTags(item);

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
