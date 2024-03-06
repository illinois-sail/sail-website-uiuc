import React, { useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import "./cyberpunk.css"; // Import the cyberpunk.css stylesheet
import axios from "axios";

const classes = [{className: "How to succeed at UIUC", time: "11:00", room: "Siebel 1404"}, {className: "Intro to Graph Theory", time: "12:00", room: "Siebel 1404"}, {className: "Recursion and Induction", time: "1:00", room: "Siebel 1404"}]

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
    for (let i = 0; i < classes.length; i++) {
        if (bitsequence[i] === "1") {
            result.push(classes[i]);
        }
    }
    return result;
}



function Profile() {  
    const authUser = JSON.parse(localStorage.getItem('authUser'));

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

    useEffect(() => {
        if (authUser) {
            setOriginalEmail(authUser.email);
            setOriginalShirtSize(authUser.shirt_size);
            setOriginalParentName(authUser.parent_name);
            setOriginalParentEmail(authUser.parent_email);
        }
    }, [authUser]);

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

        // ADD VALIDATION HERE (TODO)

        // // Capitalize the first letter of the first and last name
        // setEditedFirstName(editedFirstName.charAt(0).toUpperCase() + editedFirstName.slice(1).toLowerCase());
        // setEditedLastName(editedLastName.charAt(0).toUpperCase() + editedLastName.slice(1).toLowerCase());

        // // make sure email is unique and contains an @ symbol
        // if ("@".indexOf(editedEmail) === -1) {
        //     alert("Invalid email address");
        //     return;
        // } else if (editedEmail !== originalEmail) {
        //     // make a POST request to the server to check if the email is unique
        //     axios.post("http://127.0.0.1:5000/check_email", {
        //         email: editedEmail
        //     })
        //     .then(response => {
        //         if (response.status == 400) {
        //             alert("Email already exists");
        //             return;
        //         } else if (response.status == 200) {
        //             alert("Email changed successfully")
        //             return;
        //         } else {
        //             alert("Unknown error");
        //             return;
        //         }
        //     })
        //     .catch(error => {
        //         // Handle the error if needed
        //     });
        // }
        // // make sure shirt size is valid
        // if (editedShirtSize !== "XS" || editedShirtSize !== "S" || editedShirtSize !== "M" || editedShirtSize !== "L" || editedShirtSize !== "XL") {
        //     alert("Invalid shirt size");
        //     return;
        // }


        // // make sure parent email is valid
        // if ("@".indexOf(editedParentEmail) === -1) {
        //     alert("Invalid parent email address");
        //     return;
        // }


        // if the editedEmail is different from the originalEmail, then alert the user they are changing their email and ask for confirmation
        if (editedEmail !== originalEmail) {
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
        axios.post("http://127.0.0.1:5000/change_user_info", {
            firstName: editedFirstName ? editedFirstName : originalFirstName,
            lastName: editedLastName ? editedLastName : originalLastName,
            oldEmail: originalEmail,
            newEmail: editedEmail ? editedEmail : originalEmail,
            shirtSize: editedShirtSize ? editedShirtSize : originalShirtSize,
            parentName: editedParentName ? editedParentName : originalParentName,
            parentEmail: editedParentEmail ? editedParentEmail : originalParentEmail
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

        setIsEditingFirstName(false);
        setIsEditingLastName(false);
        setIsEditingEmail(false);
        setIsEditingShirtSize(false);
        setIsEditingParentName(false);
        setIsEditingParentEmail(false);

        setOriginalFirstName(editedFirstName);
        setOriginalLastName(editedLastName);
        setOriginalEmail(editedEmail);
        setOriginalShirtSize(editedShirtSize);
        setOriginalParentName(editedParentName);
        setOriginalParentEmail(editedParentEmail);
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

    const userClasses = authUser ? getClasses(authUser.classes, classes) : [];
    const firstName = authUser ? authUser.first_name : "Sanjay";
    const lastName = authUser ? authUser.last_name : "Manoj";
    const email = authUser ? authUser.email : "notloggedin@sail.edu";
    const shirtSize = authUser ? authUser.shirt_size : "M";
    const parentName = authUser ? authUser.parent_name : "Spencer Sadler";
    const parentEmail = authUser ? authUser.parent_email : "ssadler5@illinois.edu";

    const loggedState = localStorage.getItem('isLoggedIn');

    if (loggedState === "false" || loggedState === null || loggedState === undefined || loggedState == false) {
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
                        <div className="cyber-input ac-purple fg-green">
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
                        <div className="cyber-input ac-purple fg-green">
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
            <div className="infoAndClasses"  style={{ display: "flex", justifyContent: "flex-start", fontFamily: "JetBrainsMono", width: "50%" }}>
                <div className="info" position="relative" style={{ display: "flex", flexDirection: "column", alignItems: "left", justifyContent: "left", width: "60%" }}>
                    <h2 onDoubleClick={() => handleDoubleClick("email")}>{isEditingEmail ? <div className="cyber-input ac-purple fg-green"><input type="text" value={editedEmail} onChange={(e) => setEditedEmail(e.target.value)} placeholder={email}/></div> : email}</h2>
                    <p onDoubleClick={() => handleDoubleClick("shirtSize")}>
                        Shirt Size: {isEditingShirtSize ? (
                            <div className="cyber-input ac-purple fg-green">
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
                            <div className="cyber-input ac-purple fg-green">
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
                            <div className="cyber-input ac-purple fg-green">
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
