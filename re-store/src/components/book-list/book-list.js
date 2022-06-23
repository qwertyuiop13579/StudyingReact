import React from "react";
import { connect } from 'react-redux';

import './book-list.css';

import BookListItem from '../book-list-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { fetchBooks, bookAddedToCart } from '../../actions';
import { withBookstoreService } from '../hoc';
import { compose } from '../../utils';

class BookListContainer extends React.Component {

    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const { books, loading, error, onAddedToCart } = this.props;
        if (loading) {
            return <Spinner></Spinner>
        }
        if (error) {
            return <ErrorIndicator></ErrorIndicator>
        }
        return <BookList books={books} onAddedToCart={onAddedToCart}></BookList>
    }
}

const BookList = ({ books, onAddedToCart }) => {
    return (
        <ul className="book-list">
            {
                books.map((book) => {
                    return (
                        <li key={book.id}>
                            <BookListItem book={book} onAddedToCart={() => onAddedToCart(book.id)} />
                        </li>
                    );
                })
            }
        </ul>
    );
}

const mapStateToProps = ({ books, loading, error }) => {
    return { books, loading, error };
}

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch),
        onAddedToCart: (id) => dispatch(bookAddedToCart(id)),
    }
}


export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);