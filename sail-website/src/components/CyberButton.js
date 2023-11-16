// CyberButton.js
import React from 'react';
import './CyberButton.css'; // Import your CSS file for CyberButton styling

const CyberButton = ({ text, tag, href }) => {
  return (
    <div style={{padding: "10px"}}>
        <a href={href} className="cyber-button-small bg-purple fg-white m-2 vt-bot" style={{textDecoration: "none"}}>
            {text}
            {/* little easter egg hehe */}
            <span className="glitchtext">SANJAY</span> 
            <span className="tag">50-37-3</span>
        </a>
    </div>
    
  );
};

export default CyberButton;
