import React from 'react';
import { Avatar } from "@mui/material";

function Sidebar() {
  return (
        <div className='sidebar-profile'>  
            <img src='https://static8.depositphotos.com/1426460/901/i/450/depositphotos_9011722-stock-photo-vortex-abstract-background.jpg' alt='cover' />
            <div className='sidebarProfile-intro'>
                <Avatar />
                <h4>Adarsh Kumar</h4>
                <span>Web Developer</span>
            </div>

            <div className='sidebarProfile-details'>
                <div className='sidebarProfileDetails-option'>
                    <span>Who viewed your profile</span>
                    <span>50</span>
                </div>

                <div className='sidebarProfileDetails-option'>
                    <span>Connections <br /><b>Grow Your Network</b></span>
                    <span>120</span>
                </div>
            </div>
        </div>

        
  )
}

export default Sidebar;