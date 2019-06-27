import React from 'react';
import './App.css';
import LandingSection from "../components/LandingSection"
import AboutMe from "../components/AboutMe"
import TechnologySection from "../components/TechnologySection"
import PortfolioSection from "../components/PortfolioSection"
import ContactMe from "../components/ContactMe"
import BlogSection from "../components/BlogSection"
import ScrollingColorBackground from "react-scrolling-color-background"



function App() {
  return (
<div>

      <ScrollingColorBackground
        selector='.js-color-stop[data-background-color]'
        colorDataAttribute='data-background-color'
        initialRgb='#331832'
      /> 
      
      <section
        data-background-color= '#331832'
        className='js-color-stop'
      ><LandingSection /></section>

     <section
        data-background-color='#000000'
        className='js-color-stop'
      ><AboutMe /></section>

      <section
        data-background-color='#331832'
        className='js-color-stop'
      ><TechnologySection /> </section>

      <section
        data-background-color='#000000'
        className='js-color-stop'
      ><PortfolioSection /></section>

      <section
        data-background-color='#331832'
        className='js-color-stop'
      ><BlogSection /></section>
      
      <section
        data-background-color='#000000'
        className='js-color-stop'
      ><ContactMe /></section>
</div>
  );
}

export default App;
