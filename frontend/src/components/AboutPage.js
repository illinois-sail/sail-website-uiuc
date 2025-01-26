import './AboutPage.css';
import '../fonts.css';
import clouds2 from '../assets/footer-clouds-2.png';
import { Typography } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import starwide from '../assets/star-wide.png';
import starsmall from '../assets/star-small.png';


function AboutPage() {
  const teams = {
    DIRECTORS: [1, 2],
    "DEV TEAM": [1, 2, 3],
    "DESIGN TEAM": [1, 2, 3],
    "LOGISTICS TEAM": [1, 2, 3, 4],
    "MARKETING TEAM": [1, 2, 3],
  };

  return (
    <div className="homepage">
      {/* TITLE PAGE */}
      <div className="container1" style={{ marginTop: '-30px' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
          }}
        >
          <Box
            component="img"
            src={starwide}
            alt="star"
            sx={{
              width: '55px',
              height: '55px',
              animation: 'starwidefooter-animation 3s infinite ease-in-out',
              position: 'relative',
              '@media (max-width: 1024px)': {
                width: '45px',
                height: '45px',
              },
              '@media (max-width: 480px)': {
                width: '35px',
                height: '35px',
              },
            }}
          />
          <Typography
            variant="h1"
            sx={{
              fontFamily: 'Anta',
              color: 'white',
              textShadow: '0px 0px 20px rgba(255, 255, 255, 0.8)',
              fontSize: '80px',
              '@media (max-width: 1024px)': { fontSize: '70px' },
              '@media (max-width: 480px)': { fontSize: '60px' },
            }}
          >
            ABOUT US
          </Typography>
          <Box
            component="img"
            src={starsmall}
            alt="star"
            sx={{
              width: '40px',
              height: '40px',
              transform: 'translateY(-20px)',
              animation: 'starsmallfooter-animation 3s infinite ease-in-out',
              '@media (max-width: 1024px)': {
                width: '30px',
                height: '30px',
              },
              '@media (max-width: 480px)': {
                width: '25px',
                height: '25px',
              },
            }}
          />
        </Box>
        <div className="about-clouds" style={{ backgroundImage: `url(${clouds2})` }}></div>
      </div>

      <Box className="footer"
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '40px',
            marginTop: '200px',
            paddingBottom: '200px',
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
