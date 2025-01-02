// src/components/SignUp.js
import React, { useState } from 'react';
import './SignUp.css'; // Import the CSS file

const SignUp = ({ onSignUp }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('user');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSignUp({ name, email, role }); // Call the onSignUp function passed as prop
    };

    return (
        <div className='container'>
            <div className='web-container'>
            <h1 className='project-head'>Communication Tracking Calendar</h1>
        <form onSubmit={handleSubmit} className="signup-form">
            <h2>Sign Up</h2>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="signup-input"
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="signup-input"
            />
            <select value={role} onChange={(e) => setRole(e.target.value)} className="signup-select" id='sign-select'>
                <option value="user">User</option>
                <option value="admin">Admin</option>
            </select>
            <button type="submit" className="signup-button">Sign Up</button>
        </form>
        </div>
        </div>
    );
};

export default SignUp;