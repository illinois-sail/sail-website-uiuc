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
import { useNavigate } from "react-router-dom";

import "../App.css";
const Register = () => {
  const navigate = useNavigate("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    // re_password: "",
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
    // re_password,
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

  const validateEmail = (email) => {
    const emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return emailRegex.test(email);
  };
  // const validatePhoneNumber = (phoneNumber) => {
  //   const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  //   return phoneRegex.test(phoneNumber);
  // };
  const onSubmitForm = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      alert("Please enter a valid email");
    } else if (!validateEmail(parent_email)) {
      alert("Please enter a valid parent email");
    } else if (
      admitted_student === "" ||
      parent_attending === "" ||
      high_school === "" ||
      year_in_school === ""
    ) {
      alert(
        "One or more fields was left blank. Please fill out all required fields"
      );
    } else {
      const userData = {
        email: email,
        password: "defaultUserPassword",
        // re_password: '',
        first_name: firstName,
        last_name: lastName,
        home_state: state,
        home_city: city,
        home_zip_code: zip,
        gender_identification: gender,
        dietary_restrictions: dietary_restrictions,
        shirt_size: shirt_size,
        high_school: high_school,
        year_in_school: year_in_school,
        phone_number: phone_number,
        parent_name: parent_name,
        parent_phone_number: parent_phone_number,
        parent_email: parent_email,
        admitted_student: admitted_student,
        parent_attending: parent_attending,
      };
      console.log(userData);
      fetch("http://127.0.0.1:8000/auth/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          alert(
            "Registration Successful! Please check your email for registration confirmation."
          );
          navigate("/home");
          setFormData({
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            re_password: "",
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
        })
        .catch((error) => {
          alert(
            "Registration Failed. It's possible you may have already registered before. If you did not receive an confirmation email, please contact us at sail.cs.illinois@gmail.com"
          );
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
                  inputProps={{ maxLength: 128 }}
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
                  inputProps={{ maxLength: 128 }}
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
              {/* <Grid item xs={12}>
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
              </Grid> */}
              {/* <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="re_password"
                  label="Confirm Password"
                  type="password"
                  id="re_password"
                  value={re_password}
                  onChange={onChangeForm}
                  autoComplete="new-password"
                  style={{backgroundColor: "white"}}
                />
              </Grid> */}
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
                    <MenuItem value={"Male"}>Male</MenuItem>
                    <MenuItem value={"Female"}>Female</MenuItem>
                    <MenuItem value={"Non-binary"}>Non-Binary</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="state"
                  label="Home State (2 Letter Abbreviation)"
                  type="state"
                  id="state"
                  autoComplete="state"
                  value={state}
                  onChange={onChangeForm}
                  inputProps={{ maxLength: 2 }}
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
                  inputProps={{ maxLength: 50 }}
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
                  inputProps={{ maxLength: 15 }}
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
                  inputProps={{ maxLength: 50 }}
                  style={{backgroundColor: "white"}}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Admitted to UIUC
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    name="admitted_student"
                    id="demo-simple-select"
                    value={admitted_student}
                    label="Admitted to UIUC"
                    onChange={onChangeForm}
                    style={{backgroundColor: "white"}}
                  >
                    <MenuItem value={true}>Yes</MenuItem>
                    <MenuItem value={false}>No</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Year in School
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    name="year_in_school"
                    id="demo-simple-select"
                    value={year_in_school}
                    label="Year in School"
                    onChange={onChangeForm}
                    style={{backgroundColor: "white"}}
                  >
                    <MenuItem value={"Freshman"}>Freshman</MenuItem>
                    <MenuItem value={"Sophomore"}>Sophomore</MenuItem>
                    <MenuItem value={"Junior"}>Junior</MenuItem>
                    <MenuItem value={"Senior"}>Senior</MenuItem>
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
                  inputProps={{ maxLength: 20 }}
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
                  inputProps={{ maxLength: 100 }}
                  style={{backgroundColor: "white"}}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Parent Attending Sail Parent Session
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    name="parent_attending"
                    id="demo-simple-select"
                    value={parent_attending}
                    label="Parent Attending Sail Parent Session"
                    onChange={onChangeForm}
                    style={{backgroundColor: "white"}}
                  >
                    <MenuItem value={true}>
                      Yes, my parent will be attending the Sail Parent Session
                    </MenuItem>
                    <MenuItem value={false}>No</MenuItem>
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
                  inputProps={{ maxLength: 250 }}
                  style={{backgroundColor: "white"}}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Shirt Size
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    name="shirt_size"
                    id="demo-simple-select"
                    value={shirt_size}
                    label="Shirt Size"
                    onChange={onChangeForm}
                    style={{backgroundColor: "white"}}
                  >
                    <MenuItem value={"XS"}>XS</MenuItem>
                    <MenuItem value={"S"}>S</MenuItem>
                    <MenuItem value={"M"}>M</MenuItem>
                    <MenuItem value={"L"}>L</MenuItem>
                    <MenuItem value={"XL"}>XL</MenuItem>
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
};

export default Register;
