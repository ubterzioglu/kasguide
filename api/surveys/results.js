/**
 * Survey Results API
 * GET /api/surveys/results?id=123
 *
 * Returns survey results with vote counts and percentages
 */

import { getSurveyResults, getSurveyById } from '../../lib/db-surveys.js';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({
        error: 'Missing required parameter: id'
      });
    }

    const surveyId = parseInt(id);

    // Get survey details
    const survey = await getSurveyById(surveyId);
    if (!survey) {
      return res.status(404).json({
        error: 'Anket bulunamadı'
      });
    }

    // Get results from view
    const results = await getSurveyResults(surveyId);

    return res.status(200).json({
      success: true,
      survey: {
        id: survey.id,
        title: survey.title,
        description: survey.description,
        total_votes: survey.total_votes
      },
      results: results
    });

  } catch (error) {
    console.error('Survey results error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
}
