// src/components/User/Notifications.js
import React from 'react';
import './Notification.css';

const Notifications = ({ overdueCommunications, dueTodayCommunications }) => {
    return (
        <div className='notification-container'>
            <h2>User Dashboard</h2>
            <h3>Notifications</h3>
            <div className='notifi-container'>
            <h4>Overdue Communications</h4>
            <ul className='notifi-ulist'>
                {overdueCommunications.length > 0 ? (
                    overdueCommunications.map((com, index) => (
                        <li key={index}>{com}</li>
                    ))
                ) : (
                    <li>No overdue communications.</li>
                )}
            </ul>
           
            <h4>Today's Communications</h4>
            <ul className='notifi-ulist'>
                {dueTodayCommunications.length > 0 ? (
                    dueTodayCommunications.map((com, index) => (
                        <li key={index}>{com}</li>
                    ))
                ) : (
                    <li>No communications due today.</li>
                )}
            </ul>
            </div>
            <div className='notifi-btn'>
            <button>Finished</button>
            <button>Add</button>
            </div>
        </div>
    );
};

export default Notifications;