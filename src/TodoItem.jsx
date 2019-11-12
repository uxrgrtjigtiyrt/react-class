import React from "react";
import './App.css';
import styled from "styled-components";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="border">
      <div className="App-div">
        <span>{this.props.value}</span>
        <button className="App-button" onClick={this.props.onClickMod}>수정</button>
        <button className="App-button" onClick={this.props.onClickDel}>삭제</button>
      </div>
      </div>
    );
  }
}

export default TodoItem;