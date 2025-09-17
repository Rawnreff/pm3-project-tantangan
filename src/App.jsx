// src/App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CardProduk from './components/CardProduk';
import ContactForm from './components/ContactForm';
import TampilkanGambar from './components/TampilkanGambar';
import Testimoni from './components/Testimoni';
import produkData from './data/produkData';
import './App.css';

const App = () => {
  const [halamanAktif, setHalamanAktif] = useState("Home");
  const [theme, setTheme] = useState("light");
  const [showPopup, setShowPopup] = useState(false);
  const [produkTerpilih, setProdukTerpilih] = useState("");

  const handleBuy = (namaProduk) => {
    setProdukTerpilih(namaProduk);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setProdukTerpilih("");
  };

  const renderKonten = () => {
    switch (halamanAktif) {
      case "Home":
        return (
          <div className="home-container">
            <section className="hero-section">
              <div className="hero-content">
                <h1>Selamat Datang di Zzzhop</h1>
                <p>Temukan produk elektronik terbaik dengan harga terjangkau</p>
                <button className="cta-button" onClick={() => setHalamanAktif("Kontak")}>
                  Hubungi Kami
                </button>
              </div>
            </section>
            
            <section className="featured-products">
              <h2 className="section-title">Produk Unggulan</h2>
              <div className="products-grid">
                {produkData.map(produk => (
                  <CardProduk
                    key={produk.id}
                    nama={produk.nama}
                    harga={produk.harga}
                    deskripsi={produk.deskripsi}
                    onBuy={handleBuy}
                  />
                ))}
              </div>
            </section>
          </div>
        );
      case "Tentang":
        return (
          <div className="about-container">
            <section className="about-hero">
              <h1>Tentang Zzzhop</h1>
              <p className="about-subtitle">
                Platform e-commerce terpercaya untuk produk elektronik berkualitas
              </p>
            </section>
            
            <section className="about-content">
              <div className="about-text">
                <p>
                  Zzzhop adalah platform e-commerce yang berkomitmen menyediakan produk 
                  elektronik berkualitas tinggi dengan harga terjangkau. Sejak didirikan 
                  pada tahun 2020, kami telah melayani ribuan pelanggan dengan berbagai 
                  kebutuhan elektronik mereka.
                </p>
                <p>
                  Kami percaya bahwa teknologi harus dapat diakses oleh semua orang, 
                  itulah mengapa kami selalu berusaha memberikan produk terbaik dengan 
                  harga yang kompetitif.
                </p>
              </div>
              
              <div className="about-image">
                <TampilkanGambar />
              </div>
            </section>
          </div>
        );
      case "Kontak":
        return (
          <div className="contact-container">
            <section className="contact-hero">
              <h1>Hubungi Kami</h1>
              <p>Kami siap membantu Anda 24/7</p>
            </section>
            
            <section className="contact-content">
              <div className="contact-form-section">
                <ContactForm />
              </div>
              
              <div className="testimoni-section">
                <h2 className="section-title">Apa Kata Pelanggan Kami?</h2>
                <div className="testimoni-grid">
                  <Testimoni 
                    nama="Sarah A." 
                    isiTestimoni="Pengiriman super cepat dan produknya sesuai deskripsi. Sangat puas!" 
                  />
                  <Testimoni 
                    nama="Bima P." 
                    isiTestimoni="Website mudah digunakan, dan pilihan produknya sangat beragam. Rekomendasi!" 
                  />
                  <Testimoni 
                    nama="Citra D." 
                    isiTestimoni="Layanan pelanggan responsif. Pengalaman belanja yang menyenangkan." 
                  />
                </div>
              </div>
            </section>
          </div>
        );
      default:
        return <p>Halaman tidak ditemukan.</p>;
    }
  };

  return (
    <div className={`app theme-${theme}`}>
      <Navbar 
        halamanAktif={halamanAktif} 
        setHalamanAktif={setHalamanAktif} 
        onThemeChange={setTheme} 
        theme={theme}
      />
      
      <main className="main-content">
        {renderKonten()}
      </main>
      
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Zzzhop</h3>
            <p>Platform e-commerce terpercaya untuk produk elektronik</p>
          </div>
          <div className="footer-section">
            <h4>Tautan Cepat</h4>
            <ul>
              <li><button onClick={() => setHalamanAktif("Home")}>Home</button></li>
              <li><button onClick={() => setHalamanAktif("Tentang")}>Tentang</button></li>
              <li><button onClick={() => setHalamanAktif("Kontak")}>Kontak</button></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Kontak</h4>
            <p>Email: info@zzzhop.com</p>
            <p>Telepon: (62) 123-4567-8910</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Zzzhop. All rights reserved.</p>
        </div>
      </footer>
      
      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <div className="popup-header">
              <h3>Pembelian Berhasil!</h3>
              <button className="popup-close" onClick={closePopup}>×</button>
            </div>
            <div className="popup-body">
              <div className="success-icon">🎉</div>
              <p>Terima kasih telah membeli <strong>{produkTerpilih}</strong>.</p>
              <p>Pesanan Anda akan segera kami proses.</p>
            </div>
            <div className="popup-footer">
              <button className="btn-primary" onClick={closePopup}>
                Lanjutkan Belanja
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;