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
    <div className="cyber-tile-big">
      <h1 className="class-title">{className}</h1>
      
      <div className="class-location-time">
        <span>Siebel Room {room}</span>
        <span>•</span>
        <span>{time}</span>
      </div>
      
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
              backgroundColor: isRegistered ? "rgba(255, 68, 68, 0.8)" : "rgba(68, 170, 68, 0.8)",
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