import React from 'react'
import CSS from "../LandingSection/LandingSection.module.css"
import Background from "/Users/sahel/Documents/portfolioWebsite/src/Assets/Images/background.svg"





export default class LandingSection extends React.Component {
    render() {
        return (
            <div>
                <div className={CSS.mainCoverContainer} style={{
                    backgroundPosition: 'right',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat', zIndex: 1, backgroundImage: "url(" + Background + ")" }}>
                   <div className={CSS.header}>
                       <h1 >Hello, I'm Sahela Rani</h1>
                   </div>
                <div className={CSS.title}>
                    <p>front end developer. </p>
                    <p className={CSS.subtitle}>scroll down.</p>
            </div>
            </div>
            </div>
        )
    }
}
