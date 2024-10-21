import React from 'react';
import { FaCompass, FaPaintBrush, FaLaptopCode, FaRocket } from 'react-icons/fa'; // Importing icons from react-icons

const Process = () => {
    const processSteps = [
        {
            title: "Strategy & Planning",
            description:
                "We start by understanding your goals and challenges, creating a detailed roadmap to guide each phase for maximum success.",
            icon: <FaCompass color="#FF6347" />, // Tomato color for compass icon
        },
        {
            title: "Design",
            description:
                "Our creative team transforms ideas into captivating and user-centric designs that deliver a memorable digital experience.",
            icon: <FaPaintBrush color="#4682B4" />, // Steel blue for paintbrush icon
        },
        {
            title: "Development",
            description:
                "We turn designs into functional, high-performance digital products using the latest technologies tailored to your business needs.",
            icon: <FaLaptopCode color="#32CD32" />, // Lime green for laptop code icon
        },
        {
            title: "Testing & Deployment",
            description:
                "Before launching, we rigorously test to ensure everything runs smoothly, providing a flawless and secure final product.",
            icon: <FaRocket color="#FFD700" />, // Gold for rocket icon
        },
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
                    >
                        {/* Background number */}
                        <h1 className='text-8xl font-black absolute top-4 right-4 text-gray-100'>{index + 1}</h1>
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
