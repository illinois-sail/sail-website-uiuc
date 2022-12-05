import AppRouter from './AppRouter';
import NavBar from './NavBar';
import Typography from '@mui/material/Typography';
import Question from './Questions';

import { Paper } from '@mui/material';
import Box from "@mui/material/Box";
import beachHut from '../surf_hut.png'
import './Home.css'


function Home() {
  return (
    <div>
       <div className="homepage">
      {/* <h1 class="sail-logo">SAIL</h1> */}
      <div style={{paddingTop: "25em"}} className='info'>
          {/* <p style={{paddingLeft}}>
            Welcome to Illinois Computer Science Sail!
            We are an entirely student-run organization that hosts an annual event where
            high schoolers have the chance to experience what it is like to be a computer science student
            at the University of Illinois at Urbana-Champaign.
          </p> */}
          <Paper sx = {{
            // laptop: {
            marginLeft: "15em",
            marginRight: "15em",
            marginTop: "2em",
            marginBottom: "10em",
            padding: "2em",
            backgroundColor: '#C0FDFB',
            // },
            // desktop: {
            // marginLeft: "15em",
            // marginRight: "15em",
            // marginTop: "4em",
            // marginBottom: "15em",
            // padding: "2em",
            // backgroundColor: '#C0FDFB',
            // },
            // tablet: {
            // marginLeft: "10em",
            // marginRight: "10em",
            // marginTop: "2em",
            // marginBottom: "10em",
            // padding: "2em",
            // backgroundColor: '#C0FDFB',
            // },
            // mobile: {
            // marginLeft: "5em",
            // marginRight: "5em",
            // marginTop: "2em",
            // marginBottom: "10em",
            // padding: "2em",
            // backgroundColor: '#C0FDFB',
            // },

            }}>
              <Typography variant='h4' algin='center'>Welcome to SAIL</Typography>
              <Typography variant='body2' algin='center'>
              Welcome to Illinois Computer Science Sail!
              We are an entirely student-run organization that hosts an annual event where
              high schoolers have the chance to experience what it is like to be a computer science student
              at the University of Illinois at Urbana-Champaign.
              </Typography>
          </Paper>
          </div>
        {/* <a href="">
          <button className = "button"> Interest From </button>
        </a>
        <a href="">
          <button className = "button"> Teacher Registration </button>
        </a>
        <a href="">
          <button className = "button"> Student Registration </button>
        </a>
        
      <Typography variant='h3'  algin='center'>Contact SAIL</Typography>
      <p>Google Form Link?</p> */}
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
    
  );
}

export default Home;