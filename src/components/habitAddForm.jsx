import React, { Component } from "react";

class HabitAddForm extends Component {
  //input에 입력된 데이터를 알아올때 ref를 사용.
  inputRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.inputRef.current.value = "";
  };

  render() {
    return (
      <form className="add-form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="id:basic"
        />
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="point:5000"
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}
export default HabitAddForm;
