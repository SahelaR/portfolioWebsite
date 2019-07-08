import React from 'react'
import CSS from "../PortfolioSection/PortfolioSection.module.css"


export default class PortfolioSection extends React.Component {
    render() {
        return (
            <div>
                <div className={CSS.mainCoverContainer}>
                    <p>Portfolio</p>
                </div>
            </div>
        )
    }
}
