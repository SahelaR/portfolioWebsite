import React from "react"
import LandingSection from "../LandingSection"
import AboutMe from "../AboutMe"
import PortfolioSection from "../PortfolioSection"
import TechnologySection from "../TechnologySection"
import ContactMe from "../ContactMe"
import Footer from "../Footer"
import BlogSection from "../BlogSection"

export default class MainComponent extends React.Component {
render () {
    return (
        <>
        <LandingSection />
        <AboutMe />
        <PortfolioSection />
        <TechnologySection />
        <BlogSection />
        <ContactMe />
        <Footer />
        </>
    )
}
}
