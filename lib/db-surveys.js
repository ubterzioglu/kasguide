/**
 * Database Operations for Survey System
 * Handles: surveys, survey_options, survey_votes
 */

import sql from '../db/connection.js';

// ============================================================================
// SURVEY CRUD Operations
// ============================================================================

/**
 * Get all active surveys with vote counts
 */
export async function getActiveSurveys() {
  const result = await sql`
    SELECT * FROM active_surveys_summary
    ORDER BY created_at DESC
  `;
  return result.rows;
}

/**
 * Get survey by ID with options and vote counts
 */
export async function getSurveyById(id) {
  const survey = await sql`
    SELECT * FROM surveys WHERE id = ${id}
  `;

  if (survey.rows.length === 0) {
    return null;
  }

  const options = await sql`
    SELECT
      so.*,
      COUNT(sv.id) as vote_count
    FROM survey_options so
    LEFT JOIN survey_votes sv ON so.id = sv.option_id
    WHERE so.survey_id = ${id}
    GROUP BY so.id
    ORDER BY so.option_order, so.id
  `;

  const totalVotes = await sql`
    SELECT COUNT(*) as total
    FROM survey_votes
    WHERE survey_id = ${id}
  `;

  return {
    ...survey.rows[0],
    options: options.rows,
    total_votes: parseInt(totalVotes.rows[0].total)
  };
}

/**
 * Create a new survey
 */
export async function createSurvey(data) {
  const { title, description, allow_user_options = true, options = [] } = data;

  const result = await sql`
    INSERT INTO surveys (title, description, allow_user_options)
    VALUES (${title}, ${description}, ${allow_user_options})
    RETURNING *
  `;

  const surveyId = result.rows[0].id;

  // Add options
  if (options.length > 0) {
    for (let i = 0; i < options.length; i++) {
      await sql`
        INSERT INTO survey_options (survey_id, option_text, option_order, submitted_by)
        VALUES (${surveyId}, ${options[i]}, ${i + 1}, 'admin')
      `;
    }
  }

  return getSurveyById(surveyId);
}

/**
 * Update survey
 */
export async function updateSurvey(id, data) {
  const updates = [];
  const values = [];
  let paramCount = 0;

  const addUpdate = (field, value) => {
    paramCount++;
    updates.push(`${field} = $${paramCount}`);
    values.push(value);
  };

  if (data.title !== undefined) addUpdate('title', data.title);
  if (data.description !== undefined) addUpdate('description', data.description);
  if (data.is_active !== undefined) addUpdate('is_active', data.is_active);
  if (data.allow_user_options !== undefined) addUpdate('allow_user_options', data.allow_user_options);

  if (updates.length === 0) {
    return false;
  }

  addUpdate('updated_at', new Date().toISOString());

  paramCount++;
  const query = `
    UPDATE surveys
    SET ${updates.join(', ')}
    WHERE id = $${paramCount}
    RETURNING *
  `;
  values.push(id);

  const result = await sql.query(query, values);
  return result.rows[0];
}

/**
 * Delete survey
 */
export async function deleteSurvey(id) {
  await sql`DELETE FROM surveys WHERE id = ${id}`;
  return true;
}

// ============================================================================
// SURVEY OPTIONS Operations
// ============================================================================

/**
 * Add option to survey (user or admin)
 */
export async function addSurveyOption(surveyId, optionText, submittedBy = 'user', ipAddress = null) {
  // Get next order number
  const maxOrder = await sql`
    SELECT COALESCE(MAX(option_order), 0) as max_order
    FROM survey_options
    WHERE survey_id = ${surveyId}
  `;

  const nextOrder = parseInt(maxOrder.rows[0].max_order) + 1;

  const result = await sql`
    INSERT INTO survey_options (
      survey_id,
      option_text,
      option_order,
      submitted_by,
      submitted_ip
    ) VALUES (
      ${surveyId},
      ${optionText},
      ${nextOrder},
      ${submittedBy},
      ${ipAddress}
    )
    RETURNING *
  `;

  return result.rows[0];
}

/**
 * Update survey option
 */
