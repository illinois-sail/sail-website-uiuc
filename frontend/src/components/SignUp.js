import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import './Login.css';
import axios from 'axios';
import { Typography } from '@mui/material';
import starwide from '../assets/star-wide.png';
import starsmall from '../assets/star-small.png';
import titleshootingstars from '../assets/title-shooting-stars.png';
import SERVER_URL, { PROD_SERVER } from './server_url';
import AuthContext, { useAuth } from './AuthContext';


const formWidth = window.innerWidth > 600 ? "50%" : "100%";
const fontSize = window.innerWidth > 600 ? "2vw" : "7vw";

function SignUp() {

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

    const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();

    useEffect(() => {
        const storedUser = localStorage.getItem('authUser');
        if (storedUser) {
            setIsLoggedIn(true);
            setAuthUser(JSON.parse(storedUser));
            window.location.href = "/home";
        }
    }, []);
    
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

            {/* TITLE SECTION */}
            <div className='auth-page'>
                <img
                    className="corner-image"
                    src={titleshootingstars} 
                    alt="Corner Decoration"
                />
                
                <Typography variant="h2" className="auth-title">
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

                <div style={{ 
                    marginTop: '20px', 
                    textAlign: 'center', 
                    padding: '15px',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    width: '80%',
                    maxWidth: '500px'
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

            </form>
        </div>
    );
}

export default SignUp;