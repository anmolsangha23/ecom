import React from "react";
import { Link } from 'react-router-dom';

import './NavBar.css';

function NavBar({cart}) {
    return (
        <nav className="navbar">
            <div className="container">
                <ul className="nav-links">
                    <li>
                        <Link to="/" className="text-white hover:text-gray-200">Product</Link>
                    </li>
                    <li>           
                        <Link to="/cart" className="text-white hover:text-gray-200">Cart ({cart})</Link>
                    </li>
                </ul>
            </div>
        </nav>

    );
};

export default NavBar;