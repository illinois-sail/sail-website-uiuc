import './ClassTemplate.css'
import '../fonts.css';
import { Typography } from '@mui/material';
import titleshootingstars from '../assets/title-shooting-stars.png';
import { Link } from 'react-router-dom'; 

function ClassTemplate() {
    return (
        <div className='classespage'>

            {/* TITLE SECTION */}
            <div className='title'>
                <img
                    className="corner-image"
                    src={titleshootingstars} 
                    alt="Corner Decoration"
                />
                
                <Typography variant="h2" className="title classes-title">
                    Coming 
                    <br />
                    Soon!
                </Typography>

                <Typography className="subtitle classes-subtitle">
                    Please ensure that you are <Link to="/register" className="link">registered</Link> with UIUC!
                </Typography>

            </div>

        </div>

    );
};

export default ClassTemplate;
    
    