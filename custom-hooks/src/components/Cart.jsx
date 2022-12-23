import React from "react";
import { useCounter } from "../hooks/useCounter";

export function Cart() {
  const [count, increment, decrement, reset] = useCounter(0, 1, 100);

  return (
    <div>
      <h2>product - {count}</h2>
      <p>Go to checkout</p>
      <h4>Payment Options</h4>
      <ol>
        <li>Gpay</li>
        <li>Paytm</li>
        <li>COD</li>
      </ol>
      <button style={{ backgroundColor: "green" }} onClick={increment}>
        increment
      </button>
      <button style={{ backgroundColor: "red" }} onClick={decrement}>
        decrement
      </button>
      <button style={{ backgroundColor: "GrayText" }} onClick={reset}>
        reset
      </button>
    </div>
  );
}
