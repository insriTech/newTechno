import React from 'react'
import { FaCogs, FaShieldAlt, FaStar, FaHandshake } from 'react-icons/fa'

const CoreValue = () => {
  return (
    <>
      <div className='w-full h-auto  px-4 py-8'>
        <h1 className='text-5xl font-bold text-start'>What Drives Us</h1>

        <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
          {/* Innovation */}
          <div className='p-2 py-4 rounded-md bg-[#F5F7F8] flex flex-col gap-4'>
            <div className='w-[50px] h-[50px] bg-blue-100 rounded-full flex items-center justify-center'>
              <FaCogs className='text-blue-500 text-2xl' /> {/* Innovation Icon */}
            </div>
            <h1 >
              Innovation: Constantly embracing new technologies to create transformative solutions.
            </h1>
          </div>

          {/* Integrity */}
          <div className='p-2 py-4 rounded-md bg-[#F5F7F8] flex flex-col gap-4'>
            <div className='w-[50px] h-[50px] bg-green-100 rounded-full flex items-center justify-center'>
              <FaShieldAlt className='text-green-500 text-2xl' /> {/* Integrity Icon */}
            </div>
            <h1 >
              Integrity: Operating with transparency, ensuring trust and accountability in all our partnerships.
            </h1>
          </div>

          {/* Excellence */}
          <div className='p-2 py-4 rounded-md bg-[#F5F7F8] flex flex-col gap-4'>
            <div className='w-[50px] h-[50px] bg-yellow-100 rounded-full flex items-center justify-center'>
              <FaStar className='text-yellow-500 text-2xl' /> {/* Excellence Icon */}
            </div>
            <h1 >
              Excellence: Striving for perfection in everything we do, from design to deployment.
            </h1>
          </div>

          {/* Collaboration */}
          <div className='p-2 py-4 rounded-md bg-[#F5F7F8] flex flex-col gap-4'>
            <div className='w-[50px] h-[50px] bg-red-100 rounded-full flex items-center justify-center'>
              <FaHandshake className='text-red-500 text-2xl' /> {/* Collaboration Icon */}
            </div>
            <h1 >
              Collaboration: Working closely with clients to understand and meet their unique business needs.
            </h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default CoreValue
