/**
 * Unified Item Submission API
 * Handles submissions for: places, pets, hotels, artists
 * Saves to unified items table for admin approval
 */

import formidable from "formidable";
import nodemailer from "nodemailer";
import { createItem } from '../lib/db-items.js';
// import { upload } from '../lib/upload.js'; // TODO: Re-enable after Vercel Blob setup

export const config = {
  api: { bodyParser: false },
};

function first(v) {
  return Array.isArray(v) ? v[0] : v;
}

function asArray(v) {
  if (!v) return [];
  return Array.isArray(v) ? v : [v];
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  try {
    const form = formidable({
      multiples: true,
      maxFileSize: 2 * 1024 * 1024, // 2MB per file
      allowEmptyFiles: true,
      minFileSize: 0,
    });

    const [fields, files] = await form.parse(req);

    // Get item type
    const itemType = first(fields.itemType);

    if (!itemType || !['place', 'pet', 'hotel', 'artist'].includes(itemType)) {
      return res.status(400).json({
        success: false,
        message: "Geçersiz item tipi",
      });
    }

    // Parse common fields
    const title = first(fields.title);
    const description = first(fields.description);
    const longText = first(fields.longText);
    const phone = first(fields.phone);
    const email = first(fields.email);
    const website = first(fields.website);
    const instagram = first(fields.instagram);
    const location = first(fields.location);
    const extraNotes = first(fields.extraNotes);

    // Validate required fields based on type
    let validationError = null;

    switch (itemType) {
      case 'place':
        if (!title || !longText || !phone) {
          validationError = "Zorunlu alanlar: Başlık, Detaylı Açıklama, Telefon";
        }
        break;
      case 'pet':
        if (!first(fields.petType) || !first(fields.listingType) || !phone) {
          validationError = "Zorunlu alanlar: Hayvan Tipi, İlan Tipi, Telefon";
        }
        break;
      case 'hotel':
        if (!title || !first(fields.hotelType) || !location || !phone || !email) {
          validationError = "Zorunlu alanlar: Otel Adı, Tip, Konum, Telefon, Email";
        }
        break;
      case 'artist':
        if (!title || !longText) {
          validationError = "Zorunlu alanlar: Sanatçı Adı, Bio";
        }
        break;
    }

    if (validationError) {
      return res.status(400).json({
        success: false,
        message: validationError,
      });
    }

    // TODO: Photo upload will be enabled after Vercel Blob configuration
    // For now, skip all photo handling to get basic submission working
    const photoUrls = [];
    console.log('📷 Photo upload temporarily disabled (not configured yet)');

    // Build item data based on type
    let itemData = {
      title,
      description,
      longText,
      phone,
      email,
      website,
      instagram,
      location,
      extraNotes,
      photos: photoUrls,
    };

    // Add type-specific fields
    switch (itemType) {
      case 'place':
        itemData = {
          ...itemData,
          distance: first(fields.distance),
          price: first(fields.price),
          duration: first(fields.duration),
          access: first(fields.access),
          googleMapsQuery: first(fields.googleMapsQuery),
          booking: first(fields.booking),
          categories: asArray(fields.categories).filter(Boolean),
          facilities: asArray(fields.facilities).filter(Boolean),
          features: asArray(fields.features).filter(Boolean),
          tags: asArray(fields.tags).filter(Boolean),
          badgeId: first(fields.badgeId) ? parseInt(first(fields.badgeId)) : null,
        };
        break;

      case 'pet':
        itemData = {
          ...itemData,
          petType: first(fields.petType),
          listingType: first(fields.listingType),
          age: first(fields.age),
          breed: first(fields.breed),
          shortNote: first(fields.shortNote) || description,
        };
        break;

      case 'hotel':
        itemData = {
          ...itemData,
          hotelType: first(fields.hotelType),
          starRating: first(fields.starRating),
          roomCount: first(fields.roomCount) ? parseInt(first(fields.roomCount)) : null,
          capacity: first(fields.capacity) ? parseInt(first(fields.capacity)) : null,
          priceRange: first(fields.priceRange),
          checkinTime: first(fields.checkinTime),
          checkoutTime: first(fields.checkoutTime),
          distanceToSea: first(fields.distanceToSea),
          booking: first(fields.booking),
          googleMapsQuery: first(fields.googleMapsQuery),
          facilities: asArray(fields.facilities).filter(Boolean),
          tags: asArray(fields.tags).filter(Boolean),
        };
        break;

      case 'artist':
        itemData = {
          ...itemData,
          youtube: first(fields.youtube),
          musicLink: first(fields.musicLink),
          bannerPhoto: first(fields.bannerPhoto),
          shortText: description,
          categories: asArray(fields.categories).filter(Boolean),
        };
        break;
    }

    // Save to database
    try {
      console.log('📝 Creating item:', { itemType, title: itemData.title });
      const result = await createItem(itemType, itemData);

      console.log(`✅ ${itemType} created in database:`, result.item_number);

      // Send notification email (optional - don't fail if this errors)
      try {
        await sendNotificationEmail(itemType, itemData, result);
        console.log('✅ Notification email sent');
      } catch (emailError) {
        console.warn('⚠️  Email notification failed (non-critical):', emailError.message);
      }

      return res.status(200).json({
        success: true,
        message: "Başvurunuz alındı! İnceleme sonrası yayınlanacaktır.",
        itemNumber: result.item_number,
        submissionId: result.id,
      });

    } catch (dbError) {
      console.error('❌ Database error:', dbError);
      console.error('Error stack:', dbError.stack);
      return res.status(500).json({
        success: false,
        message: "Veritabanı hatası",
        error: dbError.message,
        details: process.env.NODE_ENV === 'development' ? dbError.stack : undefined
      });
    }

  } catch (err) {
    console.error("Item submission error:", err);
    return res.status(500).json({
      success: false,
      message: err?.message || "Sunucu hatası",
    });
  }
}

