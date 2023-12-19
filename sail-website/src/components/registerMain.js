import * as React from "react";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import Stack from "@mui/material/Stack";
import "../fonts.css";
import card_background from "../assets/RegistrationButtonBackground.png";

function format_text(text) {
  if (text.toLowerCase() === "student registration") {
    return "/register/student";
  } else if (text.toLowerCase() === "parent registration") {
    return "/register/parent";
  } else if (text.toLowerCase() === "hackathon") {
    return "/hackathon";
  } else {
    return "/register";
  }
}

function RegistrationButton(props) {
  return (
    <div style={{ position: "relative", width: "80%", height: "10vh", margin: "10px", display: "flex", justifyContent: "center", alignItems: "center", margin: "20px" }}>
      <div style={{ position: "absolute", textAlign: "center", width: "100%", height: "100%" }}>
        <img
          src={card_background}
          alt="SAIL logo"
          style={{
            width: "100%",
            height: "100%",
            filter: "brightness(100%)", // Initial brightness
            transition: "filter 0.3s", // Smooth transition for the filter property
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.filter = "brightness(70%)";
            e.currentTarget.nextElementSibling.style.filter = "brightness(70%)"; // Apply to the next sibling (button)
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.filter = "brightness(100%)";
            e.currentTarget.nextElementSibling.style.filter = "brightness(100%)"; // Restore on mouse out
          }}
        />
        <button
          style={{
            backgroundColor: 'transparent', // Set background color to transparent
            color: "white",
            fontFamily: "JetBrainsMono",
            fontSize: "20px",
            position: "absolute",
            top: "50%", // Center the button vertically
            left: "50%", // Center the button horizontally
            transform: "translate(-50%, -50%)", // Adjust to center the button
            border: 'none', // Remove the border
            outline: 'none', // Remove the outline when focused
            filter: "brightness(100%)", // Initial brightness for the button
            transition: "filter 0.3s", // Smooth transition for the filter property
            width: "100%",
            fontSize: "200%"
          }}
          onClick={(e) => {
            window.location.href = format_text(props.text);
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.filter = "brightness(70%)";
            e.currentTarget.previousElementSibling.style.filter = "brightness(70%)"; // Apply to the previous sibling (image)
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.filter = "brightness(100%)";
            e.currentTarget.previousElementSibling.style.filter = "brightness(100%)"; // Restore on mouse out
          }}
        >
          {props.text}
        </button>
      </div>
    </div>
  );
}

function RegisterMain() {
  const buttonSpacing = "10px"; // Adjust the spacing as needed

  return (
    <div 
      className="registrationContainer"
      style={{
        // align items vertically and in the center of the div
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <h1 style={{ fontFamily: "JetBrainsMono", color: "white", paddingBottom: "10px", paddingTop: "20px" }}>REGISTER TODAY</h1>
      <div className="buttonContainer" style={{ 
        backgroundImage: {card_background}, 
        display: "flex", 
        flexDirection: "column", 
        alignContent: "center", 
        alignItems: "center", 
        width: "40vw" 
      }}>
        <RegistrationButton text="Student Registration" />
        <RegistrationButton text="Parent Registration" />
        <RegistrationButton text="Hackathon" />
      </div>
    </div>
  );
}


export default RegisterMain;