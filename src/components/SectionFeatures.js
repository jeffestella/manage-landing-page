import React from 'react';
import sectionFeaturesStyles from './SectionFeatures.module.css';

import FeatureCard from './FeatureCard';

const features = [
    {
        heading: "Track company- wide progress",
        blurb: "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way down to the smallest of details. Never lose sight of the bigger picture again."
    },
    {
        heading: "Advanced built-in reports",
        blurb: "Set internal deliver estimates and track progress toward company goals. Our customizable dashboard helps you build out the reports you need to keep key stakeholders informed."
    },
    {
        heading: "Everything you need in one place",
        blurb: "Stop jumping from one service to another to communicate, store files, track tasks, and share documents. Manage offers an all-in-one team productivity solution."
    }
]

const featureList = features.map( (feature, ind) => {
    return (
        <FeatureCard 
            index={ind}
            heading={feature.heading}
            blurb={feature.blurb}
            key={`featureCard${ind}`}
        />
    )
})

const SectionFeatures = () => {
    return (
        <section className={sectionFeaturesStyles.container}>
            <div className={sectionFeaturesStyles.usp}>
                <h1>What's different about Manage?</h1>
                <p>Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</p>
            </div>
            <div className={sectionFeaturesStyles.features}>
                {featureList}
            </div>
        </section>
    );
}

export default SectionFeatures;