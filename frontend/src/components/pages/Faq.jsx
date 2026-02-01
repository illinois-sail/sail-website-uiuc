import FaqCloud from "../faq/FaqCloud";
import FaqStar from "../faq/FaqStar";
import "../faq/Faq.css";
import ImpactMark from "../faq/ImpactMark";
import mascot from "../../assets/images/mascot.svg";

function Faq() {
  const starPositionsA = [
    { top: 0.271, left: 0.299 },
    { top: 0.315, left: 0.587 },
    { top: 0.348, left: 0.781 },
    { top: 0.399, left: 0.664 },
    { top: 0.501, left: 0.041 },
    { top: 0.501, left: 0.361 },
    { top: 0.491, left: 0.952 },
    { top: 0.557, left: 0.209 },
    { top: 0.647, left: 0.679 },
    { top: 0.682, left: 0.389 },
    { top: 0.733, left: 0.099 },
  ];

  return (
    <div className="faqWrapper">
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
      <div className="faqQuestionsWrapper"></div>
    </div>
  );
}

export default Faq;
