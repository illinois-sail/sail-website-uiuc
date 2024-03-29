import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import './Login.css';
import './cyberpunk.css';
import AuthContext, { useAuth } from './AuthContext';
import axios from 'axios';

const PROD_SERVER = "https://sail.cs.illinois.edu";
const TEST_SERVER = "http://10.195.63.54:5000";


// assign the server URL based on the url of the window
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
        
        axios.post(`${SERVER_URL}/login`, formData, {
            // withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
                // 'Access-Control-Allow-Origin': 'true',
            },
        })
            .then(response => {
                console.log('Response:', response);
                return response.data;
            })
            .then(data => {
                console.log('Success! Data:', data);
                // if the response is 200, then set the authUser and isLoggedIn to true
                // if data is not null or undefined
                if (data === null || data === undefined) throw new Error("Invalid login credentials");
                else if (data.email) {
                    console.log("SUCCESS: data.email: ", data.email);

                    localStorage.setItem('authUser', JSON.stringify(data));
                    localStorage.setItem('isLoggedIn', true);

                    console.log("localStorage.getItem('authUser'): ", localStorage.getItem('authUser'));
                    console.log("localStorage.getItem('isLoggedIn'): ", localStorage.getItem('isLoggedIn'));

                    // unstringify the data and set the authUser
                    const authUser = JSON.parse(localStorage.getItem('authUser'));
                    setAuthUser(authUser); // set the authUser to the data from the server
                    const isLoggedIn = localStorage.getItem('isLoggedIn');
                    setIsLoggedIn((isLoggedIn === "true") ? true : false) // isLoggedIn is a string, so we need to convert it to a boolean

                    // make a message to the user that they have successfully logged in
                    alert("You have successfully logged in!");

                    console.log("isLoggedIn: ", isLoggedIn);
                    console.log("authUser: ", authUser);

                    window.location.href = "/profile";
                } else {
                    setAuthUser(null);
                    setIsLoggedIn(false);
                    alert("Invalid login credentials");
                    throw new Error("Invalid login credentials");
                }
            })
            .catch(error => {
                alert("Invalid login credentials");
                console.error('Error:', error);
            });
    };

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "5vh"
        }}>
            <h1 style={{ color: "white", fontFamily: "JetBrainsMono", fontSize: fontSize }}>Student Sign-In</h1>
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
                <button className="cyber-button bg-purple fg-white" style={{ width: "35%" }} type="submit">
                    Login
                    <span className="glitchtext">CS SAIL</span>
                    <span className="tag">SAIL</span>
                </button>
                <Link to="/signup" style={{ marginTop: "1rem", color: "#2196f3", textDecoration: "none", fontSize: "1.2rem" }}>
                    Don't have an account? Sign up here!
                </Link>
            </form>
        </div>
    );
}

export default Login;
