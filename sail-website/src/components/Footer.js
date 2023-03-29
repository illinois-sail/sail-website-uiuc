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
const Footer = () => {
  return (
    <Box color="transparent" py={4} style={{ marginBottom: "5em" }}>
      <Typography
        variant="h2"
        style={{
          fontFamily: "sergiotrendy",
          color: "#64b6ac",
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
              sx={{ backgroundColor: "#64b6ac", color: "#333" }}
              variant="contained"
              href="/student"
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
              sx={{ backgroundColor: "#64b6ac", color: "#333" }}
              variant="contained"
              href="/teacher"
            >
              <Link
                href="https://www.instagram.com/illinois_cs_sail/"
                variant="body1"
                underline="none"
              >
                <InstagramIcon style={{ color: "white" }} />
              </Link>
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
