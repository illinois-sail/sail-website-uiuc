import Typography from "@mui/material/Typography";
import "./Home.css";
import "../fonts.css";
import VideoPlayer from './VideoPlayer';
import HomePageTitle from "./HomePageTitle";

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
    </div>
  );
};

export default Home;


