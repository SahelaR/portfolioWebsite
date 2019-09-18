import React from 'react'
import Style from "../Icons/Icons.module.css"
import HTML from "../Images/html.svg"
import CSS from "../Images/css.svg"
import Javascript from "../Images/javascript.svg"
import Github from "../Images/github-logo.svg"
import Nodejs from "../Images/nodejs.svg"
import Photoshop from "../Images/photoshop.svg"
import Illustrator from "../Images/illustrator.svg"
import Reactjs from "../Images/reactjs.svg"
import Mongodb from "../Images/mongodb.svg"
import Zenhub from "../Images/zenhub.svg"
import Jest from "../Images/jest.svg"
import Gatsby from "../Images/gatsby.svg"


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
                        <li><div className={Style.icon}><img className={Style.image} src={Reactjs} alt="Reactjs"></img></div></li> 
                        <li><div className={Style.icon}><img className={Style.image} src={Github} alt="Github"></img></div></li>
                <li><div className={Style.icon}><img className={Style.image}src={Nodejs} alt="Node.js"></img></div></li>
              <li><div className={Style.icon}><img className={Style.image} src={Zenhub} alt="zenhub"></img></div></li>
              <li><div className={Style.icon}><img className={Style.image} src={Jest} alt="Jest"></img></div></li>
                        <li><div className={Style.icon}><img className={Style.image} src={Illustrator} alt="Adobe Illustrator"></img></div></li>
                        <li><div className={Style.icon}><img className={Style.image} src={Photoshop} alt="Adobe Photoshop"></img></div></li>
                         <li><div className={Style.icon}><img className={Style.image} src={Mongodb} alt="Mongodb"></img></div></li>
              <li><div className={Style.icon}><img className={Style.image} src={Gatsby} alt="gatsby"></img></div></li>
             </ul>
             
              </div>

          </div>
        
      </div>
    )
  }
}
