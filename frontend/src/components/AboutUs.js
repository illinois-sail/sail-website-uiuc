import Typography from "@mui/material/Typography";
import "./AboutUs.css";
import "../fonts.css";
import React from 'react';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

function AboutUs() {
    const teamMembers = [
        { name: 'Helen Ryding', role: 'Directors', image: 'frontend/src/components/images/HelenRyding.jpeg' },
        { name: 'Spencer Sadler', role: 'Directors', image: 'frontend/src/components/images/SpencerSadler.jpeg' },

        { name: 'Adrian Szwejkowski', role: 'Web Team', image: 'frontend/src/components/images/AdrianSzwejkowski.jpg' },
        { name: 'Gabe Delgado', role: 'Web Team', image: 'frontend/src/components/images/GabeDelgado.JPG' },
        { name: 'Sanjay Manoj', role: 'Web Team', image: 'frontend/src/components/images/Sanjay.jpg' },
        { name: 'Sreenidhi Vijayaraghavan', role: 'Web Team', image: 'frontend/src/components/images/SreenidhiVijayaraghavan.HEIC' },
        { name: 'Vinayak Bagdi', role: 'Web Team', image: 'frontend/src/components/images/VinayakBagdi.jpg' },
        { name: 'Ved', role: 'Web Team', image: 'frontend/src/components/images/.jpg' },

        { name: 'Angela Qian', role: 'Design', image: 'frontend/src/components/images/AngelaQian.jpeg' },
        { name: 'Tom Karingada', role: 'Design', image: 'frontend/src/components/images/TomKaringada.jpg' },
        { name: 'Ayushi Maskey', role: 'Design', image: 'frontend/src/components/images/AyushiMaskey.jpeg' },
        { name: 'Firmiana Wang', role: 'Design', image: 'frontend/src/components/images/FirmianaWang.jpg' },

        { name: 'Hetvi Patel', role: 'Logistics', image: 'frontend/src/components/images/HetviPatel.jpg' },
        { name: 'Evan Lin', role: 'Logistics', image: 'frontend/src/components/images/EvanLin.JPG' },
        { name: 'Ally Geren', role: 'Logistics', image: 'frontend/src/components/images/AllyGeren.jpeg' },

        { name: 'Peter Lin', role: 'Marketing', image: 'frontend/src/components/images/PeterLin.jpg' },
        { name: 'Ella Happel', role: 'Marketing', image: 'frontend/src/components/images/EllaHappel.JPG' },
        { name: 'Spencer Acquah', role: 'Marketing', image: 'frontend/src/components/images/SpencerAcquah.jpg' },
    ];

    // const gallery = [

    // ]

    // Function to categorize team members by their roles
    const categorizeByRole = (members) => {
        return members.reduce((acc, member) => {
            const { role } = member;
            if (!acc[role]) {
                acc[role] = [];
            }
            acc[role].push(member);
            return acc;
        }, {});
    };

    const categorizedMembers = categorizeByRole(teamMembers);

    return (
        <div>
            {Object.keys(categorizedMembers).map((role) => (
                <div key={role}>
                    <h2>{role}</h2>
                    <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                        {categorizedMembers[role].map((member) => (
                            <div key={member.name} style={{ textAlign: 'center' }}>
                                <img src={require(`${member.image}`)} alt={member.name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                                <p>{member.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AboutUs;


//     return (
//         <div className="aboutuspage">
//             <Container maxWidth="lg">
//                 <Typography variant="h2" component="h1" gutterBottom className="aboutus_text">About Us</Typography>
                
//                 <div className="aboutusdivider">
//                     <Typography variant="h4" component="h3" className="aboutus_text">About SAIL</Typography>
//                     <Typography paragraph className="aboutus_text">SAIL is an exciting event where high schoolers are invited to the University of Illinois at Urbana-Champaign to explore and learn through classes designed to inspire and inform. This unique opportunity allows students to get a taste of university life and explore their interests in a collegiate setting.</Typography>
                    
//                     <Typography variant="h4" component="h3" className="aboutus_text">Who is SAIL?</Typography>
//                     <Typography paragraph className="aboutus_text">SAIL is organized by a dedicated team of university students and the Siebel Center for Computer Science</Typography>
                    
//                     <Typography variant="h4" component="h3" className="aboutus_text">What is SAIL?</Typography>
//                     <Typography paragraph className="aboutus_text">SAIL offers a range of classes across various disciplines of Computer Science, giving attendees a glimpse into the vast array of subjects they can explore in higher education. </Typography>
                    
//                     <Typography variant="h4" component="h3" className="aboutus_text">When and where is SAIL held?</Typography>
//                     <Typography paragraph className="aboutus_text">SAIL is held annually at the University of Illinois at Urbana-Champaign from the 13th to 14th of April.</Typography>
//                 </div>

//                 <div className="aboutusdivider">
//                     <Typography variant="h2" component="h1" gutterBottom className="aboutus_text">Meet the Team</Typography>
//                     <Grid container spacing={4}>
//                         {teamMembers.map((member, index) => (
//                             <Grid item xs={12} sm={6} md={4} key={index}>
//                                 <Avatar alt={member.name} src={member.image} sx={{ width: 150, height: 150, margin: 'auto' }} />
//                                 <Typography variant="h6" component="h4" className="aboutus_text" align="center">{member.name}</Typography>
//                                 <Typography paragraph className="aboutus_text" align="center">{member.role}</Typography>
//                             </Grid>
//                         ))}
//                     </Grid>
//                 </div>
//             </Container>
//         </div>
//     );
// };

// export default Home;


