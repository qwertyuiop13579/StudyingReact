import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';

import './shopping-cart-table.css';

const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {

    const renderRow = (item, index) => {
        const { id, title, count, total } = item;
        return (
            <tr key={id}>
                <th>{index + 1}</th>
                <td>{title}</td>
                <td>{count}</td>
                <td>${total}</td>
                <td>
                    <button onClick={() => onDelete(id)} className="btn btn-outline-danger">
                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                    </button>
                    <button onClick={() => onIncrease(id)} className="btn btn-outline-success">
                        <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
                    </button>
                    <button onClick={() => onDecrease(id)} className="btn btn-outline-warning">
                        <FontAwesomeIcon icon={faMinusCircle}></FontAwesomeIcon>
                    </button>
                </td>
            </tr>
        )
    }

    return (
        <div className="shopping-cart-table">
            <h2>Your Order</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(renderRow)}
                </tbody>
            </table>
            <div className="total">
                Total: ${total}
            </div>
        </div>
    );
}

const mapStateToProps = ({ cartItems, orderTotal }) => {
    return {
        items: cartItems,
        total: orderTotal
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrease: () => { },
        onDecrease: () => { },
        onDelete: () => { },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);