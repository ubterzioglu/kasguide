import nodemailer from "nodemailer";
import formidable from "formidable";
import fs from "fs";

export const config = { api: { bodyParser: false } };

function first(v){ return Array.isArray(v) ? v[0] : v; }

export default async function handler(req, res){
  if(req.method !== "POST") return res.status(405).send("Method Not Allowed");

  try{
    const form = formidable({
      multiples: true,
      maxFileSize: 2 * 1024 * 1024,
      allowEmptyFiles: false,
      minFileSize: 1,
    });

    const [fields, files] = await form.parse(req);

    const petName   = first(fields.petName);
    const petType   = first(fields.petType);
    const age       = first(fields.age);
    const breed     = first(fields.breed);
    const shortNote = first(fields.shortNote);
    const notes     = first(fields.notes);
    const phone     = first(fields.phone);

    if(!petName || !petType || !shortNote || shortNote.length > 500 || !phone){
      return res.status(400).json({ success:false, message:"Zorunlu alanlar eksik veya hatalı" });
    }

    let photos = files.photos || [];
    if(!Array.isArray(photos)) photos = [photos];
    photos = photos.filter(f => f && f.size > 0);

    if(photos.length < 1 || photos.length > 5){
      return res.status(400).json({ success:false, message:"1–5 arası foto yüklenmeli" });
    }

    const attachments = photos.map(f => ({
      filename: f.originalFilename,
      content: fs.readFileSync(f.filepath),
      contentType: f.mimetype
    }));

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 465);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
      tls: { rejectUnauthorized:false }
    });

    const mailText = `Yeni Pet Başvurusu

Adı: ${petName}
Tür: ${petType}
Yaş: ${age || "-"}
Cins: ${breed || "-"}

Kısa Bilgi:
${shortNote}

Ek Notlar:
${notes || "-"}

İletişim (WhatsApp/Tel):
${phone}
`;

    await transporter.sendMail({
      from: `Kaş Guide <${smtpUser}>`,
      to: "pet@kasguide.de",
      subject: `Yeni Pet – ${petName}`,
      text: mailText,
      attachments
    });

    res.status(200).json({ success:true });
  }catch(err){
    console.error(err);
    res.status(500).json({ success:false, message:"Sunucu hatası" });
  }
}