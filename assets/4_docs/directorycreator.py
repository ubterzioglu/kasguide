import os
import re
import argparse
from dataclasses import dataclass
from typing import List, Tuple

# -----------------------------
# Defaults
# -----------------------------
DEFAULT_BASE_DIR = r"C:\Users\ubter\IdeaProjects\kasguide\assets\1_places"
DEFAULT_DATA_FILE = r"C:\Users\ubter\IdeaProjects\kasguide\places\places-data.js"

ID_REGEX = re.compile(r"\bid\s*:\s*['\"]([^'\"]+)['\"]")
IMAGE_EXTS = {".jpg", ".jpeg", ".png", ".webp", ".JPG", ".JPEG", ".PNG", ".WEBP"}


def is_slug(name: str) -> bool:
    return bool(re.fullmatch(r"[a-z0-9]+(?:-[a-z0-9]+)*", name))


def pad3(n: int) -> str:
    return str(n).zfill(3)


def extract_ids_from_places_data(js_path: str) -> List[str]:
    if not os.path.exists(js_path):
        return []
    with open(js_path, "r", encoding="utf-8") as f:
        content = f.read()
    ids = ID_REGEX.findall(content)
    return sorted(set(ids))


def list_image_files(folder: str) -> List[str]:
    files = []
    for name in os.listdir(folder):
        p = os.path.join(folder, name)
        if os.path.isfile(p):
            _, ext = os.path.splitext(name)
            if ext in IMAGE_EXTS:
                files.append(name)
    files.sort(key=lambda x: x.lower())
    return files


@dataclass
class FolderReport:
    slug: str
    image_count_before: int
    renamed: int
    skipped_existing: int
    errors: int
    note: str = ""


def create_place_folders(base_dir: str, ids: List[str]) -> Tuple[int, int, List[str]]:
    os.makedirs(base_dir, exist_ok=True)
    created = 0
    skipped = 0
    bad_ids = []

    for pid in ids:
        if not is_slug(pid):
            bad_ids.append(pid)
            continue
        folder_path = os.path.join(base_dir, pid)
        if os.path.exists(folder_path):
            skipped += 1
        else:
            os.makedirs(folder_path, exist_ok=True)
            created += 1

    return created, skipped, bad_ids


def rename_in_place(folder: str, slug: str, limit: int = 999) -> FolderReport:
    """
    Aynı klasör içinde rename yapar:
      <slug>-001.jpg, <slug>-002.jpg, ...
    Dosyaları önce tmp isimlere alıp sonra final isimlere çevirir (çakışma güvenli).
    """
    files = list_image_files(folder)
    before = len(files)
    renamed = 0
    skipped = 0
    errors = 0

    if before == 0:
        return FolderReport(slug, 0, 0, 0, 0, note="No images")

    files = files[:limit]

    # 1) geçici isimlere çevir
    tmp_paths = []
    for i, filename in enumerate(files, start=1):
        src = os.path.join(folder, filename)
        _, ext = os.path.splitext(filename)
        ext = ext.lower()
        tmp = os.path.join(folder, f"__tmp__{slug}__{pad3(i)}{ext}")
        try:
            os.rename(src, tmp)
            tmp_paths.append((tmp, ext))
        except Exception:
            errors += 1

    # 2) final isimlere çevir (aynı klasörde)
    for idx, (tmp_path, ext) in enumerate(tmp_paths, start=1):
        target_name = f"{slug}-{pad3(idx)}{ext}"
        target_path = os.path.join(folder, target_name)

        if os.path.exists(target_path):
            # hedef isim zaten varsa çakışmasın diye tmp'yi geri koy
            skipped += 1
            try:
                # benzersiz bir adla bırakalım
                fallback = os.path.join(folder, f"{slug}-{pad3(idx)}-dup{ext}")
                if not os.path.exists(fallback):
                    os.rename(tmp_path, fallback)
                else:
                    # son çare: tmp adıyla kalsın
                    pass
            except Exception:
                errors += 1
            continue

        try:
            os.rename(tmp_path, target_path)
            renamed += 1
        except Exception:
            errors += 1

    note = "OK" if errors == 0 else "Completed with errors"
    return FolderReport(slug, before, renamed, skipped, errors, note=note)


def process_all_folders(base_dir: str, min_required: int = 5) -> Tuple[List[FolderReport], List[str]]:
    reports: List[FolderReport] = []
    low_photo_slugs: List[str] = []

    if not os.path.isdir(base_dir):
        raise FileNotFoundError(f"Base dir not found: {base_dir}")

    slugs = []
    for name in os.listdir(base_dir):
        p = os.path.join(base_dir, name)
        if os.path.isdir(p) and is_slug(name):
            slugs.append(name)
    slugs.sort()

    for slug in slugs:
        folder = os.path.join(base_dir, slug)
        count_before = len(list_image_files(folder))
        if count_before < min_required:
            low_photo_slugs.append(slug)

        rep = rename_in_place(folder, slug)
        reports.append(rep)

    return reports, low_photo_slugs


