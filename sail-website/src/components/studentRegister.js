import React from "react";
import { useState } from "react";
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
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "../App.css";
const Register = () => {
  // add these fields below to the form
  // ['gender', 'dietary_restrictions', 'shirt_size', 
  //'home_city', 'home_state', 'home_zip_code', 'high_school', 'year_in_school', 
  //'phone_number', 'parent_name', 'parent_phone_number',
  //'parent_email', 'admitted_student', 'parent_attending']
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmpassword: "",
    state: "",
    city: "",
    zip: "",
    gender: "",
    dietary_restrictions: "",
    shirt_size: "",
    high_school: "",
    year_in_school: "",
    phone_number: "",
    parent_name: "",
    parent_phone_number: "",
    parent_email: "",
    admitted_student: "",
    parent_attending: "",
  });

  const {
    email,
    password,
    firstName,
    lastName,
    confirmpassword,
    state,
    city,
    zip,
    gender,
    dietary_restrictions,
    shirt_size,
    high_school,
    year_in_school,
    phone_number,
    parent_name,
    parent_phone_number,
    parent_email,
    admitted_student,
    parent_attending,
  } = formData;

  const onChangeForm = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      alert("Passwords do not match");
    } else {
      console.log(formData);
      setFormData({
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      confirmpassword: "",
      state: "",
      city: "",
      zip: "",
      gender: "",
      dietary_restrictions: "",
      shirt_size: "",
      high_school: "",
      year_in_school: "",
      phone_number: "",
      parent_name: "",
      parent_phone_number: "",
      parent_email: "",
      admitted_student: "",
      parent_attending: false,
      });
    }

  };

  return (
    <Box
      sx={{
        backgroundColor: "##FDE5C1",
        width: "100%",
        height: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
      }}
    >
      <Container component="main">
        {/* <CssBaseline /> */}
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, backgroundColor: '#64b6ac'}}></Avatar>
          <Typography textAlgin='center' color='#64b6ac' component="h1" variant="h5" sx={{fontFamily:'sergiotrendy', paddingBottom: 2 , fontSize: 50}}>
            Student Registration
          </Typography>
          <Box
            component="form"
            onSubmit={onSubmitForm}
            sx={{ mt: 3}}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  value={firstName}
                  onChange={onChangeForm}
                  style={{backgroundColor: "white"}}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  value={lastName}
                  onChange={onChangeForm}
                  autoComplete="family-name"
                  style={{backgroundColor: "white"}}
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
                  style={{backgroundColor: "white"}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={password}
                  onChange={onChangeForm}
                  autoComplete="new-password"
                  style={{backgroundColor: "white"}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmpassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmpassword"
                  value={confirmpassword}
                  onChange={onChangeForm}
                  autoComplete="new-password"
                  style={{backgroundColor: "white"}}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    name="gender"
                    id="demo-simple-select"
                    value={gender}
                    label="Gender"
                    onChange={onChangeForm}
                    style={{backgroundColor: "white"}}
                  >
                    <MenuItem value={"male"}>Male</MenuItem>
                    <MenuItem value={"female"}>Female</MenuItem>
                    <MenuItem value={"non-binary"}>Non-Binary</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="state"
                  label="Home State"
                  type="state"
                  id="state"
                  autoComplete="state"
                  value={state}
                  onChange={onChangeForm}
                  style={{backgroundColor: "white"}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="city"
                  label="Home City"
                  type="city"
                  id="city"
                  autoComplete="city"
                  value={city}
                  onChange={onChangeForm}
                  style={{backgroundColor: "white"}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="zip"
                  label="Home Zip Code"
                  type="zip"
                  id="zip"
                  autoComplete="zip code"
                  value={zip}
                  onChange={onChangeForm}
                  style={{backgroundColor: "white"}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="high_school"
                  label="High School"
                  type="high_school"
                  id="high_school"
                  autoComplete="high_school"
                  value={high_school}
                  onChange={onChangeForm}
                  style={{backgroundColor: "white"}}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Admitted to UIUC</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    name="admitted_student"
                    id="demo-simple-select"
                    value={admitted_student}
                    label="Admitted to UIUC"
                    onChange={onChangeForm}
                    style={{backgroundColor: "white"}}
                  >
                    <MenuItem value={"Yes"}>Yes</MenuItem>
                    <MenuItem value={"No"}>No </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Year in School</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    name="year_in_school"
                    id="demo-simple-select"
                    value={year_in_school}
                    label="Year in School"
                    onChange={onChangeForm}
                    style={{backgroundColor: "white"}}
                  >
                    <MenuItem value={"male"}>Freshman</MenuItem>
                    <MenuItem value={"female"}>Sophomore</MenuItem>
                    <MenuItem value={"non-binary"}>Junior</MenuItem>
                    <MenuItem value={"non-binary"}>Senior</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phone_number"
                  label="Phone Number"
                  type="phone_number"
                  id="phone_number"
                  autoComplete="phone_number"
                  value={phone_number}
                  onChange={onChangeForm}
                  style={{backgroundColor: "white"}}
                />
                </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="parent_name"
                  label="Parent Name"
                  type="parent_name"
                  id="parent_name"
                  autoComplete="parent_name"
                  value={parent_name}
                  onChange={onChangeForm}
                  style={{backgroundColor: "white"}}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Parent Attending Sail Parent Session</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    name="parent_attending"
                    id="demo-simple-select"
                    value={parent_attending}
                    label="Parent Attending Sail Parent Session"
                    onChange={onChangeForm}
                    style={{backgroundColor: "white"}}
                  >
                    <MenuItem value={"Yes"}>Yes, my parent will be attending the Sail Parent Session</MenuItem>
                    <MenuItem value={"No"}>No</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="parent_phone_number"
                  label="Parent Phone Number"
                  type="parent_phone_number"
                  id="parent_phone_number"
                  autoComplete="parent_phone_number"
                  value={parent_phone_number}
                  onChange={onChangeForm}
                  style={{backgroundColor: "white"}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required 
                  fullWidth
                  name="parent_email"
                  label="Parent Email"
                  type="parent_email"
                  id="parent_email"
                  autoComplete="parent_email"
                  value={parent_email}
                  onChange={onChangeForm}
                  style={{backgroundColor: "white"}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="dietary_restrictions"
                  label="Dietary Restrictions"
                  type="dietary_restrictions"
                  id="dietary_restrictions"
                  autoComplete="dietary_restrictions"
                  value={dietary_restrictions}
                  onChange={onChangeForm}
                  style={{backgroundColor: "white"}}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Shirt Size</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    name="shirt_size"
                    id="demo-simple-select"
                    value={shirt_size}
                    label="Shirt Size"
                    onChange={onChangeForm}
                    style={{backgroundColor: "white"}}
                  >
                    <MenuItem value={"xs"}>XS</MenuItem>
                    <MenuItem value={"s"}>S</MenuItem>
                    <MenuItem value={"m"}>M</MenuItem>
                    <MenuItem value={"l"}>L</MenuItem>
                    <MenuItem value={"xl"}>XL</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{fontfamily: 'avenir',backgroundColor:'#64b6ac',mt: 3, mb: 2}} 
            >
              <Typography sx={{ fontWeight: 'bold' }}color='#fff' fontFamily='Avenir'>Register</Typography>
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body1">
                <Typography sx={{ fontWeight: 'bold' }}color='#028293' fontFamily='Avenir'>Already Have An Account? Log In</Typography>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Register;