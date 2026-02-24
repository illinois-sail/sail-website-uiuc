import "../About/About.css";
import { ReactComponent as TwoDayEvent } from "../../assets/about/2_day_bubble.svg";
import { ReactComponent as FreeBubble } from "../../assets/about/free_bubble.svg";
import { ReactComponent as Star1 } from "../../assets/about/star_1.svg";
import { ReactComponent as Star2 } from "../../assets/about/star_2.svg";
import { ReactComponent as TitleCloud } from "../../assets/about/title_cloud.svg";
import { ReactComponent as HeaderCloud } from "../../assets/about/header_cloud.svg";
import { ReactComponent as WhoAreThey } from "../../assets/about/who_are_they.svg";
import { ReactComponent as Lead } from "../../assets/about/lead.svg";
import Arwen from "../../assets/images/about-arwen.jpg";
import Connor from "../../assets/images/about-connor.jpg";
import Isabella from "../../assets/images/about-isabella.jpg";
import Isha from "../../assets/images/about-isha.jpg";
import Jewel from "../../assets/images/about-jewel.jpg";
import Kaytlin from "../../assets/images/about-kaytlin.jpg";
import Kyle from "../../assets/images/about-kyle.jpg";
import Lily from "../../assets/images/about-lily.jpg";
import Meghna from "../../assets/images/about-meghna.jpg";
import Sean from "../../assets/images/about-sean.jpg";
import Tia from "../../assets/images/about-tia.jpg";
import Tulsi from "../../assets/images/about-tulsi.png";
import Zoya from "../../assets/images/about-zoya.jpg";

