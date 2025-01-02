// src/App.js
// src/App.js
import React, { useState } from 'react';
import SignUp from './components/SignUp';
import AdminDashboard from './components/Admin/AdminDashboard';
import UserDashboard from './components/User/Dashboard';
import './App.css';

const App = () => {
    const [user, setUser] = useState(null); // State to store the signed-up user

    const handleSignUp = (userData) => {
        setUser(userData); // Set the signed-up user data
    };

    return (
        <div>
            
            {!user ? (
                <SignUp onSignUp={handleSignUp} />
            ) : (
                user.role === 'admin' ? <AdminDashboard /> : <UserDashboard />
            )}
        </div>
    );
};

export default App;