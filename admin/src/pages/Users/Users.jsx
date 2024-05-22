import React from 'react';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';

function Users() {
  return (
    <>
    <Sidebar/>
    <div className='w-full'>
    <Navbar/>
    <div>Users Page</div>
    </div>
    </>
  )
}

export default Users