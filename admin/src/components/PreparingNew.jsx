import React from 'react';
import support from '../assets/support2.png';
import { Button } from '@/ui/button';
import { NavLink } from 'react-router-dom';

function PreparingNew() {
  return (
    <>
    <div className='border relative mt-[5%]  flex rounded-lg mx-8'>
        <img src={support} className='w-[40%] p-2 rounded-lg ' alt="" />
        <div className='pt-[10%] mx-9'>
          <p className='text-3xl pb-1'>We are preparing something new.</p>
          <p className='text-3xl pb-1 font-medium'>Stay tuned!</p>
          <NavLink to='/'><Button variant='outline' className='rounded-full mr-1 mt-4' >Dashboard</Button></NavLink>
          <NavLink to='/bookings'><Button variant='outline' className='rounded-full mr-1 mt-4' >Bookings</Button></NavLink>
          <NavLink to='/properties'><Button variant='outline' className='rounded-full mr-1 mt-4' >Properties</Button></NavLink>
          <NavLink to='/users'><Button variant='outline' className='rounded-full mr-1 mt-4' >Users</Button></NavLink>
          <p className='pl-1 my-6 font-medium text-[#8094ae]'>Developed by Yogesh Mayekar&#10084;</p>
        </div>
    </div>
    </>
  )
}

export default PreparingNew