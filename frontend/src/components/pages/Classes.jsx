import "./Classes.css";
import REGISTER_NOW_BUTTON from "../../assets/registernow.png";

function Classes() {
  return (
    <div className="classes-page">
      <div className="opening-stack">
        <span className="event-date">Coming soon!</span>
        <a href="https://linktr.ee/cs_sail_2026" target="_blank" rel="noopener noreferrer">
          <img src={REGISTER_NOW_BUTTON} className="register-now-image" alt="Register Now" />
        </a>

      </div>

    </div>
  );
}

export default Classes;
