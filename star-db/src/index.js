import React from 'react';
import ReactDOM from 'react-dom/client';

const App = ()=>{
  return (
    <div className="App">
      <header className="App-header">
        <p>
         StarDB
        </p>
      </header>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

