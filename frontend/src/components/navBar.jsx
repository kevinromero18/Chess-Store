import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <Link to='/'><h1>Chess Store</h1></Link>
            <ul>
                <li><Link to='/cart'>CART</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;