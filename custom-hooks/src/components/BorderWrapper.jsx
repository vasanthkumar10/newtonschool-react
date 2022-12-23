import React from "react";

export function BorderWrapper(props) {
  console.log("props", props);
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "10px",
        margin: "10px",
        borderRadius: "5px",
      }}
    >
      <h2>Vasanth component</h2>
      {props.children}
    </div>
  );
}
