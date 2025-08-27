import React from "react";
import "./CardProduk.css";
import Counter from "./Counter";

function CardProduk({ nama, harga, deskripsi, onBeli }) {
  return (
    <div className="card-produk">
      <h2>{nama}</h2>
      <p className="harga">IDR{harga}</p>
      <p className="deskripsi">{deskripsi}</p>
      <Counter />
      <button className="btn-beli" onClick={onBeli}>
        Beli Sekarang
      </button>
    </div>
  );
}

export default CardProduk;
