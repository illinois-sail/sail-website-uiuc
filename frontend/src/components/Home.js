import './Home.css';
import '../fonts.css';
import clouds2 from '../assets/footer-clouds-2.png'
import hourglass from '../assets/hourglass.png';
import starwide from '../assets/star-wide.png';
import starsmall from '../assets/star-small.png';
import sail2025title from '../assets/sail2025-title.png';
import { Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

function Home() {

    // VERY IMPO: WHEN DAYLIGHT SAVINGS STARTS, CHANGE TARGET DATE BY 1 HR

    // Calculating number of days until Sail
    const targetDate = new Date('2025-03-28T18:00:00-06:00');
    const [daysLeft, setDaysLeft] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const timeDiff = targetDate - now;
            const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) + 1; 
            setDaysLeft(daysRemaining);
        }, 1000); // update every min

        return () => clearInterval(interval);
    }, [targetDate]);

    useEffect(() => {
        const images = document.getElementById('gallery-images');
        const prevButton = document.getElementById('prev-button');
        const nextButton = document.getElementById('next-button');
    
        let currentIndex = 0;
        const totalImages = images.children.length;
    
        function updateGallery() {
          images.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    
        function goToPrevious() {
          currentIndex = currentIndex === 0 ? totalImages - 1 : currentIndex - 1;
          updateGallery();
        }
    
        function goToNext() {
          currentIndex = currentIndex === totalImages - 1 ? 0 : currentIndex + 1;
          updateGallery();
        }
    
        // Event listeners for buttons
        prevButton.addEventListener('click', goToPrevious);
        nextButton.addEventListener('click', goToNext);
    
        // Touch gesture handling
        let startX = 0;
        let endX = 0;
    
        images.addEventListener('touchstart', (e) => {
          startX = e.touches[0].clientX;
        });
    
        images.addEventListener('touchmove', (e) => {
          endX = e.touches[0].clientX;
        });
    
        images.addEventListener('touchend', () => {
          if (startX > endX + 50) {
            // Swipe left
            goToNext();
          } else if (startX < endX - 50) {
            // Swipe right
            goToPrevious();
          }
        });
    
        // Initialize the gallery
        updateGallery();
    
        // Cleanup event listeners on unmount
        return () => {
          prevButton.removeEventListener('click', goToPrevious);
          nextButton.removeEventListener('click', goToNext);
          images.removeEventListener('touchstart', () => {});
          images.removeEventListener('touchmove', () => {});
          images.removeEventListener('touchend', () => {});
        };
      }, []);
    

    return (
        <div className='homepage'>
            {/* TITLE PAGE*/}
            {/* TODO: ADD STARS */}
            <div className='container'>
            <div className='title'>
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
                    Sail is an entirely student-run organization that hosts an annual two-day outreach event for high school students! At Sail, attendees will be able to experience what it's like to be a CS student at UIUC.
                </Typography>
            </div>

            {/* SCHEDULE */}
            {/* TODO: ADD STARS */}
            <div className='schedule' >
                <div className="title-container">
                    <img src={starwide} className='starwide-title' alt="star" />
                    <Typography variant="h2" className="home-title" sx={{ fontFamily: 'Anta' }}>
                    SCHEDULE
                    </Typography>
                    <img src={starsmall} className='starsmall-title' alt="star" />
                </div>

                <Typography variant="h3" className="schedule-day" sx={{ fontFamily: 'Anta', lineHeight: '3' }}>
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


                <Typography variant="h3" className="schedule-day" sx={{ fontFamily: 'Anta', lineHeight: '3'}}>
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
            {/* <Gallery /> */}
            <div className='about-sail'>
                
                <div className="title-container">
                    <img src={starwide} className='starwide-title' alt="star" />
                    <Typography variant="h2" className="home-title" sx={{ fontFamily: 'Anta' }}>
                        GALLERY                    </Typography>
                    <img src={starsmall} className='starsmall-title' alt="star" />
                </div>
                </div>

                <div className="gallery-container">
        <div className="gallery-wrapper">
          <div className="gallery-images" id="gallery-images">
            <img src="/placeholder.svg?height=400&width=800" alt="Gallery image 1" />
            <img src="/placeholder.svg?height=400&width=800" alt="Gallery image 2" />
            <img src="/placeholder.svg?height=400&width=800" alt="Gallery image 3" />
            <img src="/placeholder.svg?height=400&width=800" alt="Gallery image 4" />
          </div>
        </div>
        <button className="gallery-nav prev" id="prev-button">&lt;</button>
        <button className="gallery-nav next" id="next-button">&gt;</button>
      </div>

            
        </div>
    );
};

export default Home;

