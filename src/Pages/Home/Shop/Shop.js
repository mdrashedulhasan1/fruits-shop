import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('./product.JSON')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    const [cart, setCart] = useState([]);
    const handleAddToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className='products-container'>
            {
                products.map(product => <Product key={product.id} handleAddToCart={handleAddToCart} product={product}></Product>)
            }
            </div>
            <div className='shop-cart'>
               <Cart key={cart.id} cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;