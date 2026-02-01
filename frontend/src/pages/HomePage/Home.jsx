import React from 'react'
import Header from '../../components/public/Header.jsx'
import Cart from '../../components/public/cart/Cart.jsx'
import luxuryImage from '../../assets/brands-people-yHjcZCaiKFY-unsplash.jpg'
import './Home.css'
import Footer from '../../components/public/Footer.jsx'
import ReviewCard from '../../components/public/ReviewCard.jsx'

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
        <section className='products-section'>
            <div className='products-header'>
                <h1>Our Products</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
            </div>
            <div className='products-list'>
                <Cart />
                <Cart />
                <Cart />
                <Cart />
            </div>
        </section>
        <section className="visit-section">
            <div className="visit-content">
                <h2>Baked with Love</h2>
                <p>
                    Experience the finest artisanal pastries and breads, baked fresh daily using traditional methods 
                    and premium ingredients. Visit us to taste the difference.
                </p>
                <div className="reviews-container">
                    <ReviewCard 
                        quote="The best croissants I've ever had! Flaky, buttery, and absolute perfection." 
                        author="Sarah Jenkins" 
                    />
                    <ReviewCard 
                        quote="A hidden gem. The sourdough bread is out of this world. Highly recommend!" 
                        author="Michael Chen" 
                    />
                    <ReviewCard 
                        quote="Beautiful atmosphere and even better pastries. My new favorite morning spot." 
                        author="Emma Wilson" 
                    />
                </div>
                <button className="shop-btn">Our Story</button>
            </div>
        </section>
        <Footer />
        </>
    )
}
export default Home;