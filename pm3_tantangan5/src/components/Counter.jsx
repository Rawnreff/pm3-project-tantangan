import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  // style internal
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
      margin: "12px 0",
    },
    button: {
      padding: "6px 12px",
      borderRadius: "6px",
      border: "2px solid",
      cursor: "pointer",
      fontWeight: "bold",
      fontSize: "1rem",
      transition: "all 0.2s ease",
    },
    buttonMinus: {
      backgroundColor: "#fff",
      borderColor: "#e63946",
      color: "#e63946",
    },
    buttonPlus: {
      backgroundColor: "#fff",
      borderColor: "#4CAF50",
      color: "#4CAF50",
    },
    buttonDisabled: {
      borderColor: "#ccc",
      color: "#aaa",
      cursor: "not-allowed",
    },
    text: {
      margin: 0,
      fontWeight: "bold",
      fontSize: "1.1rem",
      color: "#333",
      minWidth: "30px",
      textAlign: "center",
    },
  };

  return (
    <div style={styles.container}>
      <button
        onClick={decrement}
        disabled={count === 0}
        style={{
          ...styles.button,
          ...styles.buttonMinus,
          ...(count === 0 ? styles.buttonDisabled : {}),
        }}
      >
        -
      </button>

      <p style={styles.text}>{count}</p>

      <button
        onClick={increment}
        style={{ ...styles.button, ...styles.buttonPlus }}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
