import React, { useEffect, useState, useContext } from "react";
import { useAuth } from "./AuthContext";

const ProfilePage = () => {

    const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();
    console.log("authUser: ", authUser);

    return (
        <div>
            <h1>Profile</h1>
            <h2>{isLoggedIn ? authUser.email : "Not logged in"}</h2>
            <h2>{isLoggedIn ? authUser.first_name + " " + authUser.last_name : "Not logged in"}</h2>
        </div>
    );
};

export default ProfilePage;
