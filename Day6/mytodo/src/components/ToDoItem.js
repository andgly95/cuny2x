import React, { Component } from 'react';

export default class ToDoItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: this.props.item,
            completed: false
        }
    }
    render() {
        return (
            <li>{this.state.text}<input type="button" /></li>
        )
    }
}