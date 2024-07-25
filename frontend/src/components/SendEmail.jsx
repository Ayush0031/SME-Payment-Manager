import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SideNavBar from './SideNavBar';
import { Button } from 'react-bootstrap';
const SendEmail = () => {
    const [vendors, setVendors] = useState([]);
    const [selectedVendors, setSelectedVendors] = useState([]);

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

    const handleCheckboxChange = (email) => {
        setSelectedVendors((prevSelected) =>
            prevSelected.includes(email)
                ? prevSelected.filter((v) => v !== email)
                : [...prevSelected, email]
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (selectedVendors.length === 0) {
            alert('Please select at least one vendor.');
            return;
        }

        try {
            const selectedVendorObjects = vendors.filter(vendor => selectedVendors.includes(vendor.email));
            await Promise.all(selectedVendorObjects.map(vendor =>
                axios.post('http://localhost:8080/api/emails', vendor)
            ));
            alert('Emails sent successfully!');
            setSelectedVendors([]);
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Failed to send email.');
        }
    };

    return (
        <div className='d-flex' style={{ height: "100vh" }}>
            <div className='col-auto'>
                <SideNavBar />
            </div>
            <div className="send-email-page">


                <form onSubmit={handleSubmit}>
                    <div className='list-container m-5'>
                        <div>
                            <h1 style={{ color: "#77f534", }}>Send Payment Email</h1>
                        </div>
                        {vendors.length ? vendors.map((vendor) => (
                            <div className='m-2' key={vendor.email}>
                                <input
                                    type="checkbox"
                                    id={`vendor-${vendor.email}`}
                                    value={vendor.email}
                                    checked={selectedVendors.includes(vendor.email)}
                                    onChange={() => handleCheckboxChange(vendor.email)}
                                />
                                <label className='m-2' htmlFor={`vendor-${vendor.email}`}>
                                    {vendor.name} - {vendor.email}
                                </label>
                            </div>
                        )) : <h4>Add vendors to send</h4>}
                    </div>
                    {
                        vendors.length ? <div className='d-flex justify-content-center'>
                            <Button variant="primary" type="submit" style={{ backgroundColor: "#77f534" }} className="mt-3">
                                Add Employee
                            </Button>
                        </div> : " "
                    }

                </form>
            </div>
        </div>
    );
};

export default SendEmail;
