import React from 'react';
import './ClassCard.css'; 
import { Typography } from '@mui/material';
import registerButtonImage from '../assets/registerButtonImage.png';

const ClassCard = ({ className, room, time, description, onRegisterClick }) => {
  return (
    <div className="classCard">
      <div className="classCardHeaderDiv">
        {/* <h1 className="className">{className}</h1> */}
        {/* make the above line into Typography */}
        <Typography
          variant="h6"
          component="cardHeaderText"
          fontSize={30}
          sx={{ flexGrow: 1, fontFamily: "JetBrainsMono" }}
        >
          {className}
        </Typography> 
      </div>
      <h2>ROOM: {room}</h2>
      <h2>TIME: {time}</h2>
      <h2>DESCRIPTION: {description}</h2>
      {/* make an image which is a button and the image is ../assets/registerButtonImage.png */}
      <div className="registerButtonDiv">
        <a href="#/" className="registerButton" onClick={onRegisterClick}>
          <div className="buttonOverlay">
            <p className="buttonText">REGISTER</p>
            <img className="buttonImage" src={registerButtonImage} alt="Register" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default ClassCard;
