import React, { useState, useEffect } from "react";
import axios from "axios";
import allClasses from "./Classes";
import { Typography, Box, Divider } from '@mui/material';
import SERVER_URL, { PROD_SERVER } from './server_url';
import starsmall from '../assets/star-small.png';
import planet from '../assets/planet.png';
import './Profile.css'; 
import { Link } from 'react-router-dom'; 


const CLASSES = allClasses;

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
            fontFamily: "DM-Sans",
        }}>
            <h1 class="bus-info-title" style={{ fontSize: "3rem" }}>BUS INFORMATION</h1>
            <div style={{ backgroundColor: '#FFFFFF26', borderRadius: '20px', paddingLeft: "2vw", paddingRight: "2vw", }}>
                <p class="bus-info-text" >If you need a bus, here are all the provided bus stops. THESE ARE FREE! You do not have to buy a ticket or pay for them.</p>
                <br/>
                <p class="bus-info-text" >There are buses to take you to the Siebel Center for CS and back. Please arrive 15 minutes before the bus is set to depart.</p>
                <br/>
                <p class="bus-info-text" >MORNING BUSES (DEPARTURES):</p>
                <ul class="bus-info-list" >
                    <li>
                        Naperville Metra Station (North Ellsworth Street, 105 E 4th Ave, Naperville, IL 60540)
                        <ul>
                            <li>Depart Naperville Metra Station @ 5:45 AM</li>
                            <li>Arrive at Siebel Center for CS @ 8:00 AM</li>
                        </ul>
                    </li>
                    <li>
                        Union Station, Chicago (225 S Canal St, Chicago, IL 60606)
                        <ul>
                            <li>Depart Union Station @ 5:55 AM</li>
                            <li>Arrive at Siebel Center for CS @ 8:00 AM</li>
                        </ul>
                    </li>
                    <li>
                        Woodfield Mall, Schaumburg (5 Woodfield Mall, Schaumburg, IL 60173) -- Parking Lot E-30 and E-31 (near Ashley HomeStore)
                        <ul>
                            <li>Depart Woodfield Mall @ 5:45 AM</li>
                            <li>Arrive at Oakbrook Center, Oak Brook @ 6:00 AM</li>
                        </ul>
                    </li>
                    <li>
                        Oakbrook Center, Oak Brook (100 Oakbrook Center, Oak Brook, IL 60523) -- Parking Lot E (Southwest corner of the center)
                        <ul>
                            <li>Depart Oakbrook Center @ 6:15 AM</li>
                            <li>Arrive at Siebel Center for CS @ 8:15 AM</li>
                        </ul>
                    </li>
                </ul>

                <br/>
                <p class="bus-info-text" >EVENING BUSES (ARRIVALS):</p>
                <ul class="bus-info-list" >
                    <li>
                        Naperville Metra Station (North Ellsworth Street, 105 E 4th Ave, Naperville, IL 60540)
                        <ul>
                            <li>Depart Siebel Center for CS @ 6:00 PM</li>
                            <li>Arrive at Naperville Metra Station @ 8:15 PM</li>
                        </ul>
                    </li>
                    <li>
                        Union Station, Chicago (225 S Canal St, Chicago, IL 60606)
                        <ul>
                            <li>Depart Siebel Center for CS @ 6:15 PM</li>
                            <li>Arrive at Union Station @ 8:30 PM</li>
                        </ul>
                    </li>
                    <li>
                        Oakbrook Center, Oak Brook (100 Oakbrook Center, Oak Brook, IL 60523) -- Parking Lot E (Southwest corner of the center)
                        <ul>
                            <li>Depart Siebel Center for CS @ 6:30 PM</li>
                            <li>Arrive at Oakbrook Center @ 8:45 PM</li>
                        </ul>
                    </li>
                    <li>
                        Woodfield Mall, Schaumburg (5 Woodfield Mall, Schaumburg, IL 60173) -- Parking Lot E-30 and E-31 (near Ashley HomeStore)
                        <ul>
                            <li>Depart Oakbrook Center @ 8:50 PM</li>
                            <li>Arrive at Woodfield Mall @ 9:00 PM</li>
                        </ul>
                    </li>
                </ul>
            </div>

        </div>
    );
}

