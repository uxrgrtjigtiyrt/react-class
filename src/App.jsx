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

  onClickDel=idx=>{
    const items=this.state.items;
    this.setState({
      items:[...items.slice(0,idx), ...items.slice(idx+1)]
    });
  }

  onChange = e => {
    this.setState({ value: e.target.value });
  };


  onClickMod=(value,idx)=>{
    const newItems=[...this.state.items.slice(0,idx),value,...this.state.items.slice(idx+1)];
    this.setState({items:newItems});
  }

  render() {
    return (
      <div className="App">
        <input type="text" className="App-input" onChange={this.onChange} />
        <button onClick={this.onClickAdd} className="App-button">추가</button>
        {this.state.items.map((value, idx) => (
          <TodoItem key={Math.random()} value={value} onClickDel={()=>{this.onClickDel(idx);}} onClickMod={()=>{const value=prompt();this.onClickMod(value,idx);}}/>
        ))}
      </div>
    );
  }
}
export default App; 