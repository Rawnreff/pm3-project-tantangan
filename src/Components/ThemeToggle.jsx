// src/components/ThemeToggle.jsx
import React, { useEffect, useState } from "react";
import './ThemeToggle.css';

function getInitialTheme() {
  if (typeof window !== 'undefined' && window.localStorage) {
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") return stored;
  }
  return 'light'; // Default ke light jika tidak ada preferensi
}

const ThemeToggle = ({ onThemeChange }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    try {
      localStorage.setItem("theme", theme);
    } catch (error) {
      console.error("Failed to access localStorage:", error);
    }
    onThemeChange(theme);
  }, [theme, onThemeChange]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  const isDark = theme === 'dark';

  return (
    <button onClick={toggle} className={`theme-toggle-btn ${isDark ? 'dark' : 'light'}`}>
      {isDark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
};

export default ThemeToggle;