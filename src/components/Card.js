import React from "react"

function Card(props) {
    let badgeText
    if (props.spots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.country === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {<div className="card--badge">{badgeText}</div>}
            <img
                src={`images/${props.img}`}
                alt="pic"
                className="card--image"
            />
            <div className="card--stats">
                <img
                    src={"images/star.png"}
                    alt="star"
                    className="card--star"
                />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) •</span>
                <span className="gray">{props.country}</span>
            </div>
            <h2>{props.title}</h2>
            <p>
                <span className="bold">From ${props.price}</span> / person
            </p>
        </div>
    )
}
export default Card
