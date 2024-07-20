import React, { useContext } from 'react'
import { Button } from "@/ui/button"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/ui/dropdown-menu";
  import axios from 'axios';

import { Input } from "@/ui/input"
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import flag from '../assets/flag.jpeg'
import { AuthContext } from '@/context/authContext';

function Navbar() {
  const navigate = useNavigate();
  const {user, dispatch} = useContext(AuthContext);

  const handleLogout =async()=>{
    const response = await axios.post('/api/auth/logout');
    // console.log(response.status)
    if(response.status===200){
      dispatch({type:'LOG_OUT'});
    } 
  }
  return (
    <div className='h-16 z-50  flex w-[80%] right-0 top-0 justify-between fixed  bg-dark-blue items-center  max-w-7xl  px-4'>
        <div className='flex items-center gap-3'>
        <div className="relative  md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
            />
        </div>
        </div>
        <div className='flex gap-2 items-center '>
          <img src={flag} className='w-8 border' alt="" />
          <div className='text-white text-sm '>
            <p>Welcome,</p>
            {user && <p>{user?.username}</p>}
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full"
              >
                <img
                  src=""
                  width={36}
                  height={36}
                  alt="YM"
                  className="overflow-hidden rounded-full"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer" onClick={()=>navigate('/account_details')} >Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer" onClick={handleLogout}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
    </div>
  )
}

export default Navbar