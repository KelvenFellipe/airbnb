import React from "react"

function Card(props) {
    return (
        <div className="card">
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
