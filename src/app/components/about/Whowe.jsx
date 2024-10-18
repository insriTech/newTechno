import React from 'react'
import { FaRegLightbulb, FaUsers, FaRocket } from 'react-icons/fa' // Importing icons from react-icons

const Whowe = () => {
    return (
        <>
            <div className='w-full h-auto  px-4 flex flex-col gap-4 py-4'>
                <h1 className='text-5xl font-bold text-start'>Who We Are?</h1>
                <h1 className='text-xl'> About inSri Tech Solutions Pvt Ltd</h1>
                <p className='w-[80%] text-md'>
                    At inSri, we are dedicated to transforming businesses through cutting-edge technology solutions.
                    As a custom software development company, we focus on delivering tailored solutions that meet the evolving needs
                    of our clients. From application development to IT and network services, our expertise spans across various
                    sectors, ensuring businesses can thrive in the digital age.
                </p>

                <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
                    <div className='p-2 py-4 rounded-md bg-[#F5F7F8] flex flex-col gap-4'>
                        <div className='w-[50px] h-[50px] bg-green-200 rounded-full flex items-center justify-center'>
                            <FaRegLightbulb className="text-green-700 text-2xl" /> {/* Icon for experience */}
                        </div>
                        <h1>
                            Over a decade of experience in software development and digital solutions.
                        </h1>
                    </div>
                    <div className='p-2 py-4 rounded-md bg-[#F5F7F8] flex flex-col gap-4'>
                        <div className='w-[50px] h-[50px] bg-green-200 rounded-full flex items-center justify-center'>
                            <FaUsers className="text-green-700 text-2xl" /> {/* Icon for team */}
                        </div>
                        <h1>
                            A team of highly skilled engineers, designers, and strategists.
                        </h1>
                    </div>
                    <div className='p-2 py-4 rounded-md bg-[#F5F7F8] flex flex-col gap-4'>
                        <div className='w-[50px] h-[50px] bg-green-200 rounded-full flex items-center justify-center'>
                            <FaRocket className="text-green-700 text-2xl" /> {/* Icon for mission */}
                        </div>
                        <h1>
                            Our mission is to empower businesses through innovation and technology.
                        </h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Whowe
