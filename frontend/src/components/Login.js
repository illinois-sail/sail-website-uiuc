import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Login.css';
import './cyberpunk.css';

const formWidth = window.innerWidth > 600 ? "50%" : "100%";
const fontSize = window.innerWidth > 600 ? "2vw" : "7vw";



function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const CyberButton = () => {
        return (
            <button className="cyber-button bg-purple fg-white" style={{ width: "35%" }} type="submit">
                Login
                <span className="glitchtext">CS SAIL</span>
                <span className="tag">SAIL</span>
            </button>
        )
    }

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    }


    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "5vh"
        }}>
            <h1 style={{ color: "white", fontFamily: "JetBrainsMono", fontSize: fontSize }}>Sign-In</h1>
            <form onSubmit={handleLogin} className="form" style={{ width: formWidth }}>
                <div className="input-group">
                    <input className="input" required type="text" id="username" onChange={handleEmailChange} value={email} />
                    <label className="label" htmlFor="username">Username</label>
                </div>
                <br />
                <div className="input-group">
                    <input className="input" required type="password" id="password" onChange={handlePasswordChange} value={password} />
                    <label className="label" htmlFor="password">Password</label>
                </div>
                <br />
                <CyberButton />
                {/* Add Link to Signup page */}
                <Link to="/signup" style={{ marginTop: "1rem", color: "#2196f3", textDecoration: "none", fontSize: "1.2rem" }}>
                    Don't have an account? Sign up here!
                </Link>
            </form>
        </div>
    );
}

export default Login;
