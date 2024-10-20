import React from 'react';
import { IoCodeSlashSharp, IoBrush, IoConstructOutline, IoCheckmarkCircleSharp } from "react-icons/io5";
import { AiOutlineGlobal } from "react-icons/ai";

const WhyChooseUs = () => {
    const whyChooseUsData = [
        {
            title: "Cutting-edge Technology",
            description: "Stay ahead with the latest technologies like AI, machine learning, and blockchain to boost efficiency, streamline operations, and future-proof your business. Our solutions are designed to give you a competitive edge by leveraging innovation.",
            icon: IoCodeSlashSharp,
            color: 'bg-blue-100 text-blue-600' // Blue for technology
        },
        {
            title: "User-Centered Design",
            description: "We design intuitive and visually appealing interfaces that enhance user engagement and satisfaction. Our UI/UX approach ensures a seamless user experience, whether it's for a mobile app or a website.",
            icon: IoBrush,
            color: 'bg-pink-100 text-pink-600' // Pink for creativity/design
        },
        {
            title: "Tailored Solutions",
            description: "Our custom software solutions are designed to fit your business needs, from improving productivity to automating processes. We work closely with you to create solutions that evolve with your business and support long-term growth.",
            icon: IoConstructOutline,
            color: 'bg-yellow-100 text-yellow-600' // Yellow for construction/solutions
        },
        {
            title: "Global Experience",
            description: "Projects delivered for clients across the globe, giving us a deep understanding of diverse markets and user needs.",
            icon: AiOutlineGlobal,
            color: 'bg-green-100 text-green-600' // Green for global reach
        },
        {
            title: "Proven Track Record",
            description: "Successfully completed 200+ projects with 100% client satisfaction, showcasing our commitment to quality and results.",
            icon: IoCheckmarkCircleSharp,
            color: 'bg-purple-100 text-purple-600' // Purple for achievement/trust
        }
    ];

    return (
        <div className='w-full h-auto px-4 mt-8 py-12'>
            <h1 className='text-6xl font-bold text-start'>Why inSri?</h1>
            <p className='text-lg text-start mt-4'>Expertise that Drives Digital Transformation</p>

            <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
                {whyChooseUsData.map((item, index) => (
                    <div key={index} className='px-4 py-6 bg-white rounded-lg  relative'>
                        <h1 className='text-8xl font-black absolute top-4 right-4 text-gray-100'>{index + 1}</h1>
                        
                        {/* Icon Container */}
                        <div className={`w-[50px] h-[50px] p-3 rounded-full flex justify-center items-center ${item.color}`}>
                            <item.icon className='text-2xl' />
                        </div>
                        
                        {/* Title and Description */}
                        <h1 className='text-2xl font-bold mt-6'>{item.title}</h1>
                        <p className='mt-3 text-gray-600'>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WhyChooseUs;
