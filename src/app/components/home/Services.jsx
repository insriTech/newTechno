"use client";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoCodeSlashSharp, IoArrowForward, IoBrush, IoDesktop, IoCloudOutline, IoMegaphoneOutline, IoConstructOutline } from "react-icons/io5";

const Services = () => {
    const services = [
        {
            "name": "App Development",
            "description": "We design and develop powerful, scalable apps tailored to your business needs, offering seamless functionality and an exceptional user experience across platforms.",
            "icon": <IoCodeSlashSharp className='text-xl text-red-500' />
        },
        {
            "name": "UI/UX Design",
            "description": "Our UI/UX services focus on creating user-friendly, appealing interfaces that enhance user engagement, ensuring an intuitive and delightful experience.",
            "icon": <IoBrush className='text-xl text-blue-500' />
        },
        {
            "name": "Web Development",
            "description": "We build responsive, fast-loading websites that drive traffic, engage visitors, and convert leads, delivering custom solutions for businesses of all sizes.",
            "icon": <IoDesktop className='text-xl text-green-500' />
        },
        {
            "name": "IT & Network Services",
            "description": "Optimize your IT infrastructure with our robust network services, ensuring security, reliability, and performance for smooth business operations.",
            "icon": <IoCloudOutline className='text-xl text-yellow-500' />
        },
        {
            "name": "Digital Marketing",
            "description": "Our digital marketing strategies help you reach the right audience, increase online visibility, and boost conversions through targeted campaigns.",
            "icon": <IoMegaphoneOutline className='text-xl text-purple-500' />
        },
        {
            "name": "Software Management",
            "description": "We streamline your software operations, improving productivity and scalability, with ongoing support and management tailored to your evolving business needs.",
            "icon": <IoConstructOutline className='text-xl text-orange-500' />
        }
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
        <div className='w-full h-auto px-4 mt-8 py-12'>
            <h1 className='text-3xl md:text-4xl font-bold text-start'>Our Expertise</h1>
            <p className='text-xl text-start mt-2'>Comprehensive Solutions for Your Digital Success</p>

            <Slider {...settings}>
                {services.map((item, index) => (
                    <div key={index} className='p-2'>
                        <div className='rounded-md bg-[#F5F7F8] flex flex-col justify-between h-full'>
                            <div className='flex flex-col gap-4 flex-grow'>
                                <div className='w-[50px] h-[50px] p-4 rounded-full bg-gray-200 flex justify-center items-center'>
                                    {item.icon}
                                </div>
                                <h1 className='text-2xl font-bold'>{item.name}</h1>
                                <p>{item.description}</p>
                            </div>
                            <div className='w-[50px] h-[50px] p-4 rounded-full hover:bg-[#FFE843] flex cursor-pointer justify-center items-center'>
                                <IoArrowForward className='text-xl' />
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Services;
