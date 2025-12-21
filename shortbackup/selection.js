// selection.js
// Detail page renderer for Kaş Guide Places
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

  function getPlaceById(id) {
    const list = (typeof allPlaces !== "undefined" && Array.isArray(allPlaces)) ? allPlaces : [];
    return list.find((x) => String(x.id) === String(id));
  }

  function getCategoryNames(place) {
    if (!place || !Array.isArray(place.category)) return "";
    const cats = (typeof categories !== "undefined" && Array.isArray(categories)) ? categories : [];
    return place.category
      .map((cid) => (cats.find((c) => c.id === cid)?.name) || cid)
      .filter(Boolean)
      .join(" • ");
  }

  function normalizeLinks(place) {
    const links = (place?.links && typeof place.links === "object") ? place.links : {};
    const instagram = place.instagram || links.instagram || "";
    const website = place.website || links.website || "";
    const booking = place.booking || links.booking || "";
    const phone = place.phone || links.phone || "";
    return { instagram, website, booking, phone };
  }

  function mapsHref(place) {
    const queryRaw =
      place.googleMapsQuery ||
      place.mapsQuery ||
      place.googleMaps ||
      place.maps ||
      "";

    const q =
      String(queryRaw || "").trim() ||
      String(place.title || "").trim() + (place.location ? ` ${place.location}` : "");

    const encoded = encodeURIComponent(q.trim());
    if (!encoded) return "";
    return `https://www.google.com/maps/search/?api=1&query=${encoded}`;
  }

  function fmt(v) {
    const s = String(v ?? "").trim();
    return s || "";
  }

  function metaItem(label, value) {
    const v = fmt(value) || PLACEHOLDER;
    return `
      <div class="detail-meta">
        <div class="detail-meta-label">${escapeHtml(label)}</div>
        <div class="detail-meta-value">${escapeHtml(v)}</div>
      </div>
    `;
  }

  function icon(name) {
    // Minimal inline icons (no external deps)
    const common = 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
    if (name === "map") return `<svg viewBox="0 0 24 24" ${common}><path d="M9 18l-6 3V6l6-3 6 3 6-3v15l-6 3-6-3z"/><path d="M9 3v15"/><path d="M15 6v15"/></svg>`;
    if (name === "instagram") return `<svg viewBox="0 0 24 24" ${common}><rect x="3" y="3" width="18" height="18" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><path d="M17.5 6.5h.01"/></svg>`;
    if (name === "web") return `<svg viewBox="0 0 24 24" ${common}><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`;
    if (name === "booking") return `<svg viewBox="0 0 24 24" ${common}><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/></svg>`;
    if (name === "phone") return `<svg viewBox="0 0 24 24" ${common}><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.12.86.31 1.7.57 2.5a2 2 0 0 1-.45 2.11L9 10a16 16 0 0 0 5 5l.67-1.12a2 2 0 0 1 2.11-.45c.8.26 1.64.45 2.5.57A2 2 0 0 1 22 16.92z"/></svg>`;
    return "";
  }

  function actionButton(href, label, iconName, isPhone = false) {
    const has = !!fmt(href);
    let finalHref = href;

    if (has && isPhone) {
      const raw = fmt(href).replace(/\s+/g, "");
      finalHref = `tel:${raw}`;
    }

    const cls = has ? "detail-action is-enabled" : "detail-action is-disabled";
    const attrs = has
      ? `href="${escapeHtml(finalHref)}" ${isPhone ? "" : 'target="_blank" rel="noopener noreferrer"'}`
      : `href="javascript:void(0)" aria-disabled="true" tabindex="-1"`;

    return `<a class="${cls}" ${attrs} title="${escapeHtml(label)}" aria-label="${escapeHtml(label)}">${icon(iconName)}</a>`;
  }

  function renderNotFound(root) {
    root.innerHTML = `
      <div class="detail-card">
        <div class="detail-body">
          <h2 class="detail-title" style="color: var(--gray-900); text-shadow:none;">Bulunamadı</h2>
          <p style="color: var(--gray-600); margin-top:.5rem;">Bu id ile bir kayıt bulunamadı.</p>
          <div style="margin-top:1rem;">
            <a class="home-link" href="index.html" aria-label="Ana Sayfa">
              <svg class="home-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 10.5L12 3l9 7.5"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    `;
  }

  function render(place) {
    const root = document.getElementById("detailRoot");
    if (!root) return;

    if (!place) {
      renderNotFound(root);
      return;
    }

    const cats = getCategoryNames(place);
    const { instagram, website, booking, phone } = normalizeLinks(place);

    const map = mapsHref(place);

    const title = fmt(place.title) || "Detay";
    const img = fmt(place.image) || "";
    const desc = fmt(place.description);
    const longText = fmt(place.longText);

    // meta values
    const rating = fmt(place.rating);
    const price = fmt(place.price);
    const location = fmt(place.location);
    const distance = fmt(place.distance);
    const duration = fmt(place.duration);
    const access = fmt(place.access);

    root.innerHTML = `
      <article class="detail-card">
        <div class="detail-hero">
          <img class="detail-hero-img" src="${escapeHtml(img)}" alt="${escapeHtml(title)}">
          <div class="detail-hero-overlay"></div>
          <div class="detail-hero-content">
            <h2 class="detail-title">${escapeHtml(title)}</h2>
            ${cats ? `<div class="detail-cats">${escapeHtml(cats)}</div>` : ""}
          </div>
        </div>

        <div class="detail-body">
          ${desc ? `<div class="detail-kisaca"><strong>🟢 Kısaca:</strong> ${escapeHtml(desc)}</div>` : ""}

          <div class="detail-meta-grid">
            ${metaItem("Puan", rating)}
            ${metaItem("Fiyat", price)}
            ${metaItem("Konum", location)}
            ${metaItem("Mesafe", distance)}
            ${metaItem("Süre", duration)}
            ${metaItem("Erişim", access)}
          </div>

          <div class="detail-actions">
            ${actionButton(map, "Harita", "map")}
            ${actionButton(instagram, "Instagram", "instagram")}
            ${actionButton(website, "Web", "web")}
            ${actionButton(booking, "Rezervasyon", "booking")}
            ${actionButton(phone, "Telefon", "phone", true)}
          </div>

          ${longText ? `
            <div class="detail-long">
              <h3 class="detail-long-title">🟢 Uzunca:</h3>
              <div class="detail-long-text">${escapeHtml(longText)}</div>
            </div>
          ` : ""}
        </div>
      </article>
    `;
  }

  const id = getId();
  render(getPlaceById(id));
})();
