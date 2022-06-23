const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [
        { id: 1, title: 'titel1', count: 12, total: 100 },
        { id: 2, title: 'titel2', count: 12, total: 100 }
    ],
    orderTotal: 199,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_BOOKS_REQUEST':
            return {
                ...state,
                books: [],
                error: null,
                loading: true
            };
        case 'FETCH_BOOKS_SUCCESS':
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null,
            };
        case 'FETCH_BOOKS_FAILURE':
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default reducer;