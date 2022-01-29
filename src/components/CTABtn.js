import React from 'react';
import ctaBtnStyles from './CTABtn.module.css';

const CTABtn = ({ text, invertColor, small, mobileHidden }) => {
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
            ${
                mobileHidden ? 
                ctaBtnStyles.mobileHidden :
                ''
            }
        `}>
            {text ? text : 'Get Started'}
        </button>
    );
}

export default CTABtn;