/**
 * Send notification email to admin
 */
async function sendNotificationEmail(itemType, data, result) {
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || 465);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpHost || !smtpUser || !smtpPass) {
    throw new Error('SMTP configuration missing');
  }

  const mailTo = process.env.MAIL_TO || "info@kasguide.de";
  const mailFrom = process.env.MAIL_FROM || `Kaş Guide <${smtpUser}>`;

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: { user: smtpUser, pass: smtpPass },
    tls: {
      rejectUnauthorized: false,
      servername: smtpHost,
    },
  });

  // Build email content based on type
  const typeEmojis = {
    place: '🏪',
    pet: '🐾',
    hotel: '🏨',
    artist: '🎨'
  };

  const typeNames = {
    place: 'Mekan',
    pet: 'Hayvan',
    hotel: 'Otel',
    artist: 'Sanatçı'
  };

  let mailText = `${typeEmojis[itemType]} Yeni ${typeNames[itemType]} Başvurusu
Item Number: ${result.item_number}
Database ID: ${result.id}

`;

  // Common fields
  mailText += `Başlık: ${data.title || '-'}
`;
  if (data.description) mailText += `Kısa Açıklama: ${data.description}
`;
  if (data.longText) mailText += `Detaylı Açıklama: ${data.longText}
`;
  if (data.phone) mailText += `Telefon: ${data.phone}
`;
  if (data.email) mailText += `Email: ${data.email}
`;
  if (data.website) mailText += `Website: ${data.website}
`;
  if (data.instagram) mailText += `Instagram: ${data.instagram}
`;
  if (data.location) mailText += `Konum: ${data.location}
`;

  // Type-specific fields
  switch (itemType) {
    case 'place':
      if (data.distance) mailText += `Mesafe: ${data.distance}
`;
      if (data.price) mailText += `Fiyat: ${data.price}
`;
      if (data.duration) mailText += `Süre: ${data.duration}
`;
      if (data.categories?.length) mailText += `Kategoriler: ${data.categories.join(', ')}
`;
      break;

    case 'pet':
      mailText += `Hayvan Tipi: ${data.petType}
İlan Tipi: ${data.listingType}
`;
      if (data.breed) mailText += `Cins: ${data.breed}
`;
      if (data.age) mailText += `Yaş: ${data.age}
`;
      break;

    case 'hotel':
      mailText += `Otel Tipi: ${data.hotelType}
`;
      if (data.starRating) mailText += `Yıldız: ${data.starRating}
`;
      if (data.roomCount) mailText += `Oda Sayısı: ${data.roomCount}
`;
      if (data.capacity) mailText += `Kapasite: ${data.capacity}
`;
      if (data.priceRange) mailText += `Fiyat Aralığı: ${data.priceRange}
`;
      break;

    case 'artist':
      if (data.youtube) mailText += `YouTube: ${data.youtube}
`;
      if (data.musicLink) mailText += `Müzik Linki: ${data.musicLink}
`;
      if (data.categories?.length) mailText += `Kategoriler: ${data.categories.join(', ')}
`;
      break;
  }

  if (data.extraNotes) {
    mailText += `
Özel Notlar:
${data.extraNotes}
`;
  }

  mailText += `
📸 ${data.photos?.length || 0} fotoğraf yüklendi

---
Admin panelden onaylayabilirsiniz: ${process.env.VERCEL_URL || 'localhost'}/admin
`;

  await transporter.sendMail({
    from: mailFrom,
    to: mailTo,
    subject: `${typeEmojis[itemType]} Yeni ${typeNames[itemType]} Başvurusu – ${data.title || result.item_number}`,
    text: mailText,
  });
}
