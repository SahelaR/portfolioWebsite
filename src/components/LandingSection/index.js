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
                    backgroundAttachment: 'fixed',
                backgroundRepeat: 'no-repeat', zIndex: 1, backgroundImage: "url(" + Background + ")" }}>
                   <div className={CSS.header}>
                        <p>front end developer.</p>
                       <h1 >Hello, I'm Sahela Rani</h1>
                        <p>have a scroll.</p>
            </div>
            </div>
            </div>
        )
    }
}
