import { useState } from "react";

export function useCustomInput(initialState = "") {
  const [input, setInput] = useState(initialState);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return { input, handleInput };
}
