import React from 'react';
import { IoCodeSlashSharp, IoBrush, IoConstructOutline, IoCheckmarkCircleSharp } from "react-icons/io5";
import { AiOutlineGlobal } from "react-icons/ai";

const WhyChooseUs = () => {
    const whyChooseUsData = [
        {
            "title": "Cutting-edge Technology",
            "description": "Stay ahead with the latest technologies like AI, machine learning, and blockchain to boost efficiency, streamline operations, and future-proof your business. Our solutions are designed to give you a competitive edge by leveraging innovation.",
            "icon": IoCodeSlashSharp
        },
        {
            "title": "User-Centered Design",
            "description": "We design intuitive and visually appealing interfaces that enhance user engagement and satisfaction. Our UI/UX approach ensures a seamless user experience, whether it's for a mobile app or a website.",
            "icon": IoBrush
        },
        {
            "title": "Tailored Solutions",
            "description": "Our custom software solutions are designed to fit your business needs, from improving productivity to automating processes. We work closely with you to create solutions that evolve with your business and support long-term growth.",
            "icon": IoConstructOutline
        },
        {
            "title": "Global Experience",
            "description": "Projects delivered for clients across the globe, giving us a deep understanding of diverse markets and user needs.",
            "icon": AiOutlineGlobal // You can change the icon if you'd like
        },
        {
            "title": "Proven Track Record",
            "description": "Successfully completed 200+ projects with 100% client satisfaction, showcasing our commitment to quality and results.",
            "icon": IoCheckmarkCircleSharp  // You can change the icon if you'd like
        }
    ];

    return (
        <>
            <div className='w-full h-auto  px-4 mt-8 py-12'>
                <h1 className='text-6xl font-bold text-start'>Why inSri?</h1>
                <p className='text-lg text-start mt-4'>Expertise that Drives Digital Transformation</p>

                <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
                    {whyChooseUsData.map((item, index) => (
                        <div key={index} className='p-4 rounded-md bg-[#F5F7F8] relative'>
                            <h1 className='text-8xl font-black absolute top-1 right-1 text-gray-200'>{index + 1}</h1>
                            <div className='w-[40px] h-[40px] rounded-full bg-gray-200 flex justify-center items-center'>
                                <item.icon className='text-xl text-green-600' />
                            </div>
                            <h1 className='text-3xl font-bold mt-4'>{item.title}</h1>
                            <p className='mt-2'>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default WhyChooseUs;
