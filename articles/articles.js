// articles.js
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

  async function getArticleById(id) {
    try {
      const response = await fetch(`/api/articles?id=${id}`);
      if (!response.ok) throw new Error('API error');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error loading article:', error);
      return null;
    }
  }

  function fmt(v) {
    const s = String(v ?? "").trim();
    return s || "";
  }

  function initBackToTop() {
    const btn = document.querySelector(".back-to-top");
    if (!btn) return;
    btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  async function render() {
    const root = document.getElementById("articleRoot");
    if (!root) return;

    const id = getId();
    if (!id) {
      root.innerHTML = `
        <div class="article-card">
          <div class="article-body">
            <h2>Yazı bulunamadı</h2>
            <p class="muted">Bu yazı henüz eklenmemiş olabilir.</p>
            <p><a href="../index.html">Ana sayfaya dön</a></p>
          </div>
        </div>
      `;
      return;
    }

    const a = await getArticleById(id);

    if (!a) {
      root.innerHTML = `
        <div class="article-card">
          <div class="article-body">
            <h2>Yazı bulunamadı</h2>
            <p class="muted">Bu yazı henüz eklenmemiş olabilir.</p>
            <p><a href="../index.html">Ana sayfaya dön</a></p>
          </div>
        </div>
      `;
      return;
    }

    // Extract data from items table structure
    const attrs = a.attributes || {};
    const photos = a.photos || [];
    const primaryPhoto = photos.find(p => p.is_primary) || photos[0] || null;

    const img = primaryPhoto ? primaryPhoto.url : "../assets/0_img/placeholder.jpg";
    const title = fmt(a.title) || PLACEHOLDER;
    const desc = fmt(a.description);
    const author = fmt(attrs.author);
    const readTime = fmt(attrs.readTime);

    const content = fmt(a.long_text) || "";

    root.innerHTML = `
      <article class="article-card">
        <div class="article-hero">
          <img src="${escapeHtml(img)}" alt="${escapeHtml(title)}" loading="lazy">
          <div class="article-hero-overlay"></div>
          <div class="article-hero-content">
            <h2 class="article-title">${escapeHtml(title)}</h2>
            <div class="article-meta">
              ${author ? `<span>✍️ ${escapeHtml(author)}</span>` : ""}
              ${readTime ? `<span>⏱️ ${escapeHtml(readTime)}</span>` : ""}
            </div>
          </div>
        </div>
        <div class="article-body">
          ${desc ? `<p class="article-lead">${escapeHtml(desc)}</p>` : ""}
          ${content ? `<div class="article-content">${escapeHtml(content)}</div>` : `<div class="article-content muted">${PLACEHOLDER}</div>`}
        </div>
      </article>
    `;
  }

  document.addEventListener("DOMContentLoaded", () => {
    initBackToTop();
    render();
  });
})();
