import React from 'react'
import { FaGlobe, FaLightbulb, FaLeaf, FaHandsHelping, FaCode, FaProjectDiagram, FaSmile } from 'react-icons/fa'

const VisionMission = () => {
  return (
    <>
      {/* Vision Section */}
      <div className='w-full h-auto  px-4 py-8'>
        <h1 className='text-5xl font-bold text-start'>Our Vision</h1>
        <h1 className='text-xl '>Driving Innovation for a Digital Future</h1>

        <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
          {/* Global Leader */}
          <div className='p-2 py-4 rounded-md bg-[#F5F7F8] flex flex-col gap-4'>
            <div className='w-[50px] h-[50px] bg-blue-100 rounded-full flex items-center justify-center'>
              <FaGlobe className='text-blue-500 text-2xl' /> {/* Global Leader Icon */}
            </div>
            <h1>To be a global leader in software development.</h1>
          </div>

          {/* Technological Innovation */}
          <div className='p-2 py-4 rounded-md bg-[#F5F7F8] flex flex-col gap-4'>
            <div className='w-[50px] h-[50px] bg-yellow-100 rounded-full flex items-center justify-center'>
              <FaLightbulb className='text-yellow-500 text-2xl' /> {/* Innovation Icon */}
            </div>
            <h1>Focus on driving technological innovation across industries.</h1>
          </div>

          {/* Sustainable Value */}
          <div className='p-2 py-4 rounded-md bg-[#F5F7F8] flex flex-col gap-4'>
            <div className='w-[50px] h-[50px] bg-green-100 rounded-full flex items-center justify-center'>
              <FaLeaf className='text-green-500 text-2xl' /> {/* Sustainability Icon */}
            </div>
            <h1>Create long-term, sustainable value for our clients.</h1>
          </div>

          {/* Empower Businesses */}
          <div className='p-2 py-4 rounded-md bg-[#F5F7F8] flex flex-col gap-4'>
            <div className='w-[50px] h-[50px] bg-red-100 rounded-full flex items-center justify-center'>
              <FaHandsHelping className='text-red-500 text-2xl' /> {/* Empower Businesses Icon */}
            </div>
            <h1>Empower businesses worldwide to succeed in the digital landscape.</h1>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className='w-full h-auto  px-4 py-8'>
        <h1 className='text-5xl font-bold text-start'>Our Mission</h1>
        <h1 className='text-xl '>Delivering Excellence in Every Project</h1>

        <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
          {/* Top-tier Software */}
          <div className='p-2 py-4 rounded-md bg-[#F5F7F8] flex flex-col gap-4'>
            <div className='w-[50px] h-[50px] bg-blue-100 rounded-full flex items-center justify-center'>
              <FaCode className='text-blue-500 text-2xl' /> {/* Software Development Icon */}
            </div>
            <h1>Provide top-tier, cost-effective software and app development services.</h1>
          </div>

          {/* High-Quality Results */}
          <div className='p-2 py-4 rounded-md bg-[#F5F7F8] flex flex-col gap-4'>
            <div className='w-[50px] h-[50px] bg-yellow-100 rounded-full flex items-center justify-center'>
              <FaProjectDiagram className='text-yellow-500 text-2xl' /> {/* High-Quality Results Icon */}
            </div>
            <h1>Ensure high-quality results from concept to completion.</h1>
          </div>

          {/* Innovative Solutions */}
          <div className='p-2 py-4 rounded-md bg-[#F5F7F8] flex flex-col gap-4'>
            <div className='w-[50px] h-[50px] bg-green-100 rounded-full flex items-center justify-center'>
              <FaLightbulb className='text-green-500 text-2xl' /> {/* Innovation Icon */}
            </div>
            <h1>Leverage cutting-edge technologies to build innovative solutions.</h1>
          </div>

          {/* Client Satisfaction */}
          <div className='p-2 py-4 rounded-md bg-[#F5F7F8] flex flex-col gap-4'>
            <div className='w-[50px] h-[50px] bg-red-100 rounded-full flex items-center justify-center'>
              <FaSmile className='text-red-500 text-2xl' /> {/* Client Satisfaction Icon */}
            </div>
            <h1>Maintain a strong focus on client satisfaction and business growth.</h1>
          </div>

          {/* Digital Transformation */}
          <div className='p-2 py-4 rounded-md bg-[#F5F7F8] flex flex-col gap-4'>
            <div className='w-[50px] h-[50px] bg-purple-100 rounded-full flex items-center justify-center'>
              <FaHandsHelping className='text-purple-500 text-2xl' /> {/* Digital Transformation Icon */}
            </div>
            <h1>Support businesses at every stage of their digital transformation journey.</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default VisionMission
