import React from 'react';
import featureCardStyles from './FeatureCard.module.css';

const FeatureCard = ({ index, heading, blurb }) => {
    return (
        <article className={featureCardStyles.container}>
            <div className={featureCardStyles.index}>
                {index < 10 ? 
                `0${index+1}` :
                index}
            </div>
            <div className={featureCardStyles.text}>
                <h1>{heading}</h1>
                <p>{blurb}</p>
            </div>
        </article>
    );
}

export default FeatureCard;