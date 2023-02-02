import React from "react"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"

export default function App() {

  const cards = data.map(card => {
    return (
      <Card
        key={card.id}
        {...card}   // mozna zrobic card={card} i wtedy w Card.jsx dodajemy wszędzie props".item".id
      />
    )
  })

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  )
}
