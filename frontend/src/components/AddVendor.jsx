import React, { useState } from 'react'
import SideNavBar from './SideNavBar'
import axios from 'axios';
import { Card, Form, Button } from 'react-bootstrap';
function AddVendor() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [upi, setUpi] = useState('');
    const [emailError, setEmailError] = useState('');
    const [nameError, setNameError] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailError('');
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
        setNameError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let hasError = false;

        // Name validation
        if (!/^[a-zA-Z\s]+$/.test(name)) {
            setNameError('Name should not be alphanumeric');
            hasError = true;
        }
        if (!hasError) {
            try {
                await axios.post('http://localhost:8080/api/vendors', { name, email, upi })
                    .then(response => {
                        const data = response.data;
                        console.log("Email sent:", data.email);
                        alert("Vendor created with email -> " + data.email)

                        setName('');
                        setEmail('');
                        setUpi('');
                    });

            } catch (error) {
                if (error.response && error.response.status === 400) {
                    setEmailError('Email already exists');
                } else {
                    alert('Error creating vendor: ' + error.message);
                    console.error('Error creating vendor:', error);
                }
            }
        }
    };




    return (
        <div className='d-flex' style={{ backgroundColor: "#FFDAB9", height: "100vh" }}>
            <div className='col-auto'>
                <SideNavBar />
            </div>
            <div className='col-lg-8 col-md-6'>
                <Card style={{ maxWidth: '500px', margin: '50px auto', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>
                    <Card.Body>
                        <Card.Title className="text-center" style={{ color: "#CE88F8" }}> Add Vendor</Card.Title>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={name}
                                    onChange={handleNameChange}
                                    placeholder="Enter name"
                                    required
                                />
                            </Form.Group>{nameError && <p style={{ color: 'red' }}>{nameError}</p>}
                            <Form.Group controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    placeholder="Enter email"
                                    required
                                />
                            </Form.Group>{emailError && <p style={{ color: 'red' }}>{emailError}</p>}
                            <Form.Group controlId="formUpi">
                                <Form.Label>Upi</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={upi}
                                    onChange={(e) => setUpi(e.target.value)}
                                    placeholder="Enter UPI"
                                    required
                                />
                            </Form.Group>


                            <div className='d-flex justify-content-center'>
                                <Button variant="primary" type="submit" style={{ backgroundColor: "#CE88F8" }} className="mt-3">
                                    Add Vendor
                                </Button>
                            </div>

                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default AddVendor
