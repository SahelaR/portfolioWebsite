import React from 'react'
import CSS from "../AboutMe/AboutMe.module.css"
import Background from "/Users/sahel/Documents/portfolioWebsite/src/Assets/Images/landing.png"

export default class AboutMe extends React.Component {
  render() {
    return (
      <div>
        <div className={CSS.mainCoverContainer} style={{
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat', zIndex: 1, backgroundImage: "url(" + Background + ")" }}>
          </div>
          <div className={CSS.header}>
          <p className={CSS.forty} >Law student logic.. </p>
          <p className={CSS.hundered}>Tuning into perspectives & turning out code. </p>
        <br />
          <p className={CSS.forty}> taking a structured & detail-orientated approach to coding, 
        at the core finding creative solutions. </p>
          <p className={CSS.fifty}>websites, mobile  & software applications. </p>
          <p className={CSS.twenty} >React.js & React-Native Junior developer. </p>
      </div>
        
      </div>
    )
  }
}
