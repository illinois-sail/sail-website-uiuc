import React, { useEffect } from 'react';
import NavBar from './NavBar';
import { connect } from 'react-redux';
import { checkAuthenticated, load_user } from '../actions/auth';

const Layout = ({ checkAuthenticated, load_user, children }) => {
    useEffect(() => {
        checkAuthenticated();
        load_user();
    }, []);

    return (
        <div>
            <NavBar />
            {children}
        </div>
    );
};

export default connect(null, { checkAuthenticated, load_user })(Layout);
