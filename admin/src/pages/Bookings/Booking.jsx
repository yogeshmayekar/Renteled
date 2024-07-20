import React, { useContext } from 'react';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import BookingTable from '@/components/BookingTable';
// import Bookings from '@/components/Bookings';
import Footer from '@/components/Footer';
import { AuthContext } from '@/context/authContext';
import { Navigate } from 'react-router-dom';

function Booking() {
  const {user}= useContext(AuthContext);
  return (
    user ? <>
    <Navbar/>
    <Sidebar/>
    <div className='w-[80%] absolute right-0 mt-16'>
    <div className='flex justify-between m-4 py-2 px-1'>
        <h2 className='text-3xl  font-medium'>All Bookings</h2>
        <select className='w-[110px] pl-1 border rounded outline-none'>
            <option value="">Upcoming</option>
            <option value="">Check in</option>
            <option value="">Check out</option>
            <option value="">Cancelled</option>
        </select>
    </div>
    <BookingTable/>
    {/* <Bookings/> */}
    <Footer/>
    </div>
    </>:
    <Navigate to="/login" />
  )
}


export default Booking