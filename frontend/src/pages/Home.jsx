import React, { useEffect, useState } from 'react'
import SideNavBar from '../components/SideNavBar'
import axios from 'axios'
import {
    CDBSidebarMenuItem,
} from 'cdbreact';
import { Container, Row, Col } from 'react-bootstrap';

import { NavLink } from 'react-router-dom';
function Home() {
    const [employees, setEmployees] = useState([]);
    const [vendors, setVendors] = useState([]);


    useEffect(() => {
        fetchEmployees();
        fetchVendors();
    }, []);

    const fetchEmployees = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/employees');
            setEmployees(response.data);
        } catch (error) {
            console.error('Error fetching employees:', error);
        }
    };
    const fetchVendors = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/vendors');
            setVendors(response.data);
        } catch (error) {
            console.error('Error fetching vendors:', error);
        }
    };
    return (
        <div className='d-flex' style={{backgroundColor:"#FFDAB9", height: "100vh", width: "100vw" }}>
            <div className='col-auto'>
                <SideNavBar />
            </div>
            <div className="home-page d-flex col-md-7 col-xm-4">
                <h1 style={{ color: "#CE88F8" }}>SME Payment Management System</h1>

                <di className="lists">
                    <Container>
                        <Row>
                            <Col  xs={12} lg={6}>
                                <div className="list-container">
                                    <h2>Employee List</h2>

                                    <div className="list-box">
                                        {employees.length ? employees.map(employee => (
                                            <div key={employee.email}>
                                                <strong>Name:</strong> {employee.name} <br />
                                                <strong>Email:</strong> {employee.email} <br />
                                                <strong>Designation:</strong> {employee.designation} <br />
                                                <strong>CTC:</strong> {employee.ctc}
                                                <hr></hr>
                                            </div>

                                        )) : <div> <NavLink exact to="/addemployee" activeClassName="activeClicked">

                                            <CDBSidebarMenuItem className='iconClicked' icon="fa-solid fa-user-plus">Create Employee</CDBSidebarMenuItem>
                                        </NavLink></div>}
                                    </div>
                                </div>
                            </Col>
                            <Col  xs={12} lg={6}>
                                <div className="list-container">
                                    <h2>Vendor List</h2>
                                    <div className="list-box">
                                        {vendors.length ? vendors.map(vendor => (
                                            <div key={vendor.email}>
                                                <strong>Name:</strong> {vendor.name} <br />
                                                <strong>Email:</strong> {vendor.email} <br />
                                                <strong>UPI:</strong> {vendor.upi}
                                                <hr></hr>
                                            </div>
                                        )) : <NavLink exact to="/addvendor" activeClassName="activeClicked">
                                            <CDBSidebarMenuItem className='iconClicked' icon="fa-solid fa-users">Create Vendor</CDBSidebarMenuItem>
                                        </NavLink>}
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </di>
            </div>
        </div>
    )
}

export default Home
