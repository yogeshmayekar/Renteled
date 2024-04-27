import React from 'react';
import Sidebar from '@/components/Navbar/Sidebar';
import Navbar from '@/components/Navbar/Navbar';

function Messages() {
  return (
    <>
    <Sidebar/>
    <div className='w-full'>
    <Navbar/>
    <div>Messages Page</div>
    </div>
    </>
  )
}

export default Messages