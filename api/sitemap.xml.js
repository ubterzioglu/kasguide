/**
 * Dynamic Sitemap Generator
 * GET /api/sitemap.xml
 *
 * Generates XML sitemap with all indexable pages
 */

import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

const SITE_URL = process.env.SITE_URL || 'https://kasguide.de';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const urls = [];
    const now = new Date().toISOString();

    // Static pages - High priority
    urls.push({
      loc: `${SITE_URL}/`,
      lastmod: now,
      changefreq: 'daily',
      priority: '1.0'
    });

    urls.push({
      loc: `${SITE_URL}/faq/faq.html`,
      lastmod: now,
      changefreq: 'weekly',
      priority: '0.9'
    });

    urls.push({
      loc: `${SITE_URL}/contact/contact.html`,
      lastmod: now,
      changefreq: 'monthly',
      priority: '0.7'
    });

    urls.push({
      loc: `${SITE_URL}/contact/benioku.html`,
      lastmod: now,
      changefreq: 'monthly',
      priority: '0.8'
    });

    urls.push({
      loc: `${SITE_URL}/planner/planner.html`,
      lastmod: now,
      changefreq: 'weekly',
      priority: '0.8'
    });

    urls.push({
      loc: `${SITE_URL}/articles/articles.html`,
      lastmod: now,
      changefreq: 'weekly',
      priority: '0.8'
    });

    urls.push({
      loc: `${SITE_URL}/faqspecial/faqspecial.html`,
      lastmod: now,
      changefreq: 'weekly',
      priority: '0.8'
    });

    // Dynamic pages from database - Places
    try {
      const placesQuery = `
        SELECT id, updated_at, status
        FROM items
        WHERE item_type = 'place' AND status = 'approved'
        ORDER BY updated_at DESC
      `;
      const placesResult = await pool.query(placesQuery);

      placesResult.rows.forEach(place => {
        urls.push({
          loc: `${SITE_URL}/places/places.html?id=${place.id}`,
          lastmod: place.updated_at || now,
          changefreq: 'monthly',
          priority: '0.8'
        });
      });
    } catch (err) {
      console.error('Error fetching places for sitemap:', err);
    }

    // Dynamic pages from database - Hotels
    try {
      const hotelsQuery = `
        SELECT id, updated_at
        FROM items
        WHERE item_type = 'hotel' AND status = 'approved'
        ORDER BY updated_at DESC
      `;
      const hotelsResult = await pool.query(hotelsQuery);

      hotelsResult.rows.forEach(hotel => {
        urls.push({
          loc: `${SITE_URL}/hotel/hotel.html?id=${hotel.id}`,
          lastmod: hotel.updated_at || now,
          changefreq: 'monthly',
          priority: '0.7'
        });
      });
    } catch (err) {
      console.error('Error fetching hotels for sitemap:', err);
    }

    // Dynamic pages from database - Pet-friendly places
    try {
      const petsQuery = `
        SELECT id, updated_at
        FROM items
        WHERE item_type = 'pet' AND status = 'approved'
        ORDER BY updated_at DESC
      `;
      const petsResult = await pool.query(petsQuery);

      petsResult.rows.forEach(pet => {
        urls.push({
          loc: `${SITE_URL}/pet/pet.html?id=${pet.id}`,
          lastmod: pet.updated_at || now,
          changefreq: 'monthly',
          priority: '0.7'
        });
      });
    } catch (err) {
      console.error('Error fetching pets for sitemap:', err);
    }

    // Dynamic pages from database - Articles
    try {
      const articlesQuery = `
        SELECT id, updated_at
        FROM items
        WHERE item_type = 'article' AND status = 'approved'
        ORDER BY updated_at DESC
      `;
      const articlesResult = await pool.query(articlesQuery);

      articlesResult.rows.forEach(article => {
        urls.push({
          loc: `${SITE_URL}/articles/article.html?id=${article.id}`,
          lastmod: article.updated_at || now,
          changefreq: 'monthly',
          priority: '0.6'
        });
      });
    } catch (err) {
      console.error('Error fetching articles for sitemap:', err);
    }

    // Generate XML
    const xml = generateSitemapXML(urls);

    // Set headers for XML
    res.setHeader('Content-Type', 'application/xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=3600');

    return res.status(200).send(xml);

  } catch (error) {
    console.error('Sitemap generation error:', error);
    return res.status(500).send('Error generating sitemap');
  }
}

function generateSitemapXML(urls) {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  urls.forEach(url => {
    xml += '  <url>\n';
    xml += `    <loc>${escapeXml(url.loc)}</loc>\n`;
    xml += `    <lastmod>${url.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${url.changefreq}</changefreq>\n`;
    xml += `    <priority>${url.priority}</priority>\n`;
    xml += '  </url>\n';
  });

  xml += '</urlset>';
  return xml;
}

function escapeXml(unsafe) {
  return String(unsafe)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
