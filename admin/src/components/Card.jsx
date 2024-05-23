import React from 'react';

function Card({bgColor, cardName, countData, IconComponent }) {
  return (
    <>
    <div className='h-28 flex-1 rounded-lg border' style={{ backgroundColor: bgColor }} >
        <div className='flex'>
        <h2>{countData}</h2>
        <IconComponent/>
        </div>
        <p>{cardName}</p>
    </div>
    </>
  )
}

export default Card