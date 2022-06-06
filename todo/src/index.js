import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import 'font-awesome/css/font-awesome.min.css';

import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import TodoList from './components/TodoList';
import ItemStatusFilter from './components/ItemStatusFilter';

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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);