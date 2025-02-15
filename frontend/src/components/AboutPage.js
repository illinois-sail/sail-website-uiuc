import './AboutPage.css';
import '../fonts.css';
import starwide from '../assets/star-wide.png';
import starsmall from '../assets/star-small.png';
import aboutUsTitle from '../assets/titles/about-us-title.png';
import titleshootingstars from '../assets/title-shooting-stars.png';
import { Typography } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';

import Aaren from '../assets/Member-Images/aaren-kang.jpg';
import Tia from '../assets/Member-Images/tia-kashyap.png';
import Arwen from '../assets/Member-Images/arwen-louie.jpg';
import Skyla from '../assets/Member-Images/skyla-jin.JPG';
import James from '../assets/Member-Images/james-yang.jpg';
import Justin from '../assets/Member-Images/justin-lauinger.jpeg';
import LilyG from '../assets/Member-Images/lily-ge.jpeg';
import Manvitha from '../assets/Member-Images/manvitha-veeramreddy.jpeg';
import Stephanie from '../assets/Member-Images/stephanie-tian.jpeg';
import Peter from '../assets/Member-Images/peter-lin.JPG';
import Kyle from '../assets/Member-Images/kyle-li.jpg'
import LilyL from '../assets/Member-Images/lily-liu.jpg';
import Firmiana from '../assets/Member-Images/firmiana-wang.jpg';
import Stephen from '../assets/Member-Images/stephen-he.jpg';
import Utkarsh from '../assets/Member-Images/utkarsh-singh.jpg';

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
                        fontFamily: 'Anta'
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
