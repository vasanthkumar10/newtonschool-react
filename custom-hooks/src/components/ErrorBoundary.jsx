import React, { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      isError: true,
    };
  }

  componentDidCatch(error) {
    console.log("error -->", error);
  }

  render() {
    if (this.state.isError) {
      return <h2>Something went wrong</h2>;
    } else {
      return this.props.children;
    }
  }
}
