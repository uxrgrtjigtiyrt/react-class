import React from "react";
import TodoItem from "./TodoItem";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      value: ""
    };
  }

  onClickAdd = e => {
    const items = this.state.items;
    items.push(this.state.value);
    this.setState({
      items
    });
  };

  onChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <input type="text" className="App-input" onChange={this.onChange} />
        <button onClick={this.onClickAdd} className="App-button">추가</button>
        {this.state.items.map((value, idx) => (
          <TodoItem key={idx} value={value} />
        ))}
      </div>
    );
  }
}
export default App;
