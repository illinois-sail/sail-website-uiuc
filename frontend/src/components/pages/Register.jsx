import "./Register.css";
import { ReactComponent as TitleCloud } from "../../assets/title_cloud_register.svg";
import { ReactComponent as Star1 } from "../../assets/about/star_1.svg";
import { ReactComponent as Star2 } from "../../assets/about/star_2.svg";

function Register() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "100%",
        overflowX: "hidden",
      }}
    >
      {/* Title / intro trapezoid */}
      <div style={{ marginTop: "17.9vw" }}>
        <TitleCloud
          className="registerTitleCloud"
          alt="A cloud with the words 'How to Register'"
        />
        <Star1 className="registerStar1" alt="A stylistic star" />
        <Star2 className="registerStar2" alt="A stylistic star" />

        <div
          className="aboutTrap aboutLeftTrap"
          style={{ backgroundColor: "#C12529", marginTop: ".5vw" }}
        >
          <div className="registerIntroBox">
            <span>
              READY TO JOIN US? REGISTRATION IS EASY — JUST TWO STEPS AND
              YOU'RE IN!
            </span>
          </div>
          <div className="registerIntroBox2">
            <span>
              SAIL 2026 TAKES PLACE <strong>APRIL 18–19, 2026</strong> AT THE
              UNIVERSITY OF ILLINOIS URBANA-CHAMPAIGN. IN-PERSON IS APRIL 18,
              VIRTUAL IS APRIL 19!
            </span>
          </div>
        </div>
        <div className="aboutTrap aboutLeftTrapBack" />
      </div>

      {/* Steps wrapper */}
      <div className="registerStepsWrapper">

        {/* Step 1 */}
        <div className="registerStep">
          <div className="registerStepHeader" style={{ backgroundColor: "#79CCFF" }}>
            <span>STEP 1: REGISTER FOR SAIL</span>
          </div>
          <p className="registerStepSubtext">REGISTER THROUGH GRAINGER / THE UNIVERSITY OF ILLINOIS</p>

          {/* Admitted students */}
          <div className="registerCard">
            <div className="registerCardHeader">🎓 Admitted to U of I?</div>
            <div className="registerCardBody">
              If you are an admitted student to the University of Illinois,
              register through <strong>MyIllini</strong>. This will register you for both in-person and virtual!
            </div>
            <a
              className="registerLink"
              href="https://myillini.illinois.edu/AdmittedEvents/cs_admitted"
              target="_blank"
              rel="noopener noreferrer"
            >
              MyIllini Registration
            </a>
          </div>

          {/* Not admitted */}
          <div className="registerCard">
            <div className="registerCardHeader">Not an Admitted Student?</div>
            <div className="registerCardBody">
              No worries! Register through the links below based on which day
              you'd like to attend.
            </div>
            <div className="registerLinkGroup">
              <a
                className="registerLink registerLinkInperson"
                href="https://enroll.illinois.edu/register/?id=b6888ab6-8330-482b-9e95-4644377d94fc"
                target="_blank"
                rel="noopener noreferrer"
              >
                In-Person — April 18
              </a>
              <a
                className="registerLink registerLinkVirtual"
                href="https://enroll.illinois.edu/register/?id=531065e3-9f85-4c7b-b0d4-eb2b347f51d4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Virtual — April 19 
              </a>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="registerStep">
          <div className="registerStepHeader" style={{ backgroundColor: "#F15F23" }}>
            <span>STEP 2: REGISTER ON OUR SITE</span>
          </div>
          <p className="registerStepSubtext">CREATE AN ACCOUNT AND SIGN UP FOR CLASSES</p>

          <div className="registerCard">
            <div className="registerCardHeader">Create an Account</div>
            <div className="registerCardBody">
              If you haven't already, create an account on our website to get
              started.
            </div>
            <a className="registerLink" href="/signup">
              Create an Account
            </a>
          </div>

          <div className="registerCard">
            <div className="registerCardHeader">Register for Classes</div>
            <div className="registerCardBody">
              Once classes are available, head to our Classes page to choose
              which workshops and sessions you'd like to attend!
            </div>
            <a className="registerLink" href="/classes">
              Browse Classes
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Register;