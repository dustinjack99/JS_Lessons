import React, { Component } from "react";

class IncDecClass extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };

    this.increment.bind(this);
    this.decrement.bind(this);
  }

  increment(count) {
    count + 1;
  }

  decrement(count) {
    count - 1;
  }

  render() {
    return (
      <div>
        <h1>This is a counter app</h1>
        <button onClick={this.increment(this.state.counter)}>Increment</button>
        <button onClick={this.decrement(this.state.counter)}>Decrement</button>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}

export default IncDecClass;
