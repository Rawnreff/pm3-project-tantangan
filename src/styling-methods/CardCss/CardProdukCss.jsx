import React, { useState } from 'react';
import './CardProdukCss.css';

const CardProdukCss = ({ nama, harga, deskripsi, onBuy }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="product-card-css">
      <div className="product-content-css">
        <h3 className="product-name-css">{nama}</h3>
        <p className="product-price-css">Rp {harga.toLocaleString('id-ID')}</p>
        <p className="product-description-css">{deskripsi}</p>
      </div>
      
      <div className="product-interaction-css">
        <div className="quantity-selector-css">
          <button 
            onClick={decrement} 
            disabled={count === 0}
            className="quantity-btn-css"
          >
            −
          </button>
          <span className="quantity-count-css">{count}</span>
          <button onClick={increment} className="quantity-btn-css">
            +
          </button>
        </div>
        
        <button 
          className="buy-button-css" 
          onClick={() => onBuy(nama)}
          disabled={count === 0}
        >
          Beli Sekarang
        </button>
      </div>
    </div>
  );
};

export default CardProdukCss;
