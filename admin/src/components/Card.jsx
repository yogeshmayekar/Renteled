import React from 'react';

function Card({bgColor, cardName, countData, IconComponent }) {
  return (
    <>
    <div className='h-28 flex-1 rounded-lg border bg-white' style={{ backgroundColor: bgColor }} >
        <div className='flex justify-between px-4 py-4'>
          <h2 className='text-xl font-medium'>{countData}</h2>
          <p className='text-3xl font-semibold'><IconComponent/></p>
        </div>
        <p className='text-xl px-4'>{cardName}</p>
    </div>
    </>
  )
}

export default Card