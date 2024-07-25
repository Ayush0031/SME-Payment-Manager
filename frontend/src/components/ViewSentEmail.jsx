import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SideNavBar from './SideNavBar';
import Table from 'react-bootstrap/Table';
const ViewSentEmail = () => {
    const [mails, setMails] = useState([]);

    useEffect(() => {
        fetchMails();
    }, [])

    const fetchMails = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/emails")

            setMails(response.data)
            
        } catch (error) {
            console.error('Error fetching mails:', error);
        }

    }

    return (
        <div className='d-flex' style={{  height: "100vh" }}>
            <div className='col-auto'>
                <SideNavBar />
            </div>
           
            <div className=''>
                <div className='d-flex justify-content-center'>
                <h1 style={{color:"#77f534"}}> View Emails Sent to Vendors</h1>
                </div>
                <Table striped bordered hover variant="dark" className='m-5 p-5'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>VendorEmail</th>
                            <th>Subject</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            mails.map(mail => (
                                <tr key={mail.id}>
                                    <td>{mail.id}</td>
                                    <td>{mail.recipientEmail}</td>
                                    <td>{mail.subject}</td>
                                    <td>{mail.body}</td>
                                </tr>
                            ))}


                    </tbody>
                </Table>

            </div>

        </div>
    )
}

export default ViewSentEmail
