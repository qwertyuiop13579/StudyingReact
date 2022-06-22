const initialState = {
    books: []
}

// books: [
//     { id: 1, title: 'Name1', author: 'Author1' },
//     { id: 2, title: 'Name2', author: 'Author2' },
//     { id: 3, title: 'Name3', author: 'Author3' },
// ]

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BOOKS_LOADED':
            return {
                books: action.payload,
            };
        default:
            return state;
    }
}

export default reducer;