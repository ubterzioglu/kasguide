/**
 * Admin API - Pets Management
 * GET /api/admin/pets - List all pets (with filter by status)
 * PATCH /api/admin/pets - Update pet status
 * DELETE /api/admin/pets - Delete pet
 */

import { getPendingPets, updatePetStatus, deletePet, getAllPets } from '../../lib/db-pets.js';

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
    // GET - List pets
    if (req.method === 'GET') {
      const { status = 'pending' } = req.query;

      let pets;
      if (status === 'pending') {
        pets = await getPendingPets();
      } else {
        pets = await getAllPets({ status });
      }

      return res.status(200).json({
        success: true,
        pets,
        count: pets.length
      });
    }

    // PATCH - Update pet status
    if (req.method === 'PATCH') {
      const { id, status } = req.body;

      if (!id || !status) {
        return res.status(400).json({
          error: 'Missing required fields: id, status'
        });
      }

      if (!['pending', 'approved', 'rejected', 'active', 'resolved', 'expired'].includes(status)) {
        return res.status(400).json({
          error: 'Invalid status. Must be: pending, approved, rejected, active, resolved, or expired'
        });
      }

      await updatePetStatus(id, status);

      return res.status(200).json({
        success: true,
        message: `Pet ${status}`
      });
    }

    // DELETE - Delete pet
    if (req.method === 'DELETE') {
      const { id } = req.query;

      if (!id) {
        return res.status(400).json({
          error: 'Missing required parameter: id'
        });
      }

      await deletePet(parseInt(id));

      return res.status(200).json({
        success: true,
        message: 'Pet deleted'
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
