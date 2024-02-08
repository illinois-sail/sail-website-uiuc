import Typography from "@mui/material/Typography";
import "./AboutUs.css";
import "../fonts.css";
import React from 'react';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

function AboutUs() {
    const teamMembers = [
        { name: 'Spencer', role: 'Co-Director', image: '/images/spencer.jpg' },
        { name: 'Helen', role: 'Co-Director', image: '/images/spencer.jpg' },
        { name: 'Peter', role: 'Design', image: '/images/peter.jpg' },
        { name: 'Sanjay', role: 'Web Team', image: '/images/sanjay.jpg' },
        { name: 'Gabe', role: 'Web Team', image: '/images/gabe.jpg' },
        { name: 'Hetvi', role: 'Logistics', image: '/images/hetvi.jpg' },
    ];


    return (
        <div className="aboutuspage">
            <Container maxWidth="lg">
                <Typography variant="h2" component="h1" gutterBottom className="aboutus_text">About Us</Typography>
                
                <div className="aboutusdivider">
                    <Typography variant="h4" component="h3" className="aboutus_text">About SAIL</Typography>
                    <Typography paragraph className="aboutus_text">SAIL is an exciting event where high schoolers are invited to the University of Illinois at Urbana-Champaign to explore and learn through classes designed to inspire and inform. This unique opportunity allows students to get a taste of university life and explore their interests in a collegiate setting.</Typography>
                    
                    <Typography variant="h4" component="h3" className="aboutus_text">Who is SAIL?</Typography>
                    <Typography paragraph className="aboutus_text">SAIL is organized by a dedicated team of university students and the Siebel Center for Computer Science</Typography>
                    
                    <Typography variant="h4" component="h3" className="aboutus_text">What is SAIL?</Typography>
                    <Typography paragraph className="aboutus_text">SAIL offers a range of classes across various disciplines of Computer Science, giving attendees a glimpse into the vast array of subjects they can explore in higher education. </Typography>
                    
                    <Typography variant="h4" component="h3" className="aboutus_text">When and where is SAIL held?</Typography>
                    <Typography paragraph className="aboutus_text">SAIL is held annually at the University of Illinois at Urbana-Champaign at the beginning of April.</Typography>
                </div>

                <div className="aboutusdivider">
                    <Typography variant="h2" component="h1" gutterBottom className="aboutus_text">Meet the Team</Typography>
                    <Grid container spacing={4}>
                        {teamMembers.map((member, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Avatar alt={member.name} src={member.image} sx={{ width: 150, height: 150, margin: 'auto' }} />
                                <Typography variant="h6" component="h4" className="aboutus_text" align="center">{member.name}</Typography>
                                <Typography paragraph className="aboutus_text" align="center">{member.role}</Typography>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </Container>
        </div>
    );
};

export default Home;


