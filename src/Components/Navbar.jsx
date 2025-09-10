import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ setHalamanAktif, onThemeChange }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    onThemeChange(newTheme);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <ul className="nav-menu">
          <li><button onClick={() => setHalamanAktif("Home")}>Home</button></li>
          <li><button onClick={() => setHalamanAktif("Tentang")}>Tentang</button></li>
          <li><button onClick={() => setHalamanAktif("Kontak")}>Kontak</button></li>
        </ul>
      </div>
      <div className="navbar-center">
        <h1 className="logo">Zzzhop</h1>
      </div>
      <div className="navbar-right">
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;