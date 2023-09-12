import React from 'react';
import "./Sidebar.css";
import SidebarProfile from "./SidebarProfile/SidebarProfile";
import SidebarRecent from './SidebarRecent/SidebarRecent';

function Sidebar() {
  return (
    <div className='sidebar'>
        <SidebarProfile />
        <SidebarRecent />
    </div>
  )
}

export default Sidebar;