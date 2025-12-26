import nodemailer from "nodemailer";
import formidable from "formidable";
import fs from "fs";

export const config = { api: { bodyParser: false } };

function first(v) {
  return Array.isArray(v) ? v[0] : v;
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

  try {
    const form = formidable({
      multiples: false,
      maxFileSize: 2 * 1024 * 1024, // 2MB per file
      allowEmptyFiles: true,
      minFileSize: 0,
    });

    const [fields, files] = await form.parse(req);

    const artistName = (first(fields.artistName) || "").toString().trim();
    const shortText = (first(fields.shortText) || "").toString().trim();
    const longText = (first(fields.longText) || "").toString().trim();

    if (!artistName || !shortText || !longText) {
      return res.status(400).send("Eksik alan: İsim + Kısa Tanıtım + Detaylı Tanıtım zorunludur.");
    }

    const profilePhoto = files.profilePhoto ? first(files.profilePhoto) : null;
    const bannerPhoto = files.bannerPhoto ? first(files.bannerPhoto) : null;

    const attachments = [];
    const pushFile = (file, label) => {
      if (!file) return;
      // formidable v3 file has: filepath, originalFilename, mimetype
      const mime = (file.mimetype || "").toLowerCase();
      if (!mime.startsWith("image/")) return;

      try {
        attachments.push({
          filename: file.originalFilename || label,
          content: fs.readFileSync(file.filepath),
        });
      } catch {}
    };

    pushFile(profilePhoto, "profile-photo.jpg");
    pushFile(bannerPhoto, "banner-photo.jpg");

    // Transporter (ENV ile)
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT || 587),
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const to = process.env.MAIL_TO || "sanat@kasguide.de";
    const subject = `Yeni Sanatçı Profili - ${artistName}`;

    // Basit, okunur mail body (ileride HTML mail yapılabilir)
    const lines = [];
    const add = (k, v) => lines.push(`${k}: ${v || "-"}`);

    add("İsim", artistName);
    add("Kategori", first(fields.artistCategory));
    add("Kısa Tanıtım", shortText);
    lines.push("");
    lines.push("Detaylı Tanıtım:");
    lines.push(longText);
    lines.push("");
    add("Instagram", first(fields.instagram));
    add("YouTube", first(fields.youtube));
    add("Müzik Linki", first(fields.musicLink));
    add("Web", first(fields.website));
    add("Telefon", first(fields.phone));
    add("E-posta", first(fields.email));

    await transporter.sendMail({
      from: process.env.MAIL_FROM || process.env.MAIL_USER,
      to,
      subject,
      text: lines.join("\n"),
      attachments,
    });

    return res.status(200).send("Başvurunuz alındı. İnceledikten sonra yayınlayacağız.");
  } catch (e) {
    return res.status(500).send("Server error");
  }
}
