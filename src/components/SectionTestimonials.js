import React from 'react';
import sectionTestimonialsStyles from './SectionTestimonials.module.css';

import avatarAli from '../assets/avatar-ali.png';
import avatarAnisha from '../assets/avatar-anisha.png';
import avatarRichard from '../assets/avatar-richard.png';
import avatarShanai from '../assets/avatar-shanai.png';

import CTABtn from './CTABtn';
import TestimonialCard from './TestimonialCard';

const testimonials = [
    {
        name: "Anisha Li",
        photo: avatarAnisha,
        blurb: `"Manage has supercharged our team\'s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."`

    },
    {
        name: "Ali Bravo",
        photo: avatarAli,
        blurb: `"We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused."`

    },
    {
        name: "Richard Watts",
        photo: avatarRichard,
        blurb: `"Managed allows us to provide structure and process. It keeps us organized and focused. I can\'t stop recommending them to everyone I talk to!"`

    },
    {
        name: "Shanai Gough",
        photo: avatarShanai,
        blurb: `"Their software allows us to track, manage, and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive."`

    },
]

const carouselContent = testimonials.map( (testimonial) => {
    return (
        <TestimonialCard 
            name={testimonial.name}
            photo={testimonial.photo}
            blurb={testimonial.blurb}
        />
    );
})

const SectionTestimonials = () => {
    return (
        <section className={sectionTestimonialsStyles.container}>
            <h1>What they've said</h1>
            <div className={sectionTestimonialsStyles.carousel}>
                {carouselContent}
            </div>
            <CTABtn />
        </section>
    );
}

export default SectionTestimonials;

