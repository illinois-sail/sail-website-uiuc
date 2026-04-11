import "./Classes.css";
import { useState, useEffect } from "react";
import ClassCard from "../Classes/ClassCard";
import { ReactComponent as TitleCloud } from "../../assets/classes/classes-title.svg";
import { ReactComponent as Impact } from "../../assets/classes/classes-impact.svg";
import {
  inPersonMorningClassesFirst,
  inPersonMorningClassesSecond,
  inPersonAfternoonClasses,
  virtualMorningClasses,
  virtualAfternoonClasses,
} from "./Classes.js";
import axios from "axios";
import SERVER_URL from "../server_url.js";

const initialAuthUser = JSON.parse(localStorage.getItem("authUser"));

function Classes() {
  const [currentDay, setCurrentDay] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [authUser, setAuthUser] = useState(initialAuthUser);
  const [isRegisteredForSection, setIsRegisteredForSection] = useState(false);

  const classMap = {
    0: {
      0: inPersonMorningClassesFirst,
      1: inPersonMorningClassesSecond,
      2: inPersonAfternoonClasses,
    },
    1: {
      0: virtualMorningClasses,
      1: virtualAfternoonClasses,
    },
  };

  const currClasses = classMap[currentDay][currentTime] || [];

  // scroll to Top (especially on reroute from Home - Explore more button)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Restore saved tab position after reload
  useEffect(() => {
    const savedDay = localStorage.getItem("savedDay");
    const savedTime = localStorage.getItem("savedTime");
    if (savedDay !== null) setCurrentDay(Number(savedDay));
    if (savedTime !== null) setCurrentTime(Number(savedTime));
    // Clear after restoring so it doesn't persist across fresh visits
    localStorage.removeItem("savedDay");
    localStorage.removeItem("savedTime");
  }, []);

  useEffect(() => {
    if (authUser) {
      axios.get(`${SERVER_URL}/get_classes/${authUser.email}`)
        .then((response) => {
          let isRegistered = false;
          for (let i = 0; i < currClasses.length; i++) {
            if (response.data.classes[currClasses[i].classIndex] === "1") {
              isRegistered = true;
              break;
            }
          }
          setIsRegisteredForSection(isRegistered);
        })
        .catch((error) => console.error(error));
    }
  }, [currentDay, currentTime, currClasses]);

  useEffect(() => {
    if (authUser) {
      localStorage.setItem("authUser", JSON.stringify(authUser));
    }
  }, [authUser]);

  function onRegisterClick(index) {
    localStorage.setItem("savedDay", currentDay);
    localStorage.setItem("savedTime", currentTime);
    axios.post(`${SERVER_URL}/registerForCourse`, { email: authUser.email, classIndex: index })
      .then((response) => {
        setIsRegisteredForSection(true);
        setAuthUser(response.data.authUser);
        alert("You have successfully REGISTERED for the class!");
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
        alert("There was an error registering for the class. Please try again later.");
        window.location.reload();
      });
  }

  function onUnregisterClick(index) {
    localStorage.setItem("savedDay", currentDay);
    localStorage.setItem("savedTime", currentTime);
    axios.post(`${SERVER_URL}/unregisterForCourse`, { email: authUser.email, classIndex: index })
      .then((response) => {
        setIsRegisteredForSection(false);
        setAuthUser(response.data.authUser);
        alert("You have successfully UNREGISTERED for the class!");
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
        alert("There was an error unregistering for the class. Please try again later.");
        window.location.reload();
      });
  }

  return (
    <div className="classes-page">
      <TitleCloud className="classesTitleCloud" />
      {/* Day 1 / Day 2 Headers */}
      <div className="classesHeaders classesDayHeaders">
        <span
          onClick={() => { if (currentDay === 1) { setCurrentDay(0); setCurrentTime(0); } }}
          className={currentDay === 0 ? "classesHeaderActive" : "classesHeaderInactive"}
        >
          DAY 1: IN-PERSON
        </span>
        <span
          onClick={() => { if (currentDay === 0) { setCurrentDay(1); setCurrentTime(0); } }}
          className={currentDay === 1 ? "classesHeaderActive" : "classesHeaderInactive"}
        >
          DAY 2: VIRTUAL
        </span>
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
        {currentDay === 0 && (
          <>
            <span onClick={() => setCurrentTime(0)} className={currentTime === 0 ? "classesHeaderActive" : "classesHeaderInactive"}>
              10:00AM - 10:50AM
            </span>
            <span onClick={() => setCurrentTime(1)} className={currentTime === 1 ? "classesHeaderActive" : "classesHeaderInactive"}>
              11:00AM - 11:50AM
            </span>
            <span onClick={() => setCurrentTime(2)} className={currentTime === 2 ? "classesHeaderActive" : "classesHeaderInactive"}>
              2:00PM - 2:50PM
            </span>
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
        {currentDay === 1 && (
          <>
            <span onClick={() => setCurrentTime(0)} className={currentTime === 0 ? "classesHeaderActive" : "classesHeaderInactive"}>
              12:30PM - 1:20PM
            </span>
            <span onClick={() => setCurrentTime(1)} className={currentTime === 1 ? "classesHeaderActive" : "classesHeaderInactive"}>
              1:30PM - 2:20PM
            </span>
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
        {currClasses.map((course) => (
          <ClassCard
            key={course.classIndex}
            className={course.className}
            capacity={course.capacity}
            room={course.room}
            time={course.time}
            description={course.description}
            index={course.classIndex}
            activated={!isRegisteredForSection || authUser?.classes?.[course.classIndex] === "1"}
            zoomLink={course.zoomLink}
            onRegisterClick={onRegisterClick}
            onUnregisterClick={onUnregisterClick}
          />
        ))}
      </div>
      <Impact
        width="5.2vw"
        style={{ position: "absolute", top: "18vw", left: "16vw", transform: "scale(-1, 1)" }}
      />
      <Impact
        width="5.2vw"
        style={{ position: "absolute", top: "18vw", left: "76.5vw" }}
      />
    </div>
  );
}

export default Classes;