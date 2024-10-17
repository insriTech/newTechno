import Image from 'next/image'
import React from 'react'

const Blogs = () => {
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
        },
        {
            "id": 9,
            "title": "How Blockchain is Reshaping Finance in 2024",
            "shortDescription": "Explore the impact of blockchain technology on finance, with decentralized solutions and secure digital transactions.",
            "image": "https://img.freepik.com/free-photo/blockchain-concept-with-man-touching-screen_23-2147931118.jpg"
        },
        {
            "id": 10,
            "title": "Mobile-First Development: A 2024 Necessity",
            "shortDescription": "Learn why mobile-first development is critical in 2024, as more users shift to mobile for browsing and purchasing.",
            "image": "https://img.freepik.com/free-vector/mobile-phone-app-development-process-flat_1284-31527.jpg"
        },
        {
            "id": 11,
            "title": "Cloud Computing Trends for Business Growth",
            "shortDescription": "Stay competitive by adopting the latest cloud computing solutions, from hybrid clouds to serverless infrastructures.",
            "image": "https://img.freepik.com/free-vector/cloud-computing-illustration-concept_114360-5643.jpg"
        },
        {
            "id": 12,
            "title": "The Power of Data-Driven Decision Making",
            "shortDescription": "Harness the potential of big data to make more informed business decisions and stay ahead of competitors.",
            "image": "https://img.freepik.com/free-photo/businessman-using-tablet-analyze-growth-analysis-economic-indicators-digital-virtual-interface_112293-179.jpg"
        },
        {
            "id": 13,
            "title": "Green IT Solutions for a Sustainable Future",
            "shortDescription": "Explore how companies are reducing their carbon footprint by embracing green IT practices and technologies.",
            "image": "https://img.freepik.com/free-photo/eco-friendly-concept-with-hand-holding-light-bulb_23-2148938703.jpg"
        },
        {
            "id": 14,
            "title": "Edge Computing: The Future of Data Processing",
            "shortDescription": "Learn how edge computing is enabling faster data processing and improving network efficiency in 2024.",
            "image": "https://img.freepik.com/free-photo/finger-presses-icon-network_1232-2047.jpg"
        },
        {
            "id": 15,
            "title": "Automation Tools for Smarter Business Operations",
            "shortDescription": "Discover the best automation tools of 2024 that are streamlining business operations and improving efficiency.",
            "image": "https://img.freepik.com/free-photo/businessman-hand-holding-gear-industrial-icons-blue-background_53876-128097.jpg"
        },
        {
            "id": 16,
            "title": "The Rise of Quantum Computing in 2024",
            "shortDescription": "Quantum computing is poised to disrupt various industries, from cryptography to pharmaceutical research.",
            "image": "https://img.freepik.com/free-photo/quantum-computing-illustration-background_112293-4335.jpg"
        },
        {
            "id": 17,
            "title": "Augmented Reality in Retail: What's Next?",
            "shortDescription": "See how augmented reality is transforming the retail experience, from virtual try-ons to immersive shopping environments.",
            "image": "https://img.freepik.com/free-photo/futuristic-shopping-technology-virtual-reality-illustration_23-2149039392.jpg"
        },
        {
            "id": 18,
            "title": "Future-Proof Your Business with IoT",
            "shortDescription": "IoT solutions are providing businesses with real-time insights, boosting productivity, and enhancing customer experiences.",
            "image": "https://img.freepik.com/free-photo/iot-businessman-touching-screen-with-business-technology-concept_53876-102650.jpg"
        },
        {
            "id": 19,
            "title": "Top Design Tools for Web Developers in 2024",
            "shortDescription": "Explore the top design tools that are shaping the web development industry and enhancing user experiences.",
            "image": "https://img.freepik.com/free-photo/web-design-content-concept_53876-122583.jpg"
        },
        {
            "id": 20,
            "title": "Leveraging Data Analytics for Business Success",
            "shortDescription": "Data analytics is a game changer for businesses looking to optimize performance and stay ahead of the competition.",
            "image": "https://img.freepik.com/free-photo/close-up-data-analytics-technology-background_53876-114679.jpg"
        }
    ]
    


    return (
        <>
            <div className='w-full h-auto  py-4 px-4'>
                <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4'>

                    {
                        blogs.map((item, index) => (
                            <>
                                <div key={index} className='p-2 rounded-md  flex flex-col justify-between gap-2 cursor-pointer'>
                                    <div className='flex flex-col gap-2'>
                                        <div className='w-full h-[200px] rounded-md bg-gray-200 overflow-hidden'>
                                            <Image className='w-full h-full object-cover rounded-sm ' width={100} height={100} src={item.image} alt='' unoptimized />

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

export default Blogs

