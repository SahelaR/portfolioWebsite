import React from 'react'
import CardInfo from "../CardInfo"
import CSS from "../Card/Card.module.css"

function Card(props) {
    return (
        <div className={CSS.gCard} onClick={(e) => (props.item)}>
            <img className={CSS.gCardImage} src={props.item.imgSrc} alt={props.item.imgSrc} title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} />

        </div>
    )
}

export default Card;