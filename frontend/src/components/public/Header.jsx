import React from 'react'
import { User } from 'lucide-react'
import { Link } from 'react-router-dom'
import './Header.css'
const Header = () => {
    return (
        <nav>
            <div>
                {/* loge */}
                <div className="logo">
                    LB
                </div>
            </div>
            <div>
                {/* links */}
                <ul>
                    <li>
                        <Link to="/" className='link'>Home</Link>
                    </li>
                    <li>Menu</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div>
                {/* cart */}
                <User />
            </div>
        </nav>
    )
}
export default Header
