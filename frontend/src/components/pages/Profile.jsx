import React, { useState, useEffect } from "react";
import axios from "axios";
import SERVER_URL, { PROD_SERVER } from "../server_url";
import SIEBEL_LOC from "../../assets/siebel_loc.png";
import "./Profile.css";

const MapLocation = () => {
  return (
    <div className="location-map">
      <a href="https://www.google.com/maps/place/Thomas+M.+Siebel+Center+for+Computer+Science/@40.1138069,-88.2274801,16z/data=!3m2!4b1!5s0x880cd76a5762dfb7:0xcf6a023935717398!4m6!3m5!1s0x880cd76baa8479a9:0x4e9f01d40d359630!8m2!3d40.1138028!4d-88.2249052!16s%2Fm%2F0yqkg1s?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D" 
         target="_blank" 
         rel="noopener noreferrer">
        <img src={SIEBEL_LOC} className="siebel-loc-image" alt="Siebel CS Location" />
      </a>
    </div>
  );
}

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

const ClassesDisplay = () => {
  return (
    <div className="classes-svg-wrapper" style={{ position: "relative", width: "53vw" }}>
      <svg className="classes-svg" xmlns="http://www.w3.org/2000/svg" width="814" height="309" viewBox="0 0 820 309">
        <path d="M2 2H816L671.825 307H2V2Z" fill="#FFF" stroke="black" strokeWidth="4" />
      </svg>
      <div className="svg-content" style={{ position: "absolute", top: "12%", left: "4%" }}>
        <span className="profile-title">Classes</span>
        <div className="title-underline" />
        <span className="profile-text"><br/>COMING SOON!</span>
      </div>
    </div>
  );
}

const initialAuthUser = JSON.parse(localStorage.getItem("authUser"));

function Profile() {
  const [authUser, setAuthUser] = useState(initialAuthUser);
  const [dataFetched, setDataFetched] = useState(false); // Track if data has been fetched

  /*
   * The below is uncommented for testing purposes
   */
  // if (!authUser) {
  //   console.log("No initial authUser found in local storage");
  //   window.location.href = "/login";
  // }

  /*
   * Insert useEffect for getting classes here
   */

  useEffect(() => {
    console.log("authUser changed!");
    if (authUser) {
      localStorage.setItem("authUser", JSON.stringify(authUser));
      console.log("changed authUser: ", authUser);
      console.log("authUser classes: " + authUser.classes);
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

  const [isSmallScreen, setIsSmallScreen] = useState(window.matchMedia('(max-width: 1200px)').matches);
  const [flexDirection, setFlexDirection] = useState(isSmallScreen ? "column" : "row");
  const [displayStyle, setDisplayStyle] = useState(isSmallScreen ? "grid" : "flex");

  useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.matchMedia("(max-width: 1200px)").matches;
      setIsSmallScreen(isSmallScreen);
      setDisplayStyle(isSmallScreen ? "grid" : "flex");
      setFlexDirection(isSmallScreen ? "column" : "row");
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize);
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
      setEditedFirstName(originalLastName);
    }
    console.log("editedEmail: ", editedEmail);
    console.log("originalEmail: ", originalEmail);

    // if user edits email, confirm user actually wants to
    if (editedEmail !== originalEmail && editedEmail !== "") {
      if (window.confirm("Are you sure you want to change your email?")) {
        // then continue with the save
      }
      else {
        // if the user cancels then return
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
        "Content-Type": "application/json",
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

  

  return (
    <div>
      COMING SOON!
      {/* <ClassesDisplay/> */}
      {/* <MapLocation/> */}
    </div>
  );
}

export default Profile;
