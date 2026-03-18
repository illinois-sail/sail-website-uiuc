import "./Home.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import CS_SAIL_IMAGE from "../../assets/cssail.png";
import REGISTER_NOW_BUTTON from "../../assets/registernow.png";
import CARTOON_FRAME from "../../assets/cartoon-frame.png";
import CORN from "../../assets/corn.png";
import ELLIPSE from "../../assets/ellipse.png";
import SS_ICON_1 from "../../assets/ss-icon1.png";
import SS_ICON_2 from "../../assets/ss-icon2.png";
import SS_ICON_3 from "../../assets/ss-icon3.png";
import SS_ICON_4 from "../../assets/ss-icon4.png";
import SS_ICON_5 from "../../assets/ss-icon5.png";
import SS_ICON_6 from "../../assets/ss-icon6.png";
import SS_ICON_7 from "../../assets/ss-icon7.png";
import SS_ICON_8 from "../../assets/ss-icon8.png";


import Collage from "../Collage/Collage";
import image1 from "../../assets/images/collage-1.jpg";
import image2 from "../../assets/images/collage-2.jpg";
import image3 from "../../assets/images/collage-3.jpg";
import image4 from "../../assets/images/collage-4.jpg";
import image5 from "../../assets/images/collage-5.png";
import image6 from "../../assets/images/gal1.jpg";
import image7 from "../../assets/images/gal2.jpg";
import image8 from "../../assets/images/gal3.jpg";
import image9 from "../../assets/images/gal4.jpg";
import image10 from "../../assets/images/gal5.jpg";
import image11 from "../../assets/images/gal6.jpg";


