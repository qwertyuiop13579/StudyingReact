import React from 'react';

import TodoListItem from './TodoListItem';
import './TodoList.css'; 

const TodoList = ({ items }) => {

    const elememts = items.map(item => {
        const { id, ...itemProps } = item;
        return (
            <li key={item.id} className="list-group-item">
                <TodoListItem {...itemProps} />
            </li>
        )
    })
    return (
        <ul className="list-group todo-list">
            {elememts}
        </ul>
    );
}

export default TodoList;