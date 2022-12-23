import React from "react";
import { useCounter } from "../hooks/useCounter";

export function Counter() {
  const [count, increment, decrement, reset] = useCounter(5, 10, 1000);

  return (
    <div>
      <h2>count - {count}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}
