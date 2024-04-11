// ResetPassword.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Login.css';
import './cyberpunk.css';

const formWidth = window.innerWidth > 600 ? "50%" : "100%";
const fontSize = window.innerWidth > 600 ? "2vw" : "7vw";
const PROD_SERVER = "https://sail.cs.illinois.edu";
const TEST_SERVER = "http://10.195.63.54:5000";

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
            .then(response => {
                console.log('Response:', response);

                // if the response code is 400 then email does not exist
                if (response.status === 401) {
                    alert("Email Does Not Exist. Email Not Sent.");
                }
                // if the response code is 200 then email exists and password reset sent
                else if (response.status === 200) {
                    alert("Password reset sent successfully! Please check your email.");
                    window.location.href = "/login";
                }
            })
            .catch(error => {
                if (error.response.status === 400) {
                    alert("Invalid. Password was not reset.");
                }
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