/**
 * Hotel Submission API - Database Version
 * Saves submissions to database for admin approval
 * Optionally sends notification email
 */

import formidable from "formidable";
import nodemailer from "nodemailer";
import { createHotel } from '../lib/db-hotels.js';
import { upload } from '../lib/upload.js';

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
      allowEmptyFiles: false,
      minFileSize: 1,
    });

    const [fields, files] = await form.parse(req);

    // Parse fields
    const title = first(fields.title);
    const hotelType = first(fields.hotelType);
    const starRating = first(fields.starRating);
    const roomCount = first(fields.roomCount);
    const capacity = first(fields.capacity);
    const location = first(fields.location);
    const distanceToSea = first(fields.distanceToSea);
    const description = first(fields.description);
    const longText = first(fields.longText);
    const priceRange = first(fields.priceRange);
    const checkinTime = first(fields.checkinTime);
    const checkoutTime = first(fields.checkoutTime);
    const booking = first(fields.booking);
    const website = first(fields.website);
    const phone = first(fields.phone);
    const email = first(fields.email);
    const instagram = first(fields.instagram);
    const googleMapsQuery = first(fields.googleMapsQuery);
    const extraNotes = first(fields.extraNotes);
    const facilities = asArray(fields.facilities).filter(Boolean);

    // Validation
    if (!title || !hotelType || !location || !description || !longText || !phone || !email) {
      return res.status(400).json({
        success: false,
        message: "Zorunlu alanlar eksik (title, hotelType, location, description, longText, phone, email)",
      });
    }

    // Handle photos
    let photos = asArray(files.photos).filter(f => f && f.size > 0);

    if (photos.length > 5) {
      return res.status(400).json({
        success: false,
        message: "En fazla 5 fotoğraf yüklenebilir",
      });
    }

    // Validate file types
    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
    for (const file of photos) {
      if (!allowedTypes.includes(file.mimetype)) {
        return res.status(400).json({
          success: false,
          message: "Sadece JPG, PNG veya WEBP fotoğraflar kabul edilir",
        });
      }
    }

    // Upload photos
    let photoUrls = [];
    if (photos.length > 0) {
      try {
        photoUrls = await upload(photos, 'hotels');
        console.log('✅ Photos uploaded:', photoUrls.length);
      } catch (uploadError) {
        console.error('Photo upload error:', uploadError);
        return res.status(500).json({
          success: false,
          message: "Fotoğraf yükleme hatası",
        });
      }
    }

    // Save to database
    try {
      const hotelData = {
        title,
        hotelType,
        starRating,
        roomCount,
        capacity,
        location,
        distanceToSea,
        description,
        longText,
        priceRange,
        checkinTime,
        checkoutTime,
        booking,
        website,
        phone,
        email,
        instagram,
        googleMapsQuery,
        extraNotes,
        facilities,
        photos: photoUrls,
      };

      const result = await createHotel(hotelData);

      console.log('✅ Hotel created in database:', result.slug);

      // Send notification email (optional - don't fail if this errors)
      try {
        await sendNotificationEmail({
          ...hotelData,
          photoCount: photoUrls.length,
          submissionId: result.id,
        });
        console.log('✅ Notification email sent');
      } catch (emailError) {
        console.warn('⚠️  Email notification failed (non-critical):', emailError.message);
      }

      return res.status(200).json({
        success: true,
        message: "Başvurunuz alındı! İnceleme sonrası yayınlanacaktır.",
        submissionId: result.id,
      });

    } catch (dbError) {
      console.error('Database error:', dbError);
      return res.status(500).json({
        success: false,
        message: "Veritabanı hatası",
        error: dbError.message,
      });
    }

  } catch (err) {
    console.error("Hotel submission error:", err);
    return res.status(500).json({
      success: false,
      message: err?.message || "Sunucu hatası",
    });
  }
}

/**
 * Send notification email to admin
 */
async function sendNotificationEmail(data) {
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || 465);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpHost || !smtpUser || !smtpPass) {
    throw new Error('SMTP configuration missing');
  }

  const mailTo = process.env.HOTEL_MAIL_TO || process.env.MAIL_TO || "hotels@kasguide.de";
  const mailFrom = process.env.MAIL_FROM || `Kaş Guide Hotels <${smtpUser}>`;

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

  const facilityList = data.facilities && data.facilities.length > 0
    ? data.facilities.map(f => `  • ${f}`).join('\n')
    : '  -';

  const mailText = `🏨 Yeni Otel Başvurusu (ID: ${data.submissionId})

═══════════════════════════════════════
📋 TEMEL BİLGİLER
───────────────────────────────────────
Otel Adı: ${data.title}
Otel Tipi: ${data.hotelType}
Yıldız Sayısı: ${data.starRating || '-'}
Oda Sayısı: ${data.roomCount || '-'}
Toplam Kapasite: ${data.capacity || '-'}

📍 KONUM
───────────────────────────────────────
Konum: ${data.location}
Denize Uzaklık: ${data.distanceToSea || '-'}
Google Maps: ${data.googleMapsQuery || '-'}

📝 AÇIKLAMALAR
───────────────────────────────────────
Kısa Açıklama:
${data.description}

Detaylı Açıklama:
${data.longText}

🏊 TESİSLER & HİZMETLER
───────────────────────────────────────
${facilityList}

💰 FİYAT & REZERVASYON
───────────────────────────────────────
Fiyat Aralığı: ${data.priceRange || '-'}
Check-in: ${data.checkinTime || '-'}
Check-out: ${data.checkoutTime || '-'}
Rezervasyon: ${data.booking || '-'}
Website: ${data.website || '-'}

📞 İLETİŞİM
───────────────────────────────────────
Telefon: ${data.phone}
E-posta: ${data.email}
Instagram: ${data.instagram || '-'}

📌 EK NOTLAR
───────────────────────────────────────
${data.extraNotes || '-'}

📸 ${data.photoCount} fotoğraf yüklendi

---
Admin panelden onaylayabilirsiniz: ${process.env.VERCEL_URL || 'localhost'}/admin
`;

  await transporter.sendMail({
    from: mailFrom,
    to: mailTo,
    subject: `🏨 Yeni Otel Başvurusu — ${data.title}`,
    text: mailText,
  });
}
