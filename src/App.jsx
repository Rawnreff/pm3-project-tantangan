import { useState } from "react";
import CardProduk from "./components/CardProduk";
import "./App.css";
import "./Popup.css";

function App() {
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

  return (
    <div className="container">
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

      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <h3>Pembelian berhasil 🎉</h3>
            <p>Terima kasih sudah membeli {produkTerpilih}.</p>
            <button className="btn-tutup" onClick={closePopup}>
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
