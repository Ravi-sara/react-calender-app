// src/components/Admin/CompanyManager.js
import React, { useState } from 'react';
import './CompanyManager.css'

const CompanyManager = () => {
    const [companies, setCompanies] = useState([]);
    const [form, setForm] = useState({
        id: null,
        name: '',
        location: '',
        linkedin: '',
        emails: '',
        phoneNumbers: '',
        comments: '',
        periodicity: ''
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.id) {
            // Edit existing company
            setCompanies(companies.map(company => company.id === form.id ? form : company));
        } else {
            // Add new company
            setCompanies([...companies, { ...form, id: Date.now() }]);
        }
        resetForm();
    };

    const handleEdit = (company) => {
        setForm(company);
    };

    const handleDelete = (id) => {
        setCompanies(companies.filter(company => company.id !== id));
    };

    const resetForm = () => {
        setForm({
            id: null,
            name: '',
            location: '',
            linkedin: '',
            emails: '',
            phoneNumbers: '',
            comments: '',
            periodicity: ''
        });
    };

    return (
        <div className='manage-container'>
             <h2>Admin Dashboard</h2>
             <h3>Manage Companies</h3>
        <div className='company-container'>
           
            
            <form onSubmit={handleSubmit} className='manage-form'>
                <input
                    type="text"
                    name="name"
                    placeholder="Company Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className='manage-input'
                />
                <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={form.location}
                    onChange={handleChange}
                    required
                    className='manage-input'
                />
                <input
                    type="text"
                    name="linkedin"
                    placeholder="LinkedIn Profile"
                    value={form.linkedin}
                    onChange={handleChange}
                    required
                    className='manage-input'
                />
                <input
                    type="text"
                    name="emails"
                    placeholder="Emails (comma separated)"
                    value={form.emails}
                    onChange={handleChange}
                    required
                    className='manage-input'
                />
                <input
                    type="text"
                    name="phoneNumbers"
                    placeholder="Phone Numbers (comma separated)"
                    value={form.phoneNumbers}
                    onChange={handleChange}
                    required
                    className='manage-input'
                />
                <textarea
                    name="comments"
                    placeholder="Comments"
                    value={form.comments}
                    onChange={handleChange}
                    className='manage-text'
                />
                <input
                    type="number"
                    name="periodicity"
                    placeholder="Communication Periodicity (weeks)"
                    value={form.periodicity}
                    onChange={handleChange}
                    min="1"
                    className='manage-input'
                />
                <button type="submit" className='manage-btn'>{form.id ? 'Update Company' : 'Add Company'}</button>
            </form>
            <ul className='manage-ulist'>
                {companies.map((company) => (
                    <li key={company.id} className='manage-list'>
                        {company.name} |
                    {company.location} 
                        | {company.linkedin} 
                        | Emails:{company.emails}
                      | Phone Numbers: {company.phoneNumbers} 
                       | Comments: {company.comments} 
                       | Periodicity: {company.periodicity} 
                       <div className='update-btn'> <button onClick={() => handleEdit(company)} className='btn-edit'>Edit</button>
                        <button onClick={() => handleDelete(company.id)} className='btn-delete'>Delete</button></div>
                    </li>
                ))}
            </ul>
        </div>
        </div>
    );
};

export default CompanyManager;