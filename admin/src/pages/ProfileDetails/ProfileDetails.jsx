import React, { useContext } from 'react';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import ProfileCard from '@/components/ProfileCard';
import { AuthContext } from '@/context/authContext';
import { Navigate } from 'react-router-dom';

function ProfileDetails() {
  const {user} = useContext(AuthContext);
  return (
    user ?
    <>
    <Sidebar/>
    <Navbar/>
    <div className="w-[60%] absolute right-0 mt-16">
      <ProfileCard />
    </div>
    
    </>:
    <Navigate to="/login" />
    
  )
}

export default ProfileDetails