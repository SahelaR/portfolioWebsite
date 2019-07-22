import React from 'react'
import CSS from "../AboutMe/AboutMe.module.css"
import Portrait from "/Users/sahel//Documents/portfolioWebsite/src/Assets/Images/portrait.png"
import Ball from "../Ball/index"

export default class AboutMe extends React.Component {
  


  render() {
    return (

        <div className={CSS.mainCoverContainer}>
         <div className={CSS.header}>
           <Ball />
            <h3 className={CSS.about}>about.</h3>
            <ul className={CSS.row}>
            <li><img className={CSS.image} src={Portrait} alt="portrait"></img></li>
                </ul>
          <hr style={{width: "10% ", alignItems: "left"}} />
          <p className={CSS.paragraph}>law student is taking a structure & detailed-orientated approach
            to coding, building both websites & mobile applications. after a 16 week coding bootcamp, react.js and react-native 
            are my now current favourite tools, so looking for my next project - so get in contact.</p>
            <br />
            <p className={CSS.paragraph} style={{ textAlign: "center"}}>tuning into perspective & turning out code.</p>
          <hr style={{ width: "10% ", alignItems: "left" }} />
          <br />
      </div>
        </div>
  
    )
  }
}
