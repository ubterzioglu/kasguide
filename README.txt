# Kaş Guide - Sanatçı Profili (v1)

Bu paket, Kaş Guide projesine 'Sanatçı Profili' eklemek için modüler bir başlangıç iskeletidir.

## Dosyalar

- artists-ekle.html / .css / .js
  - Sanatçı profil ekleme formu + sağda mini önizleme
  - Üstte 'Önizleme' butonu ile tam sayfa preview açar

- example/artists/artists-example.html / .css / .js
  - Tam sayfa önizleme (localStorage + sessionStorage)

- api/artists-submit.js
  - venue-submit.js mantığıyla uyumlu, 2 foto (profil+banner) + form alanları
  - MAIL_TO varsayılan: sanat@kasguide.de

## Notlar
- localStorage key: artistsDraft_v1
- sessionStorage keys:
  - artistsDraft_profileDataUrl
  - artistsDraft_bannerDataUrl

İsterseniz sonraki adımda:
- artists list + detail sayfaları için dataset + render template
- ana sayfaya "Sanat & Sahne" kategorisi entegrasyonu
