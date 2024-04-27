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

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className='h-16 flex w-full justify-between  bg-dark-blue items-center max-w-7xl  px-1 sm:px-5'>
        <div className="relative  md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
            />
        </div>
        <div className='flex gap-2 items-center '>
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