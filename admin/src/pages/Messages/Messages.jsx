import React from 'react';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import PreparingNew from '@/components/PreparingNew';

function Messages() {
  return (
    <>
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
    </>
  )
}

export default Messages