import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const Hero = () => {
    return (
        <>
            <div className='w-fll h-[80vh] bg-[#F5F7F8] flex flex-col justify-center gap-4 px-4'
            style={{backgroundImage: "url('https://img.freepik.com/free-photo/person-wearing-high-tech-ar-headset-surrounded-by-bright-blue-neon-colors_23-2151255163.jpg?ga=GA1.1.1262692796.1695691184&semt=ais_hybrid')", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover"}}
            >
                <p className='text-xl font-bold px-16 text-white'>Welcome To inSri</p>
                <h1 className='text-[5.5rem] leading-tight font-bold text-center text-white'>A New Breed of Custom Software Development Company</h1>
                <p className='text-xl mb-3 text-center text-white'>Affordable software and app development with end-to-end services from planning to deployment and maintenance.</p>
                <div className='flex justify-center items-center'>
                    <button className='px-4 p-2 bg-white text-black rounded-2xl flex items-center gap-2'>  Explore Services <IoIosArrowRoundForward className='text-xl'/></button>
                </div>
            </div>
        </>
    )
}

export default Hero
