import Typography from "@mui/material/Typography";
import "./AboutUs.css";
import "../fonts.css";
import React from 'react';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

function AboutUs() {
    const teamMembers = [
        { name: 'Spencer', role: 'President', image: '/sail-website-uiuc/frontend/src/components/images/spencer.jpg' },
        { name: 'Helen', role: 'Vice President', image: '/sail-website-uiuc/frontend/src/components/images/spencer.jpg' },
    ];

    return (
        <div className="aboutuspage">
            <div className="aboutusdivider">
                <h1 class="aboutus_text">About Us</h1>
                <div class="container">
                    <h3 class="aboutus_text">About SAIL</h3>
                    <p class="aboutus_text">~SAIL awesomeness spiel~</p>
                </div>
                <div class="container">
                    <h3 class="aboutus_text">Who is SAIL?</h3>
                    <p class="aboutus_text">~SAIL awesomeness spiel~</p>
                </div>
                <div class="container">
                    <h3 class="aboutus_text">What is SAIL?</h3>
                    <p class="aboutus_text">~SAIL awesomeness spiel~</p>
                </div>
                <div class="container">
                    <h3 class="aboutus_text">When and where is SAIL held?</h3>
                    <p class="aboutus_text">~SAIL awesomeness spiel~</p>
                </div>
            </div>
            <div className="aboutusdivider">
                <h1 class="aboutus_text">Meet the Team</h1>
                <div class="container">
                    <p class="aboutus_text">President</p>
                </div>
            </div>
        </div>
    );
};

export default Home;


