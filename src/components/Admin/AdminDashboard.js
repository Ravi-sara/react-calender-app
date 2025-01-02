// src/components/Admin/AdminDashboard.js
import React from 'react';
import CompanyManager from './CompanyManager';
import CommunicationMethodManager from './CommunicationMethodManager';

const AdminDashboard = () => {
    return (
        <div>
            
            <CompanyManager />
            <CommunicationMethodManager />
        </div>
    );
};

export default AdminDashboard;