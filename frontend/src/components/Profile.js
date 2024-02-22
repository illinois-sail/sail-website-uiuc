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
    const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();
    
    const [isEditingEmail, setIsEditingEmail] = useState(false);
    const [isEditingShirtSize, setIsEditingShirtSize] = useState(false);
    const [isEditingParentName, setIsEditingParentName] = useState(false);
    const [isEditingParentEmail, setIsEditingParentEmail] = useState(false);
    
    const [editedEmail, setEditedEmail] = useState("");
    const [editedShirtSize, setEditedShirtSize] = useState("");
    const [editedParentName, setEditedParentName] = useState("");
    const [editedParentEmail, setEditedParentEmail] = useState("");
    
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

        // ADD VALIDATION HERE (TODO)

        // make sure email is unique
        // make sure shirt size is valid
        // make sure parent email is valid


        // Send a POST request with the new information to "localhost:5000/change_user_info"
        // You can use a library like axios to make the POST request
        // Example using axios:
        axios.post("http://127.0.0.1:5000/change_user_info", {
            oldEmail: originalEmail,
            newEmail: editedEmail ? editedEmail : originalEmail,
            shirtSize: editedShirtSize ? editedShirtSize : originalShirtSize,
            parentName: editedParentName ? editedParentName : originalParentName,
            parentEmail: editedParentEmail ? editedParentEmail : originalParentEmail
        })
        .then(response => {
            // take the response and set the authUser to the new information
            console.log("response: ", response);
            setAuthUser(response.data);
            setOriginalEmail(response.data.email);
            setOriginalShirtSize(response.data.shirt_size);
            setOriginalParentName(response.data.parent_name);
            setOriginalParentEmail(response.data.parent_email);
        })
        .catch(error => {
            // Handle the error if needed
        });

        setIsEditingEmail(false);
        setIsEditingShirtSize(false);
        setIsEditingParentName(false);
        setIsEditingParentEmail(false);

        setOriginalEmail(editedEmail);
        setOriginalShirtSize(editedShirtSize);
        setOriginalParentName(editedParentName);
        setOriginalParentEmail(editedParentEmail);
    };

    const handleCancel = () => {
        setEditedEmail(originalEmail);
        setEditedShirtSize(originalShirtSize);
        setEditedParentName(originalParentName);
        setEditedParentEmail(originalParentEmail);
        
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
        console.log("isLoggedIn: ", isLoggedIn);
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
            <h1 className="cyber-glitch-2" style={{
                fontSize: "10vw",
                fontFamily: "Hyperwave",
                color: "rgba(255, 255, 0, 0.5)",
                textShadow: "0 0 5px blue",
                marginBottom: "2vh",
                transform: "skewX(-20deg)",
                background: "linear-gradient(45deg, rgba(0, 255, 0, 0), rgba(255, 0, 255, 0))",
                padding: "10px",
                display: "inline-block",
                border: "4px solid teal",
                boxShadow: "0 0 10px 5px rgba(255, 0, 0, 0.5)",
                
            }}>
                {firstName} {lastName}
            </h1>
            <div style={{ display: "flex", justifyContent: "center", fontFamily: "JetBrainsMono", width: "100%" }}>
                <div style={{ marginRight: "4vw" }}>
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
            {(isEditingEmail || isEditingShirtSize || isEditingParentName || isEditingParentEmail) ? (
                <div>
                    <CyberButton text="Save" onClick={handleSave} />
                    <CyberButton text="Cancel" onClick={handleCancel} />
                </div>
            ) : (
                <CyberButton text="Edit" onClick={() => handleDoubleClick("email")} />
            )}
        </div>
    );
};

export default Profile;
