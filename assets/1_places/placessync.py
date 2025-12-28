
# places_sync_gui.py
# Kaş Guide – Places Sync (GUI + Backend)
# Features:
# - Select 257.txt, places-data.js, target assets/1_places folder
# - Optional: select a "placeholder image" file; it will be copied as <id>-001..004.jpg for new places
# - Category guess: bar/cafe/beach/food
# - Append placeholder blocks into const allPlaces = [...] safely (bracket depth parser)
# - Auto backup: places-data.js.bak

import re
import unicodedata
import shutil
from pathlib import Path
import tkinter as tk
from tkinter import ttk, filedialog, messagebox

ID_REGEX = re.compile(r"\bid\s*:\s*['\"]([^'\"]+)['\"]")

def slugify(name: str) -> str:
    s = name.strip().lower()
    s = s.replace("&", " and ")
    s = s.replace("ı", "i").replace("İ", "i")
    s = s.replace("’", "").replace("'", "").replace("`", "")
    s = unicodedata.normalize("NFKD", s)
    s = "".join(ch for ch in s if not unicodedata.combining(ch))
    s = re.sub(r"[^a-z0-9]+", "-", s)
    s = re.sub(r"-{2,}", "-", s).strip("-")
    return s

def normalize_for_match(name: str) -> str:
    s = name.lower()
    tr = {"ı":"i","ş":"s","ğ":"g","ç":"c","ö":"o","ü":"u","İ":"i","Ş":"s","Ğ":"g","Ç":"c","Ö":"o","Ü":"u"}
    for k, v in tr.items():
        s = s.replace(k, v)
    return s

def guess_categories(place_name: str) -> list[str]:
    n = normalize_for_match(place_name)
    bar_kw   = ["pub", " bar", "meyhane", "ocakbasi", "ocakbaşı", "cocktail", "gastropub", "beer"]
    cafe_kw  = ["cafe", "kahve", "coffee", "café", "pastane", "pastanesi", "patisserie", "bufe", "büfe"]
    beach_kw = ["beach", "plaj", "beach club"]
    cats = []
    if any(k in n for k in bar_kw): cats.append("bar")
    if any(k in n for k in cafe_kw): cats.append("cafe")
    if any(k in n for k in beach_kw): cats.append("beach")
    return cats if cats else ["food"]

def read_existing_ids(js_path: Path) -> set[str]:
    return set(ID_REGEX.findall(js_path.read_text(encoding="utf-8")))

def read_names(txt_path: Path) -> list[str]:
    return [l.strip() for l in txt_path.read_text(encoding="utf-8").splitlines() if l.strip()]

def build_block(pid: str, title: str, cats: list[str]) -> str:
    cats_js = "[" + ",".join(f"'{c}'" for c in cats) + "]"
    title = title.replace("'", "")
    return f""",
{{
  id: '{pid}',
  badgeId: 'new',

  title: '{title}',
  description: 'TODO: Kısa açıklama (1–2 cümle).',
  category: {cats_js},

  image: '../assets/1_places/{pid}/{pid}-001.jpg',
  images: [
    '../assets/1_places/{pid}/{pid}-002.jpg',
    '../assets/1_places/{pid}/{pid}-003.jpg',
    '../assets/1_places/{pid}/{pid}-004.jpg'
  ],

  website: '',
  phone: '',
  tags: [],

  longText: `TODO: 3 paragraflık Kaş Guide yazısı.`
}}
"""

