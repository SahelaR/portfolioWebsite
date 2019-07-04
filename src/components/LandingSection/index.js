import React from 'react'
import CSS from "../LandingSection/LandingSection.module.css"
import Portrait from "/Users/sahel/Documents/portfolioWebsite/src/Assets/Images/portrait2.png"



export default class LandingSection extends React.Component {
    render() {
        return (

            <div>
                <div className={CSS.mainCoverContainer}>
                    <div>
                    <img className={CSS.portrait} src={Portrait} alt="profilePicture" />
                </div>
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
