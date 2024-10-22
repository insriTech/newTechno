"use client";
import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { TiArrowForward } from "react-icons/ti";

const Footer = () => {
    return (
        <footer className="w-full bg-[#0E1317]  py-8 xl:px-12 md:px-12 px-4 rounded-t-3xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 gap-8 relative z-10">
                {/* Company Info */}
                <div className="w-auto">
                    <h2 className="text-2xl font-bold mb-4 text-white">inSri Tech Solutions Pvt Ltd</h2>
                    <p className='text-gray-400'>
                        inSri Tech Solutions is a leading software engineering and product development company driven by innovation.
                        We leverage the latest technologies to deliver exceptional value to our clients.
                    </p>
                </div>

                {/* Services */}
                <div className="w-auto">
                    <h2 className="text-2xl font-bold mb-4 text-white">Services</h2>
                    <ul className="space-y-2 text-gray-400">
                        <li className='flex items-center gap-1 cursor-pointer hover:text-[#EAB308]'><TiArrowForward className='text-[#EAB308]'/>Website Development</li>
                        <li className='flex items-center gap-1 cursor-pointer hover:text-[#EAB308]'><TiArrowForward className='text-[#EAB308]'/>React JS Development</li>
                        <li className='flex items-center gap-1 cursor-pointer hover:text-[#EAB308]'><TiArrowForward className='text-[#EAB308]'/>WordPress Development</li>
                        <li className='flex items-center gap-1 cursor-pointer hover:text-[#EAB308]'><TiArrowForward className='text-[#EAB308]'/>Web Designing</li>
                        <li className='flex items-center gap-1 cursor-pointer hover:text-[#EAB308]'><TiArrowForward className='text-[#EAB308]'/>App Development</li>
                        <li className='flex items-center gap-1 cursor-pointer hover:text-[#EAB308]'><TiArrowForward className='text-[#EAB308]'/>Mobile App Development</li>
                    </ul>
                </div>

                {/* Company Info */}
                <div className="w-auto">
                    <h2 className="text-2xl font-bold mb-4 text-white">Company</h2>
                    <ul className="space-y-2 text-gray-400">
                        <li>Projects</li>
                        <li>About Us</li>
                        <li>Join Our Team</li>
                        <li>Blogs</li>
                    </ul>
                </div>

                {/* Social Media */}
                <div className="w-auto">
                    <h2 className="text-2xl font-bold mb-4 text-white">Connect with Us</h2>
                    <div className="flex space-x-4 text-2xl text-gray-400">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </a>
                    </div>
                </div>

                {/* Location */}
                <div className="w-auto">
                    <h2 className="text-2xl font-bold mb-4 text-white">Our Location</h2>
                    <p className='text-gray-400'>
                        Chauras Campus,<br />
                        Tehri Garhwal, Uttarakhand, India, 249161
                    </p>
                </div>
            </div>

            {/* Footer bottom */}
            <div className="text-center py-4  relative z-10">
                <p className='text-gray-400'>© 2024 inSri Tech Solutions Pvt Ltd. All rights reserved.</p>
            </div>

            <div className='absolute xl:-bottom-40 md:-bottom-40 -bottom-20 left-1/2 transform -translate-x-1/2 flex justify-center items-center'>
                <h1 className='xl:text-[50vh] md:text-[50vh] text-[25vh] font-black text-center text-transparent stroke '>
                    InSri
                </h1>
            </div>

        </footer>
    );
};

export default Footer;
