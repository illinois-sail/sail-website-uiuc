import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ListItemText from '@mui/material/ListItemText';
import TeacherTimes from './teacherTimes'
import TeacherSections from './teacherSections'
import SchoolIcon from '@mui/icons-material/School';



export default function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    
  };
  const [gender, setGender] = React.useState('');
    const handleChange = (event) => {
        setGender(event.target.value);
      };
    
  

  return (
      <Container component="main">
        {/* <CssBaseline /> */}
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <SchoolIcon fontSize= 'large' sx={{ m: 1, }}>
          </SchoolIcon>
          <Typography component="h1" variant="h5">
            Teacher Registration
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
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
                  autoComplete="family-name"
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
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Confirm Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
              <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Year</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={gender}
                label="Age"
                onChange={handleChange}
            >
            <MenuItem value={'freshman'}>Freshman</MenuItem>
            <MenuItem value={'sophmore'}>Sophmore</MenuItem>
            <MenuItem value={'junior'}>Junior</MenuItem>
            <MenuItem value={'senior'}>Senior</MenuItem>
            </Select>
            </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="co-email"
                  label="Co-Teacher Email (If you would like to teach a class with a Partner)"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  fullWidth
                  id="co-firstName"
                  label="Co-Teacher First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="co-lastName"
                  label=" Co-Teacher Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
              <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Co-Teacher Year</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={gender}
                label="Age"
                onChange={handleChange}
            >
            <MenuItem value={'freshman'}>Freshman</MenuItem>
            <MenuItem value={'sophmore'}>Sophmore</MenuItem>
            <MenuItem value={'junior'}>Junior</MenuItem>
            <MenuItem value={'senior'}>Senior</MenuItem>
            </Select>
            </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="courseName"
                  label="Course Name, enter comma between multiple courses"
                  name="coureName"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="aboutCourse"
                  label="Tell us a little bit more about the course you are excited to teach at Sail!"
                  name="aboutCourse"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{ mb: 1 }} >Select the times you can teach at</Typography>
               <TeacherTimes/>
              </Grid>
              <Grid item xs={12}>
                {/* <Typography sx={{ mb: 1 }} >Select the times you can teach at</Typography> */}
               <TeacherSections/>
              </Grid>

              </Grid>
              
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body1">
                  Already have an account? Log in!
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  );
}