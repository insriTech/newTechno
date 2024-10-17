import React from 'react'

const Contact = () => {
    return (
        <>
            <div className='w-full h-[90vh] bg-[#F5F7F8] flex'>
                {/* text */}
                <div className='w-[50%] h-full p-12'>
                    <h1 className='text-8xl font-black'>Let’s Talk</h1>
                    <p className='text-xl mt-4'>Lets connect and explore how we can bring your software ideas to life. Whether you have a clear vision or are unsure where to begin, were here to guide you every step of the way.</p>
                </div>
                {/* form */}
                <div className='w-[50%] h-full  flex flex-col gap-12 p-12'>
                    <input className='w-full h-[70px] p-2 bg-transparent border-b-2 text-2xl border-gray-400 text-gray-400  outline-0' type='text' placeholder='Name' />
                    <input className='w-full h-[70px] p-2 bg-transparent border-b-2 text-2xl border-gray-400 text-gray-400  outline-0' type='email' placeholder='Email' />
                    <input className='w-full h-[70px] p-2 bg-transparent border-b-2 text-2xl border-gray-400 text-gray-400  outline-0' type='phone' placeholder='Phone Number' />
                    <input className='w-full h-[70px] p-2 bg-transparent border-b-2 text-2xl border-gray-400 text-gray-400  outline-0' type='text' placeholder='Tell us more about your idea' />

                    <div className='flex items-center justify-end'>
                        <button className='p-2 px-6 bg-black text-white rounded-md'>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
