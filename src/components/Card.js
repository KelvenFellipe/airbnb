import React from "react"
import Katie from "../images/katie-zaferes.png"
import Star from "../images/star.png"

function Card() {
    return (
        <div className="card">
            <img src={Katie} alt="Katie Zaferes" className="card--image" />
            <div className="card--stats">
                <img src={Star} alt="star" className="card--star" />
                <span>5.0</span>
                <span className="gray">(6) •</span>
                <span className="gray">USA</span>
            </div>
            <h2>Life lessons with Katie Zaferes</h2>
            <p>
                <span className="bold">From $136</span> / person
            </p>
        </div>
    )
}
export default Card
