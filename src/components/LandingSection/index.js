import React from 'react'
import CSS from "../LandingSection/LandingSection.module.css"
import Portrait from "/Users/sahel/Documents/portfolioWebsite/src/Assets/Images/portrait.png"



export default class LandingSection extends React.Component {
    render() {
        return (
            <div>
                    <div className={CSS.mainCoverContainer} style={{
                        backgroundSize: 'cover',
                    backgroundAttachment: 'fixed',
                        zIndex: 1, backgroundImage: "url(" + Portrait + ")"
                    }}>
                    </div> 
                <div className={CSS.header}>
                    <br />
                    <br />
                        <p>front end developer.</p>
                       <h1 className={CSS.myName} >Hello, <br /> I'm Sahela Rani</h1>
                       <p>have a scroll.</p>
         </div>
         </div>
        )
    }
}
