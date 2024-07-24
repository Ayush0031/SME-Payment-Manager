import React from 'react'
import SideNavBar from '../components/SideNavBar'

function Home() {
  return (
    <div className='d-flex' style={{ backgroundColor: "black", height: "100vh" }}>
            <div className='col-auto'>
                <SideNavBar />
            </div>
    </div>
  )
}

export default Home
