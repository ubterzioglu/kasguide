/* artists-ekle.js
   - Modüler: sadece form + preview + draft
   - Preview sayfası: example/artists/artists-example.html
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

const pvName = $("pvName");
const pvShort = $("pvShort");
const pvBanner = $("pvBanner");
const pvAvatar = $("pvAvatar");
const pvSocial = $("pvSocial");

function safeUrl(v){
  if(!v) return "";
  try{
    const u = new URL(v);
    return u.toString();
  }catch{
    return "";
  }
}

function buildDraft(){
  return {
    artistName: $("artistName").value.trim(),
    artistCategory: $("artistCategory").value,
    shortText: $("shortText").value.trim(),
    longText: $("longText").value.trim(),
    instagram: $("instagram").value.trim(),
    youtube: $("youtube").value.trim(),
    musicLink: $("musicLink").value.trim(),
    website: $("website").value.trim(),
    phone: $("phone").value.trim(),
    email: $("email").value.trim()
  };
}

function writeDraftToLS(){
  const draft = buildDraft();
  localStorage.setItem(LS_KEY, JSON.stringify(draft));
  return draft;
}

function readDraftFromLS(){
  try{
    const raw = localStorage.getItem(LS_KEY);
    return raw ? JSON.parse(raw) : null;
  }catch{
    return null;
  }
}

function fillForm(d){
  if(!d) return;
  const map = {
    artistName: "artistName",
    artistCategory: "artistCategory",
    shortText: "shortText",
    longText: "longText",
    instagram: "instagram",
    youtube: "youtube",
    musicLink: "musicLink",
    website: "website",
    phone: "phone",
    email: "email"
  };
  Object.entries(map).forEach(([k, id]) => {
    if(d[k] !== undefined) $(id).value = d[k];
  });
}

function socialPill(label, url){
  const a = document.createElement("a");
  a.className = "social";
  a.href = url;
  a.target = "_blank";
  a.rel = "noopener";
  a.textContent = label;
  return a;
}

function updatePreview(){
  const d = buildDraft();

  pvName.textContent = d.artistName || "Sahne Adı";
  pvShort.textContent = d.shortText || "Kısa tanıtım burada gözükecek.";

  pvSocial.innerHTML = "";
  const ig = safeUrl(d.instagram);
  const yt = safeUrl(d.youtube);
  const ml = safeUrl(d.musicLink);
  const ws = safeUrl(d.website);

  if(ig) pvSocial.appendChild(socialPill("Instagram", ig));
  if(yt) pvSocial.appendChild(socialPill("YouTube", yt));
  if(ml) pvSocial.appendChild(socialPill("Müzik", ml));
  if(ws) pvSocial.appendChild(socialPill("Web", ws));

  // Foto preview (yerel). Önizleme sayfasına taşımak için sessionStorage kullanıyoruz.
  // Not: Büyük görseller sessionStorage/localStorage limitini aşabilir. 2 foto ile genelde ok.
}

function fileToDataURL(file){
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(String(r.result || ""));
    r.onerror = reject;
    r.readAsDataURL(file);
  });
}

async function syncImagesToPreview(){
  const profile = $("profilePhoto").files?.[0] || null;
  const banner  = $("bannerPhoto").files?.[0] || null;

  if(profile){
    const url = URL.createObjectURL(profile);
    pvAvatar.src = url;
    pvAvatar.dataset.objectUrl = url;
  }
  if(banner){
    const url = URL.createObjectURL(banner);
    pvBanner.src = url;
    pvBanner.dataset.objectUrl = url;
  }

  // Preview sayfası için (tam sayfa) dataURL kopyası
  // sessionStorage daha uygun; bu sayede aynı tabda yeni sekmeye aktarabiliyoruz.
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
  }catch(e){
    // sessiz geç - sadece tam sayfa preview görselleri gelmeyebilir
  }
}

function updateCounter(){
  const v = shortText.value.length;
  shortCount.textContent = String(v);
}

function attachLive(){
  const ids = ["artistName","artistCategory","shortText","longText","instagram","youtube","musicLink","website","phone","email"];
  ids.forEach((id) => {
    $(id).addEventListener("input", () => {
      updateCounter();
      writeDraftToLS();
      updatePreview();
    });
    $(id).addEventListener("change", () => {
      writeDraftToLS();
      updatePreview();
    });
  });

  $("profilePhoto").addEventListener("change", async () => {
    await syncImagesToPreview();
    writeDraftToLS();
    updatePreview();
  });
  $("bannerPhoto").addEventListener("change", async () => {
    await syncImagesToPreview();
    writeDraftToLS();
    updatePreview();
  });
}

btnSaveDraft?.addEventListener("click", () => {
  writeDraftToLS();
  submitMsg.hidden = false;
  submitMsg.textContent = "Taslak kaydedildi. Önizleme ile kontrol edebilirsiniz.";
});

btnClearDraft?.addEventListener("click", () => {
  localStorage.removeItem(LS_KEY);
  sessionStorage.removeItem("artistsDraft_profileDataUrl");
  sessionStorage.removeItem("artistsDraft_bannerDataUrl");
  form.reset();
  updateCounter();
  updatePreview();
  submitMsg.hidden = false;
  submitMsg.textContent = "Taslak temizlendi.";
});

btnPreview?.addEventListener("click", async () => {
  writeDraftToLS();
  await syncImagesToPreview();
  window.open("./example/artists/artists-example.html", "_blank", "noopener");
});

// Basic submit UX (optional): show message without blocking default behavior if backend exists.
form.addEventListener("submit", () => {
  submitMsg.hidden = false;
  submitMsg.textContent = "Gönderiliyor... (Başvurunuz incelendikten sonra yayınlanır.)";
});

(function init(){
  const saved = readDraftFromLS();
  if(saved) fillForm(saved);
  updateCounter();
  updatePreview();
  syncImagesToPreview();
  attachLive();
})();
