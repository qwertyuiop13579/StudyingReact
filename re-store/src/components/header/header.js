import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './header.css';

const Header = ({ numItems, total }) => {
    return (
        <header className="header">
            <a className="logo text-dark" href="/">ReStore</a>
            <a href="/cart" className="shopping-cart">
                {numItems} items (${total})
                <FontAwesomeIcon icon={faShoppingCart} className="cart-icon"></FontAwesomeIcon>
            </a>
        </header>
    );
}

export default Header;