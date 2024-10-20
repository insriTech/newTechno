"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

// Sample testimonials data
const testimonialsData = [
    {
        name: "Jane Doe",
        testimonial:
            "The team at Webreate exceeded our expectations and delivered exceptional results!",
        logo: "https://via.placeholder.com/150",
        rating: 5,
    },
    {
        name: "John Smith",
        testimonial:
            "Their attention to detail and commitment to excellence is truly remarkable.",
        logo: "https://via.placeholder.com/150",
        rating: 4,
    },
    {
        name: "Emily Johnson",
        testimonial:
            "We saw an immediate improvement in our web presence after working with them.",
        logo: "https://via.placeholder.com/150",
        rating: 5,
    },
    {
        name: "Michael Brown",
        testimonial:
            "An amazing experience from start to finish. Highly recommend!",
        logo: "https://via.placeholder.com/150",
        rating: 5,
    },
    {
        name: "Sarah Wilson",
        testimonial:
            "Professional and efficient! I am very satisfied with the results.",
        logo: "https://via.placeholder.com/150",
        rating: 4,
    },
];

// Function to render stars based on rating
const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
        <span
            key={index}
            className={`text-yellow-500 text-3xl ${index < rating ? "text-yellow-400" : "text-gray-300"
                }`}
        >
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
        <div className="testimonials-container px-4 py-12  mt-12 bg-[#111827]">
            <h1 className="text-6xl font-bold text-center text-white">
                What Our Clients Say
            </h1>
            <p className="text-lg mt-4 text-center text-white">
                Hear from the People We’ve Worked With
            </p>
            <Slider {...settings}>
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className="p-4">
                        <div className="bg-white p-6 rounded-lg shadow-lg transform ">
                            {/* Image */}
                            <Image
                                width={100}
                                height={100}
                                src="https://img.freepik.com/premium-photo/perfect-man-portrait-happy-fashionable-handsome-man_1109459-2912.jpg?ga=GA1.1.1262692796.1695691184&semt=ais_hybrid"
                                alt={`${testimonial.name}'s logo`}
                                className="mb-4 mx-auto rounded-full border-4 border-blue-200 shadow-md"
                            />
                            {/* Testimonial */}
                            <p className="text-lg italic text-center mb-4 text-gray-700">
                                {testimonial.testimonial}
                            </p>
                            {/* Rating */}
                            <div className="flex justify-center mb-4">{renderStars(testimonial.rating)}</div>
                            {/* Client Name */}
                            <p className="font-semibold text-gray-900 text-xl">
                                {testimonial.name}
                            </p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Testimonials;
