import React from 'react';
import testimonialCardStyles from './TestimonialCard.module.css';

const TestimonialCard = ({ name, photo, blurb}) => {
    return (
        <article className={testimonialCardStyles.container}>
            <img src={photo} alt={`${name}'s avatar`} />
            <div className={testimonialCardStyles.text}>
                <h1>{name}</h1>
                <p>{blurb}</p>
            </div>
        </article>
    );
}

export default TestimonialCard;