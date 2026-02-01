import React from 'react'
import { User } from 'lucide-react'
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
                    <li>Home</li>
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