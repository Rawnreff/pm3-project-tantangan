// src/styling-methods/StylingDemo.jsx
// Demo untuk membandingkan ketiga metode styling
import React, { useState } from 'react';
import CardProdukCss from './CardCss/CardProdukCss';
import CardProdukModule from './CardModule/CardProdukModule';
import CardProdukInline from './CardInline/CardProdukInline';

const StylingDemo = () => {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleBuy = (nama) => {
    setSelectedProduct(nama);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  const demoStyles = {
    container: {
      padding: '40px 20px',
      maxWidth: '1400px',
      margin: '0 auto',
    },
    header: {
      textAlign: 'center',
      marginBottom: '40px',
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: '800',
      marginBottom: '16px',
      color: 'var(--text-color)',
    },
    subtitle: {
      fontSize: '1.1rem',
      color: 'var(--text-color)',
      opacity: 0.8,
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '30px',
      marginBottom: '40px',
    },
    methodSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },
    methodTitle: {
      fontSize: '1.3rem',
      fontWeight: '700',
      color: 'var(--primary-color)',
      marginBottom: '8px',
    },
    methodDescription: {
      fontSize: '0.95rem',
      color: 'var(--text-color)',
      opacity: 0.7,
      marginBottom: '12px',
      lineHeight: '1.6',
    },
    badge: {
      display: 'inline-block',
      padding: '4px 12px',
      borderRadius: '20px',
      fontSize: '0.85rem',
      fontWeight: '600',
      marginBottom: '12px',
    },
    badgeCss: {
      backgroundColor: '#e3f2fd',
      color: '#1976d2',
    },
    badgeModule: {
      backgroundColor: '#f3e5f5',
      color: '#7b1fa2',
    },
    badgeInline: {
      backgroundColor: '#fff3e0',
      color: '#f57c00',
    },
    comparisonTable: {
      marginTop: '60px',
      padding: '30px',
      backgroundColor: 'var(--bg-secondary)',
      borderRadius: '12px',
      border: '1px solid var(--border-color)',
    },
    tableTitle: {
      fontSize: '1.8rem',
      fontWeight: '700',
      marginBottom: '24px',
      color: 'var(--text-color)',
      textAlign: 'center',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '20px',
    },
    tableHeader: {
      backgroundColor: 'var(--bg-tertiary)',
      fontWeight: '700',
      padding: '12px',
      textAlign: 'left',
      borderBottom: '2px solid var(--primary-color)',
      color: 'var(--text-color)',
    },
    tableCell: {
      padding: '12px',
      borderBottom: '1px solid var(--border-color)',
      color: 'var(--text-color)',
    },
    popup: {
      position: 'fixed',
      top: '20px',
      right: '20px',
      backgroundColor: '#4caf50',
      color: 'white',
      padding: '16px 24px',
      borderRadius: '8px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
      zIndex: 1000,
      animation: 'slideIn 0.3s ease',
    },
  };

  return (
    <div style={demoStyles.container}>
      <div style={demoStyles.header}>
        <h1 style={demoStyles.title}>🎨 Perbandingan Metode Styling React</h1>
        <p style={demoStyles.subtitle}>
          Eksperimen dengan tiga metode styling berbeda menggunakan komponen yang sama
        </p>
      </div>

      <div style={demoStyles.grid}>
        {/* Metode 1: External CSS */}
        <div style={demoStyles.methodSection}>
          <span style={{...demoStyles.badge, ...demoStyles.badgeCss}}>
            Metode 1
          </span>
          <h2 style={demoStyles.methodTitle}>📄 External CSS</h2>
          <p style={demoStyles.methodDescription}>
            Menggunakan file CSS terpisah (.css). Styling tradisional dengan class names.
          </p>
          <CardProdukCss
            nama="Laptop Gaming External CSS"
            harga={15000000}
            deskripsi="Menggunakan file CSS eksternal untuk styling komponen"
            onBuy={handleBuy}
          />
        </div>

        {/* Metode 2: CSS Modules */}
        <div style={demoStyles.methodSection}>
          <span style={{...demoStyles.badge, ...demoStyles.badgeModule}}>
            Metode 2
          </span>
          <h2 style={demoStyles.methodTitle}>🔒 CSS Modules</h2>
          <p style={demoStyles.methodDescription}>
            Menggunakan CSS Modules (.module.css). Class names di-scope secara lokal.
          </p>
          <CardProdukModule
            nama="Laptop Gaming CSS Modules"
            harga={15000000}
            deskripsi="Menggunakan CSS Modules untuk menghindari konflik class names"
            onBuy={handleBuy}
          />
        </div>

        {/* Metode 3: Inline Styling */}
        <div style={demoStyles.methodSection}>
          <span style={{...demoStyles.badge, ...demoStyles.badgeInline}}>
            Metode 3
          </span>
          <h2 style={demoStyles.methodTitle}>✨ Inline Styling</h2>
          <p style={demoStyles.methodDescription}>
            Menggunakan style object di JSX. Dynamic styling dengan JavaScript.
          </p>
          <CardProdukInline
            nama="Laptop Gaming Inline Style"
            harga={15000000}
            deskripsi="Menggunakan inline styling untuk kontrol penuh dengan JavaScript"
            onBuy={handleBuy}
          />
        </div>
      </div>

      {/* Comparison Table */}
      <div style={demoStyles.comparisonTable}>
        <h2 style={demoStyles.tableTitle}>📊 Tabel Perbandingan</h2>
        <table style={demoStyles.table}>
          <thead>
            <tr>
              <th style={demoStyles.tableHeader}>Aspek</th>
              <th style={demoStyles.tableHeader}>External CSS</th>
              <th style={demoStyles.tableHeader}>CSS Modules</th>
              <th style={demoStyles.tableHeader}>Inline Styling</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={demoStyles.tableCell}><strong>Scoping</strong></td>
              <td style={demoStyles.tableCell}>Global</td>
              <td style={demoStyles.tableCell}>✅ Local</td>
              <td style={demoStyles.tableCell}>✅ Local</td>
            </tr>
            <tr>
              <td style={demoStyles.tableCell}><strong>Konflik Nama</strong></td>
              <td style={demoStyles.tableCell}>❌ Mudah konflik</td>
              <td style={demoStyles.tableCell}>✅ Tidak ada</td>
              <td style={demoStyles.tableCell}>✅ Tidak ada</td>
            </tr>
            <tr>
              <td style={demoStyles.tableCell}><strong>Pseudo-classes</strong></td>
              <td style={demoStyles.tableCell}>✅ Full support</td>
              <td style={demoStyles.tableCell}>✅ Full support</td>
              <td style={demoStyles.tableCell}>❌ Perlu workaround</td>
            </tr>
            <tr>
              <td style={demoStyles.tableCell}><strong>Media Queries</strong></td>
              <td style={demoStyles.tableCell}>✅ Full support</td>
              <td style={demoStyles.tableCell}>✅ Full support</td>
              <td style={demoStyles.tableCell}>❌ Tidak didukung</td>
            </tr>
            <tr>
              <td style={demoStyles.tableCell}><strong>Keterbacaan</strong></td>
              <td style={demoStyles.tableCell}>⭐⭐⭐⭐⭐</td>
              <td style={demoStyles.tableCell}>⭐⭐⭐⭐</td>
              <td style={demoStyles.tableCell}>⭐⭐</td>
            </tr>
            <tr>
              <td style={demoStyles.tableCell}><strong>Maintainability</strong></td>
              <td style={demoStyles.tableCell}>⭐⭐⭐⭐</td>
              <td style={demoStyles.tableCell}>⭐⭐⭐⭐⭐</td>
              <td style={demoStyles.tableCell}>⭐⭐</td>
            </tr>
            <tr>
              <td style={demoStyles.tableCell}><strong>Performa</strong></td>
              <td style={demoStyles.tableCell}>⭐⭐⭐⭐⭐</td>
              <td style={demoStyles.tableCell}>⭐⭐⭐⭐⭐</td>
              <td style={demoStyles.tableCell}>⭐⭐⭐</td>
            </tr>
            <tr>
              <td style={demoStyles.tableCell}><strong>Dynamic Styling</strong></td>
              <td style={demoStyles.tableCell}>⚠️ Limited</td>
              <td style={demoStyles.tableCell}>⚠️ Limited</td>
              <td style={demoStyles.tableCell}>✅ Excellent</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Popup notification */}
      {showPopup && (
        <div style={demoStyles.popup}>
          🎉 Berhasil menambahkan "{selectedProduct}" ke keranjang!
        </div>
      )}

      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default StylingDemo;

