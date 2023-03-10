import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Stack } from '@mui/system';
import { Button } from '@mui/material';

const Footer = () => {
  return (
    <Box bgcolor="#333" color="#fff" py={4}>
      <Typography variant="h2" style={{ fontFamily: "sergiotrendy", color:"#64b6ac", marginTop: '0.3em',  }} align="center">
        Contact Us
      </Typography>
      <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: 4,
          }}
        >
          <Stack direction="row" spacing={2}>
            <Button sx={{ fontFamily: 'avenir', backgroundColor:'#FDE5C1', color: '#333' }} variant="contained" href="/student">
              <Link href="'mailto: sail.cs.illinois@gmail.com'" variant="body1">
                <Typography sx={{ fontWeight: 'bold' }} fontFamily='Avenir'>Email</Typography>
              </Link>
            </Button>
            <Button sx={{ backgroundColor:'#FDE5C1', color: '#333' }} variant="contained" href="/teacher">
              <Link href="'https://www.instagram.com/illinois_cs_sail/'" variant="body1">
                <Typography sx={{ fontWeight: 'bold' }} fontFamily='Avenir'>Instagram</Typography>
              </Link>
            </Button>
          </Stack>
        </Box>
    </Box>
  );
};

export default Footer;
