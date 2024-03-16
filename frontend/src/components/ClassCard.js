import React, { useEffect, useState } from 'react';
import './ClassCard.css'; 

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



const ClassCard = ({ className, room, time, description, onRegisterClick, index, activated }) => {
  const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem('authUser')));
  const [isRegistered, setIsRegistered] = useState(authUser.classes[index] === "1");

  useEffect(() => {
    if (authUser) {
      const classes = authUser.classes;
      setIsRegistered(classes[index] === "1");
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
