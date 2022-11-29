import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Home from './Home';


// const styles = ({
//     paperContainer: {
//         backgroundImage: `url(${"https://github.com/illinois-sail/sail-website-uiuc/blob/ac-homepage/sail-website/src/landing.jpg?raw=true"})`,
//         backgroundSize: 'cover',
//         width: '100%',
//         minHeight: '100vh',

//     }
// });

function HomePage() {
            // <Paper style={styles.paperContainer}>
            // </Paper>
            return (
            <Box
                sx={{
                    backgroundImage: `url(${"https://raw.githubusercontent.com/illinois-sail/sail-website-uiuc/02b599be355b6696dbba7233a59d04d0d8924a24/sail-website/src/landing_option_3.svg"})`,
                    backgroundSize: 'cover',
                    // backgroundColor: '#C0FDFB',
                    // resizeMode: "stretch",
                    width: '100%',
                    // minHeight: '100vh',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    // backgroundAttachment: 'fixed',
                    // flexGrow: 1,
                    // overflow: 'hidden',
                height: '1000px',
                // width: '7680px',
                animation: 'slide 3s linear infinite',
            }}
            
            >
            <Home />
            </Box>

            
            );
}

export default HomePage;