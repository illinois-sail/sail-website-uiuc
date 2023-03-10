import Typography from "@mui/material/Typography";
import Question from "./Questions";
import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import "./Home.css";
import SergioTrendy from "../SergioTrendy.ttf";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import Hidden from "@mui/material/Hidden";
import "../fonts.css";
import { ReactComponent as Plane } from "./paper-plane-small.svg";
import { useMediaQuery } from '@material-ui/core';


// function MyComponent() {
//   const isMobile = useMediaQuery('(max-width:600px)'); // adjust the max-width to your desired breakpoint
// };

const theme = createTheme({
  typography: {
    fontFamily: "MyFont, Arial, sans-serif",
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "MyFont, Arial, sans-serif",
        },
      },
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [
          {
            fontFamily: "sergio",
            src: `url(${SergioTrendy})`,
          },
        ],
      },
    },
  },
});

const schedule = [
  { time: "9:00 AM", event: "Checkin and Breakfast" },
  { time: "9:45 AM", event: "Opening Ceremony" },
  { time: "10:00 AM", event: "Class #1" },
  { time: "11:00 AM", event: "Class #2" },
  { time: "12:00 PM", event: "Lunch" },
  { time: "1:00 PM", event: "Class #3" },
  { time: "3:30 PM", event: "Student Q & A Panel" },
  { time: "4:30 PM", event: "Faculty Talk" },
  { time: "5:20 PM", event: "Closing Ceremony" },
];

const Home = () => {
  const isMobile = useMediaQuery('(max-width:600px)'); // adjust the max-width to your desired breakpoint
  return (
    // <div>
    <div className="homepage">
      <ThemeProvider theme={theme}>
        <div style={{ paddingTop: "2.5%" }}>
        {isMobile ? null : (
        <Paper
          sx={{
            width: '25%',
            alignItems: 'center',
            marginBottom: '2.5%',
            marginLeft: '37.5%',
            marginRight: '37.5%',
            backgroundColor: 'transparent',
            boxShadow: '0 10px 10px rgba(0, 0, 0, 0.25)',
            border: '10px solid #64b6ac',
            borderRadius: '20%',
          }}
        >
          {isMobile ? null : (
          <Plane style={{ scale: { xs: '0.6', sm: '0.8' } }} />
          )}
          {isMobile ? true : (
          <Typography
            variant="h3"
            style={{
              fontFamily: 'sergiotrendy',
              fontStyle: '',
              paddingBottom: '0.1em',
              paddingTop: '0.1em',
              '@media (max-width: 600px)': {
                fontSize: '0.2rem', // font size for screens smaller than 600px
              },
            }}
            color="#64b6ac"
          >
            SAIL 2023
          </Typography>
          )}
          
        </Paper>
        )}
        {/* <SAIL>SAIL 2023</SAIL> */}
        {isMobile ? (
  <Typography
    variant="h3"
    style={{
      fontFamily: 'sergiotrendy',
      fontStyle: '',
      paddingBottom: '0.1em',
      paddingTop: '0.1em',
      '@media (max-width: 600px)': {
        fontSize: '0.2rem', // font size for screens smaller than 600px
      },
    }}
    color="#64b6ac"
  >
    SAIL 2023
  </Typography>
) : null}
        </div>
      </ThemeProvider>
      <div style={{}} className="info">
        <Paper
          sx={{
            width: "60%",
            // height : "60%",
            // align: "center",
            alignItems: "center",
            marginTop: "0%",
            marginBottom: "10%",
            marginLeft: "20%",
            marginRight: "20%",
            backgroundColor: "#64b6ac",
            boxShadow: "0 10px 10px rgba(0, 0, 0, 0.35)",
            border: "10px solid #64b6ac",
            borderRadius: "20%",
            // padding: "0.5em 0em"
          }}
        >
          <Typography
            variant="h3"
            style={{
              fontFamily: "sergiotrendy",
              paddingBottom: "0.2em",
              color: "white",
            }}
            algin="center"
            color={"#47827B"}
          >
            Welcome Fellow Sailors!
          </Typography>
          <Typography
            variant="h6"
            style={{ fontFamily: "Cascadia Code", paddingBottom: "0.2em" }}
            algin="center"
            color={"#376661"}
          >
            This is Illinois Computer Science Sail! We are an entirely
            student-run organization that hosts an annual event where high
            schoolers have the chance to experience what it is like to be a
            computer science student at the University of Illinois at
            Urbana-Champaign. Without further ado, let's get started!
          </Typography>
        </Paper>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} sm={6}>
            <Card
              sx={{
                borderRadius: "10px",
                p: 2,
                backgroundColor: "#c0fbfd",
                marginLeft: "20px",
                marginRight: "20px",
                height: "90%",
              }}
            >
              <Typography
                variant="h3"
                style={{ fontFamily: "sergiotrendy", color: "#1d4e89" }}
                sx={{ mb: 2 }}
              >
                Saturday Schedule
              </Typography>
              {schedule.map((item) => (
                <Box
                  key={item.time}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    py: 1,
                    alignItems: "center",
                    borderBottom: "1px solid #1d4e89",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{ fontFamily: "Cascadia Code", color: "#1d4e89" }}
                    sx={{ textAlign: "left" }}
                  >
                    {item.time}
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{ fontFamily: "Cascadia Code", color: "#1d4e89" }}
                    sx={{ textAlign: "right" }}
                  >
                    {item.event}
                  </Typography>
                </Box>
              ))}
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card
              sx={{
                borderRadius: "10px",
                p: 2,
                backgroundColor: "#c0fbfd",
                marginLeft: "20px",
                marginRight: "20px",
                height: "90%",
              }}
            >
              <Typography
                variant="h3"
                style={{ fontFamily: "sergiotrendy", color: "#1d4e89" }}
                sx={{ mb: 2 }}
              >
                Sunday Schedule
              </Typography>
              <Typography
                variant="h4"
                style={{ fontFamily: "Cascadia Code", color: "#1d4e89" }}
                sx={{ textAlign: "center center", paddingTop: "25%" }}
              >
                Virtual mini-hackathon day!
              </Typography>
              <Typography
                variant="h5"
                style={{ fontFamily: "Cascadia Code", color: "#1d4e89" }}
                sx={{ textAlign: "center center" }}
              >
                Keep your calendars open for 12-3pm. Details will be posted
                soon....
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </div>
      <Typography
        variant="h2"
        style={{
          fontFamily: "sergiotrendy",
          color: "#64b6ac",
          marginTop: "0.3em",
        }}
        align="center"
      >
        About Sail
      </Typography>
      <Hidden smDown>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ marginTop: "0.5em" }}
        >
          <Grid item xs={3} style={{ width: "50%" }}>
            <Question />
          </Grid>
        </Grid>
      </Hidden>
      <Hidden smUp>
        <Box
          sx={{
            width: "60%",
            alignItems: "center",
            marginLeft: "20%",
          }}
        >
          <Question />
        </Box>
      </Hidden>
    </div>
  );
};

export default Home;