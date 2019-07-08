import React from 'react';
import './App.css';
import LandingSection from "../components/LandingSection"
import AboutMe from "../components/AboutMe"
import TechnologySection from "../components/TechnologySection"
import PortfolioSection from "../components/PortfolioSection"
import ContactMe from "../components/ContactMe"
import BlogSection from "../components/BlogSection"
import Footer from "../components/Footer"



function App() {
  return (
  <div>


<LandingSection />
<AboutMe />
<PortfolioSection />
<TechnologySection />
<BlogSection />
<ContactMe />
<Footer />

      </div>

  );
}

export default App;
