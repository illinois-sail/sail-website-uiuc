import Typography from "@mui/material/Typography";
import "./AboutUs.css";
import "../fonts.css";
import React from 'react';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

function Home_new() {

    return (
        <div>
            <div className="gallery">
                <Typography variant="h2" component="h1" gutterBottom className="faq_text">Gallery</Typography>
                
            </div>
            <div className="schedule">
                <Typography variant="h2" component="h1" gutterBottom className="faq_text">Schedule</Typography>
            </div>
            <div className="faq">
                <Container maxWidth="lg">
                    <Typography variant="h2" component="h1" gutterBottom className="faq_text">FAQ</Typography>
                    
                    <div className="faqdivider">
                        <Typography variant="h4" component="h3" className="faq_text">About SAIL</Typography>
                        <Typography paragraph className="faq_text">SAIL is an exciting event where high schoolers are invited to the University of Illinois at Urbana-Champaign to explore and learn through classes designed to inspire and inform. This unique opportunity allows students to get a taste of university life and explore their interests in a collegiate setting.</Typography>
                        
                        <Typography variant="h4" component="h3" className="faq_text">Who is SAIL?</Typography>
                        <Typography paragraph className="faq_text">SAIL is organized by a dedicated team of university students and the Siebel Center for Computer Science</Typography>
                        
                        <Typography variant="h4" component="h3" className="faq_text">What is SAIL?</Typography>
                        <Typography paragraph className="faq_text">SAIL offers a range of classes across various disciplines of Computer Science, giving attendees a glimpse into the vast array of subjects they can explore in higher education. </Typography>
                        
                        <Typography variant="h4" component="h3" className="faq_text">When and where is SAIL held?</Typography>
                        <Typography paragraph className="faq_text">SAIL is held annually at the University of Illinois at Urbana-Champaign from the 13th to 14th of April.</Typography>

                        <Typography variant="h4" component="h3" className="faq_text">How can I become a teacher?</Typography>
                        <Typography paragraph className="faq_text">If you are a UIUC student, look for the registration link sent to your email or on the various flyers around campus. You can also find the links on the website and on our instagram page</Typography>

                        <Typography variant="h4" component="h3" className="faq_text">How can I sign up for classes?</Typography>
                        <Typography paragraph className="faq_text">Click on "register" on the top right corner of the website. Input your personal information as well as the information of your guardian. Once you register, you can click on "Classes" and register for one class at each time slot. You can view the list of classes and their locations by going to your profile page.</Typography>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Home_new;


