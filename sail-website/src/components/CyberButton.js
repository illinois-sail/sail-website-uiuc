// CyberButton.js
import React from 'react';
import './CyberButton.css'; // Import your CSS file for CyberButton styling

const CyberButton = ({ text, tag, href }) => {
  return (
    <div style={{padding: "10px"}}>
        <a href={href} className="cyber-button-small bg-purple fg-white m-2 vt-bot" style={{textDecoration: "none"}}>
            {text}
            <span className="glitchtext">&dollar;_glitch;</span>
            <span className="tag">{tag}</span>
        </a>
    </div>
    
  );
};

export default CyberButton;
