import nodemailer from "nodemailer";
import formidable from "formidable";
import fs from "fs";

export const config = { api: { bodyParser: false } };

function asArray(v) {
  if (!v) return [];
  return Array.isArray(v) ? v : [v];
}
function first(v) {
  return Array.isArray(v) ? v[0] : v;
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

  let filesToCleanup = [];

  try {
    const form = formidable({
      multiples: true,
      maxFileSize: 2 * 1024 * 1024, // 2MB per file
      allowEmptyFiles: false,
      minFileSize: 1,
    });

    const [fields, files] = await form.parse(req);

    // --- Fieaalds (from add-pet.html) ---
    const listingType = (first(fields.listingType) || "").toString().trim();
    const petName = (first(fields.petName) || "").toString().trim();
    const petType = (first(fields.petType) || "").toString().trim();
    const age = (first(fields.age) || "").toString().trim();
    const breed = (first(fields.breed) || "").toString().trim();
    const shortNote = (first(fields.shortNote) || "").toString().trim();
    const phone = (first(fields.phone) || "").toString().trim();
    const notes = (first(fields.notes) || "").toString().trim();

    // --- Photos ---
    const photos = asArray(files.photos).filter(
      (f) => f && f.filepath && typeof f.size === "number" && f.size > 0
    );

    // Basic validation (matches UI expectations)
    if (!listingType || !petName || !petType || !shortNote || !phone) {
      return res.status(400).json({
        success: false,
        message: "Zorunlu alanlar eksik (listingType, petName, petType, shortNote, phone).",
      });
    }
    if (photos.length < 1 || photos.length > 5) {
      return res.status(400).json({
        success: false,
        message: "Fotoğraf sayısı 1 ile 5 arasında olmalı.",
      });
    }

    filesToCleanup = photos.map((p) => p.filepath);

    // ---- SMTP ENV (same pattern as working endpoint) ----
    const smtpHost = process.env.SMTP_HOST || process.env.MAIL_HOST;
    const smtpPortRaw = process.env.SMTP_PORT || process.env.MAIL_PORT;
    const smtpUser = process.env.SMTP_USER || process.env.MAIL_USER;
    const smtpPass = process.env.SMTP_PASS || process.env.MAIL_PASS;

    const mailTo =
      process.env.PETS_MAIL_TO ||
      process.env.MAIL_TO ||
      "pet@kasguide.de";

    if (!smtpHost || !smtpPortRaw || !smtpUser || !smtpPass) {
      return res.status(500).json({
        success: false,
        message:
          "Mail ayarları eksik. SMTP_HOST/PORT/USER/PASS (veya MAIL_HOST/PORT/USER/PASS) tanımlı olmalı.",
      });
    }

    const smtpPort = Number(smtpPortRaw);
    if (!Number.isFinite(smtpPort) || smtpPort <= 0) {
      return res.status(500).json({
        success: false,
        message: "Mail port değeri geçersiz (SMTP_PORT/MAIL_PORT).",
      });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
    });

    // Enhanced email content with listing type
    const listingTypeIcon = listingType === "Kayıp" ? "🔍" : "🏠";
    const mailText =
      [
        `${listingTypeIcon} Yeni ${listingType} Pet Başvurusu`,
        "=".repeat(40),
        "",
        `📋 İlan Tipi: ${listingType}`,
        `🐾 Pet Adı: ${petName}`,
        `🔖 Tür: ${petType}`,
        age ? `📅 Yaş: ${age}` : null,
        breed ? `🧬 Irk/Cins: ${breed}` : null,
        "",
        `📝 Kısa Not:`,
        shortNote,
        "",
        `📞 İletişim: ${phone}`,
        "",
        notes ? `💬 Ek Notlar:\n${notes}` : null,
        "",
        "─".repeat(40),
        `📸 ${photos.length} fotoğraf eklendi`,
      ]
        .filter(Boolean)
        .join("\n") + "\n";

    const attachments = photos.map((p, idx) => ({
      filename:
        p.originalFilename ||
        `pet-photo-${idx + 1}${p.mimetype?.includes("png") ? ".png" : ".jpg"}`,
      path: p.filepath,
    }));

    await transporter.sendMail({
      from: `Kaş Guide Pet <${smtpUser}>`,
      to: mailTo,
      subject: `${listingTypeIcon} ${listingType} — ${petName} (${petType})`,
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
  } finally {
    // cleanup temp uploaded files
    for (const fp of filesToCleanup) {
      try {
        fs.unlinkSync(fp);
      } catch (_) {}
    }
  }
}
