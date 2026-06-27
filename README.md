# 🎒 E-Budak PWA — Cara Deploy ke GitHub Pages

## Fail dalam folder ini:
- `index.html` — Sistem utama
- `manifest.json` — Konfigurasi PWA
- `sw.js` — Service Worker (offline support)
- `icon-192.png` — Ikon app
- `icon-512.png` — Ikon app (besar)

---

## Langkah-langkah Deploy

### 1. Buat akaun GitHub
Pergi ke https://github.com → Sign Up (percuma)

### 2. Buat Repository baharu
- Klik butang **"New"** (hijau)
- Nama repository: `ebudak`
- Pilih **Public**
- Klik **"Create repository"**

### 3. Upload semua fail
- Dalam halaman repository, klik **"uploading an existing file"**
- Drag & drop SEMUA fail dalam folder ini
- Klik **"Commit changes"**

### 4. Aktifkan GitHub Pages
- Pergi ke **Settings** (tab atas)
- Klik **Pages** (menu kiri)
- Dalam "Source", pilih **Deploy from a branch**
- Branch: **main**, Folder: **/ (root)**
- Klik **Save**

### 5. Tunggu 1-2 minit
URL awak akan jadi:
```
https://USERNAME.github.io/ebudak/
```
(ganti USERNAME dengan nama GitHub awak)

---

## Cara Install sebagai App (Android)

1. Buka URL di atas dalam **Chrome**
2. Tunggu beberapa saat
3. Akan muncul banner **"Add to Home Screen"** atau klik ⋮ → "Add to Home Screen"
4. App akan tersimpan di home screen seperti app biasa!

## Cara Install sebagai App (iPhone/iPad)

1. Buka URL dalam **Safari**
2. Klik butang Share (kotak dengan anak panah ke atas)
3. Pilih **"Add to Home Screen"**
4. Klik **Add**

---

## PENTING: Edit manifest.json

Jika nama GitHub awak bukan `ebudak`, ubah dalam `manifest.json`:
```json
"start_url": "/NAMA-REPO-AWAK/",
"scope": "/NAMA-REPO-AWAK/",
```

Dan dalam `sw.js`, ubah semua `/ebudak/` kepada `/NAMA-REPO-AWAK/`

---

## Kata Laluan Guru
Default: `guru123`
(Boleh ditukar dalam menu Tetapan)
