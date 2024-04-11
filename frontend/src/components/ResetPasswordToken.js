// ResetPasswordToken.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Login.css';
import './cyberpunk.css';

const formWidth = window.innerWidth > 600 ? "50%" : "100%";
const fontSize = window.innerWidth > 600 ? "2vw" : "7vw";

const PROD_SERVER = "https://sail.cs.illinois.edu";
const TEST_SERVER = "http://10.195.63.54:5000";

// assign the server URL based on the url of the window
const SERVER_URL = window.location.href.includes("sail.cs.illinois.edu") ? PROD_SERVER : TEST_SERVER;

function ResetPasswordToken() {
    const { token } = useParams(); // Extract the token from the URL parameters
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleNewPasswordChange = (e) => setNewPassword(e.target.value);
    const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

    const handleResetPassword = (e) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        const formData = { "new_password": newPassword };
        fetch(`${SERVER_URL}/reset_password/${token}`, { // Include the token in the URL
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
                // if the response code is 200 then return an alert to the user that the account has been created
                else if (response.status === 200) {
                    alert("Password reset successfully! Please login to continue.");
                    window.location.href = "/login";
                }
            })
            .catch(error => {
                if (error.response.status === 400) {
                    alert("Invalid request. Email not sent.");
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
                {/* No need for email input as we have the token from the URL */}
                <br />
                <div className="input-group">
                    <input className="input" required type="password" id="newPassword" onChange={handleNewPasswordChange} value={newPassword} />
                    <label className="label" htmlFor="newPassword">New Password</label>
                </div>
                <br />
                <div className="input-group">
                    <input className="input" required type="password" id="confirmPassword" onChange={handleConfirmPasswordChange} value={confirmPassword} />
                    <label className="label" htmlFor="confirmPassword">Confirm Password</label>
                </div>
                <br />
                <button className="cyber-button bg-purple fg-white" style={{ width: "35%" }} type="submit">
                    Reset Password
                    <span className="glitchtext">CS SAIL</span>
                    <span className="tag">SAIL</span>
                </button>
                {/* No need for the Back to Login link in this context */}
            </form>
        </div>
    );
}

export default ResetPasswordToken;