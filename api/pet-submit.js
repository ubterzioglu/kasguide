import nodemailer from "nodemailer";
import formidable from "formidable";
import fs from "fs";

export const config = {
  api: { bodyParser: false },
};

function first(v) {
  return Array.isArray(v) ? v[0] : v;
}

function normalizePetType(v) {
  const raw = String(v || "").trim().toLowerCase();
  if (raw === "cat" || raw === "kedi") return "Kedi";
  if (raw === "dog" || raw === "köpek" || raw === "kopek") return "Köpek";
  return "";
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  try {
    const form = formidable({
      multiples: true,
      maxFileSize: 2 * 1024 * 1024, // 2MB (tek dosya)
      allowEmptyFiles: true,
      minFileSize: 0,
    });

    const [fields, files] = await form.parse(req);

    /* --------------------
       TEXT FIELDS
    -------------------- */
    const petTypeLabel = normalizePetType(first(fields.petType));
    const age = (first(fields.age) || "").toString().trim();
    const breed = (first(fields.breed) || "").toString().trim();
    const shortNote = (first(fields.shortNote) || "").toString().trim();
    const extraNotes = (first(fields.extraNotes) || "").toString().trim();
    const viewport = (first(fields.viewport) || "").toString().trim();

    if (!petTypeLabel) {
      return res.status(400).json({
        success: false,
        message: "Tür seçimi eksik (Kedi/Köpek)",
      });
    }

    if (!shortNote) {
      return res.status(400).json({
        success: false,
        message: "Kısa not zorunludur",
      });
    }

    if (shortNote.length > 500) {
      return res.status(400).json({
        success: false,
        message: "Kısa not 500 karakteri geçemez",
      });
    }

    /* --------------------
       FILES (PHOTOS) - min 1, max 5
    -------------------- */
    let photos = files.photos || [];
    if (!Array.isArray(photos)) photos = [photos];

    // Boş dosyaları (0 byte) filtrele
    photos = photos.filter((f) => f && f.size && f.size > 0);

    if (photos.length < 1) {
      return res.status(400).json({
        success: false,
        message: "En az 1 fotoğraf yüklemelisiniz",
      });
    }

    if (photos.length > 5) {
      return res.status(400).json({
        success: false,
        message: "En fazla 5 fotoğraf yüklenebilir",
      });
    }

    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

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
       SMTP
    -------------------- */
    const smtpHost = process.env.SMTP_HOST || process.env.MAIL_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || process.env.MAIL_PORT || 465);
    const smtpUser = process.env.SMTP_USER || process.env.MAIL_USER;
    const smtpPass = process.env.SMTP_PASS || process.env.MAIL_PASS;

    if (!smtpHost || !smtpUser || !smtpPass) {
      return res.status(500).json({
        success: false,
        message: "SMTP env eksik (SMTP_HOST/SMTP_USER/SMTP_PASS)",
      });
    }

    // Güvenlik: mail alıcısını client'tan almayalım
    const mailTo = process.env.PET_MAIL_TO || "pet@kasguide.de";
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

    const titleParts = [petTypeLabel];
    if (breed) titleParts.push(breed);
    if (age) titleParts.push(`${age} yaş`);
    const subject = `Yeni Pet Başvurusu – ${titleParts.join(" / ")}`;

    const mailText = `Yeni Pet Başvurusu

Tür: ${petTypeLabel}
Yaş: ${age || "-"}
Cins: ${breed || "-"}

Kısa Not:
${shortNote}

Bize İletmek İstediğiniz Notlar:
${extraNotes || "-"}

Meta:
- viewport: ${viewport || "-"}
`;

    await transporter.sendMail({
      from: mailFrom,
      to: mailTo,
      subject,
      text: mailText,
      attachments,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("PET MAIL ERROR:", err);
    return res.status(500).json({
      success: false,
      message: err?.message || "Sunucu hatası",
    });
  }
}
