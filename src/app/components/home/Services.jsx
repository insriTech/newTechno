import React from 'react'
import { IoCodeSlashSharp, IoArrowForward, IoBrush, IoDesktop, IoCloudOutline, IoMegaphoneOutline, IoConstructOutline } from "react-icons/io5";

const Services = () => {

    const services = [
        {
            "name": "App Development",
            "description": "We design and develop powerful, scalable apps tailored to your business needs, offering seamless functionality and an exceptional user experience across platforms.",
            "icon": <IoCodeSlashSharp className='text-xl text-red-500' /> // App Development Icon
        },
        {
            "name": "UI/UX Design",
            "description": "Our UI/UX design services focus on creating user-friendly, visually appealing interfaces that enhance user engagement, ensuring an intuitive and delightful experience.",
            "icon": <IoBrush className='text-xl text-blue-500' /> // UI/UX Design Icon
        },
        {
            "name": "Web Development",
            "description": "We build responsive, fast-loading websites that drive traffic, engage visitors, and convert leads, delivering custom solutions for businesses of all sizes.",
            "icon": <IoDesktop className='text-xl text-green-500' /> // Web Development Icon
        },
        {
            "name": "IT & Network Services",
            "description": "Optimize your IT infrastructure with our robust network services, ensuring security, reliability, and performance for smooth business operations.",
            "icon": <IoCloudOutline className='text-xl text-yellow-500' /> // IT & Network Icon
        },
        {
            "name": "Digital Marketing",
            "description": "Our digital marketing strategies help you reach the right audience, increase online visibility, and boost conversions through targeted campaigns.",
            "icon": <IoMegaphoneOutline className='text-xl text-purple-500' /> // Digital Marketing Icon
        },
        {
            "name": "Software Management",
            "description": "We streamline your software operations, improving productivity and scalability, with ongoing support and management tailored to your evolving business needs.",
            "icon": <IoConstructOutline className='text-xl text-orange-500' /> // Software Management Icon
        }
    ]


    return (
        <>
            <div className='w-full h-auto mt-8  px-4'>
                <h1 className='text-6xl font-bold text-start'>Our Expertise</h1>
                <p className='text-lg text-start mt-4'>Comprehensive Solutions for Your Digital Success</p>


                {/* Services Cards */}
                <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8'>
                    {
                        services.map((items, index) => (
                            <div key={index} className='p-2 rounded-md bg-[#F5F7F8] flex flex-col gap-12'>
                                <div className='flex flex-col gap-4'>
                                    <div className='w-[50px] h-[50px] p-4 rounded-full bg-gray-200 flex justify-center items-center'>
                                        {items.icon}
                                    </div>
                                    <h1 className='text-3xl font-bold'>{items.name}</h1>
                                    <p>{items.description}</p>
                                </div>

                                <div className='w-[50px] h-[50px] p-4 rounded-full hover:bg-[#FFE843] flex cursor-pointer justify-center items-center'>
                                    <IoArrowForward className='text-xl' />
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </>
    )
}

export default Services;
