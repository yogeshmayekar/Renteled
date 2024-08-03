import React, { useContext, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Card from '@/components/Card';
import { Button } from "../../ui/button";
import { MdOutlineBookOnline } from "react-icons/md";
import { MdEventAvailable } from "react-icons/md";
import { BsBoxArrowInRight } from "react-icons/bs";
import { IoExitOutline } from "react-icons/io5";
import Calanders from '@/components/Calanders';
import Piechart from '@/components/Piechart';
import { Progress } from "@/ui/progress";
import Reservation from '@/components/Reservation';
import Footer from '@/components/Footer';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '@/context/authContext';

function Home() {
  const [progress, setProgress] = React.useState(13);
  const { user } = useContext(AuthContext);
  
  return (
    user ? 
    <>
    <Navbar/>
    <Sidebar/>
    <main className='flex w-full '>
    <div className='pt-20 w-[80%] absolute right-0 h-max bg-[#f5f6fa] '>
      <div className='flex justify-between mx-[25px] my-[15px]'>
    <h1 className='text-3xl  font-medium'>Dashboard Overview</h1>
    <Button className='rounded-full bg-[#e6ecf2]' variant="outline" >Add New Property</Button>
      </div>

      <div className='flex w-[95%] mx-auto my-[30px] gap-[10px]'>
      <Card bgColor='#aae7ef' cardName='New Booking' countData={872} IconComponent={MdOutlineBookOnline} />
      <Card bgColor='#8eed91' cardName='Available Room' countData={285} IconComponent={MdEventAvailable} />
      <Card bgColor='#e0984c' cardName='Check in' countData={53} IconComponent={BsBoxArrowInRight} />
      <Card bgColor='#d3643f' cardName='Check out' countData={78} IconComponent={IoExitOutline} />
      </div>
    
      <div className='flex mx-[25px] gap-[20px]'>
        <div className='flex-2 '>
          <Calanders/>
        </div>

      <div className='border rounded-md w-full bg-white'>
        <div className='flex mx-3 my-2 justify-between'>
        <h1 className='text-xl font-medium'>Room Bookings</h1>
        <select className='border rounded py-1 px-2 outline-none'>
          <option>7 Days</option>
          <option>15 Days</option>
          <option>30 Days</option>
        </select>
        </div>
        <Piechart/>
        <div className='mx-auto my-6 w-[55%]'>
          <div className='flex gap-2'>
            <div className='flex-1'>
              <div className='flex items-center gap-1'>
                <div className="w-[16px] h-4 rounded-sm bg-[#02b2af]"></div>
                <p className='font-normal text-lg pb-[2px]'>Single (872)</p>
              </div>

            </div>
            <div className='flex-1'>
              <div className='flex items-center gap-1'>
                <div className="w-[16px] h-4 rounded-sm bg-[#2e96ff]"></div>
                <p className='font-normal text-lg pb-[2px]'>Double (85)</p>
              </div>

            </div>
            
          </div>
          <div className='flex  gap-2'>
            <div className='flex-1'>
              <div className='flex items-center gap-1'>
                <div className="w-[16px] h-4 rounded-sm bg-[#b800d8]"></div>
                <p className='font-normal text-lg pb-[2px]'>Delux (53)</p>
              </div>

            </div>
            <div className='flex-1'>
              <div className='flex items-center gap-1'>
                <div className="w-[16px] h-4 rounded-sm bg-[#60009b]"></div>
                <p className='font-normal text-lg pb-[2px]'>Super Delux (78)</p>
              </div>

            </div>
            
          </div>
        </div>
      </div>
      </div>

    <div className='border m-[25px] rounded-md bg-white'>
        <h1 className='text-xl font-medium mx-5 my-2'>Booking Room Today</h1>
        <div className='w-full my-6 px-[20px]'>
        <Progress value={33} color='#70e599' />
        <Progress value={60} color='#70e599' />
        <Progress value={25} color='#70e599' />
        </div>

        <div className='w-[50%] mx-5 my-6 '>
          <ul className='flex mx-4 text-base font-medium scale-105'>
          <li className='flex-1'>
            <span className='flex items-center gap-1'>
            <span className='text-3xl pb-1'> &#x2022;</span>
            <span>Pending</span>
            <p className='m-0 p-0'>(234)</p>
            </span> 
          </li>
          <li className='flex-1'>
            <span className='flex items-center gap-1'>
            <span className='text-3xl pb-1'> &#x2022;</span>
            <span>Done</span>
            <p className='m-0 p-0'>(65)</p>
            </span> 
          </li>
          <li className='flex-1'>
            <span className='flex items-center gap-1'>
            <span className='text-3xl pb-1'> &#x2022;</span>
            <span>Finish</span>
            <p className='m-0 p-0'>(763)</p>
            </span> 
          </li>
          </ul>
        </div>

    </div>

    <Reservation/>
    <Footer/>
    </div>
    </main>
    </> :
    <Navigate to="/login" />
  )
}

export default Home