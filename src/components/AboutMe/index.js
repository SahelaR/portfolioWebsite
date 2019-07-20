import React from 'react'
import CSS from "../AboutMe/AboutMe.module.css"
import Background from "/Users/sahel/Documents/portfolioWebsite/src/Assets/Images/square.png"


export default class AboutMe extends React.Component {


  render() {
    return (

        <div className={CSS.mainCoverContainer}>
         <div className={CSS.header}>
            <h3 className={CSS.about}>about.</h3>
            <br />
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
