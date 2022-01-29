import React, { useState } from 'react';
import navBarStyles from './NavBar.module.css';

import CTABtn from './CTABtn';
import logo from '../assets/logo.svg';
import iconHamburger from '../assets/icon-hamburger.svg'
import iconClose from '../assets/icon-close.svg'

const NavBar = () => {
    const [menuActive, setMenuActive] = useState(false);
    return (
        <nav className={navBarStyles.container}>
            <div className={`${navBarStyles.modal} ${
                !menuActive ? navBarStyles.hidden : ''
            }`}>
            </div>
            <img 
                className={navBarStyles.logo} 
                src={logo} 
                alt="logo" 
            />
            <ul className={`${navBarStyles.navLinks} ${
                !menuActive ? navBarStyles.hidden : ''
            }`}>
                <li><a href="/">Pricing</a></li>
                <li><a href="/">Product</a></li>
                <li><a href="/">About Us</a></li>
                <li><a href="/">Careers</a></li>
                <li><a href="/">Community</a></li>
            </ul>
            <CTABtn mobileHidden={true} />
            <button 
                className={navBarStyles.menuBtn}
                onClick={()=> {setMenuActive(!menuActive)}}    
            >
                <img 
                    src={menuActive ? iconClose : iconHamburger} 
                    alt="menu icon" />
            </button>
        </nav>
    );
}

export default NavBar;