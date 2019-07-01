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
                   
            </div>
            </div>
        )
    }
}
