import React from 'react'
import CSS from "../LandingSection/LandingSection.module.css"
import Portrait from "/Users/sahel/Documents/portfolioWebsite/src/Assets/Images/Quantum.png"



export default class LandingSection extends React.Component {
    render() {
        return (
            <div>
                    <div className={CSS.mainCoverContainer} style={{
                    backgroundSize: "cover",
                   backgroundImage: "url(" + Portrait + ")"
            }}>
                    </div> 
                <div className={CSS.header}>
                    <br />
                    <br />
                    <p className={CSS.textFocusIn}>front end developer.</p>
                       <h1 className={CSS.myName} >Hello, <br /> I'm Sahela Rani</h1>
                    <p className={CSS.textFocusIn}>have a scroll.</p>
         </div>
         </div>
        )
    }
}
