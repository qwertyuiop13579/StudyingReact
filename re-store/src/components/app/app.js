import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage, CartPage } from '../pages';
import Header from '../header';

function App() {
    return (
        <main role="main" className="app">
            <Header numItems={5} total={100}></Header>
            <Routes>
                <Route path="/" element={<HomePage></HomePage>}></Route>
                <Route path="/home" element={<HomePage></HomePage>}></Route>
                <Route path="/cart" element={<CartPage></CartPage>}></Route>
                <Route path="/*" element={<h2>Page not found</h2>}></Route>
            </Routes>

        </main>
    );
}

export default App;
