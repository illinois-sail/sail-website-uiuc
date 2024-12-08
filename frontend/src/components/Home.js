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
                <div 
                    className='stardust-right'
                    style={{
                        position: 'absolute', 
                        top: 'calc(33vh + 180px)', 
                        left: '50%',
                        transform: 'translate(20%, -80%)', 
                        width: '700px',
                    }}
                >
                    <img 
                        src={stardust1} 
                        alt='' 
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain'
                        }}
                    />
                </div>
                <div 
                    className='logo-container'
                    style={{
                        width: '100%', 
                        alignContent: 'center', 
                        alignItems: 'center', 
                        display: 'flex', 
                        justifyContent: 'center' 
                    }}
                >

                    <img src={starwide} alt="star" style={{ width: '55px', height: '55px', transform: 'translateX(500px) translateY(-220px)' }} />

                    <img src={starsmall} alt="star" style={{ width: '40px', height: '40px', transform: 'translateX(500px) translateY(-170px)' }} />
                    
                    
                    <Typography
                        variant='h1' 
                        className='sail-title'
                        style={{
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

                    <img src={starwide} alt="star" style={{ width: '55px', height: '55px', transform: 'translateX(-470px) translateY(-20px)' }} />

                    <img src={starsmall} alt="star" style={{ width: '40px', height: '40px', transform: 'translateX(-560px) translateY(-70px)' }} />


                    
                    
                </div>

                <div className='sail-date'> 
                    <Typography
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
                </div>

                <div
                    className='countdown-container'
                    style={{
                        display: 'flex', 
                        alignItems: 'center',  
                        position: 'absolute',
                        gap: '10px',  
                        opacity: '1', 
                        top: '50vh',
                        left: '50%', 
                        transform: 'translate(-50%, 370%)', 
                    }}
                >
                    <img 
                        src={hourglass}
                        alt='Hourglass Icon' 
                        style={{
                            width: '36px',
                            height: '36px', 
                            padding: '3px 7.5px', 
                            opacity: '1', 
                        }} 
                    />
                    
                    <Typography
                        variant='h3' 
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

                {/* clouds */}
                
                <div
                    style={{
                        position: 'absolute',
                        top: '150px',  
                        left: '50%',  
                        width: '100vw',  
                        height: '100vh',  
                        transform: 'translateX(-50%)',  
                        backgroundImage: `url(${clouds2})`,  
                        backgroundSize: 'cover',  
                        backgroundPosition: 'center center',  
                        zIndex: -1,  
                    }}
                ></div>




            </div>

            {/* ABOUT SAIL */}
            {/* TODO: ADD STARS */}
            <div 
                className='about-sail' 
                style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '80px',
                    marginTop: '280px', 
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                    <img src={starwide} alt="star" style={{ width: '55px', height: '55px', transform: 'translateY(40px)' }} />
                    <Typography variant="h2" className="home-title" style={{ fontFamily: 'Anta' }}>
                        WHAT IS SAIL
                    </Typography>
                    <img src={starsmall} alt="star" style={{ width: '50px', height: '50px' }} />
                </div>

                
                <Typography
                    variant='body1'
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
            <div
                className='schedule' 
                style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '40px',
                    marginTop: '110px', 
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                    <img src={starwide} alt="star" style={{ width: '55px', height: '55px', transform: 'translateY(40px)' }} />
                    <Typography variant="h2" className="home-title" style={{ fontFamily: 'Anta' }}>
                        SCHEDULE
                    </Typography>
                    <img src={starsmall} alt="star" style={{ width: '50px', height: '50px' }} />
                </div>

                <Typography variant="h3" className="schedule-day" style={{ fontFamily: 'Anta', lineHeight: '3', marginBottom: '60px' }}>
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

                {/* gap between tables */}
                <div style={{ marginTop: '30px', }}></div> 

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

