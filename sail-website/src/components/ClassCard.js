import React from 'react';
import './ClassCard.css'; 
import { Typography } from '@mui/material';
import registerButtonImage from '../assets/registerButtonImage.png';
import sail_logo from "../assets/sail24logo.png"
import cat from "../assets/cat.png"

const ClassCard = ({ className, room, time, description, onRegisterClick }) => {
  return (
    <div class="cyber-tile-big fg-dark bg-cyan">
        <img src={ cat } alt="SAIL logo" style={{ width: "100%", height: "100%" }}/>
        <label>Text content</label>
    </div>
  );
};

export default ClassCard;
