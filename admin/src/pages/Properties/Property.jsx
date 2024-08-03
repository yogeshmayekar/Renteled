import React, { useContext, useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
// import Bookings from '@/components/Bookings';
import Footer from '@/components/Footer';
import { AuthContext } from '@/context/authContext';
import { Navigate } from 'react-router-dom';
import { Button } from "../../ui/button";
import AddNewProperty from '@/components/AddNewProperty';
import CloseIcon from '@mui/icons-material/Close';

function Property() {
  const {user}= useContext(AuthContext);
  const [addProp, setAddProp]=useState(false);
  const handleNewPropClick=()=>{
    setAddProp(true)
  }

  const handleCloseAddNew=()=>{
    setAddProp(false)
  }

  return (
    user ? <>
    <Navbar/>
    <Sidebar/>
    <div className='w-[80%] absolute right-0 mt-16'>
    {!addProp && <div className='flex justify-between m-4 py-2 px-1'>
        <h2 className='text-3xl  font-medium'>All Properties</h2>
        <Button className='rounded-full bg-[#e6ecf2]' variant="outline" onClick={handleNewPropClick} >Add New Property</Button>
    </div>}
    {addProp && <div className='flex items-center m-4 py-2 px-1 justify-between'>
      <h1 className="text-2xl font-bold">Add New Hotel</h1>
      <CloseIcon className='font-semibold text-lg cursor-pointer'onClick={handleCloseAddNew} />
    </div>}
    {/* <Bookings/> */}
    {addProp && <AddNewProperty/>}
    <Footer/>
    </div>
    </>:
    <Navigate to="/login" />
  )
}


export default Property