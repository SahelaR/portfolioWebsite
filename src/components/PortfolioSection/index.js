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
                            <div className={CSS.portfolioTitle} style={{ gridRow: "span 2", gridColumn: "span 2", backgroundColor: "blue"}}><span className={CSS.portfolio}>portfolio.</span></div>
                            <div className={CSS.portfolioItem} style={{ gridRow: "span 2", gridColumn: "span 3", backgroundColor: "green"}}>brumgo</div>
                            <div className={CSS.portfolioItem} style={{ gridRow: "span 2", gridColumn: "span 3", backgroundColor: "orange"}}>SAIZ</div>
                            <div className={CSS.portfolioItem} style={{ gridRow: "span 2", gridColumn: "span 2", backgroundColor: "purple" }}>Talent Growth</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
