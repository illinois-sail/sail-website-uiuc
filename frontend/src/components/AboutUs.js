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
            <Typography variant="h2" component="h1" gutterBottom className="faq_text">Meet the Team</Typography>
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

