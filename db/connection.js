/**
 * Database Connection Helper
 * Manages Vercel Postgres connections for kasguide
 */

import { sql } from '@vercel/postgres';

/**
 * Execute a database query
 * @param {string} query - SQL query string
 * @param {Array} params - Query parameters
 * @returns {Promise<Object>} Query result
 */
export async function query(queryString, params = []) {
  try {
    const result = await sql.query(queryString, params);
    return result;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
}

/**
 * Get database client for transactions
 */
export function getClient() {
  return sql;
}

/**
 * Test database connection
 * @returns {Promise<boolean>} Connection status
 */
export async function testConnection() {
  try {
    await sql`SELECT 1 as test`;
    console.log('✅ Database connection successful');
    return true;
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    return false;
  }
}

/**
 * Execute multiple queries in a transaction
 * @param {Function} callback - Async function receiving SQL client
 * @returns {Promise<any>} Result from callback
 */
export async function transaction(callback) {
  try {
    const result = await callback(sql);
    return result;
  } catch (error) {
    console.error('Transaction error:', error);
    throw error;
  }
}

export default sql;
