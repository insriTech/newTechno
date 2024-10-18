"use client";
import React, { useState } from 'react';
import { IoIosArrowRoundForward, IoIosMenu, IoIosClose } from "react-icons/io";
import Link from 'next/link';
import { usePathname } from 'next/navigation';  // Import usePathname
import { RxCross1 } from "react-icons/rx";

const Nav = () => {
    const pathname = usePathname();  // Get current path
    const [isOpen, setIsOpen] = useState(false);  // State for menu visibility

    // Toggle menu visibility
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className='w-full h-[60px] bg-[#F5F7F8] flex justify-between items-center px-4'>
                <div className='flex relative'>
                    <h1 className='text-4xl font-bold'>InSri</h1>
                    <span className='w-[10px] h-[10px] bg-[#FFE843] rounded-full absolute top-1 right-0'></span>
                </div>

                {/* Burger Icon for smaller screens */}
                <div className='lg:hidden'>
                    <button onClick={toggleMenu} className='text-3xl'>
                        {isOpen ? <IoIosClose /> : <IoIosMenu />}
                    </button>
                </div>

                {/* Desktop Menu */}
                <ul className='hidden lg:flex items-center gap-8'>
                    {/* Active Link Detection */}
                    <li className='group relative'>
                        <Link href="/" className={`hover:font-bold ${pathname === '/' ? 'font-bold' : ''}`}>Home</Link>
                        <span className={`absolute left-0 -bottom-1 w-full h-0.5 bg-[#FFE843] transform transition-transform duration-300 ease-out ${pathname === '/' ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100`}></span>
                    </li>

                    <li className='group relative'>
                        <Link href="/about" className={`hover:font-bold ${pathname === '/about' ? 'font-bold' : ''}`}>About Us</Link>
                        <span className={`absolute left-0 -bottom-1 w-full h-0.5 bg-[#FFE843] transform transition-transform duration-300 ease-out ${pathname === '/about' ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100`}></span>
                    </li>

                    <li className='group relative'>
                        <Link href="/services" className={`hover:font-bold ${pathname === '/services' ? 'font-bold' : ''}`}>Services</Link>
                        <span className={`absolute left-0 -bottom-1 w-full h-0.5 bg-[#FFE843] transform transition-transform duration-300 ease-out ${pathname === '/services' ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100`}></span>
                    </li>

                    <li className='group relative'>
                        <Link href="/projects" className={`hover:font-bold ${pathname === '/projects' ? 'font-bold' : ''}`}>Projects</Link>
                        <span className={`absolute left-0 -bottom-1 w-full h-0.5 bg-[#FFE843] transform transition-transform duration-300 ease-out ${pathname === '/projects' ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100`}></span>
                    </li>

                    <li className='group relative'>
                        <Link href="/blog" className={`hover:font-bold ${pathname === '/blog' ? 'font-bold' : ''}`}>Blog</Link>
                        <span className={`absolute left-0 -bottom-1 w-full h-0.5 bg-[#FFE843] transform transition-transform duration-300 ease-out ${pathname === '/blog' ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100`}></span>
                    </li>

                    {/* Button */}
                    <li>
                        <div className='p-2 px-4 bg-[#FFE843] text-black rounded-md flex items-center gap-2 cursor-pointer hover:bg-black hover:text-white'>
                            Lets Connect <IoIosArrowRoundForward className='text-xl' />
                        </div>
                    </li>
                </ul>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed top-0 right-0 h-full bg-[#F5F7F8] p-6 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50 w-[250px] lg:hidden`}>
                <div className='w-full h-auto  flex justify-end items-center'>
                    <RxCross1 className='text-xl cursor-pointer' onClick={toggleMenu} />
                </div>
                <ul className='flex flex-col gap-6'>
                    <li className='group'>
                        <Link href="/" className={`hover:font-bold ${pathname === '/' ? 'font-bold' : ''}`} onClick={toggleMenu}>Home</Link>
                    </li>

                    <li className='group'>
                        <Link href="/about" className={`hover:font-bold ${pathname === '/about' ? 'font-bold' : ''}`} onClick={toggleMenu}>About Us</Link>
                    </li>

                    <li className='group'>
                        <Link href="/services" className={`hover:font-bold ${pathname === '/services' ? 'font-bold' : ''}`} onClick={toggleMenu}>Services</Link>
                    </li>

                    <li className='group'>
                        <Link href="/projects" className={`hover:font-bold ${pathname === '/projects' ? 'font-bold' : ''}`} onClick={toggleMenu}>Projects</Link>
                    </li>

                    <li className='group'>
                        <Link href="/blog" className={`hover:font-bold ${pathname === '/blog' ? 'font-bold' : ''}`} onClick={toggleMenu}>Blog</Link>
                    </li>

                    <li>
                        <div className='p-2 px-4 bg-[#FFE843] text-black rounded-md flex items-center gap-2 cursor-pointer hover:bg-black hover:text-white'>
                            Lets Connect <IoIosArrowRoundForward className='text-xl' />
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Nav;
