import React from 'react'
import Header from '../../components/public/Header.jsx'
import luxuryImage from '../../assets/brands-people-yHjcZCaiKFY-unsplash.jpg'
import './Home.css'
const Home = () => {
    return (
        <>
        <Header />
        <section className="hero-section">
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h3>Luxury Bakery</h3>
                <h1>Fresh Luxury Bakery</h1>
                <p>Free shipping on all orders over $100</p>
                <button className="shop-btn">Shop Now</button>
            </div>
            <img src={luxuryImage} alt="Luxury Bakery" className="hero-image" />
        </section>
        <section>
            <h2>Our Products</h2>
            <div>

            </div>
        </section>
        </>
    )
}
export default Home;