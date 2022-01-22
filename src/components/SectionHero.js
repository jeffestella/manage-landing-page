import React from 'react';
import sectionHeroStyles from './SectionHero.module.css';

import CTABtn from './CTABtn';
import heroGraphics from '../assets/illustration-intro.svg';

const SectionHero = () => {
    return (
        <section className={sectionHeroStyles.container}>
            <div className={sectionHeroStyles.copy}>
                <h1>Bring everyone together to build better products.</h1>
                <p>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
                <CTABtn />
            </div>
            <div className={sectionHeroStyles.graphics}>
                <img src={heroGraphics} alt="data graphics" />
            </div>
        </section>
    );
}

export default SectionHero;