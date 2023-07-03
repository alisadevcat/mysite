import React from 'react'
import image from "../images/card.jpg"

const Cards = () => {
  return (
    <section className="cards">
        <figure>
            <img src={image} alt="" />
            <figcaption>
                <h2>Bubbles1</h2>
                <p>Lorem</p>
            </figcaption>
        </figure>
        <figure>
            <img src={image} alt="" />
            <figcaption>
                <h2>Bubbles2</h2>
                <p>Lorem</p>
            </figcaption>
        </figure>
        <figure>
            <img src={image} alt="" />
            <figcaption>
                <h2>Bubbles3</h2>
                <p>Lorem</p>
            </figcaption>
        </figure>
        <figure>
            <img src={image} alt="" />
            <figcaption>
                <h2>Bubbles4</h2>
                <p>Lorem</p>
            </figcaption>
        </figure>
    </section>
  )
}

export default Cards