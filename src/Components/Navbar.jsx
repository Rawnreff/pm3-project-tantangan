import React from 'react';
import './Navbar.css';

const Navbar = ({ setHalamanAktif }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <h1>React App</h1>
        </div>
        <ul className="nav-menu">
          <li>
            <button onClick={() => setHalamanAktif("Home")}>Home</button>
          </li>
          <li>
            <button onClick={() => setHalamanAktif("Tentang")}>Tentang</button>
          </li>
          <li>
            <button onClick={() => setHalamanAktif("Kontak")}>Kontak</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;