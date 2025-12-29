/**
 * Admin API - Artists Management
 * GET /api/admin/artists - List all artists (with filter by status)
 * PATCH /api/admin/artists - Update artist status
 * DELETE /api/admin/artists - Delete artist
 */

import { getPendingArtists, updateArtistStatus, deleteArtist, getAllArtists } from '../../lib/db-artists.js';

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
    // GET - List artists
    if (req.method === 'GET') {
      const { status = 'pending' } = req.query;

      let artists;
      if (status === 'pending') {
        artists = await getPendingArtists();
      } else if (status === 'all') {
        artists = await getAllArtists({ status: 'approved' });
      } else {
        artists = await getAllArtists({ status });
      }

      return res.status(200).json({
        success: true,
        artists,
        count: artists.length
      });
    }

    // PATCH - Update artist status
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

      await updateArtistStatus(id, status, notes);

      return res.status(200).json({
        success: true,
        message: `Artist ${status}`
      });
    }

    // DELETE - Delete artist
    if (req.method === 'DELETE') {
      const { id } = req.query;

      if (!id) {
        return res.status(400).json({
          error: 'Missing required parameter: id'
        });
      }

      await deleteArtist(parseInt(id));

      return res.status(200).json({
        success: true,
        message: 'Artist deleted'
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
