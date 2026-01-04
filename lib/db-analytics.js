/**
 * Database functions for analytics
 */

import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

/**
 * Track a venue view
 */
export async function trackVenueView({ venue_id, venue_type, event_type, session_id, referrer, user_agent }) {
  const query = `
    INSERT INTO venue_analytics (venue_id, venue_type, event_type, session_id, referrer, user_agent)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING id
  `;

  const result = await pool.query(query, [
    venue_id,
    venue_type,
    event_type,
    session_id,
    referrer,
    user_agent
  ]);

  return result.rows[0];
}

/**
 * Get analytics summary for admin panel
 */
export async function getAnalyticsSummary(days = 30) {
  const query = `
    SELECT
      venue_type,
      COUNT(*) as total_views,
      COUNT(DISTINCT session_id) as unique_visitors,
      COUNT(DISTINCT DATE(viewed_at)) as days_with_activity
    FROM venue_analytics
    WHERE viewed_at > NOW() - INTERVAL '${days} days'
    GROUP BY venue_type
    ORDER BY total_views DESC
  `;

  const result = await pool.query(query);
  return result.rows;
}

/**
 * Get most viewed places
 */
export async function getMostViewedPlaces(limit = 20, days = 30) {
  const query = `
    SELECT
      va.venue_id,
      p.title,
      p.slug,
      COUNT(*) as total_views,
      COUNT(DISTINCT va.session_id) as unique_visitors,
      MAX(va.viewed_at) as last_viewed
    FROM venue_analytics va
    JOIN places p ON va.venue_id = p.id
    WHERE va.venue_type = 'place'
      AND va.viewed_at > NOW() - INTERVAL '${days} days'
    GROUP BY va.venue_id, p.title, p.slug
    ORDER BY total_views DESC
    LIMIT $1
  `;

  const result = await pool.query(query, [limit]);
  return result.rows;
}

/**
 * Get most viewed hotels
 */
export async function getMostViewedHotels(limit = 20, days = 30) {
  const query = `
    SELECT
      va.venue_id,
      h.title,
      h.slug,
      COUNT(*) as total_views,
      COUNT(DISTINCT va.session_id) as unique_visitors,
      MAX(va.viewed_at) as last_viewed
    FROM venue_analytics va
    JOIN hotels h ON va.venue_id = h.id
    WHERE va.venue_type = 'hotel'
      AND va.viewed_at > NOW() - INTERVAL '${days} days'
    GROUP BY va.venue_id, h.title, h.slug
    ORDER BY total_views DESC
    LIMIT $1
  `;

  const result = await pool.query(query, [limit]);
  return result.rows;
}

/**
 * Get most viewed pet-friendly places
 */
export async function getMostViewedPets(limit = 20, days = 30) {
  const query = `
    SELECT
      va.venue_id,
      pf.title,
      pf.slug,
      COUNT(*) as total_views,
      COUNT(DISTINCT va.session_id) as unique_visitors,
      MAX(va.viewed_at) as last_viewed
    FROM venue_analytics va
    JOIN pet_friendly pf ON va.venue_id = pf.id
    WHERE va.venue_type = 'pet'
      AND va.viewed_at > NOW() - INTERVAL '${days} days'
    GROUP BY va.venue_id, pf.title, pf.slug
    ORDER BY total_views DESC
    LIMIT $1
  `;

  const result = await pool.query(query, [limit]);
  return result.rows;
}

/**
 * Get daily views for the last N days
 */
export async function getDailyViews(days = 30) {
  const query = `
    SELECT
      DATE(viewed_at) as date,
      venue_type,
      COUNT(*) as views,
      COUNT(DISTINCT session_id) as unique_visitors
    FROM venue_analytics
    WHERE viewed_at > NOW() - INTERVAL '${days} days'
    GROUP BY DATE(viewed_at), venue_type
    ORDER BY date DESC, venue_type
  `;

  const result = await pool.query(query);
  return result.rows;
}

/**
 * Get analytics for a specific venue
 */
export async function getVenueAnalytics(venue_id, venue_type, days = 30) {
  const query = `
    SELECT
      DATE(viewed_at) as date,
      COUNT(*) as views,
      COUNT(DISTINCT session_id) as unique_visitors
    FROM venue_analytics
    WHERE venue_id = $1
      AND venue_type = $2
      AND viewed_at > NOW() - INTERVAL '${days} days'
    GROUP BY DATE(viewed_at)
    ORDER BY date DESC
  `;

  const result = await pool.query(query, [venue_id, venue_type]);
  return result.rows;
}
