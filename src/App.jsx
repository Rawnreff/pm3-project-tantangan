import { useState } from "react";
import CardProduk from "./components/CardProduk";
import TampilkanGambar from "./components/TampilkanGambar";
import Testimoni from "./components/Testimoni";
import Navbar from "./components/Navbar";
import "./App.css";
import "./Popup.css";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [produkTerpilih, setProdukTerpilih] = useState("");
  const [halamanAktif, setHalamanAktif] = useState("Home");

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
          <>
            <h1>Daftar Produk</h1>
            <div className="produk-list">
              <CardProduk
                nama="Healthy Snack"
                harga="20000"
                deskripsi="Camilan sehat rendah kalori."
                onBuy={handleBuy}
              />
              <CardProduk
                nama="Juice Fresh"
                harga="15000"
                deskripsi="Jus buah segar tanpa gula tambahan."
                onBuy={handleBuy}
              />
              <CardProduk
                nama="Nutribox"
                harga="500000"
                deskripsi="Paket makanan sehat lengkap untuk diet seimbang."
                onBuy={handleBuy}
              />
            </div>
          </>
        );
      case "Tentang":
        return (
          <>
            <h1>Tentang Kami</h1>
            <p className="intro-text">
              Kami berkomitmen untuk menyediakan produk sehat dan berkualitas tinggi.
            </p>
            <TampilkanGambar />
          </>
        );
      case "Kontak":
        return (
          <>
            <h1>Kontak Kami</h1>
            <p className="intro-text">
              Hubungi kami melalui WhatsApp +62-813-2342-1312 atau lihat testimoni pelanggan kami.
            </p>
            <h2 className="testimoni-title">Testimoni Pelanggan</h2>
            <div className="testimoni-list">
              <Testimoni
                nama="Ani"
                isiTestimoni="Snack-nya enak banget, cocok untuk diet. Pengirimannya juga cepat!"
              />
              <Testimoni
                nama="Budi"
                isiTestimoni="Jus buahnya segar dan murni. Sangat recommended!"
              />
              <Testimoni
                nama="Siti"
                isiTestimoni="Nutribox sangat membantu saya dalam menjaga pola makan. Produknya berkualitas!"
              />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar setHalamanAktif={setHalamanAktif} />
      <div className="container">
        {renderKonten()}
        {showPopup && (
          <div className="popup-overlay" onClick={closePopup}>
            <div className="popup" onClick={(e) => e.stopPropagation()}>
              <h3>Pembelian berhasil 🎉</h3>
              <p>Terima kasih sudah membeli **{produkTerpilih}**.</p>
              <button className="btn-tutup" onClick={closePopup}>
                Tutup
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;