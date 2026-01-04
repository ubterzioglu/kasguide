
# places_sync_gui.py
# Kaş Guide – Places Sync (GUI + Backend)
# Requires: pillow (for placeholder images)

import re
import unicodedata
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
    for k,v in tr.items():
        s = s.replace(k,v)
    return s

def guess_categories(place_name: str) -> list[str]:
    n = normalize_for_match(place_name)
    bar_kw   = ["pub"," bar","meyhane","ocakbasi","cocktail","gastropub","beer"]
    cafe_kw  = ["cafe","kahve","coffee","pastane","pastanesi","patisserie","bufe"]
    beach_kw = ["beach","plaj","beach club"]
    cats = []
    if any(k in n for k in bar_kw): cats.append("bar")
    if any(k in n for k in cafe_kw): cats.append("cafe")
    if any(k in n for k in beach_kw): cats.append("beach")
    return cats if cats else ["food"]

def read_existing_ids(js_path: Path) -> set[str]:
    return set(ID_REGEX.findall(js_path.read_text(encoding="utf-8")))

def read_names(txt_path: Path) -> list[str]:
    return [l.strip() for l in txt_path.read_text(encoding="utf-8").splitlines() if l.strip()]

def append_blocks_to_allplaces(js_path: Path, blocks: str):
    content = js_path.read_text(encoding="utf-8")
    m = re.search(r"const\s+allPlaces\s*=\s*\[", content)
    if not m:
        raise RuntimeError("const allPlaces = [ bulunamadı")

    start = content.find("[", m.end()-1)
    depth = 0
    i = start
    in_s = in_d = in_b = esc = False

    while i < len(content):
        c = content[i]
        if esc:
            esc = False; i+=1; continue
        if c == "\\":
            esc = True; i+=1; continue

        if not in_d and not in_b and c=="'" and not in_s:
            in_s=True; i+=1; continue
        if in_s and c=="'":
            in_s=False; i+=1; continue

        if not in_s and not in_b and c=='"' and not in_d:
            in_d=True; i+=1; continue
        if in_d and c=='"':
            in_d=False; i+=1; continue

        if not in_s and not in_d and c=="`" and not in_b:
            in_b=True; i+=1; continue
        if in_b and c=="`":
            in_b=False; i+=1; continue

        if in_s or in_d or in_b:
            i+=1; continue

        if c=="[":
            depth+=1
        elif c=="]":
            depth-=1
            if depth==0:
                end=i; break
        i+=1
    else:
        raise RuntimeError("allPlaces kapanışı bulunamadı")

    js_path.with_suffix(".js.bak").write_text(content, encoding="utf-8")
    js_path.write_text(content[:end] + blocks + content[end:], encoding="utf-8")

def create_placeholders(folder: Path, pid: str, force=False):
    from PIL import Image, ImageDraw, ImageFont
    size=(1600,1066); bg=(245,245,245); created=0
    for i in range(1,5):
        f=folder/f"{pid}-{i:03d}.jpg"
        if f.exists() and not force: continue
        img=Image.new("RGB",size,bg)
        d=ImageDraw.Draw(img)
        d.rectangle([80,80,1520,986],outline=(180,180,180),width=6)
        txt=f"{pid}\nPLACEHOLDER {i:03d}"
        try: font=ImageFont.truetype("arial.ttf",60)
        except: font=ImageFont.load_default()
        d.text((400,500),txt,fill=(120,120,120),font=font)
        img.save(f,"JPEG",quality=88); created+=1
    return created

def build_block(pid,title,cats):
    cats_js="["+",".join(f"'{c}'" for c in cats)+"]"
    title=title.replace("'","")
    return f""",
{{
  id: '{pid}',
  badgeId: 'new',
  title: '{title}',
  description: 'TODO',
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
  longText: `TODO`
}}
"""

class App(tk.Tk):
    def __init__(self):
        super().__init__()
        self.title("Kaş Guide – Places Sync")
        self.geometry("700x420")
        self.txt=tk.StringVar(); self.js=tk.StringVar(); self.base=tk.StringVar()
        self.apply=tk.BooleanVar(value=True)
        self.ph=tk.BooleanVar(value=True)
        self.force=tk.BooleanVar(value=False)
        self.ui()

    def ui(self):
        f=ttk.Frame(self); f.pack(fill="x",padx=10,pady=10)
        self.row(f,"257.txt",self.txt,0)
        self.row(f,"places-data.js",self.js,1)
        self.row(f,"assets/1_places",self.base,2,dir=True)
        ttk.Checkbutton(self,text="JS'e ekle",variable=self.apply).pack(anchor="w",padx=10)
        ttk.Checkbutton(self,text="Placeholder JPG oluştur",variable=self.ph).pack(anchor="w",padx=10)
        ttk.Checkbutton(self,text="Varsa üstüne yaz",variable=self.force).pack(anchor="w",padx=10)
        ttk.Button(self,text="Çalıştır",command=self.run).pack(pady=10)

    def row(self,parent,label,var,row,dir=False):
        ttk.Label(parent,text=label).grid(row=row,column=0,sticky="w")
        ttk.Entry(parent,textvariable=var,width=60).grid(row=row,column=1)
        ttk.Button(parent,text="Seç",command=lambda:self.pick(var,dir)).grid(row=row,column=2)

    def pick(self,var,dir):
        p = filedialog.askdirectory() if dir else filedialog.askopenfilename()
        if p: var.set(p)

    def run(self):
        try:
            txt=Path(self.txt.get()); js=Path(self.js.get()); base=Path(self.base.get())
            if not txt.exists() or not js.exists(): raise RuntimeError("Dosyalar eksik")
            base.mkdir(parents=True,exist_ok=True)
            names=read_names(txt); existing=read_existing_ids(js)
            blocks=""
            for n in names:
                pid=slugify(n)
                if pid in existing: continue
                (base/pid).mkdir(exist_ok=True)
                if self.ph.get(): create_placeholders(base/pid,pid,self.force.get())
                blocks+=build_block(pid,n,guess_categories(n))
            if self.apply.get() and blocks: append_blocks_to_allplaces(js,blocks)
            messagebox.showinfo("OK","İşlem tamamlandı")
        except Exception as e:
            messagebox.showerror("Hata",str(e))

if __name__=="__main__":
    App().mainloop()
