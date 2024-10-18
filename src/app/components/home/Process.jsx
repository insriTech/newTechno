import React from 'react';
import { FaCompass, FaPaintBrush, FaLaptopCode, FaRocket } from 'react-icons/fa'; // Importing icons from react-icons

const Process = () => {
    const processSteps = [
        {
            title: "Strategy & Planning",
            description:
                "We start by understanding your goals and challenges, creating a detailed roadmap to guide each phase for maximum success.",
            icon: <FaCompass />, // Using FaCompass icon
        },
        {
            title: "Design",
            description:
                "Our creative team transforms ideas into captivating and user-centric designs that deliver a memorable digital experience.",
            icon: <FaPaintBrush />, // Using FaPaintBrush icon
        },
        {
            title: "Development",
            description:
                "We turn designs into functional, high-performance digital products using the latest technologies tailored to your business needs.",
            icon: <FaLaptopCode />, // Using FaLaptopCode icon
        },
        {
            title: "Testing & Deployment",
            description:
                "Before launching, we rigorously test to ensure everything runs smoothly, providing a flawless and secure final product.",
            icon: <FaRocket />, // Using FaRocket icon
        },
    ];

    return (
        <div className="process-container px-4 py-8">
            <h1 className='text-6xl font-bold text-start'>Our Process</h1>
            <p className='text-start'>
                A clear, structured approach to delivering results. Here’s how we take your project from concept to completion.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                {processSteps.map((step, index) => (
                    <div key={index} className="p-4 rounded-lg bg-[#F5F7F8] relative">
                        {/* Background number */}
                        <h1 className="text-8xl font-black absolute top-1 right-1 text-gray-200">{index + 1}</h1>
                        {/* Icon container */}
                        <div className="w-[50px] h-[50px] rounded-full bg-gray-200 flex justify-center items-center">
                            <span className="text-2xl text-green-600">{step.icon}</span>
                        </div>
                        {/* Title and description */}
                        <h1 className="text-2xl font-bold mt-4">{step.title}</h1>
                        <p className="mt-2 text-gray-600">{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Process;
