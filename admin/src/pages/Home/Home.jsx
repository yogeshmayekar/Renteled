import React from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Card from '@/components/Card';
import { Button } from "../../ui/button";
import { MdOutlineBookOnline } from "react-icons/md";
import { MdEventAvailable } from "react-icons/md";
import { BsBoxArrowInRight } from "react-icons/bs";
import { BsBoxArrowInLeft } from "react-icons/bs";
import Calanders from '@/components/Calanders';
import Piechart from '@/components/Piechart';

function Home() {
  return (
    <>
    <Navbar/>
    <main className='flex w-full'>
    <Sidebar/>
    <div className='mt-16 ml-60 w-4/5 h-max '>
    <div className='flex justify-between mx-[25px] my-[15px]'>
    <h1 className='text-3xl font-medium'>Dashboard Overview</h1>
    <Button className='rounded-full' variant="outline" >Add New Property</Button>
    </div>
    <div className='flex flex-1 mx-[25px] my-[30px] gap-[10px]'>
      <Card bgColor='#64CCDB' cardName='New Booking' countData={872} IconComponent={MdOutlineBookOnline} />
      <Card bgColor='#2EBA35' cardName='Available Room' countData={285} IconComponent={MdEventAvailable} />
      <Card bgColor='#EB9431' cardName='Check in' countData={53} IconComponent={BsBoxArrowInRight} />
      <Card bgColor='#E6501A' cardName='Check out' countData={78} IconComponent={BsBoxArrowInLeft} />
    </div>
    
    <div className='flex mx-[25px] gap-[30px] h-2/4'>
      <div className='flex-2'>
        <Calanders/>
      </div>
      <div className='border flex-1 rounded-md'>
        <div className='flex mx-3 my-2 justify-between'>
        <h1 className='text-lg font-medium '>Room Bookings</h1>
        <select className='border rounded p-1'>
          <option>7 Days</option>
          <option>15 Days</option>
          <option>30 Days</option>
        </select>
        </div>
        <Piechart/>
        <div>
          <div className='flex'>
            <div>
              <div className='flex items-center'>
              <div className="w-2 h-2 bg-[#02b2af]"></div>
              <p>Single</p>
              </div>
              <p>872</p>
            </div>
            <div>
            <div className='flex items-center'>
              <div className="w-2 h-2 bg-[#2e96ff]"></div>
              <p>Double</p>
              </div>
              <p>285</p>
            </div>
          </div>
          <div className='flex'>
            <div>
            <div className='flex items-center'>
              <div className="w-2 h-2 bg-[#b800d8]"></div>
              <p>Delux</p>
              </div>
              <p>53</p>
            </div>
            <div>
            <div className='flex items-center'>
              <div className="w-2 h-2 bg-[#60009b]"></div>
              <p>suit</p>
              </div>
              <p>78</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </main>
    </>
  )
}

export default Home