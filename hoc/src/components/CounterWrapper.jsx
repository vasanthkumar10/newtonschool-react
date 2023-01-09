// HOC - Higher Order Components
// Accept component as a parameter and return new component

import React, { Component } from "react";

export default function CounterWrapper(OriginalComponent) {
  class WrapperComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 1,
      };
    }

    increment = (step) => {
      this.setState((prev) => {
        return {
          count: prev.count + step,
        };
      });
    };

    render() {
      console.log("wrapper", this.props);
      return (
        <OriginalComponent
          {...this.props}
          count={this.state.count}
          increment={this.increment}
        />
      );
    }
  }

  return WrapperComponent;
}
