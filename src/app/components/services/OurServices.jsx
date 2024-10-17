import Image from 'next/image'
import React from 'react'
import { IoMdCheckmark } from "react-icons/io";

const OurServices = () => {
    const services = [
        {
            "name": "App Development",
            "description": "We design and develop powerful, scalable mobile applications tailored to your business needs. Our team creates apps that deliver seamless functionality and an exceptional user experience across multiple platforms, ensuring your business reaches a broader audience. Whether you need an iOS, Android, or cross-platform app, we focus on performance, security, and scalability to meet the growing demands of your users.",
            "keyFeatures": [
                "Cross-Platform Development",
                "High Performance",
                "Scalability",
                "Security",
                "Custom Features"
            ],
            "image": " https://img.freepik.com/premium-photo/minimalist-smartphone-ui-design_1179475-17644.jpg?ga=GA1.1.1262692796.1695691184&semt=ais_hybrid"
        },
        {
            "name": "UI/UX Design",
            "description": "Our UI/UX design services focus on creating user-friendly, visually appealing interfaces that enhance user engagement and satisfaction. We prioritize intuitive design principles to ensure every interaction is effortless, boosting user retention and overall satisfaction with your product.",
            "keyFeatures": [
                "User-Centered Design",
                "Responsive Design",
                "Wireframing & Prototyping",
                "Brand Consistency",
                "Interactive Elements"
            ],
            "image": "https://img.freepik.com/premium-photo/woman-designing-mobile-app_1319036-8766.jpg?ga=GA1.1.1262692796.1695691184&semt=ais_hybrid"
        },
        {
            "name": "Web Development",
            "description": "We build responsive, fast-loading websites that drive traffic, engage visitors, and convert leads. Our custom web development solutions cater to businesses of all sizes, ensuring that your website meets both your business goals and the evolving needs of your customers. With a focus on performance and security, we deliver websites that provide a seamless user experience.",
            "keyFeatures": [
                "Responsive Design",
                "SEO Optimization",
                "Fast Loading Speed",
                "Custom Functionality",
                "Security"
            ],
            "image": " https://img.freepik.com/premium-photo/display-computers-with-screen_1277187-39923.jpg?ga=GA1.1.1262692796.1695691184"
        },
        {
            "name": "IT & Network Services",
            "description": "Our IT & Network services help you optimize your IT infrastructure for security, reliability, and performance. We provide tailored solutions that streamline operations and improve the overall efficiency of your IT systems, ensuring smooth business operations.",
            "keyFeatures": [
                "Network Optimization",
                "Security",
                "Cloud Integration",
                "24/7 Monitoring",
                "Custom IT Solutions"
            ],
            "image": " https://img.freepik.com/premium-photo/yellow-wall-with-number-4-it_1103290-52689.jpg?ga=GA1.1.1262692796.1695691184&semt=ais_hybrid"
        },
        {
            "name": "Digital Marketing",
            "description": "Our digital marketing strategies are designed to increase your online visibility and drive business growth. From SEO and social media marketing to email campaigns and PPC, we help you reach your target audience and convert them into loyal customers.",
            "keyFeatures": [
                "SEO & SEM",
                "Social Media Marketing",
                "Content Marketing",
                "Email Marketing",
                "Analytics & Reporting"
            ],
            "image": "https://img.freepik.com/premium-photo/digital-marketing-communication-concept_813661-23252.jpg?ga=GA1.1.1262692796.1695691184&semt=ais_hybrid"
        },
        {
            "name": "Software Management",
            "description": "We streamline your software operations, improving productivity and scalability. Our ongoing support and management services ensure that your software performs efficiently as your business grows, providing continuous value and reducing downtime.",
            "keyFeatures": [
                "Automation",
                "Maintenance & Updates",
                "Scalability",
                "Performance Optimization",
                "Support Services"
            ],
            "image": "https://img.freepik.com/free-photo/3d-cartoon-scene-depicting-variety-people-multitasking_23-2151294503.jpg?ga=GA1.1.1262692796.1695691184&semt=ais_hybrid"
        }
    ]

    return (
        <>
            <div className='w-full h-auto  px-4 py-4 flex flex-col gap-4'>
                <h1 className='text-5xl font-bold text-start'>Our Services</h1>

                {/*  */}

                {
                    services.map((items, index) => (
                        <>
                            <div key={index} className={`w-full xl:h-[60vh] h-auto flex  items-center ${index % 2 === 0 ? 'xl:flex-row md:flex-row  flex-col' : 'xl:flex-row-reverse md:flex-row-reverse flex-col'}  px-2 `}>
                                {/* Images */}
                                <div className='xl:w-[50%] w-full h-full flex justify-center items-center p-4'>
                                    <Image width={100} height={100} unoptimized src={items.image} alt="services" className='w-full h-full rounded-md object-cover' />
                                </div>
                                {/* Content */}
                                <div className='xl:w-[50%] w-full h-full flex flex-col xl:gap-4 gap-1 justify-center p-4'>
                                    <h1 className='xl:text-5xl text-3xl font-bold'>{items.name}</h1>
                                    <p className='xl:text-md text-md'>{items.description}</p>
                                    <div>
                                        <ul className='flex flex-col items-start gap-2'>
                                            {
                                                items.keyFeatures.map((item, index) => (
                                                    <>
                                                        <li key={index} className='px-4 py-1 border bg-transparent border-gray-400 rounded-full flex items-center gap-2'><IoMdCheckmark className='text-[#e9db6c] font-bold' />{item}</li>
                                                    </>
                                                ))
                                            }

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))
                }
            </div>
        </>
    )
}

export default OurServices


// web : https://img.freepik.com/premium-photo/modern-office-team-collaboration_813661-17298.jpg?ga=GA1.1.1262692796.1695691184&semt=ais_hybrid
// app : https://img.freepik.com/premium-photo/app-developer-collaboration-smartphone-uiux-wireframe-sketches-prototype_89286-11909.jpg?ga=GA1.1.1262692796.1695691184&semt=ais_hybrid
//ui/ux : https://img.freepik.com/premium-photo/man-working-computer-with-graphic-man-working-his-laptop_829925-12198.jpg?ga=GA1.1.1262692796.1695691184&semt=ais_hybrid