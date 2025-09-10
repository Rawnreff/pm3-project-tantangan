// src/components/CardProduk.jsx
import React, { useState } from 'react';
import './CardProduk.css';

const CardProduk = ({ nama, harga, deskripsi, onBuy }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="product-card">
      <div className="product-content">
        <h3 className="product-name">{nama}</h3>
        <p className="product-price">Rp {harga.toLocaleString('id-ID')}</p>
        <p className="product-description">{deskripsi}</p>
      </div>
      
      <div className="product-interaction">
        <div className="quantity-selector">
          <button 
            onClick={decrement} 
            disabled={count === 0}
            className="quantity-btn"
          >
            −
          </button>
          <span className="quantity-count">{count}</span>
          <button onClick={increment} className="quantity-btn">
            +
          </button>
        </div>
        
        <button 
          className="buy-button" 
          onClick={() => onBuy(nama)}
          disabled={count === 0}
        >
          Beli Sekarang
        </button>
      </div>
    </div>
  );
};

export default CardProduk;