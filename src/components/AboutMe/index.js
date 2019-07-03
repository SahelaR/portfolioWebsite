import React from 'react'
import CSS from "../AboutMe/AboutMe.module.css"
import Background from "/Users/sahel/Documents/portfolioWebsite/src/Assets/Images/background.svg"

export default class AboutMe extends React.Component {
  render() {
    return (
      <div>
        <div className={CSS.mainCoverContainer} style={{
             backgroundPosition: 'right',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat', zIndex: 1, backgroundImage: "url(" + Background + ")" }}>
          </div>
        <p style={{color: "black", fontSize: "100px"}}>Tuning into prespectives & turning out design. </p>
        <p style={{ color: "black", fontSize: "50px" }}>Creating websites, mobile  & software applications. </p>
        <p style={{ color: "black", fontSize: "50px" }}>Law student logic.. </p>
        <p style={{ color: "black", fontSize: "40px" }}>now Coder, taking a structured & detail-orientated approach to breaking down problems, 
        at the core finding creative solutions. </p>
        <p style={{ color: "black", fontSize: "70px" }}>React.js & React-Native Junior developer. </p>
        <p style={{ color: "black", fontSize: "25px" }}>school of code 2019 Alumni. </p>
        
      </div>
    )
  }
}
