import React from 'react'
import { Button } from "@/ui/button"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/ui/dropdown-menu"

import { Input } from "@/ui/input"
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import flag from '../assets/flag.jpeg'

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className='h-16 z-50 flex w-full justify-between fixed  bg-dark-blue items-center  max-w-7xl  px-1 sm:px-5'>
        <div className='flex items-center gap-3'>
        <div className='
         text-logo-light border-b-[1px] border-indigo-300 py-1 scale-[0.9] cursor-pointer' onClick={()=>navigate('/dashboard')} >
        <h1 className='font-bold text-3xl'>Renteled Admin</h1>
        <p>List your Property Now.</p>
        </div>
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
          <img src={flag} className='w-12 border' alt="" />
          <div className='text-white '>
            <p>Welcome,</p>
            <p>Yogesh Mayekar</p>
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
              <DropdownMenuItem className="cursor-pointer">Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
    </div>
  )
}

export default Navbar