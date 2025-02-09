import './ClassTest.css';
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ClassCard from "./ClassCard";
import axios from "axios";
import allClasses from "./Classes";
import SERVER_URL from "./server_url";
import classScheduleTitle from '../assets/titles/class-schedule-title.png';
import titleshootingstars from '../assets/title-shooting-stars.png';

const Tabs = ({ children }) => <div>{children}</div>;
const TabsList = ({ children }) => <div className="tabs-list">{children}</div>;
const TabsTrigger = ({ children, value, onClick, isActive }) => (
  <button 
    onClick={() => onClick(value)} 
    className={`tab-trigger ${isActive ? 'active' : ''}`}
  >
    {children}
  </button>
);
const TabsContent = ({ children }) => <div>{children}</div>;
const Button = ({ children, onClick, className }) => (
  <button onClick={onClick} className={className}>{children}</button>
);

const SESSIONS_DATA = {
  day1: allClasses.filter(classItem => classItem.room !== "virtual"),
  day2: allClasses.filter(classItem => classItem.room === "virtual"),
};

const ClassSchedule = () => {
  const [selectedDay, setSelectedDay] = useState("day1");
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDayChange = (day) => {
    setSelectedDay(day);
    setSelectedTime(null); // Reset selected time when switching days
  };

  const currentSessions = SESSIONS_DATA[selectedDay];
  const filteredSessions = selectedTime
    ? currentSessions.filter((session) => session.time.split("-")[0] === selectedTime)
    : currentSessions;

  const uniqueTimes = Array.from(new Set(currentSessions.map((session) => session.time.split("-")[0])));

  return (
    <div className="homepage-about">
      <div className='container-about'>
        <div className='title-about'>
          <img
            className="corner-image-about"
            src={titleshootingstars} 
            alt="Corner Decoration"
          />
          <img
            className="title-image-about"
            src={classScheduleTitle}
            alt="Class Schedule Title"
          />
        </div>
      </div>

      <div className="class-schedule-container">
        <Tabs>
          <TabsList>
            <TabsTrigger value="day1" onClick={() => handleDayChange("day1")} isActive={selectedDay === "day1"}>
              DAY 1 - In Person
            </TabsTrigger>
            <TabsTrigger value="day2" onClick={() => handleDayChange("day2")} isActive={selectedDay === "day2"}>
              DAY 2 - Virtual
            </TabsTrigger>
          </TabsList>

          <TabsContent key={selectedDay}>
            <div className="time-filters">
              {uniqueTimes.map((time) => (
                <Button
                  key={time}
                  onClick={() => setSelectedTime(selectedTime === time ? null : time)}
                  className={`time-button ${selectedTime === time ? 'active' : ''}`}
                >
                  {time}
                </Button>
              ))}
            </div>

            <div className="classes-grid">
              {filteredSessions.map((session) => (
                <ClassCard
                  key={session.classIndex}
                  className={session.className}
                  capacity={session.capacity}
                  room={session.room}
                  time={session.time}
                  description={session.description}
                  classIndex={session.classIndex}
                  zoomLink={session.zoomLink}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ClassSchedule;
