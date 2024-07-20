import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import React, { useContext } from 'react'
import { AuthContext } from '@/context/authContext';
import { Navigate } from 'react-router-dom';

function Property() {
  const {user}= useContext(AuthContext);
  return (
    user ?
    <>
    <Sidebar/>
    <div className='w-full'>
    <Navbar/>
    <div>
      
    </div>
    </div>
    </>:
    <Navigate to="login"/>
    
  )
}

export default Property