# Implementation Plan: Dashboard Simulasi Pemilihan Program Studi

## Overview
Proyek ini adalah pembuatan dashboard berbasis web (HTML, CSS, Vanilla JavaScript) untuk membantu calon mahasiswa baru dalam mensimulasikan dan memilih program studi yang sesuai dengan minat dan bakat mereka. Dashboard ini akan terdiri dari 5 halaman utama (Landing, Kuesioner, Rekomendasi, Detail/Perbandingan, dan Ringkasan) dan akan dibangun dengan mengedepankan prinsip User-Centered Design (UCD), Human-Computer Interaction (HCI), dan Accessibility Design (seperti kontras warna, navigasi keyboard, dan ARIA labels). Desain akan dibuat menarik, modern, dan interaktif.

## Architecture Decisions
- **Teknologi**: HTML5, CSS3 murni (menggunakan custom properties/variabel untuk tema), Vanilla JavaScript. Tidak ada framework eksternal untuk mengurangi kompleksitas dan memastikan performa tinggi.
- **Struktur File**: 
  - File HTML: Pendekatan Single Page Application (SPA) menggunakan satu file `index.html` dengan Vanilla JS router. SPA memberikan feel interaktif dan mulus layaknya sebuah "dashboard".
  - `css/style.css` untuk styling global dan komponen UI.
  - `js/app.js` untuk state management, simulasi logika, dan DOM manipulation.
- **State Management**: Menyimpan jawaban kuesioner dan hasil rekomendasi di object JS atau `localStorage` agar data bisa dilempar antar view.
- **Aksesibilitas (A11y)**: Menggunakan semantic HTML, fokus pada kontras warna WCAG AA, navigasi keyboard penuh, dan penggunaan tag WAI-ARIA yang sesuai.
- **Responsivitas**: Desain *Mobile First* menggunakan CSS Grid dan Flexbox.

## Task List

### Phase 1: Foundation (Setup, Tema, dan Navigasi Dasar)
- [ ] Task 1: Setup struktur direktori, file HTML dasar, reset CSS, dan variabel tema (warna, tipografi).
- [ ] Task 2: Buat komponen layout utama (Navbar/Sidebar responsif, Footer) dan setup accessibility standar (skip to content link).
- [ ] Task 3: Implementasi sistem routing SPA menggunakan Vanilla JS (mengganti konten aktif tanpa reload halaman).

### Checkpoint: Foundation
- [ ] Struktur layout dan navigasi berfungsi baik di desktop maupun mobile, lulus tes navigasi keyboard dasar.

### Phase 2: Core Features (Landing & Questionnaire)
- [ ] Task 4: Desain dan implementasi halaman Landing (Hero section, CTA button, animasi mikro).
- [ ] Task 5: Implementasi halaman Kuesioner (Form interaktif, progress bar, state saving).

### Checkpoint: Core Features 1
- [ ] User bisa mengisi kuesioner, dan data berhasil disimpan di state/localStorage.

### Phase 3: Core Features (Recommendation & Detail)
- [ ] Task 6: Implementasi logika simulasi (skoring berdasarkan kuesioner).
- [ ] Task 7: Implementasi halaman Rekomendasi (Card UI dengan animasi untuk hasil prodi yang disarankan).
- [ ] Task 8: Implementasi halaman Detail/Perbandingan (Tabel komparasi yang mudah dibaca).

### Checkpoint: Core Features 2
- [ ] Simulasi memberikan hasil yang logis, user dapat melihat rekomendasi dan perbandingannya.

### Phase 4: Polish (Summary & UX Polish)
- [ ] Task 9: Implementasi halaman Summary (Ringkasan keseluruhan profil user, tombol Cetak/Unduh).
- [ ] Task 10: UX Polish & Accessibility Audit (Transisi halaman, tes warna kontras, hover states, fokus indikator).

### Checkpoint: Complete
- [ ] Semua flow dashboard berjalan mulus sesuai UCD dan memenuhi standar aksesibilitas dasar.

## Risks and Mitigations
| Risk | Impact | Mitigation |
|------|--------|------------|
| Logika simulasi rumit atau tidak akurat | High | Definisikan aturan scoring sederhana dan mock data statis terlebih dahulu sebelum integrasi ke UI. |
| Pengelolaan state SPA di Vanilla JS menjadi berantakan | Medium | Pisahkan logika state, data, dan render view menjadi blok fungsi yang rapi di `app.js`. |
| Gagal memenuhi standar aksesibilitas | High | Lakukan test Lighthouse di tahap akhir dan pastikan variabel warna sudah sesuai rasio kontras sejak awal. |

## Open Questions
- Apakah pendekatan SPA (Single Page Application) dalam satu file `index.html` menggunakan JavaScript untuk berganti halaman disetujui, atau Anda lebih memilih file HTML fisik terpisah (misal `landing.html`, `kuesioner.html`, dll)?
- Apakah kuesioner memiliki jumlah dan tipe pertanyaan tertentu, atau boleh saya buatkan mockup pertanyaan (misalnya 5 soal pilihan ganda) untuk keperluan simulasi?
- Apakah ada preferensi palet warna (misalnya warna biru/gelap yang modern, atau warna cerah kasual)?
