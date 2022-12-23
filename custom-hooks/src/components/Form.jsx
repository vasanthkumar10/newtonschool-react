import React, { useState } from "react";
import { useInput } from "../hooks/useInput";

export function Form() {
  //   const [username, setUsername] = useState("");
  //   const [password, setPassword] = useState("");
  const [username, usernameAttrbs, resetUsername] = useInput("");
  const [password, passwordAttrbs, resetPassword] = useInput("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("form submitted", username, password);
    // setUsername("");
    // setPassword("");
    resetUsername();
    resetPassword();
  };

  return (
    <div>
      <h1>Login form</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            // name="virat"
            // age="10"
            // {...{ name: "virat", age: 10 }}
            id="username"
            // value={username}
            // onChange={(e) => setUsername(e.target.value)}
            {...usernameAttrbs}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input {...passwordAttrbs} type="password" />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
