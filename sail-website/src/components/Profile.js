import * as React from 'react';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { Container } from '@mui/system';

export default function Profile() {
    return(
        <Box sx= {{
            backgroundImage: 'url(https://raw.githubusercontent.com/illinois-sail/sail-website-uiuc/f238184f5fd961532012ae303954aa2ac8d9ddf3/sail-website/src/Profile%20page_adobe_express.svg)',
        }}>
        <Container maxWidth="xs" sx={{
            display: 'flex',
            position: 'center',            
        }}>
            <Typography variant='h1' sx= {{ 
                fontFamily: ''
            }}>
            </Typography>
        </Container>
        {/* <Grid container spacing={2}>
        </Grid> */}
        </Box>
    );
}

