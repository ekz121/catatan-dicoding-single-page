# 📝 Aplikasi Catatan Pribadi

<img width="1559" height="971" alt="Screenshot 2025-09-02 210959" src="https://github.com/user-attachments/assets/c183d389-3c55-43e1-80c7-0e963176a4da" />
<img width="1396" height="631" alt="Screenshot 2025-09-02 211141" src="https://github.com/user-attachments/assets/e7b290ff-c858-4838-8b3b-c0c09a69281a" />
<img width="1067" height="650" alt="Screenshot 2025-09-02 211204" src="https://github.com/user-attachments/assets/e0a6fd0b-5b25-498c-809d-0364c28d861c" />



Aplikasi web React untuk mengelola catatan pribadi dengan fitur lengkap dan antarmuka yang modern.

## ✨ Fitur

### Kriteria Utama
- ✅ **Menampilkan Daftar Catatan** - Menggunakan state component dan array map
- ✅ **Menambahkan Catatan** - Form dengan controlled component dan validasi
- ✅ **Menghapus Catatan** - Tombol hapus dengan conditional rendering

### Kriteria Opsional
- ✅ **Pencarian Catatan** - Filter berdasarkan judul dengan controlled component
- ✅ **Limit Karakter Judul** - Maksimal 50 karakter dengan counter
- ✅ **Arsip Catatan** - Fitur arsip/unarsip dengan tampilan terpisah

## 🚀 Cara Menjalankan

1. Install dependencies:
   ```bash
   npm install
   ```

2. Jalankan aplikasi:
   ```bash
   npm run dev
   ```

3. Buka browser di `http://localhost:5173`

## 🏗️ Struktur Proyek

```
src/
├── components/
│   ├── PersonalNotesApp.jsx    # Komponen utama
│   ├── NotesList.jsx           # Daftar catatan
│   ├── NotesItem.jsx           # Item catatan
│   ├── NotesInput.jsx          # Form input
│   └── SearchBar.jsx           # Pencarian
├── pages/
│   ├── AddPage.jsx             # Halaman tambah catatan
│   ├── ArchivePage.jsx         # Halaman arsip
│   ├── DetailPage.jsx          # Halaman detail catatan
│   ├── HomePage.jsx            # Halaman utama
│   └── NotFoundPage.jsx        # Halaman 404
├── styles/
│   └── style.css               # Styling lengkap
├── utils/
│   ├── index.js                # Utility functions
│   └── local-data.js           # Data lokal
└── index.jsx                   # Entry point
```

## 🎨 Fitur UI/UX

- 🌙 **Tema Gelap** - Desain modern dengan gradien
- 📱 **Responsif** - Optimal di semua ukuran layar
- ✨ **Animasi Smooth** - Transisi dan hover effects
- 🎯 **User Friendly** - Interface intuitif dengan emoji icons

## 📋 Format Data Catatan

```javascript
{
  id: number,
  title: string,
  body: string,
  archived: boolean,
  createdAt: string
}
```

## 🛠️ Teknologi

- React 19.1.1
- Vite (Build tool)
- CSS3 dengan Flexbox/Grid
- JavaScript ES6+

## 📦 Build Production

```bash
npm run build
```

File hasil build akan tersedia di folder `dist/`.
