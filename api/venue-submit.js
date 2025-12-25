import nodemailer from 'nodemailer';
import formidable from 'formidable';

export const config = {
  api: {
    bodyParser: false
  }
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  try {
    const form = formidable({ multiples: true });

    const [fields] = await form.parse(req);

    const {
      title,
      location,
      distance,
      description,
      longText,
      price,
      duration,
      access,
      googleMapsQuery,
      phone,
      instagram,
      website,
      booking
    } = fields;

    if (!title || !longText || !phone) {
      return res.status(400).json({
        success: false,
        message: 'Zorunlu alanlar eksik'
      });
    }

    // SMTP transport la değişiklikleri niye almıon
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    const mailText = `
Yeni Mekan Başvurusu

Mekan Adı: ${title}
Konum: ${location || '-'}
Mesafe: ${distance || '-'}

Kısa Açıklama:
${description || '-'}

Detaylı Açıklama:
${longText}

Telefon: ${phone}
Instagram: ${instagram || '-'}
Website: ${website || '-'}
Rezervasyon: ${booking || '-'}

Ek Bilgiler:
Fiyat: ${price || '-'}
Süre: ${duration || '-'}
Erişim: ${access || '-'}
Google Maps: ${googleMapsQuery || '-'}
`;

    await transporter.sendMail({
      from: `"Kaş Guide" <${process.env.SMTP_USER}>`,
      to: 'mekan@kasguide.de',
      subject: `Yeni Mekan Başvurusu – ${title}`,
      text: mailText
    });

    return res.status(200).json({ success: true });

  } catch (err) {
    console.error('MAIL ERROR:', err);
    return res.status(500).json({
      success: false,
      message: err.message || 'Sunucu hatası'
    });
  }
}
