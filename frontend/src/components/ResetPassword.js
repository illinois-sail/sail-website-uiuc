// ResetPassword.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Login.css';
import './cyberpunk.css';

const formWidth = window.innerWidth > 600 ? "50%" : "100%";
const fontSize = window.innerWidth > 600 ? "2vw" : "7vw";

function ResetPassword() {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => setEmail(e.target.value);

    const handleResetPassword = (e) => {
        e.preventDefault();

        const formData = { "email": email };
        fetch('http://127.0.0.1:5000/reset_password', {
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
