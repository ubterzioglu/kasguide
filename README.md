# Kaş Guide - Formu Vercel'de Mail'e Gönderme

## 1) Dosyaları kopyala
- `ekle.html` (güncellendi)
- `api/venue-submit.js` (Vercel Serverless Function)

Repo kökünde `/api` klasörü olmalı:
```
/api/venue-submit.js
/pages/.. (varsa)
/public/.. (varsa)
ekle.html  (senin path'in nereyse)
```

## 2) Bağımlılıkları ekle
Terminal:
```bash
npm i nodemailer formidable
```

## 3) Vercel Environment Variables
Vercel Dashboard → Project → Settings → Environment Variables:

- SMTP_HOST = (mail sunucun, örn: mail.kasguide.de veya provider host)
- SMTP_PORT = 465 (SSL) veya 587 (STARTTLS)
- SMTP_USER = (mailbox kullanıcı adı)
- SMTP_PASS = (mailbox şifre / app password)

Opsiyonel:
- MAIL_TO   = mekan@kasguide.de
- MAIL_FROM = "Kaş Guide <mekan@kasguide.de>"  (veya SMTP_USER ile aynı)

## 4) Deploy
Commit + push → Vercel otomatik deploy.

## 5) Test
Formu doldur → Başvuruyu Gönder → `mekan@kasguide.de` inbox'a mail gelmeli.

Not: Dosya ekleri çok büyükse provider mail limitine takılabilir. Şu an 10MB parse limiti var ve max 6 ek gönderiliyor.
