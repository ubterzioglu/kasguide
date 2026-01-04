/**
 * Survey List API
 * GET /api/surveys/list
 *
 * Returns active surveys with user's vote status
 */

import { getActiveSurveys, getUserVote } from '../../lib/db-surveys.js';

function getClientIP(req) {
  return req.headers['x-forwarded-for']?.split(',')[0] ||
         req.headers['x-real-ip'] ||
         req.connection?.remoteAddress ||
         'unknown';
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const surveys = await getActiveSurveys();
    const ipAddress = getClientIP(req);

    // Add user's vote status to each survey
    const surveysWithVoteStatus = await Promise.all(
      surveys.map(async (survey) => {
        const userVotedOptionId = await getUserVote(survey.id, ipAddress);
        return {
          ...survey,
          user_has_voted: userVotedOptionId !== null,
          user_voted_option_id: userVotedOptionId
        };
      })
    );

    return res.status(200).json({
      success: true,
      surveys: surveysWithVoteStatus,
      count: surveysWithVoteStatus.length
    });

  } catch (error) {
    console.error('Survey list error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
}
