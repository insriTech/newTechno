import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';

const Hero = ({ title, subtitle, buttonText, onClick }) => {
    return (
        <div className='w-full h-[80vh] flex bg-[#F5F7F8] flex-col justify-center items-center gap-4'>
            <h1 className='text-[5.5rem] leading-tight font-bold text-center'>
                {title}
            </h1>
            <p className='text-xl mb-3 w-full text-center'>
                {subtitle}
            </p>
            {buttonText && (
                <div className='flex justify-center items-center'>
                    <button className='px-4 p-2 bg-black text-white rounded-2xl flex items-center gap-2' onClick={onClick}>
                        {buttonText} <IoIosArrowRoundForward className='text-xl' />
                    </button>
                </div>
            )}
        </div>
    );
};

export default Hero;
