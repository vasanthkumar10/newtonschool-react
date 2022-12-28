import React, { useEffect, useRef } from "react";

export function UseRefDemo() {
  const inputRef = useRef(null);

  useEffect(() => {
    console.log(inputRef.current);
    inputRef.current.focus();
    inputRef.current.style.padding = "10px";
  }, []);

  return (
    <>
      <div className="form-element">
        <label htmlFor="username">UserName: </label>
        <input id="username" ref={inputRef} type="text" />
      </div>
      <div className="form-element">
        <label htmlFor="password">Password: </label>
        <input id="password" type="password" />
      </div>
    </>
  );
}
