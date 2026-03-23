import "./Classes.css";
import { useState } from "react";
import ClassCard from "../Classes/ClassCard";
import { ReactComponent as TitleCloud } from "../../assets/classes/classes-title.svg";
import { ReactComponent as Impact } from "../../assets/classes/classes-impact.svg";

const dummyClasses = [
  { data: "1" },
  { data: "2" },
  { data: "3" },
  { data: "4" },
  { data: "5" },
  { data: "6" },
  { data: "7" },
  { data: "8" },
  { data: "9" },
  { data: "10" },
  { data: "11" },
  { data: "12" },
  { data: "13" },
  { data: "14" },
  { data: "15" },
  { data: "16" },
  { data: "17" },
  { data: "18" },
  { data: "19" },
  { data: "20" },
];

function Classes() {
  const [currentDay, setCurrentDay] = useState(0); //0, 1
  const [currentTime, setCurrentTime] = useState(0); //0, 1, 2

  const currClasses = dummyClasses;

  return (
    <div className="classes-page">
      <TitleCloud className="classesTitleCloud" />
      {/* Day 1 / Day 2 Headers */}
      <div className="classesHeaders classesDayHeaders">
        {/* Day 1 Header */}
        <span
          onClick={() => {
            if (currentDay === 1) {
              setCurrentDay(0);
              setCurrentTime(0);
            }
          }}
          className={
            currentDay === 0 ? "classesHeaderActive" : "classesHeaderInactive"
          }
        >
          DAY 1: IN-PERSON
        </span>
        {/* Day 2 Header */}
        <span
          onClick={() => {
            if (currentDay === 0) {
              setCurrentDay(1);
              setCurrentTime(0);
            }
          }}
          className={
            currentDay === 1 ? "classesHeaderActive" : "classesHeaderInactive"
          }
        >
          DAY 2: VIRTUAL
        </span>
        {/* Underline for Day 1 / Day 2 Header */}
        <span
          className={
            currentDay === 0
              ? "classesDayUnderline classesDayUnderlineLeft"
              : "classesDayUnderline classesDayUnderlineRight"
          }
        ></span>
      </div>
      {/* Times Headers */}
      <div className="classesHeaders classesTimeHeaders">
        {/* Day 1 Headers */}
        {currentDay === 0 && (
          <>
            {/* Time 1 Header */}
            <span
              onClick={() => setCurrentTime(0)}
              className={
                currentTime === 0
                  ? "classesHeaderActive"
                  : "classesHeaderInactive"
              }
            >
              10:00AM - 10:50AM
            </span>
            {/* Time 2 Header */}
            <span
              onClick={() => setCurrentTime(1)}
              className={
                currentTime === 1
                  ? "classesHeaderActive"
                  : "classesHeaderInactive"
              }
            >
              11:00AM - 11:50PM
            </span>
            {/* Time 3 Header */}
            <span
              onClick={() => setCurrentTime(2)}
              className={
                currentTime === 2
                  ? "classesHeaderActive"
                  : "classesHeaderInactive"
              }
            >
              2:00PM - 2:50PM
            </span>
            {/* Underline for Day 1 Times Headers */}
            <span
              className={
                currentTime === 0
                  ? "classesTimeUnderline classesTimeUnderline1"
                  : currentTime === 1
                    ? "classesTimeUnderline classesTimeUnderline2"
                    : "classesTimeUnderline classesTimeUnderline3"
              }
            />
          </>
        )}
        {/* Day 2 Headers */}
        {currentDay === 1 && (
          <>
            {/* Time 1 Header */}
            <span
              onClick={() => setCurrentTime(0)}
              className={
                currentTime === 0
                  ? "classesHeaderActive"
                  : "classesHeaderInactive"
              }
            >
              12:30pm - 1:20pm
            </span>
            {/* Time 2 Header */}
            <span
              onClick={() => setCurrentTime(1)}
              className={
                currentTime === 1
                  ? "classesHeaderActive"
                  : "classesHeaderInactive"
              }
            >
              1:30PM - 2:20PM
            </span>
            {/* Unerline for Day 2 Times Headers  */}
            <span
              className={
                currentTime === 0
                  ? "classesTimeUnderline classesTimeUnderline4"
                  : "classesTimeUnderline classesTimeUnderline5"
              }
            />
          </>
        )}
      </div>
      {/* Mapped classes */}
      <div className="classesCards">
        {currClasses.map((item, index) => (
          <ClassCard key={index} text={item.data} />
        ))}
      </div>
      <Impact
        width="5.2vw"
        style={{
          position: "absolute",
          top: "18vw",
          left: "16vw",
          transform: "scale(-1, 1)",
        }}
      />
      <Impact
        width="5.2vw"
        style={{
          position: "absolute",
          top: "18vw",
          left: "76.5vw",
        }}
      />
    </div>
  );
}

export default Classes;
