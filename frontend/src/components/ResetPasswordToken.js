import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ResetPassword.css';
import SERVER_URL, { PROD_SERVER } from './server_url';
import rocket from '../assets/rocket.png';
import AuthContext, { useAuth } from './AuthContext';


function ResetPasswordToken() {
    const { token } = useParams(); // extract token from url parameters
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleNewPasswordChange = (e) => setNewPassword(e.target.value);
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

    const handleResetPassword = (e) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        const formData = { "new_password": newPassword };
        fetch(`${SERVER_URL}/reset_password/${token}`, { // add the token in url
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => {
                console.log('Response:', response);

                // 400 email doesn't exist
                if (response.status === 401) {
                    alert("Email Does Not Exist. Email Not Sent.");
                }
                // 200 password reset successfully
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
        <div className="reset-password-page">
            <div className="main-content">
                {/* Rocket */}
                <div className="rocket-container">
                    <img src={rocket} alt="Rocket" className="rocket" />
                </div>
                {/* Reset Password Form */}
                <div className="form-container">
                    <h1 className="form-title">RESET PASSWORD</h1>
                    <form onSubmit={handleResetPassword} className="form reset-password-form">
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
                        <button className="submit-button" type="submit">
                            Reset Password
                        </button>
                    </form>
                </div>
            </div>            
        </div>
    );
}

export default ResetPasswordToken;