import React from "react";
import "./Home.css";
import CS_SAIL_IMAGE from "../../assets/cssail.png";
import CORN from "../../assets/corn.png";
import ELLIPSE from "../../assets/ellipse.png";

import Collage from "../Collage/Collage";
import image1 from "../../assets/images/collage-1.jpg";
import image2 from "../../assets/images/collage-2.jpg";
import image3 from "../../assets/images/collage-3.jpg";
import image4 from "../../assets/images/collage-4.jpg";
import image5 from "../../assets/images/2026-1.jpg";
import image6 from "../../assets/images/gal1.jpg";
import image7 from "../../assets/images/gal2.jpg";
import image8 from "../../assets/images/2026-2.JPG";
import image9 from "../../assets/images/gal4.jpg";
import image10 from "../../assets/images/gal5.jpg";

function Home() {
  return (
    <div className="home-page">

      <div className="opening-stack">
        <img
          src={CS_SAIL_IMAGE}
          className="cs-sail-image"
          alt="Logo for CS Sail"
        />
        <h1 className="event-date">Get Ready for Sail 2027!</h1>
      </div>

      <div className="ch-four-block">
        <h2 className="ch-heading-text">Sail 2026 Recap</h2>

        <div className="ch-four-info">
          <div className="ch-four-text">
            <p>In Sail 2026, we had</p>
            <ul>
              <li>200+ students, professors, advisors, and department staff</li>
              <li>50+ Student Teachers</li>
              <li>70+ Volunteers</li>
              <li>39 Unique Classes</li>
              <li>Participants across 3 countries and 17 US States</li>
            </ul>
          </div>

          <div className="cornelius-container">
            <img src={CORN} className="corn-ch-four-image" alt="" />

            <div className="ellipse-wrapper-4">
              <img src={ELLIPSE} className="ellipse-ch-four-image" alt="" />
              <span className="ellipse-text-4">
                See heroes in action! Check out moments from previous SAIL adventures.
              </span>
            </div>
          </div>
        </div>

        <div className="collage">
          <Collage
            images={[
              image1, image2, image3, image4, image5,
              image6, image7, image8, image9, image10
            ]}
          />
        </div>
      </div>

    </div>
  );
}

export default Home;
