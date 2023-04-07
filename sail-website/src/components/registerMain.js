import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import "../fonts.css";
function RegisterMain() {
  return (
    <div style={{ backgroundColor: "#FDE5C1", height: "100vh" }}>
      <Box
        sx={{
          // marginTop: 40,
          marginBottom: "-4",
          height: "0%",
          // width:'0%',
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            // marginTop: 5,
            marginTop: 30,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#64b6ac",
            padding: 4,
            borderRadius: 4,
            boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography
            color="#fff"
            component="h1"
            variant="h5"
            sx={{ fontFamily: "sergiotrendy", paddingBottom: 2, fontSize: 30 }}
          >
            Register for Sail 2023!
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button
              sx={{ fontfamily: "avenir", backgroundColor: "#fff00" }}
              variant="contained"
              href="/student"
            >
              <Typography
                sx={{ fontWeight: "bold" }}
                color="#ffffff"
                fontFamily="cascadiacode"
              >
                Student Registration
              </Typography>
            </Button>
            <Button sx={{backgroundColor:'#fff00'}} variant="contained" href="https://docs.google.com/forms/d/e/1FAIpQLSd9UcCW6uN0QeCqqtQGzuipCsYnkKrg7M7q3Gb33wceqgda6g/viewform" target="_blank">
            <Typography sx={{ fontWeight: 'bold' }}color='#ffffff' fontFamily='cascadiacode'>Parent Registration</Typography>
            </Button>
            <Button sx={{backgroundColor:'#fff00'}} variant="contained" href="https://docs.google.com/forms/d/e/1FAIpQLSdpaxpnOGMxaaNAhNVNDaIEnamXgNnIxpl_jM-MTWoXazR8mw/viewform" target="_blank">
            <Typography sx={{ fontWeight: 'bold' }}color='#ffffff' fontFamily='cascadiacode'>Virtual Hackathon Registration</Typography>
            </Button>
          </Stack>
        </Box>
      </Box>
    </div>
    //Template
    // <div>
    //   <Container component="main" maxWidth="s">
    //     <Box
    //       sx={{
    //         display: "flex",
    //         flexDirection: "column",
    //         alignItems: "center",
    //       }}
    //     >
    //       <Typography
    //         color="#64b6ac"
    //         component="h1"
    //         variant="h5"
    //         sx={{
    //           fontFamily: "sergiotrendy",
    //           paddingBottom: 2,
    //           fontSize: 45,
    //           marginTop: "20%",
    //           textAlign: "center",
    //         }}
    //       >
    //         Registration Opening Soon!
    //       </Typography>
    //     </Box>
    //   </Container>
    // </div>
  );
}

export default RegisterMain;
