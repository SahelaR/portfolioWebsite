import React from 'react'
import CSS from "../BlogSection/BlogSection.module.css"

export default class BlogSection extends React.Component {
    render() {
        return (
            <div>
                <div className={CSS.mainCoverContainer}>
                    <p>Blog</p>
                </div>
            </div>
        )
    }
}
