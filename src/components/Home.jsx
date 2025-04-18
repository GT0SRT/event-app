import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const Home = ({toggleReg}) => {
  return (
    <>
        <div>
            <div className='flex justify-center items-center mt-[10%]'>
                <div className='text-center'>
                    <h1 className='text-[white] text-[64px] font-bold'>E-Summit'25</h1>
                    <h5 className='font-semibold text-[grey] text-[32px]'>1st & 2nd May 2025</h5>
                    <button onClick={toggleReg} className='border-[3px] text-[#101656] border-white hover:border-[#101656] bg-white p-2 pl-5 pr-5 text-2xl m-3 hover:bg-[#101656] hover:text-[white] rounded-lg font-semibold'>Register</button>
                </div>
            </div>
            <div className='flex justify-between items-center w-full mb-36 mt-36 md:mb-32 md:mt-7'>
              <div className='flex flex-col items-center'></div>
              <div className='text-[#adacac] rotate-90 font-semibold text-[22px] bounce-animation'>Scroll Down <FaArrowRightLong className='inline' /></div>
            </div>
        </div>
    </>
  )
}

export default Home
