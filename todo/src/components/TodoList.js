import React from 'react';

import TodoListItem from './TodoListItem';

const TodoList = ({ items }) => {

    const elememts = items.map(item => {
        const { id, ...itemProps } = item;
        return (
            <li key={item.id}>
                <TodoListItem {...itemProps} />
            </li>
        )
    })
    return (
        <ul>
            {elememts}
        </ul>
    );
}

export default TodoList;