"use client";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

// Sample team members data
const teamMembers = [
    {
        "id": 1,
        "name": "John Doe",
        "position": "Chief Executive Officer",
        "bio": "John is an experienced leader with over 15 years of experience in driving business growth and innovation.",
        "image": "https://img.freepik.com/free-photo/businessman-smiling_1258-482.jpg",
        "socials": {
            "linkedin": "https://linkedin.com/in/johndoe",
            "instagram": "https://instagram.com/johndoe",
            "twitter": "https://twitter.com/johndoe",
            "facebook": "https://facebook.com/johndoe"
        }
    },
    {
        "id": 2,
        "name": "Sarah Lee",
        "position": "Chief Technology Officer",
        "bio": "Sarah is a tech visionary, leading the company’s tech strategy with her expertise in AI and cloud computing.",
        "image": "https://img.freepik.com/free-photo/businesswoman-holding-tablet_1258-4823.jpg",
        "socials": {
            "linkedin": "https://linkedin.com/in/sarahlee",
            "instagram": "https://instagram.com/sarahlee",
            "twitter": "https://twitter.com/sarahlee",
            "facebook": "https://facebook.com/sarahlee"
        }
    },
    {
        "id": 3,
        "name": "Michael Brown",
        "position": "Chief Marketing Officer",
        "bio": "Michael has a passion for building brands and crafting marketing strategies that resonate with global audiences.",
        "image": "https://img.freepik.com/free-photo/portrait-smiling-young-man-eyeglasses_171337-4842.jpg",
        "socials": {
            "linkedin": "https://linkedin.com/in/michaelbrown",
            "instagram": "https://instagram.com/michaelbrown",
            "twitter": "https://twitter.com/michaelbrown",
            "facebook": "https://facebook.com/michaelbrown"
        }
    },
    {
        "id": 4,
        "name": "Emily Davis",
        "position": "Chief Financial Officer",
        "bio": "With over a decade of financial expertise, Emily ensures the company’s financial health and long-term sustainability.",
        "image": "https://img.freepik.com/free-photo/portrait-smiling-businesswoman-office_1303-17943.jpg",
        "socials": {
            "linkedin": "https://linkedin.com/in/emilydavis",
            "instagram": "https://instagram.com/emilydavis",
            "twitter": "https://twitter.com/emilydavis",
            "facebook": "https://facebook.com/emilydavis"
        }
    },
    {
        "id": 5,
        "name": "David Wilson",
        "position": "Head of Product Development",
        "bio": "David leads product innovation, ensuring the company delivers cutting-edge solutions to meet customer needs.",
        "image": "https://img.freepik.com/free-photo/man-wearing-white-shirt-glasses_53876-102819.jpg",
        "socials": {
            "linkedin": "https://linkedin.com/in/davidwilson",
            "instagram": "https://instagram.com/davidwilson",
            "twitter": "https://twitter.com/davidwilson",
            "facebook": "https://facebook.com/davidwilson"
        }
    },
    {
        "id": 6,
        "name": "Jessica Clark",
        "position": "Head of Human Resources",
        "bio": "Jessica is committed to fostering a positive workplace culture and supporting team growth and development.",
        "image": "https://img.freepik.com/free-photo/young-attractive-businesswoman-glasses-with-folder-office_171337-4823.jpg",
        "socials": {
            "linkedin": "https://linkedin.com/in/jessicaclark",
            "instagram": "https://instagram.com/jessicaclark",
            "twitter": "https://twitter.com/jessicaclark",
            "facebook": "https://facebook.com/jessicaclark"
        }
    },
    {
        "id": 7,
        "name": "Andrew Martinez",
        "position": "Senior Software Engineer",
        "bio": "Andrew is a software engineering expert with a focus on building scalable, efficient systems for the company’s products.",
        "image": "https://img.freepik.com/free-photo/portrait-smiling-young-man-eyeglasses_171337-4771.jpg",
        "socials": {
            "linkedin": "https://linkedin.com/in/andrewmartinez",
            "instagram": "https://instagram.com/andrewmartinez",
            "twitter": "https://twitter.com/andrewmartinez",
            "facebook": "https://facebook.com/andrewmartinez"
        }
    },
    {
        "id": 8,
        "name": "Laura Evans",
        "position": "UX/UI Designer",
        "bio": "Laura brings creativity and user-centered design to every project, enhancing user experience across all platforms.",
        "image": "https://img.freepik.com/free-photo/young-beautiful-woman-sitting-desk-office_171337-6823.jpg",
        "socials": {
            "linkedin": "https://linkedin.com/in/lauraevans",
            "instagram": "https://instagram.com/lauraevans",
            "twitter": "https://twitter.com/lauraevans",
            "facebook": "https://facebook.com/lauraevans"
        }
    },
    {
        "id": 9,
        "name": "Kevin Harris",
        "position": "Data Scientist",
        "bio": "Kevin specializes in analyzing big data to provide insights that shape the company’s strategic decisions.",
        "image": "https://img.freepik.com/free-photo/young-man-glasses-sitting-coffee-shop_171337-4728.jpg",
        "socials": {
            "linkedin": "https://linkedin.com/in/kevinharris",
            "instagram": "https://instagram.com/kevinharris",
            "twitter": "https://twitter.com/kevinharris",
            "facebook": "https://facebook.com/kevinharris"
        }
    },
    {
        "id": 10,
        "name": "Anna Taylor",
        "position": "Customer Success Manager",
        "bio": "Anna is dedicated to ensuring client satisfaction by providing support and building long-lasting relationships.",
        "image": "https://img.freepik.com/free-photo/portrait-smiling-businesswoman-standing-office_171337-784.jpg",
        "socials": {
            "linkedin": "https://linkedin.com/in/annataylor",
            "instagram": "https://instagram.com/annataylor",
            "twitter": "https://twitter.com/annataylor",
            "facebook": "https://facebook.com/annataylor"
        }
    }
];


