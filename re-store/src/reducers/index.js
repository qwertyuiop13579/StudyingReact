const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotal: 0,
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
        case 'BOOK_ADDED_TO_CART':
            const id = action.payload;
            const book = state.books.find((item) => item.id === id);
            const index = state.cartItems.findIndex((item) => item.id === id);
            if (index !== -1) {
                const updatedItem = { ...state.cartItems[index] };
                updatedItem.count++;
                updatedItem.total += book.price;
                return {
                    ...state,
                    cartItems: [
                        ...state.cartItems.slice(0, index),
                        updatedItem,
                        ...state.cartItems.slice(index + 1)
                    ],
                    orderTotal: state.orderTotal + book.price
                }
            }
            const newItem = { id: book.id, title: book.title, count: 1, total: book.price }
            return {
                ...state,
                cartItems: [...state.cartItems, newItem],
                orderTotal: state.orderTotal + book.price
            }
        default:
            return state;
    }
}

export default reducer;