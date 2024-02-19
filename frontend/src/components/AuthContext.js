import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios'; 

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider(props) {
    const [authUser, setAuthUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const value = { authUser, setAuthUser, isLoggedIn, setIsLoggedIn };

    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
