import React, { useEffect, useState } from 'react'
import SideNavBar from '../components/SideNavBar'
import axios from 'axios'
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
    <div className='d-flex' style={{ backgroundColor: "black", height: "100vh",width:"100vw" }}>
            <div className='col-auto'>
                <SideNavBar />
            </div>
            <div className="home-page">
            <h1 style={{color:"#77f534"}}>SME Payment Management System</h1>
            
            <div className="lists d-flex">
                <div className="list-container">
                    <h2>Employee List</h2>
                    <div className="list-box">
                        {employees.map(employee => (
                            <div key={employee.email}>
                                <strong>Name:</strong> {employee.name} <br />
                                <strong>Email:</strong> {employee.email} <br />
                                <strong>Designation:</strong> {employee.designation} <br />
                                <strong>CTC:</strong> {employee.ctc}
                                <hr></hr>
                            </div>
                            
                        ))}
                    </div>
                </div>
                <div className="list-container">
                    <h2>Vendor List</h2>
                    <div className="list-box">
                        {vendors.map(vendor => (
                            <div key={vendor.email}>
                                <strong>Name:</strong> {vendor.name} <br />
                                <strong>Email:</strong> {vendor.email} <br />
                                <strong>UPI:</strong> {vendor.upi}
                                <hr></hr>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
