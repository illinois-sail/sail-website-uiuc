import React, { useState } from 'react';
import './Login.css';
import './cyberpunk.css';

const formWidth = window.innerWidth > 600 ? "50%" : "100%";
const fontSize = window.innerWidth > 600 ? "2vw" : "7vw";

const PROD_SERVER = "https://sail.cs.illinois.edu";
const TEST_SERVER = "http://172.29.187.146:5000";

// assign the server URL based on the url of the window
const SERVER_URL = window.location.href.includes("sail.cs.illinois.edu") ? PROD_SERVER : TEST_SERVER;

const CyberButton = ({ buttonText }) => {
    return (
        <button className="cyber-button bg-red fg-white" style={{ width: "35%" }}>
            {buttonText}
            <span className="glitchtext">CS SAIL</span>
            <span className="tag">SAIL</span>
        </button>
    );
}

function SignUp() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [shirtSize, setShirtSize] = useState('');
    const [parentName, setParentName] = useState('');
    const [parentEmail, setParentEmail] = useState('');

    const handleFirstNameChange = (e) => setFirstName(e.target.value);
    const handleLastNameChange = (e) => setLastName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);
    const handleShirtSizeChange = (e) => setShirtSize(e.target.value);
    const handleParentNameChange = (e) => setParentName(e.target.value);
    const handleParentEmailChange = (e) => setParentEmail(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        // Build the form data object
        const formData = {
            firstName,
            lastName,
            email,
            password,
            shirtSize,
            parentName,
            parentEmail
        };

        // Send the POST request with the form data
        fetch(`${SERVER_URL}/signup`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
        // Handle successful response here, e.g., redirect or display a message
        })
        .catch((error) => {
        console.error('Error:', error);
        // Handle error here, e.g., display an error message
        });

        // Clear the form and direct the user to the homepage
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setShirtSize('');
        setParentName('');
        setParentEmail('');
        window.location.href = "/";
    };

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "5vh"
        }}>
            <h1 style={{ color: "white", fontFamily: "JetBrainsMono", fontSize: fontSize }}>Sign-Up</h1>
            <form onSubmit={handleSubmit} className="form" style={{ width: formWidth }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div className="input-group" style={{ width: "48%" }}>
                        <input className="input" required type="text" id="firstName" onChange={handleFirstNameChange} value={firstName} />
                        <label className="label" htmlFor="firstName">First Name</label>
                    </div>
                    <div className="input-group" style={{ width: "48%" }}>
                        <input className="input" required type="text" id="lastName" onChange={handleLastNameChange} value={lastName} />
                        <label className="label" htmlFor="lastName">Last Name</label>
                    </div>
                </div>
                <br />
                <div className="input-group">
                    <input className="input" required type="text" id="email" onChange={handleEmailChange} value={email} />
                    <label className="label" htmlFor="email">Email</label>
                </div>
                <br />
                <div className="input-group">
                    <input className="input" required type="password" id="password" onChange={handlePasswordChange} value={password} />
                    <label className="label" htmlFor="password">Password</label>
                </div>
                <br />
                <div className="input-group">
                    <input className="input" required type="password" id="confirmPassword" onChange={handleConfirmPasswordChange} value={confirmPassword} />
                    <label className="label" htmlFor="confirmPassword">Confirm Password</label>
                </div>
                <br />
                <div className="input-group">
                    <input className="input" required type="text" id="shirtSize" onChange={handleShirtSizeChange} value={shirtSize} />
                    <label className="label" htmlFor="shirtSize">Shirt Size</label>
                </div>
                <br />
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div className="input-group" style={{ width: "48%" }}>
                        <input className="input" required type="text" id="parentName" onChange={handleParentNameChange} value={parentName} />
                        <label className="label" htmlFor="parentName">Parent Name</label>
                    </div>
                    <div className="input-group" style={{ width: "48%" }}>
                        <input className="input" required type="text" id="parentEmail" onChange={handleParentEmailChange} value={parentEmail} />
                        <label className="label" htmlFor="parentEmail">Parent Email</label>
                    </div>
                </div>
                <br />
                {/* <CyberButton buttonText="Sign Up" type="submit" /> */}
                <button className="cyber-button bg-red fg-white" style={{ width: "35%" }} type="submit">
                    Sign Up
                    <span className="glitchtext">CS SAIL</span>
                    <span className="tag">SAIL</span>
                </button>
            </form>
        </div>
    );
}

export default SignUp;