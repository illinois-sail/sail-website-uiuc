import FaqCloud from "../faq/FaqCloud";
import FaqStar from "../faq/FaqStar";
import "../faq/Faq.css";
import ImpactMark from "../faq/ImpactMark";
import mascot from "../../assets/images/mascot.svg";
import SpeechBubble from "../faq/SpeechBubble";
import { useState } from "react";
import ResponseStar from "../faq/ResponseStar";

function Faq() {
  const [shownA, setShownA] = useState(false);
  const [shownB, setShownB] = useState(false);
  const [shownC, setShownC] = useState(false);
  const [shownD, setShownD] = useState(false);
  const [shownE, setShownE] = useState(false);
  const [shownF, setShownF] = useState(false);
  const [shownG, setShownG] = useState(false);

  const starPositionsA = [
    { top: 0.288, left: 0.299 },
    { top: 0.332, left: 0.587 },
    { top: 0.365, left: 0.781 },
    { top: 0.416, left: 0.664 },
    { top: 0.518, left: 0.041 },
    { top: 0.518, left: 0.361 },
    { top: 0.508, left: 0.952 },
    { top: 0.574, left: 0.209 },
    { top: 0.664, left: 0.679 },
    { top: 0.689, left: 0.389 },
    { top: 0.75, left: 0.099 },
  ];

  return (
    <div className="faqWrapper">
      <div className="placementHeader">HEADER WOULD BE HERE AT THIS HEIGHT</div>
      <div className="faqCloudDiv">
        <FaqCloud />
      </div>
      {/* Pink Trapezoid Section */}
      <div>
        <div className="faqPinkTrapezoid-back" />
        <div className="faqPinkTrapezoid" />
        <div className="faqStarsA">
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
        <div className="faqImpactA">
          <ImpactMark />
        </div>
        <div className="faqPinkTrapezoidTextbox faqPinkTrapezoidTextboxA">
          YOU PROBABLY HAVE SOME QUESTIONS...
        </div>
        <img src={mascot} alt="mascot" className="faqMascot"></img>
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
              <div className="faqResponseStarA">
                <ResponseStar width="3vw" />
              </div>
              <span>
                SAIL IS COMPLETELY FREE TO ATTEND! NO COST IS REQUIRED TO BE
                HERE.
              </span>
            </div>
          </div>
          <div className="faqCard faqCardRight" id="faqCardB">
            <SpeechBubble
              width="80.71vw"
              color="#13294B"
              tailDirection="right"
              text="WHO CAN ATTEND THIS EVENT?"
              onclick={() => setShownB(!shownB)}
            />
            <div className="faqResponse" hidden={!shownB}>
              <div className="faqResponseStarA">
                <ResponseStar width="3vw" />
              </div>
              <span>
                CS SAIL IS OPEN TO ANY HIGH SCHOOL STUDENTS (GRADE 9-12)
                WORLDWIDE! YOU DO NOT NEED TO BE CURRENTLY ADMITTED OR APPLYING
                TO ILLINOIS TO ATTEND, THOUGH WE'RE EXCITED TO WELCOME ANY
                FUTURE ILLINI!
              </span>
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
              <div className="faqResponseStarA">
                <ResponseStar width="3vw" />
              </div>
              <div className="faqResponseStarB">
                <ResponseStar width="3vw" />
              </div>
              <span>
                PARENTS ARE INVITED TO JOIN US ON-CAMPUS APRIL 18TH, WHERE WE'VE
                PARTNERED WITH THE SIEBEL SCHOOL OF COMPUTING AND DATA SCIENCE
                AND UNDERGRADUATE ADMISSIONS TO OFFER AN EXCLUSIVE SAIL PARENT
                TRACK. VIEW THE PARENT SCHEDULE <a href={null}>HERE</a> <br />{" "}
                UNFORTUNATELY, WE ARE NOT ABLE TO ACCOMODATE PARENTS ON THE
                STUDENT TRACK, THOUGH SOME EVENTS MAY BE HOSTED TOGETHER!
              </span>
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
              <div className="faqResponseStarA">
                <ResponseStar width="3vw" />
              </div>
              <div className="faqResponseStarC">
                <ResponseStar width="3vw" />
              </div>
              <span>
                SAIL DOES NOT HAVE AN APPLICATION, BUT WE DO HAVE A REQUIRED
                REGISTRATION. WE ACCEPT ALL HIGH SCHOOL STUDENTS UNTIL WE REACH
                OUR EVENT CAPACITY. <br /> VIEW REGISTRATION INSTRUCTIONS{" "}
                <a href={null}>HERE.</a>
              </span>
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
              <div className="faqResponseStarA">
                <ResponseStar width="3vw" />
              </div>
              <div className="faqResponseStarC">
                <ResponseStar width="3vw" />
              </div>
              <span>
                NOPE! SAIL IS OPEN TO HIGH SCHOOL STUDENTS AT ANY LEVEL IN THEIR
                CS LEARNING JOURNEY. ANYONE INTERESTED IN LEARNING (OR LEARNING
                MORE!) ABOUT CS IS ENCOURAGED TO ATTEND! <br /> WE OFFER A WIDE
                RANGE OF CLASS OPTIONS SUITABLE FOR ANY CS LEVEL, WHETHER YOU'RE
                A COMPLETE BEGINNER OR SOMEONE LOOKING TO EXPAIND THEIR
                KNOWLEDGE IN SPECIFIC TOPICS, AND HOLD Q&A AND DISCUSSION
                OPPORTUNITIES SO YOU CAN EXPLORE ALL THE POSSIBILITIES IN CS!
              </span>
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
              <div className="faqResponseStarA">
                <ResponseStar width="3vw" />
              </div>
              <div className="faqResponseStarC">
                <ResponseStar width="3vw" />
              </div>
              <span>
                BREAKFAST AND LUNCH WILL BE PROVIDED FOR REGISTERED STUDENTS,
                AND COFFEE WILL BE PROVIDED TO PARENTS. <br /> FOR ADDITIONAL
                MEAL OPTIONS, OUR PARTNERS AT THE CS ADMISSIONS DEPARTMENT CAN
                PROVIDE RECOMMENDATIONS FOR LOCAL RESTAURANTS TO EXPLORE AROUND
                CAMPUS AS WELL!
              </span>
            </div>
          </div>
          <div className="faqCard faqCardLeft" id="faqCardG">
            <SpeechBubble
              width="80.71vw"
              color="#5FB1B7"
              tailDirection="left"
              text="IS A CHAPERONE REQUIRED TO ACCOMPANY MINORS TO SAIL?"
              onclick={() => setShownG(!shownG)}
            />
            <div className="faqResponse" hidden={!shownG}>
              <div className="faqResponseStarA">
                <ResponseStar width="3vw" />
              </div>
              <div className="faqResponseStarB">
                <ResponseStar width="3vw" />
              </div>
              <span>
                NO. PARENTS ARE WELCOME TO ATTEND SAIL AND PARTICIPATE IN OUR
                PARENT TRACK, BUT ARE NOT REQUIRED. SIEBEL SCHOOL OF COMPUTING
                AND DATA SCIENCE CAMPUS SECURITY AUTHORITIES WILL BE PRESENT
                ONSITE THROUGHOUT THE EVENT TO ENSURE THE SAFETY AND WELLBEING
                OF STUDENTS. <br /> IF A STUDENT UNDER 18 IS ATTENDING ALONE,
                PLEASE ENSURE THE ELECTIVE/VOLUNTARY ACTIVITY WAIVER (INCLUDED
                ON THE <href>GRAINGER RESTRATION FORM</href>) HAS BEEN SIGNED BY
                A PARENT OR LEGAL GUARDIAN PRIOR TO ATTENDING THE EVENT IN ORDER
                TO PARTICIPATE.
              </span>
            </div>
          </div>
        </div>
        <div className="faqFooterWrapper">
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
          <div className="faqStarsA" style={{ top: "-110%", left: "10%" }}>
            <FaqStar fill="#D72F4E" stroke="#3A260D" />
          </div>
          <div className="faqStarsA" style={{ top: "30%", left: "-2%" }}>
            <FaqStar fill="#D72F4E" stroke="#3A260D" />
          </div>
          <div className="faqStarsA" style={{ top: "-180%", left: "90%" }}>
            <FaqStar fill="#D72F4E" stroke="#3A260D" />
          </div>
          <div className="faqStarsA" style={{ top: "0%", left: "85%" }}>
            <FaqStar fill="#D72F4E" stroke="#3A260D" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
