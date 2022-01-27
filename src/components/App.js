import React from 'react';
import './App.css';

import NavBar from './NavBar';
import SectionHero from './SectionHero';
import SectionFeatures from './SectionFeatures';
import SectionTestimonials from './SectionTestimonials';
import SectionCTA from './SectionCTA';
import Footer from './Footer';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <SectionHero />
      <div className="whiteBgContent">
        <SectionFeatures /> 
        <SectionTestimonials />
      </div>
      <SectionCTA />
      <Footer />
    </div>
  );
}

export default App;
