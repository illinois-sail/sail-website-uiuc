import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from "@mui/material/Box";
import beachHut from '../surf_hut.png'
import Question from './Questions';
import './Home.css';
import mobile from './Mobile.png';
import tablet from './Tablet.png';
import desktop from './Desktop.png';


// Define a Material UI style using the makeStyles hook
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh', // Set the height of the container to be the full viewport height
    backgroundSize: 'cover', // Scale the background image to cover the entire container
    backgroundPosition: 'center', // Center the background image within the container
    // backgroundImage: `url('https://raw.githubusercontent.com/illinois-sail/sail-website-uiuc/ac-homepage/sail-website/src/Mobile.png')`, // Set the background image for mobile devices by default
    // [theme.breakpoints.up('tablet')]: {
    //   backgroundImage: `url('https://raw.githubusercontent.com/illinois-sail/sail-website-uiuc/ac-homepage/sail-website/src/Tablet.png')`, // Set the background image for tablets and larger screens
    // },
    // [theme.breakpoints.up('desktop')]: {
    //   backgroundImage: `url('https://raw.githubusercontent.com/illinois-sail/sail-website-uiuc/ac-homepage/sail-website/src/Desktop.png')`, // Set the background image for desktop screens
    // },
    backgroundImage: `url(${mobile})`, // Set the background image for mobile devices by default
    [theme.breakpoints.up('tablet')]: {
      backgroundImage: `url(${tablet})`, // Set the background image for tablets and larger screens
    },
    [theme.breakpoints.up('desktop')]: {
      backgroundImage: `url(${desktop})`, // Set the background image for desktop screens
    },
  },
}));

// Define a React component that uses the above Material UI style
function HomePageNew() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
       <div className="homepage">
      {/* <h1 class="sail-logo">SAIL</h1> */}
      <div style={{paddingTop: "25em"}} className='info'>
          <Paper sx = {{
            // laptop: {
            marginLeft: "15em",
            marginRight: "15em",
            marginTop: "2em",
            marginBottom: "10em",
            padding: "2em",
            backgroundColor: 'transparent',
            }}>
              <Typography variant='h4' algin='center'>Welcome to SAIL</Typography>
              <Typography variant='body1' algin='center'>
              Welcome to Illinois Computer Science Sail!
              We are an entirely student-run organization that hosts an annual event where
              high schoolers have the chance to experience what it is like to be a computer science student
              at the University of Illinois at Urbana-Champaign.
              </Typography>
          </Paper>
          </div>
      </div>
      {/* <div className="section-about"> */}
      <Typography variant='h3' alginItem='center'>About SAIL</Typography>
      <Box
                sx={{
                  display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
                  mx: 5,
                  alignItems: 'center',
                }}
            >
                <Question />
                <img src={beachHut} alt='beach hut' />
            </Box>
      
      {/* </div> */}
      
    </div>
    </div>
  );
}

export default HomePageNew;