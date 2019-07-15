import React from 'react'
import CSS from "../Icons/Icons.module.css"

export default class Icon extends React.Component {
  render() {
    return (
      <div className={CSS.container}>
          <div className={CSS.row}>
              <div className={CSS.icons}>
             <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React.js</li>
                <li>React-Native</li>
                <li>Mongodb</li>
                <li>Node.js</li>
                <li>Github</li>
                <li>ZenHub</li>
                <li>Jest</li>
             </ul>
             
              </div>

          </div>
        
      </div>
    )
  }
}
