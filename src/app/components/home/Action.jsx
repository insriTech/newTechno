import React from 'react'

const Action = () => {
    return (
        <>
            <div className='w-full h-auto flex flex-col items-center justify-center gap-4 py-10'>
                <h1 className='text-xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-bold'>
                    Let's Build Something Amazing Together
                </h1>
                <p className='text-sm md:text-base lg:text-lg text-center'>
                    Ready to take your business to the next level?
                </p>
                <button className='p-2 px-4 rounded-md hover:bg-[#FFE843] hover:text-black bg-black text-white'>
                    Contact Us Today
                </button>
            </div>
        </>
    )
}

export default Action
