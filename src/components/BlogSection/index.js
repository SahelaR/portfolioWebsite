import React from 'react'
import CSS from "../BlogSection/BlogSection.module.css"
import BlogSlider from "../BlogSlider"

export default class BlogSection extends React.Component {
    render() {
        return (
            <div>
                <div className={CSS.mainContainer}>
                    <h3 className={CSS.blog}>blog.</h3>
                    <BlogSlider />
                </div>
            </div>
        )
    }
}