import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import sailLogo from '../assets/sail-logo.svg';
import './Navbar.css';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleFaqMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleFaqMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="navbar-logo">
          <img src={sailLogo} alt="SAIL Logo" />
        </Link>
        <div className="navbar-right">
          <Link to="/About" className="navbar-link">
            About
          </Link>
          <Link to="/Classes" className="navbar-link">
            Classes
          </Link>
          <div 
            className="navbar-faq-container"
            onMouseEnter={handleFaqMouseEnter}
            onMouseLeave={handleFaqMouseLeave}
          >
            <button className="navbar-link">
              FAQ
            </button>
            {isDropdownOpen && (
              <div className="navbar-dropdown">
                <Link 
                  to="/FAQ#how-to-register" 
                  className="navbar-dropdown-item"
                >
                  How to Register
                </Link>
                <Link 
                  to="/FAQ#transportation" 
                  className="navbar-dropdown-item"
                >
                  Transportation
                </Link>
              </div>
            )}
          </div>
          <Link to="/Profile" className="navbar-link">
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
