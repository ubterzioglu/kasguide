/**
 * Ratings Component for Place Detail Pages
 * Displays Google Maps and TripAdvisor ratings
 *
 * Usage:
 *   import { renderRatingsSection } from './lib/ratings-component.js';
 *   renderRatingsSection(container, placeData);
 */

/**
 * Render ratings section
 * @param {HTMLElement} container - Container element
 * @param {Object} place - Place data with ratings
 */
export function renderRatingsSection(container, place) {
  if (!container || !place) return;

  const {
    google_rating,
    google_reviews_count,
    google_maps_url,
    tripadvisor_rating,
    tripadvisor_reviews_count,
    tripadvisor_url,
    ratings_last_synced_at
  } = place;

  // If no ratings data at all, don't render the section
  if (!google_rating && !tripadvisor_rating) {
    return;
  }

  const html = `
    <div class="ratings-section">
      <h3 class="ratings-title">Değerlendirmeler</h3>

      <div class="ratings-cards">
        ${renderGoogleCard(google_rating, google_reviews_count, google_maps_url)}
        ${renderTripAdvisorCard(tripadvisor_rating, tripadvisor_reviews_count, tripadvisor_url)}
      </div>

      ${ratings_last_synced_at ? `
        <div class="ratings-updated">
          Son güncelleme: ${formatDate(ratings_last_synced_at)}
        </div>
      ` : ''}
    </div>
  `;

  container.innerHTML = html;
}

function renderGoogleCard(rating, reviewsCount, mapsUrl) {
  const hasRating = rating !== null && rating !== undefined;

  return `
    <div class="rating-card">
      <div class="rating-card-header">
        <svg class="rating-icon google-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        <span class="rating-card-title">Google Maps</span>
      </div>

      ${hasRating ? `
        <div class="rating-display">
          <span class="rating-value">${rating.toFixed(1)}</span>
          <div class="rating-stars">${renderStars(rating)}</div>
        </div>
        <div class="rating-reviews">
          ${reviewsCount ? `${formatNumber(reviewsCount)} değerlendirme` : ''}
        </div>
      ` : `
        <div class="rating-empty">Henüz değerlendirme yok</div>
      `}

      ${mapsUrl ? `
        <a href="${mapsUrl}" target="_blank" rel="noopener noreferrer" class="rating-cta">
          Google Maps'te Aç →
        </a>
      ` : ''}
    </div>
  `;
}

function renderTripAdvisorCard(rating, reviewsCount, tripAdvisorUrl) {
  const hasRating = rating !== null && rating !== undefined;

  return `
    <div class="rating-card">
      <div class="rating-card-header">
        <svg class="rating-icon tripadvisor-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#00AF87"/>
          <circle cx="12" cy="12" r="3" fill="#00AF87"/>
        </svg>
        <span class="rating-card-title">TripAdvisor</span>
      </div>

      ${hasRating ? `
        <div class="rating-display">
          <span class="rating-value">${rating.toFixed(1)}</span>
          <div class="rating-stars">${renderStars(rating)}</div>
        </div>
        <div class="rating-reviews">
          ${reviewsCount ? `${formatNumber(reviewsCount)} yorum` : ''}
        </div>
      ` : `
        <div class="rating-empty">Henüz değerlendirme yok</div>
      `}

      ${tripAdvisorUrl ? `
        <a href="${tripAdvisorUrl}" target="_blank" rel="noopener noreferrer" class="rating-cta">
          TripAdvisor'da Görüntüle →
        </a>
      ` : ''}
    </div>
  `;
}

function renderStars(rating) {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push('<span class="star star-full">⭐</span>');
    } else if (i === fullStars && hasHalfStar) {
      stars.push('<span class="star star-half">⭐</span>');
    } else {
      stars.push('<span class="star star-empty">☆</span>');
    }
  }

  return stars.join('');
}

function formatNumber(num) {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k';
  }
  return num.toString();
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long' };
  return date.toLocaleDateString('tr-TR', options);
}

// Make available globally
if (typeof window !== 'undefined') {
  window.RatingsComponent = {
    renderRatingsSection
  };
}
