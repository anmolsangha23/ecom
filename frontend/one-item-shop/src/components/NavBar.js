import React from "react";
import './NavBar.css';

function NavBar() {
    return (
        <nav className="navbar">
            <div className="container">
                <ul className="nav-links">
                    <li><a href="/Product">Product</a></li>
                    <li><a href="/Cart">Cart</a></li>
                </ul>
            </div>
        </nav>

    );
};

export default NavBar;