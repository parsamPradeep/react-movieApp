import React, { Component } from 'react';
import Counter from './counter';
import Movies from './movies';

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-lg m-2"
        >
          Reset
        </button>
        <Movies />
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            counter={counter}
          >
            <h1>Counter #{counter.id}</h1>
          </Counter>
        ))}
      </div>
    );
  }
}
export default Counters;
