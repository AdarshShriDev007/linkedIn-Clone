import { Avatar } from '@mui/material';
import React from 'react';
import { 
    MoreVert,
    ThumbUpOffAlt,
    CommentOutlined,
    ShareOutlined,
    SendOutlined,
 } from "@mui/icons-material";

function FeedPosts() {
  return (
    <div className='feed-posts'>
        <div className='feedPosts-header'>
            <div className='feedPostsHeader-left'>
                <Avatar />
                <span><b>Adarsh Kumar</b><br />this is description</span>
            </div>
            <div className='feedPostsHeader-right'>
                <MoreVert />
            </div>
        </div>

        <div className='feedPosts-body'>
            <span>This is body posts</span>
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
}

export default FeedPosts;