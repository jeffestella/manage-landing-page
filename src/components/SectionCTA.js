import React from 'react';
import sectionCTAStyles from './SectionCTA.module.css';

import CTABtn from './CTABtn';

const SectionCTA = () => {
    return (
        <section className={sectionCTAStyles.container}>
            <div className={sectionCTAStyles.content}>
                <h1>Simplify how your team works today.</h1>
                <CTABtn invertColor={true} />
            </div>
        </section>
    );
}

export default SectionCTA;