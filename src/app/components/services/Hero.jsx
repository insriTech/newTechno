import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'

const Hero = () => {
    return (
        <>
            <div className='w-full h-[80vh] bg-[#F5F7F8] flex flex-col justify-center items-center gap-4'>
                <h1 className='text-[5.5rem] leading-tight font-bold text-center'>Empowering Your Business with Tailored Solutions</h1>
                <p className='text-xl mb-3 w-[100%] text-center'>We provide a range of services from app development to digital marketing, designed to scale your business and enhance user experience.</p>
                <div className='flex justify-center items-center'>
                    <button className='px-4 p-2 bg-black text-white rounded-2xl flex items-center gap-2'>  Discover Our Story <IoIosArrowRoundForward className='text-xl' /></button>
                </div>
            </div>
        </>
    )
}

export default Hero
