import React from 'react'

function LogoNav() {
  return (
    <>
        <div className='text-logo-light  fixed left-0 top-0 border-b-[1px] border-indigo-300 py-1 scale-[0.9] cursor-pointer' onClick={()=>navigate('/dashboard')} >
        <h1 className='font-bold text-3xl'>Renteled Admin</h1>
        <p>List your Property Now.</p>
        </div>
    </>
  )
}

export default LogoNav