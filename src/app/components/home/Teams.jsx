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
    }
];

const Teams = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, 
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <div style={{ display: 'none' }} />, 
        prevArrow: <div style={{ display: 'none' }} />,
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
        ]
    };

    return (
        <div className="testimonials-container px-4 py-12 rounded-md">
            <h1 className='text-3xl font-bold text-start'>Meet the Team</h1>
            <p className='text-xl text-start mt-2'>The Minds Behind the Magic</p>
            
            <Slider {...settings}>
                {teamMembers.map((team, index) => (
                    <div key={index} className="p-2 text-center">
                        <div className="p-4 rounded-lg bg-[#F5F7F8]">
                            <div className='w-full h-[300px] overflow-hidden flex justify-center items-center relative'>
                                <Image width={100} height={100} src={team.image} alt={`${team.name}'s photo`} className="w-full h-full object-cover" />
                            </div>
                            <p className="text-lg italic mb-2">{team.position}</p>
                            <p className="text-start mb-4">{team.bio}</p>
                            {/* Social media icons */}
                            <div className="flex justify-center space-x-4 text-gray-600">
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
