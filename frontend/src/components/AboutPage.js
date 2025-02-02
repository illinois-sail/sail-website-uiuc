import './AboutPage.css';
import '../fonts.css';
import starwide from '../assets/star-wide.png';
import starsmall from '../assets/star-small.png';
import aboutUsTitle from '../assets/titles/about-us-title.png';
import titleshootingstars from '../assets/title-shooting-stars.png';
import { Typography } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';


function AboutPage() {
  const teams = {
    DIRECTORS: [1, 2],
    "DEV TEAM": [1, 2, 3],
    "DESIGN TEAM": [1, 2, 3],
    "LOGISTICS TEAM": [1, 2, 3, 4],
    "MARKETING TEAM": [1, 2, 3],
  };

  return (
    <div className="homepage-about">

      {/* TITLE PAGE*/}
      <div className='container-about'>
        <div className='title-about'>
          <img
              className="corner-image-about"
              src={titleshootingstars} 
              alt="Corner Decoration"
          />
          <img
              className="title-image-about"
              src={aboutUsTitle}
              alt="ABOUT US Title"
          />
        </div>
      </div>


      <Box className="sail-team"
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '40px',
            paddingBottom: '100px',
            color: 'white',
          }}
          >
      {/* TEAM SECTIONS */}
      <div style={{ paddingTop: '50px' }}></div>
      {Object.entries(teams).map(([teamName, members], index) => (
        <section key={index} className="team-section">
          <h2 className="team-name">{teamName}</h2>
          <div className="team-members">
            {members.map((i) => (
              <div key={i} className="team-member">
                <div className="member-image-container">
                  <img src="/placeholder.svg" alt="Team member" className="member-image" />
                </div>
                <span className="member-name">Team Member</span>
              </div>
            ))}
          </div>
        </section>
      ))}
    </Box>
    </div>
  );
}

export default AboutPage;
