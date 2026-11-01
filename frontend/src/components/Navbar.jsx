import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import sailLogo from '../assets/sail-logo.svg';
import './Navbar.css';
import { useAuth } from './pages/AuthContext';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isLoggedIn, setIsLoggedIn, setAuthUser } = useAuth();
  const faqRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('authUser');
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    if (storedUser && storedIsLoggedIn === 'true') {
      setIsLoggedIn(true);
      setAuthUser(JSON.parse(storedUser));
    }
  }, []);

  // close FAQ dropdown when clicking outside
  useEffect(() => {
  const handleClickOutside = (event) => {
    if (faqRef.current && !faqRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  document.addEventListener('mousedown', handleClickOutside);

  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, []);

  const toggleDropdown = () => setIsDropdownOpen(prev => !prev);
  const closeDropdown = () => setIsDropdownOpen(false);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-content">

        {/* LOGO */}
        <Link to="/" className="navbar-logo">
          <img src={sailLogo} alt="SAIL Logo" />
        </Link>

        {/* DESKTOP NAVBAR */}
        <div className="navbar-right">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/sail2026" className="navbar-link">SAIL 2026</Link>
          <Link to="/aboutus" className="navbar-link">About</Link>
          <Link to="/classes" className="navbar-link">Classes</Link>

          {/* FAQ DROPDOWN */}
          <div className="navbar-faq-container" ref={faqRef}>
            <button
              className="navbar-link navbar-faq-button"
              onClick={toggleDropdown}
            >
              FAQ
              <span className={`faq-chevron ${isDropdownOpen ? 'open' : ''}`}>▾</span>
            </button>

            {isDropdownOpen && (
              <div className="navbar-dropdown">
                <Link to="/faq" className="navbar-dropdown-item" onClick={closeDropdown}>FAQ</Link>
                <Link to="/register" className="navbar-dropdown-item light-pink" onClick={closeDropdown}>How to Register</Link>
                <Link to="/transportation" className="navbar-dropdown-item hot-pink" onClick={closeDropdown}>Transportation</Link>
              </div>
            )}
          </div>

          {/* Auth links */}
          {isLoggedIn ? (
            <>
              <Link to="/profile" className="navbar-link">Profile</Link>
              <Link to="/logout" className="navbar-link">Logout</Link>
            </>
          ) : (
            <Link to="/login" className="navbar-link">Login</Link>
          )}
        </div>

        {/* MOBILE NAVBAR */}
        <div className="navbar-mobile-controls">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/aboutus" className="navbar-link">About</Link>

          <button
            className="hamburger-button"
            onClick={() => setIsMobileMenuOpen(prev => !prev)}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* MOBILE DROPDOWN MENU */}
        {isMobileMenuOpen && (
          <div className="navbar-mobile-menu">
            <Link to="/sail2026" onClick={closeMobileMenu}>SAIL 2026</Link>
            <Link to="/classes" onClick={closeMobileMenu}>Classes</Link>
            <Link to="/faq" onClick={closeMobileMenu}>FAQ</Link>
            <Link to="/register" onClick={closeMobileMenu}>How to Register</Link>
            <Link to="/transportation" onClick={closeMobileMenu}>Transportation</Link>

            {isLoggedIn ? (
              <>
                <Link to="/profile" onClick={closeMobileMenu}>Profile</Link>
                <Link to="/logout" onClick={closeMobileMenu}>Logout</Link>
              </>
            ) : (
              <Link to="/login" onClick={closeMobileMenu}>Login</Link>
            )}
          </div>
        )}
        
      </div>
    </nav>
  );
}

export default Navbar;