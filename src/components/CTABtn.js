import React from 'react';
import ctaBtnStyles from './CTABtn.module.css';

const CTABtn = ({ invertColor }) => {
    return (
        <button className={`${ctaBtnStyles.container}
            ${
                invertColor ? 
                ctaBtnStyles.inverted :
                ''
            }`}>
            Get Started
        </button>
    );
}

export default CTABtn;