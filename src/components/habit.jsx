import React, { Component } from "react";
import axios from "axios";
/*부모 컴포넌트로 (외부)전달받은 props으로 전달받은 습관의 데이터를 
(콜백함수를 단순히 호출만해주는)보여주기만하는 컴포넌트 */

class Habit extends Component {
  //state = {
  // count: 0,
  //};

  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
    //   //state오브젝트 안에 있는 count를 증가 한 뒤, state를 업데이트한다.
    //   //this.setState({ count: this.state.count + 1 });
  };
  // handleDecrement = () => {
  //this.props.onDecrement(this.props.habit);
  //   //state오브젝트 안에 있는 count를 증가 한 뒤, state를 업데이트한다.
  //   //const count = this.state.count - 1;
  //   //this.setState({ count: count < 0 ? 0 : count });
  // };

  render() {
    //외부로 받아온 데이터는 이와같이 props안에 저장되어진다.
    console.log(this.props.habit);
    const { name, count } = this.props.habit;

    return (
      <li className="habit">
        {/* 
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span> */}

        <button
          className="habit-button habit-water"
          onClick={this.handleIncrement}
        >
          <div className="habit_icon">
            <i className="fas fa-tint"></i>
          </div>
        </button>

        <button
          className="habit-button habit-ginger"
          onClick={this.handleIncrement}
        >
          <div className="habit_icon">
            <i class="fas fa-bong"></i>
          </div>
        </button>

        {/* <button
          className="habit-button habit-increase"
          onClick={this.handleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button> */}
      </li>
    );
  }
}

export default Habit;
