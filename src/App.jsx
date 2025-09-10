import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CardProduk from './components/CardProduk';
import ContactForm from './components/ContactForm';
import TampilkanGambar from './components/TampilkanGambar';
import Testimoni from './components/Testimoni';
import './App.css';

const App = () => {
  const [halamanAktif, setHalamanAktif] = useState("Home");
  const [theme, setTheme] = useState("light");

  const renderKonten = () => {
    switch (halamanAktif) {
      case "Home":
        return (
          <div className="content-container">
            <h2 className="content-title">Produk Unggulan</h2>
            <div className="card-list">
              <CardProduk nama="Smartwatch X1" harga="1.500.000" deskripsi="Smartwatch dengan fitur lengkap dan baterai tahan lama." />
              <CardProduk nama="Wireless Earbuds" harga="850.000" deskripsi="Audio jernih dengan desain ergonomis dan noise-cancellation." />
              <CardProduk nama="Portable Power Bank" harga="300.000" deskripsi="Kapasitas besar 20000mAh, pengisian cepat." />
            </div>
          </div>
        );
      case "Tentang":
        return (
          <div className="content-container">
            <h2 className="content-title">Tentang Zzzhop</h2>
            <p className="about-text">
              Zzzhop adalah platform e-commerce yang berkomitmen menyediakan produk elektronik berkualitas tinggi dengan harga terjangkau.
            </p>
            <TampilkanGambar />
          </div>
        );
      case "Kontak":
        return (
          <div className="content-container">
            <ContactForm />
            <div className="testimoni-section">
              <h2 className="content-title">Apa Kata Mereka?</h2>
              <div className="testimoni-list">
                <Testimoni nama="Sarah A." isiTestimoni="Pengiriman super cepat dan produknya sesuai deskripsi. Sangat puas!" />
                <Testimoni nama="Bima P." isiTestimoni="Website mudah digunakan, dan pilihan produknya sangat beragam. Rekomendasi!" />
                <Testimoni nama="Citra D." isiTestimoni="Layanan pelanggan responsif. Pengalaman belanja yang menyenangkan." />
              </div>
            </div>
          </div>
        );
      default:
        return <p>Halaman tidak ditemukan.</p>;
    }
  };

  return (
    <div className={`app-container theme-${theme}`}>
      <Navbar setHalamanAktif={setHalamanAktif} onThemeChange={setTheme} />
      <main className="main-content">
        {renderKonten()}
      </main>
    </div>
  );
};

export default App;