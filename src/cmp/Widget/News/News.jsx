import { Info } from '@mui/icons-material';
import React from 'react';

function News() {
  return (
    <div className='news'>
        <div className='news-header'>
            <span><b>LinkedIn News</b></span>
            <Info />
        </div>

        <div className='news-options'>
            <ul>
                <li>How to stay ahead of a hacker</li>
                <span>19h ago</span>
            </ul>
            <ul>
                <li>Edtech makes a beeline for B2B</li>
                <span>14h ago</span>
            </ul>
            <ul>
                <li>The AI shift in HR</li>
                <span>13h ago</span>
            </ul>
            <ul>
                <li>Boardrooms in for a reshuffle</li>
                <span>2d ago</span>
            </ul>
            <ul>
                <li>Household spending surges</li>
                <span>2d ago</span>
            </ul>
        </div>
    </div>
  )
}

export default News;