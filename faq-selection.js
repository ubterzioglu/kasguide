/* faq-selection.js
   Detail renderer for one FAQ item (faq-selection.html?id=FAQ_ID)
*/
(function () {
  const DASH = '—';

  function escapeHtml(str) {
    return String(str ?? '')
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;');
  }

  function getId() {
    return new URLSearchParams(window.location.search).get('id');
  }

  function getList() {
    // faq-data.js should expose a global list.
    // Support either faqItems or faqs to avoid breakage.
    if (typeof faqItems !== 'undefined' && Array.isArray(faqItems)) return faqItems;
    if (typeof faqs !== 'undefined' && Array.isArray(faqs)) return faqs;
    return [];
  }

  function findItem(id) {
    const list = getList();
    return list.find((x) => String(x?.id) === String(id));
  }

  function renderNotFound(root) {
    root.innerHTML = `
      <article class="detail-card">
        <div class="detail-body">
          <h2 class="detail-title">Bulunamadı</h2>
          <p class="detail-muted">Bu id ile bir soru bulunamadı.</p>
          <div class="detail-actions">
            <a class="detail-action secondary" href="faq.html">Soru listesine dön</a>
          </div>
        </div>
      </article>
    `;
  }

  function render(item) {
    const root = document.getElementById('detailRoot');
    if (!root) return;

    if (!item) {
      renderNotFound(root);
      return;
    }

    const question = escapeHtml(item.question || item.q || 'Soru');
    const answerRaw = String(item.answer || item.a || '').trim();
    const answerHtml = answerRaw ? escapeHtml(answerRaw).replaceAll('\n', '<br>') : DASH;

    root.innerHTML = `
      <article class="detail-card">
        <div class="detail-body">
          <h2 class="detail-title">${question}</h2>
          <div class="detail-divider"></div>
          <div class="detail-longtext">${answerHtml}</div>
        </div>
      </article>
    `;
  }

  render(findItem(getId()));
})();
