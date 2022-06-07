import React from "react";

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';

const App = () => {
    const todoData = [
        { id: 1, label: 'Learn React', important: false },
        { id: 2, label: 'Create Todo App', important: true },
        { id: 3, label: 'Read documentation', important: true }
    ];
    return (
        <div className='todo-app'>
            <AppHeader toDo={3} done={1} />
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>
            <TodoList items={todoData} />
        </div>
    );
}

export default App;
