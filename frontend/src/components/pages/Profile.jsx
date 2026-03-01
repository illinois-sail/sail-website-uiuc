import React, { useState, useEffect } from "react";
import axios from "axios";
import SIEBEL_LOC from "../../assets/siebel_loc.png";
import "./Profile.css";

const BusInformation = () => {
  return (
    <div className="bus-information" style={{
      display: "flex",
      marginTop: "5vw", // NOT FINAL
      marginLeft: "7vw",
      width: "83vw",
      height: "44vw",
      border: "0.26vw solid #000",
      background: "#FFF"
    }}>
      <div className="notice-block" style={{ display: "flex", width: "17vw", height: "44vw", background: "#000", alignItems: "center" }}>
        <span className="notice-text">Notice</span>
      </div>
      <div className="bus-info-body" style={{ display: "flex", width: "66vw", height: "44vw", background: "#FFF" }}>
        <div className="bus-info-header" style={{ marginTop: "3vw", marginLeft: "3vw" }}>
          <span className="profile-title">Bus Information</span>
          <div className="title-underline" />
          <span className="profile-text">
              <br/>Buses ARE FREE! You do not have to buy a ticket or pay for them.<br/><br/>
              There are buses to take you to the Siebel Center for CS and back. Please arrive 15 minutes before the bus is set to depart.
          </span>
          <span className="profile-text"><br/><br/><br/>Morning Bus</span>
          <span className="profile-text" style={{ marginLeft: "3vw", display: "block", width: "58vw" }}>
            <br/>Union Station, Chicago (225 S Canal St, Chicago, IL 60606)<br/>
            Depart Union Station @ 5:55 AM<br/>
            Arrive at Siebel Center for CS @ 8:00 AM<br/>
          </span>
          <span className="profile-text">Evening Bus</span>
          <span className="profile-text" style={{ marginLeft: "3vw", display: "block", width: "58vw" }}>
            <br/>Union Station, Chicago (225 S Canal St, Chicago, IL 60606)<br/>
            Depart Siebel Center for CS @ 6:15 PM<br/>
            Arrive at Union Station @ 8:30 PM
          </span>
        </div>
      </div>
    </div>
  );
}

const MapLocation = () => {
  return (
    <div className="location-map">
      <a href="https://www.google.com/maps/place/Thomas+M.+Siebel+Center+for+Computer+Science/@40.1138069,-88.2274801,16z/data=!3m2!4b1!5s0x880cd76a5762dfb7:0xcf6a023935717398!4m6!3m5!1s0x880cd76baa8479a9:0x4e9f01d40d359630!8m2!3d40.1138028!4d-88.2249052!16s%2Fm%2F0yqkg1s?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D" 
         target="_blank" 
         rel="noopener noreferrer">
        <img src={SIEBEL_LOC} className="siebel-loc-image" alt="Siebel CS Location" />
      </a>
    </div>
  );
}

function getClasses(bitsequence, classes) {
  let classesTaking = [];
  for (let i = 0; i < Math.min(bitsequence.length, classes.length); i++) {
    if (bitsequence[i] === "1") {
      // find the class and add to classesTaking
      for (let j = 0; j < classes.length; j++) {
        if (classes[j].classIndex === i) {
          classesTaking.push(classes[j]);
          break;
        }
      }
    }
  }
  return classesTaking;
}

const ClassesDisplay = () => {
  return (
    <div className="classes-svg-wrapper" style={{ position: "relative", width: "53vw" }}>
      <svg className="classes-svg" xmlns="http://www.w3.org/2000/svg" width="814" height="309" viewBox="0 0 820 309">
        <path d="M2 2H816L671.825 307H2V2Z" fill="#FFF" stroke="black" strokeWidth="4" />
      </svg>
      <div className="svg-content" style={{ position: "absolute", top: "12%", left: "4%" }}>
        <span className="profile-title">Classes</span>
        <div className="title-underline" />
        <span className="profile-text"><br/>COMING SOON!</span>
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div>
      COMING SOON!
      {/* <ClassesDisplay/> */}
      {/* <MapLocation/> */}
      {/* <BusInformation/> */}
    </div>
  );
}

export default Profile;
