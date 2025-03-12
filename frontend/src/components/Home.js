import './Home.css';
import '../fonts.css';
import clouds2 from '../assets/footer-clouds-2.png'
import hourglass from '../assets/hourglass.png';
import starwide from '../assets/star-wide.png';
import starsmall from '../assets/star-small.png';
import sail2025title from '../assets/titles/sail2025-title.png';
import titleshootingstars from '../assets/title-shooting-stars.png';
import { Typography, Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Carousel from './Carousel.js';
import { Link } from 'react-router-dom'; 

const imagesContext = require.context('../gallery_photos', false, /\.(png|jpg)$/);
const carouselImages = imagesContext.keys().map(imagesContext);

function Home() {

    // VERY IMPO: WHEN DAYLIGHT SAVINGS STARTS, CHANGE TARGET DATE BY 1 HR

    // Calculating number of days until Sail
    const targetDate = new Date('2025-03-28T18:00:00-06:00');
    const [daysLeft, setDaysLeft] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const timeDiff = targetDate - now;
            const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); 
            if (daysRemaining < 0) daysRemaining = 0;
            setDaysLeft(daysRemaining);
        }, 1000); // update every min

        return () => clearInterval(interval);
    }, [targetDate]);
    

    return (
        <div className='homepage'>
            {/* TITLE PAGE*/}
            <div className='container'>
                <div className='title'>
                    <img
                        className="corner-image"
                        src={titleshootingstars} 
                        alt="Corner Decoration"
                    />
                    <img
                        className="title-image"
                        src={sail2025title}
                        alt="SAIL 2025 Title"
                    />
                </div>

                <div className='countdown-container'>
                    <img 
                        src={hourglass}
                        className="hourglass"
                        alt='Hourglass Icon' 
                    />
                    
                    <Typography
                        variant='h3' 
                        className='days-left'
                        sx={{
                            fontFamily: 'Anta',
                            fontSize: '38px', 
                            fontWeight: '400', 
                            lineHeight: '34px', 
                            letterSpacing: '0', 
                            textAlign: 'center',
                            opacity: '1', 
                            color: 'white', 
                            gap: '8px', 
                        }}
                    >
                        {daysLeft !== null
                            ? daysLeft === 0 
                                ? 'Today is Sail 2025!' 
                                : `${daysLeft} days until Sail 2025`
                            : 'Loading...'}
                    </Typography>

                </div>

                <div style={{ 
                    position: 'fixed',
                    bottom: '30px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '90%',
                    maxWidth: '800px',
                    textAlign: 'center',
                    zIndex: '10',
                    padding: '15px',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(0, 0, 0, 0.2)'
                }}>
                    <Typography
                        sx={{
                            fontFamily: 'DM-Sans',
                            fontSize: '16px',
                            color: 'white',
                            textAlign: 'center',
                            textShadow: '0 0 10px rgba(255, 255, 255, 0.4)',
                        }}
                    >
                        <strong>IMPORTANT:</strong> You must register on both this website AND through{' '}
                        <Link 
                            to="/register" 
                            style={{
                                color: '#ADD8E6',
                                textDecoration: 'underline',
                                textShadow: '0 0 10px rgba(173, 216, 230, 0.4)',
                                fontWeight: 'bold'
                            }}
                        >
                            official Slate registration
                        </Link>
                        {' '}to participate in SAIL 2025.
                    </Typography>
                </div>
                
                <div className='home-clouds' style={{ backgroundImage: `url(${clouds2})` }}></div>

            </div>

            {/* ABOUT SAIL */}
            <div className='about-sail'>
                
                <div className="title-container">
                    <img src={starwide} className='starwide-title' alt="star" />
                    <Typography variant="h2" className="home-title" sx={{ fontFamily: 'Anta' }}>
                        WHAT IS SAIL
                    </Typography>
                    <img src={starsmall} className='starsmall-title' alt="star" />
                </div>

                
                <Typography
                    variant='body1'
                    className='about-desc'
                    sx={{
                        width: '60%',
                        maxWidth: '1350px',
                        height: '90px',
                        fontFamily: 'DM-Sans',
                        fontSize: '32px',
                        fontWeight: '400',
                        textAlign: 'center',
                        lineHeight: '1.3',
                        opacity: '1',
                        color: 'white',
                        marginBottom: '100px', 
                    }}
                >
                    Sail is an entirely student-run organization that hosts an annual two-day outreach event for high school students! At Sail, attendees will be able to experience what it's like to be a CS student at UIUC. Saturday, March 29 is in-person at the UIUC campus. Sunday, March 30 is virtual. Each day we will have different events, so students are encouraged to register for both days!
                </Typography>
            </div>

            {/* SCHEDULE */}
            <div className='schedule' >
                
                <div className="title-container">
                    <img src={starwide} className='starwide-title' alt="star" />
                    <Typography variant="h2" className="home-title" sx={{ fontFamily: 'Anta' }}>
                    SCHEDULE
                    </Typography>
                    <img src={starsmall} className='starsmall-title' alt="star" />
                </div>
                
                <div>
                    <Typography className="schedule-day" sx={{ fontFamily: 'Anta', lineHeight: '3' }}>
                        DAY 1 -- SATURDAY March 29 (IN-PERSON)
                    </Typography>
                </div>
                
                
                <table className="schedule-table">
                    <thead>
                        <tr>
                            <th className="table-head">TIME</th>
                            <th className="table-head">STUDENT ACTIVITIES</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>8:00 AM</td>
                            <td>
                                <div >
                                    Check In, Breakfast, RSO Fair<br />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>9:30 AM</td>
                            <td>
                                <div >
                                    Opening Ceremony<br />
                                    <span class="note">Room 1404</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>10:00 AM</td>
                            <td>
                                <div >
                                    Class #1<br />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>11:00 AM</td>
                            <td>
                                <div >
                                    Class #2<br />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>12:00 PM</td>
                            <td>
                                <div >
                                    Lunch (Group A) <br />
                                </div>
                                <div>
                                    Q&A Prospective Students (Group B)
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>1:00 PM</td>
                            <td>
                                <div >
                                    Lunch (Group B) <br />
                                </div>
                                <div>
                                    Q&A Admitted Students (Group A)
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>2:00 PM</td>
                            <td>
                                <div >
                                    Class #3<br />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>3:00 PM</td>
                            <td>
                                <div >
                                    Puzzle Scavenger Hunt<br />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>4:00 PM</td>
                            <td>
                                <div >
                                    Professor Wade talk!<br />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>5:00 PM</td>
                            <td>
                                <div >
                                    Closing Ceremony<br />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table className="schedule-table">
                    <thead>
                        <tr>
                            <th className="table-head">TIME</th>
                            <th className="table-head">PARENT ACTIVITIES</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>8:00 AM</td>
                            <td>
                                <div >
                                    Check In, Breakfast, RSO Fair<br />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>9:30 AM</td>
                            <td>
                                <div >
                                    Opening Ceremony<br />
                                    <span class="note"></span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>10:00 AM</td>
                            <td>
                                <div >
                                    Parent Q&A <br />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>11:00 AM</td>
                            <td>
                                <div >
                                    Free time around campus!
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>4:00 PM</td>
                            <td>
                                <div >
                                    Professor Wade talk!<br />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>5:00 PM</td>
                            <td>
                                <div >
                                    Closing Ceremony<br />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                

                <div>
                    <Typography className="schedule-day" sx={{ fontFamily: 'Anta', lineHeight: '3' }}>
                        DAY 2 -- SUNDAY March 30 (VIRTUAL)
                    </Typography>
                </div>

                <table className="schedule-table">
                    <thead>
                        <tr>
                            <th className="table-head">TIME</th>
                            <th className="table-head">STUDENT ACTIVITIES</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>12:00 PM</td>
                            <td>
                                <div >
                                    Opening Ceremony<br />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>12:30 PM</td>
                            <td>
                                <div >
                                    Class #1<br />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>1:20 PM</td>
                            <td>
                                <div >
                                    Break<br />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>1:30 PM</td>
                            <td>
                                <div >
                                    Class #2<br />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>2:20 PM</td>
                            <td>
                                <div >
                                    Break<br />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>2:30 PM</td>
                            <td>
                                <div >
                                    Set Sail: A Chat with Sail's Original Founders<br />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>3:30 PM</td>
                            <td>
                                <div >
                                    CS/CS+X Q&A Session<br />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>4:00 PM</td>
                            <td>
                                <div >
                                    Closing Ceremony<br />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>

            {/* GALLERY */}

            <div class="container">
            <div style={{ width: "40vw", alignContent: "center", alignItems: "center", display: "flex", justifyContent: "center" }}>
            <div className='about-sail'>
                    
                    <div className="title-container">
                        <img src={starwide} className='starwide-title' alt="star" />
                        <Typography variant="h2" className="home-title" sx={{ fontFamily: 'Anta' }}>
                            GALLERY
                        </Typography>
                        <img src={starsmall} className='starsmall-title' alt="star" />
                    </div>
                    <br/>
            </div>
            </div>
            <div class="carousel_container">
                <div style={{ width: "40vw", alignContent: "center", alignItems: "center", display: "flex", justifyContent: "center" }}>
                <Carousel images={carouselImages} />
                </div>
            </div>
            </div>
        </div>
    );
};

export default Home;

