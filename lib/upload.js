/**
 * File Upload Utilities
 * Handles photo uploads to Vercel Blob storage
 */

import { put } from '@vercel/blob';
import fs from 'fs';
import path from 'path';

/**
 * Upload file to Vercel Blob
 * @param {Object} file - Formidable file object
 * @param {string} folder - Folder name in blob storage
 * @returns {Promise<string>} Blob URL
 */
export async function uploadToBlob(file, folder = 'uploads') {
  if (!file || !file.filepath) {
    throw new Error('Invalid file object');
  }

  try {
    // Read file from temp path
    const fileBuffer = fs.readFileSync(file.filepath);

    // Generate unique filename
    const timestamp = Date.now();
    const originalName = file.originalFilename || 'upload';
    const ext = path.extname(originalName);
    const basename = path.basename(originalName, ext)
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '-')
      .substring(0, 50);

    const filename = `${folder}/${timestamp}-${basename}${ext}`;

    // Upload to Vercel Blob
    const blob = await put(filename, fileBuffer, {
      access: 'public',
      contentType: file.mimetype
    });

    return blob.url;

  } catch (error) {
    console.error('Blob upload error:', error);
    throw new Error(`Failed to upload file: ${error.message}`);
  } finally {
    // Clean up temp file
    try {
      if (file.filepath && fs.existsSync(file.filepath)) {
        fs.unlinkSync(file.filepath);
      }
    } catch (cleanupError) {
      console.warn('Temp file cleanup warning:', cleanupError.message);
    }
  }
}

/**
 * Upload multiple files
 * @param {Array} files - Array of formidable file objects
 * @param {string} folder - Folder name in blob storage
 * @returns {Promise<Array<string>>} Array of blob URLs
 */
export async function uploadMultipleToBlob(files, folder = 'uploads') {
  if (!Array.isArray(files)) {
    files = [files];
  }

  const uploadPromises = files
    .filter(f => f && f.filepath && f.size > 0)
    .map(file => uploadToBlob(file, folder));

  return await Promise.all(uploadPromises);
}

/**
 * Save file locally (fallback if Blob is not configured)
 * @param {Object} file - Formidable file object
 * @param {string} folder - Local folder relative to public/
 * @returns {Promise<string>} Local file path
 */
export async function saveLocally(file, folder = 'uploads') {
  if (!file || !file.filepath) {
    throw new Error('Invalid file object');
  }

  try {
    // Create upload directory if it doesn't exist
    const uploadDir = path.join(process.cwd(), 'public', folder);

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // Generate filename
    const timestamp = Date.now();
    const originalName = file.originalFilename || 'upload';
    const ext = path.extname(originalName);
    const basename = path.basename(originalName, ext)
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '-')
      .substring(0, 50);

    const filename = `${timestamp}-${basename}${ext}`;
    const targetPath = path.join(uploadDir, filename);

    // Copy file
    fs.copyFileSync(file.filepath, targetPath);

    // Clean up temp file
    fs.unlinkSync(file.filepath);

    // Return relative URL
    return `/${folder}/${filename}`;

  } catch (error) {
    console.error('Local save error:', error);
    throw new Error(`Failed to save file locally: ${error.message}`);
  }
}

/**
 * Upload handler - tries Blob first, falls back to local storage
 * @param {Object|Array} files - File or array of files
 * @param {string} folder - Folder name
 * @returns {Promise<string|Array<string>>} URL(s) of uploaded file(s)
 */
export async function upload(files, folder = 'uploads') {
  const isArray = Array.isArray(files);
  const fileList = isArray ? files : [files];

  // Check if Blob is configured
  const useBlobStorage = !!process.env.BLOB_READ_WRITE_TOKEN;

  try {
    if (useBlobStorage) {
      console.log('📤 Uploading to Vercel Blob...');
      const urls = await uploadMultipleToBlob(fileList, folder);
      return isArray ? urls : urls[0];
    } else {
      console.log('💾 Saving files locally...');
      const urls = [];
      for (const file of fileList) {
        if (file && file.filepath && file.size > 0) {
          const url = await saveLocally(file, folder);
          urls.push(url);
        }
      }
      return isArray ? urls : urls[0];
    }
  } catch (error) {
    console.error('Upload error:', error);
    throw error;
  }
}
