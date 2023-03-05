import React from 'react';
// import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Home from './Home';
// import {createTheme, ThemeProvider} from '@mui/material/styles';
// import { width } from '@mui/system';
import mobile from './Mobile.png';
import tablet from './Tablet.png';
import desktop from './Desktop.png';


// const styles = ({
//     paperContainer: {
//         backgroundImage: `url(${"https://github.com/illinois-sail/sail-website-uiuc/blob/ac-homepage/sail-website/src/landing.jpg?raw=true"})`,
//         backgroundSize: 'cover',
//         width: '100%',
//         minHeight: '100vh',

//     }
// });

// const theme = createTheme({
//     breakpoints: {
//         values: {
//             mobile: 0,
//             tablet: 768,
//             laptop: 1024,
//             desktop: 1280,
//         },
//     },
// });

function HomePage() {
            // <Paper style={styles.paperContainer}>
            // </Paper>
            return (
                // <ThemeProvider theme={theme}>
            <Box
            
                sx={{
                    backgroundImage: {
                        xs: 'url("https://raw.githubusercontent.com/illinois-sail/sail-website-uiuc/ac-homepage/sail-website/src/Mobile.png")',
                        md: 'url("https://raw.githubusercontent.com/illinois-sail/sail-website-uiuc/ac-homepage/sail-website/src/Tablet.png")',
                        lg: 'url("https://raw.githubusercontent.com/illinois-sail/sail-website-uiuc/ac-homepage/sail-website/src/Desktop.png")',
                      },
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center center',
                      height: '100vh',
                    // backgroundColor: '#C0FDFB',
                    // resizeMode: "stretch",
                    // margin: 10,
                    // width: '100%',
                    // // minHeight: '100vh',
                    // backgroundRepeat: 'no-repeat',
                    // backgroundPosition: 'center center',
                    // backgroundAttachment: 'fixed',
                    // flexGrow: 1,
                    // overflow: 'hidden',
                    // maxWidth: '100%',
                    // height: 'auto',
                // height: {
                //     mobile: '100px',
                //     tablet: '500px',
                //     laptop: '1000px',
                //     desktop: '1000px',
                // },
                // // width: '7680px',
                // animation: 'slide 3s linear infinite',
                // width: {
                //     mobile: '100%',
                //     tablet: '100%',
                //     laptop: '100%',
                //     desktop: '100%',
                // }
            }}
            
            >
            <Home />
            </Box>
            
        );
}

export default HomePage;