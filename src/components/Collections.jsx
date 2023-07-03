import React from "react";
import image from "../images/abstract.jpg";

const Collections = () => {
  return (
    <section id="collections">
      <h2>Collections</h2>
      <ul>
        <li>
          <figure>
            <img src={image} alt="Pop Art: This must be the place" />
            <figcaption>
              <a href="#">Pop Art</a>
            </figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src={image} alt="Abstract: grey and green squares." />
            <figcaption>
              <a href= "/">Abstract</a>
            </figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img
              src={image}
              alt="Tree on island in lake with purple sunrise."
            />
            <figcaption>
              <a href="#">Vivid</a>
            </figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src={image} alt="Music: guitar leaning against wall." />
            <figcaption>
              <a href="#">Music</a>
            </figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src={image} alt="Vehicles: 1930's car on street." />
            <figcaption>
              <a href="#">Vehicles</a>
            </figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img
              src={image}
              alt="Landscape: moonrise over tree-covered mountains."
            />
            <figcaption>
              <a href="#">Landscape</a>
            </figcaption>
          </figure>
        </li>
      </ul>
    </section>
  );
};

export default Collections;
