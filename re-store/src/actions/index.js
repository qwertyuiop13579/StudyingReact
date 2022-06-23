const booksRequeted = () => {
    return {
        type: 'FETCH_BOOKS_REQUEST',
    }
};

const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks,
    }
};

const booksError = (error) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: error,
    }
};

const bookAddedToCart = (bookId) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: bookId,
    }
};

const bookDecreasedInCart = (bookId) => {
    return {
        type: 'BOOK_DECREASED_IN_CART',
        payload: bookId,
    }
};

const bookDeletedFromCart = (bookId) => {
    return {
        type: 'BOOK_DELETED_FROM_CART',
        payload: bookId,
    }
};

const fetchBooksOld = (bookstoreService, dispatch) => () => {
    dispatch(booksRequeted());
    bookstoreService.getBooks()
        .then(data => dispatch(booksLoaded(data)))
        .catch(err => dispatch(booksError(err.toString())));
}

const fetchBooks = (bookstoreService) => () => (dispatch) => {
    dispatch(booksRequeted());
    bookstoreService.getBooks()
        .then(data => dispatch(booksLoaded(data)))
        .catch(err => dispatch(booksError(err.toString())));
}

export {
    fetchBooks,
    bookAddedToCart,
    bookDeletedFromCart,
    bookDecreasedInCart
};