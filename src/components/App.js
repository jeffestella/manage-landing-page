import React from 'react';
import './App.css';

import NavBar from './NavBar';
import SectionHero from './SectionHero';
import SectionFeatures from './SectionFeatures';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <SectionHero />
      <SectionFeatures />
    </div>
  );
}

export default App;
