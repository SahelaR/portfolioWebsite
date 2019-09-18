import React from 'react'
import CSS from "../LandingSection/LandingSection.module.css"
import Portrait from "../Images/Quantum.png"
import Github from "../Images/github.svg"
import Medium from "../Images/medium.svg"


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
                    <ul className={CSS.row}>
                        <li><a className={CSS.icon} href="https://github.com/SahelaR"><img className={CSS.image} src={Github} alt="Github"></img></a>
                        </li>
                        <li><a className={CSS.icon} href="https://medium.com/@sahelarani1"><img className={CSS.image} src={Medium} alt="Medium"></img></a>
                        </li>
                        </ul>
                    <p className={CSS.textFocusIn}>front end developer.</p>
                       <h1 className={CSS.myName} >Hello, <br /> I'm Sahela Rani</h1>
                    <p className={CSS.textFocusIn}>have a scroll.</p>
         </div>
         </div>
        )
    }
}
