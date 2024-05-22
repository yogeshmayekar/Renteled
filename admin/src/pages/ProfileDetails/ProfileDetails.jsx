import React from 'react';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';

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