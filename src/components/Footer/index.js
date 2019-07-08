import React, { Component } from 'react'
import CSS from "../Footer/Footer.module.css"



export default class Footer extends Component {
  render() {
    return (
        <div className={CSS.mainCoverContainer}>


            <div className={CSS.copyright}>
                <br />
                <p className={CSS.footerText}>Made in React.js</p>
                <br />
                <p className={CSS.footerText}>By Sahela Rani © 2019 - 2022 . All Rights Reserved</p>

            </div>

        </div>
    )
  }
}
