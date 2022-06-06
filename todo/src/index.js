import React from 'react';
import ReactDOM from 'react-dom/client';

import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import TodoList from './components/TodoList';

const App = () => {
  const todoData = [
    { id: 1, label: 'Learn React', important: false },
    { id: 2, label: 'Create Todo App', important: true },
    { id: 3, label: 'Read documentation', important: true }
  ];
  return (
    <div>
      <AppHeader />
      <SearchPanel />
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