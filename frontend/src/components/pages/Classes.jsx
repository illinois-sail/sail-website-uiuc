import "./Classes.css";
import { ReactComponent as TitleCloud } from "../../assets/classes/classes-title.svg";
import { useState } from "react";

function Classes() {
  const [currentDay, setCurrentDay] = useState(2); //1, 2
  const [currentTime, setCurrentTime] = useState(10); //10, 11, 14

  return (
    <div className="classes-page">
      <TitleCloud className="classesTitleCloud" />
      <div className="classesDayHeaders">
        <span
          onClick={() => setCurrentDay(1)}
          className={
            currentDay === 1
              ? "classesDayHeaderActive"
              : "classesDayHeaderInactive"
          }
        >
          DAY 1: IN-PERSON
        </span>
        <span
          onClick={() => setCurrentDay(2)}
          className={
            currentDay === 2
              ? "classesDayHeaderActive"
              : "classesDayHeaderInactive"
          }
        >
          DAY 2: VIRTUAL
        </span>
        <span
          className={
            currentDay === 1
              ? "classesDayUnderline classesDayUnderlineLeft"
              : "classesDayUnderline classesDayUnderlineRight"
          }
        ></span>
      </div>
    </div>
  );
}

export default Classes;
