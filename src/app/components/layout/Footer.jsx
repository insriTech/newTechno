"use client";
import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="w-full bg-gray-900 text-white py-8 px-12 rounded-t-3xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 gap-8 relative z-10">
                {/* Company Info */}
                <div className="w-auto">
                    <h2 className="text-2xl font-bold mb-4">inSri Tech Solutions Pvt Ltd</h2>
                    <p>
                        inSri Tech Solutions is a leading software engineering and product development company driven by innovation.
                        We leverage the latest technologies to deliver exceptional value to our clients.
                    </p>
                </div>

                {/* Services */}
                <div className="w-auto">
                    <h2 className="text-2xl font-bold mb-4">Services</h2>
                    <ul className="space-y-2">
                        <li>Website Development</li>
                        <li>React JS Development</li>
                        <li>WordPress Development</li>
                        <li>Web Designing</li>
                        <li>App Development</li>
                        <li>Mobile App Development</li>
                    </ul>
                </div>

                {/* Company Info */}
                <div className="w-auto">
                    <h2 className="text-2xl font-bold mb-4">Company</h2>
                    <ul className="space-y-2">
                        <li>Projects</li>
                        <li>About Us</li>
                        <li>Join Our Team</li>
                        <li>Blogs</li>
                    </ul>
                </div>

                {/* Social Media */}
                <div className="w-auto">
                    <h2 className="text-2xl font-bold mb-4">Connect with Us</h2>
                    <div className="flex space-x-4 text-2xl">
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
                    <h2 className="text-2xl font-bold mb-4">Our Location</h2>
                    <p>
                        Chauras Campus,<br />
                        Tehri Garhwal, Uttarakhand, India, 249161
                    </p>
                </div>
            </div>

            {/* Footer bottom */}
            <div className="text-center py-4  relative z-10">
                <p>© 2024 inSri Tech Solutions Pvt Ltd. All rights reserved.</p>
            </div>

            <div className='absolute -bottom-40 left-1/2 transform -translate-x-1/2 flex justify-center items-center'>
                <h1 className='text-[50vh] font-black text-center text-transparent stroke '>
                    InSri
                </h1>
            </div>

        </footer>
    );
};

export default Footer;
