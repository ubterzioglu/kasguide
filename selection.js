// selection.js (detail page)
// - Renders a single place by id: selection.html?id=PLACE_ID
// - Uses selection-data.js as the single source
// - Actions are always shown (enabled emerald / disabled gray)
// - Tags remain in dataset but are NOT shown in the main UI

(function () {
  function escapeHtml(str) {
    return String(str ?? '')
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;');
  }

  function getId() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
  }

  function compactText(v) {
    return String(v ?? '').trim();
  }

  function getCategoryNames(place) {
    if (!place || !Array.isArray(place.category)) return '';
    const cats = (typeof categories !== 'undefined' && Array.isArray(categories)) ? categories : [];

    // Keep it short in the header: max 3 categories
    return place.category
      .slice(0, 3)
      .map((cid) => {
        const c = cats.find((x) => x.id === cid);
        return c ? c.name : cid;
      })
      .filter(Boolean)
      .join(' • ');
  }

  function buildMapsSearchHref(place) {
    // Prefer explicit query if provided, else use title (+location if available)
    const q = compactText(place?.googleMapsQuery) || compactText(place?.mapsQuery);
    const title = compactText(place?.title);
    const loc = compactText(place?.location);
    const query = q || (loc ? `${title} ${loc}` : title);
    if (!query) return '';
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  }

  function normalizeLinks(place) {
    const links = place?.links && typeof place.links === 'object' ? place.links : {};
    const instagram = compactText(place?.instagram) || compactText(links.instagram);
    const website = compactText(place?.website) || compactText(links.website);
    const booking = compactText(place?.booking) || compactText(links.booking);
    const phone = compactText(place?.phone) || compactText(links.phone);
    const maps = buildMapsSearchHref(place);
    return { instagram, website, booking, phone, maps };
  }

  function svgIcon(name) {
    // Minimal inline icons (no external deps)
    if (name === 'map') {
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`;
    }
    if (name === 'instagram') {
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><path d="M16 11.37a4 4 0 1 1-7.94 1.26 4 4 0 0 1 7.94-1.26z"/><path d="M17.5 6.5h.01"/></svg>`;
    }
    if (name === 'web') {
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`;
    }
    if (name === 'booking') {
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/><path d="M9 16l2 2 4-4"/></svg>`;
    }
    if (name === 'phone') {
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.86.32 1.7.57 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.09a2 2 0 0 1 2.11-.45c.8.25 1.64.45 2.5.57A2 2 0 0 1 22 16.92z"/></svg>`;
    }
    return '';
  }

  function iconAction(enabled, href, label, iconName) {
    const icon = svgIcon(iconName);
    const safeLabel = escapeHtml(label);
    if (enabled) {
      return `<a class="icon-btn is-enabled" href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer" aria-label="${safeLabel}" title="${safeLabel}">${icon}</a>`;
    }
    return `<span class="icon-btn is-disabled" aria-label="${safeLabel}" title="${safeLabel}">${icon}</span>`;
  }

  function toChipList(place) {
    // Tags remain in dataset but we intentionally do NOT surface tags in UI.
    const facilities = Array.isArray(place?.facilities) ? place.facilities : [];
    const features = Array.isArray(place?.features) ? place.features : [];

    const merged = [...facilities, ...features]
      .map((x) => String(x ?? '').trim())
      .filter(Boolean);

    // Deduplicate while keeping order
    const seen = new Set();
    const uniq = [];
    for (const item of merged) {
      const key = item.toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      uniq.push(item);
    }
    return uniq;
  }

  function metaTile(label, value) {
    const v = compactText(value) || '—';
    return `<div class="detail-meta-item"><span class="detail-meta-label">${escapeHtml(label)}</span><span class="detail-meta-value">${escapeHtml(v)}</span></div>`;
  }

  function renderNotFound(root) {
    root.innerHTML = `
      <div class="detail-card">
        <div class="detail-body">
          <h2 class="detail-title" style="color: var(--gray-800)">Bulunamadı</h2>
          <p class="detail-lead">Bu id ile bir kayıt bulunamadı.</p>
          <a class="home-link" href="index.html" aria-label="Ana Sayfa" title="Ana Sayfa">
            <svg class="home-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M3 11.5 12 4l9 7.5" />
              <path d="M5 10.8V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10.8" />
              <path d="M10 21v-6a2 2 0 0 1 4 0v6" />
            </svg>
          </a>
        </div>
      </div>
    `;
  }

  function render(place) {
    const root = document.getElementById('detailRoot');
    if (!root) return;

    if (!place) {
      renderNotFound(root);
      return;
    }

    const cats = getCategoryNames(place);
    const { instagram, website, booking, phone, maps } = normalizeLinks(place);

    const actionsHtml = [
      iconAction(Boolean(maps), maps || '#', 'Harita', 'map'),
      iconAction(Boolean(instagram), instagram || '#', 'Instagram', 'instagram'),
      iconAction(Boolean(website), website || '#', 'Web', 'web'),
      iconAction(Boolean(booking), booking || '#', 'Rezervasyon', 'booking'),
      iconAction(Boolean(phone), phone ? `tel:${phone.replace(/\s+/g, '')}` : '#', 'Telefon', 'phone')
    ].join('');

    const chips = toChipList(place);

    const longText = compactText(place.longText);
    const longBoxClass = longText ? 'detail-box' : 'detail-box placeholder';
    const longBoxValue = longText || '—';

    root.innerHTML = `
      <article class="detail-card">
        <div class="detail-hero">
          <img class="detail-hero-img" src="${escapeHtml(place.image || '')}" alt="${escapeHtml(place.title || '')}">
          <div class="detail-hero-overlay"></div>
          <div class="detail-hero-content">
            <h2 class="detail-title">${escapeHtml(place.title || '')}</h2>
            ${cats ? `<div class="detail-cats">${escapeHtml(cats)}</div>` : ''}
          </div>
        </div>

        <div class="detail-body">
          <p class="detail-lead">
            <span class="detail-bullet" aria-hidden="true">🟢</span>
            <strong>Kısaca:</strong> ${escapeHtml(place.description || '—')}
          </p>

          <div class="detail-meta-grid">
            ${metaTile('Puan', place.rating)}
            ${metaTile('Fiyat', place.price)}
            ${metaTile('Konum', place.location)}
            ${metaTile('Mesafe', place.distance)}
            ${metaTile('Süre', place.duration)}
            ${metaTile('Erişim', place.access)}
          </div>

          <div class="detail-actions-bar">${actionsHtml}</div>

          ${
            chips.length
              ? `<div class="detail-chips">${chips
                  .map((c) => `<span class="detail-chip">${escapeHtml(c)}</span>`)
                  .join('')}</div>`
              : ''
          }

          <div class="detail-section-title">
            <span class="detail-bullet" aria-hidden="true">🟢</span>
            Uzunca:
          </div>

          <div class="${longBoxClass}" style="white-space: pre-wrap;">${escapeHtml(longBoxValue)}</div>
        </div>
      </article>
    `;
  }

  function init() {
    if (typeof allPlaces === 'undefined' || !Array.isArray(allPlaces)) {
      window.addEventListener('load', init, { once: true });
      return;
    }

    const id = getId();
    const place = allPlaces.find((p) => String(p.id) === String(id));
    render(place);
  }

  document.addEventListener('DOMContentLoaded', init);
})();
