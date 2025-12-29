# ⚠️ GÜVENLİK UYARISI - SECURITY ALERT

## 🚨 Ne Oldu? (What Happened?)

GitGuardian, GitHub repository'nizde **hassas bilgilerin** (credentials) açığa çıktığını tespit etti:

1. **Company Email Password** - Email şifresi
2. **SMTP credentials** - Email sunucu bilgileri

Bu bilgiler `.env.local` dosyasında saklanıyordu ve yanlışlıkla GitHub'a push edildi.

---

## ✅ Yapılan İşlemler (Actions Taken)

### 1. `.env.local` Git'ten Kaldırıldı
```bash
git rm --cached .env.local
```

### 2. `.env.example` Şablon Oluşturuldu
Artık hassas bilgiler yerine şablon dosya var.

### 3. `.gitignore` Kontrol Edildi
`.env*.local` zaten ignore listesinde ✅

---

## 🔒 YAPMANIZ GEREKENLER (URGENT ACTIONS REQUIRED)

### 1️⃣ Email Şifrenizi DEĞİŞTİRİN
Eğer `.env.local`'de email şifreniz varsa:
- Hemen email şifrenizi değiştirin
- İki faktörlü doğrulama (2FA) açın

### 2️⃣ Yeni Admin API Key Oluşturun
```bash
# Terminal'de yeni key oluştur:
openssl rand -hex 32
```

Çıkan değeri kopyalayın ve yeni `.env.local` dosyasına ekleyin.

### 3️⃣ Vercel Environment Variables'ı Güncelleyin
1. Vercel Dashboard → Kasguide projesi
2. Settings → Environment Variables
3. `ADMIN_API_KEY` değerini yeni key ile değiştirin
4. Redeploy edin

### 4️⃣ Yeni `.env.local` Oluşturun
```bash
# .env.example'ı kopyala
cp .env.example .env.local

# Gerçek değerleri gir
nano .env.local
```

**Örnek `.env.local`:**
```bash
POSTGRES_URL=postgresql://neondb_owner:YENİ_ŞİFRE@ep-...neon.tech/neondb?sslmode=require
ADMIN_API_KEY=yeni_oluşturduğunuz_32_karakter_key
```

### 5️⃣ Git History'den Temizleme (Opsiyonel ama Önerilen)

**Basit Yöntem:** Yeni repo oluştur
- Mevcut dosyaları al
- Yeni repo oluştur
- Temiz history ile başla

**Gelişmiş Yöntem:** git-filter-repo
```bash
# Dikkat: Bu tüm history'i değiştirir!
git filter-repo --path .env.local --invert-paths
git push origin --force --all
```

⚠️ **UYARI:** Force push tüm işbirlikçileri etkiler!

---

## 🛡️ Gelecek İçin Önlemler (Prevention)

### ✅ Yapılacaklar Checklist:

- [x] `.gitignore`'a `.env*.local` eklendi
- [x] `.env.example` şablon oluşturuldu
- [ ] Email şifresi değiştirildi
- [ ] Yeni Admin API key oluşturuldu
- [ ] Vercel env variables güncellendi
- [ ] Yeni `.env.local` oluşturuldu

### 📝 Kurallar:

1. **ASLA** `.env.local` dosyasını commit etmeyin
2. **ASLA** şifreleri kodda hardcode etmeyin
3. **DAIMA** `.env.example` kullanın (değerler olmadan)
4. **DAIMA** secret'ları Vercel Environment Variables'da saklayın

---

## 📞 Yardım

Sorularınız için:
- GitHub Issues: https://github.com/ubterzioglu/kasguide/issues
- GitGuardian Docs: https://docs.gitguardian.com/

---

**Son Güncelleme:** 2024-12-29
**Durum:** ⚠️ Şifreler değiştirilmeli!
