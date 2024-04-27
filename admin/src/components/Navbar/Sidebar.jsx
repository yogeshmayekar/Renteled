import React, { useState } from 'react';
import GridViewIcon from '@mui/icons-material/GridView';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import GroupIcon from '@mui/icons-material/Group';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import ReviewsIcon from '@mui/icons-material/Reviews';
import { NavLink, useNavigate } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion"

function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className='px-1 w-3/12 h-screen bg-dark-blue '>
        <div className=' text-logo-light border-b-[1px] border-indigo-300 py-2 scale-[0.9] cursor-pointer' onClick={()=>navigate('/')} >
        <h1 className='font-bold text-3xl'>Renteled Admin</h1>
        <p>List your Property Now.</p>
        </div>
        <div className='scale-[0.9]'>
           <p className='text-light-grey'>MENU</p>
           <ul className='text-light-white-font cursor-pointer'>
            <NavLink to="/" className={({isActive})=>isActive? 'bg-light-hover-grey flex gap-2 my-1 items-center hover:bg-light-hover-grey  px-3 py-1 rounded': 'flex gap-2 my-1 items-center hover:bg-light-hover-grey  px-3 py-1 rounded'}  ><GridViewIcon/><p className='text-[20px] pb-0.5 font-800'>Dashboard</p></NavLink>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger><li className='flex gap-2 my-1 items-center active:bg-light-hover-grey  px-2 py-1 rounded'><LibraryBooksIcon/><p className='text-[20px] pb-0.5 font-800'>Bookings</p></li></AccordionTrigger>
                    <AccordionContent>
                      <ul>
                       <NavLink to='/bookings' className={({isActive})=>isActive ? "text-white" : " "} ><p className='pl-8 py-2 text-[18px]  font-800 rounded text-light-grey  hover:text-white'>All Bookings</p></NavLink>
                       <NavLink to='/bookings' className={({isActive})=>isActive ? "text-white" : " "} ><p className='pl-8 py-2 text-[18px]  font-800 rounded text-light-grey hover:text-white'>Upcoming</p></NavLink>
                      </ul>
                    </AccordionContent>
                </AccordionItem>
              </Accordion>
            <NavLink  to='/properties' className={({isActive})=>isActive? 'bg-light-hover-grey flex gap-2 my-1 items-center hover:bg-light-hover-grey  px-3 py-1 rounded': 'flex gap-2 my-1 items-center hover:bg-light-hover-grey  px-3 py-1 rounded'} ><DomainAddIcon/><p className='text-[20px] pb-0.5 font-800'>Properties</p></NavLink>
            <NavLink to='/reviews' className={({isActive})=>isActive? 'bg-light-hover-grey flex gap-2 my-1 items-center hover:bg-light-hover-grey  px-3 py-1 rounded': 'flex gap-2 my-1 items-center hover:bg-light-hover-grey  px-3 py-1 rounded'} ><ReviewsIcon/><p className='text-[20px] pb-0.5 font-800'>Reviews</p></NavLink>
            <NavLink to='/users' className={({isActive})=>isActive? 'bg-light-hover-grey flex gap-2 my-1 items-center hover:bg-light-hover-grey  px-3 py-1 rounded': 'flex gap-2 my-1 items-center hover:bg-light-hover-grey  px-3 py-1 rounded'} ><GroupIcon/><p className='text-[20px] pb-0.5 font-800'>Users</p></NavLink>
            
          </ul> 

          <p className='text-light-grey'>SUPPORT</p>
          <ul className='text-light-white-font cursor-pointer'>
          <NavLink to='/messages' className={({isActive})=>isActive? 'bg-light-hover-grey flex gap-2 my-1 items-center hover:bg-light-hover-grey  px-3 py-1 rounded': 'flex gap-2 my-1 items-center hover:bg-light-hover-grey  px-3 py-1 rounded'} ><lOutlineIcon/><p className='text-[20px] pb-0.5 font-800'>Messages</p></NavLink>
          </ul>
          
          <p className='text-light-grey'>OTHERS</p>
          <ul className='text-light-white-font cursor-pointer'>
          <NavLink to='/account_details' className={({isActive})=>isActive? 'bg-light-hover-grey flex gap-2 my-1 items-center hover:bg-light-hover-grey  px-3 py-1 rounded': 'flex gap-2 my-1 items-center hover:bg-light-hover-grey  px-3 py-1 rounded'}  ><SettingsIcon/><p className='text-[20px] pb-0.5 font-800'>Settings</p></NavLink>
          <li className='flex gap-2 my-1 items-center active:bg-light-hover-grey  hover:bg-light-hover-grey px-3 py-1 rounded'><LogoutIcon/><p className='text-[20px] pb-0.5 font-800'>Logout</p></li>
          </ul>
        </div>
    </div>
  )
}

export default Sidebar