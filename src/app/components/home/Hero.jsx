"use client"
import React, { useEffect, useMemo, useState } from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const Hero = () => {
    const words = useMemo(() => ["Design", "Develop", "Deploy"], []);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const currentWord = words[currentWordIndex];
        const type = () => {
            if (!isDeleting) {
                // Typing
                setDisplayedText(currentWord.substring(0, displayedText.length + 1));
                if (displayedText === currentWord) {
                    setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
                }
            } else {
                // Deleting, but not removing the first letter
                setDisplayedText(currentWord.substring(0, Math.max(1, displayedText.length - 1)));
                if (displayedText.length === 1) {
                    setIsDeleting(false);
                    setCurrentWordIndex((prev) => (prev + 1) % words.length); // Move to the next word
                }
            }
        };

        const timer = setTimeout(type, typingSpeed);
        return () => clearTimeout(timer);
    }, [words, displayedText, isDeleting, currentWordIndex, typingSpeed]);

    return (
        <>
            <div className='w-full xl:h-[100vh] md:h-[100vh] h-[80vh] bg-[#F5F7F8] '
                style={{ backgroundImage: "url('https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25060.jpg?ga=GA1.1.1262692796.1695691184&semt=ais_hybrid')", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}
            >
                <div className='w-full h-full bg-[#00000074] flex flex-col justify-center gap-4'>
                    <p className='text-xl font-bold xl:px-16 md:px-16 px-8 text-white'>Welcome To inSri</p>
                    <h1 className='xl:text-8xl md:text-6xl text-5xl leading-tight font-bold text-center text-white'>Transforming Ideas into Reality </h1>
                    <h1 className='xl:text-8xl md:text-6xl text-5xl leading-tight font-bold text-center text-white'>{displayedText}</h1>
                    <p className='xl:text-xl md:text-xl text-lg mb-3 text-center text-white'>Affordable software and app development with end-to-end services from planning to deployment and maintenance.</p>
                    <div className='flex justify-center items-center'>
                        <button className='px-4 p-2 bg-black text-white rounded-2xl flex items-center gap-2'>  Explore Services <IoIosArrowRoundForward className='text-xl' /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;
