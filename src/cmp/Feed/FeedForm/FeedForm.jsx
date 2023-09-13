import React, { useState } from 'react';
import { Avatar } from "@mui/material";
import {
    Photo,
    YouTube,
    Today,
    Assignment
} from "@mui/icons-material";
import { db, collection, addDoc } from "../../../firebase";
import { useSelector } from "react-redux";
import { selectedUser } from "../../../features/userSlice";

function FeedForm() {

    const [input,setInput] = useState("");
    const user = useSelector(selectedUser);

    const storePost = async (e)=>{
        e.preventDefault();
        if(input)
        {
            try{
                await addDoc(collection(db, "posts"),{
                    name : user.displayName,
                    photoURL : user.photoURL,
                    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    message : input,
                    timestamp : new Date()
                })
                setInput("");
            }
            catch(e){
                console.error(e);
            }
        }
    }

  return (
    <div className='feedForm'>
        <div className='feedForm-header'>
            <Avatar src={user.photoURL} />
            <form onSubmit={storePost}>
                <input type='text' placeholder='Start a post' value={input} onChange={(e)=>setInput(e.target.value)} />
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