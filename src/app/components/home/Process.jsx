"use client";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaCompass, FaPaintBrush, FaLaptopCode, FaRocket } from 'react-icons/fa'; 

const Process = () => {
    const processSteps = [
        {
            title: "Strategy & Planning",
            description:
                "We start by understanding your goals and challenges, creating a detailed roadmap to guide each phase for maximum success.",
            icon: <FaCompass />,
        },
        {
            title: "Design",
            description:
                "Our creative team transforms ideas into captivating and user-centric designs that deliver a memorable digital experience.",
            icon: <FaPaintBrush />,
        },
        {
            title: "Development",
            description:
                "We turn designs into functional, high-performance digital products using the latest technologies tailored to your business needs.",
            icon: <FaLaptopCode />,
        },
        {
            title: "Testing & Deployment",
            description:
                "Before launching, we rigorously test to ensure everything runs smoothly, providing a flawless and secure final product.",
            icon: <FaRocket />,
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ],
        nextArrow: <div style={{ display: 'none' }} />,
        prevArrow: <div style={{ display: 'none' }} />,
    };

    return (
        <div className='process-container w-full h-auto px-4 mt-8 py-12'>
            <h1 className='text-3xl font-bold text-start'>Our Process</h1>
            <p className='text-xl text-start mt-2'>A clear, structured approach to delivering results. Here’s how we take your project from concept to completion.</p>
            
            <Slider {...settings}>
                {processSteps.map((step, index) => (
                    <div key={index} className='p-4 h-[300px] rounded-md bg-[#F5F7F8] relative flex flex-col justify-between mx-2 my-2'>
                        <h1 className='text-8xl font-black absolute top-1 right-1 text-gray-200'>{index + 1}</h1>
                        <div className='w-[50px] h-[50px] rounded-full bg-gray-200 flex justify-center items-center'>
                            {step.icon}
                        </div>
                        <h1 className='text-2xl font-bold mt-4'>{step.title}</h1>
                        <p className='mt-2 text-gray-600'>{step.description}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Process;