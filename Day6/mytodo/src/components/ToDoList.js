import React, {Component} from 'react';
import './../App.css';


class ToDoList extends Component {
    constructor(props) {
        super(props);
     
        this.createTasks = this.createTasks.bind(this);
      }
    createTasks(item) {
        console.log(item);
        var star = "★";
        if (item.important) star = "⭐"
        if (this.props.hideToggle && item.important){
            return (
                <li className="list-group-item"> <span onClick={() => this.star(item.key)} >{star}</span>{item.text} <span onClick={() => this.delete(item.key)} >🗑️</span>
               </li>
            )
        }
        else if (!this.props.hideToggle){
            return (
                <li className="list-group-item"> <span onClick={() => this.star(item.key)} >{star}</span>{item.text} <span onClick={() => this.delete(item.key)} >🗑️</span>
               </li>
            )
        }
        else {
            return <span></span>
        }
        
    }
    delete(key) {
        this.props.delete(key);
    }
    star(key) {
        this.props.star(key);
    }
    render() {
        var todoEntries = this.props.list;
        var listItems = todoEntries.map(this.createTasks);
    
        return (
            <ul className="col-md-4 list-group">{listItems}</ul>
        )
    };
}

export default ToDoList;