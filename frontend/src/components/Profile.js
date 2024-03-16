import React, { useState, useEffect } from "react";
import "./cyberpunk.css"; 
import axios from "axios";

const CLASSES = [{className: "How to succeed at UIUC", time: "11:00", room: "Siebel 1404"}, 
                {className: "Intro to Graph Theory", time: "12:00", room: "Siebel 1404"}, 
                {className: "Recursion and Induction", time: "1:00", room: "Siebel 1404"},
                {className: "Intro to Cybersecurity", time: "2:00", room: "Siebel 1404"}]

const PROD_SERVER = "https://sail.cs.illinois.edu";
const TEST_SERVER = "http://172.16.0.51:5000";

// assign the server URL based on the url of the window
const SERVER_URL = window.location.href.includes("sail.cs.illinois.edu") ? PROD_SERVER : TEST_SERVER;

const CyberButton = (props) => {
    const background = props.background || "bg-red";
    const foreground = props.foreground || "fg-white";
    const className = `cyber-button ${background} ${foreground}`;
    const text = props.text || "Button Text";
    const onClick = props.onClick || (() => console.log("Button clicked"));
    return (
        <button className={className} onClick={onClick}>
            {text}
            <span className="glitchtext">SAIL</span>
            <span className="tag">CS</span>
        </button>
    );
};

// find the classes that the user is in given their bitsequence and the official list of classes
function getClasses(bitsequence, classes) {
    let result = [];
    for (let i = 0; i < Math.min(bitsequence.length, classes.length); i++) {
        if (bitsequence[i] === "1") {
            result.push(classes[i]);
        }
    }
    return result;
}

const InformationLink = (props) => {
    return (
        <div style={{
            display: "flex", 
            justifyContent: "center",
            border: "2px solid purple",
            borderRadius: "10px",
            boxShadow: "0 0 5px blue, 0 0 10px purple",
            width: "40%",
            padding: "0.5%",
            textAlign: "center",

        }}>
            <h3>
                <a href={props.href} style={{ color: "white",  fontFamily: "JetBrainsMono" }}>
                    {props.text}
                </a>
            </h3>
        </div>
    );
}

const initialAuthUser = JSON.parse(localStorage.getItem('authUser'));

