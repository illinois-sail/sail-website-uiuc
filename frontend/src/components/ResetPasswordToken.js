// ResetPasswordToken.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Login.css';
import './cyberpunk.css';

const formWidth = window.innerWidth > 600 ? "50%" : "100%";
const fontSize = window.innerWidth > 600 ? "2vw" : "7vw";

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

        const formData = { "newPassword": newPassword };
        fetch(`http://127.0.0.1:5000/reset_password/${token}`, { // Include the token in the URL
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
                    alert('Password has been successfully reset.');
                    // Redirect or handle success as needed
                } else {
                    alert('Error: ' + data.message);
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
