import React from 'react';
import ToDoItem from './ToDoItem.js';

const ToDoList = (props) => {
    const itemList = props.list.map((item, index) => {
            return(
                <ToDoItem item={item} index={index}/>
            )
        });
    return (
        <ul className="col-md-4">{itemList}</ul>
    );
}

export default ToDoList;