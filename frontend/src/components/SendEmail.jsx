import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SideNavBar from './SideNavBar';
// Import the CSS file

const SendEmail = () => {
    const [vendors, setVendors] = useState([]);
    const [selectedVendor, setSelectedVendor] = useState('');

    useEffect(() => {
        fetchVendors();
    }, []);

    const fetchVendors = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/vendors');
            setVendors(response.data);
        } catch (error) {
            console.error('Error fetching vendors:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!selectedVendor) {
            alert('Please select a vendor.');
            return;
        }

        try {
            const vendor =  vendors.find(vendor => vendor.email === selectedVendor);
            await axios.post('http://localhost:8080/api/emails',vendor);
            console.log(vendor);
            alert('Email sent successfully!');
            setSelectedVendor('');
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Failed to send email.');
        }
    };

    return (
        <div className='d-flex' style={{ backgroundColor: "black", height: "100vh" }}>
            <div className='col-auto'>
                <SideNavBar />
            </div>
            <div className="send-email-page">
                <div>
                    <h1 style={{ color: "#77f534", }}>Send Payment Email</h1>
                </div>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="vendor-select">Select Vendor:</label>
                        <select
                            id="vendor-select"
                            value={selectedVendor}
                            onChange={(e) => setSelectedVendor(e.target.value)}
                        >
                            <option value="">--Select Vendor--</option>
                            {vendors.map(vendor => (
                                <option key={vendor.email} value={vendor.email}>
                                    {vendor.name} - {vendor.email}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button type="submit">Send Payment Email</button>
                </form>
            </div>
        </div>
    );
};

export default SendEmail;
