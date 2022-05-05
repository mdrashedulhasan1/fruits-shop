import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for(const product of cart){
        total = total+product.price;
    }
    let allName = [];
    for(const product of cart){
        allName = allName+"📦"+product.name;
        
    }
   const style = {
       boxShadow:'10px 10px 40px gray',
       padding:'10px',
       textAlign:'center',
       borderRadius:'20px',
   }
    return (
        <div style={style}>
            <h1>Fruits Added: {cart.length}</h1>
            <h3>Price: {total}</h3>
            <p style={{color:'gray'}}>Product Name:<br />{allName}</p>
        </div>
    );
};

export default Cart;