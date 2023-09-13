import { Info } from '@mui/icons-material';
import React from 'react';

function Courses() {
  return (
    <div className='courses'>
        <div className='courses-header'>
            <span><b>Today's top courses</b></span>
            <Info />
        </div>

        <div className='courses-options'>
            <ul>
                <li>Leading with a Heavy Heat</li>
                <span>Key Coly</span>
            </ul>
            <ul>
                <li>Building Resillience</li>
                <span>Tatianan Kolovau</span>
            </ul>
            <ul>
                <li>Critical Thinking for better judgement</li>
                <span>3d ago * 4, 45 readers</span>
            </ul>
            <ul>
                <li>Flexi leave is the new flexi</li>
                <span>4d ago * 3,55 readers</span>
            </ul>
            <ul>
                <li>Shorter hour boost productivity</li>
                <span>1d ago * 4,55 readers</span>
            </ul>
        </div>
    </div>
  )
}

export default Courses;