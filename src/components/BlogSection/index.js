import React from 'react'
import CSS from "../BlogSection/BlogSection.module.css"
import BlogSlider from "../BlogSlider"

export default class BlogSection extends React.Component {
    render() {
        return (
            <div>
                <div className={CSS.mainContainer}>
                    <BlogSlider />
                </div>
            </div>
        )
    }
}