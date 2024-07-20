import React from 'react';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import UserTable from '@/components/UserTable';

function Users() {
  return (
    <>
    <Navbar/>
    <Sidebar/>
    <div className='w-[80%] absolute right-0 mt-16'>
    <div className='flex justify-between m-4 py-2 px-1'>
        <h2 className='text-3xl  font-medium'>All Users</h2>
        <select className='w-[110px] pl-1 border rounded outline-none'>
            <option value="">All</option>
            <option value="">Active</option>
            <option value="">In-Active</option>
        </select>
    </div>
    <UserTable/>
    <Footer/>
    </div>
    </>
  )
}

export default Users