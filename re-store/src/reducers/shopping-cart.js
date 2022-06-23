const updateShoppingCart = (state, action) => {
    if (state === undefined) {
        return {
            cartItems: [],
            orderTotal: 0,
        };
    }
    switch (action.type) {
        case 'BOOK_ADDED_TO_CART':
            {
                const { bookList: { books }, shoppingCart: { cartItems, orderTotal } } = state;
                const id = action.payload;
                const book = books.find((item) => item.id === id);
                const index = cartItems.findIndex((item) => item.id === id);
                if (index !== -1) {
                    const updatedItem = { ...cartItems[index] };
                    updatedItem.count++;
                    updatedItem.total += book.price;
                    return {
                        cartItems: [
                            ...cartItems.slice(0, index),
                            updatedItem,
                            ...cartItems.slice(index + 1)
                        ],
                        orderTotal: orderTotal + book.price
                    }
                }
                const newItem = { id: book.id, title: book.title, count: 1, total: book.price }
                return {
                    cartItems: [...cartItems, newItem],
                    orderTotal: orderTotal + book.price
                };
            }
        case "BOOK_DECREASED_IN_CART":
            {
                const { bookList: { books }, shoppingCart: { cartItems, orderTotal } } = state;
                const id = action.payload;
                const book = books.find((item) => item.id === id);
                const index = cartItems.findIndex((item) => item.id === id);
                const updatedItem = { ...cartItems[index] };
                if (updatedItem.count === 1) {
                    return {
                        cartItems: [
                            ...cartItems.slice(0, index),
                            ...cartItems.slice(index + 1)
                        ],
                        orderTotal: orderTotal - cartItems[index].total
                    };
                }
                updatedItem.count--;
                updatedItem.total -= book.price;
                return {
                    cartItems: [
                        ...cartItems.slice(0, index),
                        updatedItem,
                        ...cartItems.slice(index + 1)
                    ],
                    orderTotal: orderTotal - book.price
                }
            }

        case "BOOK_DELETED_FROM_CART":
            {
                const { shoppingCart: { cartItems, orderTotal } } = state;
                const id = action.payload;
                const index = cartItems.findIndex((item) => item.id === id);
                return {
                    cartItems: [
                        ...cartItems.slice(0, index),
                        ...cartItems.slice(index + 1)
                    ],
                    orderTotal: orderTotal - cartItems[index].total
                }
            }
        default:
            return state.shoppingCart;
    }
}

export default updateShoppingCart;