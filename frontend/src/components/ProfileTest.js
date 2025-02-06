import React, { useState, useEffect } from "react";
import axios from "axios";
import allClasses from "./Classes";
import { Typography, Box, Divider } from '@mui/material';
import SERVER_URL, { PROD_SERVER } from './server_url';
import starsmall from '../assets/star-small.png';
import planet from '../assets/planet.png';

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
            fontFamily: "Anta",
        }}>
            <h1 style={{ fontSize: "3rem" }}>BUS INFORMATION</h1>
            <div style={{ backgroundColor: '#FFFFFF26', borderRadius: '20px', paddingLeft: "2vw", paddingRight: "2vw", }}>
                <p style={{ fontSize: "2rem" }}>If you need a bus, here are all the provided bus stops:</p>
                <ul style={{ fontSize: "2rem" }}>
                    <li>Naperville Metra Station (North Ellsworth Street, 105 E 4th Ave, Naperville, IL 60540) Pickup April 13, 2024 @ 5:45 AM</li>
                    <li>Union Station, Chicago (225 S Canal St, Chicago, IL 60606) Pickup April 13, 2024 @ 5:55 AM</li>
                    <li>Woodfield Mall, Schaumburg (5 Woodfield Mall, Schaumburg, IL 60173) Pickup April 13, 2024 @ 5:45 AM -- Parking Lot E-30 and E-31 (near Ashley HomeStore)</li>
                    <li>Oakbrook Center, Oak Brook (100 Oakbrook Center, Oak Brook, IL 60523) Pickup April 13, 2024 @ 6:10 AM (Bus will be coming from Woodfield) -- Parking Lot E (Southwest corner of the center)</li>
                </ul>
            </div>
        </div>
    );
}

const TitleWithPlanet = ({ firstName }) => (
    <Box
        sx={{
            position: 'relative',  // Position relative to the Box
            width: '50%',
            height: { 
                xs: '200px',      // For small screens (xs), height will be 200px
                sm: '250px',      // For medium screens (sm), height will be 300px
                md: '350px', 
                lg: '450px', 
                xl: '500px',     // For larger screens (md), height will be 400px
            },
            backgroundImage: `url(${planet})`,  // Set the image as background
            backgroundSize: 'cover',  // Fit the image inside the container without clipping
            backgroundPosition: 'top',
            backgroundPosition: 'center', // Center the image
            display: 'flex',
            justifyContent: 'center',  // Center text horizontally
            alignItems: 'center',      // Center text vertically
            backgroundRepeat: 'no-repeat',
            margin: '0 auto'
        }}
    >
        <Typography 
            variant="h3" 
            sx={{
                fontFamily: 'Anta',
                textAlign: "center",
                color: 'white',  // You may want to ensure the text is visible over the image
                zIndex: 1,       // Ensure text is above the image
                textShadow: '0px 0px 15px rgba(255, 255, 255, 1)',
                paddingBottom: '1.5rem',
            }}
        >
            {firstName}
        </Typography>
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




function ProfileTest() {  

    const authUser = null;

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
                    marginTop: "8vh",
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
                                justifyContent: "center", // Ensure full centering
                                gap: "10px",
                                fontFamily: "Anta",
                                fontSize: { xs: "2rem", sm: "3rem", md: "4rem" }, 
                                fontWeight: "400",
                                width: "100%",
                                marginBottom: "1rem",
                                textAlign: "center", // Ensure text aligns center in all child elements
                            }}
                        >
                            {/* Label */}
                            <Typography
                                component="span"
                                sx={{
                                    fontFamily: "Anta",
                                    flexGrow: 1, // Make label and value equally spaced
                                    fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                                }}
                            >
                                {label}:
                            </Typography>

                            {/* Editable Input or Value Display */}
                            {isEditing ? (
                                <input
                                    type="text"
                                    value={editedValue}
                                    onChange={(e) => onChange(e.target.value)}
                                    placeholder={value}
                                    style={{ 
                                        fontFamily: "Anta",
                                        fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                                        width: "100%",
                                        maxWidth: "400px", // Limit width to prevent stretching
                                        textAlign: "center", // Center text inside input field
                                        boxSizing: "border-box",
                                        background: "#D9D9D966"
                                    }}
                                />
                            ) : (
                                <Typography
                                    component="span"
                                    sx={{
                                        fontFamily: "Anta",
                                        flexGrow: 1, // Ensures equal spacing with label
                                        textAlign: "center", // Centers text when not editing
                                        wordBreak: "break-word", // Prevents overflow issues
                                        fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                                    }}
                                >
                                    {value}
                                </Typography>
                            )}
                        </Box>
                    ))}

                
                    {/* BUTTONS */}
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
    
                {/* STYLIZED DIVIDER - Only visible on medium screens and up */}
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
                            textAlign: "center",
                            fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
                            wordBreak: "break-word"
                        }}
                    >
                        No classes currently enrolled.
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

export default ProfileTest;