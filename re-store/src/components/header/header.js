import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import './header.css';

const Header = ({ numItems, total }) => {
    return (
        <header className="header">
            <Link to="/" className="logo text-dark">ReStore</Link>
            <Link to="/cart" className="shopping-cart">
                {numItems} items (${total})
                <FontAwesomeIcon icon={faShoppingCart} className="cart-icon"></FontAwesomeIcon>
            </Link>
        </header>
    );
}

export default Header;