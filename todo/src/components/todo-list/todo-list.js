import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ items, onDeleted }) => {

    const elememts = items.map(item => {
        const { id, ...itemProps } = item;
        return (
            <li key={item.id} className="list-group-item">
                <TodoListItem {...itemProps} onDeleted={() => onDeleted(id)} />
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