import './ClassTemplate.css'
import '../fonts.css';
import { Typography } from '@mui/material';
import titleshootingstars from '../assets/title-shooting-stars.png';
import { Link } from 'react-router-dom'; 

function Register() {
    return (
        <div className='classespage'>

            {/* TITLE SECTION */}
            <div className='classtitle'>
                <img
                    className="corner-image"
                    src={titleshootingstars} 
                    alt="Corner Decoration"
                />
                
                <Typography variant="h2" className="title classes-title">
                    REGISTER
                </Typography>

                <Typography className="subtitle classes-subtitle">
                    Admitted Students: 
                    <br />
                    <a href="https://myillini.illinois.edu/AdmittedEvents/cs_admitted_virtual" className="link" target="_blank" rel="noopener noreferrer">
                        Virtual Registration
                    </a> 
                    <br />
                    <a href="https://myillini.illinois.edu/AdmittedEvents/cs_admitted" className="link" target="_blank" rel="noopener noreferrer">
                        In-Person Registration
                    </a>
                </Typography>
                <br />
                <Typography className="subtitle classes-subtitle" sx={{fontSize: '4em' }}>
                    Prospective Students: 
                    <br />
                    <a href="https://enroll.illinois.edu/register/VirtualSail" className="link" target="_blank" rel="noopener noreferrer">
                        Virtual Registration
                    </a> 
                    <br />
                    <a href="https://enroll.illinois.edu/register/ProspectSAIL" className="link" target="_blank" rel="noopener noreferrer">
                        In-Person Registration
                    </a>
                </Typography> 

                


            </div>

        </div>

    );
};

export default Register;
    
    