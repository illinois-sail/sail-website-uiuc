import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import './Login.css';
import axios from 'axios';
import { Typography } from '@mui/material';
import starwide from '../assets/star-wide.png';
import starsmall from '../assets/star-small.png';
import titleshootingstars from '../assets/title-shooting-stars.png';


const formWidth = window.innerWidth > 600 ? "50%" : "100%";
const fontSize = window.innerWidth > 600 ? "2vw" : "7vw";

const PROD_SERVER = "https://sail.cs.illinois.edu";
const TEST_SERVER = "http://192.168.1.9:5000";

// server URL based on the url of the window
const SERVER_URL = window.location.href.includes("sail.cs.illinois.edu") ? PROD_SERVER : TEST_SERVER;

function SignUp() {

    // //stars logic
    // const [stars, setStars] = useState([]);
    // // generate random positions for stars
    // const generateRandomStars = () => {
    //     const starCount = 20; // Desired number of stars
    //     const newStars = [];
    
    //     while (newStars.length < starCount) {
    //         // Generate random positions
    //         const top = Math.random() * 100;
    //         const left = Math.random() * 100;
    
    //         // Check if the position is valid
    //         if (top >= 90 || top <= 10 || left >= 30 || left <= 70) {
    //             continue; // Skip invalid positions
    //         }
    
    //         // Add valid star to the array
    //         newStars.push({
    //             id: newStars.length, // Unique ID based on array length
    //             type: Math.random() > 0.5 ? 'wide' : 'small', // Random star type
    //             top: `${top}%`, // Top position as a percentage
    //             left: `${left}%`, // Left position as a percentage
    //         });
    //     }
    
    //     // Update state with the generated stars
    //     setStars(newStars);
    // };
    
    // useEffect(() => {
    //     generateRandomStars();
    // }, []);


    // actual signup logic
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    

    const handleFirstNameChange = (e) => setFirstName(e.target.value);
    const handleLastNameChange = (e) => setLastName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);
    
    const handleSubmit = (e) => {
        e.preventDefault(); 

        const formData = {
            firstName,
            lastName,
            email,
            password
        };

        // POST request with the form data object
        axios.post(`${SERVER_URL}/signup`, formData, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => {
                console.log('Response:', response);
                // 400 response = email already being used
                if (response.status === 401) {
                    alert("Email is already in use");
                }
                // 200 response = success!
                else if (response.status === 200) {
                    alert("Account created!");
                    window.location.href = "/login";
                }
            })
            .catch(error => {
                console.error('Error:', error);
                if (error.response.status === 401) {
                    alert("Email is already in use");
                }
            });

        // clear form, direct user to landing page
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <div className="signup-container" style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: '100%',
            width: '100%',
            alignItems: 'center',
        }}>

        {/* STARS */}
        {/* <div className="star-container">
                {stars.map((star) => (
                    <img
                        key={star.id}
                        src={star.type === 'wide' ? starwide : starsmall}
                        alt="Star"
                        className="star-signup"
                        style={{
                            position: 'absolute',
                            top: star.top,
                            left: star.left,
                            zIndex: '-3',
                            transform: 'translate(-50%, -50%)',
                            
                        }}
                    />
                ))}
            </div> */}

        {/* TITLE SECTION */}
        <div className='title'>
                <img
                    className="corner-image"
                    src={titleshootingstars} 
                    alt="Corner Decoration"
                />
                
                <Typography variant="h2" className="title">
                    SIGN UP
                </Typography>


            </div>
        <form onSubmit={handleSubmit} className="form">
            <div className="input-row" style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="input-group half-width" style={{ width: "48%" }}>
                    <input className="input" required type="text" id="firstName" onChange={handleFirstNameChange} value={firstName} />
                    <label className="label" htmlFor="firstName">First Name</label>
                </div>
                <div className="input-group half-width" style={{ width: "48%" }}>
                    <input className="input" required type="text" id="lastName" onChange={handleLastNameChange} value={lastName} />
                    <label className="label" htmlFor="lastName">Last Name</label>
                </div>
            </div>
            <br />
                <div className="input-group">
                    <input className="input" required type="text" id="email" onChange={handleEmailChange} value={email} />
                    <label className="label" htmlFor="email">Email</label>
                </div>
                <br />
                <div className="input-group">
                    <input className="input" required type="password" id="password" onChange={handlePasswordChange} value={password} />
                    <label className="label" htmlFor="password">Password</label>
                </div>
                <br />
                <div className="input-group">
                    <input className="input" required type="password" id="confirmPassword" onChange={handleConfirmPasswordChange} value={confirmPassword} />
                    <label className="label" htmlFor="confirmPassword">Confirm Password</label>
                </div>
                <br />
                
                <br />

                <button className="submit-button" type="submit">
                    SIGN UP
                </button>
                
            </form>
        </div>
    );
}

export default SignUp;