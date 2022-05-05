import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
const Product = (props) => {
    const { id, img, name, price, grade, packagingType, packagingSize, Organic } = props.product;
    const handleAddToCart = props.handleAddToCart;
    return (
        <div>
            <div className='product-container'>
                <img style={{height:'200px', width:'200px', borderRadius:'20px'}} src={img} alt="" />
                <h2>Name: {name}</h2>
                <h4>Price: ${price}</h4>
                <p>Grade: {grade}</p>
                <p>Packaging Type: {packagingType}</p>
                <p>Packaging Size: {packagingSize}</p>
                <p>Organic: {Organic}</p>
                <button onClick={()=> handleAddToCart(props.product)} className='product-button'><FontAwesomeIcon icon={faShoppingCart} /> Buy Now!</button>
            </div>
        </div>
    );
};

export default Product;