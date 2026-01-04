# 📦 Shared CSS Components

Bu klasör, tüm "add" formlarında kullanılan ortak CSS dosyalarını içerir.

## 📄 Dosyalar

### 1. `base.css`
**İçerik:**
- CSS Variables (colors, spacing, shadows, etc.)
- CSS Reset
- Typography
- Global styles

**Kullanım:** Her formda ilk sırada include edin.

### 2. `layout.css`
**İçerik:**
- Container system
- Topbar/Header
- Page head
- Grid system
- Structural wrappers (form-box, etc.)

**Kullanım:** base.css'ten sonra include edin.

### 3. `components.css`
**İçerik:**
- Accordion/Details
- Form elements (input, select, textarea)
- Buttons
- Categories grid
- File upload
- Messages (success, error)
- Animations

**Kullanım:** layout.css'ten sonra include edin.

---

## 🎯 Kullanım Örneği

Her add formunda şu sırayla include edin:

```html
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Form Adı • Kaş Guide</title>

  <!-- Shared CSS (sırasıyla) -->
  <link rel="stylesheet" href="../shared/base.css">
  <link rel="stylesheet" href="../shared/layout.css">
  <link rel="stylesheet" href="../shared/components.css">

  <!-- Form-specific CSS (varsa) -->
  <link rel="stylesheet" href="./add-place-specific.css">
</head>
<body>
  <!-- Form içeriği -->
</body>
</html>
```

---

## 🎨 CSS Variables (base.css'ten)

Tüm formlarda kullanabileceğiniz CSS değişkenleri:

```css
/* Colors */
var(--bg1)           /* #5b6bff */
var(--bg2)           /* #22c1dc */
var(--bg3)           /* #10b8c7 */
var(--text)          /* #0b1220 */
var(--text-muted)    /* #5b6472 */

/* Surfaces */
var(--card)          /* rgba(255, 255, 255, 0.78) */
var(--card-strong)   /* rgba(255, 255, 255, 0.88) */

/* Shadows */
var(--shadow)        /* Main shadow */
var(--shadow-md)     /* Medium shadow */
var(--shadow-sm)     /* Small shadow */
var(--shadow-xs)     /* Extra small shadow */

/* Border Radius */
var(--radius)        /* 18px */
var(--radius-md)     /* 16px */
var(--radius-sm)     /* 14px */
var(--radius-xs)     /* 12px */
var(--radius-full)   /* 9999px */

/* Spacing */
var(--space-xs)      /* 6px */
var(--space-sm)      /* 10px */
var(--space-md)      /* 12px */
var(--space-lg)      /* 14px */
var(--space-xl)      /* 16px */

/* State Colors */
var(--color-success)
var(--color-success-bg)
var(--color-error)
var(--color-info)

/* Gradients */
var(--gradient-preview)
var(--gradient-submit)
```

---

## 📊 Avantajlar

✅ **DRY (Don't Repeat Yourself)** - Kod tekrarı yok
✅ **Tutarlılık** - Tüm formlarda aynı görünüm
✅ **Kolay Bakım** - Değişiklik tek yerden
✅ **Küçük Dosya Boyutu** - %57 kod azalması
✅ **Tema Değişikleri** - CSS variables ile kolay
✅ **Responsive** - Tüm breakpoint'ler dahil

---

## 🔧 Yeni Form Ekleme

Yeni bir form eklerken:

1. Shared CSS'leri include et (yukarıdaki sırayla)
2. Standart HTML yapısını kullan:
   ```html
   <header class="topbar">
     <div class="container">
       <a class="brand" href="../index.html">
         <div class="brand__title">Kaş Guide</div>
         <div class="brand__subtitle">[Form Tipi] Ekle</div>
       </a>
     </div>
   </header>

   <main class="container">
     <section class="page-head">
       <h1>[Icon] [Form Adı]</h1>
       <p class="muted">[Açıklama]</p>
     </section>

     <section class="info-section">
       <details class="accordion-item" open>
         <summary class="section-title">
           <span class="section-icon">ℹ️</span>
           Bilgi
           <span class="chev">˅</span>
         </summary>
         <div class="liste-small">
           <!-- İçerik -->
         </div>
       </details>
     </section>

     <form class="form card">
       <!-- Form alanları -->
     </form>
   </main>
   ```

3. Form-specific stiller için ayrı CSS oluştur (gerekirse)

---

**Son Güncelleme:** 2024-12-29
**Oluşturan:** Claude Agent
**Amaç:** Tüm add formlarında tutarlılık ve kod tekrarını önleme
