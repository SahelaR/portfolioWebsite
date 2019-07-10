import React from 'react'
import CSS from "../AboutMe/AboutMe.module.css"
import Background from "/Users/sahel/Documents/portfolioWebsite/src/Assets/Images/square.png"


export default class AboutMe extends React.Component {
  render() {
    return (

        <div className={CSS.mainCoverContainer} style={{  backgroundSize: "cover",
            backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat', zIndex: 1, backgroundImage: "url(" + Background + ")" }}>
         <div className={CSS.header}>
            <h3 className={CSS.about}>about.</h3>
          <hr style={{width: "10% ", alignItems: "left"}} />
          <br />
          <p className={CSS.paragraph}><strong >law student is taking a structure & detailed-orientated approach
            to coding,</strong> building both websites & mobile applications. after a 16 week coding bootcamp, react.js and react-native 
            are my now current favourite tools, so looking for my next project - so get in contact.<br /> <br /></p><p className={CSS.paragraph} style={{ textAlign: "center"}}>tuning into perspective & turning out code.</p>
          <hr style={{ width: "10% ", alignItems: "left" }} />
      </div>
        </div>
  
    )
  }
}
