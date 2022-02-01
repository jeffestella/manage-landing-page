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
                <div className={featureCardStyles.index}>
                    <p>{index < 10 ?
                        `0${index + 1}` :
                        index}</p>
                    <h1>{heading}</h1>
                </div>
                <h1>{heading}</h1>
                <p>{blurb}</p>
            </div>
        </article>
    );
}

export default FeatureCard;