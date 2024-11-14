// src/components/Checkout.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Checkout({ cart, clearCart }) {
    const navigate = useNavigate();
    const [form, setForm] = useState({ name: '', address: '', card: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you for your purchase, ${form.name}!`);
        clearCart();
        navigate('/');
    };

    return (
        <section className="checkout">
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />

                <label>Address:</label>
                <input type="text" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} required />

                <label>Card Number:</label>
                <input type="text" value={form.card} onChange={(e) => setForm({ ...form, card: e.target.value })} required />

                <button type="submit">Place Order</button>
            </form>
        </section>
    );
}

export default Checkout;
