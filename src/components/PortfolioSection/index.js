import React from 'react'
import CSS from "../PortfolioSection/PortfolioSection.module.css"
import Carousel from "../Carousel/index"


export default class PortfolioSection extends React.Component {
    render() {
        return (
            <div>
                <div className={CSS.mainCoverContainer}>
                    <h3 className={CSS.portfolio}>portfolio.</h3>
                   <Carousel />
            
                </div>
            </div>
        )
    }
}
