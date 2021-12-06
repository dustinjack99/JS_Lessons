import React, { Component } from "react";
class IncDecClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  increment() {
    this.setState({ counter: this.state.counter + 1 });
  }
  decrement() {
    this.setState({ counter: this.state.counter - 1 });
  }
  render() {
    return (
      <div>
        <h1>Increment / Decrement</h1>
        <button onClick={() => this.increment()}>Increment</button>
        <button onClick={() => this.decrement()}>Decrement</button>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}
export default IncDecClass;
