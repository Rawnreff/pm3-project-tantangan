import React from "react";
import CardProduk from "./components/CardProduk";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Daftar Produk</h1>
      <div className="produk-list">
        <CardProduk 
          nama="Bugetto Nuggets" 
          harga="20000" 
          deskripsi="Nugget sehat berbahan dasar jagung dan sayuran."
        />
        <CardProduk 
          nama="Cookoories Premium" 
          harga="15000" 
          deskripsi="Kue kering sehat dengan bahan alami." 
        />
        <CardProduk 
          nama="Nutricomm IoT" 
          harga="500000" 
          deskripsi="Perangkat IoT untuk monitoring kebun gizi." 
        />
      </div>
    </div>
  );
}

export default App;