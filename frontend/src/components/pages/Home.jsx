import "./Home.css";
import CS_SAIL_IMAGE from "../../assets/cssail.png";
import REGISTER_NOW_BUTTON from "../../assets/registernow.png";
import CARTOON_FRAME from "../../assets/cartoon-frame.png";

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
        <span className="ch-one-text">CHAPTER 1: INTRODUCTION</span>
        <img src={CARTOON_FRAME} className="cartoon-frame-image" />
      </div>

      <Collage images={[image1, image2, image3, image4, image5]} />
    </div>
  );
}

export default Home;
