import "./Home.css";
import CS_SAIL_IMAGE from "../../assets/cssail.png";
import REGISTER_NOW_BUTTON from "../../assets/registernow.png";
import CARTOON_FRAME from "../../assets/cartoon-frame.png";
import CORN_CH_ONE from "../../assets/corn-ch1.png";
import ELLIPSE_CH_ONE from "../../assets/ellipse-ch1.png";
import CHARACTER_STATS from "../../assets/characterstats.png";


import Collage from "../collage/Collage";

import image1 from "../../assets/images/collage-1.jpg";
import image2 from "../../assets/images/collage-2.jpg";
import image3 from "../../assets/images/collage-3.jpg";
import image4 from "../../assets/images/collage-4.jpg";
import image5 from "../../assets/images/collage-5.png";

function Home() {
  return (
    <div className="home-page" style={{ justifyItems: "center" }}>

      <div className="opening-stack">
        <img src={CS_SAIL_IMAGE} className="cs-sail-image" />
        <img src={REGISTER_NOW_BUTTON} className="register-now-image" />
      </div>

      <div className="ch-one-block">
        <span className="ch-one-text">Chapter 1: Introduction</span>
        <img src={CARTOON_FRAME} className="cartoon-frame-image" />

        <div className="character-stats-row">
          <img src={CORN_CH_ONE} className="corn-ch-one-image" />

          <div className="ellipse-wrapper">
            <img src={ELLIPSE_CH_ONE} className="ellipse-ch-one-image" />
            <span className="ellipse-text">Welcome heroes. My name is captain Cornelius, and i will be your helpful guide today!</span>
          </div>

          <div className="character-stats-wrapper">
            <span className="character-stats-header">CHARACTER STATS</span>
            <span className="character-stats-text">Backstory: UIUC CS student from 1972 who stumbled upon an Agriculture x Engineering project gone wrong...Powers: Infinite knowledge of UIUC Grainger Etc.</span>
            {/* Will reformat the above line when finalized */}
          </div>

          <img src={CHARACTER_STATS} className="character-stats-image" />
        </div>

      </div>

      <Collage images={[image1, image2, image3, image4, image5]} />
    </div>
  );
}

export default Home;
