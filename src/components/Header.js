import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <Link to="/">Arman Jewelry</Link>
                </div>
                <nav className="nav">
                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                </nav>
                <div className="cart-icon">
                    <Link to="/cart">
                        🛒
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;