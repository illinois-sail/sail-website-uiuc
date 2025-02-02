import React, { useEffect, useState } from 'react';
import './ClassCard.css'; 
import axios from 'axios';
import SERVER_URL from './server_url';

const initialAuthUser = JSON.parse(localStorage.getItem('authUser'));

const ClassCard = ({ className, room, time, description, onRegisterClick, index, activated, capacity, zoomLink }) => {
  const [authUser, setAuthUser] = useState(initialAuthUser);
  const [dataFetched, setDataFetched] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [seatsRemaining, setSeatsRemaining] = useState("loading");

  useEffect(() => {
    if (!dataFetched) {
      if (authUser) {
        axios.get(`${SERVER_URL}/get_classes/${authUser.email}`)
          .then((response) => {
            setAuthUser({ ...authUser, classes: response.data.classes });
            setDataFetched(true);
            setIsRegistered(response.data.classes[index] === "1");
          })
          .catch((error) => {
            console.error(error);
          });
      }

      if (seatsRemaining === "loading") {
        axios.get(`${SERVER_URL}/get_seats_remaining`)
          .then((response) => {
            setSeatsRemaining(response.data[index].remainingSeats);
          })
          .catch((error) => {
            console.error("error fetching seats remaining:", error);
          });
      }
    }
  }, [authUser, dataFetched]);

  useEffect(() => {
    if (authUser) {
      localStorage.setItem('authUser', JSON.stringify(authUser));
    }
  }, [authUser]);

  useEffect(() => {
    setAuthUser(JSON.parse(localStorage.getItem('authUser')));
  }, [isRegistered]);

  return (
    <div className="cyber-tile-big fg-dark bg-cyan" style={{ padding: "10px", display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
      <h1 style={{ fontFamily: "Oxanium" }}>{className}</h1>
      {authUser && room === "zoom" && zoomLink ? (
        <a href={zoomLink} target="_blank" rel="noopener noreferrer">
          <h2 style={{ fontFamily: "Oxanium" }}>Zoom Meeting</h2>
        </a>
      ) : (
        <h2 style={{ fontFamily: "Oxanium" }}>Siebel Room {room} @ {time}</h2>
      )}
      <p style={{ fontFamily: "Oxanium" }}>{description}</p>
      <p>Seats Remaining: {seatsRemaining} / {capacity}</p>
      <div className="register-button" style={{ display: "flex", justifyContent: "center", marginBottom: "0px" }}>
        {authUser && (
          <button
            className="regular-button"
            onClick={() => { setIsRegistered(!isRegistered); onRegisterClick(index); }}
            disabled={!activated}
            style={{ 
              padding: "10px 20px", 
              fontSize: "1rem", 
              cursor: activated ? "pointer" : "not-allowed",
              backgroundColor: isRegistered ? "red" : "green", 
              color: "white", 
              border: "none", 
              borderRadius: "5px", 
              opacity: activated ? 1 : 0.5,
              display: "block"
            }}
          >
            {isRegistered ? "Unregister" : "Register"}
          </button>
        )}
      </div>
    </div>
  );
};

export default ClassCard;