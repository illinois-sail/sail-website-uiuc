import "./Classes.css";
import REGISTER_NOW_BUTTON from "../../assets/registernow.png";
import { Link } from "react-router-dom";
import ClassCard from "../Classes/ClassCard";

function Classes() {
  return (
    <div className="classes-page">
      <div className="opening-stack">
        <span className="event-date">Coming soon!</span>
        <Link to="/register">
          <img src={REGISTER_NOW_BUTTON} className="register-now-image" alt="Register Now" />
        </Link>
        <ClassCard />

      </div>

    </div>
  );
}

export default Classes;
