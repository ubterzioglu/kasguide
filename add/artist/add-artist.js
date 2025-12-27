/* artists-ekle.js
   Modüler: sadece form + taslak + tam sayfa önizleme
   Önizleme: example/artists/artists-example.html
*/

const LS_KEY = "artistsDraft_v1";

const $ = (id) => document.getElementById(id);

const form = $("artistsForm");
const btnPreview = $("btnPreview");
const btnSaveDraft = $("btnSaveDraft");
const btnClearDraft = $("btnClearDraft");
const submitMsg = $("submitMsg");

const shortText = $("shortText");
const shortCount = $("shortCount");

function setPreview(){
  // Mini preview (sayfanın sağındaki)
  const d = readDraft() || buildDraft();

  const pvName = document.getElementById("pvName");
  const pvShort = document.getElementById("pvShort");
  const pvSocial = document.getElementById("pvSocial");
  const pvAvatar = document.getElementById("pvAvatar");
  const pvBanner = document.getElementById("pvBanner");

  if(pvName) pvName.textContent = d.artistName || "—";
  if(pvShort) pvShort.textContent = d.shortText || "Kısa tanım burada görünecek.";

  if(pvSocial){
    pvSocial.innerHTML = "";
    const links = [
      ["Instagram", d.instagram],
      ["YouTube", d.youtube],
      ["Müzik", d.musicLink],
      ["Web", d.website],
    ].filter(([,v]) => !!(v && v.trim()));

    links.slice(0, 4).forEach(([label, href]) => {
      const a = document.createElement("a");
      a.href = href.trim();
      a.target = "_blank";
      a.rel = "noopener";
      a.textContent = label;
      pvSocial.appendChild(a);
    });
  }

  // Foto önizleme (sessionStorage dataURL)
  try{
    const av = sessionStorage.getItem("artistsDraft_profileDataUrl");
    const bn = sessionStorage.getItem("artistsDraft_bannerDataUrl");
    if(pvAvatar){
      if(av){
        pvAvatar.style.backgroundImage = `url(${av})`;
        pvAvatar.style.backgroundSize = "cover";
        pvAvatar.style.backgroundPosition = "center";
      }else{
        pvAvatar.style.backgroundImage = "";
      }
    }
    if(pvBanner){
      if(bn){
        pvBanner.style.backgroundImage = `url(${bn})`;
        pvBanner.style.backgroundSize = "cover";
        pvBanner.style.backgroundPosition = "center";
      }else{
        pvBanner.style.backgroundImage = "";
      }
    }
  }catch{ /* ignore */ }
}


function getSelectedCategories(){
  return Array.from(document.querySelectorAll('input[name="artistCategory"]:checked'))
    .map((el) => (el.value || "").toString().trim())
    .filter(Boolean);
}

function buildDraft(){
  return {
    artistName: $("artistName").value.trim(),
    artistCategory: getSelectedCategories(), // artık dropdown değil, çoklu seçim
    shortText: $("shortText").value.trim(),
    longText: $("longText").value.trim(),
    instagram: $("instagram").value.trim(),
    youtube: $("youtube").value.trim(),
    musicLink: $("musicLink").value.trim(),
    website: $("website").value.trim(),
    phone: $("phone").value.trim(),
    email: $("email").value.trim(),
    notes: $("notes") ? $("notes").value.trim() : ""
  };
}

function writeDraft(){
  const draft = buildDraft();
  try{ localStorage.setItem(LS_KEY, JSON.stringify(draft)); }catch{}
  setPreview();
  return draft;
}

function readDraft(){
  try{
    const raw = localStorage.getItem(LS_KEY);
    return raw ? JSON.parse(raw) : null;
  }catch{
    return null;
  }
}

function fillForm(d){
  if(!d) return;

  // normal alanlar
  const map = {
    artistName: "artistName",
    shortText: "shortText",
    longText: "longText",
    instagram: "instagram",
    youtube: "youtube",
    musicLink: "musicLink",
    website: "website",
    phone: "phone",
    email: "email",
    notes: "notes"
  };

  Object.entries(map).forEach(([k, id]) => {
    const el = $(id);
    if(el && d[k] !== undefined) el.value = d[k];
  });

  // kategoriler (checkbox)
  const selected = Array.isArray(d.artistCategory)
    ? d.artistCategory
    : (d.artistCategory ? [String(d.artistCategory)] : []);

  document.querySelectorAll('input[name="artistCategory"]').forEach((el) => {
    el.checked = selected.includes(el.value);
  });
}

