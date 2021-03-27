import React, { Component } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";
import ProgressBar from "./progressBar";
import Tree from "./tree";
class Habits extends Component {
  //함수는 Object의 일종으로 handleIncrement함수는 habit이라는 함수를 가르키고 있으므로,
  //(아래처럼 {this.handleIncrement})함수의 이름을 인자로 전달해주면, 함수를 가르키고있는
  //참조값을 전달하는것이기 때문에 함수를 바로 호출하지는 않고,
  //함수를 가르키고있는 참조값만 아래 onIncrement 라는 prop으로 전달해주게된다.
  handleIncrement = (habit) => {
    this.props.onIncrement(habit);
  };
  handleDecrement = (habit) => {
    this.props.onDecrement(habit);
  };

  handleAdd = (name) => {
    this.props.onAdd(name);
  };

  render() {
    //내가 전달해준 콜백함수만 호출해! 라고 전달을 해주는 render함수 안의 로직.
    return (
      <>
        <div>
          <HabitAddForm class="habits_middle" onAdd={this.handleAdd} />

          <div>
            <ProgressBar class="habits_middle" />
            <div>
              <Tree class="habits_middle" />
              <img src="/images/lvl1.jpg" />
              <div>
                <ul>
                  {this.props.habits.map((habit) => (
                    <Habit
                      class="habits_middle"
                      key={habit.id}
                      habit={habit}
                      //위의 콜백함수로 전달한다.
                      onIncrement={this.handleIncrement}
                      onDecrement={this.handleDecrement}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Habits;
