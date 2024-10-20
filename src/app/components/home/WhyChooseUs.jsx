"use client";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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
            "icon": AiOutlineGlobal
        },
        {
            "title": "Proven Track Record",
            "description": "Successfully completed 200+ projects with 100% client satisfaction, showcasing our commitment to quality and results.",
            "icon": IoCheckmarkCircleSharp
        }
    ];

    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Show 3 cards at a time on larger screens
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024, // For tablet devices
                settings: {
                    slidesToShow: 2, // Show 2 cards
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768, // For mobile devices
                settings: {
                    slidesToShow: 1, // Show 1 card
                    slidesToScroll: 1,
                }
            }
        ],
        nextArrow: <div style={{ display: 'none' }} />, // Hide default arrows
        prevArrow: <div style={{ display: 'none' }} />, // Hide default arrows
    };

    return (
        <div className='w-full h-auto px-4 mt-8 py-12'>
            <h1 className='text-3xl font-bold text-start'>Why inSri?</h1>
            <p className='text-xl text-start mt-2'>Expertise that Drives Digital Transformation</p>

            {/* Carousel for Why Choose Us */}
            <Slider {...settings}>
                {whyChooseUsData.map((item, index) => (
                    <div key={index} className='p-4 h-[300px] rounded-md bg-[#F5F7F8] relative flex flex-col justify-between mx-2 my-2'> {/* Added mx-2 my-2 for spacing */}
                        <h1 className='text-8xl font-black absolute top-1 right-1 text-gray-200'>{index + 1}</h1>
                        <div className='w-[40px] h-[40px] rounded-full bg-gray-200 flex justify-center items-center'>
                            <item.icon className='text-xl text-green-600' />
                        </div>
                        <h1 className='text-2xl font-bold mt-4'>{item.title}</h1>
                        <p className='mt-2 text-base'>{item.description}</p> {/* Increased text size to text-base */}
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default WhyChooseUs;
