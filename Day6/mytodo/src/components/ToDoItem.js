import React, { Component } from 'react';

export default class ToDoItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            item: this.props.item,
            text: this.props.item.text,
            important: this.props.item.important,
            completed: this.props.item.completed
        }
    }
    render() {
        return (
            <li>{this.state.text}
            <button 
            type="submit"
            onClick={this.props.onDelete}>
            <span role="img">🗑️</span></button></li>
        )
    }
}