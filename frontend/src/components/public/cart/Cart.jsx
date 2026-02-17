import React from 'react'
import './Cart.css'
import productImage from './bakery-510925_1920.jpg'
import { Link } from 'react-router-dom'
const Cart = ({path}) => {
    return (
        <div className="cart-container">
                <img src={productImage} alt="" className='cart-image' />
                <div className='cart-info'>
                    <h3>Product Name</h3>
                    <p>Product Description</p>
                    <p>Product Price</p>
                </div>
                <Link to={path}>
                    <button className='cart-btn'>View More</button>
                </Link>
        </div>
    )
}

export default Cart