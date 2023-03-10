import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
//backend code from django_React_login
import { useState } from "react";

const Login = () => {
  // backend code from django-react-login
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const { email, password, firstName, lastName } = formData;

  const onChangeForm = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    });
  };

  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const firstNameChangeHandler = (event) => {
  //   setFirstName(event.target.value);
  //   console.log(firstName);
  // };

  // const lastNameChangeHandler = (event) => {
  //   setLastName(event.target.value);
  //   console.log(lastName);
  // };

  // const emailChangeHandler = (event) => {
  //   setEmail(event.target.value);
  //   console.log(email);
  // };

  // const passwordChangeHandler = (event) => {
  //   setPassword(event.target.value);
  //   console.log(password);
  // };

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const data = {
  //     firstName: firstName,
  //     lastName: lastName,
  //     email: email,
  //     password: password,
  //   }
  //   console.log(data);
  //   setEmail('');
  //   setPassword('');
  //   setFirstName('');
  //   setLastName('');
  // }

  // if (isAuthenticated){
  //   return <Navigate to='/home' />
  // }

  return (
    <div>
    <Box
      sx={{
        // backgroundImage: `url(${"https://raw.githubusercontent.com/illinois-sail/sail-website-uiuc/ac-homepage/sail-website/src/Modern%20Game%20Club%20Basketball%20Sport%20Logo(3)%202.png"})`,
        // backgroundColor: "#FAD4C0",
        // width: "100%",
        // height: "100vh",
        // backgroundSize: "cover",
        // backgroundImage: `url(${'./login_page2.png'})`,
      }}
    >
      <Container component="main" maxWidth="xs">
        {/* <CssBaseline /> */}
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#64b6ac" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography color='#64b6ac' component="h1" variant="h5" sx={{fontFamily:'sergiotrendy', paddingBottom: 2 , fontSize: 50}}>
            Login
          </Typography>
          <Box component="form" onSubmit={onSubmitForm} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={firstName}
                  onChange={onChangeForm}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={lastName}
                  onChange={onChangeForm}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={onChangeForm}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={onChangeForm}
                  minLength="6"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{fontfamily: 'avenir',backgroundColor:'#64b6ac',mt: 3, mb: 2}} 
            >
              <Typography sx={{ fontWeight: 'bold' }}color='#fff' fontFamily='Avenir'>Login</Typography>
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/register" variant="body1">
                <Typography sx={{ fontWeight: 'bold'}}color='#64b6ac' fontFamily='Avenir'>Don't Have an Account? Sign Up</Typography>
                </Link>
              </Grid>
              <Grid item sx={{ mx: 2, mb: 2 }}>
                <Link href="/reset-password" variant="body1">
                <Typography sx={{ fontWeight: 'bold' }}color='#64b6ac' fontFamily='Avenir'>Forgot Password</Typography>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  </div>
  );
};

// const mapStateToProps = state => ({
//   isAuthenticated: state.auth.isAuthenticated
// });
export default Login;
//backend code from react-django-login
//export default connect(mapStateToProps, { login })(Login);
{/* <Link href="/register" variant="body1">
                <Typography sx={{ fontWeight: 'bold' }}color='#64b6ac' fontFamily='Avenir'>Don't Have an Account? Sign Up</Typography>
                </Link> */}