import React from 'react'
import { IoMdDownload } from "react-icons/io";

const About = () => {
    return (
        <>
            <div className='bg-white p-5 flex flex-col items-center justify-center'>
                <div className='h-[60px] border-l-[4px] mt-[10px] border-[#101656]'></div>
                <h1 className='text-black text-[32px] p-[10px] text-center font-bold'>About us</h1>
                <p className='p-[30px] text-[22px] ml-[10%] mr-[10%]'>E-Summit 2025, organized by the Entrepreneurship Cell of UIT RGPV, is the flagship celebration of innovation, leadership, and entrepreneurial spirit. Designed to inspire and empower young minds, the summit brings together visionary founders, investors, industry leaders, and students from across the country for a power-packed experience.</p>
                <div className='flex gap-20 mb-5 p-3'>
                  <div>
                    <h1 className='text-black text-[32px] text-center font-bold'>50000+</h1>
                    <p className='font-semibold'>ATTENDEES</p>
                  </div>
                  <div>
                    <h1 className='text-black text-[32px] text-center font-bold'>300+</h1>
                    <p className='font-semibold'>STARTUPS</p>
                  </div>
                  <div>
                    <h1 className='text-black text-[32px] text-center font-bold'>10+</h1>
                    <p className='font-semibold'>EVENTS</p>
                  </div>
                </div>
                <button className='border-[3px] rounded-md text-black border-black
                 p-1 pl-2 pr-2 text-[22px] m-5 hover:border-[#101656] hover:bg-[#101656] hover:text-white'><IoMdDownload className='inline'/> Brochure</button>
            </div>
        </>
    )
}

export default About