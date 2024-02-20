import React, { useEffect } from 'react';
import { useAuth } from './AuthContext';

function Logout() {
    const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();

    useEffect(() => {
        localStorage.removeItem('authUser');
        localStorage.removeItem('isLoggedIn');
        setAuthUser(null);
        setIsLoggedIn(false);
    }, []);

    // redirect to home page
    window.location.href = "/";
    return (
        <div>
            <h1>Logout</h1>
        </div>
    );
}

export default Logout;
