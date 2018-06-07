import React from 'react';
import ToDoItem from './ToDoItem.js';

const ToDoList = (props) => {
    const itemList = props.list.map((item, index) => {
            if (!item.completed) {
                return(
                    <ToDoItem item={item} key={index} index={index} onDelete={props.onDelete} />
                )
            }
            else {
                return(
                    <div>  </div>
                )
            }
        });
    return (
        <ul className="col-md-4">{itemList}</ul>
    );
}

export default ToDoList;