import Typography from "@mui/material/Typography";
import "./AboutUs.css";
import "../fonts.css";
import React from 'react';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import HelenImage from "./images/HelenRyding.jpeg"
import SpencerSadlerImage from "./images/SpencerSadler.jpeg";
import AdrianSzwejkowskiImage from "./images/AdrianSzwejkowski.jpg";
import GabeDelgadoImage from "./images/GabeDelgado.JPG";
import SanjayManojImage from "./images/Sanjay.jpg";
import SreenidhiVijayaraghavanImage from "./images/SreenidhiVijayaraghavan.png";
import VinayakBagdiImage from "./images/VinayakBagdi.jpg";
import VedImage from "./images/Ved.jpg";
import AngelaQianImage from "./images/AngelaQian.jpeg";
import TomKaringadaImage from "./images/TomKaringada.jpg";
import AyushiMaskeyImage from "./images/AyushiMaskey.jpeg";
import FirmianaWangImage from "./images/FirmianaWang.jpg";
import HetviPatelImage from "./images/HetviPatel.jpg";
import EvanLinImage from "./images/EvanLin.JPG";
import AllyGerenImage from "./images/AllyGeren.jpeg";
import PeterLinImage from "./images/PeterLin.jpg";
import EllaHappelImage from "./images/EllaHappel.JPG";
import SpencerAcquahImage from "./images/SpencerAcquah.jpg";



function AboutUs() {

    const teamMembers = [
        { name: 'Helen Ryding', role: 'Directors', image: HelenImage },
        { name: 'Spencer Sadler', role: 'Directors', image: SpencerSadlerImage },
        { name: 'Sanjay Manoj', role: 'Web Team', image: SanjayManojImage },
        { name: 'Sreenidhi Vijayaraghavan', role: 'Web Team', image: SreenidhiVijayaraghavanImage },
        { name: 'Ved Kommalapati', role: 'Web Team', image: VedImage },
        { name: 'Adrian Szwejkowski', role: 'Web Team', image: AdrianSzwejkowskiImage },
        { name: 'Gabe Delgado', role: 'Web Team', image: GabeDelgadoImage },
        { name: 'Vinayak Bagdi', role: 'Web Team', image: VinayakBagdiImage },
        { name: 'Angela Qian', role: 'Design', image: AngelaQianImage },
        { name: 'Tom Karingada', role: 'Design', image: TomKaringadaImage },
        { name: 'Ayushi Maskey', role: 'Design', image: AyushiMaskeyImage },
        { name: 'Firmiana Wang', role: 'Design', image: FirmianaWangImage },
        { name: 'Hetvi Patel', role: 'Logistics', image: HetviPatelImage },
        { name: 'Evan Lin', role: 'Logistics', image: EvanLinImage },
        { name: 'Ally Geren', role: 'Logistics', image: AllyGerenImage },
        { name: 'Peter Lin', role: 'Marketing', image: PeterLinImage },
        { name: 'Ella Happel', role: 'Marketing', image: EllaHappelImage },
        { name: 'Spencer Acquah', role: 'Marketing', image: SpencerAcquahImage },
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
        <div className="teamContainer">
            <Typography variant="h2" component="h1" gutterBottom className="faq_text teamTitle">Meet the Team</Typography>
            {Object.keys(categorizedMembers).map((role) => (
                <div key={role} className="roleSection">
                    <h2 className="roleTitle">{role}</h2>
                    <div className="membersContainer">
                        {categorizedMembers[role].map((member) => (
                            <div key={member.name} className="memberCard">
                                <Avatar src={member.image} alt={member.name} className="memberAvatar"/>
                                <p className="memberName">{member.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AboutUs;