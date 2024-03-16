import React, { useEffect, useState } from 'react';
import './ClassCard.css'; 
import axios from 'axios';

const PROD_SERVER = "https://sail.cs.illinois.edu";
const TEST_SERVER = "http://172.16.0.51:5000" // replace with your local IP address

// assign the server URL based on the url of the window
const SERVER_URL = window.location.href.includes("sail.cs.illinois.edu") ? PROD_SERVER : TEST_SERVER;

const CyberButton = (props) => {
  const background = props.background || "bg-red";
  const foreground = props.foreground || "fg-white";
  const className = `cyber-button ${background} ${foreground}`;
  const text = props.text || "Button Text";
  return (
      <button className={className} onClick={() => props.onRegisterClick(props.index)} disabled={props.disabled} style={{ opacity: props.disabled ? 0.5 : 1 }}>
          {text}
          <span className="glitchtext">SAIL</span>
          <span className="tag">{ props.index }</span>
      </button>
  );
};


const initialAuthUser = JSON.parse(localStorage.getItem('authUser'));

const ClassCard = ({ className, room, time, description, onRegisterClick, index, activated }) => {
  const [authUser, setAuthUser] = useState(initialAuthUser);
  const [dataFetched, setDataFetched] = useState(false); // Track if data has been fetched
  const [isRegistered, setIsRegistered] = useState(false); // Track if user is registered for the class

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
    <div class="cyber-tile-big fg-dark bg-cyan" style={{ padding: "10px"}}>
      <h1 style={{ fontFamily: "Oxanium"}}>{className}</h1>
      <h2 style={{ fontFamily: "Oxanium"}}>{room} @ {time}</h2>
      <p style={{ fontFamily: "Oxanium"}}>{description}</p>
      <div class="register-button" style={{ display: "flex", flexDirection: "center", alignContent: "center", justifyContent: "center" }} >
        <CyberButton 
          text={isRegistered ? "Unregister" : "Register"} 
          background={isRegistered ? "bg-red" : "bg-green"} 
          foreground={isRegistered ? "fg-white" : "fg-white"} 
          index={index} 
          onRegisterClick={() => { setIsRegistered(!isRegistered); onRegisterClick(index); }}
          disabled={!activated} />
      </div>
    </div>
  );
};

export default ClassCard;
