// add-pet.js — client-side validation + user-friendly error rendering

(function () {
  const form = document.getElementById("petForm");
  const errorBox = document.getElementById("formError");
  const successBox = document.getElementById("success");
  const photosInput = document.getElementById("photosInput");
  const shortNoteEl = document.getElementById("shortNote");
  const shortCounter = document.getElementById("shortCounter");

  if (!form) return;

  function showError(msg) {
    if (!errorBox) return alert(msg);
    errorBox.textContent = msg;
    errorBox.hidden = false;
    // bring into view on mobile
    errorBox.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function clearError() {
    if (!errorBox) return;
    errorBox.hidden = true;
    errorBox.textContent = "";
  }

  function updateShortCounter() {
    if (!shortNoteEl || !shortCounter) return;
    shortCounter.textContent = String(shortNoteEl.value.length || 0);
  }

  // counter init + live update
  updateShortCounter();
  if (shortNoteEl) shortNoteEl.addEventListener("input", updateShortCounter);

  // optional: thumbnails already handled elsewhere? If not, keep silent.

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    clearError();

    const fd = new FormData(form);

    const petName = (fd.get("petName") || "").toString().trim();
    const petType = (fd.get("petType") || "").toString().trim();
    const shortNote = (fd.get("shortNote") || "").toString().trim();
    const phone = (fd.get("phone") || "").toString().trim();

    const photoCount = photosInput?.files?.length ?? 0;

    // client-side validation: prevent request if missing
    const missing = [];
    if (!petName) missing.push("Pet Adı");
    if (!petType) missing.push("Tür");
    if (!shortNote) missing.push("Kısa Bilgi");
    if (!phone) missing.push("İletişim (WhatsApp / Tel)");
    if (photoCount < 1) missing.push("En az 1 fotoğraf");
    if (photoCount > 5) {
      showError("Fotoğraf sayısı 1 ile 5 arasında olmalı.");
      return;
    }

    if (missing.length) {
      showError(`Lütfen zorunlu alanları doldurun: ${missing.join(", ")}.`);
      return;
    }

    // submit
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.disabled = true;

    try {
      const res = await fetch("/api/pet-submit", { method: "POST", body: fd });

      if (res.ok) {
        form.hidden = true;
        if (successBox) successBox.hidden = false;
        return;
      }

      // try read server message (400/500)
      let serverMsg = "";
      try {
        const data = await res.json();
        serverMsg = (data && data.message) ? String(data.message) : "";
      } catch (_) {
        // non-json response
        try {
          serverMsg = (await res.text())?.trim() || "";
        } catch (_) {}
      }

      // map generic/technical messages to user-friendly ones
      let msg = serverMsg || "Gönderim başarısız. Lütfen zorunlu alanları kontrol edin.";
      if (res.status >= 500) {
        msg = "Şu an gönderimde bir sorun var. Lütfen biraz sonra tekrar deneyin.";
      } else if (serverMsg.includes("Zorunlu alanlar eksik")) {
        msg = "Lütfen zorunlu alanları doldurun.";
      } else if (serverMsg.includes("Fotoğraf sayısı")) {
        msg = "Fotoğraf sayısı 1 ile 5 arasında olmalı.";
      }

      showError(msg);
    } catch (err) {
      showError("Bağlantı hatası. İnternetinizi kontrol edip tekrar deneyin.");
    } finally {
      if (submitBtn) submitBtn.disabled = false;
    }
  });
})();
