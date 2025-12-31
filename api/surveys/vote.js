/**
 * Survey Vote API
 * POST /api/surveys/vote
 *
 * Body: { surveyId, optionId }
 * Casts a vote with IP validation
 */

import { castVote, getSurveyById } from '../../lib/db-surveys.js';

function getClientIP(req) {
  return req.headers['x-forwarded-for']?.split(',')[0] ||
         req.headers['x-real-ip'] ||
         req.connection?.remoteAddress ||
         'unknown';
}

function getUserAgent(req) {
  return req.headers['user-agent'] || null;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { surveyId, optionId } = req.body;

    // Validation
    if (!surveyId || !optionId) {
      return res.status(400).json({
        error: 'Missing required fields: surveyId, optionId'
      });
    }

    // Check if survey exists
    const survey = await getSurveyById(surveyId);
    if (!survey) {
      return res.status(404).json({
        error: 'Anket bulunamadı'
      });
    }

    if (!survey.is_active) {
      return res.status(400).json({
        error: 'Bu anket artık aktif değil'
      });
    }

    // Check if option belongs to this survey
    const validOption = survey.options.find(opt => opt.id === parseInt(optionId));
    if (!validOption) {
      return res.status(400).json({
        error: 'Geçersiz seçenek'
      });
    }

    const ipAddress = getClientIP(req);
    const userAgent = getUserAgent(req);

    // Cast vote (will throw error if already voted)
    const vote = await castVote(surveyId, optionId, ipAddress, userAgent);

    return res.status(200).json({
      success: true,
      message: 'Oyunuz kaydedildi!',
      vote: vote
    });

  } catch (error) {
    console.error('Vote error:', error);

    // Handle duplicate vote error
    if (error.message.includes('daha önce oy verdiniz')) {
      return res.status(400).json({
        error: error.message
      });
    }

    return res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
}
