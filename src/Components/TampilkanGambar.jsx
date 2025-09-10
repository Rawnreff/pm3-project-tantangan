import React, { useState } from 'react';
import './TampilkanGambar.css';

const TampilkanGambar = () => {
  const [tampil, setTampil] = useState(false);
  const imageUrl = "https://images.unsplash.com/photo-1542838132-92c103e35a16?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200";

  return (
    <div className="gambar-section">
      <button onClick={() => setTampil(!tampil)} className="btn-gambar">
        {tampil ? "Sembunyikan Gambar" : "Tampilkan Gambar"}
      </button>
      {tampil && <img src={imageUrl} alt="Contoh Produk E-commerce" className="gambar" />}
    </div>
  );
};

export default TampilkanGambar;