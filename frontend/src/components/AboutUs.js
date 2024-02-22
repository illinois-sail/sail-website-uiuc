import Typography from "@mui/material/Typography";
import "./AboutUs.css";
import "../fonts.css";
import React from 'react';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import HelenImage from "./images/HelenRyding.jpeg"
import SpencerSadlerImage from "./frontend/src/components/images/SpencerSadler.jpeg";
import AdrianSzwejkowskiImage from "./frontend/src/components/images/AdrianSzwejkowski.jpg";
import GabeDelgadoImage from "./frontend/src/components/images/GabeDelgado.JPG";
import SanjayManojImage from "./frontend/src/components/images/Sanjay.jpg";
import SreenidhiVijayaraghavanImage from "./frontend/src/components/images/SreenidhiVijayaraghavan.HEIC";
import VinayakBagdiImage from "./frontend/src/components/images/VinayakBagdi.jpg";
import VedImage from "./frontend/src/components/images/Ved.jpg";
import AngelaQianImage from "./frontend/src/components/images/AngelaQian.jpeg";
import TomKaringadaImage from "./frontend/src/components/images/TomKaringada.jpg";
import AyushiMaskeyImage from "./frontend/src/components/images/AyushiMaskey.jpeg";
import FirmianaWangImage from "./frontend/src/components/images/FirmianaWang.jpg";
import HetviPatelImage from "./frontend/src/components/images/HetviPatel.jpg";
import EvanLinImage from "./frontend/src/components/images/EvanLin.JPG";
import AllyGerenImage from "./frontend/src/components/images/AllyGeren.jpeg";
import PeterLinImage from "./frontend/src/components/images/PeterLin.jpg";
import EllaHappelImage from "./frontend/src/components/images/EllaHappel.JPG";
import SpencerAcquahImage from "./frontend/src/components/images/SpencerAcquah.jpg";



function AboutUs() {

    const teamMembers = [
        { name: 'Helen Ryding', role: 'Directors', image: HelenImage },
        { name: 'Spencer Sadler', role: 'Directors', image: SpencerSadlerImage },
        { name: 'Adrian Szwejkowski', role: 'Web Team', image: AdrianSzwejkowskiImage },
        { name: 'Gabe Delgado', role: 'Web Team', image: GabeDelgadoImage },
        { name: 'Sanjay Manoj', role: 'Web Team', image: SanjayManojImage },
        { name: 'Sreenidhi Vijayaraghavan', role: 'Web Team', image: SreenidhiVijayaraghavanImage },
        { name: 'Vinayak Bagdi', role: 'Web Team', image: VinayakBagdiImage },
        { name: 'Ved', role: 'Web Team', image: VedImage },
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

