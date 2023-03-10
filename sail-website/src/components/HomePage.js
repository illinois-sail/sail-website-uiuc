import React from 'react';
// import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Home from './Home';
import { Backdrop } from '@mui/material';
import Container from '@mui/material/Container';
// import {createTheme, ThemeProvider} from '@mui/material/styles';
// import { width } from '@mui/system';
import mobile from './Mobile.png';
import tablet from './Tablet.png';
import desktop from './Desktop.png';
import { makeStyles } from '@material-ui/core/styles';
import mn from './Mobile_new.png';
import Footer from './Footer';


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

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '0px',
      height: '100%', 
      width: '100%',
      backgroundSize: 'cover', // Scale the background image to cover the entire container
      backgroundPosition: 'center', // Center the background image within the container
    //   backgroundImage: `url('https://raw.githubusercontent.com/illinois-sail/sail-website-uiuc/ac-homepage/sail-website/src/Mobile.png')`, // Set the background image for mobile devices by default
    //   [theme.breakpoints.up('tablet')]: {
    //     backgroundImage: `url('https://raw.githubusercontent.com/illinois-sail/sail-website-uiuc/ac-homepage/sail-website/src/Tablet.png')`, // Set the background image for tablets and larger screens
    //   },
    //   [theme.breakpoints.up('desktop')]: {
    //     backgroundImage: `url('https://raw.githubusercontent.com/illinois-sail/sail-website-uiuc/ac-homepage/sail-website/src/Desktop.png')`, // Set the background image for desktop screens
    //   },
      backgroundImage: `url(${mn})`, // Set the background image for mobile devices by default
    //   [theme.breakpoints.up('sm')]: {
    //     backgroundImage: `url(${tablet})`, // Set the background image for tablets and larger screens
    //   },
    //   [theme.breakpoints.up('md')]: {
    //     backgroundImage: `url(${desktop})`, // Set the background image for desktop screens
    //   },
    },
  }));

function HomePage() {
            // <Paper style={styles.paperContainer}>
            // </Paper>
            const classes = useStyles();
            return (
                // <ThemeProvider theme={theme}>
                <div>
            <Container className={classes.root}
            paddingTop="0px"
            paddingBottom="0px"
            fluid={true}
            disableGutters={true}
            maxWidth="xl"
            maxHeight="100%"
            
            //     sx={{
            //         backgroundImage: {
            //             xs: 'url(${mobile})',
            //             md: 'url("https://raw.githubusercontent.com/illinois-sail/sail-website-uiuc/ac-homepage/sail-website/src/Tablet.png")',
            //             lg: 'url("https://raw.githubusercontent.com/illinois-sail/sail-website-uiuc/ac-homepage/sail-website/src/Desktop.png")',
            //           },
            //           backgroundSize: 'cover',
            //           backgroundRepeat: 'no-repeat',
            //           backgroundPosition: 'center center',
            //           height: '100%',
            //           disableGutters: true,

            // }}

            
            >
            <Home />
            
            </Container>
            <Footer />
            </div>
        );
}

export default HomePage;