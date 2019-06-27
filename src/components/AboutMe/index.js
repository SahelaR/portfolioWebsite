import React from 'react'
import CSS from "../AboutMe/AboutMe.module.css"

export default class AboutMe extends React.Component {
  render() {
    return (
      <div>
        <div className={CSS.mainCoverContainer}>
          <p>About</p>
          </div>
      </div>
    )
  }
}
