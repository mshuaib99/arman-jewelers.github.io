// src/components/Cart.js
import React from 'react';
import { Link } from 'react-router-dom';

function Cart({ cart, clearCart }) {
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <section className="cart">
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    {cart.map((item, index) => (
                        <p key={index}>{item.name} - ${item.price.toFixed(2)}</p>
                    ))}
                    <p>Total: ${totalPrice.toFixed(2)}</p>
                    <button onClick={clearCart}>Clear Cart</button>
                    <Link to="/checkout" className="checkout-button">Proceed to Checkout</Link>
                </div>
            )}
        </section>
    );
}

export default Cart;
