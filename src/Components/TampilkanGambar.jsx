import { useState } from "react";
import "./TampilkanGambar.css";

function TampilkanGambar() {
  const [tampil, setTampil] = useState(false);

  return (
    <div className="gambar-container">
      <button onClick={() => setTampil(!tampil)} className="btn-gambar">
        {tampil ? "Sembunyikan Gambar" : "Tampilkan Gambar"}
      </button>
      {tampil && (
        <img
          src="https://www.alphafoodie.com/wp-content/uploads/2020/11/Orange-Juice-1-of-1.jpeg"
          alt="Gambar Produk"
          className="gambar"
        />
      )}
    </div>
  );
}

export default TampilkanGambar;