// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css';

const Navbar = ({ halamanAktif, setHalamanAktif, onThemeChange, theme }) => {
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    onThemeChange(newTheme);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <h1>Zzzhop</h1>
        </div>
        
        <ul className="nav-menu">
          <li className="nav-item">
            <button 
              onClick={() => setHalamanAktif("Home")} 
              className={halamanAktif === "Home" ? "nav-link active" : "nav-link"}
            >
              Home
            </button>
          </li>
          <li className="nav-item">
            <button 
              onClick={() => setHalamanAktif("Tentang")} 
              className={halamanAktif === "Tentang" ? "nav-link active" : "nav-link"}
            >
              Tentang
            </button>
          </li>
          <li className="nav-item">
            <button 
              onClick={() => setHalamanAktif("Kontak")} 
              className={halamanAktif === "Kontak" ? "nav-link active" : "nav-link"}
            >
              Kontak
            </button>
          </li>
        </ul>
        
        <div className="nav-actions">
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
