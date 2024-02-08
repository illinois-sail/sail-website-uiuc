import Typography from "@mui/material/Typography";
import "./AboutUs.css";
import "../fonts.css";
import VideoPlayer from './VideoPlayer';
import React from 'react';

function AboutUs() {
  return (
    <div className="aboutuspage">
        <div class="container">
          <p class="aboutus_text">About Us</p>
        </div>
        <div class="video_div">
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


