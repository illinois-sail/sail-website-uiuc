import React, { useState, useEffect } from "react";
import axios, { all } from "axios";
import SERVER_URL from "../server_url";
import SIEBEL_LOC from "../../assets/profile/siebel_loc.png";
import PIZAZZ1 from "../../assets/profile/pizazz1.png";
import CLOUD from "../../assets/profile/cloud.png";
import STAR from "../../assets/account/register-star.svg";
import LIGHTNING from "../../assets/profile/lightning.png";
import { ReactComponent as CountdownCloud } from "../../assets/account/register-cloud.svg";
import "./Profile.css";
import allClasses from "./Classes.js";

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

  const classMap = new Map( classes.map(c => [Number(c.classIndex), c]) );

  for (let i = 0; i < bitsequence.length; i++) {
    if (bitsequence[i] === "1") {
      if (classMap.has(i)) {
        classesTaking.push(classMap.get(i));
      } else {
        console.warn("Missing class for index:", i);
      }
    }
  }

  // for (let i = 0; i < Math.min(bitsequence.length, classes.length); i++) {
  //   if (bitsequence[i] === "1") {
  //     // find the class and add to classesTaking
  //     for (let j = 0; j < classes.length; j++) {
  //       if (classes[j].classIndex === i) {
  //         classesTaking.push(classes[j]);
  //         break;
  //       }
  //     }
  //   }
  // }

  return classesTaking;
}

const ClassesDisplay = ({ userClasses }) => {
  return (
    <div className="classes-svg-wrapper" style={{ position: "relative", width: "53vw" }}>
      <svg className="classes-svg" xmlns="http://www.w3.org/2000/svg" width="819" height="484" viewBox="0 0 819 484">
        <path d="M2 2H816L671.825 482H2V2Z" fill="#FFF" stroke="black" strokeWidth="4" />
      </svg>
      <div className="classes-svg-content" style={{ position: "absolute", top: "12%", left: "4%" }}>
        <span className="profile-title">Classes</span>
        <div className="title-underline-c" />

        {userClasses.length === 0 ? (
          <span className="profile-text"><br/>No Registered Classes!</span>
        ) : (
          <ul className="profile-text">
            {userClasses.map((cls, index) => (
              <li key={index}>
                {cls.className}
                <ul><li>({cls.room === "Zoom" ? "April 19" : "April 18"}, {cls.time}, {cls.room})</li></ul>
              </li>
            ))}
          </ul>
        )}

      </div>
    </div>
  );
}

const SailCountdown = () => {
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const targetDate = new Date("April 18, 2026");
    const calculateDaysLeft = () => {
      const today = new Date();
      const diffTime = targetDate - today;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDaysLeft(diffDays > 0 ? diffDays : 0);
    }

    calculateDaysLeft();
    const interval = setInterval(calculateDaysLeft, 1000 * 60 * 60)
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-wrapper" style={{ position: "relative", width: "32vw", marginLeft: "-4vw" }}>
      <svg className="countdown-svg" xmlns="http://www.w3.org/2000/svg" width="498" height="484" viewBox="0 0 498 484" fill="none">
        <path d="M148.848 2L2.69971 482H398.102L494.7 2H148.848Z" fill="#C1E7FF" stroke="black" strokeWidth="4"/>
      </svg>
      <div className="countdown-svg-content" style={{ position: "absolute", top: "35%", left: "40%", width: "13vw" }}>
        <div style={{ position: "relative" }}>
          <CountdownCloud
            className="countdown-cloud"
            width="20vw"
            style={{ position: "absolute", bottom: "-7vw", right: "-2vw" }}
          />
          <span className="countdown-text">{daysLeft}</span>
        </div>
        <span className="profile-text" style={{ position: "absolute", top: "8vw", marginLeft: "-2vw" }}>DAYS TILL SAIL!</span>
      </div>
    </div>
  );
}

const PersonalInformation = ({ authUser, isEditing, setIsEditing, editedFirstName, setEditedFirstName, editedLastName, setEditedLastName, editedEmail, setEditedEmail, handleSave, handleCancel }) => {
  return (
    <div className="pers-info-container">
      <div className="pers-info-content" style={{ marginTop: "2vw", marginLeft: "2vw" }}>
        <span className="profile-title">Personal Information</span>
        <div className="title-underline-pi" />
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
        <button 
          className="edit-info-btn-container" 
          style={{ position: "absolute", bottom: "2vw", right: "2vw" }} 
          onClick={() => {
            setEditedFirstName(authUser?.first_name || "");
            setEditedLastName(authUser?.last_name || "");
            setEditedEmail(authUser?.email || "");
            setIsEditing(true);
          }}
        >
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

  // Redirect to login if not logged in
  if (!authUser) {
    console.log("No initial authUser found in local storage");
    window.location.href = "/login";
  }

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

  const [isEditing, setIsEditing] = useState(false);
  
  const [editedFirstName, setEditedFirstName] = useState(authUser ? authUser.first_name : "");
  const [editedLastName, setEditedLastName] = useState(authUser ? authUser.last_name : "");
  const [editedEmail, setEditedEmail] = useState(authUser ? authUser.email : "");

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
      } else {
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

  const userClasses = authUser?.classes ? getClasses(authUser.classes, allClasses) : [];

  return (
    <div className="profile" style={{ marginTop: "7vw", display: "flex", alignItems: "center", flexDirection: "column", gap: "2vw" }}>
      <img src={STAR} className="floating-img" style={{ position: "absolute", width: "9vw", transform: "translateX(440%) translateY(-30%)" }}/>
      <ProfileHeader/>
      <div className="first-row" style={{ display: "flex", position: "relative", gap: "2vw" }}>
        <img src={LIGHTNING} className="floating-img" style={{ position: "absolute", width: "10vw", transform: "translateX(-50%) translateY(-70%)", zIndex: 3 }}/>
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
        <img src={CLOUD} className="floating-img" style={{ position: "absolute", width: "11vw", transform: "translateX(150%) translateY(190%)", zIndex: 3 }}/>
        <MapLocation/>
      </div>
      <div className="second-row" style={{ display: "flex", position: "relative", alignItems: "center" }}>
        <ClassesDisplay userClasses={userClasses}/>
        <img src={PIZAZZ1} className="floating-img" style={{ position: "absolute", transform: "translateX(90%)", left: "45%", width: "10vw", zIndex: 3 }}/>
        <SailCountdown/>
      </div>
    </div>
  );
}

export default Profile;