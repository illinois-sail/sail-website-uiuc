import React, { useState, useEffect } from "react";
import axios from "axios";
import SERVER_URL, { PROD_SERVER } from "../server_url";
import SIEBEL_LOC from "../../assets/siebel_loc.png";
import "./Profile.css";

const ProfileHeader = () => {
  return (
    <div className="profile-header" style={{ width: "80vw", height: "20vw", border: "0.30vw solid #000", background: "#79CCFF", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <span className="profile-header-text">My Profile</span>
    </div>
  );
}

const MapLocation = () => {
  return (
    <div className="location-map">
      <a href="https://www.google.com/maps/place/Thomas+M.+Siebel+Center+for+Computer+Science/@40.1138069,-88.2274801,16z/data=!3m2!4b1!5s0x880cd76a5762dfb7:0xcf6a023935717398!4m6!3m5!1s0x880cd76baa8479a9:0x4e9f01d40d359630!8m2!3d40.1138028!4d-88.2249052!16s%2Fm%2F0yqkg1s?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D" 
         target="_blank" 
         rel="noopener noreferrer">
        <img src={SIEBEL_LOC} className="siebel-loc-image" alt="Siebel CS Location" style={{
          width: "32.7vw",
          height: "21.9vw",
          border: "0.3vw solid #000"
        }}/>
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
      <div className="classes-svg-content" style={{ position: "absolute", top: "12%", left: "4%" }}>
        <span className="profile-title">Classes</span>
        <div className="title-underline" />
        <span className="profile-text"><br/>COMING SOON!</span>
      </div>
    </div>
  );
}

const RegisterForClasses = () => {
  return (
    <div className="register-prompt-wrapper" style={{ position: "relative", width: "32vw" }}>
      <svg className="register-prompt-svg" xmlns="http://www.w3.org/2000/svg" width="498" height="309" viewBox="0 0 498 309" fill="none">
        <path d="M149.325 2L3.17603 307H398.578L495.176 2H149.325Z" fill="white" stroke="black" stroke-width="4"/>
      </svg>
      <div className="register-prompt-svg-content" style={{ position: "absolute", top: "35%", left: "40%", width: "13vw" }}>
        {/* <span className="profile-text">Complete Registration <a href="/classes">Here</a></span> */}
        <span className="profile-text">Class Registration Coming Soon!</span>
      </div>
    </div>
  );
}

const PersonalInformation = ({ authUser, isEditing, setIsEditing, editedFirstName, setEditedFirstName, editedLastName, setEditedLastName, editedEmail, setEditedEmail, handleSave, handleCancel }) => {
  return (
    <div className="pers-info-container">
      <div className="pers-info-content" style={{ marginTop: "2vw", marginLeft: "2vw" }}>
        <span className="profile-title">Personal Information</span>
        <div className="title-underline" style={{ width: "26.8vw" }}/>
        {isEditing ? (
          <>
            <span className="profile-text"><br/>
              First Name:
              <input value={editedFirstName} onChange={(e) => setEditedFirstName(e.target.value)} />
            </span>
            <span className="profile-text"><br/>
              Last Name:
              <input value={editedLastName} onChange={(e) => setEditedLastName(e.target.value)} />
            </span>
            <span className="profile-text"><br/>
              Email:
              <input value={editedEmail} onChange={(e) => setEditedEmail(e.target.value)} />
            </span>
          </>
        ) : (
          <>
            <span className="profile-text"><br/>First Name: {authUser?.first_name}</span>
            <span className="profile-text"><br/>Last Name: {authUser?.last_name}</span>
            <span className="profile-text"><br/>Email: {authUser?.email}</span>
          </>
        )}       
      </div>
      
      {isEditing ? (
        <div style={{ position: "absolute", bottom: "2vw", right: "2vw" }}>
          <button className="edit-info-btn-container" onClick={handleSave}>
            <span className="edit-text">Save</span>
          </button>
          <button className="edit-info-btn-container" style={{ marginLeft: "1vw", background: "gray" }} onClick={handleCancel}>
            <span className="edit-text">Cancel</span>
          </button>
        </div>
      ) : (
        <button className="edit-info-btn-container" style={{ position: "absolute", bottom: "2vw", right: "2vw" }} onClick={() => setIsEditing(true)}>
          <span className="edit-text">Edit</span>
        </button>
      )}
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
      setEditedLastName(originalLastName);
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
    <div className="profile" style={{ marginTop: "7vw", display: "flex", alignItems: "center", flexDirection: "column", gap: "2vw" }}>
      <ProfileHeader/>
      <div className="first-row" style={{ display: "flex", gap: "2vw" }}>
        <PersonalInformation 
          authUser={authUser}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          editedFirstName={editedFirstName}
          setEditedFirstName={setEditedFirstName}
          editedLastName={editedLastName}
          setEditedLastName={setEditedLastName}
          editedEmail={editedEmail}
          setEditedEmail={setEditedEmail}
          handleSave={handleSave}
          handleCancel={handleCancel}
        />
        <MapLocation/>
      </div>
      <div className="second-row" style={{ display: "flex" }}>
        <ClassesDisplay/>
        <RegisterForClasses/>
      </div>
    </div>
  );
}

export default Profile;
