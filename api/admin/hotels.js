/**
 * Admin API - Hotels Management
 * GET /api/admin/hotels - List all hotels (with filter by status)
 * PATCH /api/admin/hotels - Update hotel status
 * DELETE /api/admin/hotels - Delete hotel
 */

import { getPendingHotels, updateHotelStatus, deleteHotel, getAllHotels } from '../../lib/db-hotels.js';

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
    // GET - List hotels
    if (req.method === 'GET') {
      const { status = 'pending' } = req.query;

      let hotels;
      if (status === 'pending') {
        hotels = await getPendingHotels();
      } else if (status === 'all') {
        hotels = await getAllHotels({ status: 'approved' });
      } else {
        hotels = await getAllHotels({ status });
      }

      return res.status(200).json({
        success: true,
        hotels,
        count: hotels.length
      });
    }

    // PATCH - Update hotel status
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

      await updateHotelStatus(id, status, notes);

      return res.status(200).json({
        success: true,
        message: `Hotel ${status}`
      });
    }

    // DELETE - Delete hotel
    if (req.method === 'DELETE') {
      const { id } = req.query;

      if (!id) {
        return res.status(400).json({
          error: 'Missing required parameter: id'
        });
      }

      await deleteHotel(parseInt(id));

      return res.status(200).json({
        success: true,
        message: 'Hotel deleted'
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
