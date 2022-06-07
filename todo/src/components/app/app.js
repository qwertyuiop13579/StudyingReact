import React from "react";

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from "../item-add-form/item-add-form";

import './app.css';

export default class App extends React.Component {
    maxId = 100;

    state = {
        todoData: [
            this.createItem('Learn React'),
            this.createItem('Create Todo App'),
            this.createItem('Read documentation'),
        ],
        term: ''
    };

    createItem(label) {
        return {
            id: this.maxId++,
            label: label,
            important: false,
            done: false
        }
    }

    toggleProperty(arr, id, propname) {
        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = { ...oldItem, [propname]: !oldItem[propname] };

        return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];

    }

    AddItem = (text) => {
        const newItem = this.createItem(text);
        this.setState(({ todoData }) => {
            return {
                todoData: [...todoData, newItem]
            }
        });
    }

    DeleteItem = (id) => {
        this.setState(({ todoData }) => {
            return { todoData: todoData.filter((item) => item.id !== id) };
        });
    }

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return { todoData: this.toggleProperty(todoData, id, 'important') };
        });
    }

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return { todoData: this.toggleProperty(todoData, id, 'done') };

        });
    }

    onChangeSearch = (term) => {
        this.setState({ term });
    }

    search(items, term) {
        if (!term) return items;
        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) !== -1;
        });
    }

    render() {
        const { todoData, term } = this.state;

        const visibleItems = this.search(todoData, term);
        const doneCount = visibleItems.filter(el => el.done).length;
        const toDoCount = visibleItems.length - doneCount;

        return (
            <div className='todo-app'>
                <AppHeader toDo={toDoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel onChangeSearch={this.onChangeSearch} />
                    <ItemStatusFilter />
                </div>
                <TodoList
                    items={visibleItems}
                    onDeleted={this.DeleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                <ItemAddForm AddItem={this.AddItem} />
            </div>
        );
    }
}