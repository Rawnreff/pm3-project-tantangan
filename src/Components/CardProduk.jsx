import React, { useState } from 'react';
import './CardProduk.css';

const CardProduk = ({ nama, harga, deskripsi, onBuy }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="card-produk">
      <h3 className="produk-nama">{nama}</h3>
      <p className="produk-harga">Rp {harga}</p>
      <p className="produk-deskripsi">{deskripsi}</p>
      <div className="produk-interaksi">
        <div className="counter">
          <button onClick={decrement} disabled={count === 0}>-</button>
          <span>{count}</span>
          <button onClick={increment}>+</button>
        </div>
        <button className="btn-beli" onClick={() => onBuy(nama)}>
          Beli Sekarang
        </button>
      </div>
    </div>
  );
};

export default CardProduk;