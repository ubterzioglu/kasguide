/**
 * Add Survey Option API
 * POST /api/surveys/add-option
 *
 * Body: { surveyId, optionText }
 * Allows users to submit new options (max 3 per survey per IP)
 */

import { addSurveyOption, getSurveyById } from '../../lib/db-surveys.js';

function getClientIP(req) {
  return req.headers['x-forwarded-for']?.split(',')[0] ||
         req.headers['x-real-ip'] ||
         req.connection?.remoteAddress ||
         'unknown';
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { surveyId, optionText } = req.body;

    // Validation
    if (!surveyId || !optionText) {
      return res.status(400).json({
        error: 'Anket ID ve seçenek metni gereklidir'
      });
    }

    if (optionText.trim().length === 0) {
      return res.status(400).json({
        error: 'Seçenek metni boş olamaz'
      });
    }

    if (optionText.length > 255) {
      return res.status(400).json({
        error: 'Seçenek metni çok uzun (max 255 karakter)'
      });
    }

    // Check if survey exists and allows user options
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

    if (!survey.allow_user_options) {
      return res.status(400).json({
        error: 'Bu ankete kullanıcı seçeneği eklenemez'
      });
    }

    const ipAddress = getClientIP(req);

    // Add option (trigger will enforce 3-option limit per IP)
    const option = await addSurveyOption(
      surveyId,
      optionText.trim(),
      'user',
      ipAddress
    );

    return res.status(200).json({
      success: true,
      message: 'Seçeneğiniz eklendi!',
      option: option
    });

  } catch (error) {
    console.error('Add option error:', error);

    // Handle limit exceeded error from database trigger
    if (error.message.includes('maksimum 3 seçenek')) {
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
