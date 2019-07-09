import React from "react"
import {useSpring, animated } from 'react-spring'
import CSS from "../CardInfo"




function CardInfo(props){

    const style = useSpring({opacity: 1, from: {opacity: 0}})
    return (
<animated.div className={CSS.gCardInfo} style={style}>
    <p className={CSS.gCardTitle}>{props.title}</p>
    <p className={CSS.gCardSubTitle}>{props.subTitle}</p>
    <a href={props.link} target="_blank" rel="noopener noreferrer">View</a>
</animated.div>
    )
}

export default CardInfo;