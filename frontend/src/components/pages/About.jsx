import "../About/About.css";
import { ReactComponent as TwoDayEvent } from "../../assets/about/2_day_bubble.svg";
import { ReactComponent as FreeBubble } from "../../assets/about/free_bubble.svg";
import { ReactComponent as Star1 } from "../../assets/about/star_1.svg";
import { ReactComponent as Star2 } from "../../assets/about/star_2.svg";
import { ReactComponent as TitleCloud } from "../../assets/about/title_cloud.svg";

function About() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ marginTop: "17.9vw" }}>
        <TitleCloud className="aboutTitleCloud" />
        <TwoDayEvent className="aboutTwoDayEvent" />
        <FreeBubble className="aboutFreeBubble" />
        <Star1 className="aboutStar1" />
        <Star2 className="aboutStar2" />
        <div
          className="aboutTrap aboutLeftTrap"
          style={{ backgroundColor: "#79CCFF", marginTop: ".5vw" }}
        >
          <div className="aboutTextA">
            <span>
              SAIL IS AN IMMERSIVE, HANDS-ON EXPERIENCE MEANT TO SHOW HIGH
              SCHOOL STUDENTS WHAT IT'S LIKE TO STUDY CS AT ILLINOIS. OUR AIM IS
              TO FOSTER CURIOSITY AND INTEREST, AND INSPIRE!
            </span>
          </div>
          <div className="aboutTextB">
            <span>
              HERE, WE GIVE THE OPPORTUNITY TO LEARN ABOUT THE POSSIBILITIES IN
              COMPUTER SCIENCE AND HIGHER EDUCATION. WE PARTNER WITH THE
              ILLINOIS CS DEPARTMENT AND ADMISSIONS, PROFESSORS, AND CURRENT
              ILLINOIS STUDENTS PASSIONATE ABOUT TECHNOLOGY TO SHARE THEIR
              INTERESTS AND KNOWLEDGE WITH YOU!
            </span>
          </div>
        </div>
        <div className="aboutTrap aboutLeftTrapBack" />
      </div>
      <div>
        <div
          className="aboutTrap aboutRightTrap"
          style={{ backgroundColor: "#C12529", marginTop: ".5vw" }}
        />
        <div className="aboutTrap aboutRightTrapBack" />
      </div>
      <div>
        <div
          className="aboutTrap aboutLeftTrap"
          style={{ backgroundColor: "#FFD830", marginTop: ".5vw" }}
        />
        <div className="aboutTrap aboutLeftTrapBack" />
      </div>
      <div>
        <div
          className="aboutTrap aboutRightTrap"
          style={{ backgroundColor: "#F15F23", marginTop: ".5vw" }}
        />
        <div className="aboutTrap aboutRightTrapBack" />
      </div>
      <div>
        <div
          className="aboutTrap aboutLeftTrap"
          style={{ backgroundColor: "#FF7DB2", marginTop: ".5vw" }}
        />
        <div className="aboutTrap aboutLeftTrapBack" />
      </div>
      <div>
        <div
          className="aboutTrap aboutRightTrap"
          style={{ backgroundColor: "#5FB0B7", marginTop: ".5vw" }}
        />
        <div className="aboutTrap aboutRightTrapBack" />
      </div>
    </div>
  );
}

export default About;
