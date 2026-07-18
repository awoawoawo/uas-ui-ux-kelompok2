## Task 1: Setup Foundation & Theme
**Description:** Menginisialisasi proyek dengan kerangka HTML, file CSS, file JS, dan mendefinisikan variabel CSS untuk tema (warna, tipografi) sesuai prinsip HCI dan aksesibilitas.
**Acceptance criteria:**
- [ ] File `index.html`, `css/style.css`, dan `js/app.js` terhubung dengan benar.
- [ ] Variabel CSS terdefinisi untuk primary, secondary, text, dan background colors yang memenuhi kontras WCAG AA.
- [ ] Typography menggunakan font modern yang mudah dibaca.
**Verification:**
- [ ] Buka `index.html` di browser, periksa tidak ada error di console, warna/font bisa diakses.
**Dependencies:** None
**Files likely touched:** `index.html`, `css/style.css`, `js/app.js`
**Estimated scope:** S

## Task 2: Layout Component & Navigation
**Description:** Membangun layout utama (Header/Navbar, Main Content Area, Footer) dengan navigasi responsif dan ramah keyboard.
**Acceptance criteria:**
- [ ] Navbar memiliki tautan navigasi ke halaman simulasi.
- [ ] Terdapat fitur "Skip to main content" (A11y).
- [ ] Responsif (layout menyesuaikan pada mobile screen).
**Verification:**
- [ ] Tes navigasi elemen menu hanya menggunakan tombol Tab keyboard.
**Dependencies:** Task 1
**Files likely touched:** `index.html`, `css/style.css`
**Estimated scope:** M

## Task 3: Vanilla JS SPA Routing
**Description:** Membuat sistem routing sederhana di `app.js` agar bisa berpindah antar section tanpa reload.
**Acceptance criteria:**
- [ ] Klik link navigasi menyembunyikan view yang tidak aktif dan menampilkan view yang aktif.
- [ ] Visual navigasi aktif sesuai halaman yang sedang dibuka.
**Verification:**
- [ ] Klik semua menu, pastikan konten berganti dengan cepat tanpa page refresh.
**Dependencies:** Task 2
**Files likely touched:** `index.html`, `js/app.js`, `css/style.css`
**Estimated scope:** S

## Task 4: Landing Page Implementation
**Description:** Membuat halaman depan dengan elemen hero, penjelasan fitur dashboard, dan CTA (Call to Action).
**Acceptance criteria:**
- [ ] Hero text jelas dengan tombol CTA "Mulai Simulasi".
- [ ] Terdapat micro-animation saat hover tombol.
**Verification:**
- [ ] Tombol CTA berfungsi mengarahkan view ke halaman Kuesioner.
**Dependencies:** Task 3
**Files likely touched:** `index.html`, `css/style.css`
**Estimated scope:** S

## Task 5: Questionnaire Page Implementation
**Description:** Membangun antarmuka kuesioner dengan form interaktif dan progress bar yang dapat diakses dengan mudah (UCD).
**Acceptance criteria:**
- [ ] Menampilkan 3-5 pertanyaan pilihan ganda.
- [ ] Terdapat indikator progress visual.
- [ ] Area tap/click pada pilihan jawaban besar (memudahkan pengguna di mobile/touch screen).
- [ ] Jawaban tersimpan di memori/localStorage.
**Verification:**
- [ ] Pengguna bisa mengisi form sampai selesai dan data form valid.
**Dependencies:** Task 4
**Files likely touched:** `index.html`, `css/style.css`, `js/app.js`
**Estimated scope:** M

## Task 6: Simulation Logic Engine
**Description:** Menulis algoritma JavaScript untuk memproses skoring jawaban dan mencocokkan profil ke prodi yang relevan.
**Acceptance criteria:**
- [ ] Mock data program studi dan kriteria tersedia di `app.js`.
- [ ] Terdapat fungsi `calculateRecommendation(answers)` yang mereturn top 3 prodi.
**Verification:**
- [ ] Eksekusi fungsi dengan hardcoded data, pastikan mengembalikan 3 hasil.
**Dependencies:** Task 5
**Files likely touched:** `js/app.js`
**Estimated scope:** S

## Task 7: Recommendation Page Implementation
**Description:** Membuat UI halaman rekomendasi (3 card terbaik) dengan efek animasi masuk.
**Acceptance criteria:**
- [ ] 3 card program studi dimunculkan sesuai hasil dari Task 6.
- [ ] Card memiliki animasi saat muncul.
- [ ] Tiap card memiliki CTA "Lihat Detail/Bandingkan".
**Verification:**
- [ ] Selesaikan flow kuesioner, periksa apakah hasil rekomendasi tampil rapi.
**Dependencies:** Task 6
**Files likely touched:** `index.html`, `css/style.css`, `js/app.js`
**Estimated scope:** M

## Task 8: Detail / Comparison Page Implementation
**Description:** Antarmuka tabel/komparasi untuk melihat spesifikasi dari prodi yang dipilih dengan penekanan pada scannability.
**Acceptance criteria:**
- [ ] Menampilkan detail metrik (Biaya, Prospek, Lama Kuliah, dsb).
- [ ] Informasi disajikan dengan rapi, tabel atau kolom yang sejajar (Grid system).
**Verification:**
- [ ] Memeriksa UI apakah data komparatif mudah untuk di-scan secara visual.
**Dependencies:** Task 7
**Files likely touched:** `index.html`, `css/style.css`, `js/app.js`
**Estimated scope:** M

## Task 9: Summary Page Implementation
**Description:** Halaman akhir yang merangkum keseluruhan data simulasi calon mahasiswa.
**Acceptance criteria:**
- [ ] Tampilan ringkas berisi hasil akhir.
- [ ] Terdapat opsi "Ulangi Simulasi".
**Verification:**
- [ ] "Ulangi Simulasi" dapat menghapus state lama dan kembali ke awal.
**Dependencies:** Task 8
**Files likely touched:** `index.html`, `css/style.css`, `js/app.js`
**Estimated scope:** S

## Task 10: UX Polish & Accessibility Audit
**Description:** Menambahkan detail UCD terakhir, animasi transisi antar view, dan finalisasi aksesibilitas.
**Acceptance criteria:**
- [ ] Transisi halaman (SPA) memiliki animasi fade halus.
- [ ] Semua input dan tombol memiliki elemen fokus (`:focus-visible`).
- [ ] ARIA roles/labels ditambahkan ke area interaktif yang tidak standar.
**Verification:**
- [ ] Lulus pengujian navigasi hanya-keyboard dan kontras minimal 4.5:1 untuk normal text.
**Dependencies:** Task 9
**Files likely touched:** `index.html`, `css/style.css`, `js/app.js`
**Estimated scope:** M
