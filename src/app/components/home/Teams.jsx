"use client";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

// Sample testimonials data
const teamMembers = [
    {
        "id": 1,
        "name": "John Doe",
        "position": "Chief Executive Officer",
        "bio": "John is an experienced leader with over 15 years of experience in driving business growth and innovation.",
        "image": "https://img.freepik.com/free-photo/businessman-smiling_1258-482.jpg"
    },
    {
        "id": 2,
        "name": "Sarah Lee",
        "position": "Chief Technology Officer",
        "bio": "Sarah is a tech visionary, leading the company’s tech strategy with her expertise in AI and cloud computing.",
        "image": "https://img.freepik.com/free-photo/businesswoman-holding-tablet_1258-4823.jpg"
    },
    {
        "id": 3,
        "name": "Michael Brown",
        "position": "Chief Marketing Officer",
        "bio": "Michael has a passion for building brands and crafting marketing strategies that resonate with global audiences.",
        "image": "https://img.freepik.com/free-photo/portrait-smiling-young-man-eyeglasses_171337-4842.jpg"
    },
    {
        "id": 4,
        "name": "Emily Davis",
        "position": "Chief Financial Officer",
        "bio": "With over a decade of financial expertise, Emily ensures the company’s financial health and long-term sustainability.",
        "image": "https://img.freepik.com/free-photo/portrait-smiling-businesswoman-office_1303-17943.jpg"
    },
    {
        "id": 5,
        "name": "David Wilson",
        "position": "Head of Product Development",
        "bio": "David leads product innovation, ensuring the company delivers cutting-edge solutions to meet customer needs.",
        "image": "https://img.freepik.com/free-photo/man-wearing-white-shirt-glasses_53876-102819.jpg"
    },
    {
        "id": 6,
        "name": "Jessica Clark",
        "position": "Head of Human Resources",
        "bio": "Jessica is committed to fostering a positive workplace culture and supporting team growth and development.",
        "image": "https://img.freepik.com/free-photo/young-attractive-businesswoman-glasses-with-folder-office_171337-4823.jpg"
    },
    {
        "id": 7,
        "name": "Andrew Martinez",
        "position": "Senior Software Engineer",
        "bio": "Andrew is a software engineering expert with a focus on building scalable, efficient systems for the company’s products.",
        "image": "https://img.freepik.com/free-photo/portrait-smiling-young-man-eyeglasses_171337-4771.jpg"
    },
    {
        "id": 8,
        "name": "Laura Evans",
        "position": "UX/UI Designer",
        "bio": "Laura brings creativity and user-centered design to every project, enhancing user experience across all platforms.",
        "image": "https://img.freepik.com/free-photo/young-beautiful-woman-sitting-desk-office_171337-6823.jpg"
    },
    {
        "id": 9,
        "name": "Kevin Harris",
        "position": "Data Scientist",
        "bio": "Kevin specializes in analyzing big data to provide insights that shape the company’s strategic decisions.",
        "image": "https://img.freepik.com/free-photo/young-man-glasses-sitting-coffee-shop_171337-4728.jpg"
    },
    {
        "id": 10,
        "name": "Anna Taylor",
        "position": "Customer Success Manager",
        "bio": "Anna is dedicated to ensuring client satisfaction by providing support and building long-lasting relationships.",
        "image": "https://img.freepik.com/free-photo/portrait-smiling-businesswoman-standing-office_171337-784.jpg"
    }
];


const Teams = () => {
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
        <div className="testimonials-container px-4 py-12 rounded-md ">
            <h1 className='text-6xl font-bold '>Meet the Team</h1>
            <p className='text-lg  mt-4'>The Minds Behind the Magic</p>
            <Slider {...settings}>
                {teamMembers.map((team, index) => (
                    <div key={index} className="p-2 text-center">
                        <div className=" p-4 rounded-lg bg-[#F5F7F8] ">
                            <div className='flex justify-center items-center'>
                                <Image width={100} height={100} src={team.image} alt={`${team.name}'s logo`} className="w-[150px] h-[150px] rounded-full object-cover  " unoptimized />
                            </div>
                            <p className="font-semibold mt-2">{team.name}</p>
                            <p className="text-lg italic mb-2">{team.position}</p>
                            <div className="mb-2">{team.bio}</div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};
export default Teams
