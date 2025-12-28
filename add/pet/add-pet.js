document.getElementById("petForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const fd = new FormData(form);

  const res = await fetch("/api/pet-submit", { method:"POST", body: fd });
  if(res.ok){
    form.hidden = true;
    document.getElementById("success").hidden = false;
  }else{
    alert("Gönderim başarısız");
  }
});