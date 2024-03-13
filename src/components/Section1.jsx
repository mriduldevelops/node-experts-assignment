import React from 'react'
import smartphone from '../assets/smartphone.svg'
import dashboard from '../assets/Dashboard.svg'
import layout from '../assets/layout.svg'
function Section1() {
  return (
    <div className='flex flex-col gap-12 items-center py-8 px-28'>
        <div className='lg:w-[50%] md:w-[60%]'>
        <h1 className="text-4xl font-semibold text-center mb-6">
        We provide various kind of learning modules for you
        </h1>
        <p className='text-sm text-[#707070] text-center'>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When Looking At Its Layout. The Point Of Using Lorem</p>
        </div>
        <div className='flex md:gap-5 lg:gap-24  items-center h-full w-full'>
            <div className='p-8 h-[90%] md:w-[33%] w-[30%] flex flex-col justify-center bg-white rounded-md shadow-md'>
                <img src={smartphone} alt="smartphone" className='h-28'/>
                <h2 className='text-2xl font-semibold text-center my-2'>Learn Anything</h2>
                <p className='text-sm text-[#707070]'>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page </p>
            </div>
            <div className='p-8 h-full md:w-[33%] w-[30%] bg-[#fcfada] rounded-md flex flex-col justify-center shadow-md'>
            <img src={dashboard} alt="dashboard" className='h-36'/>
                <h2 className='text-2xl font-semibold text-center my-2'>Flexible Learning</h2>
                <p className='text-sm text-[#707070]'>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When Looking At Its Layout. </p>
            </div>
            <div className='p-8 h-[90%] md:w-[33%] w-[30%] flex flex-col justify-center bg-white rounded-md shadow-md'>
            <img src={layout} alt="layout" className='h-28'/>
                <h2 className='text-2xl font-semibold text-center my-2'>Expert Connect</h2>
                <p className='text-sm text-[#707070]'>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page </p>
            </div>
        </div>
    </div>
  )
}

export default Section1