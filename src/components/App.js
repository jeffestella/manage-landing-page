import React from 'react';
import './App.css';

import NavBar from './NavBar';
import SectionHero from './SectionHero';
import SectionFeatures from './SectionFeatures';
import SectionTestimonials from './SectionTestimonials';
import SectionCTA from './SectionCTA';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <SectionHero />
      <SectionFeatures />
      <SectionTestimonials />
      <SectionCTA />
    </div>
  );
}

export default App;
