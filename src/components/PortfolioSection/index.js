import React from 'react'
import CSS from "../PortfolioSection/PortfolioSection.module.css"
import Carousel from "../PortfolioSection/index.js"

export default class PortfolioSection extends React.Component {
    render() {
        return (
            <div>
                <div className={CSS.mainCoverContainer}>
                   <Carousel />
                </div>
            </div>
        )
    }
}