# -----------------------------
# GUI (optional)
# -----------------------------
def run_gui():
    import tkinter as tk
    from tkinter import filedialog, messagebox, scrolledtext

    root = tk.Tk()
    root.title("Kaş Guide Photo Folder Renamer")

    base_var = tk.StringVar(value=DEFAULT_BASE_DIR)
    data_var = tk.StringVar(value=DEFAULT_DATA_FILE)
    min_var = tk.StringVar(value="5")

    def log(msg: str):
        output.configure(state="normal")
        output.insert(tk.END, msg + "\n")
        output.see(tk.END)
        output.configure(state="disabled")

    def pick_base():
        d = filedialog.askdirectory(title="Select assets/1_places folder")
        if d:
            base_var.set(d)

    def pick_data():
        f = filedialog.askopenfilename(title="Select places-data.js", filetypes=[("JS files", "*.js"), ("All files", "*.*")])
        if f:
            data_var.set(f)

    def do_create_folders():
        base_dir = base_var.get().strip()
        data_file = data_var.get().strip()
        ids = extract_ids_from_places_data(data_file)
        if not ids:
            messagebox.showerror("Error", f"No ids found or file missing:\n{data_file}")
            return
        created, skipped, bad = create_place_folders(base_dir, ids)
        log(f"[Create folders] base={base_dir}")
        log(f"Created: {created} | Existing: {skipped}")
        if bad:
            log(f"Bad IDs ignored:\n" + "\n".join(bad))

    def do_process():
        base_dir = base_var.get().strip()
        try:
            min_required = int(min_var.get().strip())
        except Exception:
            min_required = 5

        reports, low = process_all_folders(base_dir, min_required=min_required)
        total_renamed = sum(r.renamed for r in reports)
        total_skipped = sum(r.skipped_existing for r in reports)
        total_errors = sum(r.errors for r in reports)

        log(f"[Process rename] base={base_dir}")
        log(f"Renamed: {total_renamed} | Skipped: {total_skipped} | Errors: {total_errors}")

        log(f"\nFolders with < {min_required} photos (before rename): {len(low)}")
        if low:
            log(" - " + "\n - ".join(low))

        messagebox.showinfo("Done", "Processing completed. Check the log.")

    frame = tk.Frame(root, padx=10, pady=10)
    frame.pack(fill="both", expand=True)

    tk.Label(frame, text="Base folder (assets/1_places):").grid(row=0, column=0, sticky="w")
    tk.Entry(frame, textvariable=base_var, width=70).grid(row=1, column=0, sticky="we")
    tk.Button(frame, text="Browse...", command=pick_base).grid(row=1, column=1, padx=5)

    tk.Label(frame, text="places-data.js (for folder creation):").grid(row=2, column=0, sticky="w", pady=(10, 0))
    tk.Entry(frame, textvariable=data_var, width=70).grid(row=3, column=0, sticky="we")
    tk.Button(frame, text="Browse...", command=pick_data).grid(row=3, column=1, padx=5)

    tk.Label(frame, text="Min required photos per place folder:").grid(row=4, column=0, sticky="w", pady=(10, 0))
    tk.Entry(frame, textvariable=min_var, width=10).grid(row=5, column=0, sticky="w")

    btns = tk.Frame(frame)
    btns.grid(row=6, column=0, columnspan=2, sticky="w", pady=(10, 10))
    tk.Button(btns, text="1) Create folders", command=do_create_folders).pack(side="left", padx=(0, 10))
    tk.Button(btns, text="2) Rename in place + Report", command=do_process).pack(side="left")

    output = scrolledtext.ScrolledText(frame, height=18, state="disabled")
    output.grid(row=7, column=0, columnspan=2, sticky="nsew")

    frame.columnconfigure(0, weight=1)
    frame.rowconfigure(7, weight=1)

    root.mainloop()


# -----------------------------
# CLI main
# -----------------------------
def main():
    parser = argparse.ArgumentParser(description="Create place folders + rename photos inside each folder (no moving).")
    parser.add_argument("--base", default=DEFAULT_BASE_DIR, help="assets/1_places path")
    parser.add_argument("--data", default=DEFAULT_DATA_FILE, help="places-data.js path")
    parser.add_argument("--min", type=int, default=5, help="min required photos per place folder")
    parser.add_argument("--create-folders", action="store_true", help="create folders from places-data.js ids")
    parser.add_argument("--process", action="store_true", help="rename photos inside each folder + report")
    parser.add_argument("--gui", action="store_true", help="run GUI")
    args = parser.parse_args()

    if args.gui:
        run_gui()
        return

    if args.create_folders:
        ids = extract_ids_from_places_data(args.data)
        if not ids:
            print(f"❌ No ids found or file missing: {args.data}")
            return
        created, skipped, bad = create_place_folders(args.base, ids)
        print(f"[Create folders] base={args.base}")
        print(f"Created: {created} | Existing: {skipped}")
        if bad:
            print("Bad IDs ignored:")
            for b in bad:
                print(f" - {b}")

    if args.process:
        reports, low = process_all_folders(args.base, min_required=args.min)
        total_renamed = sum(r.renamed for r in reports)
        total_skipped = sum(r.skipped_existing for r in reports)
        total_errors = sum(r.errors for r in reports)

        print(f"[Process rename] base={args.base}")
        print(f"Renamed: {total_renamed} | Skipped: {total_skipped} | Errors: {total_errors}")
        print(f"\nFolders with < {args.min} photos (before rename): {len(low)}")
        for s in low:
            print(f" - {s}")

    if not args.create_folders and not args.process and not args.gui:
        print("Nothing to do. Examples:")
        print("  python kas_photos_manager.py --create-folders")
        print("  python kas_photos_manager.py --process --min 5")
        print("  python kas_photos_manager.py --gui")


if __name__ == "__main__":
    main()
