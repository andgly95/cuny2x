import React, { Component } from 'react';
import './App.css';
import ToDoList from './components/ToDoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      newNote: ""
    }
  }
  addNote = () => {
    let newNote = {
      text: this.state.newNote,
      important: false,
      completed: false,
      key: Date.now()
    }
    this.setState({ list: [...this.state.list, newNote], newNote: "" });
  }
  deleteNote = (index) => {
    console.log(index.target.value);
    //this.setState({list: this.state.list.splice(index, 1)})
  }
  render() {
    return (
      <div className="App" id="container">
        <header className="App-header">
          <h1 className="App-title">My To-Do List</h1>
        </header>
        <input
          type="text"
          value={this.state.newNote}
          onChange={event => this.setState({ newNote: event.target.value })} />
        <button onClick={this.addNote}>Add Note</button>
        <ToDoList list={this.state.list} onDelete={this.deleteNote}/>
      </div>
    );
  }
}

export default App;
