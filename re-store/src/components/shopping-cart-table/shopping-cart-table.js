import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'

import './shopping-cart-table.css';

const ShoppingCartTable = () => {
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
                    <tr>
                        <th>1</th>
                        <td>My favourite book</td>
                        <td>10</td>
                        <td>$100</td>
                        <td>
                            <button className="btn btn-outline-danger">
                                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                            </button>
                            <button className="btn btn-outline-success">
                                <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
                            </button>
                            <button className="btn btn-outline-warning">
                                <FontAwesomeIcon icon={faMinusCircle}></FontAwesomeIcon>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="total">
                Total: $299
            </div>
        </div>
    );
}

export default ShoppingCartTable;