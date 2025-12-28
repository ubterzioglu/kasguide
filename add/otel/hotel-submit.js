import nodemailer from "nodemailer";
import formidable from "formidable";
import fs from "fs";

export const config = {
  api: { bodyParser: false },
};

function first(v) {
  return Array.isArray(v) ? v[0] : v;
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

    /* --------------------
       TEXT FIELDS (Hotel-specific)
    -------------------- */
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

    // Validation
    if (!title || !hotelType || !location || !description || !longText || !phone || !email) {
      return res.status(400).json({
        success: false,
        message: "Zorunlu alanlar eksik (Otel adı, tipi, konum, açıklamalar, telefon, e-posta)",
      });
    }

    /* --------------------
       FACILITIES (Array)
    -------------------- */
    let facilities = fields.facilities || [];
    if (!Array.isArray(facilities)) facilities = [facilities];
    facilities = facilities.filter(Boolean);

    /* --------------------
       PHOTOS
    -------------------- */
    let photos = files.photos || [];
    if (!Array.isArray(photos)) photos = [photos];

    // Filter empty files
    photos = photos.filter(f => f && f.size && f.size > 0);
    
    if (photos.length > 5) {
      return res.status(400).json({
        success: false,
        message: "En fazla 5 fotoğraf yüklenebilir",
      });
    }

    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
    ];

    const attachments = [];

    for (const file of photos) {
      if (!file) continue;

      if (!allowedTypes.includes(file.mimetype)) {
        return res.status(400).json({
          success: false,
          message: "Sadece JPG, PNG veya WEBP fotoğraflar kabul edilir",
        });
      }

      if (file.size > 2 * 1024 * 1024) {
        return res.status(400).json({
          success: false,
          message: `"${file.originalFilename}" 2 MB sınırını aşıyor`,
        });
      }

      attachments.push({
        filename: file.originalFilename,
        content: fs.readFileSync(file.filepath),
        contentType: file.mimetype,
      });
    }

    /* --------------------
       SMTP CONFIG
    -------------------- */
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 465);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpHost || !smtpUser || !smtpPass) {
      return res.status(500).json({
        success: false,
        message: "SMTP configuration missing",
      });
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

    /* --------------------
       EMAIL TEMPLATE
    -------------------- */
    const facilityList = facilities.length > 0 
      ? facilities.map(f => `  • ${f}`).join('\n') 
      : '  -';

    const mailText = `
═══════════════════════════════════════════════
🏨  YENİ OTEL BAŞVURUSU - KAŞ GUIDE HOTELS
═══════════════════════════════════════════════

📋 TEMEL BİLGİLER
────────────────────────────────────────────────
Otel Adı: ${title}
Otel Tipi: ${hotelType || '-'}
Yıldız Sayısı: ${starRating || '-'}
Oda Sayısı: ${roomCount || '-'}
Toplam Kapasite: ${capacity || '-'}

📍 KONUM
────────────────────────────────────────────────
Konum: ${location}
Denize Uzaklık: ${distanceToSea || '-'}
Google Maps: ${googleMapsQuery || '-'}

📝 AÇIKLAMALAR
────────────────────────────────────────────────
Kısa Açıklama:
${description || '-'}

Detaylı Açıklama:
${longText || '-'}

🏊 TESİSLER & HİZMETLER
────────────────────────────────────────────────
${facilityList}

💰 FİYAT & REZERVASYON
────────────────────────────────────────────────
Fiyat Aralığı: ${priceRange || '-'}
Check-in: ${checkinTime || '-'}
Check-out: ${checkoutTime || '-'}
Rezervasyon Linki: ${booking || '-'}
Web Sitesi: ${website || '-'}

📞 İLETİŞİM
────────────────────────────────────────────────
Telefon: ${phone}
E-posta: ${email}
Instagram: ${instagram || '-'}

📌 EK NOTLAR
────────────────────────────────────────────────
${extraNotes && String(extraNotes).trim() ? extraNotes : '-'}

════════════════════════════════════════════════
📸 FOTOĞRAFLAR: ${photos.length} adet eklendi
════════════════════════════════════════════════
`;

    await transporter.sendMail({
      from: mailFrom,
      to: mailTo,
      subject: `🏨 Yeni Otel Başvurusu — ${title}`,
      text: mailText,
      attachments,
    });

    return res.status(200).json({ success: true });

  } catch (err) {
    console.error("HOTEL SUBMISSION ERROR:", err);
    return res.status(500).json({
      success: false,
      message: err?.message || "Sunucu hatası",
    });
  }
}
