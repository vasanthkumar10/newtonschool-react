import React from "react";
import { useCustomInput } from "../hooks/useCustomInput";

export function Assignment() {
  const { input: email, handleInput: setEmail } =
    useCustomInput("vasanth@gmail.com");
  const { input: password, handleInput: setPassword } = useCustomInput("1234");
  console.log(email, setEmail);
  console.log(password, setPassword);
  return (
    <div>
      <h1>Login form</h1>
      <form
        onSubmit={() => {
          console.log(email, password);
        }}
      >
        <div>
          <label htmlFor="username">Email: </label>
          <input value={email} onChange={setEmail} type="email" />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input value={password} onChange={setPassword} type="password" />
        </div>
        <button type="submit">submit</button>
      </form>
      <p>{email}</p>
      <p>{password}</p>
    </div>
  );
}
