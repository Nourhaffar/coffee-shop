import React from 'react'
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Brand Column */}
                <div className="footer-column">
                    <div className="footer-logo">LB</div>
                    <p className="footer-description">
                        Small batches, premium ingredients, and a passion for perfection. 
                        We bring the art of European baking to your table.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="footer-column">
                    <h3>Explore</h3>
                    <ul className="footer-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Our Menu</a></li>
                        <li><a href="#">Our Story</a></li>
                        <li><a href="#">Locations</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="footer-column">
                    <h3>Visit Us</h3>
                    <div className="footer-contact">
                        <p><MapPin size={18} /> 123 Bakery Lane, Sweet City</p>
                        <p><Phone size={18} /> (555) 123-4567</p>
                        <p><Mail size={18} /> hello@luxurybakery.com</p>
                    </div>
                </div>

                {/* Socials / Newsletter */}
                <div className="footer-column">
                    <h3>Follow Us</h3>
                    <ul className="footer-links">
                        <li><a href="#" style={{display: 'flex', alignItems: 'center', gap: '8px'}}><Instagram size={18}/> Instagram</a></li>
                        <li><a href="#" style={{display: 'flex', alignItems: 'center', gap: '8px'}}><Facebook size={18}/> Facebook</a></li>
                        <li><a href="#" style={{display: 'flex', alignItems: 'center', gap: '8px'}}><Twitter size={18}/> Twitter</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Luxury Bakery. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
