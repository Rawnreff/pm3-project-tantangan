import React from "react";
import CardProduk from "./Components/CardProduk";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Daftar Produk</h1>
      <div className="produk-list">
        <CardProduk 
          nama="Healthy Snack" 
          harga="20000" 
          deskripsi="Camilan sehat rendah kalori." 
        />
        <CardProduk 
          nama="Juice Fresh" 
          harga="15000" 
          deskripsi="Jus buah segar tanpa gula tambahan." 
        />
        <CardProduk 
          nama="Nutribox" 
          harga="500000" 
          deskripsi="Paket makanan sehat lengkap untuk diet seimbang." 
        />
      </div>
    </div>
  );
}

export default App;
