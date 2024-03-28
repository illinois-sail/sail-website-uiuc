import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { Stack } from "@mui/system";
import { Button, Grid } from "@mui/material";
// import Grid from '@mui/material';
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import Paper from "@mui/material/Paper";
import FontAwesomeIcon from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <Box color="transparent" py={4} style={{ marginBottom: "5em" }}>
      <Typography
        variant="h2"
        style={{
          fontFamily: "Magz",
          color: "white",
          marginTop: "0.3em",
        }}
        align="center"
      >
        Contact Us
      </Typography>

      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={3}>
          <Stack direction="row" spacing={2}>
            <Button
              sx={{ backgroundColor: "purple", "&:hover": {
                backgroundColor: "#7df0db",
              }, color: "#333", 
              marginRight: auto, marginLeft: auto}}
              variant="contained"
            >
              <Link
                href="mailto: sail.cs.illinois@gmail.com"
                variant="body1"
                underline="none"
              >
                <EmailIcon style={{ color: "white" }} />
              </Link>
            </Button>
            <Button
              sx={{ backgroundColor: "purple", "&:hover": {
                backgroundColor: "#7df0db",
              }, color: "#333", 
              marginRight: auto, marginLeft: auto}}
              variant="contained"
            >
              <Link
                href="https://www.instagram.com/illinois_cs_sail/"
                variant="body1"
                underline="none"
              >
              <InstagramIcon style={{ color: "white" }} />
              </Link>
            </Button>
            <Button
              sx={{ backgroundColor: "purple", "&:hover": {
                backgroundColor: "#7df0db",
              }, color: "#333", 
              marginRight: auto, marginLeft: auto}}
              variant="contained"
            >
              <Link
                href="https://www.instagram.com/illinois_cs_sail/"
                variant="body1"
                underline="none"
              >
                <img src = "tiktok.svg" alt = "Tiktok logo"></img>
              </Link>
            </Button>
            
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
