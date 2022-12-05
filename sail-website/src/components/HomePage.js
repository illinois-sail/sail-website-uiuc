import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Home from './Home';
import {createTheme, ThemeProvider} from '@mui/material/styles';


// const styles = ({
//     paperContainer: {
//         backgroundImage: `url(${"https://github.com/illinois-sail/sail-website-uiuc/blob/ac-homepage/sail-website/src/landing.jpg?raw=true"})`,
//         backgroundSize: 'cover',
//         width: '100%',
//         minHeight: '100vh',

//     }
// });

const theme = createTheme({
    breakpoints: {
        values: {
            mobile: 0,
            tablet: 768,
            laptop: 1024,
            desktop: 1280,
        },
    },
});

function HomePage() {
            // <Paper style={styles.paperContainer}>
            // </Paper>
            return (
                <ThemeProvider theme={theme}>
            <Box
                sx={{
                    backgroundImage: `url(${"https://raw.githubusercontent.com/illinois-sail/sail-website-uiuc/fd91ec28aef31ddc27c219a6e000190e8bff2eed/sail-website/src/landing_with_title.svg"})`,
                    backgroundSize: 'cover',
                    // backgroundColor: '#C0FDFB',
                    // resizeMode: "stretch",
                    // margin: 10,
                    // width: '100%',
                    // minHeight: '100vh',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    // backgroundAttachment: 'fixed',
                    // flexGrow: 1,
                    // overflow: 'hidden',
                height: {
                    mobile: '100px',
                    tablet: '500px',
                    laptop: '1000px',
                    desktop: '1000px',
                },
                // width: '7680px',
                animation: 'slide 3s linear infinite',
                width: {
                    mobile: '100%',
                    tablet: '100%',
                    laptop: '100%',
                    desktop: '100%',
                }
            }}
            
            >
            <Home />
            </Box>
</ThemeProvider>
            
            );
}

export default HomePage;