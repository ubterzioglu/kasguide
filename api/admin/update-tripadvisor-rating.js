/**
 * API Endpoint: Update TripAdvisor Rating (Manual Admin Entry)
 * POST /api/admin/update-tripadvisor-rating
 *
 * Protected endpoint - requires admin token
 * Manually updates TripAdvisor rating for a single place
 */

import { updateTripAdvisorRatings, saveRatingHistory } from '../../lib/db-ratings.js';

// Admin authentication middleware
function checkAdminAuth(req) {
  const adminToken = req.headers['x-admin-token'];
  const validToken = process.env.ADMIN_SYNC_TOKEN;

  if (!validToken) {
    throw new Error('ADMIN_SYNC_TOKEN not configured');
  }

  if (!adminToken || adminToken !== validToken) {
    throw new Error('Unauthorized - Invalid admin token');
  }
}

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Check admin authentication
    checkAdminAuth(req);

    const { placeId, url, rating, reviewsCount } = req.body;

    // Validation
    if (!placeId) {
      return res.status(400).json({ error: 'placeId is required' });
    }

    // Optional validation for rating
    if (rating !== null && rating !== undefined && (rating < 0 || rating > 5)) {
      return res.status(400).json({ error: 'Rating must be between 0 and 5' });
    }

    // Optional validation for reviews count
    if (reviewsCount !== null && reviewsCount !== undefined && reviewsCount < 0) {
      return res.status(400).json({ error: 'Reviews count must be non-negative' });
    }

    // Update database
    const updated = await updateTripAdvisorRatings(placeId, {
      url: url || null,
      rating: rating || null,
      reviewsCount: reviewsCount || null
    });

    // Save to history (optional)
    if (rating !== null && rating !== undefined) {
      await saveRatingHistory(placeId, 'tripadvisor', rating, reviewsCount);
    }

    return res.status(200).json({
      message: 'TripAdvisor rating updated successfully',
      place: updated,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Update TripAdvisor rating error:', error);

    // Handle auth errors
    if (error.message.includes('Unauthorized') || error.message.includes('admin token')) {
      return res.status(401).json({
        error: 'Unauthorized',
        message: error.message
      });
    }

    return res.status(500).json({
      error: 'Failed to update TripAdvisor rating',
      message: error.message
    });
  }
}
