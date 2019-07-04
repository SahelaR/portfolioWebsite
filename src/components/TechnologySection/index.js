import React from 'react'
import CSS from "../TechnologySection/TechnologySection.module.css"

export default class TechnologySection extends React.Component {
    render() {
        return (
            <div>
                <div className={CSS.mainCoverContainer}>

                    <ul className={CSS.categories}>
                        <li className={CSS.pusher}></li>
                        <li>
                            <div>
                                <i class="devicon-html5-plain"></i>
                                <img src="https://farm5.staticflickr.com/4144/5053682635_b348b24698.jpg" alt=""/>
                                <h1>HTML</h1>
                            </div>
                        </li>
                        <li>
                            <div>
                                <i class="devicon-css3-plain"></i>
                                <img src="https://farm5.staticflickr.com/4144/5053682635_b348b24698.jpg" alt="" />
                                <h1>CSS</h1>
                            </div>
                        </li>
                        <li>
                            <div>
                                <i class="devicon-javascript-plain"></i>
                                <img src="https://farm5.staticflickr.com/4144/5053682635_b348b24698.jpg" alt="" />
                                <h1>Javascript</h1>
                            </div>
                        </li>
                        <li>
                            <div>
                                <i class="devicon-react-original"></i>
                                <img src="https://farm5.staticflickr.com/4144/5053682635_b348b24698.jpg" alt="" />
                                <h1>React.js</h1>
                            </div>
                        </li>
                        <li class="pusher"></li>
                        <li>
                            <div>
                                <i class="devicon-nodejs-plain"></i>
                                <img src="https://farm5.staticflickr.com/4144/5053682635_b348b24698.jpg" alt="" />
                                <h1>Node.js</h1>
                            </div>
                        </li>

                        <li>
                            <div>
                                <i class="devicon-mongodb-plain"></i>
                                <img src="https://farm5.staticflickr.com/4144/5053682635_b348b24698.jpg" alt="" />
                                <h1>Mongodb</h1>
                            </div>
                        </li>
                        <li class="pusher"></li>
                        <li>
                            <div>
                                <i class="devicon-github-plain"></i>
                                <img src="https://farm5.staticflickr.com/4144/5053682635_b348b24698.jpg" alt="" />
                                <h1>GitHub</h1>
                            </div>
                        </li>
                        <li>
                            <div>
                                <i class="devicon-slack-plain"></i>
                                <img src="https://farm5.staticflickr.com/4144/5053682635_b348b24698.jpg" alt="" />
                                <h1>Slack</h1>
                            </div>
                        </li><li>
                            <div>
                                <i class="devicon-visualstudio-plain"></i>
                                <img src="https://farm5.staticflickr.com/4144/5053682635_b348b24698.jpg" alt="" />
                                <h1>Visual Studio</h1>
                               
                            </div>
                        </li>
                        <li>
                            <div>
                                <i class="devicon-illustrator-plain"></i>
                                <img src="https://farm5.staticflickr.com/4144/5053682635_b348b24698.jpg" alt="" />
                                <h1>Adobe Illustrator</h1>
                            </div>
                        </li>
                        <li>
                            <div>
                                <i class="devicon-photoshop-plain"></i>
                                <img src="https://farm5.staticflickr.com/4144/5053682635_b348b24698.jpg" alt="" />
                                <h1>Adobe Photoshop</h1>
                            </div>
                        </li>
                     
                        </ul>
                        </div>            
            </div>
            )
            }
}