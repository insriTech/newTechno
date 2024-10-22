import React from 'react';
import { FaCompass, FaPaintBrush, FaLaptopCode, FaRocket } from 'react-icons/fa'; // Importing icons from react-icons

const Process = () => {
    const processSteps = [
        {
            title: "Strategy & Planning",
            description:
                "We begin by understanding your goals and challenges, creating a strategy and detailed roadmap to ensure the project runs smoothly and achieves maximum success.",
            icon: <FaCompass color="#FF6347" />, // Tomato color for compass icon
            bg: "#FFD966" // Medium-dark tomato
        },
        {
            title: "Design",
            description:
                "Our creative team crafts user-centric, visually appealing designs that deliver seamless experiences, ensuring the interface is both engaging and intuitive for your target audience across all platforms.",
            icon: <FaPaintBrush color="#4682B4" />, // Steel blue for paintbrush icon
            bg: "#66B2FF" // Medium-dark steel blue
        },
        {
            title: "Development",
            description:
                "We turn designs into fully functional, high-performance digital products, using modern technologies to create robust, scalable solutions tailored to meet your business objectives and user needs.",
            icon: <FaLaptopCode color="#32CD32" />, // Lime green for laptop code icon
            bg: "#66CC66" // Medium-dark lime green
        },
        {
            title: "Testing & Deployment",
            description:
                "We rigorously test the product for functionality, performance, and security before deployment, ensuring a smooth and successful launch that meets all business and user expectations.",
            icon: <FaRocket color="#FFD700" />, // Gold for rocket icon
            bg: "#FFB266" // Medium-dark gold
        }
    ];
    

    return (
        <div className="process-container xl:px-4 md:px-4 px-2 py-12 bg-white">
            <h1 className='xl:text-6xl md:text-5xl text-4xl font-bold text-start  text-gray-900'>Our Process</h1>
            <p className='xl:text-lg md:text-lg text-md text-gray-700 mb-8 text-start'>
                A clear, structured approach to delivering results. Here’s how we take your project from concept to completion.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {processSteps.map((step, index) => (
                    <div
                        key={index}
                        className="px-4 py-6 rounded-xl bg-white  relative "
                        style={{ backgroundColor: `${step.bg}` }}
                    >
                        {/* Background number */}
                        <h1 className='text-8xl font-black absolute top-4 right-4 strokenumber text-transparent'>{index + 1}</h1>
                        {/* Icon container with gradient background */}
                        <div className={`w-[50px] h-[50px] p-3 rounded-full flex justify-center items-center bg-gray-100`}>
                            <span className="text-xl">{step.icon}</span>
                        </div>
                        {/* Title and description */}
                        <h1 className="text-2xl font-bold text-gray-900 mt-2 z-10 relative">{step.title}</h1>
                        <p className="mt-4 text-gray-600  leading-relaxed z-10 relative">{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Process;
