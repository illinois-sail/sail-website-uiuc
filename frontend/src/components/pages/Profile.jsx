import React, { useState, useEffect } from "react";
import axios from "axios";

const BusInformation = () => {
  return (
    <div className="bus-information" style={{
      width: "83vw",
      height: "auto",
      border: "0.26vw solid #000",
      background: "#FFF",
    }}>
      Hi there
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
