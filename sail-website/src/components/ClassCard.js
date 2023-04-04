import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./ClassCard.css";
const ClassCard = (props) => {
  return (
    <Card className="card-style">
      <CardActionArea>
        <CardContent>
          <Typography
            variant="h6"
            className="title" 
          >
            {props.title}
          </Typography>
          <Typography
            variant="h7"
            className="teacher" 
          >
            {props.teacher}
          </Typography>
          <Typography
            variant="body2"
            className="desc"
          >
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ClassCard;
