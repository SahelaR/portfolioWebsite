import React from 'react'
import CSS from "../PortfolioSection/PortfolioSection.module.css"
import Carousel from "../Carousel/index"


export default class PortfolioSection extends React.Component {
    render() {
        return (
            <div>
                <div className={CSS.mainCoverContainer}>
                    <div className={CSS.mainContent}>
                        <div  className={CSS.portfolioCont}>
                            <div className={CSS.portfolioTitle + ' ' + CSS.one}><span className={CSS.portfolio}>portfolio.</span></div>
                            <div className={CSS.portfolioItem + ' ' + CSS.two}>brumgo</div>
                            <div className={CSS.portfolioItem + ' ' + CSS.three}>SAIZ</div>
                            <div className={CSS.portfolioItem + ' ' + CSS.four }>Talent Growth</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


                                                  