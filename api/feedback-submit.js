import nodemailer from "nodemailer";

function pickEnv(name, fallback = "") {
  return process.env[name] ?? fallback;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    const { title, message, page } = req.body || {};

    if (!title || !message) {
      return res.status(400).json({ success: false, message: "Missing fields" });
    }

    // ENV compatibility with existing submit endpoints
    const smtpHost = pickEnv("SMTP_HOST", pickEnv("MAIL_HOST", ""));
    const smtpPort = Number(pickEnv("SMTP_PORT", pickEnv("MAIL_PORT", "587")));
    const smtpUser = pickEnv("SMTP_USER", pickEnv("MAIL_USER", ""));
    const smtpPass = pickEnv("SMTP_PASS", pickEnv("MAIL_PASS", ""));

    const mailFrom = pickEnv("MAIL_FROM", smtpUser || "no-reply@kasguide.de");
    const mailTo =
      pickEnv("FEEDBACK_MAIL_TO", "") ||
      pickEnv("MAIL_TO", "") ||
      pickEnv("ARTISTS_MAIL_TO", "");

    if (!smtpHost || !smtpUser || !smtpPass || !mailTo) {
      return res.status(500).json({
        success: false,
        message: "Mail env eksik (SMTP/Mail ayarları).",
      });
    }

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

    const subject = `KAŞ GUIDE • Feedback: ${String(title).slice(0, 80)}`;

    const text =
`Yeni geri bildirim alındı.

Başlık:
${title}

Mesaj:
${message}

Meta:
- page: ${page || "-"}
- ua: ${req.headers["user-agent"] || "-"}
- ip: ${(req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "-")}
- time: ${new Date().toISOString()}
`;

    await transporter.sendMail({
      from: mailFrom,
      to: mailTo,
      subject,
      text,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("FEEDBACK MAIL ERROR:", err);
    return res.status(500).json({
      success: false,
      message: err?.message || "Sunucu hatası",
    });
  }
}
