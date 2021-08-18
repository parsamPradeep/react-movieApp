import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <h1>Counter Number {this.props.counter.id}</h1>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
          disabled={this.props.counter.value === 0}
        >
          -
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-lg"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-lg badge-';
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';
    return classes;
  }
  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? <h1>Zero</h1> : count;
  }
}

export default Counter;
