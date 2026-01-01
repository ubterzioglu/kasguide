/**
 * API Endpoint: Track Analytics
 * POST /api/analytics/track
 *
 * Tracks venue views and interactions
 */

import { trackVenueView } from '../../lib/db-analytics.js';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { venue_id, venue_type, event_type = 'view' } = req.body;

    // Validation
    if (!venue_id || !venue_type) {
      return res.status(400).json({ error: 'venue_id and venue_type are required' });
    }

    if (!['place', 'hotel', 'pet', 'article'].includes(venue_type)) {
      return res.status(400).json({ error: 'Invalid venue_type' });
    }

    // Get session ID from cookie or generate new one
    let session_id = req.cookies?.session_id;
    if (!session_id) {
      session_id = generateSessionId();
    }

    // Get metadata
    const referrer = req.headers.referer || req.headers.referrer || null;
    const user_agent = req.headers['user-agent'] || null;

    // Rate limiting: Check if same session viewed same venue in last 5 minutes
    const rate_limit_key = `${session_id}:${venue_id}:${venue_type}`;
    const last_view = global.analytics_rate_limit?.[rate_limit_key];

    if (last_view && (Date.now() - last_view) < 5 * 60 * 1000) {
      // Skip tracking but return success
      return res.status(200).json({ ok: true, skipped: true });
    }

    // Store in global object (simple in-memory rate limiting)
    if (!global.analytics_rate_limit) {
      global.analytics_rate_limit = {};
    }
    global.analytics_rate_limit[rate_limit_key] = Date.now();

    // Clean up old entries (older than 10 minutes)
    const now = Date.now();
    Object.keys(global.analytics_rate_limit).forEach(key => {
      if (now - global.analytics_rate_limit[key] > 10 * 60 * 1000) {
        delete global.analytics_rate_limit[key];
      }
    });

    // Track in database
    await trackVenueView({
      venue_id,
      venue_type,
      event_type,
      session_id,
      referrer,
      user_agent
    });

    // Set session cookie if new
    if (!req.cookies?.session_id) {
      res.setHeader('Set-Cookie', `session_id=${session_id}; Path=/; Max-Age=${60 * 60 * 24 * 365}; SameSite=Lax`);
    }

    return res.status(200).json({ ok: true });

  } catch (error) {
    console.error('Analytics tracking error:', error);
    // Don't fail hard - analytics shouldn't break the site
    return res.status(200).json({ ok: true, error: 'tracking_failed' });
  }
}

// Generate a simple session ID
function generateSessionId() {
  return 'sess_' + Math.random().toString(36).substring(2, 15) +
         Math.random().toString(36).substring(2, 15) +
         Date.now().toString(36);
}
