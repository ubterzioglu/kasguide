/**
 * Unified Admin API - Items Management
 * Handles: places, pets, hotels, artists
 *
 * GET /api/admin/items?status=pending              - List pending items (all types)
 * GET /api/admin/items?status=pending&type=place   - List pending places
 * GET /api/admin/items?status=approved             - List approved items
 * GET /api/admin/items?stats=true                  - Get statistics
 * PATCH /api/admin/items                           - Update item status
 * DELETE /api/admin/items?id=123                   - Delete item
 */

import {
  getPendingItems,
  updateItemStatus,
  updateItem,
  deleteItem,
  getAllItems,
  getItemStats
} from '../../lib/db-items.js';

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
    // GET - List items or get stats
    if (req.method === 'GET') {
      const { status, type, stats } = req.query;

      // Get statistics
      if (stats === 'true') {
        const statistics = await getItemStats();
        return res.status(200).json({
          success: true,
          stats: statistics
        });
      }

      // Get items by status
      let items;

      if (status === 'pending') {
        items = await getPendingItems(type || null);
      } else if (status === 'all') {
        items = await getAllItems({
          item_type: type || null,
          status: 'approved'
        });
      } else {
        items = await getAllItems({
          item_type: type || null,
          status: status || 'pending'
        });
      }

      return res.status(200).json({
        success: true,
        items,
        count: items.length,
        type: type || 'all',
        status: status || 'pending'
      });
    }

    // PATCH - Update item status or data
    if (req.method === 'PATCH') {
      const { id, status, notes, data } = req.body;

      if (!id) {
        return res.status(400).json({
          error: 'Missing required field: id'
        });
      }

      // Update status only
      if (status && !data) {
        if (!['approved', 'rejected', 'pending', 'active', 'resolved', 'expired'].includes(status)) {
          return res.status(400).json({
            error: 'Invalid status. Must be: approved, rejected, pending, active, resolved, or expired'
          });
        }

        await updateItemStatus(id, status, notes);

        return res.status(200).json({
          success: true,
          message: `Item ${status}`
        });
      }

      // Update full item data
      if (data) {
        const updated = await updateItem(id, data);

        if (!updated) {
          return res.status(400).json({
            error: 'No fields to update'
          });
        }

        return res.status(200).json({
          success: true,
          message: 'Item updated',
          item: updated
        });
      }

      return res.status(400).json({
        error: 'Either status or data must be provided'
      });
    }

    // DELETE - Delete item
    if (req.method === 'DELETE') {
      const { id } = req.query;

      if (!id) {
        return res.status(400).json({
          error: 'Missing required parameter: id'
        });
      }

      await deleteItem(parseInt(id));

      return res.status(200).json({
        success: true,
        message: 'Item deleted'
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
