import React from 'react';
import mail_icon from "../assets/footer/mail.png"; 
import instagram_icon from "../assets/footer/instagram.png"; 
import tiktok_icon from "../assets/footer/tiktok.png";
import buildings_clouds from "../assets/footer/footer.png";
import effect from "../assets/footer/effect.png";
import './Footer.css';

function Footer() {
  return (
    
    <div className="home-footer-wrapper">

      <div className="footer-content">
      <div className="contact-us-row">
        <span className="contact-us-text">Contact Us</span>
        <img src={effect} alt="" className="contact-us-effect" />
      </div>

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
      
      <img src={buildings_clouds} alt="" className="footer-buildings" />
    </div>
  );
}

export default Footer;
