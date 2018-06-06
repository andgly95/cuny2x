import React, { Component } from 'react';
import './App.css';
import ToDoList from './components/ToDoList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: [],
      newNote: ""
    }
  }
  addNote = () => {
    this.setState({list: [...this.state.list, this.state.newNote]})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My To-Do List</h1>
        </header>
        <input 
        type="text" 
        value={this.state.newNote} 
        onChange={event => this.setState({newNote: event.target.value})} />
        <button onClick={this.addNote}>Add Note</button>
        <ToDoList list={this.state.list}/>
      </div>
    );
  }
}

export default App;
