import React, { useState } from 'react';

function Login() {
    // const [firstName, setFirstName] = useState(''); // [state, setState]
    // const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [shirtSize, setShirtSize] = useState('');
    // const [parentName, setParentName] = useState('');
    // const [parentEmail, setParentEmail] = useState('');

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    // const handleFirstNameChange = (e) => setFirstName(e.target.value);
    // const handleLastNameChange = (e) => setLastName(e.target.value);
    // const handleShirtSizeChange = (e) => setShirtSize(e.target.value);
    // const handleParentNameChange = (e) => setParentName(e.target.value);
    // const handleParentEmailChange = (e) => setParentEmail(e.target.value);


    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform login or sign-up logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input type="email" value={email} onChange={handleEmailChange} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Login;
