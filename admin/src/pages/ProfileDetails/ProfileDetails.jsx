import React from 'react';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import ProfileCard from '@/components/ProfileCard';

function ProfileDetails() {
  return (
    <>
    <Sidebar/>
    <Navbar/>
    <div className="w-[60%] absolute right-0 mt-16">
      <ProfileCard />
    </div>
    
    </>
    
  )
}

export default ProfileDetails