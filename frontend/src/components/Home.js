import Typography from "@mui/material/Typography";
import "./Home.css";
import "../fonts.css";
import VideoPlayer from './VideoPlayer';
// import React, { useEffect, useState } from 'react';
import React, { useEffect } from 'react';
import homepage_image from '../assets/logosvg.svg'
import { useAuth } from './AuthContext';
import FAQ from './faq';
import Carousel from './Carousel';


const imagesContext = require.context('./gallery_photos', false, /\.(png|jpg)$/);
const carouselImages = imagesContext.keys().map(imagesContext);


function Home() {

  return (
    <div className="homepage">
        <div class="container">
        <div className="logo-container" style={{ width: "100%", alignContent: "center", alignItems: "center", display: "flex", justifyContent: "center" }}>
          <img style={{ width: "100%", height: "auto" }} src={homepage_image} alt="SAIL 2024 Logo" />
        </div>

          <p class="home_text">April 13-14, 2024</p>
        </div>
        <div class="container" style={{marginTop: "60px"}}>
          <div style={{ width: "40vw", alignContent: "center", alignItems: "center", display: "flex", justifyContent: "center", marginBottom: "-5%", marginTop: "5%" }}>
            <p class="home_title">Schedule</p>
          </div>
          <p class="home_subtitle">Day 1</p>
          <table class="schedule-table">
            <tr>
              <th class="table_head">Time</th>
              <th class="table_head">Student Activities</th>
            </tr>
            <tr>
              <td>8:00am</td>
              <td>Check-in, Breakfast, and RSO fair</td>
            </tr>
            <tr>
              <td>9:30am</td>
              <td>Opening Ceremony<br/><span class="note" style={{ fontFamily: "JetBrainsMono" }}>(Room 1404)</span></td>
            </tr>
            <tr>
              <td>10:00am</td>
              <td>Class #1</td>
            </tr>
            <tr>
              <td>11:00am</td>
              <td>Class #2<br/></td>
            </tr>
            <tr>
              <td rowspan="2">12:00pm</td>
              <td>Lunch (Group X)<br/><span class="note" style={{ fontFamily: "JetBrainsMono" }}>(Room 1404)</span></td>
            </tr>
            <tr>
              <td>Tour (Group Y)</td>
            </tr>
            <tr>
              <td>1:00pm</td>
              <td>Lunch (Group Y)<br/>Tour (Group X)</td>
            </tr>
            <tr>
              <td>2:00pm</td>
              <td>Class #3</td>
            </tr>
            <tr>
              <td rowspan="2">3:00pm</td>
              <td>Prospective Student Q&A Panel</td>
            </tr>
            <tr>
              <td>Admitted Student Q&A Panel</td>
            </tr>
            <tr>
              <td>4:00pm</td>
              <td>Professor Wade Talk<br/><span class="note" style={{ fontFamily: "JetBrainsMono" }}>(Room 1404)</span></td>
            </tr>
          </table>

          <p class="home_subtitle">Parent Track</p>
          <table class="schedule-table">
            <tr>
              <th class="table_head">Time</th>
              <th class="table_head">Parent Activities</th>
            </tr>
            <tr>
              <td>8:00am</td>
              <td>Breakfast</td>
            </tr>
            <tr>
              <td>9:30am</td>
              <td>Opening Ceremony<br/><span class="note" style={{ fontFamily: "JetBrainsMono" }}>(Room 1404)</span></td>
            </tr>
            <tr>
              <td>10:00am</td>
              <td>Parent Q & A<br/><span class="note" style={{ fontFamily: "JetBrainsMono" }}>(Room 1404)</span></td>
            </tr>
            <tr>
              <td>11:00am</td>
              <td>Free to Explore Campus!<br/></td>
            </tr>
          </table>

          <p class="home_subtitle">Day 2</p>
          <table class="schedule-table">
            <tr>
              <th class="table_head">Time</th>
              <th class="table_head">Student Activities</th>
            </tr>
            <tr>
              <td>12:00pm</td>
              <td>Opening Ceremony</td>
            </tr>
            <tr>
              <td>12:30pm</td>
              <td>Virtual Class #1</td>
            </tr>
            <tr>
              <td>1:30pm</td>
              <td>Virtual Class #2</td>
            </tr>
            <tr>
              <td>2:30pm</td>
              <td>Q&A Panel</td>
            </tr>
            <tr>
              <td>3:30pm</td>
              <td>Closing Ceremony</td>
            </tr>
          </table>
        </div>
        
        <div class="container">
          <div style={{ width: "40vw", alignContent: "center", alignItems: "center", display: "flex", justifyContent: "center" }}>
            <p class="home_title">Gallery</p>
          </div>
          <div class="carousel_container">
            <div style={{ width: "40vw", alignContent: "center", alignItems: "center", display: "flex", justifyContent: "center" }}>
              <Carousel images={carouselImages} />
            </div>
          </div>
        </div>
    </div>
  );
};

export default Home;


