// interviews.js
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

  async function getInterviewById(id) {
    try {
      const response = await fetch(`/api/interviews?id=${id}`);
      if (!response.ok) throw new Error('API error');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error loading interview:', error);
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
    const root = document.getElementById("interviewRoot");
    if (!root) return;

    const id = getId();

    if (!id) {
      root.innerHTML = `
        <div class="interview-card">
          <div class="interview-body">
            <h2>Röportaj bulunamadı</h2>
            <p class="muted">Röportaj ID'si belirtilmemiş.</p>
            <p><a href="../index.html">Ana sayfaya dön</a></p>
          </div>
        </div>
      `;
      return;
    }

    const interview = await getInterviewById(id);

    if (!interview) {
      root.innerHTML = `
        <div class="interview-card">
          <div class="interview-body">
            <h2>Röportaj bulunamadı</h2>
            <p class="muted">Bu röportaj henüz eklenmemiş olabilir.</p>
            <p><a href="../index.html">Ana sayfaya dön</a></p>
          </div>
        </div>
      `;
      return;
    }

    // Extract data from items table structure
    const attrs = interview.attributes || {};
    const photos = interview.photos || [];
    const primaryPhoto = photos.find(p => p.is_primary) || photos[0] || null;

    const img = primaryPhoto ? primaryPhoto.url : "../assets/0_img/placeholder.jpg";
    const title = fmt(interview.title) || PLACEHOLDER;
    const desc = fmt(interview.description);
    const interviewee = fmt(attrs.interviewee);
    const interviewer = fmt(attrs.interviewer) || 'Kaş Guide';
    const date = fmt(attrs.date);
    const content = fmt(interview.long_text) || "";

    // Format content with line breaks (simple markdown-like conversion)
    const formattedContent = content.split('\n').map(line => {
      line = line.trim();
      if (!line) return '<br>';
      if (line.startsWith('**') && line.endsWith('**')) {
        return `<h3>${escapeHtml(line.slice(2, -2))}</h3>`;
      }
      return `<p>${escapeHtml(line)}</p>`;
    }).join('');

    root.innerHTML = `
      <article class="interview-card">
        <div class="interview-hero">
          <img src="${escapeHtml(img)}" alt="${escapeHtml(title)}" loading="lazy">
          <div class="interview-hero-overlay"></div>
          <div class="interview-hero-content">
            <h2 class="interview-title">${escapeHtml(title)}</h2>
            <div class="interview-meta">
              ${interviewee ? `<span>🎙️ ${escapeHtml(interviewee)}</span>` : ""}
              ${interviewer ? `<span>✍️ ${escapeHtml(interviewer)}</span>` : ""}
              ${date ? `<span>📅 ${escapeHtml(date)}</span>` : ""}
            </div>
          </div>
        </div>
        <div class="interview-body">
          ${desc ? `<p class="interview-lead">${escapeHtml(desc)}</p>` : ""}
          ${formattedContent ? `<div class="interview-content">${formattedContent}</div>` : `<div class="interview-content muted">${PLACEHOLDER}</div>`}
        </div>
      </article>
    `;
  }

  document.addEventListener("DOMContentLoaded", () => {
    initBackToTop();
    render();
  });
})();
