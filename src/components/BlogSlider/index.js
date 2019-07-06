import React from 'react'
import CSS from "../BlogSlider"

export default class BlogSlider extends React.Component {
  render() {
    return (
      <div className="wrapper">

          <section className="section1">
          <a href="#section3">></a>
          <a href="#section2">></a>
          </section>

            <section className="section2">
            <a href="#section1">></a>
            <a href="#section3">></a>     
            </section>

            <section className="section3">
            <a href="#section2">></a>
             <a href="#section1">></a>
            </section>        
      </div>
    )
  }
}
