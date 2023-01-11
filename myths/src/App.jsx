import "./App.css";
import React, { useState } from "react";
import { classDemo as ClassDemo } from "./components/classDemo";
import FunctionDemo from "./components/functionDemo";
import PropsDemo from "./components/PropsDemo";

function App() {
  const [age, setAge] = useState(20);
  const [count, setCount] = useState(1);
  return (
    <div className="App">
      {/* <p>Lorem ipsum dolor sit amet.</p> */}
      {/* onClick is a wrapper fn which internally calls html onclick */}
      {/* <button
        onClick={(e) => {
          e.preventDefault();
          console.log("logging");
        }}
      >
        click
      </button>
      <ClassDemo /> */}
      <FunctionDemo age={"20"} car={4} />
      <FunctionDemo age={age} />
      {/* <PropsDemo count={count} setCount={setCount} /> */}
    </div>
  );
}

export default App;
