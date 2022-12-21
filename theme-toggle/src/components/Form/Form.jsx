import React, { useContext } from "react";
import { Input } from "../Input/Input";
import { ThemeContext } from "../../App";
import "./Form.css";

export function Form() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`form-${theme}`}>
      <h2 className={`header-${theme}`}>Login form</h2>
      <Input
        placeholder={"Enter the username "}
        type={"text"}
        label={"Username: "}
      />
      <Input
        placeholder={"Enter the password "}
        type={"password"}
        label={"Password: "}
      />
    </div>
  );
}
