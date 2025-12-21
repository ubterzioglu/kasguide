/* faq.js
   FAQ list renderer for faq.html
   - Non-clickable cards (navigation is intentionally disabled for now)
   - Search filter by keyword (question + answer)
   - Per-card accent colors (left rail + Q&A badge)
*/
(function () {
  function escapeHtml(str) {
    return String(str ?? '')
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;');
  }

  function normalize(s) {
    return String(s || '')
      .toLowerCase()
      .replace(/\s+/g, ' ')
      .trim();
  }

  function collectText(item) {
    const parts = [];
    parts.push(item.question || '');
    parts.push(item.answer || '');
    return normalize(parts.join(' '));
  }

  function matches(item, q) {
    if (!q) return true;
    return collectText(item).includes(q);
  }

  function hexToRgba(hex, alpha) {
    const h = String(hex || '').trim();
    if (!/^#([0-9a-f]{6})$/i.test(h)) return `rgba(0,0,0,${alpha})`;
    const r = parseInt(h.slice(1, 3), 16);
    const g = parseInt(h.slice(3, 5), 16);
    const b = parseInt(h.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  const ACCENTS = [
    '#8f1627', // Kas palette dark red
    '#1f6feb',
    '#0aa06e',
    '#ffb703',
    '#7c3aed',
    '#06b6d4',
    '#ef4444',
    '#111827'
  ];

  function render(list, total) {
    const root = document.getElementById('faqList');
    const countEl = document.getElementById('faqCount');
    if (!root) return;

    if (countEl) {
      const shown = Array.isArray(list) ? list.length : 0;
      const all = typeof total === 'number' ? total : shown;
      countEl.textContent = all ? `${shown} / ${all} sonuç` : '';
    }

    if (!Array.isArray(list) || !list.length) {
      root.innerHTML = `
        <div class="no-results">
          <h4>Sonuç yok</h4>
          <p>Farklı bir kelime deneyebilirsin.</p>
        </div>
      `;
      return;
    }

    root.innerHTML = list.map((x, idx) => {
      const q = escapeHtml(x.question || 'Soru');
      const a = escapeHtml(String(x.answer || '').trim() || '—');

      const accent = ACCENTS[idx % ACCENTS.length];
      const accentSoft = hexToRgba(accent, 0.14);
      const accentSoft2 = hexToRgba(accent, 0.08);

      return `
        <article class="faq-item" style="--accent:${accent}; --accentSoft:${accentSoft}; --accentSoft2:${accentSoft2};">
          <div class="faq-card-top">
            <div class="faq-badge">Q&A</div>
          </div>

          <div class="faq-row">
            <div class="faq-label">🔴 Soru:</div>
            <div class="faq-value faq-question">${q}</div>
          </div>

          <div class="faq-divider"></div>

          <div class="faq-row">
            <div class="faq-label">🟢 Cevap:</div>
            <div class="faq-value faq-answer">${a}</div>
          </div>
        </article>
      `;
    }).join('');

    /* Click behavior was here previously (faq-selection.html?id=...)
       Kept as a reminder, intentionally disabled for now:
       - data-href
       - click handlers
       - keyboard handlers
    */
  }

  function init() {
    const input = document.getElementById('faqSearch');

    // Accept both dataset names for compatibility:
    // - faqItems (old)
    // - faqListItems (new)
    const all =
      (typeof faqListItems !== 'undefined' && Array.isArray(faqListItems)) ? faqListItems :
      ((typeof faqItems !== 'undefined' && Array.isArray(faqItems)) ? faqItems : []);

    function apply() {
      const q = normalize(input ? input.value : '');
      const filtered = all.filter((x) => matches(x, q));
      render(filtered, all.length);
    }

    if (input) input.addEventListener('input', apply);
    apply();
  }

  init();
})();
