import React from 'react';
import "./Header.css";
import {
    Search,
    Home,
    People,
    BusinessCenter,
    Message,
    Notifications
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import {useSelector} from "react-redux";
import {selectedUser} from "../../features/userSlice";
import {auth, signOut} from "../../firebase";

function Header() {

    const user = useSelector(selectedUser);

  return (
    <div className='header'>
        <div className='header-left'>
            <img src='https://cdn-icons-png.flaticon.com/128/3536/3536505.png' alt='logo' />
            <div className='search-box'>
                <Search />
                <input type='text' placeholder='Search' />
            </div>
        </div>

        <div className='header-right'>
            <div className='options'>
                <Home />
                <span>Home</span>
            </div>
            <div className='options'>
                <People />
                <span>My Network</span>
            </div>
            <div className='options'>
                <BusinessCenter />
                <span>Jobs</span>
            </div>
            <div className='options'>
                <Message />
                <span>Messaging</span>
            </div>
            <div className='options'>
                <Notifications />
                <span>Notifications</span>
            </div>
            <div className='options' onClick={()=>signOut(auth)}>
                <Avatar src={user.photoURL} />
                <span>Logout</span>   
            </div>
        </div>
    </div>
  )
}

export default Header;