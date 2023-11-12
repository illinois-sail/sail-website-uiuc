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
import { useMediaQuery } from "@material-ui/core";
import Paperplane from "./paperplane";
import VideoPlayer from './VideoPlayer';
import background from "../assets/final_background.png";
import homepage_image from "../assets/sail_home_image.png";


// const schedule_day_1 = [
//   { time: "8:00 AM", event: "Check-in and Breakfast" },
//   { time: "9:00 AM", event: "Opening Ceremony" },
//   { time: "9:30 AM", event: "Class #1" },
//   { time: "10:30 AM", event: "Class #2" },
//   { time: "11:30 PM", event: "RSO fair" },
//   { time: "12:00 PM", event: "Lunch" },
//   { time: "1:00 PM", event: "Class #3" },
//   { time: "2:00 PM", event: "Engineering Campus Tour" },
//   { time: "3:00 PM", event: "Prospective Student Q&A Panel" },
//   { time: "3:00 PM", event: "Admitted Student Q&A Panel"}, 
//   { time: "4:00 PM", event: "Professor Wade Talk"}, 
//   { time: "5:00 PM", event: "Closing Ceremony"}
// ];

// const schedule_day_2 = [
//   { time: "12:00 PM", event: "Opening Ceremony"},
//   { time: "12:30 PM", event: "Hackathon Starts"},
//   { time: "2:30 PM", event: "Submissions due"},
//   { time: "2:30 PM", event: "Q & A or Colleen talk"},
//   { time: "3:00 PM", event: "Present Top 3 Submissions"},
//   { time: "3:30 PM", event: "5 mins to vote for best submission"},
//   { time: "3:35 PM", event: "Present winners and prizes"}
// ]

const Home = () => {
  return (
    <div className="homepage">
        <div class="container">
          <img class="home_image" src={homepage_image}  />
          <p class="home_text">April 13-14, 2024</p>
        </div>
    </div>
  );
};

export default Home;


