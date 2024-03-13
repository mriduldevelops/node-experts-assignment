import React from 'react'
import logo from '../assets/logo.svg'

function Nav() {
  return (
    <div className='py-8 px-20 flex justify-between items-center'>
        <div className='flex gap-1 items-center'>
            <img src={logo} alt="logo" className='h-10 w-10'/>
            <h2 className='text-2xl text-white'>Learning Exp.</h2>
        </div>
        <div className='flex gap-7'>
            <a href="#" className='text-gray-300 active:underline hover:scale-105 hover:text-white'>Home</a>
            <a href="" className='text-gray-300 active:underline hover:scale-105 hover:text-white'>Services</a>
            <a href="" className='text-gray-300 active:underline hover:scale-105 hover:text-white'>Why Us</a>
            <a href="" className='text-gray-300 active:underline hover:scale-105 hover:text-white'>Our Goals</a>
            <button className='bg-[#FFEC05] py-1 px-4 rounded-full text-sm font-semibold'>Contact Us</button>
        </div>
    </div>
  )
}

export default Nav