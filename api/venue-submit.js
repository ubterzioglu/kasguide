import nodemailer from "nodemailer";
import formidable from "formidable";

export const config = {
  api: { bodyParser: false },
};

function first(v) {
  // formidable fields bazen array döndürüyor
  return Array.isArray(v) ? v[0] : v;
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

  try {
    const form = formidable({ multiples: true });
    const [fields] = await form.parse(req);

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

    if (!title || !longText || !phone) {
      return res.status(400).json({ success: false, message: "Zorunlu alanlar eksik" });
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 465);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpHost || !smtpUser || !smtpPass) {
      return res.status(500).json({
        success: false,
        message: "SMTP env eksik (SMTP_HOST/SMTP_USER/SMTP_PASS)",
      });
    }

    const mailTo = process.env.MAIL_TO || "mekan@kasguide.de";
    const mailFrom = process.env.MAIL_FROM || `Kaş Guide <${smtpUser}>`;

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // 465 = SSL
      auth: { user: smtpUser, pass: smtpPass },

      // Zoho + serverless ortamlar için sık gerekli
      tls: {
        rejectUnauthorized: false,
        servername: smtpHost,
      },
    });

    const mailText = `Yeni Mekan Başvurusu

Mekan Adı: ${title}
Konum: ${location || "-"}
Mesafe: ${distance || "-"}

Kısa Açıklama:
${description || "-"}

Detaylı Açıklama:
${longText}

Telefon: ${phone}
Instagram: ${instagram || "-"}
Website: ${website || "-"}
Rezervasyon: ${booking || "-"}

Ek Bilgiler:
Fiyat: ${price || "-"}
Süre: ${duration || "-"}
Erişim: ${access || "-"}
Google Maps: ${googleMapsQuery || "-"}
`;

    await transporter.sendMail({
      from: mailFrom,
      to: mailTo,
      subject: `Yeni Mekan Başvurusu – ${title}`,
      text: mailText,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("MAIL ERROR:", err);
    return res.status(500).json({
      success: false,
      message: err?.message || "Sunucu hatası",
    });
  }
}
