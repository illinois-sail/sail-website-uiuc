import FaqCloud from "../faq/FaqCloud";
import FaqStar from "../faq/FaqStar";
import "../faq/Faq.css";
import ImpactMark from "../faq/ImpactMark";
import mascot from "../../assets/images/mascot.svg";
import SpeechBubble from "../faq/SpeechBubble";
import { useState } from "react";
import ResponseStar from "../faq/ResponseStar";
import { Link } from "react-router-dom";

function Faq() {
  const [shownA, setShownA] = useState(false);
  const [shownB, setShownB] = useState(false);
  const [shownC, setShownC] = useState(false);
  const [shownD, setShownD] = useState(false);
  const [shownE, setShownE] = useState(false);
  const [shownF, setShownF] = useState(false);
  const [shownG, setShownG] = useState(false);
  const [shownH, setShownH] = useState(false);

  const starPositionsA = [
    { top: -0.117, left: 0.299 },
    { top: -0.053, left: 0.587 },
    { top: -0.02, left: 0.781 },
    { top: 0.011, left: 0.664 },
    { top: 0.133, left: 0.041 },
    { top: 0.133, left: 0.361 },
    { top: 0.123, left: 0.952 },
    { top: 0.189, left: 0.209 },
    { top: 0.279, left: 0.679 },
    { top: 0.284, left: 0.389 },
    { top: 0.345, left: 0.099 },
  ];

  return (
    <div className="faqWrapper">
      <div className="faqCloudDiv">
        <FaqCloud className="faqCloudDiv" width="22.7vw" />
      </div>
      {/* Pink Trapezoid Section */}
      <div style={{ position: "relative" }}>
        <div className="faqPinkTrapezoid-back" />
        <div className="faqPinkTrapezoid">
          <div className="faqStar">
            {starPositionsA.map((pos, index) => (
              <div
                key={index}
                style={{
                  position: "absolute",
                  top: `calc(${pos.top} * 100vw)`,
                  left: `calc(${pos.left} * 100vw)`,
                  width: "100%",
                  height: "100%",
                }}
              >
                <FaqStar fill="#D72F4E" stroke="#3A260D" />
              </div>
            ))}
          </div>
        </div>
        <div className="faqImpactA">
          <ImpactMark />
        </div>
        <div className="faqPinkTrapezoidTextbox faqPinkTrapezoidTextboxA">
          YOU PROBABLY HAVE SOME QUESTIONS...
        </div>
        <img src={mascot} alt="mascot" className="faqMascot" />
        <div className="faqPinkTrapezoidTextbox faqPinkTrapezoidTextboxB">
          <span>...DON'T WORRY, WE'VE READ</span>
          <span>YOUR MIND AND HAVE THE</span>
          <span>ANSWERS!</span>
        </div>
        <div className="faqImpactB">
          <ImpactMark />
        </div>
      </div>
      <div className="faqQuestionInfoWrapper">
        <div className="faqQuestionsWrapper">
          <div className="faqCard faqCardLeft" id="faqCardA">
            <div style={{ zIndex: "1" }}>
              <SpeechBubble
                width="80.71vw"
                color="#5FB1B7"
                tailDirection="left"
                text="WHAT IS THE COST TO ATTEND?"
                onclick={() => setShownA(!shownA)}
              />
            </div>
            {/* Start kluge: I have no idea why having an unhidden star SVG prevents the rest from looking weird */}
            <div
              id="klugestar"
              style={{ display: "inline", position: "absolute", zIndex: -1 }}
            >
              <ResponseStar width="0" />
            </div>
            {/* End kluge */}
            <div className="faqResponse" hidden={!shownA}>
              <div className="faqResponseRow">
                <div className="faqResponseStar">
                  <ResponseStar width="3vw" />
                </div>
                <span>SAIL IS COMPLETELY FREE TO ATTEND!</span>
              </div>
            </div>
          </div>
          <div className="faqCard faqCardRight" id="faqCardB">
            <SpeechBubble
              width="80.71vw"
              color="#13294B"
              tailDirection="right"
              text="WHO CAN ATTEND SAIL?"
              onclick={() => setShownB(!shownB)}
            />
            <div className="faqResponse" hidden={!shownB}>
              <div className="faqResponseRow">
                <div className="faqResponseStar">
                  <ResponseStar width="3vw" />
                </div>
                <span>
                  CS SAIL IS OPEN TO ANY HIGH SCHOOL STUDENTS (GRADES 9-12)
                  WORLDWIDE! YOU DO NOT NEED TO BE CURRENTLY ADMITTED OR
                  APPLYING TO ILLINOIS TO ATTEND, THOUGH WE'RE EXCITED TO
                  WELCOME ANY FUTURE ILLINI!
                </span>
              </div>
            </div>
          </div>
          <div className="faqCard faqCardLeft" id="faqCardC">
            <SpeechBubble
              width="80.71vw"
              color="#F05E22"
              tailDirection="left"
              text="CAN PARENTS ATTEND SAIL?"
              onclick={() => setShownC(!shownC)}
            />
            <div className="faqResponse" hidden={!shownC}>
              <div className="faqResponseRow">
                <div className="faqResponseStar">
                  <ResponseStar width="3vw" />
                </div>
                <span>
                  PARENTS ARE INVITED TO JOIN US ON-CAMPUS APRIL 18TH, WHERE
                  WE'VE PARTNERED WITH THE SIEBEL SCHOOL OF COMPUTING AND DATA
                  SCIENCE AND UNDERGRADUATE ADMISSIONS TO OFFER AN EXCLUSIVE
                  SAIL PARENT TRACK.
                </span>
              </div>
              <div className="faqResponseRow">
                <div className="faqResponseStar">
                  <ResponseStar width="3vw" />
                </div>
                <span>
                  UNFORTUNATELY, WE ARE NOT ABLE TO ACCOMMODATE PARENTS ON THE
                  STUDENT TRACK, THOUGH SOME EVENTS WILL BE HOSTED TOGETHER!
                </span>
              </div>
              {/* <span>
                PARENTS ARE INVITED TO JOIN US ON-CAMPUS APRIL 18TH, WHERE WE'VE
                PARTNERED WITH THE SIEBEL SCHOOL OF COMPUTING AND DATA SCIENCE
                AND UNDERGRADUATE ADMISSIONS TO OFFER AN EXCLUSIVE SAIL PARENT
                TRACK. VIEW THE PARENT SCHEDULE <href id="TODO3">HERE</href>{" "}
                <br /> UNFORTUNATELY, WE ARE NOT ABLE TO ACCOMMODATE PARENTS ON
                THE STUDENT TRACK, THOUGH SOME EVENTS MAY BE HOSTED TOGETHER!
              </span> */}
            </div>
          </div>
          <div className="faqCard faqCardRight" id="faqCardD">
            <SpeechBubble
              width="80.71vw"
              color="#FA5A9C"
              tailDirection="right"
              text="DO I HAVE TO APPLY TO SAIL?"
              onclick={() => setShownD(!shownD)}
            />
            <div className="faqResponse" hidden={!shownD}>
              <div className="faqResponseRow">
                <div className="faqResponseStar">
                  <ResponseStar width="3vw" />
                </div>
                <span>
                  SAIL DOES NOT HAVE AN APPLICATION, BUT WE DO HAVE A REQUIRED
                  REGISTRATION. WE ACCEPT ALL HIGH SCHOOL STUDENTS UNTIL WE
                  REACH OUR EVENT CAPACITY.
                </span>
              </div>
              {/* <div className="faqResponseRow">
                <div className="faqResponseStar">
                  <ResponseStar width="3vw" />
                </div>
                <span>
                  SAIL DOES NOT HAVE AN APPLICATION, BUT WE DO HAVE A REQUIRED
                  REGISTRATION. WE ACCEPT ALL HIGH SCHOOL STUDENTS UNTIL WE
                  REACH OUR EVENT CAPACITY. <br /> VIEW REGISTRATION
                  INSTRUCTIONS <href id="TODO">HERE.</href>
                </span>
              </div> */}
            </div>
          </div>
          <div className="faqCard faqCardLeft" id="faqCardE">
            <SpeechBubble
              width="80.71vw"
              color="#EA2E04"
              tailDirection="left"
              text="DO I NEED EXPERIENCE IN COMPUTER SCIENCE TO ATTEND CS SAIL?"
              onclick={() => setShownE(!shownE)}
            />
            <div className="faqResponse" hidden={!shownE}>
              <div className="faqResponseRow">
                <div className="faqResponseStar">
                  <ResponseStar width="3vw" />
                </div>
                <span>
                  NOPE! SAIL IS OPEN TO HIGH SCHOOL STUDENTS AT ANY LEVEL IN
                  THEIR CS LEARNING JOURNEY. ANYONE INTERESTED IN LEARNING (OR
                  LEARNING MORE!) ABOUT CS IS ENCOURAGED TO ATTEND!
                </span>
              </div>
              <div className="faqResponseRow">
                <div className="faqResponseStar">
                  <ResponseStar width="3vw" />
                </div>
                <span>
                  WE'LL OFFER A RANGE OF CLASS OPTIONS WITH EXPERIENCE
                  RECOMMENDATIONS (FROM NONE REQUIRED, TO SOME BACKGROUND IN
                  SPECIFIC TOPICS), AS WELL AS Q&A AND DISCUSSION OPPORTUNITIES
                  SO YOU CAN EXPLORE ALL THE POSSIBILITIES IN CS!
                </span>
              </div>
            </div>
          </div>
          <div className="faqCard faqCardRight" id="faqCardF">
            <SpeechBubble
              width="80.71vw"
              color="#FED931"
              tailDirection="right"
              text="ARE MEALS INCLUDED?"
              textColor="#000"
              onclick={() => setShownF(!shownF)}
            />
            <div className="faqResponse" hidden={!shownF}>
              <div className="faqResponseRow">
                <div className="faqResponseStar">
                  <ResponseStar width="3vw" />
                </div>
                <span>
                  BREAKFAST WILL BE PROVIDED FOR REGISTERED STUDENTS AND
                  PARENTS.
                </span>
              </div>
              <div className="faqResponseRow">
                <div className="faqResponseStar">
                  <ResponseStar width="3vw" />
                </div>
                <span>
                  LUNCH WILL BE PROVIDED TO REGISTERED STUDENTS. FOR ADDITIONAL
                  PARENT MEAL OPTIONS, OUR PARTNERS AT THE CS ADMISSIONS
                  DEPARTMENT CAN PROVIDE RECOMMENDATIONS FOR LOCAL RESTAURANTS
                  TO EXPLORE AROUND CAMPUS.
                </span>
              </div>
            </div>
          </div>
          <div className="faqCard faqCardLeft" id="faqCardG">
            <SpeechBubble
              width="80.71vw"
              color="#5FB1B7"
              tailDirection="left"
              text="IS TRANSPORTATION PROVIDED TO AND FROM SAIL?"
              onclick={() => setShownG(!shownG)}
            />
            <div className="faqResponse" hidden={!shownG}>
              <div className="faqResponseRow">
                <div className="faqResponseStar">
                  <ResponseStar width="3vw" />
                </div>
                <span>
                  BUS TRANSPORTATION FROM THE CHICAGO AREA IS PROVIDED FOR FREE
                  TO-AND-FROM THE EVENT VIA PEORIA CHARTER. LOG IN TO VIEW THE
                  BUS SCHEDULE AND AVAILABLE STOPS FROM YOUR{" "}
                  <Link to="/profile">PROFILE PAGE</Link>
                </span>
              </div>
              <div className="faqResponseRow">
                <div className="faqResponseStar">
                  <ResponseStar width="3vw" />
                </div>
                <span>
                  ANY OTHER TRAVEL PLANS ARE NOT COVERED OR REIMBURSED BY SAIL.
                </span>
              </div>
            </div>
          </div>
          <div className="faqCard faqCardRight" id="faqCardH">
            <SpeechBubble
              width="80.71vw"
              color="#13294B"
              tailDirection="right"
              text="IS A CHAPERONE REQUIRED TO ACCOMPANY MINORS TO SAIL?"
              onclick={() => setShownH(!shownH)}
            />
            <div className="faqResponse" hidden={!shownH}>
              <div className="faqResponseRow">
                <div className="faqResponseStar">
                  <ResponseStar width="3vw" />
                </div>
                <span>
                  NO. PARENTS ARE WELCOME TO ATTEND SAIL AND PARTICIPATE IN OUR
                  PARENT TRACK, BUT ARE NOT REQUIRED. SIEBEL SCHOOL OF COMPUTING
                  AND DATA SCIENCE CAMPUS SECURITY AUTHORITIES WILL BE PRESENT
                  ON-SITE THROUGHOUT THE EVENT TO ENSURE THE SAFETY AND
                  WELL-BEING OF STUDENTS.
                </span>
              </div>
              <div className="faqResponseRow">
                <div className="faqResponseStar">
                  <ResponseStar width="3vw" />
                </div>
                <span>
                  IF A STUDENT UNDER 18 IS ATTENDING ALONE, PLEASE ENSURE THE
                  ELECTIVE/VOLUNTARY ACTIVITY WAIVER (INCLUDED ON THE{" "}
                  <a href="https://linktr.ee/cs_sail_2026">
                    GRAINGER REGISTRATION FORM
                  </a>
                  ) HAS BEEN SIGNED BY A PARENT OR LEGAL GUARDIAN PRIOR TO
                  ATTENDING THE EVENT IN ORDER TO PARTICIPATE.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="faqFooterWrapper">
          <div className="faqFooter">
            <span>
              HAVE MORE QUESTIONS? CONTACT US AT{" "}
              <a href="mailto:cs-sail@illinois.edu">CS-SAIL@ILLINOIS.EDU</a>!
              <br />
              FOLLOW US ON{" "}
              <a href="https://www.instagram.com/illinois_cs_sail/">
                INSTAGRAM
              </a>{" "}
              AND <a href="https://www.tiktok.com/@illinoissail">TIKTOK</a> FOR
              MORE UPDATES!
            </span>
          </div>
          <div className="faqStar" style={{ top: "20%", left: "13%" }}>
            <FaqStar fill="#D72F4E" stroke="#3A260D" />
          </div>
          <div className="faqStar" style={{ top: "110%", left: "4%" }}>
            <FaqStar fill="#D72F4E" stroke="#3A260D" />
          </div>
          <div className="faqStar" style={{ top: "-5%", left: "86%" }}>
            <FaqStar fill="#D72F4E" stroke="#3A260D" />
          </div>
          <div className="faqStar" style={{ top: "106%", left: "82%" }}>
            <FaqStar fill="#D72F4E" stroke="#3A260D" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;