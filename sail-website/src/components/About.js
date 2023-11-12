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
        <div style={{  }} >
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

export default About;