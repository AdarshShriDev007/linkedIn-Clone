import React from 'react';
import Header from './cmp/Header/Header';
import Sidebar from './cmp/Sidebar/Sidebar';
import Feed from './cmp/Feed/Feed';

function App() {
  return (
   <>
    <div className='App'>
      <Header />

      <div className='app-grid'>
        <Sidebar />
        <Feed />
      </div>
    </div>
   </>
  );
}

export default App;
