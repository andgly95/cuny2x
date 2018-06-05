import React, { Component } from 'react';
import './App.css';

class ToDoItem extends Component {
  constructor(){
    super();
    this.state = {
      itemCompleted: false,
      itemText: "",
      itemStarred: false,
      itemNotSaved: true
    };
  }
  handleChange(event) {
    this.setState({itemText: event.target.value});
  }
  onSubmit(event) {
    event.preventDefault();
    this.setState({itemNotSaved: false});
  }
  render() {
    return (
      <form>
        {(this.state.itemNotSaved) ? <input type="text" value={this.state.itemText} onChange={this.handleChange.bind(this)}/> : (this.state.itemText)}
        {(this.state.itemNotSaved) ? <input type="button" value="Add Note" onClick={this.onSubmit.bind(this)}/> : undefined}
      </form>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDoItem />
      </div>
    );
  }
}

export default App;
