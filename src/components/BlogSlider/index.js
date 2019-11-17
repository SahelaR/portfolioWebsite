import React from 'react'
import CSS from "../BlogSlider/BlogSlider.module.css"

export default class BlogSlider extends React.Component {
  render() {
    return (
      <div className={CSS.wrapper}>
        <section className={CSS.divider} id="section1">

          <a  href="#section3" className={CSS.arrowBtn}>‹</a>
          <div className={CSS.item}>
            <img alt="blog" src="https://winatweb.com/wp-content/uploads/2019/04/what-is-a-blog.png" />
          </div>
          <div className={CSS.item}>
            <img alt="blog" src="https://winatweb.com/wp-content/uploads/2019/04/what-is-a-blog.png" />
          </div>
          <div className={CSS.item}>
            <img alt="blog" src="https://winatweb.com/wp-content/uploads/2019/04/what-is-a-blog.png" />
          </div>
          <div className={CSS.item}>
            <img alt="blog" src="https://winatweb.com/wp-content/uploads/2019/04/what-is-a-blog.png" />
          </div>
          <div className={CSS.item}>
            <img alt="blog" src="https://winatweb.com/wp-content/uploads/2019/04/what-is-a-blog.png" />
          </div>
          <a href="#section2" className={CSS.arrowBtn}>›</a>
        </section>

        <section className={CSS.divider} id="section2">
          <a href="#section1" className={CSS.arrowBtn}>‹</a>
          <div className={CSS.item}>
            <img alt="blog" src="https://winatweb.com/wp-content/uploads/2019/04/what-is-a-blog.png" /> 
          </div>
          <div className={CSS.item}>
            <img alt="blog" src="https://winatweb.com/wp-content/uploads/2019/04/what-is-a-blog.png" /> 
          </div>
          <div className={CSS.item}>
            <img alt="blog" src="https://winatweb.com/wp-content/uploads/2019/04/what-is-a-blog.png" /> 
          </div>
          <div className={CSS.item}>
            <img alt="blog" src="https://winatweb.com/wp-content/uploads/2019/04/what-is-a-blog.png" /> 
          </div>
          <div className={CSS.item}>
            <img alt="blog" src="https://winatweb.com/wp-content/uploads/2019/04/what-is-a-blog.png" /> 
          </div>
          <a href="#section3" className={CSS.arrowBtn}>›</a>
        </section>


        <section className={CSS.divider} id="section3">
          <a href="#section2" className={CSS.arrowBtn}>‹</a>
          <div className={CSS.item}>
            <img alt="blog" src="https://winatweb.com/wp-content/uploads/2019/04/what-is-a-blog.png" /> 
          </div>
          <div className={CSS.item}>
            <img alt="blog" src="https://winatweb.com/wp-content/uploads/2019/04/what-is-a-blog.png" /> 
          </div>
          <div className={CSS.item}>
            <img alt="blog" src="https://winatweb.com/wp-content/uploads/2019/04/what-is-a-blog.png" /> 
          </div>
          <div className={CSS.item}>
            <img alt="blog" src="https://winatweb.com/wp-content/uploads/2019/04/what-is-a-blog.png" /> 
          </div>
          <div className={CSS.item}>
            <img alt="blog" src="https://winatweb.com/wp-content/uploads/2019/04/what-is-a-blog.png" />
          </div>
          <a href="#section1" className={CSS.arrowBtn}>›</a>
        </section>
      </div>


    )
  }
}
