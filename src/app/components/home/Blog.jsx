import Image from 'next/image';
import React from 'react';

const Blog = () => {
    const blogs = [
        {
            "id": 1,
            "title": "Understanding Digital Transformation in 2024",
            "shortDescription": "Explore how AI, data-driven strategies, and cloud computing are driving holistic digital transformation across businesses in 2024.",
            "image": "https://img.freepik.com/free-photo/digital-transformation-illustration_53876-135971.jpg"
        },
        {
            "id": 2,
            "title": "5 Essential Web Development Trends in 2024",
            "shortDescription": "Discover the top web development trends for 2024, including PWAs, AI-driven chatbots, and serverless architecture.",
            "image": "https://img.freepik.com/free-vector/website-development-banner-with-coding-laptop_107791-6564.jpg"
        },
        {
            "id": 3,
            "title": "Why UX/UI Design is Key to Business Success",
            "shortDescription": "Learn how user-centric UX/UI design is essential for creating better customer experiences and driving engagement.",
            "image": "https://img.freepik.com/free-photo/design-creative-work-space_53876-90469.jpg"
        },
        {
            "id": 4,
            "title": "The Role of AI in Shaping Modern Marketing",
            "shortDescription": "AI tools like predictive analytics and chatbots are revolutionizing modern marketing, optimizing campaigns and customer experiences.",
            "image": "https://img.freepik.com/free-photo/artificial-intelligence-tech-work_53876-122906.jpg"
        }
    ];

    return (
        <div className='w-full h-auto px-4 mt-8 py-12'>
            <h1 className='text-3xl font-bold text-start'>Latest Insights</h1>
            <p className='text-xl text-start mt-2'>
                Stay updated with the latest trends and insights in technology and business.
            </p>
            <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4'>
                {blogs.map((item) => (
                    <div key={item.id} className='p-4 rounded-md bg-[#F5F7F8] flex flex-col justify-between gap-2'>
                        <div className='flex flex-col gap-2'>
                            <div className='w-full h-[200px] bg-green-400 overflow-hidden'>
                                <Image className='w-full h-full object-cover rounded-sm' width={100} height={100} src={item.image} alt={item.title} unoptimized />
                            </div>
                            <h1 className='text-lg font-semibold'>{item.title}</h1>
                            <p className='text-sm text-gray-600'>{item.shortDescription}</p>
                        </div>
                        <button className='p-2 rounded-md hover:bg-[#FFE843] hover:text-black bg-black text-white'>Learn More</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blog;
