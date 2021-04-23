import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

function Home() {
  return (
    <>
      <div className='main-home-container'>
        <Link to='/main' className='play-button'>
          Play
        </Link>
      </div>
    </>
  );
}

export default Home;