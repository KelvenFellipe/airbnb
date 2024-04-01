import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

function App() {
    const info = data.map((dat) => {
        return (
            <Card
                key={dat.id}
                title={dat.title}
                img={dat.coverImg}
                rating={dat.stats.rating}
                reviewCount={dat.stats.reviewCount}
                country={dat.location}
                price={dat.price}
                spots={dat.openSpots}
            />
        )
    })
    return (
        <div className="app">
            <Navbar />
            <Hero />
            <div className="cardd">{info}</div>
        </div>
    )
}
export default App
