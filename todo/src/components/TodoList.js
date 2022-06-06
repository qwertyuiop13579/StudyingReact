import React from 'react';

import TodoListItem from './TodoListItem';

const TodoList = () => {
    const items = ['Learn React', 'Create Todo App'];
    return (
        <ul>
            <li>
                <TodoListItem />
            </li>
            <li>
                <TodoListItem />
            </li>
        </ul>
    );
}

export default TodoList;