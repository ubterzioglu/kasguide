import { runSchema, migrateData, verifyMigration } from '../db/migrate-unified.js';

export default async function handler(req, res) {
  // Basit auth check
  const authKey = req.headers['x-api-key'] || req.query.key;
  if (authKey !== process.env.ADMIN_API_KEY) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    console.log('Starting migration...');
    
    // Run schema
    await runSchema();
    console.log('Schema created');
    
    // Migrate data
    await migrateData();
    console.log('Data migrated');
    
    // Verify
    const verified = await verifyMigration();
    console.log('Verification:', verified);
    
    return res.status(200).json({
      success: true,
      message: 'Migration completed successfully',
      verified
    });
  } catch (error) {
    console.error('Migration error:', error);
    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
}
