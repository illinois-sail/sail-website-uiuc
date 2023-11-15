import Typography from "@mui/material/Typography";
import "./Home.css";
import "../fonts.css";
import VideoPlayer from './VideoPlayer';
import HomePageTitle from "./HomePageTitle";


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
          {/* <img class="home_image" src={homepage_image}  /> */}
          {/* <h1 class="title_text">SAIL 2024</h1> */}
          <HomePageTitle />
          <p class="home_text">April 13-14, 2024</p>
        </div>
        <div class="video_div">
          {/* <p class="video_header">YOUR JOURNEY STARTS HERE</p> */}
          <Typography
            class="video_header"
            variant="h1"
            style={{
              fontFamily: "Magz",
              color: "white",
              marginTop: "0",
              paddingTop: "0"
            }}
            align="center"
          >
            YOUR JOURNEY STARTS HERE
          </Typography>
          <p class="video_subheader">place holder text dicuss with marketing</p>
          <div class="video_embded_div">
            <VideoPlayer />
          </div>
        </div>
        {/* <Footer /> */}
    </div>
  );
};

export default Home;


