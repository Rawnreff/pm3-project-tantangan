import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="counter">
      <button onClick={decrement} disabled={count === 0}>-</button>
      <p>{count}</p>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default Counter;