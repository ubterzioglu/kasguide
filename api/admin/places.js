/**
 * Admin API - Places Management
 * GET /api/admin/places - List all places (with filter by status)
 * PATCH /api/admin/places - Update place status
 * DELETE /api/admin/places - Delete place
 */

import { getPendingPlaces, updatePlaceStatus, deletePlace, getAllPlaces } from '../../lib/db-places.js';

/**
 * Simple API key authentication
 * Set ADMIN_API_KEY in environment variables
 */
function checkAuth(req) {
  const apiKey = req.headers['x-api-key'] || req.query.apiKey;
  const validKey = process.env.ADMIN_API_KEY;

  if (!validKey) {
    console.warn('⚠️  ADMIN_API_KEY not set in environment');
    return false;
  }

  return apiKey === validKey;
}

export default async function handler(req, res) {
  // Check authentication
  if (!checkAuth(req)) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    // GET - List places
    if (req.method === 'GET') {
      const { status = 'pending' } = req.query;

      let places;
      if (status === 'pending') {
        places = await getPendingPlaces();
      } else if (status === 'all') {
        places = await getAllPlaces({ status: 'approved' });
      } else {
        places = await getAllPlaces({ status });
      }

      return res.status(200).json({
        success: true,
        places,
        count: places.length
      });
    }

    // PATCH - Update place status
    if (req.method === 'PATCH') {
      const { id, status, notes } = req.body;

      if (!id || !status) {
        return res.status(400).json({
          error: 'Missing required fields: id, status'
        });
      }

      if (!['approved', 'rejected', 'pending'].includes(status)) {
        return res.status(400).json({
          error: 'Invalid status. Must be: approved, rejected, or pending'
        });
      }

      await updatePlaceStatus(id, status, notes);

      return res.status(200).json({
        success: true,
        message: `Place ${status}`
      });
    }

    // DELETE - Delete place
    if (req.method === 'DELETE') {
      const { id } = req.query;

      if (!id) {
        return res.status(400).json({
          error: 'Missing required parameter: id'
        });
      }

      await deletePlace(parseInt(id));

      return res.status(200).json({
        success: true,
        message: 'Place deleted'
      });
    }

    return res.status(405).json({ error: 'Method not allowed' });

  } catch (error) {
    console.error('Admin API error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
}
