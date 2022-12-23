import { useState } from "react";

export function useInput(initialState = "") {
  const [value, setValue] = useState(initialState);

  const reset = () => {
    setValue(initialState);
  };

  const inputAttrbs = {
    id: "id",
    style: {
      padding: "10px",
    },
    value,
    onChange: (e) => setValue(e.target.value),
  };

  return [value, inputAttrbs, reset];
}
