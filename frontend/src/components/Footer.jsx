import React from 'react';
import footerCloudLeft from '../assets/footer-cloud-left.svg';
import footerCloudRight from '../assets/footer-cloud-right.svg';
import emailIcon from '../assets/email-icon.svg';
import instagramIcon from '../assets/instagram-icon.svg';
import tiktokIcon from '../assets/tiktok-icon.svg';
import copyrightIcon from '../assets/copyright.svg';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <img src={footerCloudLeft} alt="" className="footer-cloud-left" />
      <img src={footerCloudRight} alt="" className="footer-cloud-right" />
      
      <div className="footer-content">
        <h2 className="footer-contact-us">Contact Us</h2>
        
        <div className="footer-social-media">
          <img src={emailIcon} alt="Email" className="social-icon" />
          <img src={instagramIcon} alt="Instagram" className="social-icon" />
          <img src={tiktokIcon} alt="TikTok" className="social-icon" />
        </div>
        
        <div className="footer-copyright">
          <img src={copyrightIcon} alt="Copyright" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
