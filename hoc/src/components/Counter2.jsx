import React, { Component } from "react";
import CounterWrapper from "./CounterWrapper";

class Counter2 extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       count: 1,
  //     };
  //   }

  //   increment = () => {
  //     this.setState((prev) => {
  //       return {
  //         count: prev.count + 1,
  //       };
  //     });
  //   };

  render() {
    const { count, increment } = this.props;
    console.log("props in 2", this.props);
    return (
      <div>
        <h2>Count2 - {count}</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, cum!
        </p>
        <button onMouseOver={() => increment(1)}>increment2</button>
      </div>
    );
  }
}

export default CounterWrapper(Counter2);
