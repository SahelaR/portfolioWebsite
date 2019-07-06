import React from 'react'
import CSS from "../BlogSlider"

export default class BlogSlider extends React.Component {
  render() {
    return (
      <div className="wrapper">

          <section className="section1">
          <a href="#section3">></a>
                <div className="item"><img src="https://boygeniusreport.files.wordpress.com/2016/03/movies-tiles.jpg?quality=98&strip=all" /></div>
                <div className="item"><img src="https://boygeniusreport.files.wordpress.com/2016/03/movies-tiles.jpg?quality=98&strip=all" /></div>
                <div className="item"> <img src="https://boygeniusreport.files.wordpress.com/2016/03/movies-tiles.jpg?quality=98&strip=all" /></div>
                <div className="item"> <img src="https://boygeniusreport.files.wordpress.com/2016/03/movies-tiles.jpg?quality=98&strip=all" /></div>
                <div className="item"><img src="https://boygeniusreport.files.wordpress.com/2016/03/movies-tiles.jpg?quality=98&strip=all" /></div>
          <a href="#section2">></a>
          </section>

            <section className="section2">
            <a href="#section1">></a>
                <div className="item"><img src="https://boygeniusreport.files.wordpress.com/2016/03/movies-tiles.jpg?quality=98&strip=all" /></div>
                <div className="item"><img src="https://boygeniusreport.files.wordpress.com/2016/03/movies-tiles.jpg?quality=98&strip=all" /></div>
                <div className="item"><img src="https://boygeniusreport.files.wordpress.com/2016/03/movies-tiles.jpg?quality=98&strip=all" /></div>
                <div className="item"> <img src="https://boygeniusreport.files.wordpress.com/2016/03/movies-tiles.jpg?quality=98&strip=all" /></div>
                <div className="item"> <img src="https://boygeniusreport.files.wordpress.com/2016/03/movies-tiles.jpg?quality=98&strip=all" /></div>
            <a href="#section3">></a>     
            </section>

            <section className="section3">
            <a href="#section2">></a>
                <div className="item"><img src="" /></div>
                <div className="item"><img src="" /></div>
                <div className="item"><img src="" /></div>
                <div className="item"> <img src="" /></div>
                <div className="item"> <img src="" /></div>
             <a href="#section1">></a>
            </section>        
      </div>
    )
  }
}
