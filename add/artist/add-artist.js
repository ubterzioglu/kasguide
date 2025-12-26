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

function writeDraft(){
  const draft = buildDraft();
  try{ localStorage.setItem(LS_KEY, JSON.stringify(draft)); }catch{}
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
    const el = $(id);
    if(el && d[k] !== undefined) el.value = d[k];
  });
}

function updateCounter(){
  if(shortText && shortCount) shortCount.textContent = String(shortText.value.length);
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
  const ids = ["artistName","artistCategory","shortText","longText","instagram","youtube","musicLink","website","phone","email"];
  ids.forEach((id) => {
    const el = $(id);
    if(!el) return;
    el.addEventListener("input", () => { updateCounter(); writeDraft(); });
    el.addEventListener("change", () => { writeDraft(); });
  });

  $("profilePhoto")?.addEventListener("change", async () => { await syncImagesToSession(); writeDraft(); });
  $("bannerPhoto")?.addEventListener("change", async () => { await syncImagesToSession(); writeDraft(); });
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
  writeDraft();
  await syncImagesToSession();
  window.open("./example/artists/artists-example.html", "_blank", "noopener");
});

form?.addEventListener("submit", () => {
  submitMsg.hidden = false;
  submitMsg.textContent = "Gönderiliyor... (Başvurunuz incelendikten sonra yayınlanır.)";
});

(function init(){
  const saved = readDraft();
  if(saved) fillForm(saved);
  updateCounter();
  attachLive();
})();
