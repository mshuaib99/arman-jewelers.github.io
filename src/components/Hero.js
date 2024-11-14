// src/components/Hero.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
    return (
        <section className="hero">
            <div className="hero-overlay">
                <div className="hero-content">
                    <h2 className="hero-title">Discover the Beauty of Fine Jewelry</h2>
                    <p className="hero-description">
                        Experience elegance crafted with passion and precision, for every occasion.
                    </p>
                    <Link to="/products" className="hero-button">
                        Shop Now
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Hero;