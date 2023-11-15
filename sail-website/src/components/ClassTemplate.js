import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MyClassCard from "./ClassCard";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

const titles = [
  "TBD"
];

const descriptions = [
  "TBD"
];

const ClassTemplate = () => {
  return (
    <>
      <Grid
        container
        spacing={4}
        style={{
          paddingLeft: "40px",
          paddingRight: "40px",
          marginTop: "20px",
        }}
      >
        {titles.map((title, index) => {
          // map() is a function that takes in an array and returns a new array
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              style={{ justifyContent: "center" }}
            >
              <MyClassCard // this is a component
                title={title}
                description={descriptions[index]}
                // teacher={teachers[index]}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default ClassTemplate;
