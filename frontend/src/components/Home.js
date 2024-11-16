import './Home.css';
import '../fonts.css'
import sail_title from '../assets/sail-title.png';
import stardust1 from '../assets/stardust-1.png';
import hourglass from '../assets/hourglass.png';
import { Typography } from '@mui/material';

function Home() {
    return (
        <div className='homepage'>
            {/* TITLE PAGE*/}
            {/* TODO: ADD STARS */}
            <div className='container'>
                <div 
                    className='stardust-right'
                    style={{
                        position: 'absolute', 
                        top: '35%', 
                        left: '50%',
                        transform: 'translate(30%, -100%)', 
                        width: '455.26px',
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
                    
                    <Typography
                        variant='h1' 
                        className='sail-title'
                        style={{
                            fontFamily: 'TAN-PEARL',
                            fontSize: '100px', 
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
                    
                </div>

                <div className='sail-date'> 
                    <Typography
                        variant='h2' 
                        style={{
                            fontFamily: 'Anta', 
                            fontSize: '32px', 
                            fontWeight: '400', 
                            lineHeight: '24.34px',
                            letterSpacing: '0', 
                            textAlign: 'left',
                            position: 'absolute',
                            opacity: '1',
                            color: 'white',
                            top: '48vh', 
                            left: '50%',
                            transform: 'translate(7%, -50%)',
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
                            fontSize: '32px', 
                            fontWeight: '400', 
                            lineHeight: '36px', 
                            letterSpacing: '0', 
                            textAlign: 'center',
                            opacity: '1', 
                            color: 'white', 
                            gap: '8px', 
                            
        
                        }}
                    >
                        100 days until Sail 2025
                    </Typography>

                    

                </div>

                {/* clouds */}

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
                    gap: '40px',
                    marginTop: '200px', 
                }}
            >
                <Typography variant='h3' className="home-title" style={{ fontFamily: 'Anta' }}>
                    WHAT IS SAIL?
                </Typography>

                
                <Typography
                    variant='body1'
                    style={{
                        width: '60%',
                        maxWidth: '1009px',
                        height: '90px',
                        fontFamily: 'DM-Sans',
                        fontSize: '24px',
                        fontWeight: '400',
                        lineHeight: '30px',
                        textAlign: 'center',
                        opacity: '1',
                        color: 'white', 
                    }}
                >
                    Sail is an entirely student-run organization that hosts an annual two-day outreach event for high school students! At Sail, attendees will be able to experience what it's like to be a CS student at UIUC.
                </Typography>
            </div>

            {/* SCHEDULE */}
            {/* TODO: ADD STARS */}
            <div
                className='about-sail' 
                style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '40px',
                    marginTop: '100px', 
                }}
            >
                <Typography variant='h3' className="home-title" style={{ fontFamily: 'Anta' }}>
                    SCHEDULE
                </Typography>

                <Typography variant="h4" className="schedule-day" style={{ fontFamily: 'Anta' }}>
                    DAY 1
                </Typography>

                <table class="schedule-table">
                    <tr>
                        <th class="table-head">TIME</th>
                        <th class="table-head">STUDENT ACTIVITIES</th>
                    </tr>
                    <tr>
                        <td>8:00am</td>
                        <td>Check-in, Breakfast, and RSO fair</td>
                    </tr>
                    <tr>
                        <td>9:30am</td>
                        <td>Opening Ceremony<br/><span class="note" style={{ fontFamily: "DM-Sans" }}>(Room 1404)</span></td>
                    </tr>
                    
                </table>

                <table class="schedule-table">
                    <tr>
                        <th class="table-head">TIME</th>
                        <th class="table-head">PARENT ACTIVITIES</th>
                    </tr>
                    <tr>
                        <td>8:00am</td>
                        <td>Check-in, Breakfast, and RSO fair</td>
                    </tr>
                    <tr>
                        <td>9:30am</td>
                        <td>Opening Ceremony<br/><span class="note" style={{ fontFamily: "DM-Sans" }}>(Room 1404)</span></td>
                    </tr>
                    
                </table>


                <Typography variant="h5" className="schedule-day" style={{ fontFamily: 'Anta' }}>
                    DAY 2
                </Typography>

                <table class="schedule-table">
                    <tr>
                        <th class="table-head">TIME</th>
                        <th class="table-head">STUDENT ACTIVITIES</th>
                    </tr>
                    <tr>
                        <td>8:00am</td>
                        <td>Check-in, Breakfast, and RSO fair</td>
                    </tr>
                    <tr>
                        <td>9:30am</td>
                        <td>Opening Ceremony<br/><span class="note" style={{ fontFamily: "DM-Sans" }}>(Room 1404)</span></td>
                    </tr>
                
                </table>

                
            </div>

            
        </div>
    );
};

export default Home;

