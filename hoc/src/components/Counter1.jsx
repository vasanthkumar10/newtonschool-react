import React, { Component } from "react";
import CounterWrapper from "./CounterWrapper";

class Counter1 extends Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       count: 1,
  //     };
  //   }

  //   increment = (step) => {
  //     this.setState((prev) => {
  //       return {
  //         count: prev.count + step,
  //       };
  //     });
  //   };

  render() {
    const { count, increment } = this.props;
    console.log("props in 1", this.props);
    return (
      <div>
        <h1>Counter1 - {count}</h1>
        <button onClick={() => increment(1)}>increment</button>
      </div>
    );
  }
}

export default CounterWrapper(Counter1);
