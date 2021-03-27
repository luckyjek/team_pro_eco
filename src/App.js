import React, { Component } from "react";
//import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import axios from "axios";
import "./App.css";
//import GameList from "./components/game_list/game_list";
import Cust from "./components/cust";
import Habits from "./components/habits";
import Navbar from "./components/navbar";
import styled from "styled-components";
import Button from "./components/button";

class App extends Component {
  state = {
    /*이곳에 전체적인 데이터가 들어있으므로, 데이터가 삭제되거나 추가되거나 변경되는 경우에
     이 컴포넌트 안에서 수정하는 로직들을 가지고 있어야된다 */
    data: [{ name: "basic" }],
    habits: [
      { id: 1, name: "Reading", count: 0 },
      // { id: 2, name: "Running", count: 0 },
      // { id: 3, name: "Coding", count: 0 },
    ],
  };

  //함수는 Object의 일종으로 handleIncrement함수는 habit이라는 함수를 가르키고 있으므로,
  //(아래처럼 {this.handleIncrement})함수의 이름을 인자로 전달해주면, 함수를 가르키고있는
  //참조값을 전달하는것이기 때문에 함수를 바로 호출하지는 않고,
  //함수를 가르키고있는 참조값만 아래 onIncrement 라는 prop으로 전달해주게된다.
  handleIncrement = (habit) => {
    console.log(`handleIncrement ${habit.name}`);
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    //key : 로컬변수(복사된 배열데이터) -> 동일할 경우 habits로  생략이가능
    this.setState({ habits: habits });

    //state오브젝트 안에 있는 count를 증가 한 뒤, state를 업데이트한다.
    //this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = (habit) => {
    console.log(`handleDecrement ${habit.name}`);
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    //key : 로컬변수(복사된 배열데이터) -> 동일할 경우 habits로  생략이가능
    this.setState({ habits: habits });
    //state오브젝트 안에 있는 count를 증가 한 뒤, state를 업데이트한다.
    //const count = this.state.count - 1;
    //this.setState({ count: count < 0 ? 0 : count });
  };

  handleAdd = (name) => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits: habits });
  };

  /*함수로 axios받아오기 */
  componentDidMount() {
    axios
      .get("http://localhost:80/game/info/basic")
      .then((response) => console.log(response.data));
  }

  render() {
    return (
      <>
        <ul>{this.state.point_amount}</ul>
        <Container />
        <Navbar
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <Button />
        <section>
          <Habits
            habits={this.state.habits}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onAdd={this.handleAdd}
          />
        </section>
      </>
    );
  }
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      to right,
      rgba(20, 20, 20, 0.1) 10%,
      rgba(20, 20, 20, 0.7) 80%,
      rgba(20, 20, 20, 1)
    ),
  background: url(https://source.unsplash.com/random/1920x1080);
  background-size: cover;
`;

export default App;
