/**
 * Venue Submission API - Database Version
 * Saves submissions to database for admin approval
 * Optionally sends notification email
 */

import formidable from "formidable";
import nodemailer from "nodemailer";
import { createPlace } from '../lib/db-places.js';
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
    const location = first(fields.location);
    const distance = first(fields.distance);
    const description = first(fields.description);
    const longText = first(fields.longText);
    const price = first(fields.price);
    const duration = first(fields.duration);
    const access = first(fields.access);
    const googleMapsQuery = first(fields.googleMapsQuery);
    const phone = first(fields.phone);
    const instagram = first(fields.instagram);
    const website = first(fields.website);
    const booking = first(fields.booking);
    const extraNotes = first(fields.extraNotes);
    const categories = asArray(fields.categories);

    // Validation
    if (!title || !longText || !phone) {
      return res.status(400).json({
        success: false,
        message: "Zorunlu alanlar eksik (title, longText, phone)",
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
        photoUrls = await upload(photos, 'places');
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
      const placeData = {
        title,
        description,
        longText,
        location,
        distance,
        phone,
        website,
        instagram,
        booking,
        googleMapsQuery,
        duration,
        access,
        price,
        extraNotes,
        photos: photoUrls,
        categories: categories.filter(Boolean),
      };

      const result = await createPlace(placeData);

      console.log('✅ Place created in database:', result.slug);

      // Send notification email (optional - don't fail if this errors)
      try {
        await sendNotificationEmail({
          title,
          location,
          distance,
          description,
          longText,
          phone,
          instagram,
          website,
          booking,
          price,
          duration,
          access,
          googleMapsQuery,
          extraNotes,
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
    console.error("Venue submission error:", err);
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

  const mailTo = process.env.MAIL_TO || "mekan@kasguide.de";
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

  const mailText = `🆕 Yeni Mekan Başvurusu (ID: ${data.submissionId})

Mekan Adı: ${data.title}
Konum: ${data.location || "-"}
Mesafe: ${data.distance || "-"}

Kısa Açıklama:
${data.description || "-"}

Detaylı Açıklama:
${data.longText}

Telefon: ${data.phone}
Instagram: ${data.instagram || "-"}
Website: ${data.website || "-"}
Rezervasyon: ${data.booking || "-"}

Ek Bilgiler:
Fiyat: ${data.price || "-"}
Süre: ${data.duration || "-"}
Erişim: ${data.access || "-"}
Google Maps: ${data.googleMapsQuery || "-"}

Özel Notlar:
${data.extraNotes ? data.extraNotes : "-"}

📸 ${data.photoCount} fotoğraf yüklendi

---
Admin panelden onaylayabilirsiniz: ${process.env.VERCEL_URL || 'localhost'}/admin
`;

  await transporter.sendMail({
    from: mailFrom,
    to: mailTo,
    subject: `🆕 Yeni Mekan Başvurusu – ${data.title}`,
    text: mailText,
  });
}
