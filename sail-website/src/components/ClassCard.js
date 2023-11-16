import React from 'react';
import './ClassCard.css'; 
import { Typography } from '@mui/material';
import registerButtonImage from '../assets/registerButtonImage.png';
import sail_logo from "../assets/sail24logo.png"
import cat from "../assets/cat.png"

const ClassCard = ({ className, room, time, description, onRegisterClick }) => {
  return (
    // <div className="classCard">
    //   <div className="classCardHeaderDiv">
    //     {/* <h1 className="className">{className}</h1> */}
    //     {/* make the above line into Typography */}
    //     <Typography
    //       variant="h6"
    //       component="cardHeaderText"
    //       fontSize={30}
    //       sx={{ flexGrow: 1, fontFamily: "JetBrainsMono" }}
    //     >
    //       {className}
    //     </Typography> 
    //   </div>
    //   <h2>ROOM: {room}</h2>
    //   <h2>TIME: {time}</h2>
    //   <h2>DESCRIPTION: {description}</h2>
    //   {/* make an image which is a button and the image is ../assets/registerButtonImage.png */}
    //   <div className="registerButtonDiv">
    //     <a href="#/" className="registerButton" onClick={onRegisterClick}>
    //       <div className="buttonOverlay">
    //         <p className="buttonText">REGISTER</p>
    //         <img className="buttonImage" src={registerButtonImage} alt="Register" />
    //       </div>
    //     </a>
    //   </div>
    // </div>
    <div class="cyber-tile-big fg-dark bg-cyan">
        {/* <img src="image.jpg"> */}
        <img src={ cat } alt="SAIL logo" style={{ width: "100%", height: "100%" }}/>
        <label>Text content</label>
    </div>
  );
};

export default ClassCard;
