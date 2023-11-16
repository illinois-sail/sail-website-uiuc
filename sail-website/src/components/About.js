import React from "react";
import Typography from "@mui/material/Typography";
import Question from "./Questions";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./Home.css";
import Hidden from "@mui/material/Hidden";
import "../fonts.css";
import background from "../assets/final_background.png";


const About = () => {
    return (
        <div style={{ paddingTop: "8vh" }}>
            <Typography
                variant="h2"
                style={{
                fontFamily: "JetBrainsMono",
                color: "white",
                marginTop: "0.3em",
                }}
                align="center"
            >
                ABOUT SAIL
            </Typography>
            
        </div>
    );
};

export default About;