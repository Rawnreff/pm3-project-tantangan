import React, { useState } from 'react';
import './TampilkanGambar.css';

const TampilkanGambar = () => {
  const [tampil, setTampil] = useState(false);
  const imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDG2D-NcswHqsiENuathCvkdBRZnhrNKAXZw&s";

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