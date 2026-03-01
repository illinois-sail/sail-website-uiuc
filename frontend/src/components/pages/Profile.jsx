import React, { useState, useEffect } from "react";
import axios from "axios";
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
      <div className="bus-info-body">
        <div className="bus-info-header" style={{ marginTop: "3vw", marginLeft: "3vw" }}>
          <span className="bus-info-title">Bus Information</span>
        </div>
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div>
      <BusInformation/>
    </div>
  );
}

export default Profile;
