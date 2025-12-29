# Vercel Environment Variables Setup

Bu değişkenleri Vercel Dashboard'a eklemeniz gerekiyor:

## Vercel Dashboard'da:
1. https://vercel.com/dashboard
2. Projenizi seçin (kasguide)
3. Settings > Environment Variables

## Eklenecek Variables:

### Database (Neon tarafından otomatik eklendi - kontrol et):
```
POSTGRES_URL
POSTGRES_URL_NON_POOLING
POSTGRES_USER
POSTGRES_HOST
POSTGRES_PASSWORD
POSTGRES_DATABASE
POSTGRES_PRISMA_URL
```

### Admin Panel (MUTLAKA EKLE):
```
ADMIN_API_KEY=d57c5c18ccb3c25b436001888fd7381674216d7954f753fc376ce8872e20dfed
```

### Email (İsteğe bağlı - şimdilik atlayabilirsin):
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
MAIL_TO=mekan@kasguide.de
```

## Her Variable İçin:
- Name: değişken adı (örn: ADMIN_API_KEY)
- Value: değişken değeri
- Environment: Production, Preview, Development (hepsini seç)
- "Add" butonuna tıkla

## Tamamlandığında:
- Değişiklikleri kaydet
- Projeyi yeniden deploy et
