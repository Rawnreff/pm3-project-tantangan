import React from "react";
import "./CardProduk.css";
import Counter from "./Counter.jsx";

function CardProduk({ nama, harga, deskripsi }) {
  return (
    <div className="card-produk">
      <h2>{nama}</h2>
      <p className="harga">Rp {harga}</p>
      <p className="deskripsi">{deskripsi}</p>
      <Counter/>
      <button className="btn-beli">Beli Sekarang</button>
    </div>
  );
}

export default CardProduk;