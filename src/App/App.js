import React from 'react';
import './App.css';
import LandingSection from "../components/LandingSection"
import AboutMe from "../components/AboutMe"
import TechnologySection from "../components/TechnologySection"
import PortfolioSection from "../components/PortfolioSection"
import ContactMe from "../components/ContactMe"


function App() {
  return (
  <div>
    <LandingSection />
    <AboutMe />
    <TechnologySection />
    <PortfolioSection />
    <ContactMe />
    </div>
  );
}

export default App;
