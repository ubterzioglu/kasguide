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
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  try {
    const form = formidable({
      multiples: false,
      maxFileSize: 2 * 1024 * 1024, // 2MB
      allowEmptyFiles: true,
      minFileSize: 0,
    });

    const [fields, files] = await form.parse(req);

    // ---- SaaMTP ENV (same convention as venue-submit.js) ----
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

    // ---- Text fields ----
    const artistName = first(fields.artistName) || "-";
    const categories = asArray(fields.artistCategory).filter(Boolean);
    const shortText = first(fields.shortText) || "-";
    const longText = first(fields.longText) || "-";

    const instagram = first(fields.instagram) || "-";
    const youtube = first(fields.youtube) || "-";
    const musicLink = first(fields.musicLink) || "-";
    const website = first(fields.website) || "-";

    const phone = first(fields.phone) || "-";
    const email = first(fields.email) || "-";
    const notes = first(fields.notes) || "-";
    const viewport = first(fields.viewport) || "-";

    // ---- Attachments (optional) ----
    const attachments = [];
    const pushFile = (file, fallbackName) => {
      if (!file) return;
      const f = Array.isArray(file) ? file[0] : file;
      if (!f?.filepath) return;
      const mime = (f.mimetype || "").toLowerCase();
      if (mime && !mime.startsWith("image/")) return;

      try {
        attachments.push({
          filename: f.originalFilename || fallbackName,
          content: fs.readFileSync(f.filepath),
        });
      } catch (err) {
        // ignore attachment read errors
      }
    };

    pushFile(files.profilePhoto, "profile-photo.jpg");
    pushFile(files.bannerPhoto, "banner-photo.jpg");

    // ---- Mail body ----
    const subject = `Yeni Sanatçı Profili - ${artistName}`;

    const mailText =
`Yeni Sanatçı Başvurusu

İsim: ${artistName}
Kategori: ${categories.length ? categories.join(", ") : "-"}

Kısa Tanıtım:
${shortText}

Detaylı Tanıtım:
${longText}

Linkler:
- Instagram: ${instagram}
- YouTube: ${youtube}
- Müzik Linki: ${musicLink}
- Website: ${website}

İletişim:
- Telefon: ${phone}
- E-posta: ${email}

Notlar:
${notes}

Meta:
- viewport: ${viewport}
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
    console.error("ARTISTS MAIL ERROR:", err);
    return res.status(500).json({
      success: false,
      message: err?.message || "Sunucu hatası",
    });
  }
}
