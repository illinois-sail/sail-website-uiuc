import "./Home.css";
import CS_SAIL_IMAGE from "../../assets/cssail.png";
import REGISTER_NOW_BUTTON from "../../assets/registernow.png";
import CARTOON_FRAME from "../../assets/cartoon-frame.png";
import CORN from "../../assets/corn.png";
import ELLIPSE from "../../assets/ellipse.png";
import CHARACTER_STATS from "../../assets/characterstats.png";
import SS_ICON_1 from "../../assets/ss-icon1.png";

import Collage from "../Collage/Collage";
import image1 from "../../assets/images/collage-1.jpg";
import image2 from "../../assets/images/collage-2.jpg";
import image3 from "../../assets/images/collage-3.jpg";
import image4 from "../../assets/images/collage-4.jpg";
import image5 from "../../assets/images/collage-5.png";

function Home() {
  return (
    <div className="home-page">
      <div className="opening-stack">
        <img src={CS_SAIL_IMAGE} className="cs-sail-image" />
        <img src={REGISTER_NOW_BUTTON} className="register-now-image" />
      </div>
      <div className="ch-one-block">
        <span className="ch-heading-text">Chapter 1: Introduction</span>
        <img src={CARTOON_FRAME} className="cartoon-frame-image" />
        <div className="character-stats-row">
          <img src={CORN} className="corn-ch-one-image" />
          <div className="ellipse-wrapper">
            <img src={ELLIPSE} className="ellipse-ch-one-image" />
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

      <div className="ch-two-block">
        <span className="ch-heading-text">Chapter 2: Schedule</span>
        <div className="schedule-note-wrapper">
          <div className="schedule-note-row">
            <div className="schedule-note-box">
              <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 16V12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 8H12.01" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <span className="schedule-note-text">Note: This is a sample schedule! When you register, you'll get to choose which classes you want to attend</span>
            </div>
          </div>
          <img src={CORN} className="corn-ch-two-image" />
          <div className="ellipse-wrapper-2">
            <img src={ELLIPSE} className="ellipse-ch-two-image" />
            <span className="ellipse-text-2">I bet you’re wondering what the event is gonna be like. Let’s explore the two!</span>
          </div>
        </div>
        <div className="schedule-options-row">
          <div className = "schedule-option-active">
            <span className="options-text">DAY 1 - STUDENT SCHEDULE</span>
          </div>
          <div className = "schedule-option-disabled">
            <span className="options-text">DAY 1 - PARENT SCHEDULE</span>
          </div>
          <div className = "schedule-option-disabled">
            <span className="options-text">DAY 2 - VIRTUAL</span>
          </div>
        </div>

        <div className="sample-schedule-container">
          <div className="sample-schedule">
            <div className="sample-schedule-event">
              <img src={SS_ICON_1} />
              <div className="sample-schedule-info">
                <p>something</p>
                <p>Another something should appear below</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Note: the "collage" class is temporary until rest of home page is complete */}
      <div className="collage">
        <Collage images={[image1, image2, image3, image4, image5]} />
      </div>
    </div>
  );
}

export default Home;
