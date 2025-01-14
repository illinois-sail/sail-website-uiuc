import './Login.css';
import '../fonts.css';
import starwide from '../assets/star-wide.png';
import starsmall from '../assets/star-small.png';
import titleshootingstars from '../assets/title-shooting-stars.png';
import { Typography } from '@mui/material';
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'; 
import AuthContext, { useAuth } from './AuthContext';
import axios from 'axios';

const PROD_SERVER = "https://sail.cs.illinois.edu";
const TEST_SERVER = "http://192.168.50.2:5000";

const SERVER_URL = window.location.href.includes("sail.cs.illinois.edu") ? PROD_SERVER : TEST_SERVER;

axios.defaults.withCredentials = true;

const formWidth = window.innerWidth > 600 ? "50%" : "100%";
const fontSize = window.innerWidth > 600 ? "2vw" : "7vw";


function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();

    // check if the user is already logged in
    useEffect(() => {
        const storedUser = localStorage.getItem('authUser');
        if (storedUser) {
            setIsLoggedIn(true);
            setAuthUser(JSON.parse(storedUser));
        }
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("isLoggedIn: ", isLoggedIn);
        console.log("authUser: ", authUser);
        const formData = { "email": email, "password": password };
        
        // send a post request to the login api endpoint
        axios.post(`${SERVER_URL}/login`, formData, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                console.log('Response:', response);
                return response.data; // extract the response data
            })
            .then(data => {
                console.log('Success! Data:', data);
                
                if (data === null || data === undefined) 
                    throw new Error("Invalid login credentials");
                else if (data.email) {
                    // successful login if the server returns valid data
                    console.log("SUCCESS: data.email: ", data.email);

                    // if the response is 200, then set the authUser and isLoggedIn to true
                    localStorage.setItem('authUser', JSON.stringify(data));
                    localStorage.setItem('isLoggedIn', true);

                    console.log("localStorage.getItem('authUser'): ", localStorage.getItem('authUser'));
                    console.log("localStorage.getItem('isLoggedIn'): ", localStorage.getItem('isLoggedIn'));

                    // retrieve and set the authenticated user state
                    const authUser = JSON.parse(localStorage.getItem('authUser'));
                    setAuthUser(authUser); // update state with authenticated user data
                    const isLoggedIn = localStorage.getItem('isLoggedIn');
                    setIsLoggedIn((isLoggedIn === "true") ? true : false) // convert string to boolean

                    // notify the user of successful login
                    alert("You have successfully logged in!");

                    console.log("isLoggedIn: ", isLoggedIn);
                    console.log("authUser: ", authUser);

                    window.location.href = "/profile";
                } else {
                    // invalid login credentials
                    setAuthUser(null);
                    setIsLoggedIn(false);
                    alert("Invalid login credentials");
                    throw new Error("Invalid login credentials");
                }
            })
            .catch(error => {
                // handle errors during the login process
                alert("Invalid login credentials");
                console.error('Error:', error);
            });
    };

    return (
        <div className='loginpage'>
            <div className='container'>
                {/* TITLE SECTION */}
                <div className='title'>
                    <img
                        className="corner-image"
                        src={titleshootingstars} 
                        alt="Corner Decoration"
                    />
                    
                    <Typography variant="h2" className="login-title" sx={{ fontFamily: 'TAN-PEARL' }}>
                        WELCOME
                    </Typography>

                </div>

                {/* LOGIN FORM */}
                <form onSubmit={handleLogin} className="form" style={{ width: formWidth }}>
                    <div className="input-group">
                        <input className="input" required type="text" id="username" onChange={handleEmailChange} value={email} />
                        <label className="label" htmlFor="username">Email</label>
                    </div>
                    <br />

                    <div className="input-group">
                        <input className="input" required type="password" id="password" onChange={handlePasswordChange} value={password} />
                        <label className="label" htmlFor="password">Password</label>
                    </div>
                    <br />

                    <button className="login-button" type="submit">
                        LOGIN
                    </button>
                    <br />
                    
                    <div className="link-container">
                        <Link to="/signup" className="link">
                            Don't have an account? Sign up here!
                        </Link>
                        <br />
                        <Link to="/reset_password" className="link">
                            Forgot your password? Reset it here!
                        </Link>
                    </div>
                </form>
            </div>


            
        </div>
    );
};

export default Login;

