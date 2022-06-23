const booksRequeted = () => {
    return {
        type: 'BOOKS_REQUESTED',
    }
};

const booksLoaded = (newBooks) => {
    return {
        type: 'BOOKS_LOADED',
        payload: newBooks,
    }
};

const booksError = (error) => {
    return {
        type: 'BOOKS_ERROR',
        payload: error,
    }
};

export {
    booksRequeted,
    booksLoaded,
    booksError
};