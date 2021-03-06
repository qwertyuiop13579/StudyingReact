import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import App from './components/app';
import reducer from './reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({ reducer: reducer });

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);