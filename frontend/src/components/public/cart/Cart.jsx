import React from 'react'
import './Cart.css'
import productImage from './bakery-510925_1920.jpg'
const Cart = () => {
    return (
        <div className="cart-container">
                <img src={productImage} alt="" className='cart-image' />
                <div className='cart-info'>
                    <h3>Product Name</h3>
                    <p>Product Description</p>
                    <p>Product Price</p>
                </div>
                <button className='cart-btn'>View More</button>
        </div>
    )
}

export default Cart