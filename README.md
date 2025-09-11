# Website Portofolio Pribadi - Faiz Fauzan

Ini adalah repositori untuk website portofolio pribadi saya, yang dirancang untuk menampilkan proyek, pengalaman, dan keahlian saya di bidang pengembangan perangkat lunak. Website ini dibangun menggunakan teknologi web modern untuk memberikan pengalaman pengguna yang cepat, responsif, dan interaktif.

## ✨ Fitur Utama

  * **Hero Section Dinamis**: Bagian pembuka yang menarik dengan efek animasi mengetik untuk menampilkan peran dan minat.
  * **Navigasi Sticky & Mulus**: Navbar yang tetap terlihat saat halaman di-scroll, dengan link yang mengarahkan ke setiap bagian secara halus (*smooth scroll*).
  * **Bagian Komprehensif**: Terdiri dari bagian "About Me", "Experience", dan "Projects" untuk memberikan gambaran lengkap tentang profil saya.
  * **Filter Pengalaman Interaktif**: Pengguna dapat memfilter daftar pengalaman berdasarkan kategori seperti "Organizational", "Internship", atau "Work".
  * **Micro-animations**: Efek *hover* yang halus pada tombol, kartu, dan ikon untuk meningkatkan pengalaman visual.
  * **Desain Responsif**: Tampilan yang dioptimalkan untuk berbagai ukuran layar, dari desktop hingga mobile.

## 🚀 Teknologi yang Digunakan

Proyek ini dibangun menggunakan tumpukan teknologi modern yang berfokus pada performa dan pengalaman pengembang.

  * **Framework**: [React.js](https://react.dev/)
  * **Build Tool**: [Vite](https://vitejs.dev/)
  * **Styling**: [Tailwind CSS](https://tailwindcss.com/)
  * **Animasi**: [GSAP (GreenSock Animation Platform)](https://gsap.com/) untuk animasi teks.
  * **Ikon**: [React Icons](https://react-icons.github.io/react-icons/)
  * **Deployment**: Dihosting di [Vercel](https://vercel.com/).

## 🛠️ Instalasi dan Menjalankan Proyek

Untuk menjalankan proyek ini di lingkungan lokal Anda, ikuti langkah-langkah berikut:

1.  **Clone repositori ini:**

    ```bash
    git clone https://github.com/faizfznn/website-portofolio.git
    ```

2.  **Masuk ke direktori proyek:**

    ```bash
    cd website-portofolio
    ```

3.  **Instal semua dependencies:**

    ```bash
    npm install
    ```

4.  **Jalankan development server:**

    ```bash
    npm run dev
    ```

    Buka [http://localhost:5173](https://www.google.com/search?q=http://localhost:5173) (atau port lain yang ditampilkan di terminal) di browser Anda.

## 📁 Struktur Folder

Proyek ini menggunakan struktur folder berbasis komponen untuk menjaga keterbacaan dan skalabilitas kode.

```
/
├── public/              # Aset statis seperti gambar dan favicon
├── src/
│   ├── assets/          # Gambar dan aset yang digunakan di dalam komponen
│   ├── component/       # Komponen-komponen React yang dapat digunakan kembali
│   │   ├── Navbar.jsx
│   │   ├── CardProject.jsx
│   │   ├── Button.jsx
│   │   └── ...
│   ├── App.jsx          # Komponen utama yang mengatur layout halaman
│   ├── App.css          # Style global
│   ├── index.css        # Konfigurasi dasar Tailwind & font
│   └── main.jsx         # Titik masuk aplikasi React
├── .gitignore           # File yang diabaikan oleh Git
├── package.json         # Daftar dependensi dan skrip proyek
└── vite.config.js       # Konfigurasi untuk Vite
```
