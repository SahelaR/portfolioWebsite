import React, { Component } from 'react'
import CSS from "../Footer/Footer.module.css"
import { SocialIcon } from 'react-social-icons';


export default class Footer extends Component {
  render() {
    return (
        <div className={CSS.mainCoverContainer}>
            
            
            <div className={CSS.socialMedia}>
               
                <ul className={CSS.socialIcons}>
                    <li> <SocialIcon network="pinterest"  bgColor="#111111" fgColor="#ffffff" style={{ height: 50, width: 50 }} /></li>
                    <li><SocialIcon url="https://medium.com/@sahelarani1" bgColor="#111111" fgColor="#ffffff"/></li>
                    <li><SocialIcon url="https://www.linkedin.com/in/sahelarani/" bgColor="#111111" fgColor="#ffffff"/></li>
                    <li><SocialIcon url="https://github.com/SahelaR" fgColor="#ffffff" bgColor="#111111"/></li>
                </ul>
                </div>

            <div className={CSS.copyright}>
                <p className={CSS.footerText}>Made in React.js</p>
                <br />
                <p className={CSS.footerText}>By Sahela Rani © 2019 - 2022 . All Rights Reserved</p>

            </div>

        </div>
    )
  }
}
