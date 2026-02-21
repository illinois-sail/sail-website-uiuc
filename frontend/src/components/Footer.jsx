import React from 'react';
import footerCloudLeft from '../assets/footer-cloud-left.svg';
import footerCloudRight from '../assets/footer-cloud-right.svg';
import mail_icon from "../assets/mail.png"; 
import instagram_icon from "../assets/instagram.png"; 
import tiktok_icon from "../assets/tiktok.png";
import copyrightIcon from '../assets/copyright.svg';
import './Footer.css';

function Footer() {
  return (
    
    <div className="home-footer-wrapper">
      <span className="contact-us-text">Contact Us</span>

      <div className="home-footer">
        <a href="mailto:cs-sail@illinois.edu" aria-label="Email">
          <img src={mail_icon} alt="Email" />
        </a>

        <a
          href="https://www.instagram.com/illinois_cs_sail/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <img src={instagram_icon} alt="Instagram" />
        </a>

        <a
          href="https://www.tiktok.com/@illinoissail"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
          className="tiktok-link"
        >
          <img src={tiktok_icon} alt="TikTok" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
