import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage, CartPage } from '../pages';

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<HomePage></HomePage>}></Route>
                <Route path="/home" element={<HomePage></HomePage>}></Route>
                <Route path="/cart" element={<CartPage></CartPage>}></Route>
                <Route path="/*" element={<h2>Page not found</h2>}></Route>
            </Routes>

        </div>
    );
}

export default App;
