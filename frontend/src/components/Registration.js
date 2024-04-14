import React, { useState, useEffect } from "react";
import "./cyberpunk.css";

const PROD_SERVER = "https://sail.cs.illinois.edu";
const TEST_SERVER = "http://192.168.1.9:5000" // replace with your local IP address

// assign the server URL based on the url of the window
const SERVER_URL = window.location.href.includes("sail.cs.illinois.edu") ? PROD_SERVER : TEST_SERVER;

const Registration = () => {
    const authUser = JSON.parse(localStorage.getItem('authUser'));
    const loggedState = localStorage.getItem('isLoggedIn');

    if ((loggedState === "false" || loggedState === null || loggedState === undefined || loggedState === false) && SERVER_URL === PROD_SERVER) {
        console.log("User not logged in. Redirecting to login page...");
        console.log("authUser: ", authUser)
        window.location.href = "/login";
    }

    const [isSmallScreen, setIsSmallScreen] = useState(window.matchMedia('(max-width: 600px)').matches)
    const [displayStyle, setDisplayStyle] = useState(isSmallScreen ? "grid" : "flex")
    const [flexDirection, setFlexDirection] = useState(isSmallScreen ? "" : "row")

    // useEffect to reload when the window is resized
    useEffect(() => {
        const handleResize = () => {
            const isSmallScreen = window.matchMedia('(max-width: 600px)').matches
            setIsSmallScreen(isSmallScreen)
            setDisplayStyle(isSmallScreen ? "grid" : "flex")
            setFlexDirection(isSmallScreen ? "" : "row")
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, []);

    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center" }} >
            <h1 className="cyber-glitch-2" style={{ color: "yellow", fontFamily: "Hyperwave", fontSize: "8vw"}}>Register for SAIL</h1>
            <div style={{ display: displayStyle, flexDirection: flexDirection, justifyContent: "center", textAlign: "center", gap: "3vw" }}>
                <div id="AdmittedStudentsRegistration" style={{ display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center"}}>
                    <h1 style={{ color: "white", fontFamily: "JetBrainsMono", fontSize: "3vw" }}>Admitted Students</h1>
                    <a href="https://myillini.illinois.edu/AdmittedEvents/cs_admitted" style={{ color: "white", fontFamily: "JetBrainsMono", fontSize: "2vw" }}>In-Person Event</a>
                    <br/>
                    <a href="https://myillini.illinois.edu/AdmittedEvents/cs_admitted_virtual" style={{ color: "white", fontFamily: "JetBrainsMono", fontSize: "2vw" }}>Virtual Event</a>
                </div>
                <div id="ProspectiveStudentsRegistration" style={{ display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center" }}>
                    <h1 style={{ color: "white", fontFamily: "JetBrainsMono", fontSize: "3vw" }}>Prospective Students</h1>
                    <a href="https://enroll.illinois.edu/register/SAIL" style={{ color: "white", fontFamily: "JetBrainsMono", fontSize: "2vw" }}>In-Person Event</a>
                    <br/>
                    <a href="https://enroll.illinois.edu/register/SAILVirtual" style={{ color: "white", fontFamily: "JetBrainsMono", fontSize: "2vw" }}>Virtual Event</a>
                </div>
            </div>
        </div>
    );
};

export default Registration;