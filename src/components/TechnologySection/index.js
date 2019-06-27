import React from 'react'
import CSS from "../TechnologySection/TechnologySection.module.css"

export default class TechnologySection extends React.Component {
    render() {
        return (
            <div>
                <div className={CSS.mainCoverContainer}>
                    <p>Technology</p>
                </div>
            </div>
        )
    }
}
