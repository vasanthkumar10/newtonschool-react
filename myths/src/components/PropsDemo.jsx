import React, { Component } from "react";

export default class PropsDemo extends Component {
  constructor(props) {
    // super(props);
    super(props); // it calls parent's(Component) constructor to make my class as a component
    // passing props to super -> binds this with props inside the constructor

    // console.log("props in constructor", props);
    // Never ever initialise the state from props
    this.state = {
      count: this.props.count,
    };
  }
  render() {
    console.log("props in render", this.props);
    return (
      <div>
        <h1>propsDemo</h1>
        <h2>count - {this.state.count}</h2>
        <button
          onClick={() => {
            this.props.setCount(10);
            // console.log("logging");
          }}
        >
          change count to 10
        </button>
      </div>
    );
  }
}
