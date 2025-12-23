import re
import json
import shutil
from pathlib import Path
from datetime import datetime
import sys
import tkinter as tk
from tkinter import ttk, filedialog, messagebox

IMAGE_EXTS = {".jpg", ".jpeg", ".png", ".webp"}

TR_MAP = str.maketrans({
    "ç": "c", "Ç": "c",
    "ğ": "g", "Ğ": "g",
    "ı": "i", "İ": "i",
    "ö": "o", "Ö": "o",
    "ş": "s", "Ş": "s",
    "ü": "u", "Ü": "u",
})


def slugify_tr(name: str) -> str:
    s = (name or "").strip().translate(TR_MAP).lower()
    try:
        import unicodedata
        s = unicodedata.normalize("NFKD", s)
        s = "".join(ch for ch in s if unicodedata.category(ch) != "Mn")
        s = unicodedata.normalize("NFKC", s)
    except Exception:
        pass
    s = s.replace("&", " and ")
    s = re.sub(r"[^a-z0-9]+", "-", s)
    s = re.sub(r"-{2,}", "-", s).strip("-")
    return s


def extract_titles_from_datajs(js_path: Path) -> list[str]:
    text = js_path.read_text(encoding="utf-8", errors="ignore")
    # title: '...'  OR title: "..."
    titles = re.findall(r"\btitle\s*:\s*['\"]([^'\"]+)['\"]", text)
    # uniq preserve order
    seen = set()
    out = []
    for t in titles:
        t = t.strip()
        if t and t not in seen:
            seen.add(t)
            out.append(t)
    return out


def list_images(folder: Path) -> list[Path]:
    files = []
    for p in folder.iterdir():
        if p.is_file() and p.suffix.lower() in IMAGE_EXTS:
            files.append(p)
    return files


def pick_last_n_images(folder: Path, n: int) -> list[Path]:
    imgs = list_images(folder)
    imgs.sort(key=lambda p: p.stat().st_mtime, reverse=True)
    picked = imgs[:n]
    # old->new for consistent 001..004
    picked.sort(key=lambda p: p.stat().st_mtime)
    return picked


def safe_rename_plan(files: list[Path], slug: str, cover_mode: bool) -> list[tuple[Path, Path]]:
    plan = []
    for i, f in enumerate(files, start=1):
        ext = f.suffix.lower()
        if cover_mode and i == 1:
            new_name = f"{slug}-001-kapak{ext}"
        else:
            new_name = f"{slug}-{i:03d}{ext}"
        plan.append((f, f.with_name(new_name)))
    return plan


def check_conflicts(plan: list[tuple[Path, Path]]) -> tuple[bool, list[str]]:
    errors = []
    targets = [dst for _, dst in plan]
    # duplicates
    if len(set(targets)) != len(targets):
        errors.append("Hedef isimlerde duplicate var (aynı isim iki kez oluşuyor).")
    # existing
    for src, dst in plan:
        if dst.exists() and dst.resolve() != src.resolve():
            errors.append(f"Çakışma: {dst.name} zaten var.")
    return (len(errors) == 0, errors)


def write_undo_log(folder: Path, plan: list[tuple[Path, Path]], slug: str) -> Path:
    # undo = rename new back to old
    payload = {
        "created_at": datetime.now().isoformat(timespec="seconds"),
        "slug": slug,
        "ops": [{"from": str(dst), "to": str(src)} for src, dst in plan],
    }
    log_path = folder / f"undo-{slug}-{datetime.now().strftime('%Y%m%d-%H%M%S')}.json"
    log_path.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
    return log_path


