import React from 'react'
import CSS from "../TechnologySection/TechnologySection.module.css"

export default class TechnologySection extends React.Component {
    render() {
        return (
            <div>
                <div className={CSS.mainCoverContainer}>
                    <div className={CSS.hexContainer}>
                        <ol className={CSS.even}>
                            <li className={CSS.hex}>
                            </li>
                            <li className={CSS.hex}></li>
                            <li className={CSS.hex}></li>
                            <li className={CSS.hex}></li>
                            <li className={CSS.hex}></li>


                        </ol>
                        <ol className={CSS.odd}>
                            <li className={CSS.hex}></li>
                            <li className={CSS.hex}></li>
                            <li className={CSS.hex}></li>
                            <li className={CSS.hex}></li>
                            <li className={CSS.hex}></li>
                            <li className={CSS.hex}></li>


                        </ol>
                        <ol className={CSS.even}>
                            <li className={CSS.hex}></li>
                            <li className={CSS.hex}></li>
                            <li className={CSS.hex}></li>
                            <li className={CSS.hex}></li>
                            <li className={CSS.hex}></li>


                        </ol>
                    </div>
                    </div>

                            
            </div>
            )
            }
}