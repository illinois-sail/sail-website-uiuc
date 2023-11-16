import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ClassCard from "./ClassCard";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import background from "../assets/final_background.png";

const titles = [
  "Example Class 1", "Example Class 2", "Example Class 3", "Example Class 4", "Example Class 5", "Example Class 6", "Example Class 7", "Example Class 8", "Example Class 9", "Example Class 10", "Example Class 11", "Example Class 12", "Example Class 13", "Example Class 14", "Example Class 15", "Example Class 16", "Example Class 17", "Example Class 18", "Example Class 19", "Example Class 20", "Example Class 21", "Example Class 22", "Example Class 23", "Example Class 24", "Example Class 25", "Example Class 26", "Example Class 27", "Example Class 28", "Example Class 29", "Example Class 30", "Example Class 31", "Example Class 32", "Example Class 33", "Example Class 34", "Example Class 35", "Example Class 36", "Example Class 37", "Example Class 38", "Example Class 39", "Example Class 40", "Example Class 41", "Example Class 42", "Example Class 43", "Example Class 44", "Example Class 45", "Example Class 46", "Example Class 47", "Example Class 48", "Example Class 49", "Example Class 50"
];

const rooms = [
  "Room 1021", "Room 1022", "Room 1023", "Room 1024", "Room 1025", "Room 1026", "Room 1027", "Room 1028", "Room 1029", "Room 1030", "Room 1031", "Room 1032", "Room 1033", "Room 1034", "Room 1035", "Room 1036", "Room 1037", "Room 1038", "Room 1039", "Room 1040", "Room 1041", "Room 1042", "Room 1043", "Room 1044", "Room 1045", "Room 1046", "Room 1047", "Room 1048", "Room 1049", "Room 1050", "Room 1051", "Room 1052", "Room 1053", "Room 1054", "Room 1055", "Room 1056", "Room 1057", "Room 1058", "Room 1059", "Room 1060", "Room 1061", "Room 1062", "Room 1063", "Room 1064", "Room 1065", "Room 1066", "Room 1067", "Room 1068", "Room 1069", "Room 1070"
];

const times = [
  "12:01", "12:02", "12:03", "12:04", "12:05", "12:06", "12:07", "12:08", "12:09", "12:10", "12:11", "12:12", "12:13", "12:14", "12:15", "12:16", "12:17", "12:18", "12:19", "12:20", "12:21", "12:22", "12:23", "12:24", "12:25", "12:26", "12:27", "12:28", "12:29", "12:30", "12:31", "12:32", "12:33", "12:34", "12:35", "12:36", "12:37", "12:38", "12:39", "12:40", "12:41", "12:42", "12:43", "12:44", "12:45", "12:46", "12:47", "12:48", "12:49", "12:50"
];

// const descriptions = [

// ]; // make an array of descriptions that is TBD 50 times
const descriptions = ["TBD"];
descriptions.length = 50;
descriptions.fill("TBD");

const ClassTemplate = () => {
  return (
    <div className="WholeGrid" style={{ paddingTop: "5vh", paddingBottom: "5vh" }}>
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
              <ClassCard 
                className={title}
                room={rooms[index]}
                time={times[index]}
                description={descriptions[index]}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default ClassTemplate;
