import React, { useState } from 'react'
import SideNavBar from './SideNavBar'
import axios from 'axios'
import { Card, Form, Button } from 'react-bootstrap';
function AddEmployee() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [designation, setDesignation] = useState('');
    const [ctc, setCtc] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/api/employees', { name, email, designation, ctc })
                .then(response => {
                    const data = response.data;
                    console.log("Email sent:", data.email);
                    alert("Employee created with email -> " + data.email)
                });

            setName('');
            setEmail('');
            setDesignation('');
            setCtc('');
        } catch (error) {
            alert(error.response.data)
            console.error('Error creating employee:', error);
        }
    };
    return (
        <div className='d-flex' style={{ backgroundColor: "black", height: "100vh" }}>
            <div className='col-auto'>
                <SideNavBar />
            </div>
            <div className='col-lg-8 col-md-6'>
                <Card style={{ maxWidth: '500px', margin: '50px auto', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>
                    <Card.Body>
                        <Card.Title className="text-center">Add Employee</Card.Title>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Enter name"
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter email"
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formDesignation">
                                <Form.Label>Designation</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={designation}
                                    onChange={(e) => setDesignation(e.target.value)}
                                    placeholder="Enter designation"
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formCTC">
                                <Form.Label>CTC</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={ctc}
                                    onChange={(e) => setCtc(e.target.value)}
                                    placeholder="Enter CTC"
                                    required
                                />
                            </Form.Group>
                            <div className='d-flex justify-content-center'>
                                <Button variant="primary" type="submit" style={{ backgroundColor: "#77f534" }} className="mt-3">
                                    Add Employee
                                </Button>
                            </div>

                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </div>

    )
}

export default AddEmployee
