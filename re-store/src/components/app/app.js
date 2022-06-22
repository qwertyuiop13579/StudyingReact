import React from 'react';
import { withBookstoreService } from '../hoc';

function App({ bookstoreService }) {

    console.log(bookstoreService.getBooks());
    return (
        <div className="app">
            Hello world!
        </div>
    );
}

export default withBookstoreService()(App);