const TitleWithPlanet = ({ firstName }) => (
    <Box
    sx={{
        position: 'relative',
        width: '50%',
        height: { xs: '200px', sm: '250px', md: '350px', lg: '500px', xl: '600px' },
        backgroundImage: `url(${planet})`,
        backgroundSize: {
            xs: 'cover',     // For small screens (xs), use cover
            sm: 'cover',     // Same for medium screens (sm)
            md: 'cover',     // Same for medium devices (md)
            lg: 'contain',   // For large screens (lg) and above, switch to contain
            xl: 'contain',   // For extra-large screens (xl), maintain contain
        },
        backgroundPosition: 'center', // Keep the background centered
        backgroundRepeat: 'no-repeat',
        margin: '0 auto',
    }}
>

        {/* Rotating Name (Horizontal Ring) */}
        <Box
            sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                animation: "rotateText 5s linear infinite",
                "@keyframes rotateText": {
                    "0%": { transform: "rotateY(0deg) translateX(calc(10vw + 20px)) rotateY(0deg)" },
                    "100%": { transform: "rotateY(360deg) translateX(calc(10vw + 20px)) rotateY(-360deg)" }
                }
            }}
        >
            <Typography
                variant="h3"
                sx={{
                    fontFamily: "Anta",
                    textAlign: "center",
                    color: "white",
                    zIndex: 1,
                    textShadow: "0px 0px 15px rgba(255, 255, 255, 1)",
                    marginBottom: '1.5rem',
                    fontSize: 'clamp(2rem, 5vw, 5rem)',
                }}
            >
                {firstName}
            </Typography>
        </Box>
    </Box>
);




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
            if (response.data) {
                localStorage.setItem('authUser', JSON.stringify(response.data));
                setOriginalFirstName(response.data.first_name);
                setOriginalLastName(response.data.last_name);
                setOriginalEmail(response.data.email);
            }
            
            // force reload after saving
            setTimeout(() => {
                window.location.reload(true);
            }, 100);
            
        })
        .catch(error => {
            // handle the error if needed
            console.log(error);
        });

        // setOriginalFirstName(editedFirstName);
        // setOriginalLastName(editedLastName);
        // setOriginalEmail(editedEmail);
        
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
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",  // Align to the top of the parent container
            justifyContent: "flex-start",
                color: "white",
                width: "100%",
                maxWidth: "100vw",
            }}
        >
            {/* TITLE */}
            <Box sx={{ width: "100%" }}>
                <TitleWithPlanet firstName={firstName} /> 
            </Box>

            {/* PROFILE */}
            <Box
                sx={{
                    display: "flex",
                    width: "100%",
                    marginTop: "0vh",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "stretch",
                }}
            >
                {/* PERSONAL INFO SECTION */}
                <Box
                    sx={{
                        flex: 1,
                        padding: "2rem",
                        backgroundColor: "transparent",
                        borderRadius: "15px",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Typography
                    component="h2"
                    sx={{
                        fontFamily: "Anta",
                        fontSize: "clamp(1.5rem, 5vw, 4rem)",
                        fontWeight: "400",
                        textAlign: "center",
                        marginBottom: "1rem",
                        whiteSpace: "nowrap", 
                        overflow: "hidden",
                        textOverflow: "ellipsis", 
                    }}
                >
                    PERSONAL INFO
                </Typography>
        
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
                        <Box
                        key={label}
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", sm: "row" },
                            alignItems: "center",
                            justifyContent: "center", // Keep center alignment
                            gap: "10px",
                            fontFamily: "Anta",
                            fontWeight: "400",
                            width: "100%",
                            marginBottom: "1rem",
                            textAlign: "center",
                        }}
                        >
                        <Box
                            sx={{
                                display: "flex",
                                width: { xs: "100%", sm: "80%" }, // Control the width of the label-value container
                                maxWidth: "600px", // Prevent too wide spacing on large screens
                            }}
                        >
                            {/* Label */}
                            <Typography
                                component="span"
                                sx={{
                                    fontFamily: "Anta",
                                    flexGrow: 1,
                                    fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                                    textAlign: "right", // Right align the label
                                    paddingRight: "1rem", // Space between label and value
                                }}
                            >
                                {label}:
                            </Typography>

                            {/* Editable Input or Value Display */}
                            {isEditing ? (
                                <Box
                                    component="input"
                                    type="text"
                                    value={editedValue}
                                    onChange={(e) => onChange(e.target.value)}
                                    placeholder={value}
                                    sx={{ 
                                        fontFamily: "Anta",
                                        fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                                        color: "white",
                                        flexGrow: 1,
                                        textAlign: "left", // Left align the input
                                        boxSizing: "border-box",
                                        background: "#766fd1",
                                        borderColor: "#766fd1",
                                        "&::placeholder": { 
                                            color: "white", 
                                            opacity: 0.6 
                                        }
                                    }}
                                />
                            ) : (
                                <Typography
                                    component="span"
                                    sx={{
                                        fontFamily: "Anta",
                                        flexGrow: 1,
                                        textAlign: "left", // Left align the value
                                        wordBreak: "break-word",
                                        fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                                    }}
                                >
                                    {value}
                                </Typography>
                            )}
                        </Box>
                        </Box>
                    ))}

                
                    {/* EDIT BUTTON */}
                    <Box
                        sx={{
                            marginTop: "auto",
                            paddingTop: "2rem",
                            textAlign: "center"
                        }}
                    >
                        {isEditing ? (
                            <>
                                <button 
                                    onClick={handleSave} 
                                    className="submit-button"
                                    style={{ 
                                        marginRight: "1rem",
                                    }}
                                >
                                    Save
                                </button>
                                <button 
                                    onClick={handleCancel} 
                                    className="submit-button"
                                >
                                    Cancel
                                </button>
                            </>
                        ) : (
                            <button 
                                onClick={() => setIsEditing(true)} 
                                className="submit-button"
                            >
                                Edit
                            </button>
                        )}
                    </Box>
                </Box>
    
                {/* STYLIZED DIVIDER */}
                <Box
                    sx={{
                        display: { xs: "none", md: "flex" },
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        width: "0%", // Full width to center everything
                    }}
                >
                    {/* Star on top */}
                    <img 
                        src={starsmall} 
                        alt="star top" 
                        style={{
                            position: "absolute",
                            top: "-1rem", // Adjust this value based on the space you want
                            width: "40px", // Adjust size as needed
                            height: "auto"
                        }} 
                    />

                    {/* STYLIZED DIVIDER */}
                    <Divider 
                        orientation="vertical" 
                        flexItem
                        sx={{
                            width: "2px",
                            backgroundColor: "white",
                            margin: "0 1rem",
                            marginTop: "1rem", // Adjust as needed for top margin
                            marginBottom: "1rem",
                        }}
                    />

                    {/* Star on bottom */}
                    <img 
                        src={starsmall} 
                        alt="star bottom" 
                        style={{
                            position: "absolute",
                            bottom: "-1rem", // Adjust this value based on the space you want
                            width: "40px", // Adjust size as needed
                            height: "auto"
                        }} 
                    />
                </Box>
        
                {/* CLASSES SECTION */}
                <Box
                    sx={{
                        flex: 1,
                        padding: "2rem",
                        backgroundColor: "transparent",
                        borderRadius: "15px",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Typography
                        component="h2"
                        sx={{
                            fontFamily: "Anta",
                            fontSize: "clamp(1.5rem, 5vw, 4rem)", 
                            fontWeight: "400",
                            textAlign: "center",
                            marginBottom: "1rem",
                            whiteSpace: "nowrap", 
                            overflow: "hidden",
                            textOverflow: "ellipsis", 
                        }}
                    >
                        CLASSES
                    </Typography>
    
                    <Typography
                        sx={{
                            fontFamily: "Anta",
                            padding: 0,
                            textAlign: "left",
                            fontSize: { xs: "1rem", sm: "1.5rem", md: "1.7rem" },
                            wordBreak: "break-word"
                        }}
                    >
                        <ul>
                            {userClasses.map((item, index) => {
                                const date = item.room === "Zoom" ? "March 30" : "March 29";
                                return (
                                    <li key={index}>
                                        <span>{item.className} </span>
                                        <span>({date}, {item.time}, {item.room})</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </Typography>
                </Box>
            </Box>
    
            {/* BUS INFO */}
            <Box sx={{ marginTop: "4rem", width: "100%" }}>
                <BusInfomation />
            </Box>
        </Box>
    );
};

export default Profile;
