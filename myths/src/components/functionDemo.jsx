import React from "react";
import PropTypes from "prop-types";

export default function functiondemo(props) {
  console.log("props in function", props);
  // state -> mutable
  // props -> read only props
  return (
    <div>
      <h1>function component</h1>
      <h2>age - {props.age + 30}</h2>
      <h2>car - {props.car}</h2>
      {/* <button
        onClick={() => {
          console.log("clicked..");
          // props = { ...props, age: 10 };
          props.setAge(10);
        }}
      >
        change age
      </button> */}
    </div>
  );
}

functiondemo.propTypes = {
  age: PropTypes.number.isRequired,
  car: PropTypes.number.isRequired,
};
