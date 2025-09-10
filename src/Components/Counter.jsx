import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };
  
  const reset = () => setCount(0);

  return (
    <div className="counter-widget">
      <h3 className="counter-title">Penghitung Sederhana</h3>
      
      <div className="counter-display">
        <span className="counter-value">{count}</span>
      </div>
      
      <div className="counter-controls">
        <button 
          className="counter-btn decrement" 
          onClick={decrement} 
          disabled={count === 0}
          aria-label="Decrease"
        >
          −
        </button>
        
        <button 
          className="counter-btn reset" 
          onClick={reset}
          disabled={count === 0}
          aria-label="Reset"
        >
          ↺
        </button>
        
        <button 
          className="counter-btn increment" 
          onClick={increment}
          aria-label="Increase"
        >
          +
        </button>
      </div>
      
      <div className="counter-actions">
        <button 
          className="action-btn add-to-cart"
          disabled={count === 0}
        >
          <span className="action-icon">🛒</span>
          Tambah {count > 0 ? count : ''} ke Keranjang
        </button>
      </div>
    </div>
  );
}

export default Counter;
