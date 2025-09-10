import React, { useState } from 'react';
import './TampilkanGambar.css';

const TampilkanGambar = () => {
  const [tampil, setTampil] = useState(false);
  const imageUrl = "https://images.unsplash.com/photo-1542838132-92c103e35a16?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200";

  return (
    <div className="image-display-container">
      <button 
        onClick={() => setTampil(!tampil)} 
        className="image-toggle-btn"
      >
        <span className="btn-icon">{tampil ? "🖼️" : "👁️"}</span>
        {tampil ? "Sembunyikan Gambar" : "Tampilkan Gambar"}
      </button>
      
      {tampil && (
        <div className="image-wrapper">
          <img 
            src={imageUrl} 
            alt="Contoh Produk E-commerce" 
            className="displayed-image" 
          />
          <div className="image-overlay">
            <p>Gambar Produk Elektronik</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TampilkanGambar;