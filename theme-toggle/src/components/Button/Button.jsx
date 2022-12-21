import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import "./Button.css";

export function Button({ text, action }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <button className={`button-${theme}`} onClick={action}>
        {text}
      </button>
    </div>
  );
}
