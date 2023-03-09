import AppRouter from "./AppRouter";
import NavBar from "./NavBar";
import Typography from "@mui/material/Typography";
import Question from "./Questions";

import { Icon, Paper } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import beachHut from "../about_hut.png";
import Card from "@mui/material/Card";
import "./Home.css";
import { display, fontStyle, padding } from "@mui/system";
import SergioTrendy from "./SergioTrendy.ttf";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import Hidden from "@mui/material/Hidden";

const theme = createTheme({
  typography: {
    fontFamily: 'MyFont, Arial, sans-serif',
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'MyFont, Arial, sans-serif',
        },
      },
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [{
          fontFamily: 'custom',
          src: `url(${SergioTrendy})`,
        }],
      },
    },
  },
});


const schedule = [
  { time: '9:00 AM', event: 'Checkin and Breakfast' },
  { time: '9:45 AM', event: 'Opening Ceremony' },
  { time: '10:00 AM', event: 'Class #1' },
  { time: '11:00 AM', event: 'Class #2' },
  { time: '12:00 PM', event: 'Lunch' },
  { time: '1:00 PM', event: 'Class #3' },
  { time: '3:30 PM', event: 'Student Q & A Panel' },
  { time: '4:30 PM', event: 'Faculty Talk' },
  { time: '5:20 PM', event: 'Closing Ceremony' },
];



function Home() {
  return (
    <div>
      <div className="homepage">
        {/* <h1 class="sail-logo">SAIL</h1> */}
        <ThemeProvider theme={theme}>
        <Typography variant="h1" style={{fontFamily:"custom", fontStyle:""}} color= "#64b6ac">
          SAIL 2023
        </Typography>
        </ThemeProvider>
        <div style={{ paddingTop: "0em" }} className="info">
        
          <Paper

<<<<<<< HEAD
            }}>
              <Typography variant='h4' algin='center'>Welcome to SAIL</Typography>
              <Typography variant='h5' algin='center'>
              Welcome to Illinois Computer Science Sail!
              We are an entirely student-run organization that hosts an annual event where
              high schoolers have the chance to experience what it is like to be a computer science student
              at the University of Illinois at Urbana-Champaign.
              </Typography>
=======
            sx={{
              width : "60%",
              // height : "60%",
              // align: "center",
              alignItems: "center",
              marginTop: "10%",
              marginBottom: "10%",
              marginLeft: "20%",
              marginRight: "20%",
              backgroundColor: "transparent",
              
            }}
          >
            <Typography
              variant="h3"
              style={{ fontFamily: "Cambria" }}
              algin="center"
              color={"#47827B"}
            >
              Welcome Fellow Sailors!
            </Typography>
            <Typography
              variant="h5"
              style={{ fontFamily: "Cambria"}}
              algin="center"
              color={"#47827B"}
            >
              This is Illinois Computer Science Sail! We are an entirely
              student-run organization that hosts an annual event where high
              schoolers have the chance to experience what it is like to be a
              computer science student at the University of Illinois at
              Urbana-Champaign. Without further ado, let's get started!
            </Typography>
>>>>>>> 754b15ff1d6417871b07fa1b7d46b9a371659cc9
          </Paper>

           {/* Schedules */}
      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} sm={6}>
        <Card sx={{ borderRadius: '10px', p: 2, backgroundColor: "#c0fbfd", marginLeft: "20px", marginRight: "20px", height:"90%" }}>
            <Typography variant="h3" style={{ fontFamily: "Montserrat Classic", color:"#1d4e89" }} sx={{ mb: 2 }}>Saturday Schedule</Typography>
            {schedule.map((item) => (
              <Box key={item.time} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', py: 1, alignItems: 'center'}}>
                
              <Typography 
              variant="h6"
              style={{ fontFamily: "Cambria", color: "#1d4e89" }}
              sx={{ textAlign: 'left' }}>
              {item.time}</Typography>
              <Typography 
              variant="h6"
              style={{ fontFamily: "Cambria", color: "#1d4e89"  }}
              sx={{ textAlign: 'right' }}>
              {item.event}</Typography>
             
                
              </Box>
            ))}
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Card sx={{ borderRadius: '10px', p: 2, backgroundColor: "#c0fbfd",  marginLeft: "20px", marginRight: "20px", height:"90%" }}>
            <Typography variant="h3" style={{ fontFamily: "Montserrat Classic", color:"#1d4e89" }} sx={{ mb: 2 }}>Sunday Schedule</Typography>
              {/* <Box sx={{ alignItems: 'center', display:"flex", flexDirection:"column"}}> */}
                <Typography 
              variant="h4"
              style={{ fontFamily: "Cambria", color: "#1d4e89" }}
              sx={{ textAlign: 'center center', paddingTop:"25%"}}>Virtual mini-hackathon day!</Typography>
              <Typography 
              variant="h5"
              style={{ fontFamily: "Cambria", color: "#1d4e89" }}
              sx={{ textAlign: 'center center' }}>Keep your calendars open for 12-3pm.
              Details will be posted soon....</Typography>
              {/* </Box> */}
          </Card>
        </Grid>
      </Grid>

        {/* <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh', mt: 4, backgroundColor: "#1d4e89" }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '50%' }}>
          <Typography variant="h4" sx={{ mb: 2 }}>Saturday Schedule</Typography>
          {schedule.map((item) => (
            <Box key={item.time} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', py: 1 }}>
              <Typography 
              variant="h6"
              style={{ fontFamily: "Cambria" }}
              algin="left">
              {item.time}</Typography>
              <Typography 
              variant="h6"
              style={{ fontFamily: "Cambria" }}
              algin="right">
              {item.event}</Typography>
            </Box>
          ))}
        </Box>
      </Box> */}
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
      <Typography variant='h3' algin='center' sx={{
                  pb: 1,
                }}>About SAIL</Typography>
      </div>
      {/* <div className="section-about"> */}
<<<<<<< HEAD
      {/* <Typography variant='h3' algin='center'>About SAIL</Typography> */}
      <Box
                sx={{
                  display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
                  mx: 5,
                  alignItems: 'center',
                }}
            >
                <Question />
                <img sx={{
                  pr:3,
                }}src={beachHut} alt='beach hut' />
            </Box>
=======
      <Typography variant="h3" style={{ fontFamily: "Cambria", color:"#47827B" }} align="center">
        About Sail
      </Typography>
      <Hidden smDown>
      <Box item xs={12} sm={6}
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          ml: 5,
          alignItems: "center",
        }}
      >
        <Question />
        
        <img
          sx={{
            p: 3,
          }}
          src={beachHut}
          alt="beach hut"
        />
      </Box>
      </Hidden>
      <Hidden smUp>
        <Box sx={{
          width: "60%",
          alignItems: "center",
          marginLeft: "20%",

        }}>
          {/* <img
          sx={{
            p: 3,
          }}
          src={beachHut}
          alt="beach hut"
        /> */}
        <Question /></Box>
>>>>>>> 754b15ff1d6417871b07fa1b7d46b9a371659cc9
      
        
      </Hidden>

      {/* </div> */}
    </div>
  );
}

export default Home;
