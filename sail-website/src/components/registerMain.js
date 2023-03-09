import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

function RegisterMain() {
<<<<<<< HEAD
    return (
        <Container component="main" maxWidth="m">
        {/* <CssBaseline /> */}
        <Box
          sx={{
            marginTop: 40,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
=======
  return (
    <div style={{ backgroundColor: '#FAD4C0', height: '100vh' }}>
      <Box
        sx={{
          marginTop: 40,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
>>>>>>> 754b15ff1d6417871b07fa1b7d46b9a371659cc9
        <Typography alignItems="center" component="h1" variant="h5">
            Register for an account!
        </Typography>
          <Button href="/student">
                Student Registration
            </Button>
            <Button href="/teacher">
                Teacher Registration
            </Button>
      </Box>
    </div>
  );
}

export default RegisterMain;
