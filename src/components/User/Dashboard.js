// src/components/User/Dashboard.js
import React from 'react';
import CommunicationLog from './CommunicationLog';
import Notifications from './Notifications';

const Dashboard = () => {
    // Simulating overdue and due communications
    const overdueCommunications = [
        "Follow up with Jane Doe via email - due on 2023-09-15",
        "Call John Smith - due on 2023-09-10"
    ];

    const dueTodayCommunications = [
        "Send report to Alice - due today",
        "Meeting with Bob - due today"
    ];

    return (
        <div>
            
            <Notifications 
                overdueCommunications={overdueCommunications} 
                dueTodayCommunications={dueTodayCommunications} 
            />
            <CommunicationLog />
        </div>
    );
};

export default Dashboard;