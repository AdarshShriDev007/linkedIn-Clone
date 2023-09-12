import React from 'react';
import { Avatar } from "@mui/material";
import {
    Photo,
    YouTube,
    Today,
    Assignment
} from "@mui/icons-material";

function FeedForm() {
  return (
    <div className='feedForm'>
        <div className='feedForm-header'>
            <Avatar />
            <form>
                <input type='text' placeholder='Start a post' />
                <input type='submit' value="submit" />
            </form>
        </div>

        <div className='feedForm-icons'>
            <div className='feedFormIcon-options'>
                <Photo style={{color:"#70B5F9"}} />
                <span>Photo</span>
            </div>
            <div className='feedFormIcon-options'>
                <YouTube style={{color:"#7FC15E"}} />
                <span>Video</span>
            </div>
            <div className='feedFormIcon-options'>
                <Today style={{color:"#E7A33E"}} />
                <span>Event</span>
            </div>
            <div className='feedFormIcon-options'>
                <Assignment style={{color:"#FC9295"}} />
                <span>Write Article</span>
            </div>
        </div>
    </div>
  )
}

export default FeedForm;