// src/components/User/CommunicationLog.js
import React, { useState } from 'react';
import './CommunicationLog.css';

const CommunicationLog = () => {
    const [logs, setLogs] = useState([]);
    const [form, setForm] = useState({ method: '', date: '', notes: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLogs([...logs, form]); // Add new log to the list
        setForm({ method: '', date: '', notes: '' }); // Reset form
    };

    return (
        <div className='connect-container'>
            <h3>Communication Log</h3>
            <div className='log-container'>
            <form onSubmit={handleSubmit} className='log-form'>
                <input type="text" name="method" placeholder="Method" value={form.method} onChange={handleChange} required className='log-input' />
                <input type="date" name="date" value={form.date} onChange={handleChange} required  className='log-input'/>
                <textarea name="notes" placeholder="Notes" value={form.notes} onChange={handleChange} className='log-text'></textarea>
                <button type="submit" className='log-btn'>Add Log</button>
            </form>
            <ul className='log-ulist'>
                {logs.map((log, index) => (
                    <li key={index} >{log.method} on {log.date}: {log.notes}</li>
                ))}
            </ul>
            </div>
        </div>
    );
};

export default CommunicationLog;