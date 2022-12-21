import React, { useState, useEffect, createContext } from "react";
import "./App.css";
import { Form } from "./components/Form/Form";
import { Button } from "./components/Button/Button";
export const ThemeContext = createContext();

const currentTheme = localStorage.getItem("theme"); // permanant memory
// const currentTheme = sessionStorage.getItem("theme"); // changes from tab to tab
console.log("local storage theme", currentTheme);
const initialTheme = currentTheme ? currentTheme : "dark";

function App() {
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    // sessionStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme }}>
      <div className={`app-${theme}`}>
        <Form />
        <Button text={`Toggle`} action={toggleTheme} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