function About() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "100%",
      }}
    >
      <div style={{ marginTop: "17.9vw" }}>
        <TitleCloud
          className="aboutTitleCloud"
          alt="A cloud with the words 'What is Sail'"
        />
        <TwoDayEvent
          className="aboutTwoDayEvent"
          alt="A sound effect bubble with the words '2 Day Event'"
        />
        <FreeBubble
          className="aboutFreeBubble"
          alt="A sound effect bubble iwth the with the word 'Free'"
        />
        <Star1 className="aboutStar1" alt="A stylistic star" />
        <Star2 className="aboutStar2" alt="A stylistic star" />
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
      <HeaderCloud
        className="aboutHeaderCloud"
        alt="A cloud with the words 'Meet The Team!'"
      />
      <div className="aboutTextC">
        <span>
          FOR STUDENTS, BY STUDENTS! FOUNDED IN 2015 BY CS STUDENTS NATHAN
          HANDLER (SECURITY ENGINEER, REDDIT) AND MATTHEW DIERKER (SENIOR
          SOFTWARE ENGINEER, WAYMO), SAIL IS ENTIRELY STUDENT-LED. SUPPORTED BY
          THE SIEBEL SCHOOL OF COMPUTING AND DATA SCIENCE, WE OFFER HIGH
          SCHOOLERS AN IMMERSIVE INTRODUCTION TO ILLINOIS CS STRAIGHT FROM THE
          SOURCE. MEET OUR SAIL 2026 CORE STAFF!
        </span>
      </div>
      <div>
        <div className="aboutSegHeader">
          <span>DIRECTORS</span>
        </div>
        <div
          className="aboutSegSummary"
          style={{ lineHeight: "3vw", marginTop: "18vw" }}
        >
          <WhoAreThey
            className="aboutWhoAreThey"
            alt="A header that reads 'Who are they?'"
          />
          <span>
            CS SAIL STAFF VETERANS, OUR DIRECTORS ARE EXCITED TO JOIN AGAIN AT
            THE HELM! WE GUIDE THE TEAM PLANNING SAIL FROM THE GROUND UP, AND
            CAN'T WAIT TO BRING SAIL 2026 TO YOU!
          </span>
        </div>
        <div
          className="aboutProfile"
          style={{ marginTop: "16.5vw", left: "6.2vw" }}
        >
          <span style={{ zIndex: "3", transform: "translate(4.5vw, -4vw)" }}>
            Arwen
          </span>
          <img
            src={Arwen}
            className="aboutHeadshot"
            alt="A headshot (photo) of Arwen"
          />
          <div className="aboutHeadshotBack" />
        </div>
        <div
          className="aboutProfile"
          style={{ marginTop: "28.5vw", left: "26.2vw" }}
        >
          <span style={{ zIndex: "3", transform: "translate(5.4vw, -4vw)" }}>
            Kyle
          </span>
          <img
            src={Kyle}
            className="aboutHeadshot"
            alt="A headshot (photo) of Kyle"
          />
          <div className="aboutHeadshotBack" />
        </div>
        <div
          className="aboutTrap aboutRightTrap"
          style={{ backgroundColor: "#C12529", marginTop: ".5vw" }}
        />
        <div className="aboutTrap aboutRightTrapBack" />
      </div>
      <div>
        <div className="aboutSegHeader">
          <span>DEVELOPERS</span>
        </div>
        <div
          className="aboutSegSummary"
          style={{
            lineHeight: "4.5vw",
            marginTop: "13.5vw",
          }}
        >
          <WhoAreThey
            className="aboutWhoAreThey"
            alt="A header that reads 'Who are they?'"
          />
          <span>
            OUR FULL STACK WEB DEV TEAM PUT THEIR CS SKILLS INTO ACTION,
            BRINGING THIS YEAR'S FRESH NEW SAIL WEBSITE TO LIFE!
          </span>
        </div>
        <div
          className="aboutProfile"
          style={{ marginTop: "8.5vw", left: "6.2vw" }}
        >
          <span style={{ zIndex: "3", transform: "translate(6.3vw, -4vw)" }}>
            Tia
          </span>
          <img
            src={Tia}
            className="aboutHeadshot"
            style={{ objectPosition: "top" }}
            alt="A headshot (photo) of Tia"
          />
          <Lead className="aboutLead" alt="A cartoon bubble that says 'Lead'" />
          <div className="aboutHeadshotBack" />
        </div>
        <div
          className="aboutProfile"
          style={{ marginTop: "20.5vw", left: "26.2vw" }}
        >
          <span style={{ zIndex: "3", transform: "translate(5vw, -4vw)" }}>
            Sean
          </span>
          <img
            src={Sean}
            className="aboutHeadshot"
            alt="A headshot (photo) of Sean"
          />
          <div className="aboutHeadshotBack" />
        </div>
        <div
          className="aboutProfile"
          style={{ marginTop: "34.5vw", left: "6.2vw" }}
        >
          <span style={{ zIndex: "3", transform: "translate(3.3vw, -4vw)" }}>
            Connor
          </span>
          <img
            src={Connor}
            className="aboutHeadshot"
            alt="A headshot (photo) of Connor"
          />
          <div className="aboutHeadshotBack" />
        </div>
        <div
          className="aboutTrap aboutLeftTrap"
          style={{ backgroundColor: "#FFD830", marginTop: ".5vw" }}
        />
        <div className="aboutTrap aboutLeftTrapBack" />
      </div>
      <div>
        <div className="aboutSegHeader">
          <span>LOGISTICS</span>
        </div>
        <div
          className="aboutSegSummary"
          style={{ lineHeight: "2.4vw", marginTop: "18vw" }}
        >
          <WhoAreThey
            className="aboutWhoAreThey"
            alt="A header that reads 'Who are they?'"
          />
          <span>
            LOGISTICS ARE YOUR PEOPLE DOING THE COORDINATION BEHIND ILLINOIS'
            LARGEST CS OUTREACH EVENT! THEY'RE WORKING HARD TO BRING SAIL 2026
            TO YOU... INCLUDING EVERYTHING FROM FREE TRANSPORTATION, HANDS-ON
            CLASSES, PANELS, AND OF COURSE: FOOD!{" "}
          </span>
        </div>
        <div
          className="aboutProfile"
          style={{ marginTop: "16.5vw", left: "6.2vw" }}
        >
          <span style={{ zIndex: "3", transform: "translate(3.5vw, -4vw)" }}>
            Kaytlin
          </span>
          <img
            src={Kaytlin}
            className="aboutHeadshot"
            style={{
              objectPosition: "left",
              objectViewBox: "inset(18% 0% 0% 0%)",
            }}
            alt="A headshot (photo) of Kaytlin"
          />
          <div className="aboutHeadshotBack" />
        </div>
        <div
          className="aboutProfile"
          style={{ marginTop: "28.5vw", left: "26.2vw" }}
        >
          <span style={{ zIndex: "3", transform: "translate(5vw, -4vw)" }}>
            Tulsi
          </span>
          <img
            src={Tulsi}
            className="aboutHeadshot"
            alt="A headshot (photo) of Tulsi"
          />
          <div className="aboutHeadshotBack" />
        </div>
        <div
          className="aboutTrap aboutRightTrap"
          style={{ backgroundColor: "#F15F23", marginTop: ".5vw" }}
        />
        <div className="aboutTrap aboutRightTrapBack" />
      </div>
      <div>
        <div className="aboutSegHeader">
          <span>DESIGNERS</span>
        </div>
        <div
          className="aboutSegSummary"
          style={{
            lineHeight: "3.2vw",
            marginTop: "13.5vw",
          }}
        >
          <WhoAreThey
            className="aboutWhoAreThey"
            alt="A header that reads 'Who are they?'"
          />
          <span>
            OUR DESIGNERS GIVE US OUR SPARK, BRINGING SAIL'S THEME TO LIFE! FIND
            THIER EXPERTISE IN EVERYTHING FROM OUR WEBSITE AND POST AESTHETICS
            TO OUR MERCH AND DECORATIONS.
          </span>
        </div>
        <div
          className="aboutProfile"
          style={{ marginTop: "8.5vw", left: "6.2vw" }}
        >
          <span
            style={{
              zIndex: "3",
              transform: "translate(6vw, -4vw)",
            }}
          >
            Lily
          </span>
          <img
            src={Lily}
            className="aboutHeadshot"
            style={{
              objectFit: "cover",
              objectPosition: "42% 0%",
              objectViewBox: "inset(3%)",
            }}
            alt="A headshot (photo) of Lily"
          />
          <Lead className="aboutLead" alt="A cartoon bubble that says 'Lead'" />

          <div className="aboutHeadshotBack" />
        </div>
        <div
          className="aboutProfile"
          style={{ marginTop: "20.5vw", left: "26.2vw" }}
        >
          <span style={{ zIndex: "3", transform: "translate(3.1vw, -4vw)" }}>
            Meghna
          </span>
          <img
            src={Meghna}
            className="aboutHeadshot"
            alt="A headshot (photo) of Meghna"
          />
          <div className="aboutHeadshotBack" />
        </div>
        <div
          className="aboutProfile"
          style={{ marginTop: "34.5vw", left: "6.2vw" }}
        >
          <span style={{ zIndex: "3", transform: "translate(5.2vw, -4vw)" }}>
            Zoya
          </span>
          <img
            src={Zoya}
            className="aboutHeadshot"
            style={{
              objectFit: "cover",
              objectPosition: "right bottom",
              objectViewBox: "inset(48% 11% 25% 24%)",
            }}
            alt="A headshot (photo) of Zoya"
          />
          <div className="aboutHeadshotBack" />
        </div>
        <div
          className="aboutTrap aboutLeftTrap"
          style={{ backgroundColor: "#FF7DB2", marginTop: ".5vw" }}
        />
        <div className="aboutTrap aboutLeftTrapBack" />
      </div>
      <div>
        <div className="aboutSegHeader">
          <span>MARKETERS</span>
        </div>
        <div
          className="aboutSegSummary"
          style={{ lineHeight: "2.75vw", marginTop: "13.5vw", left: "4.17vw" }}
        >
          <WhoAreThey
            className="aboutWhoAreThey"
            alt="A header that reads 'Who are they?'"
          />
          <span>
            FROM GETTING STUDENTS AND PROFESSORS ALL AROUND THE UNIVERSITY OF
            ILLINOIS CAMPUS INVOLVED, BUILDING OUR PUBLIC PROFILE ON SOCIAL
            MEDIA, TO REACHING OUT TO YOU, OUR MARKETERES BRING IT ALL TOGETHER!
          </span>
        </div>
        <div
          className="aboutProfile"
          style={{ marginTop: "8.5vw", left: "76.15vw" }}
        >
          <span style={{ zIndex: "3", transform: "translate(3.2vw, -4vw)" }}>
            Isabella
          </span>
          <img
            src={Isabella}
            className="aboutHeadshot"
            style={{ objectPosition: "top" }}
            alt="A headshot (photo) of Isabella"
          />
          <div className="aboutHeadshotBack" />
        </div>
        <div
          className="aboutProfile"
          style={{ marginTop: "20.5vw", left: "56.15vw" }}
        >
          <span style={{ zIndex: "3", transform: "translate(4.3vw, -4vw)" }}>
            Jewel
          </span>
          <img
            src={Jewel}
            className="aboutHeadshot"
            style={{
              objectFit: "cover",
              objectPosition: "center",
              objectViewBox: "inset(26% 19% 17% 33%)",
            }}
            alt="A headshot (photo) of Jewel"
          />
          <div className="aboutHeadshotBack" />
        </div>
        <div
          className="aboutProfile"
          style={{ marginTop: "34.5vw", left: "76.15vw" }}
        >
          <span style={{ zIndex: "3", transform: "translate(5.2vw, -4vw)" }}>
            Isha
          </span>
          <img
            src={Isha}
            className="aboutHeadshot"
            alt="A headshot (photo) of Isha"
          />
          <div className="aboutHeadshotBack" />
        </div>
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
