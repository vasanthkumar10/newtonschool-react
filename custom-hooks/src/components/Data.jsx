import React from "react";

export function Data(props) {
  if (props.value) {
    return <h2>{props.value}</h2>;
  } else {
    throw new Error("value not defined");
  }
}
