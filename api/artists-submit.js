/**
 * Artist Submission API - Database Version
 * Saves submissions to database for admin approval
 * Optionally sends notification email
 */

import formidable from "formidable";
import nodemailer from "nodemailer";
import { createArtist } from '../lib/db-artists.js';
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
      allowEmptyFiles: true,
      minFileSize: 0,
    });

    const [fields, files] = await form.parse(req);

    // Parse fields
    const artistName = first(fields.artistName);
    const categories = asArray(fields.artistCategory).filter(Boolean);
    const shortText = first(fields.shortText);
    const longText = first(fields.longText);
    const instagram = first(fields.instagram);
    const youtube = first(fields.youtube);
    const musicLink = first(fields.musicLink);
    const website = first(fields.website);
    const phone = first(fields.phone);
    const email = first(fields.email);
    const notes = first(fields.notes);
    const viewport = first(fields.viewport);

    // Validation
    if (!artistName || !longText) {
      return res.status(400).json({
        success: false,
        message: "Zorunlu alanlar eksik (artistName, longText)",
      });
    }

    // Handle photos
    let profilePhotoUrl = null;
    let bannerPhotoUrl = null;

    const profilePhoto = files.profilePhoto ? (Array.isArray(files.profilePhoto) ? files.profilePhoto[0] : files.profilePhoto) : null;
    const bannerPhoto = files.bannerPhoto ? (Array.isArray(files.bannerPhoto) ? files.bannerPhoto[0] : files.bannerPhoto) : null;

    // Validate file types
    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

    if (profilePhoto && profilePhoto.size > 0) {
      if (!allowedTypes.includes(profilePhoto.mimetype)) {
        return res.status(400).json({
          success: false,
          message: "Profil fotoğrafı sadece JPG, PNG veya WEBP olmalı",
        });
      }
    }

    if (bannerPhoto && bannerPhoto.size > 0) {
      if (!allowedTypes.includes(bannerPhoto.mimetype)) {
        return res.status(400).json({
          success: false,
          message: "Banner fotoğrafı sadece JPG, PNG veya WEBP olmalı",
        });
      }
    }

    // Upload photos
    try {
      if (profilePhoto && profilePhoto.size > 0) {
        const urls = await upload([profilePhoto], 'artists');
        profilePhotoUrl = urls[0];
        console.log('✅ Profile photo uploaded');
      }

      if (bannerPhoto && bannerPhoto.size > 0) {
        const urls = await upload([bannerPhoto], 'artists');
        bannerPhotoUrl = urls[0];
        console.log('✅ Banner photo uploaded');
      }
    } catch (uploadError) {
      console.error('Photo upload error:', uploadError);
      return res.status(500).json({
        success: false,
        message: "Fotoğraf yükleme hatası",
      });
    }

    // Save to database
    try {
      const artistData = {
        artistName,
        categories,
        shortText,
        longText,
        instagram,
        youtube,
        musicLink,
        website,
        phone,
        email,
        notes,
        viewport,
        profilePhoto: profilePhotoUrl,
        bannerPhoto: bannerPhotoUrl,
      };

      const result = await createArtist(artistData);

      console.log('✅ Artist created in database:', result.slug);

      // Send notification email (optional - don't fail if this errors)
      try {
        await sendNotificationEmail({
          ...artistData,
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
    console.error("Artist submission error:", err);
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

  const mailTo = process.env.MAIL_TO || process.env.ARTISTS_MAIL_TO || "sanat@kasguide.de";
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

  const mailText = `🎨 Yeni Sanatçı Başvurusu (ID: ${data.submissionId})

İsim: ${data.artistName}
Kategori: ${data.categories && data.categories.length ? data.categories.join(", ") : "-"}

Kısa Tanıtım:
${data.shortText || "-"}

Detaylı Tanıtım:
${data.longText}

Linkler:
- Instagram: ${data.instagram || "-"}
- YouTube: ${data.youtube || "-"}
- Müzik Linki: ${data.musicLink || "-"}
- Website: ${data.website || "-"}

İletişim:
- Telefon: ${data.phone || "-"}
- E-posta: ${data.email || "-"}

Notlar:
${data.notes || "-"}

Fotoğraflar:
- Profil: ${data.profilePhoto ? "✅" : "❌"}
- Banner: ${data.bannerPhoto ? "✅" : "❌"}

Meta:
- viewport: ${data.viewport || "-"}

---
Admin panelden onaylayabilirsiniz: ${process.env.VERCEL_URL || 'localhost'}/admin
`;

  await transporter.sendMail({
    from: mailFrom,
    to: mailTo,
    subject: `🎨 Yeni Sanatçı Başvurusu — ${data.artistName}`,
    text: mailText,
  });
}
