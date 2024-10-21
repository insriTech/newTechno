"use client"
import Image from 'next/image';
import React from 'react';
const Design = () => {
    const services = [
        {
            heading: "Unleash Your Vision with Expert Design Solutions",
            description:
                "Bring your ideas to life with our cutting-edge design services. We create visually stunning and impactful designs that set your business apart. Our expert team collaborates with you to ensure your vision is realized, delivering exceptional results that give your brand a competitive edge in the market.",
            image:
                "https://img.freepik.com/free-photo/work-team-digital-art_23-2151492153.jpg?ga=GA1.1.1262692796.1695691184&semt=ais_hybrid",
        },
        {
            heading: "Smart Development Tailored for Success",
            description:
                "We work closely with clients to develop innovative solutions that adapt to changing business needs. Our agile approach allows for quick turnaround times and effective results, ensuring that your project evolves with the market. Partner with us to drive your business forward and achieve your goals with confidence.",
            image:
                "https://img.freepik.com/premium-photo/business-development-strategy-results-concept_776674-1061599.jpg?ga=GA1.1.1262692796.1695691184&semt=ais_hybrid",
        },
        {
            heading: "Seamless Deployment Precision Guaranteed",
            description:
                "Experience flawless project deployment with our expert team, dedicated to ensuring smooth integration and precision. We prioritize your specific needs and deliver high-quality results. Our focus on accuracy and efficiency allows you to launch projects successfully, enabling you to concentrate on your core business objectives without any hassle.",
            image:
                "https://img.freepik.com/free-photo/portrait-male-engineer-working-field-engineers-day-celebration_23-2151615106.jpg?ga=GA1.1.1262692796.1695691184&semt=ais_hybrid",
        },
    ];

    const highlightWords = (text) => {
        const wordsToColor = {
            "Design": "text-[#F7D720]",
            "Development": "text-[#F7D720]",
            "Deployment": "text-[#F7D720]",
        };

        const regex = new RegExp(`(${Object.keys(wordsToColor).join('|')})`, 'g');
        return text.split(regex).map((part, index) =>
            wordsToColor[part] ? (
                <span key={index} className={wordsToColor[part]}>
                    {part}
                </span>
            ) : (
                part
            )
        );
    };

    return (
        <>
            <div className="w-full h-auto xl:px-4 md:px-4 px-2 py-4 flex flex-col gap-4 overflow-hidden">
                {services.map((items, index) => (
                    <>
                            <div
                                key={index}
                                className={`w-full xl:h-[60vh] h-auto flex items-center ${index % 2 === 0
                                    ? "xl:flex-row md:flex-row flex-col"
                                    : "xl:flex-row-reverse md:flex-row-reverse flex-col"
                                    }`}
                            >
                                {/* Images */}
                                <div className="xl:w-[50%] w-full h-full flex justify-center items-center xl:p-4 md:p-4 p-2">
                                    <Image
                                        width={100}
                                        height={100}
                                        unoptimized
                                        src={items.image}
                                        alt="services"
                                        className="w-full h-full rounded-md object-cover"
                                    />
                                </div>
                                {/* Content */}
                                <div className="xl:w-[50%] w-full h-full flex flex-col xl:gap-10 gap-1 justify-start xl:p-4 md:p-4 p-2">
                                    <h1 className="xl:text-5xl text-3xl font-bold">
                                        {highlightWords(items.heading)}
                                    </h1>
                                    <p className="xl:text-xl text-md">{items.description}</p>
                                    <div>
                                        <button className="xl:text-lg text-sm bg-[#F7D720] text-black rounded-md px-4 py-2">
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>
                    </>
                ))}
            </div>
        </>
    );
};

export default Design;
/* hhhh */