import React from 'react';

function Reservation() {
  return (
    <>
    <div className='border m-[25px] rounded-md'>
        <div className='flex justify-between items-center'>
            <h1 className='text-xl font-medium mx-5 my-2'>Reservation Status</h1>
            <div >
                <ul className='flex text-sm font-medium cursor-pointer mx-2 gap-1 border px-3 rounded-full'>
                    <li className='px-1 py-1 border-b-2 border-[#4e0b77]'>Daily</li>
                    <li className='px-1 py-1'>Weekly</li>
                    <li className='px-1 py-1'>Monthly</li>
                </ul>
            </div>
        </div>
        
    </div>
    </>
  )
}

export default Reservation