export async function updateSurveyOption(id, data) {
  const updates = [];
  const values = [];
  let paramCount = 0;

  const addUpdate = (field, value) => {
    paramCount++;
    updates.push(`${field} = $${paramCount}`);
    values.push(value);
  };

  if (data.option_text !== undefined) addUpdate('option_text', data.option_text);
  if (data.option_order !== undefined) addUpdate('option_order', data.option_order);
  if (data.is_reviewed !== undefined) {
    addUpdate('is_reviewed', data.is_reviewed);
    addUpdate('reviewed_at', new Date().toISOString());
    if (data.reviewed_by) addUpdate('reviewed_by', data.reviewed_by);
  }

  if (updates.length === 0) {
    return false;
  }

  addUpdate('updated_at', new Date().toISOString());

  paramCount++;
  const query = `
    UPDATE survey_options
    SET ${updates.join(', ')}
    WHERE id = $${paramCount}
    RETURNING *
  `;
  values.push(id);

  const result = await sql.query(query, values);
  return result.rows[0];
}

/**
 * Delete survey option
 */
export async function deleteSurveyOption(id) {
  await sql`DELETE FROM survey_options WHERE id = ${id}`;
  return true;
}

/**
 * Get unreviewed user options
 */
export async function getUnreviewedOptions() {
  const result = await sql`
    SELECT
      so.*,
      s.title as survey_title,
      COUNT(sv.id) as vote_count
    FROM survey_options so
    JOIN surveys s ON so.survey_id = s.id
    LEFT JOIN survey_votes sv ON so.id = sv.option_id
    WHERE so.submitted_by = 'user'
      AND so.is_reviewed = false
    GROUP BY so.id, s.title
    ORDER BY so.created_at DESC
  `;

  return result.rows;
}

// ============================================================================
// VOTING Operations
// ============================================================================

/**
 * Check if IP already voted
 */
export async function hasVoted(surveyId, ipAddress) {
  const result = await sql`
    SELECT id FROM survey_votes
    WHERE survey_id = ${surveyId}
      AND ip_address = ${ipAddress}
    LIMIT 1
  `;

  return result.rows.length > 0;
}

/**
 * Cast a vote
 */
export async function castVote(surveyId, optionId, ipAddress, userAgent = null) {
  // Check if already voted
  const alreadyVoted = await hasVoted(surveyId, ipAddress);
  if (alreadyVoted) {
    throw new Error('Bu ankete daha önce oy verdiniz');
  }

  const result = await sql`
    INSERT INTO survey_votes (survey_id, option_id, ip_address, user_agent)
    VALUES (${surveyId}, ${optionId}, ${ipAddress}, ${userAgent})
    RETURNING *
  `;

  return result.rows[0];
}

/**
 * Get survey results
 */
export async function getSurveyResults(surveyId) {
  const result = await sql`
    SELECT * FROM survey_results
    WHERE survey_id = ${surveyId}
    ORDER BY submitted_by DESC, vote_count DESC
  `;

  return result.rows;
}

/**
 * Get user's vote for a survey
 */
export async function getUserVote(surveyId, ipAddress) {
  const result = await sql`
    SELECT option_id FROM survey_votes
    WHERE survey_id = ${surveyId}
      AND ip_address = ${ipAddress}
    LIMIT 1
  `;

  return result.rows.length > 0 ? result.rows[0].option_id : null;
}

// ============================================================================
// STATISTICS
// ============================================================================

/**
 * Get survey statistics
 */
export async function getSurveyStats() {
  const stats = await sql`
    SELECT
      COUNT(*) as total_surveys,
      COUNT(*) FILTER (WHERE is_active = true) as active_surveys,
      SUM((SELECT COUNT(*) FROM survey_votes WHERE survey_id = surveys.id)) as total_votes,
      SUM((SELECT COUNT(*) FROM survey_options WHERE survey_id = surveys.id AND submitted_by = 'user')) as user_options
    FROM surveys
  `;

  const unreviewed = await sql`
    SELECT COUNT(*) as count
    FROM survey_options
    WHERE submitted_by = 'user'
      AND is_reviewed = false
  `;

  return {
    ...stats.rows[0],
    unreviewed_options: parseInt(unreviewed.rows[0].count)
  };
}
