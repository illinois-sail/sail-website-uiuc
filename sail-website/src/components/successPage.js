import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


function Success() {
    return (
        <Container component="main" maxWidth="m">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 40,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        <Typography alignItems="center" component="h1" variant="h5">
            You have successfully created an account!
          </Typography>
          </Box>
      </Container>
    );
  }
  
  export default Success;