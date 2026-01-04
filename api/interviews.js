/**
 * API Endpoint: Get Interviews
 * GET /api/interviews
 * GET /api/interviews?id=91
 *
 * Interviews are stored in the unified 'items' table with item_type='interview'
 */

import { getAllItems, getItemById } from '../lib/db-items.js';

export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { id } = req.query;

    // Get single interview by ID
    if (id) {
      const interview = await getItemById(parseInt(id));

      if (!interview || interview.item_type !== 'interview') {
        return res.status(404).json({ error: 'Interview not found' });
      }

      return res.status(200).json(interview);
    }

    // Get all published interviews
    const interviews = await getAllItems({
      item_type: 'interview',
      status: 'approved'
    });

    console.log(`🎙️ Interviews API: Found ${interviews.length} interviews`);

    return res.status(200).json({
      interviews,
      count: interviews.length
    });

  } catch (error) {
    console.error('Interviews API error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
}
