import React from 'react';
import "./Widget.css";
import News from './News/News';
import Courses from './Courses/Courses';

function Widget() {
  return (
    <div className='widget'>
        <News />
        <Courses />
    </div>
  )
}

export default Widget;