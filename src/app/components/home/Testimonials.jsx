"use client";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

// Sample testimonials data
const testimonialsData = [
    {
        name: "Jane Doe",
        testimonial: "The team at Webreate exceeded our expectations and delivered exceptional results!",
        logo: "https://via.placeholder.com/150",
        rating: 5
    },
    {
        name: "John Smith",
        testimonial: "Their attention to detail and commitment to excellence is truly remarkable.",
        logo: "https://via.placeholder.com/150",
        rating: 4
    },
    {
        name: "Emily Johnson",
        testimonial: "We saw an immediate improvement in our web presence after working with them.",
        logo: "https://via.placeholder.com/150",
        rating: 5
    },
    {
        name: "Michael Brown",
        testimonial: "An amazing experience from start to finish. Highly recommend!",
        logo: "https://via.placeholder.com/150",
        rating: 5
    },
    {
        name: "Sarah Wilson",
        testimonial: "Professional and efficient! I am very satisfied with the results.",
        logo: "https://via.placeholder.com/150",
        rating: 4
    }
];

// Function to render stars based on rating
const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
        <span key={index} className={`text-yellow-500 text-3xl ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
            ★
        </span>
    ));
};

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Show 3 cards at a time
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <></>,
        prevArrow: <></>,
    };

    return (
        <div className="testimonials-container px-4 py-12 rounded-md mt-12">
            <h1 className='text-6xl font-bold '>What Our Clients Say</h1>
            <p className='text-lg  mt-4'>Hear from the People We’ve Worked With</p>
            <Slider {...settings}>
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className="p-2 text-center">
                        <div className=" p-4 rounded-lg bg-[#F5F7F8] ">
                            <Image width={100} height={100} src={testimonial.logo} alt={`${testimonial.name}'s logo`} className="mb-4 mx-auto rounded-full border border-gray-300 " />
                            <p className="text-lg italic mb-2">{testimonial.testimonial}</p>
                            <div className="mb-2">{renderStars(testimonial.rating)}</div>
                            <p className="font-semibold mt-2">{testimonial.name}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Testimonials;
