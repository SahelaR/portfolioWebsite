import React from 'react'
import CardInfo from "../CardInfo"
import CSS from "../Card"

function Card(props) {
    return (
        <div className="gCard" onClick={(e) => props.click(props.item)}>
            <img className="gCardImage" src={props.item.imgSrc} alt={props.item.imgSrc} />
            {props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link}   />
            }
        </div>
    )
}

export default Card;