function Home() {
  const [activeSchedule, setActiveSchedule] = useState("day1")

  return (
    <div className="home-page">
      {/* temp navbar */} 
      <div className="temp-navbar"> 
        Get ready for a new season of sail! 
      </div>

      <div className="opening-stack">
        <img src={CS_SAIL_IMAGE} className="cs-sail-image" />
        <span className="event-date">April 18 and 19, 2026</span>
        <Link to="/register">
          <img src={REGISTER_NOW_BUTTON} className="register-now-image" alt="Register Now" />
        </Link>

      </div>
      <div className="ch-one-block">
        <span className="ch-heading-text">Chapter 1: Introduction</span>
        {/* <img src={CARTOON_FRAME} className="cartoon-frame-image" /> */}
        <div className="character-stats-row">
          <div className="character-stats-box">
            <img src={CORN} className="corn-ch-one-image" />
            <div className="ellipse-wrapper">
              <img src={ELLIPSE} className="ellipse-ch-one-image" />
              <span className="ellipse-text">Welcome heroes. My name is captain Cornelius, and i will be your helpful guide today!</span>
            </div>
            <div className="character-stats-wrapper">
              <span className="character-stats-header">CHARACTER STATS</span>
              <span className="character-stats-text">Backstory: UIUC CS student from 1972 who stumbled upon an Agriculture x Engineering project gone wrong...Powers: Infinite knowledge of UIUC Grainger Etc.</span>
              {/* Will reformat the above line when finalized */}
            </div>
          </div>
        </div>
      </div>

      <div className="ch-two-block">
        <span className="ch-heading-text">Chapter 2: Schedule</span>
        <div className="schedule-note-wrapper">
          <div className="schedule-note-row">
            <div className="schedule-note-box">
              <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 16V12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 8H12.01" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <span className="schedule-note-text">Note: This is a sample schedule! When you register, you'll get to choose which classes you want to attend</span>
            </div>
          </div>
          <img src={CORN} className="corn-ch-two-image" />
          <div className="ellipse-wrapper-2">
            <img src={ELLIPSE} className="ellipse-ch-two-image" />
            <span className="ellipse-text-2">I bet you’re wondering what the event is gonna be like. Let’s explore the two!</span>
          </div>
        </div>
        <div className="schedule-options-row">
          <div
            className={activeSchedule === "day1" ? "schedule-option-active" : "schedule-option-disabled"}
            onClick={() => setActiveSchedule("day1")}
            style={{ cursor: "pointer" }}
          >
            <span className="options-text">DAY 1 - IN-PERSON</span>
          </div>
          <div
            className={activeSchedule === "day2" ? "schedule-option-active" : "schedule-option-disabled"}
            onClick={() => setActiveSchedule("day2")}
            style={{ cursor: "pointer" }}
          >
            <span className="options-text">DAY 2 - VIRTUAL</span>
          </div>
        </div>

        {activeSchedule === "day1" && (
          <div className="sample-schedule-container">
            <div className="sample-schedule">
              <div className="sample-schedule-event">
                <img src={SS_ICON_1} />
                <div className="sample-schedule-info">
                  <div className="time-block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <g clip-path="url(#clip0_1336_19939)">
                        <path d="M6 3V6L8 7" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_1336_19939">
                          <rect width="12" height="12" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                    <span className="time-text">9:00 AM</span>
                  </div>
                  <span className="event-title">Check-In & Breakfast</span>
                  <div className="location-block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M10 5C10 7.4965 7.2305 10.0965 6.3005 10.8995C6.21386 10.9646 6.1084 10.9999 6 10.9999C5.8916 10.9999 5.78614 10.9646 5.6995 10.8995C4.7695 10.0965 2 7.4965 2 5C2 3.93913 2.42143 2.92172 3.17157 2.17157C3.92172 1.42143 4.93913 1 6 1C7.06087 1 8.07828 1.42143 8.82843 2.17157C9.57857 2.92172 10 3.93913 10 5Z" stroke="#4A5565" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M6 6.5C6.82843 6.5 7.5 5.82843 7.5 5C7.5 4.17157 6.82843 3.5 6 3.5C5.17157 3.5 4.5 4.17157 4.5 5C4.5 5.82843 5.17157 6.5 6 6.5Z" stroke="#4A5565" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span className="location-text">Siebel Center Atrium</span>
                  </div>
                </div>
              </div>

              <div className="sample-schedule-event">
                <img src={SS_ICON_2} />
                <div className="sample-schedule-info">
                  <div className="time-block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <g clip-path="url(#clip0_1336_19939)">
                        <path d="M6 3V6L8 7" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_1336_19939">
                          <rect width="12" height="12" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                    <span className="time-text">9:30 AM</span>
                  </div>
                  <span className="event-title">Opening Ceremony</span>
                  <div className="location-block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M10 5C10 7.4965 7.2305 10.0965 6.3005 10.8995C6.21386 10.9646 6.1084 10.9999 6 10.9999C5.8916 10.9999 5.78614 10.9646 5.6995 10.8995C4.7695 10.0965 2 7.4965 2 5C2 3.93913 2.42143 2.92172 3.17157 2.17157C3.92172 1.42143 4.93913 1 6 1C7.06087 1 8.07828 1.42143 8.82843 2.17157C9.57857 2.92172 10 3.93913 10 5Z" stroke="#4A5565" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M6 6.5C6.82843 6.5 7.5 5.82843 7.5 5C7.5 4.17157 6.82843 3.5 6 3.5C5.17157 3.5 4.5 4.17157 4.5 5C4.5 5.82843 5.17157 6.5 6 6.5Z" stroke="#4A5565" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span className="location-text">CIF</span>
                  </div>
                </div>
              </div>

              <div className="sample-schedule-event-alt">
                <img src={SS_ICON_3} />
                <div className="sample-schedule-info">
                  <div className="time-block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <g clip-path="url(#clip0_1336_19939)">
                        <path d="M6 3V6L8 7" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_1336_19939">
                          <rect width="12" height="12" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                    <span className="time-text">10:00 AM</span>
                  </div>
                  <span className="event-title">Class #1</span>
                  <div className="location-block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M10 5C10 7.4965 7.2305 10.0965 6.3005 10.8995C6.21386 10.9646 6.1084 10.9999 6 10.9999C5.8916 10.9999 5.78614 10.9646 5.6995 10.8995C4.7695 10.0965 2 7.4965 2 5C2 3.93913 2.42143 2.92172 3.17157 2.17157C3.92172 1.42143 4.93913 1 6 1C7.06087 1 8.07828 1.42143 8.82843 2.17157C9.57857 2.92172 10 3.93913 10 5Z" stroke="#4A5565" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M6 6.5C6.82843 6.5 7.5 5.82843 7.5 5C7.5 4.17157 6.82843 3.5 6 3.5C5.17157 3.5 4.5 4.17157 4.5 5C4.5 5.82843 5.17157 6.5 6 6.5Z" stroke="#4A5565" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span className="location-text">Siebel Center</span>
                  </div>
                </div>
                <div className="you-choose-block">
                  <span className="you-choose-text">YOU CHOOSE!</span>
                </div>
              </div>

              <div className="sample-schedule-event-alt">
                <img src={SS_ICON_3} />
                <div className="sample-schedule-info">
                  <div className="time-block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <g clip-path="url(#clip0_1336_19939)">
                        <path d="M6 3V6L8 7" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_1336_19939">
                          <rect width="12" height="12" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                    <span className="time-text">11:00 AM</span>
                  </div>
                  <span className="event-title">Class #2</span>
                  <div className="location-block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M10 5C10 7.4965 7.2305 10.0965 6.3005 10.8995C6.21386 10.9646 6.1084 10.9999 6 10.9999C5.8916 10.9999 5.78614 10.9646 5.6995 10.8995C4.7695 10.0965 2 7.4965 2 5C2 3.93913 2.42143 2.92172 3.17157 2.17157C3.92172 1.42143 4.93913 1 6 1C7.06087 1 8.07828 1.42143 8.82843 2.17157C9.57857 2.92172 10 3.93913 10 5Z" stroke="#4A5565" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M6 6.5C6.82843 6.5 7.5 5.82843 7.5 5C7.5 4.17157 6.82843 3.5 6 3.5C5.17157 3.5 4.5 4.17157 4.5 5C4.5 5.82843 5.17157 6.5 6 6.5Z" stroke="#4A5565" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span className="location-text">Siebel Center</span>
                  </div>
                </div>
                <div className="you-choose-block">
                  <span className="you-choose-text">YOU CHOOSE!</span>
                </div>
              </div>

              <div className="sample-schedule-event">
                <img src={SS_ICON_4} />
                <div className="sample-schedule-info">
                  <div className="time-block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <g clip-path="url(#clip0_1336_19939)">
                        <path d="M6 3V6L8 7" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_1336_19939">
                          <rect width="12" height="12" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                    <span className="time-text">12:00 PM</span>
                  </div>
                  <span className="event-title">Lunch & Q&A Panel (Split Groups)</span>
                  <div className="location-block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M10 5C10 7.4965 7.2305 10.0965 6.3005 10.8995C6.21386 10.9646 6.1084 10.9999 6 10.9999C5.8916 10.9999 5.78614 10.9646 5.6995 10.8995C4.7695 10.0965 2 7.4965 2 5C2 3.93913 2.42143 2.92172 3.17157 2.17157C3.92172 1.42143 4.93913 1 6 1C7.06087 1 8.07828 1.42143 8.82843 2.17157C9.57857 2.92172 10 3.93913 10 5Z" stroke="#4A5565" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M6 6.5C6.82843 6.5 7.5 5.82843 7.5 5C7.5 4.17157 6.82843 3.5 6 3.5C5.17157 3.5 4.5 4.17157 4.5 5C4.5 5.82843 5.17157 6.5 6 6.5Z" stroke="#4A5565" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span className="location-text">Siebel Center</span>
                  </div>
                  <div className="lunch-group-options-row">
                    <div className="lunch-group">
                      <span className="group-text">GROUP A: Lunch</span>
                    </div>
                    <div className="panel-group">
                      <span className="group-text">GROUP b: Q&A PANEL WITH cs students</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sample-schedule-event">
                <img src={SS_ICON_5} />
                <div className="sample-schedule-info">
                  <div className="time-block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <g clip-path="url(#clip0_1336_19939)">
                        <path d="M6 3V6L8 7" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_1336_19939">
                          <rect width="12" height="12" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                    <span className="time-text">1:00 PM</span>
                  </div>
                  <span className="event-title">Lunch & Q&A Panel (Split Groups)</span>
                  <div className="location-block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M10 5C10 7.4965 7.2305 10.0965 6.3005 10.8995C6.21386 10.9646 6.1084 10.9999 6 10.9999C5.8916 10.9999 5.78614 10.9646 5.6995 10.8995C4.7695 10.0965 2 7.4965 2 5C2 3.93913 2.42143 2.92172 3.17157 2.17157C3.92172 1.42143 4.93913 1 6 1C7.06087 1 8.07828 1.42143 8.82843 2.17157C9.57857 2.92172 10 3.93913 10 5Z" stroke="#4A5565" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M6 6.5C6.82843 6.5 7.5 5.82843 7.5 5C7.5 4.17157 6.82843 3.5 6 3.5C5.17157 3.5 4.5 4.17157 4.5 5C4.5 5.82843 5.17157 6.5 6 6.5Z" stroke="#4A5565" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span className="location-text">Siebel Center</span>
                  </div>
                  <div className="lunch-group-options-row">
                    <div className="panel-group">
                      <span className="group-text">GROUP A: Q&A PANEL WITH cs students</span>
                    </div>
                    <div className="lunch-group">
                      <span className="group-text">GROUP B: Lunch</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sample-schedule-event-alt">
                <img src={SS_ICON_3} />
                <div className="sample-schedule-info">
                  <div className="time-block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <g clip-path="url(#clip0_1336_19939)">
                        <path d="M6 3V6L8 7" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_1336_19939">
                          <rect width="12" height="12" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                    <span className="time-text">2:00 PM</span>
                  </div>
                  <span className="event-title">Class #3</span>
                  <div className="location-block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M10 5C10 7.4965 7.2305 10.0965 6.3005 10.8995C6.21386 10.9646 6.1084 10.9999 6 10.9999C5.8916 10.9999 5.78614 10.9646 5.6995 10.8995C4.7695 10.0965 2 7.4965 2 5C2 3.93913 2.42143 2.92172 3.17157 2.17157C3.92172 1.42143 4.93913 1 6 1C7.06087 1 8.07828 1.42143 8.82843 2.17157C9.57857 2.92172 10 3.93913 10 5Z" stroke="#4A5565" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M6 6.5C6.82843 6.5 7.5 5.82843 7.5 5C7.5 4.17157 6.82843 3.5 6 3.5C5.17157 3.5 4.5 4.17157 4.5 5C4.5 5.82843 5.17157 6.5 6 6.5Z" stroke="#4A5565" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span className="location-text">Siebel Center</span>
                  </div>
                </div>
                <div className="you-choose-block">
                  <span className="you-choose-text">YOU CHOOSE!</span>
                </div>
              </div>

              <div className="sample-schedule-event">
                <img src={SS_ICON_6} />
                <div className="sample-schedule-info">
                  <div className="time-block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <g clip-path="url(#clip0_1336_19939)">
                        <path d="M6 3V6L8 7" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_1336_19939">
                          <rect width="12" height="12" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                    <span className="time-text">3:00 PM</span>
                  </div>
                  <span className="event-title">Scavenger Hunt</span>
                  <div className="location-block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M10 5C10 7.4965 7.2305 10.0965 6.3005 10.8995C6.21386 10.9646 6.1084 10.9999 6 10.9999C5.8916 10.9999 5.78614 10.9646 5.6995 10.8995C4.7695 10.0965 2 7.4965 2 5C2 3.93913 2.42143 2.92172 3.17157 2.17157C3.92172 1.42143 4.93913 1 6 1C7.06087 1 8.07828 1.42143 8.82843 2.17157C9.57857 2.92172 10 3.93913 10 5Z" stroke="#4A5565" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M6 6.5C6.82843 6.5 7.5 5.82843 7.5 5C7.5 4.17157 6.82843 3.5 6 3.5C5.17157 3.5 4.5 4.17157 4.5 5C4.5 5.82843 5.17157 6.5 6 6.5Z" stroke="#4A5565" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span className="location-text">Campus Wide</span>
                  </div>
                </div>
              </div>

              <div className="sample-schedule-event">
                <img src={SS_ICON_7} />
                <div className="sample-schedule-info">
                  <div className="time-block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <g clip-path="url(#clip0_1336_19939)">
                        <path d="M6 3V6L8 7" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_1336_19939">
                          <rect width="12" height="12" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                    <span className="time-text">4:00 PM</span>
                  </div>
                  <span className="event-title">Professor Wade Talk</span>
                  <div className="location-block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M10 5C10 7.4965 7.2305 10.0965 6.3005 10.8995C6.21386 10.9646 6.1084 10.9999 6 10.9999C5.8916 10.9999 5.78614 10.9646 5.6995 10.8995C4.7695 10.0965 2 7.4965 2 5C2 3.93913 2.42143 2.92172 3.17157 2.17157C3.92172 1.42143 4.93913 1 6 1C7.06087 1 8.07828 1.42143 8.82843 2.17157C9.57857 2.92172 10 3.93913 10 5Z" stroke="#4A5565" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M6 6.5C6.82843 6.5 7.5 5.82843 7.5 5C7.5 4.17157 6.82843 3.5 6 3.5C5.17157 3.5 4.5 4.17157 4.5 5C4.5 5.82843 5.17157 6.5 6 6.5Z" stroke="#4A5565" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span className="location-text">CIF</span>
                  </div>
                </div>
              </div>

              <div className="sample-schedule-event">
                <img src={SS_ICON_8} />
                <div className="sample-schedule-info">
                  <div className="time-block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <g clip-path="url(#clip0_1336_19939)">
                        <path d="M6 3V6L8 7" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_1336_19939">
                          <rect width="12" height="12" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                    <span className="time-text">5:00 PM</span>
                  </div>
                  <span className="event-title">Closing Ceremony</span>
                  <div className="location-block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M10 5C10 7.4965 7.2305 10.0965 6.3005 10.8995C6.21386 10.9646 6.1084 10.9999 6 10.9999C5.8916 10.9999 5.78614 10.9646 5.6995 10.8995C4.7695 10.0965 2 7.4965 2 5C2 3.93913 2.42143 2.92172 3.17157 2.17157C3.92172 1.42143 4.93913 1 6 1C7.06087 1 8.07828 1.42143 8.82843 2.17157C9.57857 2.92172 10 3.93913 10 5Z" stroke="#4A5565" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M6 6.5C6.82843 6.5 7.5 5.82843 7.5 5C7.5 4.17157 6.82843 3.5 6 3.5C5.17157 3.5 4.5 4.17157 4.5 5C4.5 5.82843 5.17157 6.5 6 6.5Z" stroke="#4A5565" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span className="location-text">Siebel Center</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSchedule === "day2" && (
          <div className="sample-schedule-container">
            <div className="sample-schedule">

              <div className="sample-schedule-event">
                <img src={SS_ICON_2} alt="" />
                <div className="sample-schedule-info">
                  <div className="time-block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none"><g clipPath="url(#clip0)"><path d="M6 3V6L8 7" stroke="white" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/></g></svg>
                    <span className="time-text">12:00 PM</span>
                  </div>
                  <span className="event-title">Opening Ceremony</span>
                  <div className="location-block">
                    <span className="location-text">Zoom</span>
                  </div>
                </div>
              </div>

              <div className="sample-schedule-event-alt">
                <img src={SS_ICON_3} alt="" />
                <div className="sample-schedule-info">
                  <div className="time-block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none"><g clipPath="url(#clip0)"><path d="M6 3V6L8 7" stroke="white" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/></g></svg>
                    <span className="time-text">12:30 PM</span>
                  </div>
                  <span className="event-title">Class #1</span>
                  <div className="location-block">
                    <span className="location-text">Zoom</span>
                  </div>
                </div>
                <div className="you-choose-block"><span className="you-choose-text">YOU CHOOSE!</span></div>
              </div>

              <div className="sample-schedule-event">
                <img src={SS_ICON_1} alt="" />
                <div className="sample-schedule-info">
                  <div className="time-block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none"><g clipPath="url(#clip0)"><path d="M6 3V6L8 7" stroke="white" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/></g></svg>
                    <span className="time-text">1:20 PM</span>
                  </div>
                  <span className="event-title">Break</span>
                  <div className="location-block">
                    <span className="location-text">—</span>
                  </div>
                </div>
              </div>

              <div className="sample-schedule-event-alt">
                <img src={SS_ICON_3} alt="" />
                <div className="sample-schedule-info">
                  <div className="time-block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none"><g clipPath="url(#clip0)"><path d="M6 3V6L8 7" stroke="white" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/></g></svg>
                    <span className="time-text">1:30 PM</span>
                  </div>
                  <span className="event-title">Class #2</span>
                  <div className="location-block">
                    <span className="location-text">Zoom</span>
                  </div>
                </div>
                <div className="you-choose-block"><span className="you-choose-text">YOU CHOOSE!</span></div>
              </div>

              <div className="sample-schedule-event">
                <img src={SS_ICON_1} alt="" />
                <div className="sample-schedule-info">
                  <div className="time-block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none"><g clipPath="url(#clip0)"><path d="M6 3V6L8 7" stroke="white" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/></g></svg>
                    <span className="time-text">2:20 PM</span>
                  </div>
                  <span className="event-title">Break</span>
                  <div className="location-block">
                    <span className="location-text">—</span>
                  </div>
                </div>
              </div>

              <div className="sample-schedule-event">
                <img src={SS_ICON_7} alt="" />
                <div className="sample-schedule-info">
                  <div className="time-block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none"><g clipPath="url(#clip0)"><path d="M6 3V6L8 7" stroke="white" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/></g></svg>
                    <span className="time-text">2:30 PM</span>
                  </div>
                  <span className="event-title">Professor Talk – Geoffrey Challen</span>
                  <div className="location-block">
                    <span className="location-text">Zoom — Introduction to CS 124</span>
                  </div>
                </div>
              </div>

              <div className="sample-schedule-event">
                <img src={SS_ICON_6} alt="" />
                <div className="sample-schedule-info">
                  <div className="time-block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none"><g clipPath="url(#clip0)"><path d="M6 3V6L8 7" stroke="white" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/></g></svg>
                    <span className="time-text">3:00 PM</span>
                  </div>
                  <span className="event-title">Pathways in CS Panel + Q&A</span>
                  <div className="location-block">
                    <span className="location-text">Zoom — CS and CS + X</span>
                  </div>
                </div>
              </div>

              <div className="sample-schedule-event">
                <img src={SS_ICON_8} alt="" />
                <div className="sample-schedule-info">
                  <div className="time-block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none"><g clipPath="url(#clip0)"><path d="M6 3V6L8 7" stroke="white" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/></g></svg>
                    <span className="time-text">4:00 PM</span>
                  </div>
                  <span className="event-title">Closing Ceremony</span>
                  <div className="location-block">
                    <span className="location-text">Zoom</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}
      </div>

      <div className="ch-three-block">
        <span className="ch-heading-text">Chapter 3: Classes</span>
        <div className="adventure-wrapper">
          <div className="adventure-box">
            <div className="adventure-header">
              <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M16 29.3332C23.3638 29.3332 29.3333 23.3636 29.3333 15.9998C29.3333 8.63604 23.3638 2.6665 16 2.6665C8.63621 2.6665 2.66667 8.63604 2.66667 15.9998C2.66667 23.3636 8.63621 29.3332 16 29.3332Z" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M16 10.6665V15.9998" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M16 21.3335H16.0133" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <span className="adventure-title">CHOOSE YOUR OWN ADVENTURE!</span>
            </div>
            <div className="adventure-text">
              During registration, you'll get to select which workshops and classes YOU want to attend! Below are just some sample options to give you a taste of what's available at UIUC.
            </div>
          </div>
          <img src={CORN} className="corn-ch-three-image" />
        </div>
        {/* Note: the below is temporary until classes are finalized */}
        <div className="temp-container">
          <span className="temp">CLASSES COMING SOON!</span>
        </div>
        {/* end temporary block */}
      </div>

      <div className="ch-four-block">
        <span className="ch-heading-text">Chapter 4: ACTION SHOTS</span>
        <div className="ch-four-info">
          <span className="ch-four-text">See heroes in action! Check out moments from previous SAIL adventures.</span>
          <img src={CORN} className="corn-ch-four-image" />
          <div className="ellipse-wrapper-4">
            <img src={ELLIPSE} className="ellipse-ch-four-image" />
            <span className="ellipse-text-4">Welcome to Our CS Sail gallery! Create your own hero story at Illinois!</span>
          </div>
        </div>
        <div className="collage">
          <Collage images={[image1, image2, image3, image4, image5, image6, image7, image8, image9, image10]} />
        </div>
      </div>

      

    </div>
  );
}

export default Home;
