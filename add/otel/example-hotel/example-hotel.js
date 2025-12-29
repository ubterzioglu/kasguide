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

  function getPreviewHotel() {
    try {
      const raw = localStorage.getItem("kasguide_preview_hotel");
      if (!raw) return null;
      
      const hotel = JSON.parse(raw);
      
      // Placeholder images for preview
      const placeholders = [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200",
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200",
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200"
      ];
      
      return {
        title: hotel.title || "Otel Adı",
        hotelType: hotel.hotelType || "",
        starRating: hotel.starRating || "",
        roomCount: hotel.roomCount || "",
        capacity: hotel.capacity || "",
        location: hotel.location || "Kaş",
        distanceToSea: hotel.distanceToSea || "",
        description: hotel.description || "",
        longText: hotel.longText || "",
        facilities: Array.isArray(hotel.facilities) ? hotel.facilities : [],
        priceRange: hotel.priceRange || "",
        checkinTime: hotel.checkinTime || "",
        checkoutTime: hotel.checkoutTime || "",
        booking: hotel.booking || "",
        website: hotel.website || "",
        phone: hotel.phone || "",
        email: hotel.email || "",
        instagram: hotel.instagram || "",
        googleMapsQuery: hotel.googleMapsQuery || "",
        images: placeholders
      };
    } catch (e) {
      console.error("Error loading preview hotel:", e);
      return null;
    }
  }

  function fmt(v) {
    const s = String(v ?? "").trim();
    return s || "";
  }

  function icon(name) {
    const common = 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
    if (name === "map") return `<svg viewBox="0 0 24 24" ${common}><path d="M9 18l-6 3V6l6-3 6 3 6-3v15l-6 3-6-3z"/><path d="M9 3v15"/><path d="M15 6v15"/></svg>`;
    if (name === "instagram") return `<svg viewBox="0 0 24 24" ${common}><rect x="3" y="3" width="18" height="18" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><path d="M17.5 6.5h.01"/></svg>`;
    if (name === "web") return `<svg viewBox="0 0 24 24" ${common}><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`;
    if (name === "booking") return `<svg viewBox="0 0 24 24" ${common}><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/></svg>`;
    if (name === "phone") return `<svg viewBox="0 0 24 24" ${common}><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.12.86.31 1.7.57 2.5a2 2 0 0 1-.45 2.11L9 10a16 16 0 0 0 5 5l.67-1.12a2 2 0 0 1 2.11-.45c.8.26 1.64.45 2.5.57A2 2 0 0 1 22 16.92z"/></svg>`;
    if (name === "email") return `<svg viewBox="0 0 24 24" ${common}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>`;
    return "";
  }

  function actionButton(href, label, iconName, isPhone = false, isEmail = false) {
    const has = !!fmt(href);
    let finalHref = href;

    if (has && isPhone) {
      const raw = fmt(href).replace(/\s+/g, "");
      finalHref = `tel:${raw}`;
    } else if (has && isEmail) {
      finalHref = `mailto:${href}`;
    }

    const cls = has ? "detail-action is-enabled" : "detail-action is-disabled";
    const attrs = has
      ? `href="${escapeHtml(finalHref)}" ${(isPhone || isEmail) ? "" : 'target="_blank" rel="noopener noreferrer"'}`
      : `href="javascript:void(0)" aria-disabled="true" tabindex="-1"`;

    return `<a class="${cls}" ${attrs} title="${escapeHtml(label)}" aria-label="${escapeHtml(label)}">${icon(iconName)}</a>`;
  }

  function chevronSvg(dir) {
    const common = 'fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"';
    if (dir === "left") return `<svg viewBox="0 0 24 24" ${common}><path d="M15 18l-6-6 6-6"/></svg>`;
    return `<svg viewBox="0 0 24 24" ${common}><path d="M9 18l6-6-6-6"/></svg>`;
  }

  function metaItem(label, value, extraClass = "") {
    const v = fmt(value) || PLACEHOLDER;
    const cls = extraClass ? ` ${extraClass}` : "";
    return `
      <div class="detail-meta${cls}">
        <div class="detail-meta-label">${escapeHtml(label)}</div>
        <div class="detail-meta-value">${escapeHtml(v)}</div>
      </div>
    `;
  }

  function getHotelTypeName(type) {
    const types = {
      'butik': 'Butik Otel',
      'aile': 'Aile Oteli',
      'luks': 'Lüks Otel',
      'pansiyon': 'Pansiyon',
      'apart': 'Apart Otel',
      'hostel': 'Hostel',
      'villa': 'Villa',
      'diger': 'Diğer'
    };
    return types[type] || type;
  }

  function getStarDisplay(rating) {
    if (!rating || rating === 'yok') return 'Belirtilmemiş';
    const stars = '⭐'.repeat(parseInt(rating) || 0);
    return stars || 'Belirtilmemiş';
  }

  function getPriceDisplay(range) {
    const ranges = {
      'budget': '₺ (Ekonomik)',
      'mid': '₺₺ (Orta)',
      'high': '₺₺₺ (Üst)',
      'luxury': '₺₺₺₺ (Lüks)'
    };
    return ranges[range] || range || PLACEHOLDER;
  }

  function getFacilityName(fac) {
    const facilities = {
      'pool': { emoji: '🏊', name: 'Havuz' },
      'spa': { emoji: '💆', name: 'Spa' },
      'gym': { emoji: '💪', name: 'Gym' },
      'restaurant': { emoji: '🍽️', name: 'Restoran' },
      'bar': { emoji: '🍹', name: 'Bar' },
      'beach': { emoji: '🏖️', name: 'Plaj' },
      'wifi': { emoji: '📶', name: 'WiFi' },
      'ac': { emoji: '❄️', name: 'Klima' },
      'parking': { emoji: '🅿️', name: 'Otopark' },
      'garden': { emoji: '🌳', name: 'Bahçe' },
      'seaview': { emoji: '🌊', name: 'Deniz Manzarası' },
      'breakfast': { emoji: '🍳', name: 'Kahvaltı' },
      'petfriendly': { emoji: '🐕', name: 'Pet-Friendly' },
      'transfer': { emoji: '🚗', name: 'Transfer' },
      'terrace': { emoji: '🏡', name: 'Teras' },
      'kids': { emoji: '👶', name: 'Çocuk Dostu' }
    };
    return facilities[fac] || { emoji: '✓', name: fac };
  }

  function mapsHref(hotel) {
    const q = hotel.googleMapsQuery || `${hotel.title} ${hotel.location}`;
    const encoded = encodeURIComponent(q.trim());
    if (!encoded) return "";
    return `https://www.google.com/maps/search/?api=1&query=${encoded}`;
  }

  function initHeroSlider(root, photos, title) {
    const imgEl = root.querySelector("#heroImg");
    const prevBtn = root.querySelector("#heroPrev");
    const nextBtn = root.querySelector("#heroNext");
    const counterEl = root.querySelector("#heroCounter");
    const dotsEl = root.querySelector("#heroDots");

    if (!imgEl || !prevBtn || !nextBtn || !counterEl || !dotsEl) return;
    if (!photos || !photos.length) return;

    let currentIndex = 0;

    // Create dots
    dotsEl.innerHTML = photos
      .map((_, i) => `<button type="button" class="hero-dot ${i === 0 ? "is-active" : ""}" data-index="${i}" aria-label="Fotoğraf ${i + 1}"></button>`)
      .join("");

    const dotEls = Array.from(dotsEl.querySelectorAll(".hero-dot"));

    function syncUi() {
      imgEl.src = photos[currentIndex];
      imgEl.alt = `${title} - Fotoğraf ${currentIndex + 1}`;
      counterEl.textContent = `${currentIndex + 1} / ${photos.length}`;

      dotEls.forEach((d, i) => {
        d.classList.toggle("is-active", i === currentIndex);
      });

      prevBtn.disabled = currentIndex === 0;
      nextBtn.disabled = currentIndex === photos.length - 1;
    }

    function go(dir) {
      const next = currentIndex + dir;
      if (next < 0 || next >= photos.length) return;
      currentIndex = next;
      syncUi();
    }

    function goTo(index) {
      if (index < 0 || index >= photos.length) return;
      currentIndex = index;
      syncUi();
    }

    prevBtn.addEventListener("click", () => go(-1));
    nextBtn.addEventListener("click", () => go(1));

    dotEls.forEach((d, i) => {
      d.addEventListener("click", () => goTo(i));
      d.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") goTo(i);
      });
    });

    // Keyboard navigation
    function onKey(e) {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    }
    window.addEventListener("keydown", onKey);

    // Touch swipe
    let startX = 0;
    let startY = 0;
    let active = false;

    imgEl.addEventListener("touchstart", (e) => {
      const t = e.touches?.[0];
      if (!t) return;
      active = true;
      startX = t.clientX;
      startY = t.clientY;
    }, { passive: true });

    imgEl.addEventListener("touchend", (e) => {
      if (!active) return;
      active = false;
      const t = e.changedTouches?.[0];
      if (!t) return;

      const dx = t.clientX - startX;
      const dy = t.clientY - startY;

      if (Math.abs(dy) > Math.abs(dx)) return;

      if (dx > 40) go(-1);
      if (dx < -40) go(1);
    }, { passive: true });

    syncUi();
  }

  function renderHotel(hotel) {
    const root = document.getElementById("detailRoot");
    if (!root) return;

    if (!hotel) {
      root.innerHTML = `
        <div class="detail-card">
          <div class="detail-body">
            <h2 class="detail-title" style="color: var(--gray-900); text-shadow:none;">Önizleme Hazır Değil</h2>
            <p style="color: var(--gray-600); margin-top:12px;">Formu doldurmaya başlayın ve önizleme butonu ile sayfanızı görün.</p>
          </div>
        </div>
      `;
      return;
    }

    const title = fmt(hotel.title) || "Otel Adı";
    const photos = hotel.images || [];
    const firstImg = photos[0] || "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200";

    const hotelType = getHotelTypeName(hotel.hotelType);
    const stars = getStarDisplay(hotel.starRating);
    const rooms = hotel.roomCount ? `${hotel.roomCount} oda` : PLACEHOLDER;
    const location = fmt(hotel.location) || "Kaş";
    const distanceToSea = fmt(hotel.distanceToSea);
    const price = getPriceDisplay(hotel.priceRange);

    const desc = fmt(hotel.description);
    const longText = fmt(hotel.longText);

    const facilities = Array.isArray(hotel.facilities) ? hotel.facilities : [];

    const map = mapsHref(hotel);
    const instagram = fmt(hotel.instagram);
    const website = fmt(hotel.website);
    const booking = fmt(hotel.booking);
    const phone = fmt(hotel.phone);
    const email = fmt(hotel.email);

    root.innerHTML = `
      <article class="detail-card">
        <div class="detail-hero">
          <img id="heroImg" class="detail-hero-img" src="${escapeHtml(firstImg)}" alt="${escapeHtml(title)}">

          <button id="heroPrev" class="hero-nav hero-prev" type="button" aria-label="Önceki fotoğraf">
            ${chevronSvg("left")}
          </button>
          <button id="heroNext" class="hero-nav hero-next" type="button" aria-label="Sonraki fotoğraf">
            ${chevronSvg("right")}
          </button>

          <div id="heroCounter" class="hero-counter" aria-label="Fotoğraf sayacı"></div>
          <div id="heroDots" class="hero-dots" aria-label="Fotoğraf noktaları"></div>

          <div class="detail-hero-overlay"></div>
          <div class="detail-hero-content">
            <h2 class="detail-title">${escapeHtml(title)}</h2>
            ${hotelType ? `<div class="detail-type">${escapeHtml(hotelType)}</div>` : ""}
          </div>
        </div>

        <div class="detail-body">
          ${desc ? `<div class="detail-kisaca"><strong>🏨 Kısaca:</strong> ${escapeHtml(desc)}</div>` : ""}

          <div class="detail-meta-grid">
            ${metaItem("Otel Tipi", hotelType, "meta-type")}
            ${metaItem("Yıldız", stars, "meta-type")}
            ${metaItem("Fiyat Aralığı", price, "meta-price")}
            ${metaItem("Oda Sayısı", rooms, "meta-rooms")}
          </div>

          ${facilities.length > 0 ? `
            <div class="detail-facilities">
              <div class="detail-facilities-title">✨ Tesisler & Hizmetler</div>
              <div class="facilities-grid">
                ${facilities.map(fac => {
                  const facInfo = getFacilityName(fac);
                  return `<span class="facility-tag"><span class="emoji">${facInfo.emoji}</span> ${facInfo.name}</span>`;
                }).join("")}
              </div>
            </div>
          ` : ""}

          <div class="detail-actions">
            ${actionButton(map, "Harita", "map")}
            ${actionButton(instagram, "Instagram", "instagram")}
            ${actionButton(website, "Web", "web")}
            ${actionButton(booking, "Rezervasyon", "booking")}
            ${actionButton(phone, "Telefon", "phone", true)}
            ${actionButton(email, "E-posta", "email", false, true)}
          </div>

          ${longText ? `
            <div class="detail-long">
              <h3 class="detail-long-title">📝 Detaylı Bilgi</h3>
              <div class="detail-long-text">${escapeHtml(longText)}</div>
            </div>
          ` : ""}
        </div>
      </article>
    `;

    initHeroSlider(root, photos, title);
  }

  const hotel = getPreviewHotel();
  renderHotel(hotel);
})();
