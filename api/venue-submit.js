import nodemailer from "nodemailer";
import formidable from "formidable";
import fs from "fs";

export const config = {
  api: { bodyParser: false },
};

function toArray(val) {
  if (val == null) return [];
  return Array.isArray(val) ? val : [val];
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).send("Method Not Allowed");
  }

  const form = formidable({
    multiples: true,
    allowEmptyFiles: true,
    minFileSize: 0,
    maxFileSize: 10 * 1024 * 1024, // 10MB
    keepExtensions: true,
  });

try {
    const { fields, files } = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) return reject(err);
        resolve({ fields, files });
      });
    });

    const title = (fields.title || "").toString().trim();
    const longText = (fields.longText || "").toString().trim();
    const phone = (fields.phone || "").toString().trim();
    const categories = toArray(fields.category).map((c) => c.toString());

    if (!title || !longText || !phone) {
      return res.status(400).send("Eksik alan: Mekan Adı, Detaylı Açıklama ve Telefon zorunludur.");
    }
    if (!categories.length) {
      return res.status(400).send("Eksik alan: En az 1 kategori seçilmelidir.");
    }

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      MAIL_TO = "mekan@kasguide.de",
      MAIL_FROM,
    } = process.env;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
      return res.status(500).send("Server mail ayarları eksik (SMTP env).");
    }

    const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT), // 465
  secure: true, // ZOHO için şart son degişiklik
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false
  }
});


    const safe = (v) => (v == null ? "" : v.toString().trim());

    const emailSubject = `Kaş Guide - Yeni Mekan Başvurusu: ${safe(fields.title)}`;

    const lines = [
      ["Mekan Adı", safe(fields.title)],
      ["Konum", safe(fields.location)],
      ["Mesafe", safe(fields.distance)],
      ["Kısa Açıklama", safe(fields.description)],
      ["Detaylı Açıklama", safe(fields.longText)],
      ["Kategoriler", categories.join(", ")],
      ["Ortalama Fiyat", safe(fields.price)],
      ["Ortalama Süre", safe(fields.duration)],
      ["Erişim", safe(fields.access)],
      ["Google Maps Arama Terimi", safe(fields.googleMapsQuery)],
      ["Telefon", safe(fields.phone)],
      ["Instagram", safe(fields.instagram)],
      ["Website", safe(fields.website)],
      ["Rezervasyon", safe(fields.booking)],
    ];

    const html = `
      <div style="font-family:Inter,Arial,sans-serif;line-height:1.5">
        <h2>Kaş Guide - Yeni Mekan Başvurusu</h2>
        <table cellpadding="8" cellspacing="0" border="1" style="border-collapse:collapse;border:1px solid #ddd">
          ${lines
            .map(
              ([k, v]) =>
                `<tr><td style="font-weight:700;background:#f7f7f7">${k}</td><td>${(v || "").replaceAll("\n", "<br/>")}</td></tr>`
            )
            .join("")}
        </table>
      </div>
    `;

    // Attach photos if provided (ignore empty/0-byte files)
    const photoFiles = [];
    const candidateFiles = [
      ...toArray(files.photos),
      ...toArray(files.photoInput),
      ...toArray(files.photo),
      ...toArray(files.files),
      ...toArray(files.file),
    ].filter(Boolean);

    for (const f of candidateFiles) {
      const size = Number(f.size || 0);
      if (!size) continue; // skip empty uploads
      const filepath = f.filepath || f.path;
      const filename = f.originalFilename || f.newFilename || "photo";
      if (!filepath) continue;

      photoFiles.push({
        filename,
        content: fs.readFileSync(filepath),
        contentType: f.mimetype,
      });
    }

    await transporter.sendMail({
      from: MAIL_FROM || SMTP_USER,
      to: MAIL_TO,
      subject: emailSubject,
      html,
      attachments: photoFiles.slice(0, 6), // avoid huge emuieauieauieauieaails
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Sunucu hatası.");
  }
}
