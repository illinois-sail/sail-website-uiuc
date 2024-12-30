import '../fonts.css'
import './Footer.css';
import { Typography } from '@mui/material';
import clouds1 from '../assets/footer-clouds-1.png'
import shootingstar from '../assets/shooting-star-footer.png'
import tiktok from '../assets/tiktok-logo.png'
import instagram from '../assets/instagram-logo.png'
import email from '../assets/email-logo.png'
import starwide from '../assets/star-wide.png';
import starsmall from '../assets/star-small.png';
import React from "react";
import Box from '@mui/material/Box';
import { Stack } from "@mui/system";
import { Button } from "@mui/material";

function FooterButton({ href, src, alt }) {
  return (
    <Button
      sx={{
        color: '#333',
        borderRadius: '50%',
        padding: '20px',
        minWidth: '50px',
        height: '50px',
      }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Box
        component="img"
        src={src}
        alt={alt}
        sx={{
          width: '50px',
          height: '50px',
          '@media (max-width: 480px)': {
            width: '40px',
            height: '40px',
          },
        }}
      />
    </Button>
  );
}

function Footer() {
  return (
    <div>
      <div className='contact-container'>
        <Box className="footer"
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '40px',
            marginTop: '300px',
            paddingBottom: '400px',
            color: 'white',
          }}
          >
          
          <Box className='contact-us'
            sx={{
              display: 'flex',
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: '10px', 
              textAlign: 'center', 
            }}
          >
            <Box
              component="img"
              src={starwide}
              alt="star"
              sx={{
                width: '55px',
                height: '55px',
                transform: 'translateY(20px)',
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
            
            <Typography className='footer-text'
              variant="h3"
              sx={{
                fontFamily: 'Anta',
                color: 'white',
                lineHeight: '1.3',
                textShadow: '0px 0px 20px rgba(255, 255, 255, 0.8)',
                '@media (max-width: 1024px)': { 
                  fontSize: '45px',
                },
                '@media (max-width: 480px)': { 
                  fontSize: '40px',
                },
                '@media (max-width: 400px)': { 
                  fontSize: '35px',
                },
              }}
            >
              CONTACT US
            </Typography>
            
            <Box
              component="img"
              src={starsmall}
              alt="star"
              sx={{
                width: '40px',
                height: '40px',
                transform: 'translateY(-20px)',
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


          <Stack className='social-media'
          direction="row"
          spacing={2}
          sx={{ justifyContent: 'center', alignItems: 'center' }}
          >
            <FooterButton
            href="mailto:sail.cs.illinois@gmail.com"
            src={email}
            alt="Email"
            />
            <FooterButton
            href="https://www.instagram.com/illinois_cs_sail/"
            src={instagram}
            alt="Instagram"
            />
            <FooterButton
            href="https://www.tiktok.com/@illinoissail"
            src={tiktok}
            alt="TikTok"
            />
          </Stack>
        </Box>
      </div>

      <div className='footer-clouds'
        style={{
            position: 'absolute',
            bottom: '0vh',  
            left: '50%',  
            width: '100%',  
            height: '75vh',  
            transform: 'translateX(-50%)',  
            backgroundImage: `url(${clouds1})`,  
            backgroundSize: 'cover',  
            backgroundPosition: 'center center', 
            zIndex: -1,  
        }}
        >
      </div>

      <Box className="footer-shooting-stars"
        sx={{
          position: 'absolute',
          bottom: '0vh',
          left: '50%', 
          width: '100%',
          height: '100vh',
          transform: 'translateX(-50%)', 
          backgroundImage: `url(${shootingstar})`,
          backgroundSize: 'auto 100%', 
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center', 
          zIndex: -2,
        }}
      />
      
    
    </div>

  );
}

export default Footer;
