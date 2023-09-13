import { Avatar } from '@mui/material';
import React, { forwardRef } from 'react';
import { 
    MoreVert,
    ThumbUpOffAlt,
    CommentOutlined,
    ShareOutlined,
    SendOutlined,
 } from "@mui/icons-material";

const FeedPosts = forwardRef(({name,desc,message,photoURL},ref)=> {
  return (
    <div className='feed-posts' ref={ref}>
        <div className='feedPosts-header'>
            <div className='feedPostsHeader-left'>
                <Avatar src={photoURL} />
                <span><b style={{fontWeight:"600"}}>{name}</b><br />{desc}</span>
            </div>
            <div className='feedPostsHeader-right'>
                <MoreVert />
            </div>
        </div>

        <div className='feedPosts-body'>
            <span>{message}</span>
        </div>

        <div className='feedPosts-footer'>
            <div className='feedPostsFooter-options'>
                <ThumbUpOffAlt />
                <span>Like</span>
            </div>
            <div className='feedPostsFooter-options'>
                <CommentOutlined />
                <span>Comment</span>
            </div>
            <div className='feedPostsFooter-options'>
                <ShareOutlined />
                <span>Share</span>
            </div>
            <div className='feedPostsFooter-options'>
                <SendOutlined />
                <span>Send</span>
            </div>
        </div>
    </div>
  )
})

export default FeedPosts;