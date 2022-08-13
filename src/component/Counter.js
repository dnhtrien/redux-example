import React, { Component } from 'react';
class Counter extends Component {
  render() {
    const { counter, increment, decrement, reset } = this.props;
    return (
      <div className="App">
        <div>{counter}</div>
        <div>
          <button type="button" onClick={increment}>
            INCREMENT BY 1
          </button>
        </div>
        <div>
          <button type="button" onClick={decrement}>
            DECREMENT BY 1
          </button>
        </div>
        <button type="button" onClick={reset}>
          RESET
        </button>
      </div>
    );
  }
}
export default Counter;