class App(tk.Tk):
    def __init__(self):
        super().__init__()
        self.title("Kaş Guide — Foto Rename (Data.js’den liste + yerinde rename)")
        self.geometry("900x560")

        self.datajs_path: Path | None = None
        self.photos_folder: Path | None = None
        self.titles: list[str] = []
        self.selected_files: list[Path] = []

        self._build_ui()

    def _build_ui(self):
        frm = ttk.Frame(self, padding=12)
        frm.pack(fill="both", expand=True)

        # Top: data.js picker
        row0 = ttk.Frame(frm)
        row0.pack(fill="x")
        ttk.Label(row0, text="data.js:").pack(side="left")
        self.data_lbl = ttk.Label(row0, text="Seçilmedi", width=70)
        self.data_lbl.pack(side="left", padx=8)
        ttk.Button(row0, text="Seç…", command=self.pick_datajs).pack(side="left")

        # Places list
        row1 = ttk.Frame(frm)
        row1.pack(fill="x", pady=(12, 0))
        ttk.Label(row1, text="Mekân:").pack(side="left")
        self.place_var = tk.StringVar()
        self.place_combo = ttk.Combobox(row1, textvariable=self.place_var, state="readonly", width=60)
        self.place_combo.pack(side="left", padx=8)
        self.place_combo.bind("<<ComboboxSelected>>", self.on_place_selected)

        self.slug_lbl = ttk.Label(row1, text="Slug: —")
        self.slug_lbl.pack(side="left", padx=8)

        # Photos folder picker
        row2 = ttk.Frame(frm)
        row2.pack(fill="x", pady=(12, 0))
        ttk.Label(row2, text="Foto klasörü:").pack(side="left")
        self.folder_lbl = ttk.Label(row2, text="Seçilmedi", width=60)
        self.folder_lbl.pack(side="left", padx=8)
        ttk.Button(row2, text="Seç…", command=self.pick_folder).pack(side="left")

        # Mode
        row3 = ttk.Frame(frm)
        row3.pack(fill="x", pady=(12, 0))

        self.mode_var = tk.StringVar(value="last4")
        ttk.Radiobutton(row3, text="Klasördeki SON 4 foto", variable=self.mode_var, value="last4", command=self.refresh_preview).pack(side="left")
        ttk.Radiobutton(row3, text="4 foto seç (kontrollü)", variable=self.mode_var, value="pick4", command=self.refresh_preview).pack(side="left", padx=16)

        self.cover_var = tk.BooleanVar(value=False)
        ttk.Checkbutton(row3, text="Kapak modu (001-kapak)", variable=self.cover_var, command=self.refresh_preview).pack(side="left", padx=16)

        self.dryrun_var = tk.BooleanVar(value=True)
        ttk.Checkbutton(row3, text="Dry-run (sadece göster)", variable=self.dryrun_var, command=self.refresh_preview).pack(side="left")

        ttk.Button(row3, text="4 foto seç…", command=self.pick_4_files).pack(side="left", padx=16)

        # Preview box
        ttk.Label(frm, text="Önizleme (eski -> yeni):").pack(anchor="w", pady=(16, 6))
        self.preview = tk.Text(frm, height=16, wrap="none")
        self.preview.pack(fill="both", expand=True)

        # Actions
        row4 = ttk.Frame(frm)
        row4.pack(fill="x", pady=(10, 0))
        ttk.Button(row4, text="Önizlemeyi yenile", command=self.refresh_preview).pack(side="left")
        ttk.Button(row4, text="RENAME ET", command=self.do_rename).pack(side="right")
        ttk.Label(row4, text="(Dry-run kapalıyken gerçek rename yapar)", foreground="#444").pack(side="right", padx=10)

    def pick_datajs(self):
        p = filedialog.askopenfilename(title="data.js seç", filetypes=[("JS files", "*.js"), ("All", "*.*")])
        if not p:
            return
        self.datajs_path = Path(p)
        self.data_lbl.config(text=str(self.datajs_path))
        try:
            self.titles = extract_titles_from_datajs(self.datajs_path)
        except Exception as e:
            messagebox.showerror("Hata", f"data.js okunamadı:\n{e}")
            return
        if not self.titles:
            messagebox.showwarning("Uyarı", "Hiç title bulunamadı. Dosya formatı farklı olabilir.")
        self.place_combo["values"] = self.titles
        if self.titles:
            self.place_combo.current(0)
            self.on_place_selected()

    def pick_folder(self):
        p = filedialog.askdirectory(title="Foto klasörünü seç")
        if not p:
            return
        self.photos_folder = Path(p)
        self.folder_lbl.config(text=str(self.photos_folder))
        self.refresh_preview()

    def pick_4_files(self):
        files = filedialog.askopenfilenames(
            title="4 foto seç",
            filetypes=[("Images", "*.jpg *.jpeg *.png *.webp"), ("All", "*.*")]
        )
        if not files:
            return
        paths = [Path(f) for f in files if Path(f).suffix.lower() in IMAGE_EXTS]
        if len(paths) != 4:
            messagebox.showwarning("Uyarı", f"Tam 4 görsel seçmelisin. Seçilen: {len(paths)}")
            return
        # Ensure they are in same folder (simplify)
        parents = {p.parent.resolve() for p in paths}
        if len(parents) != 1:
            messagebox.showwarning("Uyarı", "4 dosya aynı klasörde olmalı.")
            return
        self.selected_files = paths
        if self.photos_folder is None:
            self.photos_folder = paths[0].parent
            self.folder_lbl.config(text=str(self.photos_folder))
        self.mode_var.set("pick4")
        self.refresh_preview()

    def on_place_selected(self, _evt=None):
        title = self.place_var.get() or ""
        slug = slugify_tr(title)
        self.slug_lbl.config(text=f"Slug: {slug or '—'}")
        self.refresh_preview()

    def _get_plan(self) -> tuple[str, list[tuple[Path, Path]]]:
        if not self.photos_folder:
            raise ValueError("Foto klasörü seçilmedi.")
        title = self.place_var.get()
        if not title:
            raise ValueError("Mekân seçilmedi.")
        slug = slugify_tr(title)
        if not slug:
            raise ValueError("Slug üretilemedi.")

        cover = bool(self.cover_var.get())

        if self.mode_var.get() == "pick4":
            files = self.selected_files
            if len(files) != 4:
                raise ValueError("Pick modunda önce 4 foto seçmelisin.")
        else:
            files = pick_last_n_images(self.photos_folder, 4)
            if len(files) != 4:
                raise ValueError(f"Klasörde 4 görsel bulunamadı. Bulunan: {len(files)}")

        plan = safe_rename_plan(files, slug, cover)
        return slug, plan

    def refresh_preview(self):
        self.preview.delete("1.0", "end")
        try:
            slug, plan = self._get_plan()
            ok, errs = check_conflicts(plan)
            for src, dst in plan:
                self.preview.insert("end", f"{src.name}  ->  {dst.name}\n")
            self.preview.insert("end", "\n")
            self.preview.insert("end", f"Slug: {slug}\n")
            self.preview.insert("end", f"Mode: {'Pick4' if self.mode_var.get()=='pick4' else 'Last4'}\n")
            self.preview.insert("end", f"Kapak modu: {self.cover_var.get()}\n")
            self.preview.insert("end", f"Dry-run: {self.dryrun_var.get()}\n")
            if not ok:
                self.preview.insert("end", "\nHATA:\n")
                for e in errs:
                    self.preview.insert("end", f"- {e}\n")
        except Exception as e:
            self.preview.insert("end", f"Önizleme için eksik bilgi:\n{e}\n")

    def do_rename(self):
        try:
            slug, plan = self._get_plan()
            ok, errs = check_conflicts(plan)
            if not ok:
                messagebox.showerror("Çakışma", "\n".join(errs))
                return

            dry = bool(self.dryrun_var.get())
            if dry:
                messagebox.showinfo("Dry-run", "Dry-run açık. Gerçek rename yapılmadı.\nÖnizlemeyi kontrol et, sonra Dry-run kapat.")
                return

            # final confirmation
            if not messagebox.askyesno("Onay", "Dry-run kapalı. Dosyalar gerçekten rename edilecek. Devam?"):
                return

            # Apply
            for src, dst in plan:
                src.rename(dst)

            log_path = write_undo_log(self.photos_folder, plan, slug)
            messagebox.showinfo("Tamam", f"Rename tamamlandı.\nUndo log:\n{log_path}")
            # reset selection for pick mode
            self.selected_files = []
            self.refresh_preview()

        except Exception as e:
            messagebox.showerror("Hata", str(e))


if __name__ == "__main__":
    try:
        import tkinter  # noqa: F401
    except Exception:
        print("Tkinter yok. Windows'ta genelde Python ile gelir.", file=sys.stderr)
        raise
    app = App()
    app.mainloop()
