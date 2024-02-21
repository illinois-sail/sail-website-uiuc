import React, { useEffect, useState, useContext } from "react";
import { useAuth } from "./AuthContext";
import { fontSize } from "@mui/system";
import "./cyberpunk.css"; // Import the cyberpunk.css stylesheet

const classes = [{className: "How to succeed at UIUC", time: "11:00", room: "Siebel 1404"}, {className: "Intro to Graph Theory", time: "12:00", room: "Siebel 1404"}, {className: "Recursion and Induction", time: "1:00", room: "Siebel 1404"}]

// authUser.classes is a bitsequence of the classes the user is taking so if the bit at idnex i is 1, then the user is taking the class at index i
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
    console.log("authUser: ", authUser);

    const userClasses = authUser ? getClasses(authUser.classes, classes) : classes; // change
    const firstName = authUser ? authUser.first_name : "Sanjay"; // change
    const lastName = authUser ? authUser.last_name : "Manoj"; // change
    const email = authUser ? authUser.email : "notloggedin@sail.edu"; // change
    const shirtSize = authUser ? authUser.shirt_size : "M"; // 
    const parentName = authUser ? authUser.parent_name : "Spencer Sadler"; // change
    const parentEmail = authUser ? authUser.parent_email : "ssadler5@illinois.edu"; // change

    return (
        <div style={{ 
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            padding: "0vw"
         }}>
            <h1 className="cyber-glitch-2" style={{ // Apply the .glitchtext class
                fontSize: "10vw",
                fontFamily: "Hyperwave",
                color: "rgba(255, 255, 0, 0.5)", // Transparent yellow color
                textShadow: "0 0 5px blue",
                marginBottom: "2vh",
                transform: "skewX(-20deg)",
                background: "linear-gradient(45deg, rgba(0, 255, 0, 0), rgba(255, 0, 255, 0))",
                padding: "10px",
                display: "inline-block",
                border: "4px solid teal", // Updated border thickness to 4px and color to teal
                boxShadow: "0 0 10px 5px rgba(255, 0, 0, 0.5)", // Added more glitch effect with red shadow
                
            }}>
                {firstName} {lastName}
            </h1>
            <div style={{ display: "flex", justifyContent: "center", fontFamily: "JetBrainsMono" }}>
                <div style={{ marginRight: "4vw" }}>
                    <h2>{email}</h2>
                    <p>Shirt Size: {shirtSize}</p>
                    <p>Parent Name: {parentName}</p>
                    <p>Parent Email: {parentEmail}</p>
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
        </div>
    );
};

export default Profile;
