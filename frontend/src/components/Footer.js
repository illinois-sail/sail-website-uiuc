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
import tiktokImage from "../assets/tiktok.svg";
import emailImage from "../assets/email.svg";
import instagramImage from "../assets/instagram.svg";

const footerButton = (props) => {
  const { href, src, text } = props;
  return (
    <Button
      sx={{ backgroundColor: "purple", "&:hover": {
        backgroundColor: "#7df0db",
      }, color: "#333" }}
      variant="contained"
    >
      <Link
        href={href}
        variant="body1"
        underline="none"
      >
        <img src={src} alt={text} style={{ width: "1.5em", height: "1.5em" }} />
      </Link>
    </Button>
  )
}

const Footer = () => {
  return (
    <Box color="transparent" py={4} style={{  }}>
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
            <footerButton href="https://www.instagram.com/cs_sail/" src={instagramImage} text="Instagram" />
            <footerButton href="mailto:sail.cs.illinois@gmail.com" src={emailImage} text="Email" />
            <footerButton href="https://www.tiktok.com/@cs_sail" src={tiktokImage} text="TikTok" />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;