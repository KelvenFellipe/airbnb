import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

function App() {
    const info = data.map((item) => {
        return <Card key={item.id} item={item} />
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
