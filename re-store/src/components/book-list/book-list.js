import React from "react";
import { connect } from 'react-redux';

import './book-list.css';

import BookListItem from '../book-list-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { fetchBooks } from '../../actions';
import { withBookstoreService } from '../hoc';
import { compose } from '../../utils';

class BookList extends React.Component {

    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const { books, loading, error } = this.props;
        if (loading) {
            return <Spinner></Spinner>
        }
        if (error) {
            return <ErrorIndicator></ErrorIndicator>
        }
        return (
            <ul className="book-list">
                {
                    books.map((book) => {
                        return (
                            <li key={book.id}>
                                <BookListItem book={book} />
                            </li>
                        );
                    })
                }
            </ul>
        );
    }

}

const mapStateToProps = ({ books, loading, error }) => {
    return { books, loading, error };
}

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch)
    }
}


export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);