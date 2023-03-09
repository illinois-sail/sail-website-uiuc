import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
// import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#f5f5f5', p: 2 }}>
      <Typography variant="h4" align="left" style={{fontFamily:"Oswald"}}>
        Contact Us
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
        
        <a href="https://www.instagram.com/illinois_cs_sail/">
          {/* <InstagramIcon sx={{ ml: 1 }} /> */}
          Instagram
        </a>
        </Box>
        <Box>
        <a href='mailto: sail.cs.illinois@gmail.com'>
          Email
        </a>
      </Box>
    </Box>
  );
};

export default Footer;