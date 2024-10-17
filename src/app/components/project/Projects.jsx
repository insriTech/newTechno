import Image from 'next/image'
import React from 'react'

const Projects = () => {
    const projects = [
        {
            "name": "Digital Marketing, Product Development, Support",
            "description": "CookinGenie is a revolutionary at-home chef service. By leveraging digital marketing, product development, and strong customer support, it became the leading service in its state.",
            "image": "https://img.freepik.com/free-vector/simple-dashboard-user-panel_23-2148372638.jpg?ga=GA1.2.1262692796.1695691184&semt=ais_hybrid"
        },
        {
            "name": "E-commerce Development, UX/UI, Analytics",
            "description": "Developed a cutting-edge e-commerce platform focused on user experience, data-driven analytics, and a seamless checkout process for an international client.",
            "image": "https://img.freepik.com/free-vector/simple-dashboard-user-panel_23-2148372638.jpg?ga=GA1.2.1262692796.1695691184&semt=ais_hybrid"
        },
        {
            "name": "Custom CRM, API Integration, Data Management",
            "description": "Designed and implemented a custom CRM solution to streamline business operations, integrating third-party APIs for efficient data management and customer relations.",
            "image": "https://img.freepik.com/free-vector/simple-dashboard-user-panel_23-2148372638.jpg?ga=GA1.2.1262692796.1695691184&semt=ais_hybrid"
        },
        {
            "name": "Mobile App UI/UX Design, Performance Optimization",
            "description": "Delivered an intuitive mobile app design focused on performance optimization and enhancing user engagement across multiple platforms.",
            "image": "https://img.freepik.com/free-vector/simple-dashboard-user-panel_23-2148372638.jpg?ga=GA1.2.1262692796.1695691184&semt=ais_hybrid"
        },
        {
            "name": "Social Media Dashboard, Analytics Tool, Data Visualization",
            "description": "Developed a comprehensive social media dashboard, incorporating real-time analytics and interactive data visualization to track performance metrics.",
            "image": "https://img.freepik.com/free-vector/dashboard-user-panel-template_52683-29382.jpg?ga=GA1.2.1262692796.1695691184&semt=ais_hybrid"
        },
        {
            "name": "SaaS Platform Development, User Experience, Cloud Integration",
            "description": "Built a scalable SaaS platform with a user-friendly interface and seamless cloud integration, optimizing business operations for small and medium enterprises.",
            "image": "https://img.freepik.com/free-vector/dashboard-user-panel-template_52683-29382.jpg?ga=GA1.2.1262692796.1695691184&semt=ais_hybrid"
        },
        {
            "name": "Healthcare App, Data Security, Custom Features",
            "description": "Designed a healthcare app with strong data security protocols and custom features for patient management, delivering a reliable and secure health solution.",
            "image": "https://img.freepik.com/free-vector/dashboard-user-panel-template_52683-29382.jpg?ga=GA1.2.1262692796.1695691184&semt=ais_hybrid"
        },
        {
            "name": "E-learning Platform, Content Delivery, Responsive Design",
            "description": "Created a responsive e-learning platform to enhance content delivery, providing students and educators with an interactive and engaging experience.",
            "image": "https://img.freepik.com/free-vector/dashboard-user-panel-template_52683-29382.jpg?ga=GA1.2.1262692796.1695691184&semt=ais_hybrid"
        },
        {
            "name": "Travel Booking System, Real-Time Updates, Payment Integration",
            "description": "Developed a travel booking platform with real-time updates and secure payment integration, ensuring a smooth booking experience for users.",
            "image": "https://img.freepik.com/free-vector/dashboard-user-panel-template_52683-29382.jpg?ga=GA1.2.1262692796.1695691184&semt=ais_hybrid"
        },
        {
            "name": "Enterprise Software Solution, Workflow Automation, API Integration",
            "description": "Built an enterprise software solution with automated workflows and API integration, improving efficiency and scaling business processes for larger organizations.",
            "image": "https://img.freepik.com/free-vector/dashboard-user-panel-template_52683-29382.jpg?ga=GA1.2.1262692796.1695691184&semt=ais_hybrid"
        }
    ]


    return (
        <>
            <div className='w-full h-auto  px-4 py-8'>
                <h1 className='text-5xl font-bold text-center text-[#12334E]'>Our work speaks for itself...</h1>
                {/*  */}

                <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-8'>

                    {
                        projects.map((items, index) => (
                            <>
                                <div key={index} className='p-2 rounded-md bg-[#F5F7F8] flex flex-col gap-2 cursor-pointer'>
                                    <div className='w-full h-auto overflow-hidden'>
                                        <Image
                                            className='w-full h-auto object-cover rounded-md transform transition-transform duration-300 ease-in-out hover:scale-105'
                                            width={100}
                                            height={100}
                                            unoptimized
                                            src={items.image}
                                            alt=''
                                        />
                                    </div>
                                    <div className='w-full h-auto'>
                                        <h1 className='text-2xl font-bold text-start'>{items.name}</h1>
                                        <p className='text-gray-600'>{items.description}</p>
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

export default Projects
