import React, { useState } from "react";
import './ResetPassword.css';
import rocket from '../assets/rocket.png';

import SERVER_URL from './server_url';

const ResetPassword = () => {
    const [email, setEmail] = useState("");

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
                //  400 then email does not exist
                if (response.status === 401) {
                    alert("Email Does Not Exist. Email Not Sent.");
                }
                //  200 then email exists and password reset sent
                else if (response.status === 200) {
                    alert(`An email has been sent to ${email} with reset instructions.`);
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
        <div className="reset-password-page">
            <div className="main-content">
                {/* Rocket */}
                <div className="rocket-container">
                    <img src={rocket} alt="Rocket" className="rocket" />
                </div>

                {/* Reset Password Form */}
                <div className="form-container">
                    <h1 className="form-title">RESET PASSWORD</h1>
                    <form
                        onSubmit={handleResetPassword}
                        className="form reset-password-form"
                    >
                        <div className="input-group">
                            <input
                                className="input"
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                autoComplete="email"
                            />
                            <label className="label" htmlFor="email">
                                Email
                            </label>
                        </div>
                        <button className="submit-button" type="submit">
                            Reset Password
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
