import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

function RegisterMain() {
  return (
    <Container component="main" maxWidth="m">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 40,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* <Typography alignItems="center" component="h1" variant="h5">
            Register for an account!
        </Typography>
          <Button href="http://localhost:3000/student">
                Student Registration
            </Button>
            <Button href="http://localhost:3000/teacher">
                Teacher Registration
            </Button> */}
        <Typography alignItems="center" component="h1" variant="h5">
          Coming Soon!
        </Typography>
      </Box>
    </Container>
  );
}

export default RegisterMain;
