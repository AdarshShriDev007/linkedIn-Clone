import React, { useEffect } from 'react';
import Header from './cmp/Header/Header';
import Sidebar from './cmp/Sidebar/Sidebar';
import Feed from './cmp/Feed/Feed';
import Widget from "./cmp/Widget/Widget";
import Login from './cmp/Login/Login';
import { useSelector, useDispatch } from "react-redux";
import { selectedUser, login, logout } from "./features/userSlice";
import { auth,onAuthStateChanged } from "./firebase";

function App() {

  const user = useSelector(selectedUser);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        dispatch(login({
          displayName : user.displayName,
          email : user.email,
          photoURL : user.photoURL,
          uid : user.uid
      }));
      }
      else{
        dispatch(logout());
      }
    })
  },[]);

  return (
   <>
   {
    !user ? (<Login />) : ( 
    <div className='App'>
      <Header />

        <div className='app-grid'>
          <Sidebar />
          <Feed />
          <Widget />
        </div>

    </div>)
   }
   
   </>
  );
}

export default App;