const Teams = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Show 4 cards at a time for larger screens
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <></>,
        prevArrow: <></>,
        responsive: [
            {
                breakpoint: 1200, // For screens smaller than 1200px
                settings: {
                    slidesToShow: 3, // Show 3 cards
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992, // For screens smaller than 992px (medium screens)
                settings: {
                    slidesToShow: 2, // Show 2 cards
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 768, // For screens smaller than 768px (tablets)
                settings: {
                    slidesToShow: 1, // Show 1 card
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ]
    };
    

    return (
        <div className="testimonials-container xl:px-4 md:px-4 px-2 py-12 rounded-md ">
            <h1 className='xl:text-6xl md:text-5xl text-4xl font-bold '>Meet the Team</h1>
            <p className='xl:text-lg md:text-lg text-md  mt-4'>The Minds Behind the Magic</p>
            <Slider {...settings}>
                {teamMembers.map((team, index) => (
                    <div key={index} className="p-2 text-center">
                        <div className="p-4 rounded-lg ">
                            <div className='w-full bg-gray-100 h-[300px] overflow-hidden flex justify-center items-center relative'>
                                <Image width={100} height={100} src={team.image} alt={`${team.name}'s photo`} className="w-full h-full  object-cover" unoptimized />

                                <div className='absolute bottom-0 bg-white px-4 rounded-t-md '>
                                    <p className="font-semibold mt-2 text-xl">{team.name}</p>
                                </div>
                            </div>
                            <p className="text-lg italic mb-2 text-gray-600 mt-2 text-start">{team.position}</p>
                            <p className="text-start">{team.bio}</p>
                            {/* Social media icons */}
                            <div className="flex justify-start space-x-4 mt-4 text-gray-600">
                                {team.socials.linkedin && (
                                    <a href={team.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                                        <FaLinkedin size={24} />
                                    </a>
                                )}
                                {team.socials.instagram && (
                                    <a href={team.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                                        <FaInstagram size={24} />
                                    </a>
                                )}
                                {team.socials.twitter && (
                                    <a href={team.socials.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                                        <FaTwitter size={24} />
                                    </a>
                                )}
                                {/* {team.socials.github && (
                                    <a href={team.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
                                        <FaGithub size={24} />
                                    </a>
                                )} */}
                                {team.socials.facebook && (
                                    <a href={team.socials.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
                                        <FaFacebook size={24} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Teams;
