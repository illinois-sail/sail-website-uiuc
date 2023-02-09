import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function SignUp() {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  return (
    // <Box  sx= {
    //   {
    //     backgroundImage: `url(${"https://raw.githubusercontent.com/illinois-sail/sail-website-uiuc/ac-homepage/sail-website/src/Modern%20Game%20Club%20Basketball%20Sport%20Logo(3)%202.png"})`,
    //     backgroundColor: '#FAD4C0',
    //     width: '100%',
    //     height: '100vh',
    //     backgroundSize: 'cover',
    //   }
    // }>
    //   <Container component="main" maxWidth="xs">
    //     <CssBaseline />
    //     <Box
    //       sx={{
    //         marginTop: 8,
    //         display: 'flex',
    //         flexDirection: 'column',
    //         alignItems: 'center',
    //       }}
    //     >
    //       <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
    //         <LockOutlinedIcon />
    //       </Avatar>
    //       <Typography component="h1" variant="h5">
    //         Login
    //       </Typography>
    //       <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
    //         <Grid container spacing={2}>
    //           <Grid item xs={12} sm={6}>
    //             <TextField
    //               autoComplete="given-name"
    //               name="firstName"
    //               required
    //               fullWidth
    //               id="firstName"
    //               label="First Name"
    //               autoFocus
    //             />
    //           </Grid>
    //           <Grid item xs={12} sm={6}>
    //             <TextField
    //               required
    //               fullWidth
    //               id="lastName"
    //               label="Last Name"
    //               name="lastName"
    //               autoComplete="family-name"
    //             />
    //           </Grid>
    //           <Grid item xs={12}>
    //             <TextField
    //               required
    //               fullWidth
    //               id="email"
    //               label="Email Address"
    //               name="email"
    //               autoComplete="email"
    //             />
    //           </Grid>
    //           <Grid item xs={12}>
    //             <TextField
    //               required
    //               fullWidth
    //               name="password"
    //               label="Password"
    //               type="password"
    //               id="password"
    //               autoComplete="new-password"
    //             />
    //           </Grid>
    //         </Grid>
    //         <Button
    //           type="submit"
    //           fullWidth
    //           variant="contained"
    //           sx={{ mt: 3, mb: 2 }}
    //         >
    //           Log In
    //         </Button>
    //         <Grid container justifyContent="flex-end">
    //           <Grid item>
    //             <Link href="http://localhost:3000/register" variant="body1">
    //               Need an account? Sign up!
    //             </Link>
    //           </Grid>
    //           <Grid item sx={{ mx: 4, mb: 2 }}>
    //             <Link href="#" variant="body1">
    //              Reset password
    //             </Link>
    //           </Grid>
    //         </Grid>
    //       </Box>
    //     </Box>
    //   </Container>
    //   </Box>

    // Temporary Template
    <div style={{ backgroundColor: '#FAD4C0', height: '100vh' }}>
      <Box
        sx={{
          marginTop: 40,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography style={{ fontFamily: 'Cambria'}} align="center" variant="h4">
          Coming Soon!
        </Typography>
      </Box>
    </div>
  );
}
