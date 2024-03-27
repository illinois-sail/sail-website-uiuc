import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import './Login.css';
import './cyberpunk.css';

const formWidth = window.innerWidth > 600 ? "50%" : "100%";
const fontSize = window.innerWidth > 600 ? "2vw" : "7vw";

const PROD_SERVER = "https://sail.cs.illinois.edu";
const TEST_SERVER = "http://172.29.187.146:5000";

// assign the server URL based on the url of the window
const SERVER_URL = window.location.href.includes("sail.cs.illinois.edu") ? PROD_SERVER : TEST_SERVER;

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleLogin = (e) => {
        e.preventDefault();
        const formData = { "email": email, "password": password };

        fetch(`${SERVER_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success! Data:', data);

                if (data !== null && data !== undefined) {
                    // handle successful login
                }
            })
            .catch(error => {
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
            <h1 style={{ color: "white", fontFamily: "JetBrainsMono", fontSize: fontSize }}>Sign-In</h1>
            <form onSubmit={handleLogin} className="form" style={{ width: formWidth }}>
                <div className="input-group">
                    <input className="input" required type="text" id="username" onChange={handleEmailChange} value={email} />
                    <label className="label" htmlFor="username">Username</label>
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
                <Link to="/reset_password" style={{ marginTop: "1rem", color: "#2196f3", textDecoration: "none", fontSize: "1.2rem" }}>
                    Forgot your password? Reset it here!
                </Link>
            </form>
        </div>
    );
}

export default Login;
