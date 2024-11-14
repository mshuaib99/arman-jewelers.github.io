// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import './styles.css';

function App() {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/products" element={<ProductList addToCart={addToCart} />} />
                <Route path="/cart" element={<Cart cart={cart} clearCart={clearCart} />} />
                <Route path="/checkout" element={<Checkout cart={cart} clearCart={clearCart} />} />
            </Routes>
        </Router>
    );
}

export default App;