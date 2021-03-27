import React, { Component } from "react";
import axios from "axios";

//export default class Habit extends Component {
class Cust extends Component {
  //state = {
  //  count: 0,
  //};

  handleIncrement = () => {
    //state오브젝트 안에 있는 count를 증가 한 뒤, state를 업데이트한다.
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrement = () => {
    //state오브젝트 안에 있는 count를 증가 한 뒤, state를 업데이트한다.
    const count = this.state.count - 1;
    this.setState({ count: count < 0 ? 0 : count });
  };

  render() {
    return (
      <li className="habit">
        <span className="habit-name">Reading</span>
        <span className="habit-count">{this.state.count}</span>
        <button
          className="habit-button habit-water"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-tint"></i>
        </button>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-increase"
          onClick={this.handleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
      </li>
    );
  }
}

export default Cust;
