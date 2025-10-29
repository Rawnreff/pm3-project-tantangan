// src/styling-methods/CardModule/CardProdukModule.jsx
// METODE 2: Menggunakan CSS Modules
import React, { useState } from 'react';
import styles from './CardProdukModule.module.css';

const CardProdukModule = ({ nama, harga, deskripsi, onBuy }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className={styles.productCard}>
      <div className={styles.productContent}>
        <h3 className={styles.productName}>{nama}</h3>
        <p className={styles.productPrice}>Rp {harga.toLocaleString('id-ID')}</p>
        <p className={styles.productDescription}>{deskripsi}</p>
      </div>
      
      <div className={styles.productInteraction}>
        <div className={styles.quantitySelector}>
          <button 
            onClick={decrement} 
            disabled={count === 0}
            className={styles.quantityBtn}
          >
            −
          </button>
          <span className={styles.quantityCount}>{count}</span>
          <button onClick={increment} className={styles.quantityBtn}>
            +
          </button>
        </div>
        
        <button 
          className={styles.buyButton} 
          onClick={() => onBuy(nama)}
          disabled={count === 0}
        >
          Beli Sekarang
        </button>
      </div>
    </div>
  );
};

export default CardProdukModule;
