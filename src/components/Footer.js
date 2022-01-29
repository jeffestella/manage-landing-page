import React from 'react';
import footerStyles from './Footer.module.css';

import CTABtn from './CTABtn';

// import logo from '../assets/logo.svg';
import logoWhite from '../assets/logo-white.svg';
import iconFacebook from '../assets/icon-facebook.svg';
import iconYoutube from '../assets/icon-youtube.svg';
import iconTwitter from '../assets/icon-twitter.svg';
import iconPinterest from '../assets/icon-pinterest.svg';
import iconInstagram from '../assets/icon-instagram.svg';

const Footer = () => {
    const socialLinks = [
        {
            url: "http://www.facebook.com",
            icon: iconFacebook,
            alt: "facebook icon"
        },
        {
            url: "http://www.youtube.com",
            icon: iconYoutube,
            alt: "youtube icon"
        },
        {
            url: "http://www.twitter.com",
            icon: iconTwitter,
            alt: "twitter icon"
        },
        {
            url: "http://www.pinterest.com",
            icon: iconPinterest,
            alt: "pinterest icon"
        },
        {
            url: "http://www.instagram.com",
            icon: iconInstagram,
            alt: "instagram icon"
        },
    ]
    
    const socialMenu = socialLinks.map( (link) => {
        return (
            <li>
                <a href={link.url}>
                    <img 
                        src={link.icon} 
                        alt={link.alt}
                        key={link.alt}
                    />
                </a>
            </li>
        );
    })
    return (
        <footer className={footerStyles.container}>
            <div className={footerStyles.left} >
                <p>Copyright 2020. All Rights Reserved.</p>
                {/* <img src={logo} alt="logo" /> */}
                <img src={logoWhite} alt="logo" />
                <ul>
                    {socialMenu}
                </ul>
            </div>
            <nav className={footerStyles.middle}>
                <ul>
                    <li><a href="/" key="home">Home</a></li>
                    <li><a href="/" key="pricing">Pricing</a></li>
                    <li><a href="/" key="product">Products</a></li>
                    <li><a href="/" key="about">About Us</a></li>
                    <li><a href="/" key="career">Careers</a></li>
                    <li><a href="/" key="community">Community</a></li>
                    <li><a href="/" key="privacy">Privacy Policy</a></li>
                </ul>
            </nav>
            <div className={footerStyles.right}>
                <form>
                    <input type="email" placeholder="  Updates in your inbox..."></input>
                    <CTABtn small={true} text="Go" />
                    <p className={footerStyles.error}>Please insert a valid email</p>
                </form>
                <p>Copyright 2020. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;