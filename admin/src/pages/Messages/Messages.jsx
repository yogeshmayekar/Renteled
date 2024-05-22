import React from 'react';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';

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