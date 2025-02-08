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

                {/* <Typography className="subtitle classes-subtitle">
                    Admitted Students: 
                    <br />
                    <Link to="/register" className="link">Virtual Registration</Link> 
                    <br />
                    <Link to="/register" className="link">In-Person Registration</Link>
                </Typography>
                <br />
                <Typography className="subtitle classes-subtitle" sx={{fontSize: '4em' }}>
                    Prospective Students: 
                    <br />
                    <Link to="/register" className="link">Virtual Registration</Link> 
                    <br />
                    <Link to="/register" className="link">In-Person Registration</Link>
                </Typography> */}

                <Typography className="subtitle classes-subtitle">
                    Registration links coming soon!
                    <br />
                    Check back in the coming week!
                </Typography>


            </div>

        </div>

    );
};

export default Register;
    
    