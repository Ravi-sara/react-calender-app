// src/components/Admin/CommunicationMethodManager.js
import React, { useState } from 'react';
import './CommunicationMethodManager.css';
const CommunicationMethodManager = () => {
    const [methods, setMethods] = useState([
        { id: 1, name: 'LinkedIn Post', description: 'A post on LinkedIn', sequence: 1, mandatory: true },
        { id: 2, name: 'LinkedIn Message', description: 'A message on LinkedIn', sequence: 2, mandatory: true },
        { id: 3, name: 'Email', description: 'An email to the contact', sequence: 3, mandatory: true },
        { id: 4, name: 'Phone Call', description: 'A call to the contact', sequence: 4, mandatory: false },
        { id: 5, name: 'Other', description: 'Any other method', sequence: 5, mandatory: false }
    ]);
    
    const [form, setForm] = useState({ id: null, name: '', description: '', sequence: '', mandatory: false });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.id) {
            // Edit existing method
            setMethods(methods.map(method => method.id === form.id ? form : method));
        } else {
            // Add new method
            setMethods([...methods, { ...form, id: Date.now() }]);
        }
        resetForm();
    };

    const handleEdit = (method) => {
        setForm(method);
    };

    const handleDelete = (id) => {
        setMethods(methods.filter(method => method.id !== id));
    };

    const resetForm = () => {
        setForm({ id: null, name: '', description: '', sequence: '', mandatory: false });
    };

    return (
        <div className='communication-container'>
            <h3>Manage Communication Methods</h3>
            <div className='method-container'>
            <form onSubmit={handleSubmit} className='method-form'>
                <input
                    type="text"
                    name="name"
                    placeholder="Method Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className='method-input'
                />
                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={form.description}
                    onChange={handleChange}
                    required
                    className='method-input'
                />
                <input
                    type="number"
                    name="sequence"
                    placeholder="Sequence"
                    value={form.sequence}
                    onChange={handleChange}
                    min="1"
                    required
                    className='method-input'
                />
                
                    <input
                        type="checkbox"
                        name="mandatory"
                        checked={form.mandatory}
                        onChange={handleChange}
                        className='method-check'
                    />
                
                <button type="submit" className='method-submit'>{form.id ? 'Update Method' : 'Add Method'}</button>
            </form>
           
            <table className='method-table'>
                <thead className='table-head'>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Sequence</th>
                        <th>Mandatory</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className='table-body'>
                    {methods.map((method) => (
                        <tr key={method.id}>
                            <td>{method.name}</td>
                            <td>{method.description}</td>
                            <td>{method.sequence}</td>
                            <td>{method.mandatory ? 'Yes' : 'No'}</td>
                            <td className='table-btn'>
                                <button onClick={() => handleEdit(method)}>Edit</button>
                                <button onClick={() => handleDelete(method.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default CommunicationMethodManager;