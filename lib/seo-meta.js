/**
 * SEO Meta Tags & Structured Data Generator
 * Usage: Import and call injectSEO() in page scripts
 */

const SITE_URL = 'https://kasguide.com';
const SITE_NAME = 'Kaş Guide';
const SITE_LOGO = `${SITE_URL}/assets/0_img/logokasguide.png`;
const DEFAULT_IMAGE = `${SITE_URL}/assets/0_img/kas-default-og.jpg`;

/**
 * Inject SEO meta tags and structured data
 */
export function injectSEO(config = {}) {
  const {
    title = 'Kaş Guide - Kaş\'ta Gezilecek Yerler ve Yerel Rehber',
    description = 'Kaş\'ın en kapsamlı yerel rehberi. Gezilecek yerler, restoranlar, oteller, patili dostu mekanlar ve pratik seyahat bilgileri.',
    keywords = 'kaş, kaş gezi rehberi, kaş gezilecek yerler, kaş restoranlar, kaş oteller, kaş türkiye',
    canonical = window.location.href.split('?')[0],
    type = 'website',
    image = DEFAULT_IMAGE,
    locale = 'tr_TR',
    author = 'Kaş Guide Team',
    publishedTime = null,
    modifiedTime = null,
    section = null,
    tags = [],
    noindex = false
  } = config;

  // Set document title
  document.title = title;

  // Remove existing SEO meta tags
  removeExistingMeta();

  // Basic meta tags
  setMeta('description', description);
  setMeta('keywords', keywords);
  setMeta('author', author);
  setMeta('robots', noindex ? 'noindex, nofollow' : 'index, follow');

  // Canonical
  setLink('canonical', canonical);

  // Open Graph
  setMeta('og:site_name', SITE_NAME, 'property');
  setMeta('og:title', title, 'property');
  setMeta('og:description', description, 'property');
  setMeta('og:type', type, 'property');
  setMeta('og:url', canonical, 'property');
  setMeta('og:image', image, 'property');
  setMeta('og:image:width', '1200', 'property');
  setMeta('og:image:height', '630', 'property');
  setMeta('og:locale', locale, 'property');

  // Twitter Card
  setMeta('twitter:card', 'summary_large_image');
  setMeta('twitter:title', title);
  setMeta('twitter:description', description);
  setMeta('twitter:image', image);

  // Article-specific
  if (type === 'article' && publishedTime) {
    setMeta('article:published_time', publishedTime, 'property');
    if (modifiedTime) {
      setMeta('article:modified_time', modifiedTime, 'property');
    }
    if (section) {
      setMeta('article:section', section, 'property');
    }
    tags.forEach(tag => {
      setMeta('article:tag', tag, 'property', false);
    });
  }

  // Mobile
  setMeta('mobile-web-app-capable', 'yes');
  setMeta('apple-mobile-web-app-capable', 'yes');
  setMeta('apple-mobile-web-app-status-bar-style', 'default');
  setMeta('apple-mobile-web-app-title', SITE_NAME);

  // Theme color
  setMeta('theme-color', '#4CAF50');
}

/**
 * Inject JSON-LD structured data
 */
export function injectStructuredData(data) {
  // Remove existing structured data
  const existing = document.querySelectorAll('script[type="application/ld+json"]');
  existing.forEach(el => el.remove());

  // Add new structured data
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data, null, 2);
  document.head.appendChild(script);
}

/**
 * Generate WebSite structured data
 */
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': SITE_NAME,
    'url': SITE_URL,
    'description': 'Kaş\'ın en kapsamlı yerel rehberi. Gezilecek yerler, restoranlar, oteller ve pratik bilgiler.',
    'publisher': {
      '@type': 'Organization',
      'name': SITE_NAME,
      'logo': {
        '@type': 'ImageObject',
        'url': SITE_LOGO
      }
    },
    'potentialAction': {
      '@type': 'SearchAction',
      'target': {
        '@type': 'EntryPoint',
        'urlTemplate': `${SITE_URL}/?search={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  };
}

/**
 * Generate Article structured data
 */
export function generateArticleSchema(config) {
  const {
    headline,
    description,
    image,
    author = 'Kaş Guide Team',
    publishedTime,
    modifiedTime,
    section = 'Travel Guide',
    keywords = []
  } = config;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': headline,
    'description': description,
    'image': image || DEFAULT_IMAGE,
    'author': {
      '@type': 'Organization',
      'name': author
    },
    'publisher': {
      '@type': 'Organization',
      'name': SITE_NAME,
      'logo': {
        '@type': 'ImageObject',
        'url': SITE_LOGO
      }
    },
    'datePublished': publishedTime || new Date().toISOString(),
    'dateModified': modifiedTime || new Date().toISOString(),
    'articleSection': section,
    'keywords': keywords.join(', '),
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': window.location.href
    }
  };
}

/**
 * Generate Place/Local Business structured data
 */
export function generatePlaceSchema(config) {
  const {
    name,
    description,
    image,
    address,
    telephone,
    url,
    priceRange,
    rating,
    reviewCount,
    lat,
    lng,
    category = 'TouristAttraction'
  } = config;

  const schema = {
    '@context': 'https://schema.org',
    '@type': category,
    'name': name,
    'description': description,
    'image': image || DEFAULT_IMAGE
  };

  if (address) {
    schema.address = {
      '@type': 'PostalAddress',
      'addressLocality': 'Kaş',
      'addressRegion': 'Antalya',
      'addressCountry': 'TR',
      'streetAddress': address
    };
  }

  if (telephone) schema.telephone = telephone;
  if (url) schema.url = url;
  if (priceRange) schema.priceRange = priceRange;

  if (lat && lng) {
    schema.geo = {
      '@type': 'GeoCoordinates',
      'latitude': lat,
      'longitude': lng
    };
  }

  if (rating && reviewCount) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      'ratingValue': rating,
      'reviewCount': reviewCount
    };
  }

  return schema;
}

/**
 * Generate FAQPage structured data
 */
export function generateFAQSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };
}

/**
 * Generate BreadcrumbList structured data
 */
export function generateBreadcrumbSchema(breadcrumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': crumb.name,
      'item': crumb.url
    }))
  };
}

// Helper functions
function setMeta(name, content, attr = 'name', unique = true) {
  if (!content) return;

  if (unique) {
    const existing = document.querySelector(`meta[${attr}="${name}"]`);
    if (existing) {
      existing.setAttribute('content', content);
      return;
    }
  }

  const meta = document.createElement('meta');
  meta.setAttribute(attr, name);
  meta.setAttribute('content', content);
  document.head.appendChild(meta);
}

function setLink(rel, href) {
  if (!href) return;

  const existing = document.querySelector(`link[rel="${rel}"]`);
  if (existing) {
    existing.setAttribute('href', href);
    return;
  }

  const link = document.createElement('link');
  link.setAttribute('rel', rel);
  link.setAttribute('href', href);
  document.head.appendChild(link);
}

function removeExistingMeta() {
  // Remove old meta tags (but keep charset and viewport)
  const metaToRemove = document.querySelectorAll('meta[name="description"], meta[name="keywords"], meta[name="author"], meta[name="robots"], meta[property^="og:"], meta[name^="twitter:"], meta[name="theme-color"]');
  metaToRemove.forEach(el => el.remove());

  // Remove old canonical
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.remove();
}

// Export for use in pages
if (typeof window !== 'undefined') {
  window.KasGuideSEO = {
    injectSEO,
    injectStructuredData,
    generateWebSiteSchema,
    generateArticleSchema,
    generatePlaceSchema,
    generateFAQSchema,
    generateBreadcrumbSchema
  };
}
