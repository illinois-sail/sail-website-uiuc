import React, { useEffect, useState } from 'react';
import './ClassCard.css'; 
import axios from 'axios';

const PROD_SERVER = "https://sail.cs.illinois.edu";
const TEST_SERVER = "http://192.168.1.9:5000" // replace with your local IP address

// assign the server URL based on the url of the window
const SERVER_URL = window.location.href.includes("sail.cs.illinois.edu") ? PROD_SERVER : TEST_SERVER;

const CyberButton = (props) => {
  if (props.displayOrNot === "none") {
    return null;
  }
  const background = props.background || "bg-red";
  const foreground = props.foreground || "fg-white";
  const className = `cyber-button ${background} ${foreground}`;
  const text = props.text || "Button Text";
  return (
      <button className={className} onClick={() => props.onRegisterClick(props.index)} disabled={props.disabled} display={props.displayOrNot} style={{ opacity: props.disabled ? 0.5 : 1 }}  >
          {text}
          <span className="glitchtext">SAIL</span>
          <span className="tag">{ props.index }</span>
      </button>
  );
};

const initialAuthUser = JSON.parse(localStorage.getItem('authUser'));

const ClassCard = ({ className, room, time, description, onRegisterClick, index, activated, capacity, zoomLink }) => {
  const [authUser, setAuthUser] = useState(initialAuthUser);
  const [dataFetched, setDataFetched] = useState(false); // Track if data has been fetched
  const [isRegistered, setIsRegistered] = useState(false); // Track if user is registered for the class
  const [seatsRemaining, setSeatsRemaining] = useState("loading");

  useEffect(() => {
    if (!dataFetched) {
      if (authUser) {
        axios.get(`${SERVER_URL}/get_classes/${authUser.email}`)
          .then((response) => {
            console.log('Response from /get_classes:', response);
            setAuthUser({ ...authUser, classes: response.data.classes });
            setDataFetched(true);
            setIsRegistered(response.data.classes[index] === "1");
          })
          .catch((error) => {
            console.error(error);
          });
      }

      if (seatsRemaining === "loading") {
        console.log("fetching seats remaining");
        axios.get(`${SERVER_URL}/get_seats_remaining`)
          .then((response) => {
            console.log('Response from /get_seats_remaining:', response.data);
            setSeatsRemaining(response.data[index].remainingSeats);
            console.log("seatsRemaining:", response.data[index].remainingSeats);
          })
          .catch((error) => {
            console.error("error fetching seats remaining:", error);
          });
      }
    }
  }, [authUser, dataFetched]);

  useEffect(() => {
    console.log("authUser has changed!")
    if (authUser) {
      localStorage.setItem('authUser', JSON.stringify(authUser));
    }
  }, [authUser]);

  useEffect(() => {
    setAuthUser(JSON.parse(localStorage.getItem('authUser')));
  }, [isRegistered]);

  return (
    <div class="cyber-tile-big fg-dark bg-cyan" style={{ padding: "10px", display: "flex", flexDirection: "column", justifyContent: "space-around"}}>
      <h1 style={{ fontFamily: "Oxanium"}}>{className}</h1>
      {authUser && room === "zoom" && zoomLink ? (
        <a href={zoomLink} target="_blank" rel="noopener noreferrer">
          <h2 style={{ fontFamily: "Oxanium"}}>Zoom Meeting</h2>
        </a>
      ) : (
        <h2 style={{ fontFamily: "Oxanium"}}>Siebel Room {room} @ {time}</h2>
      )}
      <p style={{ fontFamily: "Oxanium"}}>{description}</p>
      <p>Seats Remaining: {seatsRemaining} / {capacity}</p>
      <div class="register-button" style={{ display: "flex", flexDirection: "center", alignContent: "center", justifyContent: "center", marginBottom: "0px" }} >
        <CyberButton 
          text={isRegistered ? "Unregister" : "Register"} 
          background={isRegistered ? "bg-red" : "bg-green"} 
          foreground={isRegistered ? "fg-white" : "fg-white"} 
          index={index} 
          onRegisterClick={() => { setIsRegistered(!isRegistered); onRegisterClick(index); }}
          disabled={!activated} 
          displayOrNot={authUser ? "block" : "none"}
        />
      </div>
    </div>
  );
};

export default ClassCard;
