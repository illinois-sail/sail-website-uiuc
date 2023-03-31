import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
const ClassTemplate = () => {
  return (
    <div>
      <Container component="main" maxWidth="s">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            color="#64b6ac"
            component="h1"
            variant="h5"
            sx={{
              fontFamily: "sergiotrendy",
              paddingBottom: 2,
              fontSize: 45,
              marginTop: "20%",
              textAlign: "center",
            }}
          >
            Classes Page Coming Soon!
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default ClassTemplate;
