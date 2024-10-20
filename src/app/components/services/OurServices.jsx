"use client";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { IoMdCheckmark } from "react-icons/io";

// Sample services data
const services = [
    {
        "name": "App Development",
        "description": "We design and develop powerful, scalable mobile applications tailored to your business needs. Our team creates apps that deliver seamless functionality and an exceptional user experience across multiple platforms.",
        "keyFeatures": [
            "Cross-Platform Development",
            "High Performance",
            "Scalability",
            "Security",
            "Custom Features"
        ],
        "image": "https://img.freepik.com/premium-photo/minimalist-smartphone-ui-design_1179475-17644.jpg?ga=GA1.1.1262692796.1695691184&semt=ais_hybrid"
    },
    {
        "name": "UI/UX Design",
        "description": "Our UI/UX design services focus on creating user-friendly, appealing interfaces that enhance user engagement and satisfaction.",
        "keyFeatures": [
            "User-Centered Design",
            "Responsive Design",
            "Wireframing & Prototyping",
            "Brand Consistency",
            "Interactive Elements"
        ],
        "image": "https://img.freepik.com/premium-photo/woman-designing-mobile-app_1319036-8766.jpg?ga=GA1.1.1262692796.1695691184&semt=ais_hybrid"
    },
    {
        "name": "Web Development",
        "description": "We build responsive, fast-loading websites that drive traffic, engage visitors, and convert leads.",
        "keyFeatures": [
            "Responsive Design",
            "SEO Optimization",
            "Fast Loading Speed",
            "Custom Functionality",
            "Security"
        ],
        "image": "https://img.freepik.com/premium-photo/display-computers-with-screen_1277187-39923.jpg?ga=GA1.1.1262692796.1695691184"
    }
];

const OurServices = () => {
    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Show 3 services at a time
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <div style={{ display: 'none' }} />, // Hides the next arrow
        prevArrow: <div style={{ display: 'none' }} />, // Hides the prev arrow
    };

    return (
        <div className="services-container px-4 py-12 rounded-md">
            <h1 className='text-6xl font-bold'>Our Services</h1>
            <p className='text-lg mt-4'>What We Offer</p>
            <Slider {...settings}>
                {services.map((service, index) => (
                    <div key={index} className="p-2">
                        <div className="p-4 rounded-lg bg-[#F5F7F8] text-center">
                            <div className='flex justify-center items-center mb-4'>
                                <Image width={150} height={150} src={service.image} alt={`${service.name} image`} className="w-[150px] h-[150px] rounded-md object-cover" unoptimized />
                            </div>
                            <h2 className="font-semibold text-xl">{service.name}</h2>
                            <p className="text-md mt-2">{service.description}</p>
                            <ul className="mt-4 flex flex-col items-start gap-2">
                                {service.keyFeatures.map((feature, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <IoMdCheckmark className='text-[#e9db6c] font-bold' />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default OurServices;



// web : https://img.freepik.com/premium-photo/modern-office-team-collaboration_813661-17298.jpg?ga=GA1.1.1262692796.1695691184&semt=ais_hybrid
// app : https://img.freepik.com/premium-photo/app-developer-collaboration-smartphone-uiux-wireframe-sketches-prototype_89286-11909.jpg?ga=GA1.1.1262692796.1695691184&semt=ais_hybrid
//ui/ux : https://img.freepik.com/premium-photo/man-working-computer-with-graphic-man-working-his-laptop_829925-12198.jpg?ga=GA1.1.1262692796.1695691184&semt=ais_hybrid