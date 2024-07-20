import React, { useContext } from 'react';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import PreparingNew from '@/components/PreparingNew';
import { AuthContext } from '@/context/authContext';
import { Navigate } from 'react-router-dom';

function Messages() {
  const {user}= useContext(AuthContext)
  return (
    user ? <>
    <Navbar/>
    <Sidebar/>
    <div className='w-full'>
      <div className='absolute mt-16 right-0 w-[80%] h-screen'>
        <PreparingNew/>
      </div>
    </div>
    <div>
      jhe
    </div>
    </>:
    <Navigate to="/login" />
  )
}

export default Messages