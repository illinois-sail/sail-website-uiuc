import './AboutPage.css';
import '../fonts.css';
import clouds2 from '../assets/footer-clouds-2.png';
import { Typography } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import starwide from '../assets/star-wide.png';
import starsmall from '../assets/star-small.png';


import Aaren from '../assets/Member Images/Aaren Photo - Aaren Kang.jpg';
import Tia from '../assets/Member Images/Screenshot 2024-12-07 at 8.09.28 PM - Tia Kashyap.png';
import Arwen from '../assets/Member Images/20231203_144610 - Arwen Louie.jpg';
import Skyla from '../assets/Member Images/headshot (small) - Skyla Jin.JPG';
import James from '../assets/Member Images/image0 - James Yang.jpg';
import Justin from '../assets/Member Images/IMG_0874 - Justin Lauinger.jpeg';
import LilyG from '../assets/Member Images/IMG_7918 - Lily Ge.jpeg';
import Manvitha from '../assets/Member Images/IMG_8647 - Manvitha Veeramreddy.jpeg';
import Stephanie from '../assets/Member Images/kjd - Stephanie Tian.jpeg';
import Peter from '../assets/Member Images/peter_lin_headshot - Peter Lin.JPG';
import Kyle from '../assets/Member Images/Screenshot_20240912_104456_Docs - Kyle Li.jpg';
import LilyL from '../assets/Member Images/selfie - Lily Liu.jpg';
import Firmiana from '../assets/Member Images/wang_firmiana_headshot - Firmiana Wang.jpg';
import Stephen from '../assets/Member Images/Stephen.jpg';
import Utkarsh from '../assets/Member Images/WhatsApp Image 2025-02-01 at 17.48.18_75ff5c05.jpg';

const memberImages = {
  "Aaren Kang": Aaren,
  "Peter Lin": Peter,
  "Firmiana Wang": Firmiana,
  "Tia Kashyap": Tia,
  "Utkarsh Singh": Utkarsh,
  "Manvitha V": Manvitha,
  "Skyla Jin": Skyla,
  "Lily Ge": LilyG,
  "Stephanie Tian": Stephanie,
  "Stephen He": Stephen,
  "James Yang": James,
  "Lily Liu": LilyL,
  "Arwen Louie": Arwen,
  "Justin Lauinger": Justin,
  "Kyle Li": Kyle,
};

function AboutPage() {
  const teams = {
    "DIRECTORS": ["Peter Lin", "Firmiana Wang"],
    "DEV TEAM": ["Tia Kashyap", "Utkarsh Singh", "Manvitha V"],
    "DESIGN TEAM": ["Skyla Jin", "Lily Ge", "Stephanie Tian"],
    "LOGISTICS TEAM": ["Aaren Kang", "Stephen He", "James Yang", "Lily Liu"],
    "MARKETING TEAM": ["Arwen Louie", "Justin Lauinger", "Kyle Li"],
  };

  return (
    <div className="homepage">
      <div className="about-content-wrapper">
        {/* Title Section */}
        <div className="title-section">
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              flexDirection: 'column',
              width: '100%'
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontFamily: 'Anta',
                color: 'white',
                textShadow: '0px 0px 20px rgba(255, 255, 255, 0.8)',
                fontSize: { xs: '40px', sm: '60px', md: '80px' },
                textAlign: 'center',
                position: 'relative'
              }}
            >
              ABOUT US
            </Typography>
          </Box>
        </div>

        {/* Clouds Section */}
        <div className='home-clouds' style={{ backgroundImage: `url(${clouds2})` }}></div>


        {/* Teams Section */}
        <div className="teams-section">
          {Object.entries(teams).map(([teamName, members]) => (
            <section className="team-section" key={teamName}>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: 'Anta',
                  color: 'white',
                  textAlign: 'center'
                }}
              >
                {teamName}
              </Typography>
              <div className="team-members">
                {members.map((member) => (
                  <div className="team-member" key={member}>
                    <div className="member-image-container">
                      <img
                        src={memberImages[member]}
                        alt={member}
                        className="member-image"
                      />
                    </div>
                    <Typography
                      sx={{
                        color: 'white',
                        fontSize: { xs: '14px', sm: '16px' },
                        fontFamily: 'Inter'
                      }}
                    >
                      {member}
                    </Typography>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
