/**
 * Pet Detail Page
 * Loads and renders a single pet from the database
 */

(async function() {
  'use strict';

  // Get ID from URL
  function getId() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    return id ? parseInt(id) : null;
  }

  // Fetch pet from API
  async function getPet(id) {
    try {
      const response = await fetch(`/api/items?id=${id}`);
      if (!response.ok) {
        if (response.status === 404) return null;
        throw new Error(`API error: ${response.status}`);
      }
      const data = await response.json();
      
      // Verify it's a pet
      if (data.item_type !== 'pet') {
        return null;
      }
      
      return data;
    } catch (error) {
      console.error('Error fetching pet:', error);
      return null;
    }
  }

  // Escape HTML
  function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // Render pet
  function render(pet) {
    const container = document.getElementById('petDetailContainer');
    if (!container) {
      console.error('petDetailContainer not found');
      return;
    }

    if (!pet) {
      container.innerHTML = `
        <div class="pet-detail-empty">
          <h2>Pet bulunamadı</h2>
          <p>Bu pet ilanı bulunamadı veya henüz onaylanmamış olabilir.</p>
          <a href="../pet/pet2.html" class="btn btn-primary">Pet İlanlarına Dön</a>
        </div>
      `;
      return;
    }

    const attrs = pet.attributes || {};
    const photos = pet.photos || [];
    const photoUrls = Array.isArray(photos) ? photos.map(p => typeof p === 'string' ? p : (p.url || p)).filter(url => url) : [];
    const firstImage = photoUrls[0] || '../assets/0_img/placeholder.jpg';

    const petName = pet.title || 'İsimsiz Pet';
    const petType = attrs.petType || 'Bilinmiyor';
    const listingType = attrs.listingType || 'Bilinmiyor';
    const age = attrs.age || '-';
    const breed = attrs.breed || '-';
    const shortNote = attrs.shortNote || attrs.description || '';
    const phone = pet.phone || '';

    const listingTypeText = listingType === 'Kayıp' ? '🔍 Kayıp' : '🏠 Sahiplendirilecek';
    const listingTypeClass = listingType === 'Kayıp' ? 'lost' : 'adopt';

    container.innerHTML = `
      <article class="pet-detail-card ${listingTypeClass}">
        <div class="pet-detail-hero">
          <img src="${escapeHtml(firstImage)}" alt="${escapeHtml(petName)}" class="pet-detail-image">
          <div class="pet-detail-badge">${listingTypeText}</div>
        </div>

        <div class="pet-detail-content">
          <div class="pet-detail-header">
            <h1 class="pet-detail-name">${escapeHtml(petName)}</h1>
            <div class="pet-detail-meta">
              <span class="meta-item">
                <span class="meta-icon">${petType === 'Kedi' || petType === 'kedi' ? '🐱' : '🐶'}</span>
                ${escapeHtml(petType)}
              </span>
              <span class="meta-item">
                <span class="meta-icon">📅</span>
                ${escapeHtml(age)}
              </span>
              <span class="meta-item">
                <span class="meta-icon">🧬</span>
                ${escapeHtml(breed)}
              </span>
            </div>
          </div>

          ${photoUrls.length > 1 ? `
            <div class="pet-detail-gallery">
              ${photoUrls.map((url, idx) => `
                <div class="gallery-thumb">
                  <img src="${escapeHtml(url)}" alt="Fotoğraf ${idx + 1}" onclick="document.querySelector('.pet-detail-image').src = '${escapeHtml(url)}'">
                </div>
              `).join('')}
            </div>
          ` : ''}

          ${shortNote ? `
            <div class="pet-detail-description">
              <h3>📝 Bilgiler</h3>
              <p>${escapeHtml(shortNote).replace(/\n/g, '<br>')}</p>
            </div>
          ` : ''}

          ${phone ? `
            <div class="pet-detail-contact">
              <a href="tel:${escapeHtml(phone)}" class="btn btn-primary btn-large">
                📞 İletişim: ${escapeHtml(phone)}
              </a>
            </div>
          ` : ''}
        </div>
      </article>
    `;
  }

  // Initialize
  const id = getId();
  if (!id) {
    render(null);
    return;
  }

  const pet = await getPet(id);
  render(pet);
})();
