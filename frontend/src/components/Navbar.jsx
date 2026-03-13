import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import sailLogo from '../assets/sail-logo.svg';
import './Navbar.css';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="navbar-logo">
          <img src={sailLogo} alt="SAIL Logo" />
        </Link>

        <div className="navbar-right">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/aboutus" className="navbar-link">About</Link>
          <Link to="/classes" className="navbar-link">Classes</Link>

          {/* FAQ DROPDOWN */}
          <div className="navbar-faq-container">
            <button
              className="navbar-link navbar-faq-button"
              onClick={toggleDropdown}
            >
              FAQ
              <span className={`faq-chevron ${isDropdownOpen ? 'open' : ''}`}>
                ▾
              </span>
            </button>

            {isDropdownOpen && (
              <div className="navbar-dropdown">
                <Link
                  to="/faq"
                  className="navbar-dropdown-item"
                  onClick={closeDropdown}
                >
                  FAQ
                </Link>

                <Link
                  to="/register"
                  className="navbar-dropdown-item light-pink"
                  onClick={closeDropdown}
                >
                  How to Register
                </Link>

                <Link
                  to="/transportation"
                  className="navbar-dropdown-item hot-pink"
                  onClick={closeDropdown}
                >
                  Transportation
                </Link>
              </div>
            )}
          </div>

          {/* <Link to="/profile" className="navbar-link">Profile</Link> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;