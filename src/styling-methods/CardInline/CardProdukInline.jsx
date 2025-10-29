import React, { useState, useEffect } from 'react';

const CardProdukInline = ({ nama, harga, deskripsi, onBuy }) => {
  const [count, setCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const appElement = document.querySelector('.app');
    if (appElement) {
      const isDark = appElement.classList.contains('theme-dark');
      setTheme(isDark ? 'dark' : 'light');
    }
  }, []);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  const styles = {
    productCard: {
      backgroundColor: theme === 'dark' 
        ? 'linear-gradient(135deg, #1f2937 0%, #111827 100%)' 
        : '#ffffff',
      background: theme === 'dark'
        ? 'linear-gradient(135deg, #1f2937 0%, #111827 100%)'
        : '#ffffff',
      borderRadius: '12px',
      boxShadow: theme === 'dark'
        ? (isHovered ? '0 10px 30px rgba(96, 165, 250, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.5)')
        : (isHovered ? '0 10px 30px rgba(0, 0, 0, 0.12)' : '0 4px 20px rgba(0, 0, 0, 0.08)'),
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      border: theme === 'dark'
        ? (isHovered ? '1px solid #60a5fa' : '1px solid rgba(255, 255, 255, 0.1)')
        : '1px solid rgba(0, 0, 0, 0.1)',
      transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
    },
    productContent: {
      padding: '24px',
      flex: 1,
    },
    productName: {
      fontSize: '1.3rem',
      fontWeight: 700,
      marginBottom: '12px',
      color: theme === 'dark' ? '#e5e7eb' : '#2b2d42',
    },
    productPrice: {
      fontSize: '1.5rem',
      fontWeight: 800,
      color: theme === 'dark' ? '#60a5fa' : '#4361ee',
      marginBottom: '15px',
    },
    productDescription: {
      color: theme === 'dark' ? '#e5e7eb' : '#2b2d42',
      opacity: 0.8,
      lineHeight: 1.6,
      marginBottom: '20px',
    },
    productInteraction: {
      padding: '0 24px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },
    quantitySelector: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '15px',
      marginBottom: '10px',
    },
    quantityBtn: {
      width: '36px',
      height: '36px',
      borderRadius: '50%',
      border: `1px solid ${theme === 'dark' ? '#60a5fa' : '#4361ee'}`,
      backgroundColor: 'transparent',
      color: theme === 'dark' ? '#60a5fa' : '#4361ee',
      fontSize: '1.2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    quantityBtnHover: {
      backgroundColor: theme === 'dark' ? '#60a5fa' : '#4361ee',
      color: 'white',
    },
    quantityBtnDisabled: {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
    quantityCount: {
      fontSize: '1.2rem',
      fontWeight: 600,
      minWidth: '30px',
      textAlign: 'center',
      color: theme === 'dark' ? '#e5e7eb' : '#2b2d42',
    },
    buyButton: {
      background: theme === 'dark'
        ? 'linear-gradient(135deg, #60a5fa, #3b82f6)'
        : '#4361ee',
      color: 'white',
      border: 'none',
      padding: '12px',
      borderRadius: '6px',
      fontWeight: 600,
      cursor: count === 0 ? 'not-allowed' : 'pointer',
      transition: 'all 0.3s ease',
      opacity: count === 0 ? 0.6 : 1,
      boxShadow: theme === 'dark' ? '0 4px 15px rgba(96, 165, 250, 0.3)' : 'none',
    },
  };

  const [btnHoverStates, setBtnHoverStates] = useState({
    decrement: false,
    increment: false,
    buy: false,
  });

  return (
    <div 
      style={styles.productCard}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.productContent}>
        <h3 style={styles.productName}>{nama}</h3>
        <p style={styles.productPrice}>Rp {harga.toLocaleString('id-ID')}</p>
        <p style={styles.productDescription}>{deskripsi}</p>
      </div>
      
      <div style={styles.productInteraction}>
        <div style={styles.quantitySelector}>
          <button 
            onClick={decrement} 
            disabled={count === 0}
            style={{
              ...styles.quantityBtn,
              ...(count === 0 ? styles.quantityBtnDisabled : {}),
              ...(btnHoverStates.decrement && count > 0 ? styles.quantityBtnHover : {}),
            }}
            onMouseEnter={() => setBtnHoverStates({...btnHoverStates, decrement: true})}
            onMouseLeave={() => setBtnHoverStates({...btnHoverStates, decrement: false})}
          >
            −
          </button>
          <span style={styles.quantityCount}>{count}</span>
          <button 
            onClick={increment}
            style={{
              ...styles.quantityBtn,
              ...(btnHoverStates.increment ? styles.quantityBtnHover : {}),
            }}
            onMouseEnter={() => setBtnHoverStates({...btnHoverStates, increment: true})}
            onMouseLeave={() => setBtnHoverStates({...btnHoverStates, increment: false})}
          >
            +
          </button>
        </div>
        
        <button 
          style={{
            ...styles.buyButton,
            transform: btnHoverStates.buy && count > 0 ? 'translateY(-2px)' : 'translateY(0)',
            boxShadow: btnHoverStates.buy && theme === 'dark' 
              ? '0 6px 20px rgba(96, 165, 250, 0.5)'
              : theme === 'dark' 
                ? '0 4px 15px rgba(96, 165, 250, 0.3)'
                : 'none',
          }}
          onClick={() => onBuy(nama)}
          disabled={count === 0}
          onMouseEnter={() => setBtnHoverStates({...btnHoverStates, buy: true})}
          onMouseLeave={() => setBtnHoverStates({...btnHoverStates, buy: false})}
        >
          Beli Sekarang
        </button>
      </div>
    </div>
  );
};