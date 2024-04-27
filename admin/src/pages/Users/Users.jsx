import React from 'react';
import Sidebar from '@/components/Navbar/Sidebar';
import Navbar from '@/components/Navbar/Navbar';

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