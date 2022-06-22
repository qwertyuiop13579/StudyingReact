import React from 'react';
import BookList from '../book-list/book-list';

const HomePage = () => {
    const books = [
        { id: 1, title: 'Name1', author: 'Author1' },
        { id: 2, title: 'Name2', author: 'Author2' },
        { id: 3, title: 'Name3', author: 'Author3' },
    ];
    return (
        <div>
            <BookList books={books}></BookList>
        </div>
    )
}

export default HomePage;