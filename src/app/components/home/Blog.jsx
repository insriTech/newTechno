import Image from 'next/image'
import React from 'react'

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
        },
        {
            "id": 5,
            "title": "Top Cybersecurity Trends for 2024",
            "shortDescription": "Stay ahead of emerging cybersecurity threats with insights on encryption, zero trust models, and AI-based security solutions in 2024.",
            "image": "https://img.freepik.com/free-photo/hand-showing-padlock-icon-digital-security_53876-125188.jpg"
        },
        {
            "id": 6,
            "title": "How Remote Work is Evolving in 2024",
            "shortDescription": "Explore the latest trends in remote work for 2024, from flexible workspaces to digital nomadism and productivity tools.",
            "image": "https://img.freepik.com/free-photo/businessman-working-laptop-office_53876-134480.jpg"
        },
        {
            "id": 7,
            "title": "Sustainable Tech Innovations for a Greener Future",
            "shortDescription": "Discover the top green technologies, from renewable energy solutions to eco-friendly data centers, driving sustainability in 2024.",
            "image": "https://img.freepik.com/free-photo/sustainable-energy-concept-wind-power_53876-99228.jpg"
        },
        {
            "id": 8,
            "title": "The Future of E-commerce: Personalization and AI",
            "shortDescription": "AI-driven personalization is transforming the e-commerce landscape, enhancing customer experiences with tailored recommendations and services.",
            "image": "https://img.freepik.com/free-photo/shopping-cart-laptop-with-notebook-side_1150-13004.jpg"
        }
    ]


    return (
        <>
            <div className='w-full h-auto  py-12 px-4'>
                <h1 className='text-6xl font-bold text-start'>Latest Insights</h1>

                <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4'>

                    {
                        blogs.map((item, index) => (
                            <>
                                <div key={index} className='p-2 rounded-md  flex flex-col justify-between gap-2 cursor-pointer'>
                                    <div className='flex flex-col gap-2'>
                                        <div className='w-full h-[200px] bg-gray-200 rounded-md overflow-hidden'>
                                            <Image className='w-full h-full object-cover rounded-sm' width={100} height={100} src={item.image} alt='' unoptimized />

                                        </div>
                                        <h1 className='text-lg'>{item.title}</h1>
                                        <p className='text-sm'>{item.shortDescription}</p>
                                    </div>
                                </div>
                            </>
                        ))
                    }


                </div>
            </div>
        </>
    )
}

export default Blog
