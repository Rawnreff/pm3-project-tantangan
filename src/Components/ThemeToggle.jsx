import React from 'react';
import './ThemeToggle.css';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button 
      onClick={toggleTheme} 
      className={`theme-toggle ${theme}`}
      aria-label="Toggle theme"
    >
      <span className="theme-icon">
        {theme === "light" ? "🌙" : "☀️"}
      </span>
      <span className="theme-text">
        {theme === "light" ? "Mode Gelap" : "Mode Terang"}
      </span>
      <span className="theme-slider"></span>
    </button>
  );
};

export default ThemeToggle;