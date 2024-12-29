import '../fonts.css'
import { Typography } from '@mui/material';
import clouds1 from '../assets/footer-clouds-1.png'
import shootingstar from '../assets/shooting-star-footer.png'
import tiktok from '../assets/tiktok-logo.png'
import instagram from '../assets/instagram-logo.png'
import email from '../assets/email-logo.png'
import React from "react";
import Box from '@mui/material/Box';
import { Stack } from "@mui/system";
import { Button } from "@mui/material";
;
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
      <img src={src} alt={alt} style={{ width: '50px', height: '50px' }} />
    </Button>
  );
}

function Footer() {
  return (
    <div>
      <div className='contact-container'>
        <Box
          className="footer"
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '40px',
            marginTop: '300px',
            paddingBottom: '500px',
            color: 'white',
          }}
          >
          <Typography
          variant="h3"
          sx={{
            fontFamily: 'Anta',
            color: 'white',
            lineHeight: '1.3',
            textShadow: '0px 0px 20px rgba(255, 255, 255, 0.8)',
            textAlign: 'center',
            }}
          >
            CONTACT US
          </Typography>

          <Stack
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

      <div
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

      <div
        style={{
          position: 'absolute',
          bottom: '0',
          left: '50%',  // Centered horizontally
          width: '100vw',
          height: '70vh',
          transform: 'translateX(-50%)',  // Ensures perfect centering
          backgroundImage: `url(${shootingstar})`,
          backgroundSize: 'contain',  // Ensures the entire image fits while maintaining aspect ratio
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center', 
          zIndex: -1,
        }}
        >
      </div>
    
    </div>

  );
}

export default Footer;
