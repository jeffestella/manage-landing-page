import React from 'react';
import './App.css';

import NavBar from './NavBar';
import SectionHero from './SectionHero';
import SectionFeatures from './SectionFeatures';
import SectionTestimonials from './SectionTestimonials';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <SectionHero />
      <SectionFeatures />
      <SectionTestimonials />
    </div>
  );
}

export default App;
