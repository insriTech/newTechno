import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const Hero = () => {
    return (
        <>
            <div className='w-fll h-[80vh] bg-[#F5F7F8] flex flex-col justify-center gap-4 px-4'>
                <p className='text-xl font-bold px-16'>Welcome To inSri</p>
                <h1 className='text-[5.5rem] leading-tight font-bold text-center'>A New Breed of Custom Software Development Company</h1>
                <p className='text-xl mb-3 text-center'>Affordable software and app development with end-to-end services from planning to deployment and maintenance.</p>
                <div className='flex justify-center items-center'>
                    <button className='px-4 p-2 bg-black text-white rounded-2xl flex items-center gap-2'>  Explore Services <IoIosArrowRoundForward className='text-xl'/></button>
                </div>
            </div>
        </>
    )
}

export default Hero
