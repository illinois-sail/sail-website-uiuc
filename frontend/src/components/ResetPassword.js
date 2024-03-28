// ResetPassword.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Login.css';
import './cyberpunk.css';

const formWidth = window.innerWidth > 600 ? "50%" : "100%";
const fontSize = window.innerWidth > 600 ? "2vw" : "7vw";
const PROD_SERVER = "https://sail.cs.illinois.edu";
const TEST_SERVER = "http://172.29.187.146:5000";

// assign the server URL based on the url of the window
const SERVER_URL = window.location.href.includes("sail.cs.illinois.edu") ? PROD_SERVER : TEST_SERVER;

function ResetPassword() {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => setEmail(e.target.value);

    const handleResetPassword = (e) => {
        e.preventDefault();

        const formData = { "email": email };
        fetch(`${SERVER_URL}/reset_password`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success! Data:', data);

                if (data.status === 'success') {

                    alert('Password reset instructions have been sent to your email.');
                    // Redirect or handle success as needed
                } else {
                    alert('Error: NOT SUCCESS' + data.message);
                }
            })
            .catch(error => {
                // alert('Error: HERE' + error);
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
            <h1 style={{ color: "white", fontFamily: "JetBrainsMono", fontSize: fontSize }}>Reset Password</h1>
            <form onSubmit={handleResetPassword} className="form" style={{ width: formWidth }}>
                <div className="input-group">
                    <input className="input" required type="text" id="email" onChange={handleEmailChange} value={email} />
                    <label className="label" htmlFor="email">Email</label>
                </div>
                <br />
                {/* You may optionally include a link or message here for additional instructions */}
                <button className="cyber-button bg-purple fg-white" style={{ width: "35%" }} type="submit">
                    Reset Password
                    <span className="glitchtext">CS SAIL</span>
                    <span className="tag">SAIL</span>
                </button>
                <Link to="/login" style={{ marginTop: "1rem", color: "#2196f3", textDecoration: "none", fontSize: "1.2rem" }}>
                    Back to Login
                </Link>
            </form>
        </div>
    );
}

export default ResetPassword;