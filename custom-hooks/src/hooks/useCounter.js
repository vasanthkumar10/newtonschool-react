import { useState } from "react";

export function useCounter(initialState = 0, step = 1, resetValue = 100) {
  const [count, setCount] = useState(initialState);

  const increment = () => {
    setCount((prev) => prev + step);
  };

  const decrement = () => {
    setCount((prev) => prev - step);
  };

  const reset = () => {
    setCount(resetValue);
  };

  //   obj can also be used
  return [count, increment, decrement, reset];
}
