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
    this.deleteNote = this.deleteNote.bind(this);
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
  deleteNote = (key) => {
    var filteredItems = this.state.list.filter(item => {return (item.key !== key)});
    this.setState({
      list: filteredItems
    })
    //this.setState({list: this.state.list.splice(index, 1)})
  }
  starNote = (key) => {
    var newList = this.state.list;
    for (let item of newList) {
      if (item.key == key){
        item.important = !item.important;
      }
    }
    this.setState({
      list: newList
    })
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
        <ToDoList list={this.state.list} delete={this.deleteNote} star={this.starNote}/>
      </div>
    );
  }
}

export default App;
