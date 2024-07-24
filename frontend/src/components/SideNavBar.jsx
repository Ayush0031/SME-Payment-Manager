import React from 'react';

import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const SideNavBar = () => {
  return (
    <div
      style={{ display: 'flex', height: '100%', overflow: 'scroll initial' }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#1a1e1c">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
        
        <h3 style={{color: "#b7dd4f"}}>SME</h3>
        <h5 style={{color: "#b7dd4f"}}>Payment Manager</h5>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
          <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem className='iconClicked' icon='fa-solid fa-hotel'>Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/addemployee" activeClassName="activeClicked">
            
              <CDBSidebarMenuItem className='iconClicked' icon="fa-solid fa-user-plus">Create Employee</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/addvendor" activeClassName="activeClicked">
              <CDBSidebarMenuItem className='iconClicked' icon="fa-solid fa-users">Create Vendor</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/sendemail" activeClassName="activeClicked">
              <CDBSidebarMenuItem className='iconClicked' icon="fa-regular fa-envelope">
                Send Email To Vendor
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/viewmails" activeClassName="activeClicked">
              <CDBSidebarMenuItem className='iconClicked' icon="fa-regular fa-paper-plane">
              View Sent Emails
              </CDBSidebarMenuItem>
            </NavLink>
            
            <NavLink
              exact
              to="/hero404"
              target="_blank" className='iconClicked'
              activeClassName="activeClicked"
            >
              
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              marginTop:"5px",
              padding:"5px",
              borderRadius:"10px",
              backgroundColor:"#333333"
            }}
          >
            <div>
            <CDBSidebarMenuItem icon="user" className='iconClicked' style={{marginLeft:"0px"}}>
            <h6>Admin</h6>
            <p>admin@enterprise.com</p>
              </CDBSidebarMenuItem>
              
            </div>
           
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default SideNavBar;