def append_blocks_to_allplaces(js_path: Path, blocks: str):
    content = js_path.read_text(encoding="utf-8")

    m = re.search(r"const\s+allPlaces\s*=\s*\[", content)
    if not m:
        raise RuntimeError("places-data.js içinde 'const allPlaces = [' bulunamadı.")

    start = content.find("[", m.end() - 1)
    if start == -1:
        raise RuntimeError("allPlaces '[' bulunamadı.")

    depth = 0
    i = start
    in_s = in_d = in_b = False
    esc = False

    while i < len(content):
        c = content[i]

        if esc:
            esc = False
            i += 1
            continue
        if c == "\\":
            esc = True
            i += 1
            continue

        if not in_d and not in_b and c == "'" and not in_s:
            in_s = True; i += 1; continue
        if in_s and c == "'":
            in_s = False; i += 1; continue

        if not in_s and not in_b and c == '"' and not in_d:
            in_d = True; i += 1; continue
        if in_d and c == '"':
            in_d = False; i += 1; continue

        if not in_s and not in_d and c == "`" and not in_b:
            in_b = True; i += 1; continue
        if in_b and c == "`":
            in_b = False; i += 1; continue

        if in_s or in_d or in_b:
            i += 1
            continue

        if c == "[":
            depth += 1
        elif c == "]":
            depth -= 1
            if depth == 0:
                end = i
                break

        i += 1
    else:
        raise RuntimeError("allPlaces kapanışı ']' bulunamadı.")

    # Backup
    js_path.with_suffix(".js.bak").write_text(content, encoding="utf-8")
    js_path.write_text(content[:end] + blocks + content[end:], encoding="utf-8")

def create_placeholders_from_image(folder: Path, pid: str, placeholder_image: Path, force: bool = False) -> int:
    """
    Copies the given placeholder image into the place folder as:
    <id>-001.jpg ... <id>-004.jpg
    The source file can be .jpg/.png; it will be copied as-is (extension ignored, target is .jpg).
    If you want strict JPEG conversion, tell me and I'll add it.
    """
    created = 0
    for idx in range(1, 5):
        target = folder / f"{pid}-{idx:03d}.jpg"
        if target.exists() and not force:
            continue
        shutil.copyfile(placeholder_image, target)
        created += 1
    return created

