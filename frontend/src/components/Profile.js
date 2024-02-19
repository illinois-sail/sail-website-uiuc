import React, { useEffect, useState, useContext } from "react";
import { useAuth } from "./AuthContext";

function Profile() {
    const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();
    console.log("authUser: ", authUser);

    return (
        <div style={{ color: "white" }} >
            <h1>Profile</h1>
            <h2>{authUser ? authUser.first_name + " " + authUser.last_name : "No user logged in"}</h2>
            <h2>{authUser ? authUser.email : "No user logged in"}</h2>
        </div>
    );
};

export default Profile;
