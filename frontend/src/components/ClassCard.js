import React, { useEffect, useState } from 'react';
import './ClassCard.css'; 
import axios from 'axios';
import SERVER_URL from './server_url';
import { useMediaQuery } from '@mui/material';

const initialAuthUser = JSON.parse(localStorage.getItem('authUser'));

const ClassCard = ({ className, room, time, description, onRegisterClick, index, activated, capacity, zoomLink }) => {
  const [authUser, setAuthUser] = useState(initialAuthUser);
  const [dataFetched, setDataFetched] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [seatsRemaining, setSeatsRemaining] = useState("loading");
  const [showDescription, setShowDescription] = useState(false);
  const isMobile = useMediaQuery('(max-width:768px)');

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
  }, [authUser, dataFetched, seatsRemaining]);

  useEffect(() => {
    if (authUser) {
      localStorage.setItem('authUser', JSON.stringify(authUser));
    }
  }, [authUser]);

  useEffect(() => {
    setAuthUser(JSON.parse(localStorage.getItem('authUser')));
  }, [isRegistered]);

  return (
    <div className="class-tile-big">
      <h1 className="class-title">{className}</h1>
      
      


      {/* {authUser && room === "zoom" && zoomLink ? (
        <a href={zoomLink} target="_blank" rel="noopener noreferrer">
          <h2 style={{ fontFamily: "Oxanium" }}>Zoom Meeting</h2>
        </a>
      ) : (
        <div className="class-location-time">
          <span>Siebel Room {room}</span>
          <span>•</span>
          <span>{time}</span>
        </div>
      )} */}

      {!authUser ? (
        //if no authuser + virtual
          room === "zoom" || room === "virtual" ? (
            <div className="class-location-time">
              <span>Siebel - Zoom</span>
              <span>•</span>
              <span>{time}</span>
            </div>
          ) : (
            //if no authuser + in person
            <div className="class-location-time">
              <span>Siebel Room {room}</span>
              <span>•</span>
              <span>{time}</span>
            </div>
          )
        ) : room === "zoom" && zoomLink ? (
          //if authuser + virtual
          <div className="class-location-time">
            <span>
              <a href={zoomLink} target="_blank" rel="noopener noreferrer">
              <span>Zoom Meeting</span>
              </a>
            </span>
            <span>•</span>
            <span>{time}</span>
          </div>
          //if authuser + in person
          ) : (
            <div className="class-location-time">
              <span>Siebel Room {room}</span>
              <span>•</span>
              <span>{time}</span>
            </div>
        )}


      {isMobile ? (
        <>
          <button 
            className="view-description-btn"
            onClick={() => setShowDescription(!showDescription)}
          >
            {showDescription ? 'Hide Description' : 'View Description'}
          </button>
          <div className={`class-description ${showDescription ? 'show' : ''}`}>
            {description}
          </div>
        </>
      ) : (
        <div className="class-description">
          {description}
        </div>
      )}
      

      <div className="remaining-seats">
        Remaining seats: {seatsRemaining} / {capacity}
      </div>
      
      {authUser && (
        <div className="register-button">
          <button
            className="register-btn"
            onClick={() => { setIsRegistered(!isRegistered); onRegisterClick(index); }}
            disabled={!activated}
            style={{ 
              backgroundColor: isRegistered ? "rgba(149, 197, 255, 0.9)" : "rgba(149, 197, 255, 0.5)",
            }}
          >
            {isRegistered ? "Unregister" : "Register"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ClassCard;