class App(tk.Tk):
    def __init__(self):
        super().__init__()
        self.title("Kaş Guide – Places Sync (GUI)")
        self.geometry("920x520")

        self.v_txt = tk.StringVar()
        self.v_js = tk.StringVar()
        self.v_base = tk.StringVar()
        self.v_ph_img = tk.StringVar()

        self.v_apply = tk.BooleanVar(value=True)
        self.v_ph = tk.BooleanVar(value=True)
        self.v_force = tk.BooleanVar(value=False)

        self._build_ui()

    def _build_ui(self):
        frm = ttk.Frame(self)
        frm.pack(fill="x", padx=10, pady=10)

        self._row_file(frm, "257.txt (liste):", self.v_txt, 0, filetypes=[("Text", "*.txt"), ("All", "*.*")])
        self._row_file(frm, "places-data.js:", self.v_js, 1, filetypes=[("JavaScript", "*.js"), ("All", "*.*")])
        self._row_dir(frm, "Hedef klasör (assets/1_places):", self.v_base, 2)
        self._row_file(frm, "Placeholder görsel (tek dosya):", self.v_ph_img, 3,
                       filetypes=[("Images", "*.jpg *.jpeg *.png *.webp"), ("All", "*.*")])

        opt = ttk.LabelFrame(self, text="Seçenekler")
        opt.pack(fill="x", padx=10, pady=8)

        ttk.Checkbutton(opt, text="places-data.js güncelle (append)", variable=self.v_apply).grid(row=0, column=0, sticky="w", padx=10, pady=6)
        ttk.Checkbutton(opt, text="Yeni klasörlere placeholder kopyala (001–004)", variable=self.v_ph).grid(row=1, column=0, sticky="w", padx=10, pady=6)
        ttk.Checkbutton(opt, text="Placeholder varsa üstüne yaz", variable=self.v_force).grid(row=2, column=0, sticky="w", padx=10, pady=6)

        runfrm = ttk.Frame(self)
        runfrm.pack(fill="x", padx=10, pady=8)
        ttk.Button(runfrm, text="Çalıştır", command=self.run).pack(side="left")

        logfrm = ttk.LabelFrame(self, text="Log")
        logfrm.pack(fill="both", expand=True, padx=10, pady=10)
        self.txt_log = tk.Text(logfrm, wrap="word")
        self.txt_log.pack(fill="both", expand=True)
        self._log("Hazır. Dosyaları seçip Çalıştır'a bas.")

    def _log(self, msg: str):
        self.txt_log.insert("end", msg + "\n")
        self.txt_log.see("end")
        self.update_idletasks()

    def _row_file(self, parent, label, var, row, filetypes):
        ttk.Label(parent, text=label).grid(row=row, column=0, sticky="w", padx=6, pady=6)
        ttk.Entry(parent, textvariable=var, width=85).grid(row=row, column=1, sticky="we", padx=6, pady=6)
        ttk.Button(parent, text="Seç...", command=lambda: self._pick_file(var, filetypes)).grid(row=row, column=2, padx=6, pady=6)

    def _row_dir(self, parent, label, var, row):
        ttk.Label(parent, text=label).grid(row=row, column=0, sticky="w", padx=6, pady=6)
        ttk.Entry(parent, textvariable=var, width=85).grid(row=row, column=1, sticky="we", padx=6, pady=6)
        ttk.Button(parent, text="Seç...", command=lambda: self._pick_dir(var)).grid(row=row, column=2, padx=6, pady=6)

    def _pick_file(self, var, filetypes):
        p = filedialog.askopenfilename(title="Dosya seç", filetypes=filetypes)
        if p:
            var.set(p)

    def _pick_dir(self, var):
        p = filedialog.askdirectory(title="Klasör seç")
        if p:
            var.set(p)

    def run(self):
        try:
            list_path = Path(self.v_txt.get().strip())
            js_path = Path(self.v_js.get().strip())
            base_dir = Path(self.v_base.get().strip())
            ph_img_path_str = self.v_ph_img.get().strip()
            ph_img = Path(ph_img_path_str) if ph_img_path_str else None

            if not list_path.exists():
                raise RuntimeError(f"257.txt bulunamadı: {list_path}")
            if not js_path.exists():
                raise RuntimeError(f"places-data.js bulunamadı: {js_path}")
            base_dir.mkdir(parents=True, exist_ok=True)

            if self.v_ph.get():
                if not ph_img or not ph_img.exists():
                    raise RuntimeError("Placeholder kopyalama seçili ama placeholder görsel dosyası seçilmedi/bulunamadı.")

            self._log("Mevcut ID'ler okunuyor...")
            existing_ids = read_existing_ids(js_path)

            self._log("Liste okunuyor...")
            names = read_names(list_path)

            new_items = []
            for name in names:
                pid = slugify(name)
                if pid not in existing_ids:
                    new_items.append((name, pid))

            self._log(f"Toplam: {len(names)} | Yeni: {len(new_items)} | Zaten vardı: {len(names) - len(new_items)}")

            created_folders = 0
            created_ph = 0
            blocks = ""

            for name, pid in new_items:
                folder = base_dir / pid
                if not folder.exists():
                    folder.mkdir(parents=True, exist_ok=True)
                    created_folders += 1

                if self.v_ph.get():
                    created_ph += create_placeholders_from_image(folder, pid, ph_img, force=self.v_force.get())

                blocks += build_block(pid, name, guess_categories(name))

            if self.v_apply.get() and blocks.strip():
                self._log("places-data.js yedekleniyor (.bak) ve güncelleniyor...")
                append_blocks_to_allplaces(js_path, blocks)
                self._log("OK: places-data.js güncellendi.")
            else:
                self._log("Not: JS güncelleme kapalı veya eklenecek yeni item yok.")

            self._log(f"Klasör: {created_folders} | Placeholder: {created_ph}")
            messagebox.showinfo("Bitti", f"Tamamlandı.\nYeni: {len(new_items)}\nKlasör: {created_folders}\nPlaceholder: {created_ph}")

        except Exception as e:
            messagebox.showerror("Hata", str(e))
            self._log("HATA: " + str(e))

if __name__ == "__main__":
    App().mainloop()
