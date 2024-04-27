import React from 'react';
import Sidebar from '@/components/Navbar/Sidebar';
import Navbar from '@/components/Navbar/Navbar';

function ProfileDetails() {
  return (
    <>
    <Sidebar/>
    <div className='w-full'>
    <Navbar/>
    <div>ProfileDetails Page</div>
    </div>
    </>
    
  )
}

export default ProfileDetails