import React, { useContext, useState } from 'react';
import GridViewIcon from '@mui/icons-material/GridView';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import GroupIcon from '@mui/icons-material/Group';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import ReviewsIcon from '@mui/icons-material/Reviews';
import MessageIcon from '@mui/icons-material/Message';
import { NavLink, useNavigate } from "react-router-dom";
import LogoNav from './LogoNav';
import axios from 'axios';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion"
import { AuthContext } from '@/context/authContext';

function Sidebar() {
  const navigate = useNavigate();
  const {dispatch} = useContext(AuthContext);

  const handleLogout =async()=>{
    const response = await axios.post('/api/auth/logout');
    // console.log(response.status)
    if(response.status===200){
      dispatch({type:'LOG_OUT'});
    } 
  }

  return (
    <div className='px-1 w-[20%] z-40 pt-16 fixed h-screen bg-dark-blue'>
      <LogoNav/>
        <div className='scale-[0.9]'>
           <p className='text-light-grey'>MENU</p>
           <ul className='text-light-white-font cursor-pointer'>
            <NavLink to="/" caseSensitive className={({isActive})=>isActive ? 'bg-light-hover-grey flex gap-2 my-1 items-center hover:bg-light-hover-grey  px-3 py-1 rounded': 'flex gap-2 my-1 items-center hover:bg-light-hover-grey  px-3 py-1 rounded'}  ><GridViewIcon/><p className='text-[20px] pb-0.5 font-800'>Dashboard</p></NavLink>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger><li className='flex gap-2 my-1 items-center active:bg-light-hover-grey  px-2 py-1 rounded'><LibraryBooksIcon/><p className='text-[20px] pb-0.5 font-800'>Bookings</p></li></AccordionTrigger>
                    <AccordionContent>
                      <ul>
                       <NavLink to='/bookings' caseSensitive className={({isActive})=>isActive ? "text-white" : " "} ><p className='pl-8 py-2 text-[18px]  font-800 rounded text-light-grey  hover:text-white'>All Bookings</p></NavLink>
                       <NavLink to='/bookings' caseSensitive className={({isActive})=>isActive ? "text-white" : " "} ><p className='pl-8 py-2 text-[18px]  font-800 rounded text-light-grey hover:text-white'>Upcoming</p></NavLink>
                      </ul>
                    </AccordionContent>
                </AccordionItem>
              </Accordion>
            <NavLink to='/properties' caseSensitive className={({isActive})=>isActive ? 'bg-light-hover-grey flex gap-2 my-1 items-center hover:bg-light-hover-grey  px-3 py-1 rounded': 'flex gap-2 my-1 items-center hover:bg-light-hover-grey  px-3 py-1 rounded'} ><DomainAddIcon/><p className='text-[20px] pb-0.5 font-800'>Properties</p></NavLink>
            <NavLink to='/reviews' caseSensitive className={({isActive})=>isActive ? 'bg-light-hover-grey flex gap-2 my-1 items-center hover:bg-light-hover-grey  px-3 py-1 rounded': 'flex gap-2 my-1 items-center hover:bg-light-hover-grey  px-3 py-1 rounded'} ><ReviewsIcon/><p className='text-[20px] pb-0.5 font-800'>Reviews</p></NavLink>
            <NavLink to='/users' caseSensitive className={({isActive})=>isActive ? 'bg-light-hover-grey flex gap-2 my-1 items-center hover:bg-light-hover-grey  px-3 py-1 rounded': 'flex gap-2 my-1 items-center hover:bg-light-hover-grey  px-3 py-1 rounded'} ><GroupIcon/><p className='text-[20px] pb-0.5 font-800'>Users</p></NavLink>
            
          </ul> 

          <p className='text-light-grey'>SUPPORT</p>
          <ul className='text-light-white-font cursor-pointer'>
          <NavLink to='/messages' caseSensitive className={({isActive})=>isActive ? 'bg-light-hover-grey flex gap-2 my-1 items-center hover:bg-light-hover-grey  px-3 py-1 rounded': 'flex gap-2 my-1 items-center hover:bg-light-hover-grey  px-3 py-1 rounded'} ><MessageIcon/><p className='text-[20px] pb-0.5 font-800'>Messages</p></NavLink>
          </ul>
          
          <p className='text-light-grey'>OTHERS</p>
          <ul className='text-light-white-font cursor-pointer'>
          <NavLink to='/account_details' caseSensitive className={({isActive})=>isActive ? 'bg-light-hover-grey flex gap-2 my-1 items-center hover:bg-light-hover-grey  px-3 py-1 rounded': 'flex gap-2 my-1 items-center hover:bg-light-hover-grey  px-3 py-1 rounded'}  ><SettingsIcon/><p className='text-[20px] pb-0.5 font-800'>Settings</p></NavLink>
          <li onClick={handleLogout} className='flex gap-2 my-1 items-center active:bg-light-hover-grey  hover:bg-light-hover-grey px-3 py-1 rounded'><LogoutIcon/><p className='text-[20px] pb-0.5 font-800'>Logout</p></li>
          </ul>
        </div>
    </div>
  )
}

export default Sidebar;