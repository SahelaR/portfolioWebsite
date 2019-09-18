import React from 'react'
import CSS from "../PortfolioSection/PortfolioSection.module.css"

import BrumGo from "../Images/brumGoLogo.svg"
import TalentGrowth from "../Images/talentGrowth.svg"
import SAIZ from "../Images/SAIZ.svg"

export default class PortfolioSection extends React.Component {
    render() {
        return (
            <div>
                <div className={CSS.mainCoverContainer}>
                    <div className={CSS.mainContent}>
                        <div  className={CSS.portfolioCont}>
                            <div className={CSS.portfolioTitle + ' ' + CSS.one}>
                                    <h2 className={CSS.portfolio}>portfolio.</h2>
                            </div>
                            <div className={CSS.portfolioItem + ' ' + CSS.two}>
                                <div className={CSS.titlePrimary}>
                                    <h2 className={CSS.app}>BrumGo</h2>
                                    <p clssName={CSS.subText}>a city guide app.</p>
                                    <img className={CSS.logo} src={BrumGo} alt="BrumGo"></img>
                                </div>
                                 {/* <div className={CSS.titleSecondary}>
                                    <p>click on the logo to read more</p> 
                                </div> */}
                            </div>
                           
                            <div className={CSS.portfolioItem + ' ' + CSS.three}>
                                <div className={CSS.titlePrimary}>
                                    <h2 className={CSS.app}>Talent Growth</h2>
                                    <p clssName={CSS.subText}>grow talent digitally online.</p>
                                    <img className={CSS.logo} src={TalentGrowth} alt="talentGrowth"></img>
                                </div>
                                {/* <div className={CSS.titleSecondary}>
                                    <p>click on the logo to read more</p> 
                                </div> */}

                            </div>


                            
                            <div className={CSS.portfolioItem + ' ' + CSS.four }>
                                <div className={CSS.titlePrimary}>
                                    <h2 className={CSS.app}>SAIZ</h2>
                                    <p clssName={CSS.subText} style={{}}>sell a scarf or two. </p>
                                    <img className={CSS.logo} src={SAIZ} alt="SAIZ"></img>
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


                                                  