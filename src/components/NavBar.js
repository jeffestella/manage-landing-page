import React from 'react';
import navBarStyles from './NavBar.module.css';

import CTABtn from './CTABtn';
import logo from '../assets/logo.svg';

const NavBar = () => {
    return (
        <nav className={navBarStyles.container}>
            <img 
                className={navBarStyles.logo} 
                src={logo} 
                alt="logo" 
            />
            <ul className={navBarStyles.navLinks}>
                <li><a href="/">Pricing</a></li>
                <li><a href="/">Product</a></li>
                <li><a href="/">About Us</a></li>
                <li><a href="/">Careers</a></li>
                <li><a href="/">Community</a></li>
            </ul>
            <CTABtn />
        </nav>
    );
}

export default NavBar;