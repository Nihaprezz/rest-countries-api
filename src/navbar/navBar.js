import React from 'react';
import './navbar.css'

const Navbar = (props) => {
    return (
        <nav className="nav-bar">
            <h1>Where in the world?</h1>
            <div>
                <ion-icon name="moon-outline"></ion-icon>
                <p>Dark Mode</p>
            </div>
        </nav>
    )
}

export default Navbar;