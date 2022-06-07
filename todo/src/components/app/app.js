import React from "react";

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from "../item-add-form/item-add-form";

import './app.css';

export default class App extends React.Component {

    state = {
        todoData: [
            { id: 1, label: 'Learn React', important: false },
            { id: 2, label: 'Create Todo App', important: true },
            { id: 3, label: 'Read documentation', important: true }
        ]
    };

    AddItem = (text) => {
        this.setState(({ todoData }) => {
            return {
                todoData: [...todoData, { id: todoData.length + 1, label: text, important: false }]
            }
        });
    }

    DeleteItem = (id) => {
        this.setState(({ todoData }) => {
            return { todoData: todoData.filter((item) => item.id !== id) };
        });
    }

    render() {
        return (
            <div className='todo-app'>
                <AppHeader toDo={3} done={1} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList items={this.state.todoData} onDeleted={this.DeleteItem} />
                <ItemAddForm AddItem={this.AddItem} />
            </div>
        );
    }
}