import react from 'react'

function Card(prop) {
    return (
        <div>
            <img className="" src={props.item.imgSrc} alt={props.item.imgSrc} />
            {props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link}   />
            }
        </div>
    )
}

export default Card;