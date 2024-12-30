import './Home.css';
import '../fonts.css';
import stardust1 from '../assets/stardust-1.png';
import clouds2 from '../assets/footer-clouds-2.png'
import hourglass from '../assets/hourglass.png';
import starwide from '../assets/star-wide.png';
import starsmall from '../assets/star-small.png';
import Footer from './Footer.js';
import { Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

function Home() {

    // Calculating number of days until Sail
    const targetDate = new Date('2025-03-29T00:00:00');
    const [daysLeft, setDaysLeft] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const timeDiff = targetDate - now;
            const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // update every min
            setDaysLeft(daysRemaining);
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);


    return (
        <div className='homepage'>
            {/* TITLE PAGE*/}
            {/* TODO: ADD STARS */}
            <div className='container'>
                <div className='stardust-right'>
                    <img src={stardust1} alt='' />
                </div>

                <div className='logo-container'>
                    <img src={starwide} className="starwide-right" alt="star" />
                    <img src={starsmall} className="starsmall-right" alt="star" />
                    
                    
                    <Typography
                        variant='h1' 
                        className='sail-title'
                        sx={{
                            fontFamily: 'TAN-PEARL',
                            fontSize: '130px',
                            fontWeight: '400', 
                            lineHeight: '96px', 
                            letterSpacing: '0.48px', 
                            opacity: '1', 
                            textAlign: 'center', 
                            color: 'white',
                            textShadow: `
                                0 0 7px rgba(255, 255, 255, 0.7),
                                0 0 10px rgba(255, 255, 255, 0.7),
                                0 0 21px rgba(255, 255, 255, 0.7)
                            `,
                            position: 'absolute', 
                            top: '33vh',
                        }}
                        >
                        SAIL 2025
                    </Typography>

                    <img src={starwide} className="starwide-left" alt="star" />
                    <img src={starsmall} className="starsmall-left" alt="star" />
                    
                </div>

                <Typography
                    className='sail-date'
                    variant='h2' 
                    style={{
                        fontFamily: 'Anta', 
                        fontSize: '44px', 
                        fontWeight: '400', 
                        lineHeight: '24.34px',
                        letterSpacing: '0', 
                        textAlign: 'left',
                        position: 'absolute',
                        opacity: '1',
                        color: 'white',
                        top: 'calc(33vh + 150px)', 
                        left: '50%',
                        transform: 'translate(0%, 40%)',
                    }}
                    >
                    March 29-30, 2025
                </Typography>

                <div className='countdown-container'>
                    <img 
                        src={hourglass}
                        className="hourglass"
                        alt='Hourglass Icon' 
                    />
                    
                    <Typography
                        variant='h3' 
                        className='days-left'
                        style={{
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
                            ? `${daysLeft} days until Sail 2025`
                            : 'Loading...'}
                    </Typography>

                </div>
                
                <div className='home-clouds' style={{ backgroundImage: `url(${clouds2})` }}></div>

            </div>

            {/* ABOUT SAIL */}
            {/* TODO: ADD STARS */}
            <div className='about-sail'>
                
                <div className="title-container">
                    <img src={starwide} className='starwide-title' alt="star" />
                    <Typography variant="h2" className="home-title" style={{ fontFamily: 'Anta' }}>
                        WHAT IS SAIL
                    </Typography>
                    <img src={starsmall} className='starsmall-title' alt="star" />
                </div>

                
                <Typography
                    variant='body1'
                    className='about-desc'
                    style={{
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
                    Sail is an entirely student-run organization that hosts an annual two-day outreach event for high school students! At Sail, attendees will be able to experience what it's like to be a CS student at UIUC.
                </Typography>
            </div>

            {/* SCHEDULE */}
            {/* TODO: ADD STARS */}
            <div className='schedule' >
                <div className="title-container">
                    <img src={starwide} className='starwide-title' alt="star" />
                    <Typography variant="h2" className="home-title" style={{ fontFamily: 'Anta' }}>
                    SCHEDULE
                    </Typography>
                    <img src={starsmall} className='starsmall-title' alt="star" />
                </div>

                <Typography variant="h3" className="schedule-day" style={{ fontFamily: 'Anta', lineHeight: '3', marginBottom: '30px' }}>
                    DAY 1
                </Typography>
                
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
                            <td>12:00 PM</td>
                            <td>
                                <div >
                                    Lunch (Group X) <br />
                                    <span class="note">Room 1404</span>
                                </div>
                                <div>
                                    Tour (Group Y)
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>1:00 PM</td>
                            <td>
                                <div >
                                    Lunch (Group Y) <br />
                                    <span class="note">Room 1404</span>
                                </div>
                                <div>
                                    Tour (Group X)
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
                                    <span class="note">Room 1404</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>12:00 PM</td>
                            <td>
                                <div >
                                    Lunch (Group X) <br />
                                    <span class="note">Room 1404</span>
                                </div>
                                <div>
                                    Tour (Group Y)
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>1:00 PM</td>
                            <td>
                                <div >
                                    Lunch (Group Y) <br />
                                    <span class="note">Room 1404</span>
                                </div>
                                <div>
                                    Tour (Group X)
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>


                <Typography variant="h3" className="schedule-day" style={{ fontFamily: 'Anta', lineHeight: '3', marginBottom: '60px', marginTop: '40px' }}>
                    DAY 2
                </Typography>

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
                            <td>12:00 PM</td>
                            <td>
                                <div >
                                    Lunch (Group X) <br />
                                    <span class="note">Room 1404</span>
                                </div>
                                <div>
                                    Tour (Group Y)
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>1:00 PM</td>
                            <td>
                                <div >
                                    Lunch (Group Y) <br />
                                    <span class="note">Room 1404</span>
                                </div>
                                <div>
                                    Tour (Group X)
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>

            {/* TODO: GALLERY */}
            <div>
            </div>

            {/* FOOTER */}
            <Footer />
        </div>
    );
};

export default Home;

