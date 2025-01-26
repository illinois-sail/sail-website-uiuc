import React, { useState } from "react";
import './ResetPassword.css';
import rocket from '../assets/rocket.png';

const ResetPassword = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setMessage(`An email has been sent to ${email} with reset instructions.`);
        } else {
            setMessage("Please enter a valid email address.");
        }
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
                        onSubmit={handleSubmit}
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
                    {message && <p className="message">{message}</p>}
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
