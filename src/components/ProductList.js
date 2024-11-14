// src/components/ProductList.js
import React from 'react';
import ProductCard from './ProductCard';

const products = [
    { id: 1, name: 'Elegant Ring', price: 120, image: '/images/ring.jpg' },
    { id: 2, name: 'Classic Necklace', price: 250, image: '/images/necklace.jpg' },
    { id: 3, name: 'Stylish Bracelet', price: 85, image: '/images/bracelet.jpg' },
];

function ProductList({ addToCart }) {
    return (
        <div className="product-list">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
        </div>
    );
}

export default ProductList;
