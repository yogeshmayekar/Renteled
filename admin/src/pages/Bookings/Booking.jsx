import React from 'react';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import Bookings from '@/components/Bookings';

function Booking() {
  return (
    <>
    <Navbar/>
    <Sidebar/>
    <div className='w-[80%] absolute right-0 mt-16'>
    <Bookings/>
    </div>
    </>
  )
}

export default Booking