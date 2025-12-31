/**
 * Admin Survey Management API
 * Handles: survey CRUD, option moderation
 *
 * GET /api/admin/surveys?stats=true              - Get statistics
 * GET /api/admin/surveys?unreviewed=true         - Get unreviewed options
 * GET /api/admin/surveys                         - List all surveys
 * POST /api/admin/surveys                        - Create new survey
 * PATCH /api/admin/surveys                       - Update survey or option
 * DELETE /api/admin/surveys?id=123               - Delete survey
 */

import {
  getActiveSurveys,
  getSurveyById,
  createSurvey,
  updateSurvey,
  deleteSurvey,
  updateSurveyOption,
  deleteSurveyOption,
  getUnreviewedOptions,
  getSurveyStats
} from '../../lib/db-surveys.js';

/**
 * Simple API key authentication
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
    // GET - List surveys, stats, or unreviewed options
    if (req.method === 'GET') {
      const { stats, unreviewed, id } = req.query;

      // Get statistics
      if (stats === 'true') {
        const statistics = await getSurveyStats();
        return res.status(200).json({
          success: true,
          stats: statistics
        });
      }

      // Get unreviewed user options
      if (unreviewed === 'true') {
        const options = await getUnreviewedOptions();
        return res.status(200).json({
          success: true,
          options: options,
          count: options.length
        });
      }

      // Get specific survey by ID
      if (id) {
        const survey = await getSurveyById(parseInt(id));
        if (!survey) {
          return res.status(404).json({
            error: 'Survey not found'
          });
        }
        return res.status(200).json({
          success: true,
          survey: survey
        });
      }

      // Get all surveys
      const surveys = await getActiveSurveys();
      return res.status(200).json({
        success: true,
        surveys: surveys,
        count: surveys.length
      });
    }

    // POST - Create new survey
    if (req.method === 'POST') {
      const { title, description, allow_user_options, options } = req.body;

      if (!title) {
        return res.status(400).json({
          error: 'Title is required'
        });
      }

      const newSurvey = await createSurvey({
        title,
        description: description || null,
        allow_user_options: allow_user_options !== false,
        options: options || []
      });

      return res.status(201).json({
        success: true,
        message: 'Survey created',
        survey: newSurvey
      });
    }

    // PATCH - Update survey or option
    if (req.method === 'PATCH') {
      const { surveyId, optionId, data } = req.body;

      // Update survey option
      if (optionId) {
        if (!data) {
          return res.status(400).json({
            error: 'Data is required for option update'
          });
        }

        const updated = await updateSurveyOption(optionId, data);

        if (!updated) {
          return res.status(400).json({
            error: 'No fields to update'
          });
        }

        return res.status(200).json({
          success: true,
          message: 'Option updated',
          option: updated
        });
      }

      // Update survey
      if (surveyId) {
        if (!data) {
          return res.status(400).json({
            error: 'Data is required for survey update'
          });
        }

        const updated = await updateSurvey(surveyId, data);

        if (!updated) {
          return res.status(400).json({
            error: 'No fields to update'
          });
        }

        return res.status(200).json({
          success: true,
          message: 'Survey updated',
          survey: updated
        });
      }

      return res.status(400).json({
        error: 'surveyId or optionId is required'
      });
    }

    // DELETE - Delete survey or option
    if (req.method === 'DELETE') {
      const { id, optionId } = req.query;

      // Delete option
      if (optionId) {
        await deleteSurveyOption(parseInt(optionId));
        return res.status(200).json({
          success: true,
          message: 'Option deleted'
        });
      }

      // Delete survey
      if (id) {
        await deleteSurvey(parseInt(id));
        return res.status(200).json({
          success: true,
          message: 'Survey deleted'
        });
      }

      return res.status(400).json({
        error: 'id or optionId is required'
      });
    }

    return res.status(405).json({ error: 'Method not allowed' });

  } catch (error) {
    console.error('Admin survey API error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
}
