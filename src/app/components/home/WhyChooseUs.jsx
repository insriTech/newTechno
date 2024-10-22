import React from 'react';
import { IoCodeSlashSharp, IoBrush, IoConstructOutline, IoCheckmarkCircleSharp } from "react-icons/io5";
import { AiOutlineGlobal } from "react-icons/ai";

const WhyChooseUs = () => {
    const whyChooseUsData = [
        {
            title: "Cutting-edge Technology",
            description: "We harness the power of advanced technologies like AI, machine learning, and blockchain to enhance efficiency, improve business operations, and provide innovative solutions. Our approach helps you stay ahead of competitors by adopting the latest advancements.",
            icon: IoCodeSlashSharp,
            color: 'bg-blue-100 text-blue-600', // Blue for technology
            bg: '#66B2FF' // Medium-light blue
        },
        {
            title: "User-Centered Design",
            description: "Our user-centered design philosophy ensures intuitive, visually appealing digital experiences that engage users. We focus on optimizing every interaction, making your website or app user-friendly, aesthetically pleasing, and seamless, leading to higher customer satisfaction and retention.",
            icon: IoBrush,
            color: 'bg-pink-100 text-orange-600', // Pink for creativity/design
            // bg: '#FFB266' // Medium-light orange
        },
        {
            title: "Tailored Solutions",
            description: "We develop custom software solutions that fit your business’s specific needs, streamline operations, and improve productivity. From automation to scalability, our tailored solutions support long-term business growth, allowing you to remain agile and responsive in your industry.",
            icon: IoConstructOutline,
            color: 'bg-yellow-100 text-yellow-600', // Yellow for construction/solutions
            bg: '#FFD966' // Medium-light yellow
        },
        {
            title: "Global Experience",
            description: "With a portfolio of successful projects for clients worldwide, we offer deep insights into diverse markets. Our global experience enables us to deliver effective solutions tailored to your business, no matter where you operate in the world.",
            icon: AiOutlineGlobal,
            color: 'bg-green-100 text-green-600', // Green for global reach
            bg: '#66CC66' // Medium-light green
        },
        {
            title: "Proven Track Record",
            description: "With over 200 completed projects and a commitment to excellence, we consistently deliver high-quality results. Our track record demonstrates our ability to meet client expectations, ensuring satisfaction and success in every project we undertake.",
            icon: IoCheckmarkCircleSharp,
            color: 'bg-purple-100 text-purple-600', // Purple for achievement/trust
            bg: '#CC99FF' // Medium-light purple
        }
    ];
    
    

    return (
        <div className='w-full h-auto xl:px-4 md:px-4 px-2 mt-8 py-12'>
            <h1 className='xl:text-6xl md:text-5xl text-4xl font-bold text-start'>Why inSri?</h1>
            <p className='xl:text-lg md:text-lg text-md text-start mt-4'>Expertise that Drives Digital Transformation</p>

            <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
                {whyChooseUsData.map((item, index) => (
                    <div key={index} className={`px-4 py-6  rounded-lg  relative `} style={{ backgroundColor: `${item.bg}` }} >
                        <h1 className='text-8xl font-black absolute top-0 right-2 strokenumber text-transparent'>{index + 1}</h1>

                        {/* Icon Container */}
                        <div className={`w-[50px] h-[50px] p-3 rounded-full flex justify-center items-center ${item.color}`}>
                            <item.icon className='text-2xl' />
                        </div>

                        {/* Title and Description */}
                        <h1 className='text-2xl font-bold mt-6'>{item.title}</h1>
                        <p className='mt-3 text-gray-800'>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WhyChooseUs;
