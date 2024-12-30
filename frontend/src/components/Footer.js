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
            '@media (max-width: 1024px)': { 
              paddingBottom: '400px',
            },
            '@media (max-width: 768px)': { 
              paddingBottom: '300px',
            },
            '@media (max-width: 480px)': { 
              paddingBottom: '200px',
            },
            '@media (max-height: 640px)': { 
              paddingBottom: '200px',
            },
            '@media (max-height: 480px)': { 
              paddingBottom: '200px',
            },
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
            '@media (max-width: 1024px)': { 
              fontSize: '45px',
            },
            '@media (max-width: 480px)': { 
              fontSize: '40px',
            },
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

      <Box
        className="footer-stars"
        sx={{
          position: 'absolute',
          bottom: '0',
          left: '50%', 
          width: '100%',
          height: '100vh',
          maxHeight: '900px',
          transform: 'translateX(-50%)', 
          backgroundImage: `url(${shootingstar})`,
          backgroundSize: 'contain', 
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center bottom', 
          zIndex: -1,
          '@media (max-width: 560px)': { 
            marginBottom: '90px',
          },
          '@media (max-width: 480px)': { 
            marginBottom: '100px',
          },
          '@media (max-width: 360px)': { 
            marginBottom: '120px',
          },
        }}
      />
      
    
    </div>

  );
}

export default Footer;
