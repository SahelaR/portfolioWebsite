import React from 'react'
import CSS from "../PortfolioSection/PortfolioSection.module.css"

import BrumGo from "/Users/sahel/Documents/portfolioWebsite/src/Assets/Images/brumGoLogoRed.svg"


export default class PortfolioSection extends React.Component {
    render() {
        return (
            <div>
                <div className={CSS.mainCoverContainer}>
                    <div className={CSS.mainContent}>
                        <div  className={CSS.portfolioCont}>
                            <div className={CSS.portfolioTitle + ' ' + CSS.one}><span className={CSS.portfolio}>portfolio.</span></div>
                            <div className={CSS.portfolioItem + ' ' + CSS.two}>
                                <div className={CSS.titlePrimary}>
                                    <h2 className={CSS.app}>BrumGo</h2>
                                    <p clssName={CSS.subText}>a city guide app</p>
                                    <img className={CSS.brumgo} src={BrumGo} alt="BrumGo"></img>
                                </div>
                                 {/* <div className={CSS.titleSecondary}>
                                    <p>click on the logo to read more</p> 
                                </div> */}
                            </div>
                           
                            <div className={CSS.portfolioItem + ' ' + CSS.three}>
                                <div className={CSS.titlePrimary}>
                                    <h2 className={CSS.app}>Talent Growth</h2>
                                    <p clssName={CSS.subText}>a city guide app</p>
                                    <img className={CSS.brumgo} src={BrumGo} alt="BrumGo"></img>
                                </div>
                                {/* <div className={CSS.titleSecondary}>
                                    <p>click on the logo to read more</p> 
                                </div> */}

                            </div>


                            
                            <div className={CSS.portfolioItem + ' ' + CSS.four }>
                                <div className={CSS.titlePrimary}>
                                    <h2 className={CSS.app}>SAIZ</h2>
                                    <p clssName={CSS.subText}>a city guide app</p>
                                    <img className={CSS.brumgo} src={BrumGo} alt="BrumGo"></img>
                                </div>
                                {/* <div className={CSS.titleSecondary}>
                                    <p>click on the logo to read more</p> 
                                </div> */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


                                                  