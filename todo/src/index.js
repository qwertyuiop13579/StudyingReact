import React from 'react';
import ReactDOM from 'react-dom/client';

const TodoList = () => {
  const items = ['Learn React', 'Create Todo App']
  return (
    <ul>
      <li>{items[0]}</li>
      <li>{items[1]}</li>
    </ul>
  );
}

const AppHeader = () => {
  return (
    <h1>Todo List</h1>
  );
}

const SearchPanel = () => {
  const searchText = 'search';
  return (
    <input placeholder={searchText}></input>
  );
}

const App = () => {

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);