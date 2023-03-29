// import React from 'react';
// import { Card, CardContent, Typography } from '@material-ui/core';
// import { Box } from '@mui/system';
// import Grid from '@mui/material/Unstable_Grid2';


// const courses = [
//   {
//     title: 'Intro to JavaScript',
//     instructor: 'John Doe',
//     description: 'Learn the fundamentals of JavaScript programming.'
//   },
//   {
//     title: 'Advanced React',
//     instructor: 'Jane Smith',
//     description: 'Take your React skills to the next level with this advanced course.'
//   },
//   {
//     title: 'Web Design 101',
//     instructor: 'Bob Johnson',
//     description: 'Learn the basics of web design and create your first website.'
//   }
// ];

// const CoursesPage = () => {
//   return (
//     <div className="courses-page">
//         {/* <Box
//         sx={{
//           // marginTop: 40,
//         //   marginBottom: "-4",
//         //   height: "0%",
//           // width:'0%',
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//         }}
//       > */}
//         <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
//   {Array.from(Array(6)).map((_, index) => (
//     <Grid xs={2} sm={4} md={4} key={index}>
//        {courses.map((course, index) => (
//     <Card key={index} sx={{ padding: '1em' }}>
//       <CardContent>
//         <Typography variant="h5" component="h2">
//           {course.title}
//         </Typography>
//         <Typography color="textSecondary" gutterBottom>
//           {course.instructor}
//         </Typography>
//         <Typography variant="body2" component="p">
//           {course.description}
//         </Typography>
//       </CardContent>
//     </Card>
//   ))}
//     </Grid>
//   ))}
// </Grid>
 
//   {/* </Box> */}
// </div>

//   );
// };

// export default CoursesPage;
