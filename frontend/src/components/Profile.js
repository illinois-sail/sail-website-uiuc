import React, { useState, useEffect } from "react";
import axios from "axios";
import allClasses from "./Classes";
import { Typography } from '@mui/material';


const CLASSES = allClasses;

const PROD_SERVER = "https://sail.cs.illinois.edu";
const TEST_SERVER = "http://10.192.104.68:5000";

// server URL based on url of window
const SERVER_URL = window.location.href.includes("sail.cs.illinois.edu") ? PROD_SERVER : TEST_SERVER;

const BusInfomation = () => {
    return (
        <div className="bus-information" style={{ 
            marginTop: "2vh", 
            paddingLeft: "10vw", 
            paddingRight: "10vw", 
            display: "flex", 
            flexDirection: "column",
            marginBottom: "2vh",
            marginTop: "8vh",
            fontFamily: "Anta",
        }}>
            <h1 style={{ fontSize: "3rem" }}>BUS INFORMATION</h1>
            <div style={{ backgroundColor: '#FFFFFF26', borderRadius: '20px', paddingLeft: "2vw", paddingRight: "2vw", }}>
                <p style={{ fontSize: "2rem" }}>If you need a bus, here are all the provided bus stops:</p>
                <ul style={{ fontSize: "2rem" }}>
                    <li>Naperville Metra Station (North Ellsworth Street, 105 E 4th Ave, Naperville, IL 60540) Pickup March 29, 2025 @ 5:30 AM (Bus departs @ 5:45am)</li>
                    <li>Union Station, Chicago (225 S Canal St, Chicago, IL 60606) Pickup March 29, 2025 @ 5:40 AM (Bus departs at 5:55am)</li>
                    <li>Woodfield Mall, Schaumburg (5 Woodfield Mall, Schaumburg, IL 60173) Pickup March 29, 2025 @ 5:45 AM -- Parking Lot E-30 and E-31 (near Ashley HomeStore) (Bus departs at 6:00am)</li>
                    <li>Oakbrook Center, Oak Brook (100 Oakbrook Center, Oak Brook, IL 60523) Pickup March 29, 2025 @ 6:10 AM (Bus will be coming from Woodfield) -- Parking Lot E (Southwest corner of the center) (Bus departs at 6:25am)</li>
                </ul>
            </div>
        </div>
    );
}

// use bitsequence to find user's classes
function getClasses(bitsequence, classes) {
    let classesTaking = [];
    for (let i = 0; i < Math.min(bitsequence.length, classes.length); i++) {
        if (bitsequence[i] === "1") {
            // find the class and add to classesTaking
            for (let j = 0; j < classes.length; j++) {
                if (classes[j].classIndex === i) {
                    classesTaking.push(classes[j]);
                    break;
                }
            }
        }
    }
    return classesTaking;
}


const initialAuthUser = JSON.parse(localStorage.getItem('authUser'));


