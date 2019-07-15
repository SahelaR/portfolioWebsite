import React from 'react'
import Style from "../Icons/Icons.module.css"
import HTML from "/Users/sahel//Documents/portfolioWebsite/src/Assets/Images/html.svg"
import CSS from "/Users/sahel//Documents/portfolioWebsite/src/Assets/Images/css.svg"
import Javascript from "/Users/sahel//Documents/portfolioWebsite/src/Assets/Images/javascript.svg"
import Github from "/Users/sahel//Documents/portfolioWebsite/src/Assets/Images/github-logo.svg"
import Nodejs from "/Users/sahel//Documents/portfolioWebsite/src/Assets/Images/nodejs.svg"
import Photoshop from "/Users/sahel//Documents/portfolioWebsite/src/Assets/Images/photoshop.svg"
import Illustrator from "/Users/sahel//Documents/portfolioWebsite/src/Assets/Images/illustrator.svg"


export default class Icon extends React.Component {
  render() {
    return (
      <div className={Style.container}>
          <div className={Style.row}>
              <div className={Style.icons}>
             <ul>
                <li><div className={Style.icon}><img className={Style.image} src={HTML} alt="HTML"></img></div></li>
                        <li><div className={Style.icon}><img className={Style.image} src={CSS} alt="CSS"></img></div></li>
                        <li><div className={Style.icon}><img className={Style.image} src={Javascript} alt="Javascript"></img></div></li>

                <li>React.js</li>
                <li>React-Native</li>
                <li>Mongodb</li>

                        <li><div className={Style.icon}><img className={Style.image} src={Github} alt="Github"></img></div></li>
                <li><div className={Style.icon}><img className={Style.image}src={Nodejs} alt="Node.js"></img></div></li>
                
                <li>ZenHub</li>
                <li>Jest</li>


                        <li><div className={Style.icon}><img className={Style.image} src={Illustrator} alt="Adobe Illustrator"></img></div></li>
                        <li><div className={Style.icon}><img className={Style.image} src={Photoshop} alt="Adobe Photoshop"></img></div></li>
             </ul>
             
              </div>

          </div>
        
      </div>
    )
  }
}
