import React from "react";
import { connect } from 'react-redux';

import './book-list.css';

import BookListItem from '../book-list-item';
import { booksLoaded } from '../../actions';
import { withBookstoreService } from '../hoc';
import { compose } from '../../utils';

class BookList extends React.Component {

    componentDidMount() {
        const { bookstoreService } = this.props;
        const data = bookstoreService.getBooks();

        this.props.booksLoaded(data);
    }

    render() {
        const { books } = this.props;
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

const mapStateToProps = (state) => {
    return {
        books: state.books,
    };
}

const mapDispatchToProps = {
    booksLoaded,
}

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);