function Profile() {  
    const [authUser, setAuthUser] = useState(initialAuthUser);
    const [dataFetched, setDataFetched] = useState(false); // Track if data has been fetched

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
                    setDataFetched(true); // Mark data as fetched
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
    const [isEditingShirtSize, setIsEditingShirtSize] = useState(false);
    const [isEditingParentName, setIsEditingParentName] = useState(false);
    const [isEditingParentEmail, setIsEditingParentEmail] = useState(false);
    
    const [editedFirstName, setEditedFirstName] = useState("");
    const [editedLastName, setEditedLastName] = useState("");
    const [editedEmail, setEditedEmail] = useState("");
    const [editedShirtSize, setEditedShirtSize] = useState("");
    const [editedParentName, setEditedParentName] = useState("");
    const [editedParentEmail, setEditedParentEmail] = useState("");
    
    const [originalFirstName, setOriginalFirstName] = useState(authUser ? authUser.first_name : "");
    const [originalLastName, setOriginalLastName] = useState(authUser ? authUser.last_name : "");
    const [originalEmail, setOriginalEmail] = useState(authUser ? authUser.email : "");
    const [originalShirtSize, setOriginalShirtSize] = useState(authUser ? authUser.shirt_size : "");
    const [originalParentName, setOriginalParentName] = useState(authUser ? authUser.parent_name : "");
    const [originalParentEmail, setOriginalParentEmail] = useState(authUser ? authUser.parent_email : "");

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

    const handleDoubleClick = (field) => {
        switch (field) {
            case "all":
                setIsEditingFirstName(true);
                setIsEditingLastName(true);
                setIsEditingEmail(true);
                setIsEditingShirtSize(true);
                setIsEditingParentName(true);
                setIsEditingParentEmail(true);
                break;
            case "email":
                setIsEditingEmail(true);
                setEditedEmail(originalEmail);
                break;
            case "shirtSize":
                setIsEditingShirtSize(true);
                setEditedShirtSize(originalShirtSize);
                break;
            case "parentName":
                setIsEditingParentName(true);
                setEditedParentName(originalParentName);
                break;
            case "parentEmail":
                setIsEditingParentEmail(true);
                setEditedParentEmail(originalParentEmail);
                break;
            case "firstName":
                setIsEditingFirstName(true);
                setEditedFirstName(originalFirstName);
                break;
            case "lastName":
                setIsEditingLastName(true);
                setEditedLastName(originalLastName);
                break;
            default:
                break;
        }
    };

    const handleSave = () => {
        // if any field is empty, set it to the original value
        if (editedEmail === "") {
            setEditedEmail(originalEmail);
        }
        if (editedShirtSize === "") {
            setEditedShirtSize(originalShirtSize);
        }
        if (editedParentName === "") {
            setEditedParentName(originalParentName);
        }
        if (editedParentEmail === "") {
            setEditedParentEmail(originalParentEmail);
        }
        if (editedFirstName === "") {
            setEditedFirstName(originalFirstName);
        }
        if (editedLastName === "") {
            setEditedLastName(originalLastName);
        }
        console.log("editedEmail: ", editedEmail);
        console.log("originalEmail: ", originalEmail);


        // if the editedEmail is different from the originalEmail, then alert the user they are changing their email and ask for confirmation
        if (editedEmail !== originalEmail && editedEmail !== "") {
            if (window.confirm("Are you sure you want to change your email?")) {
                // then continue with the save
            } else {
                // if the user cancels, then return
                return;
            }
        }

        // Send a POST request with the new information to "localhost:5000/change_user_info"
        // You can use a library like axios to make the POST request
        // Example using axios:
        
        axios.post(`${SERVER_URL}/change_user_info`, {
            firstName: editedFirstName ? editedFirstName : originalFirstName,
            lastName: editedLastName ? editedLastName : originalLastName,
            oldEmail: originalEmail,
            newEmail: editedEmail ? editedEmail : originalEmail,
            shirtSize: editedShirtSize ? editedShirtSize : originalShirtSize,
            parentName: editedParentName ? editedParentName : originalParentName,
            parentEmail: editedParentEmail ? editedParentEmail : originalParentEmail
        }, {
            // withCredentials: true, 
            headers: {
                'Content-Type': 'application/json',
                // 'Access-Control-Allow-Origin': 'true',
            },
            // mode: 'cors'
        })
        .then(response => {
            // take the response and set the authUser to the new information
            console.log("response: ", response);
            localStorage.setItem('authUser', JSON.stringify(response.data));
            setOriginalFirstName(response.data.first_name);
            setOriginalLastName(response.data.last_name);
            setOriginalEmail(response.data.email);
            setOriginalShirtSize(response.data.shirt_size);
            setOriginalParentName(response.data.parent_name);
            setOriginalParentEmail(response.data.parent_email);
        })
        .catch(error => {
            // Handle the error if needed
        });

        setOriginalFirstName(editedFirstName);
        setOriginalLastName(editedLastName);
        setOriginalEmail(editedEmail);
        setOriginalShirtSize(editedShirtSize);
        setOriginalParentName(editedParentName);
        setOriginalParentEmail(editedParentEmail);
        
        setIsEditingFirstName(false);
        setIsEditingLastName(false);
        setIsEditingEmail(false);
        setIsEditingShirtSize(false);
        setIsEditingParentName(false);
        setIsEditingParentEmail(false);
    };

    const handleCancel = () => {
        setEditedFirstName(originalFirstName);
        setEditedLastName(originalLastName);
        setEditedEmail(originalEmail);
        setEditedShirtSize(originalShirtSize);
        setEditedParentName(originalParentName);
        setEditedParentEmail(originalParentEmail);
        
        setIsEditingFirstName(false);
        setIsEditingLastName(false);
        setIsEditingEmail(false);
        setIsEditingShirtSize(false);
        setIsEditingParentName(false);
        setIsEditingParentEmail(false);
    };

    console.log("authUser: ", authUser)
    const userClasses = authUser ? getClasses(authUser.classes, CLASSES) : [];
    console.log("userClasses: ", userClasses);
    const firstName = authUser ? authUser.first_name : "Not Signed In";
    const lastName = authUser ? authUser.last_name : "";
    const email = authUser ? authUser.email : "notloggedin@sail.edu";
    const shirtSize = authUser ? authUser.shirt_size : "X";
    const parentName = authUser ? authUser.parent_name : "Not Signed In";
    const parentEmail = authUser ? authUser.parent_email : "notloggedin@sail.edu";

    const loggedState = localStorage.getItem('isLoggedIn');

    if ((loggedState === "false" || loggedState === null || loggedState === undefined || loggedState === false) && SERVER_URL === PROD_SERVER) {
        console.log("User not logged in. Redirecting to login page...");
        console.log("authUser: ", authUser)
        window.location.href = "/login";
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
            <div style={{ 
                display: "flex", 
                justifyContent: "center",
                border: "2px solid purple",
                borderRadius: "10px",
                boxShadow: "0 0 5px blue, 0 0 10px purple",
                marginBottom: "2vh",
                marginTop: "8vh",
            }}>
                <h1
                    className="cyber-glitch-2"
                    style={{
                        fontSize: "10vw", // Increase the font size for more space
                        fontFamily: "Hyperwave",
                        color: "rgba(255, 255, 0, 0.5)",
                        textShadow: "0 0 5px blue",
                        marginBottom: "1.5vh",
                        marginTop: "2vh",
                        marginLeft: "2vw",
                        transform: "skewX(-20deg)",
                        background: "linear-gradient(45deg, rgba(0, 255, 0, 0), rgba(255, 0, 255, 0))",
                        padding: "0 10px 0 30px", // Adjusted padding
                        display: "inline-block",
                    }}
                    onDoubleClick={() => handleDoubleClick("firstName")}
                >
                    {isEditingFirstName ? (
                        <div className="cyber-input ac-purple fg-green" style={{ fontSize: "4vw" }}>
                            <input
                                type="text"
                                value={editedFirstName}
                                onChange={(e) => setEditedFirstName(e.target.value)}
                                placeholder={firstName}
                            />
                        </div>
                    ) : (
                        firstName
                    )}
                </h1>
                <h1
                    className="cyber-glitch-2"
                    style={{
                        fontSize: "10vw", // Increase the font size for more space
                        fontFamily: "Hyperwave",
                        color: "rgba(255, 255, 0, 0.5)",
                        textShadow: "0 0 5px blue",
                        marginBottom: "1.5vh",
                        marginTop: "2vh",
                        marginRight: "2vw",
                        marginLeft: "2vw",
                        transform: "skewX(-20deg)",
                        background: "linear-gradient(45deg, rgba(0, 255, 0, 0), rgba(255, 0, 255, 0))",
                        padding: "0 30px 0 10px", // Adjusted padding
                        display: "inline-block",
                    }}
                    onDoubleClick={() => handleDoubleClick("lastName")}
                >
                    {isEditingLastName ? (
                        <div className="cyber-input ac-purple fg-green" style={{ fontSize: "4vw" }}>
                            <input
                                type="text"
                                value={editedLastName}
                                onChange={(e) => setEditedLastName(e.target.value)}
                                placeholder={lastName}
                            />
                        </div>
                    ) : (
                        lastName
                    )}
                </h1>
            </div>
            <InformationLink href="https://docs.google.com/forms/d/e/1FAIpQLSeZcLMvZxhJA8XDKJW2LW41nE94aLh89RkqBKnKOX_3t0AUBw/viewform" text="Fill out the SAIL 2024 Waiver Form" />
            <br/>
            <InformationLink href="/registration" text="Register for SAIL" />
            <br/>
            <div className="infoAndClasses" style={{ display: displayStyle, fontFamily: "JetBrainsMono", width: "50%", flexDirection: flexDirection, gap: "1vw" }}>
                <div className="info" position="relative" style={{ display: "flex", flexDirection: "column", alignItems: "left", justifyContent: "left", width: "60%" }}>
                    <h2 onDoubleClick={() => handleDoubleClick("email")}>{isEditingEmail ? <div className="cyber-input ac-purple fg-green" style={{ fontSize: "1vw" }}><input type="text" value={editedEmail} onChange={(e) => setEditedEmail(e.target.value)} placeholder={email}/></div> : email}</h2>
                    <p onDoubleClick={() => handleDoubleClick("shirtSize")}>
                        Shirt Size: {isEditingShirtSize ? (
                            <div className="cyber-input ac-purple fg-green" style={{ fontSize: "1vw" }}>
                                <input
                                    type="text"
                                    value={editedShirtSize}
                                    onChange={(e) => setEditedShirtSize(e.target.value)}
                                    placeholder={shirtSize}
                                    style={{ fontFamily: "JetBrainsMono" }}
                                />
                            </div>
                        ) : (
                            <span style={{ fontFamily: "JetBrainsMono" }}>{shirtSize}</span>
                        )}
                    </p>
                    <p onDoubleClick={() => handleDoubleClick("parentName")}>
                        Parent Name: {isEditingParentName ? (
                            <div className="cyber-input ac-purple fg-green" style={{ fontSize: "1vw" }}>
                                <input
                                    type="text"
                                    value={editedParentName}
                                    onChange={(e) => setEditedParentName(e.target.value)}
                                    placeholder={parentName}
                                    style={{ fontFamily: "JetBrainsMono" }}
                                />
                            </div>
                        ) : (
                            <span style={{ fontFamily: "JetBrainsMono" }}>{parentName}</span>
                        )}
                    </p>
                    <p onDoubleClick={() => handleDoubleClick("parentEmail")}>
                        Parent Email: {isEditingParentEmail ? (
                            <div className="cyber-input ac-purple fg-green" style={{ fontSize: "1vw" }}>
                                <input
                                    type="text"
                                    value={editedParentEmail}
                                    onChange={(e) => setEditedParentEmail(e.target.value)}
                                    placeholder={parentEmail}
                                    style={{ fontFamily: "JetBrainsMono" }}
                                />
                            </div>
                        ) : (
                            <span style={{ fontFamily: "JetBrainsMono" }}>{parentEmail}</span>
                        )}
                    </p>
                    </div>
                <div>
                    <h2 style={{ }}>Classes</h2>
                    <ul>
                        {userClasses.map((item, index) => {
                            return (
                                <li key={index}>
                                    <span>{item.className} </span>
                                    <span>({item.time}, {item.room})</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            {(isEditingEmail || isEditingShirtSize || isEditingParentName || isEditingParentEmail || isEditingFirstName || isEditingLastName) ? (
                <div style={{ marginTop: "10px" }}>
                    <CyberButton text="Save" onClick={handleSave} background="bg-green" />
                    <span style={{ marginRight: "10px" }}></span>
                    <CyberButton text="Cancel" onClick={handleCancel} />
                </div>
            ) : (
                <CyberButton text="Edit" onClick={() => handleDoubleClick("all")} />
            )}
        </div>
    );
};

export default Profile;
