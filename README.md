# Find Yourself – Minat & Bakat Explorer

Proyek ini adalah aplikasi prototype yang membantu siswa SMP menemukan minat dan bakat mereka. Struktur file di dalam folder:

- `/index.html` — Opening screen (animasi fade-in)
- `/index.css`, `/index.js` — Gaya dan skrip opening
- `/test/tes.html`, `/test/tes.css`, `/test/tes.js` — Halaman tes minat & bakat (progress, transisi, hasil)
- `/quest/quest.html`, `/quest/quest.css`, `/quest/quest.js` — Quest harian (random/deterministic), level & XP
- `/board/board.html`, `/board/board.css`, `/board/board.js` — Board game 6x6, dadu, pawn dan tantangan
- `/assets/` — folder kosong untuk gambar/icon bila diperlukan

## Cara menjalankan di Visual Studio Code (Live Server)

1. Buka folder project di VS Code: `File` → `Open Folder...` → pilih `d:\\JOEY\\Project JOEY`.
2. Install ekstensi **Live Server** (Ctrl+Shift+X → cari "Live Server" → Install).
3. Buka `index.html` di editor.
4. Klik kanan pada editor dan pilih **Open with Live Server**. Browser akan membuka aplikasi.

Alternatif (tanpa Live Server): buka PowerShell di folder proyek dan jalankan:

```powershell
python -m http.server 8000
```

Lalu buka `http://localhost:8000` di browser.

## Singkat fitur tiap halaman
- Opening: desain modern, tombol "Mulai" ke halaman tes.
- Tes: 7 kategori, 8 pertanyaan, progress bar, transisi, hasil dengan emoji dan rekomendasi. Menyimpan `fy_topCategory` di `localStorage`.
- Quest: menghasilkan quest harian berdasarkan kategori teratas (deterministic per tanggal) atau random, simpan level/XP di `localStorage`.
- Board: papan 6x6, tombol lempar dadu, gerak pion, dan popup tantangan. Menyimpan posisi terakhir di `localStorage`.

## Saran pengembangan lanjutan
- Tambah validasi atau skor lebih halus (nilai berat untuk jawaban). 
- Tambah animasi dan suara untuk feedback (kedisiplinan UX).
- Simpan riwayat quest & hasil kuis ke backend supaya siswa dapat melihat perkembangan.
- Tambah halaman admin untuk mengedit daftar quest dan tantangan.