function updateCounter(){
  if(shortText && shortCount) shortCount.textContent = String(shortText.value.length);
}


function setFileNameLabel(inputId, labelId){
  const input = $(inputId);
  const out = document.getElementById(labelId);
  if(!input || !out) return;

  const files = Array.from(input.files || []);
  out.textContent = files.length ? files.map(f => f.name).join(", ") : "Henüz dosya seçilmedi";
}

function fileToDataURL(file){
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(String(r.result || ""));
    r.onerror = reject;
    r.readAsDataURL(file);
  });
}

async function syncImagesToSession(){
  const profile = $("profilePhoto")?.files?.[0] || null;
  const banner  = $("bannerPhoto")?.files?.[0] || null;

  try{
    if(profile){
      sessionStorage.setItem("artistsDraft_profileDataUrl", await fileToDataURL(profile));
    }else{
      sessionStorage.removeItem("artistsDraft_profileDataUrl");
    }
    if(banner){
      sessionStorage.setItem("artistsDraft_bannerDataUrl", await fileToDataURL(banner));
    }else{
      sessionStorage.removeItem("artistsDraft_bannerDataUrl");
    }
  }catch{
    // Sessiz geç: preview'da görseller görünmeyebilir.
  }
}

function attachLive(){
  const ids = ["artistName","shortText","longText","instagram","youtube","musicLink","website","phone","email","notes"];
  ids.forEach((id) => {
    const el = $(id);
    if(!el) return;
    el.addEventListener("input", () => { updateCounter(); writeDraft(); });
    el.addEventListener("change", () => { writeDraft(); });
  });


  // kategori checkbox'ları
  document.querySelectorAll('input[name="artistCategory"]').forEach((el) => {
    el.addEventListener("change", () => { writeDraft(); });
  });

  $("profilePhoto")?.addEventListener("change", async () => { setFileNameLabel("profilePhoto","profilePhotoNames"); await syncImagesToSession(); writeDraft(); });
  $("bannerPhoto")?.addEventListener("change", async () => { setFileNameLabel("bannerPhoto","bannerPhotoNames"); await syncImagesToSession(); writeDraft(); });
}

btnSaveDraft?.addEventListener("click", () => {
  writeDraft();
  submitMsg.hidden = false;
  submitMsg.textContent = "Taslak kaydedildi. Üstteki Önizleme butonuyla kontrol edebilirsiniz.";
});

btnClearDraft?.addEventListener("click", () => {
  localStorage.removeItem(LS_KEY);
  sessionStorage.removeItem("artistsDraft_profileDataUrl");
  sessionStorage.removeItem("artistsDraft_bannerDataUrl");
  form.reset();
  updateCounter();
  submitMsg.hidden = false;
  submitMsg.textContent = "Taslak temizlendi.";
});

btnPreview?.addEventListener("click", async () => {
  // Önizleme için de kategori şartı koyalım (add-place gibi)
  const cats = getSelectedCategories();
  const catError = document.getElementById("catError");
  if(!cats.length){
    if(catError) catError.textContent = "Lütfen en az 1 kategori seçin.";
    submitMsg.hidden = false;
    submitMsg.textContent = "Önizleme için kategori seçimi gerekli.";
    document.getElementById("artistCategories")?.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }else{
    if(catError) catError.textContent = "";
  }

  writeDraft();
  await syncImagesToSession();
  window.open("./example-artist/example-artist.html", "_blank", "noopener");
});

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  const cats = getSelectedCategories();
  const catError = document.getElementById("catError");

  if(!cats.length){
    if(catError) catError.textContent = "Lütfen en az 1 kategori seçin.";
    submitMsg.hidden = false;
    submitMsg.textContent = "Kategori seçimi eksik. Lütfen en az 1 kategori seçin.";
    document.getElementById("artistCategories")?.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }else{
    if(catError) catError.textContent = "";
  }

  writeDraft();
  submitMsg.hidden = false;
  submitMsg.textContent = "Başvurunuz alındı. (İncelendikten sonra yayınlanır.)";
});

(function init(){
  const saved = readDraft();
  if(saved) fillForm(saved);
  updateCounter();
  attachLive();
  setFileNameLabel("profilePhoto","profilePhotoNames");
  setFileNameLabel("bannerPhoto","bannerPhotoNames");
  setPreview();
})();
