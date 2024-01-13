import React, { useState } from 'react';
import './Login.css';
import './cyberpunk.css';

// make the form width 30vw when the screen is large and 40vw when the screen is small
const formWidth = window.innerWidth > 600 ? "50%" : "100%";
const fontSize = window.innerWidth > 600 ? "2vw" : "7vw";

const CyberButton = () => {
    return (
        <button class="cyber-button bg-purple fg-white" style={{ width: "35%" }}>
            Login
            <span class="glitchtext">CS SAIL</span>
            <span class="tag">SAIL</span>
        </button>
    )
}

function Login() {
    // const [firstName, setFirstName] = useState(''); // [state, setState]
    // const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [shirtSize, setShirtSize] = useState('');
    // const [parentName, setParentName] = useState('');
    // const [parentEmail, setParentEmail] = useState('');

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    // const handleFirstNameChange = (e) => setFirstName(e.target.value);
    // const handleLastNameChange = (e) => setLastName(e.target.value);
    // const handleShirtSizeChange = (e) => setShirtSize(e.target.value);
    // const handleParentNameChange = (e) => setParentName(e.target.value);
    // const handleParentEmailChange = (e) => setParentEmail(e.target.value);


    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform login or sign-up logic here
        console.log('Email:', email);
        console.log('Password:', password);
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
            <form onSubmit={handleSubmit} className="form" style={{ width: formWidth }}>
                <div class="input-group">
                    <input class="input" required type="text" id="username" onChange={handleEmailChange} value={email}/>
                    <label class="label" for="username">Username</label>
                </div>
                <br />
                <div class="input-group">
                    <input class="input" required type="password" id="password" onChange={handlePasswordChange} value={password}/>
                    <label class="label" for="password">Password</label>
                </div>
                <br />
                <CyberButton />
            </form>
        </div>
    );
}

export default Login;

