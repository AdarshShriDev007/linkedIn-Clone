import React from 'react';
import "./Feed.css";
import FeedForm from './FeedForm/FeedForm';
import FeedPosts from './FeedPosts/FeedPosts';

function Feed() {
  return (
    <div className='feed'>
        <FeedForm />
        <FeedPosts />
    </div>
  )
}

export default Feed;