/**
 * Database functions for Monthly Ratings System
 * Handles Google Maps and TripAdvisor ratings
 */

import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

/**
 * Get all places with Google Place IDs (for monthly sync)
 */
export async function getPlacesForGoogleSync() {
  const query = `
    SELECT
      id,
      title,
      google_place_id,
      google_rating,
      google_reviews_count,
      ratings_last_synced_at
    FROM places
    WHERE google_place_id IS NOT NULL
      AND google_place_id != ''
    ORDER BY title
  `;

  const result = await pool.query(query);
  return result.rows;
}

/**
 * Update Google ratings for a place
 */
export async function updateGoogleRatings(placeId, { rating, reviewsCount, mapsUrl }) {
  const query = `
    UPDATE places
    SET
      google_rating = $1,
      google_reviews_count = $2,
      google_maps_url = $3,
      ratings_last_synced_at = NOW()
    WHERE id = $4
    RETURNING id, title, google_rating, google_reviews_count
  `;

  const result = await pool.query(query, [rating, reviewsCount, mapsUrl, placeId]);
  return result.rows[0];
}

/**
 * Save rating to history (optional, for tracking)
 */
export async function saveRatingHistory(placeId, source, rating, reviewsCount) {
  const query = `
    INSERT INTO ratings_history (place_id, source, rating, reviews_count)
    VALUES ($1, $2, $3, $4)
    RETURNING id
  `;

  const result = await pool.query(query, [placeId, source, rating, reviewsCount]);
  return result.rows[0];
}

/**
 * Update TripAdvisor ratings (manual admin entry)
 */
export async function updateTripAdvisorRatings(placeId, { url, rating, reviewsCount }) {
  const query = `
    UPDATE places
    SET
      tripadvisor_url = $1,
      tripadvisor_rating = $2,
      tripadvisor_reviews_count = $3
    WHERE id = $4
    RETURNING id, title, tripadvisor_rating, tripadvisor_reviews_count
  `;

  const result = await pool.query(query, [url, rating, reviewsCount, placeId]);
  return result.rows[0];
}

/**
 * Get ratings for a specific place (for frontend display)
 */
export async function getPlaceRatings(placeId) {
  const query = `
    SELECT
      id,
      title,
      google_place_id,
      google_maps_url,
      google_rating,
      google_reviews_count,
      tripadvisor_url,
      tripadvisor_rating,
      tripadvisor_reviews_count,
      ratings_last_synced_at
    FROM places
    WHERE id = $1
  `;

  const result = await pool.query(query, [placeId]);
  return result.rows[0];
}

/**
 * Get all places with ratings (for admin panel)
 */
export async function getAllPlacesWithRatings() {
  const query = `
    SELECT
      id,
      title,
      google_place_id,
      google_rating,
      google_reviews_count,
      tripadvisor_url,
      tripadvisor_rating,
      tripadvisor_reviews_count,
      ratings_last_synced_at
    FROM places
    ORDER BY title
  `;

  const result = await pool.query(query);
  return result.rows;
}

/**
 * Get ratings sync statistics
 */
export async function getRatingsSyncStats() {
  const query = `
    SELECT
      COUNT(*) FILTER (WHERE google_place_id IS NOT NULL) as total_with_google_id,
      COUNT(*) FILTER (WHERE google_rating IS NOT NULL) as total_with_google_rating,
      COUNT(*) FILTER (WHERE tripadvisor_rating IS NOT NULL) as total_with_tripadvisor,
      MAX(ratings_last_synced_at) as last_sync_date,
      COUNT(*) FILTER (
        WHERE ratings_last_synced_at > NOW() - INTERVAL '32 days'
      ) as synced_last_month
    FROM places
  `;

  const result = await pool.query(query);
  return result.rows[0];
}

/**
 * Get rating trends (from history table)
 */
export async function getRatingTrends(placeId, source, months = 6) {
  const query = `
    SELECT
      DATE_TRUNC('month', captured_at) as month,
      AVG(rating) as avg_rating,
      MAX(reviews_count) as reviews_count
    FROM ratings_history
    WHERE place_id = $1
      AND source = $2
      AND captured_at > NOW() - INTERVAL '${months} months'
    GROUP BY DATE_TRUNC('month', captured_at)
    ORDER BY month DESC
  `;

  const result = await pool.query(query, [placeId, source]);
  return result.rows;
}
