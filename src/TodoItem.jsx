import React from "react";
import './App.css'

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="border">
      <div className="App-div">
        <span>{this.props.value}</span>
        <button className="App-button">수정</button>
        <button className="App-button">삭제</button>
      </div>
      </div>
    );
  }
}

export default TodoItem;