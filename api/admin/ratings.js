/**
 * API Endpoint: Get Ratings Admin Data
 * GET /api/admin/ratings
 *
 * Protected endpoint - requires admin token
 * Returns all places with ratings data for admin panel
 */

import { getAllPlacesWithRatings, getRatingsSyncStats } from '../../lib/db-ratings.js';

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
  // Only allow GET
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Check admin authentication
    checkAdminAuth(req);

    // Get all places with ratings
    const places = await getAllPlacesWithRatings();

    // Get sync statistics
    const stats = await getRatingsSyncStats();

    return res.status(200).json({
      places,
      stats,
      total: places.length
    });

  } catch (error) {
    console.error('Get ratings error:', error);

    // Handle auth errors
    if (error.message.includes('Unauthorized') || error.message.includes('admin token')) {
      return res.status(401).json({
        error: 'Unauthorized',
        message: error.message
      });
    }

    return res.status(500).json({
      error: 'Failed to fetch ratings data',
      message: error.message
    });
  }
}
