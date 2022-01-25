import React from 'react';
import ctaBtnStyles from './CTABtn.module.css';

const CTABtn = ({ text, invertColor, small }) => {
    return (
        <button className={`${ctaBtnStyles.container}
            ${
                invertColor ? 
                ctaBtnStyles.inverted :
                ''
            }
            ${
                small ?
                ctaBtnStyles.small :
                ''
            }
        `}>
            {text ? text : 'Get Started'}
        </button>
    );
}

export default CTABtn;