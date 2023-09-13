import React, { useEffect, useState } from 'react';
import "./Feed.css";
import FeedForm from './FeedForm/FeedForm';
import FeedPosts from './FeedPosts/FeedPosts';
import { db, collection, query, orderBy, onSnapshot } from "../../firebase";
import FlipMove from 'react-flip-move';

function Feed() {

  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    const queryData = query(collection(db, "posts"), orderBy("timestamp","desc"));
    onSnapshot(queryData,(snapdoc)=>{
      const snap = snapdoc.docs.map((doc)=>({
        id : doc.id,
        data : doc.data()
      }));
      setPosts(snap);
    });
  },[]);

  return (
    <div className='feed'>
        <FeedForm />

      <FlipMove>
        {
          posts && posts.map(({id,data})=>{
            return <FeedPosts key={id} name={data.name} desc={data.desc} message={data.message} photoURL={data.photoURL} />
          })
        }
      </FlipMove>
       
    </div>
  )
}

export default Feed;