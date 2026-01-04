/**
 * Pet Submission API - Database Version
 * Saves submissions to database for admin approval
 * Optionally sends notification email
 */

import formidable from "formidable";
import nodemailer from "nodemailer";
import { createPet } from '../lib/db-pets.js';
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
    const listingType = first(fields.listingType);
    const petName = first(fields.petName);
    const petType = first(fields.petType);
    const age = first(fields.age);
    const breed = first(fields.breed);
    const shortNote = first(fields.shortNote);
    const phone = first(fields.phone);
    const notes = first(fields.notes);

    // Validation
    if (!listingType || !petType || !shortNote || !phone) {
      return res.status(400).json({
        success: false,
        message: "Zorunlu alanlar eksik (listingType, petType, shortNote, phone)",
      });
    }

    // Handle photos
    let photos = asArray(files.photos).filter(f => f && f.size > 0);

    if (photos.length < 1 || photos.length > 5) {
      return res.status(400).json({
        success: false,
        message: "1-5 arası fotoğraf yüklemelisiniz",
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
        photoUrls = await upload(photos, 'pets');
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
      const petData = {
        listingType,
        petName,
        petType,
        age,
        breed,
        shortNote,
        notes,
        phone,
        photos: photoUrls,
      };

      const result = await createPet(petData);

      console.log('✅ Pet created in database:', result.id);

      // Send notification email (optional - don't fail if this errors)
      try {
        await sendNotificationEmail({
          listingType,
          petName,
          petType,
          age,
          breed,
          shortNote,
          notes,
          phone,
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
    console.error("Pet submission error:", err);
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

  const mailTo = process.env.PETS_MAIL_TO || process.env.MAIL_TO || "pet@kasguide.de";
  const mailFrom = process.env.MAIL_FROM || `Kaş Guide Pet <${smtpUser}>`;

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

  const listingTypeIcon = data.listingType === "Kayıp" ? "🔍" : "🏠";

  const mailText = `${listingTypeIcon} Yeni ${data.listingType} Pet Başvurusu (ID: ${data.submissionId})

📋 İlan Tipi: ${data.listingType}
🐾 Pet Adı: ${data.petName || "-"}
🔖 Tür: ${data.petType}
📅 Yaş: ${data.age || "-"}
🧬 Irk/Cins: ${data.breed || "-"}

📝 Kısa Not:
${data.shortNote}

💬 Ek Notlar:
${data.notes || "-"}

📞 İletişim: ${data.phone}

📸 ${data.photoCount} fotoğraf yüklendi

---
Admin panelden onaylayabilirsiniz: ${process.env.VERCEL_URL || 'localhost'}/admin
`;

  await transporter.sendMail({
    from: mailFrom,
    to: mailTo,
    subject: `${listingTypeIcon} ${data.listingType} Pet — ${data.petName || data.petType}`,
    text: mailText,
  });
}
