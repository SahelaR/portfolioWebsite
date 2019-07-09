import React from 'react'
import CSS from "../PortfolioSection/PortfolioSection.module.css"
import Carousel from "../Carousel/index"


export default class PortfolioSection extends React.Component {
    render() {
        return (
            <div>
                <div className={CSS.mainCoverContainer}>
                    <p>portfolio.</p>
                    <ul className={CSS.filter}>
                        <li>ALL</li>
                        <li>MOBILE</li>
                        <li>WEB</li>
                    </ul>
                   <Carousel />
                </div>
            </div>
        )
    }
}