function Profile() {  
    const [authUser, setAuthUser] = useState(initialAuthUser);
    const [dataFetched, setDataFetched] = useState(false); // Track if data has been fetched

    if (!authUser) {
        console.log("No initial authUser found in local storage");
        window.location.href = "/login";
    }

    useEffect(() => {
        if (!dataFetched) {
            axios.get(`${SERVER_URL}/get_classes/${initialAuthUser.email}`)
                .then((response) => {
                    console.log('Response from /get_classes:', response);
                    const initialClasses = response.data.classes;
                    setAuthUser((prevAuthUser) => {
                        return {
                            ...prevAuthUser,
                            classes: initialClasses
                        }
                    });
                    setDataFetched(true); // data fetched
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [dataFetched, authUser]);

    useEffect(() => {
        console.log("authUser changed!")
        if (authUser) {
            localStorage.setItem('authUser', JSON.stringify(authUser));
            console.log("changed authUser: ", authUser);
            console.log("authUser classes: " + authUser.classes)
        }
    }, [authUser]);

    const [isEditingFirstName, setIsEditingFirstName] = useState(false);
    const [isEditingLastName, setIsEditingLastName] = useState(false);
    const [isEditingEmail, setIsEditingEmail] = useState(false);

    const[isEditing, setIsEditing] = useState(false);
    
    const [editedFirstName, setEditedFirstName] = useState("");
    const [editedLastName, setEditedLastName] = useState("");
    const [editedEmail, setEditedEmail] = useState("");

    const [originalFirstName, setOriginalFirstName] = useState(authUser ? authUser.first_name : "");
    const [originalLastName, setOriginalLastName] = useState(authUser ? authUser.last_name : "");
    const [originalEmail, setOriginalEmail] = useState(authUser ? authUser.email : "");

    const [isSmallScreen, setIsSmallScreen] = useState(window.matchMedia('(max-width: 1200px)').matches)
    const [flexDirection, setFlexDirection] = useState(isSmallScreen ? "column" : "row")
    const [displayStyle, setDisplayStyle] = useState(isSmallScreen ? "grid" : "flex")

    useEffect(() => {
        const handleResize = () => {
            const isSmallScreen = window.matchMedia('(max-width: 1200px)').matches
            setIsSmallScreen(isSmallScreen)
            setDisplayStyle(isSmallScreen ? "grid" : "flex")
            setFlexDirection(isSmallScreen ? "column" : "row")
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, []);

    const handleSave = () => {
        // if any field is empty, set it to original value
        if (editedEmail === "") {
            setEditedEmail(originalEmail);
        }
        if (editedFirstName === "") {
            setEditedFirstName(originalFirstName);
        }
        if (editedLastName === "") {
            setEditedLastName(originalLastName);
        }
        console.log("editedEmail: ", editedEmail);
        console.log("originalEmail: ", originalEmail);


        // if user edits email, confirm user actually wants to
        if (editedEmail !== originalEmail && editedEmail !== "") {
            if (window.confirm("Are you sure you want to change your email?")) {
                // then continue with the save
            } else {
                // if the user cancels, then return
                return;
            }
        }

        // POST request to change user info
        
        axios.post(`${SERVER_URL}/change_user_info`, {
            firstName: editedFirstName ? editedFirstName : originalFirstName,
            lastName: editedLastName ? editedLastName : originalLastName,
            oldEmail: originalEmail,
            newEmail: editedEmail ? editedEmail : originalEmail,
        }, {
            // withCredentials: true, 
            headers: {
                'Content-Type': 'application/json',
                // 'Access-Control-Allow-Origin': 'true',
            },
            // mode: 'cors'
        })
        .then(response => {
            // set the authUser to the new information
            console.log("response: ", response);
            localStorage.setItem('authUser', JSON.stringify(response.data));
            setOriginalFirstName(response.data.first_name);
            setOriginalLastName(response.data.last_name);
            setOriginalEmail(response.data.email);
        })
        .catch(error => {
            // handle the error if needed
            console.log(error);
        });

        setOriginalFirstName(editedFirstName);
        setOriginalLastName(editedLastName);
        setOriginalEmail(editedEmail);
        
        setIsEditing(false);
        setIsEditingFirstName(false);
        setIsEditingLastName(false);
        setIsEditingEmail(false);
    };

    const handleCancel = () => {
        setEditedFirstName(originalFirstName);
        setEditedLastName(originalLastName);
        setEditedEmail(originalEmail);
        
        setIsEditing(false);
        setIsEditingFirstName(false);
        setIsEditingLastName(false);
        setIsEditingEmail(false);
    };

    console.log("authUser: ", authUser)
    const userClasses = authUser ? getClasses(authUser.classes, CLASSES) : [];
    console.log("userClasses: ", userClasses);
    const firstName = authUser ? authUser.first_name : "Not Signed In";
    const lastName = authUser ? authUser.last_name : "Not Signed In";
    const email = authUser ? authUser.email : "notloggedin@sail.edu";

    const loggedState = localStorage.getItem('isLoggedIn');

    if ((loggedState === "false" || loggedState === null || loggedState === undefined || loggedState === false) && SERVER_URL === PROD_SERVER) {
        console.log("User not logged in. Redirecting to login page...");
        console.log("authUser: ", authUser)
        //window.location.href = "/login";
    }

    return (
        <div style={{ 
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            padding: "0vw"
        }}>
            {/* TITLE */}

            <Typography variant="h2" sx={{fontFamily: 'TAN-PEARL' }}>
                {firstName}
            </Typography>

            <div classname="main-info" style={{ 
                display: "flex", 
                width: "90%", // Increased overall width
                justifyContent: "space-between", // Distribute space between sections
                gap: "5rem", // Add space between sections
                marginTop: "8vh",
            }}>
                {/* PROFILE SECTION */}
                <div className="info" style={{ 
                    display: "flex", 
                    flexDirection: "column", 
                    width: "50%", 
                    gap: "1.5rem",
                    textAlign: "right" // Right-align all text
                }}>
                    <h2 style={{ 
                        fontFamily: "Anta", 
                        fontSize: "64px", 
                        fontWeight: "400", 
                        textAlign: "center", // Center the header
                        marginBottom: "1rem" 
                    }}>
                        PERSONAL INFO
                    </h2>
        
                    {[
                        { 
                            label: "Email", 
                            value: email, 
                            editedValue: editedEmail, 
                            onChange: setEditedEmail 
                        },
                        { 
                            label: "First Name", 
                            value: firstName, 
                            editedValue: editedFirstName, 
                            onChange: setEditedFirstName 
                        },
                        { 
                            label: "Last Name", 
                            value: lastName, 
                            editedValue: editedLastName, 
                            onChange: setEditedLastName 
                        }
                    ].map(({ label, value, editedValue, onChange }) => (
                        <div key={label} style={{ 
                            display: "flex", 
                            alignItems: "center",
                            gap: "10px",
                            fontFamily: "Anta", 
                            fontSize: "40px", 
                            fontWeight: "400",
                            width: "100%"
                        }}>
                            <span>{label}:</span>
                            {isEditing ? (
                                <input
                                    type="text"
                                    value={editedValue}
                                    onChange={(e) => onChange(e.target.value)}
                                    placeholder={value}
                                    style={{ 
                                        fontFamily: "Anta", 
                                        fontSize: "40px",
                                        flexGrow: 1,
                                        minWidth: 0
                                    }}
                                />
                            ) : (
                                <span style={{ 
                                    flexGrow: 1, 
                                    textAlign: 'left' 
                                }}>{value}</span>
                            )}
                        </div>
                    ))}
                
                {/* BUTTONS */}
                {isEditing ? (
                    <div style={{ 
                        marginTop: "2rem", 
                        textAlign: "center" 
                    }}>
                        <button 
                            onClick={handleSave} 
                            className="submit-button"
                            style={{ 
                                display: "inline-block",
                                marginRight: "1rem" // Space between buttons
                            }}
                        >
                            Save
                        </button>
                        <button 
                            onClick={handleCancel} 
                            className="submit-button"
                            style={{ 
                                display: "inline-block" 
                            }}
                        >
                            Cancel
                        </button>
                    </div>
                ) : (
                    <div style={{ textAlign: "center", marginTop: "2rem" }}>
                        <button 
                            onClick={() => setIsEditing(true)} 
                            className="submit-button"
                            style={{ display: "inline-block" }}
                        >
                            Edit
                        </button>
                    </div>
                )}

                </div>
        
                {/* CLASSES SECTION */}
                <div className="user-classes" style={{
                    width: "50%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                }}>
                    <h2 style={{ 
                        fontFamily: "Anta", 
                        fontSize: "64px", 
                        fontWeight: "400", 
                        textAlign: "center", // Center the header
                        marginBottom: "1rem" 
                    }}>
                        CLASSES
                    </h2>

                    <p style={{ 
                        fontFamily: "Anta", 
                        padding: 0,
                        textAlign: "center",
                        fontSize: "40px"
                    }}>
                        No classes currently enrolled.
                    </p>
                </div>
            </div>
        
            
        
            {/* BUS INFO */}
            <div style={{ marginTop: "4rem" }}>
                <BusInfomation />
            </div>
        </div>
    );
};

export default Profile;
