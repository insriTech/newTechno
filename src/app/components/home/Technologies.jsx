"use client"
import Image from 'next/image';
import React from 'react';
import Slider from "react-slick";

// Sample JSON data
const technologiesData = [
    // Frontend Technologies
    {
        name: "HTML5",
        description: "A markup language used for structuring and presenting content on the World Wide Web.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
    },
    {
        name: "CSS3",
        description: "A style sheet language used for describing the presentation of a document written in HTML or XML.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
    },
    {
        name: "JavaScript",
        description: "A high-level, dynamic programming language that enables interactive web pages and applications.",
        logo: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
    },
    {
        name: "TypeScript",
        description: "A high-level, dynamic programming language that enables interactive web pages and applications.",
        logo: "https://cdn.worldvectorlogo.com/logos/typescript.svg"
    },
    {
        name: "React",
        description: "A JavaScript library for building user interfaces, maintained by Facebook and a community of developers.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
    },
    {
        name: "Vue.js",
        description: "A progressive JavaScript framework for building user interfaces.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
    },
    {
        name: "Angular",
        description: "A platform for building mobile and desktop web applications.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg"
    },
    {
        name: "Next.js",
        description: "A React framework for production with automatic server rendering and code splitting.",
        logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg"
    },
    {
        name: "Bootstrap",
        description: "A free and open-source CSS framework directed at responsive, mobile-first front-end web development.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
    },
    {
        name: "Tailwind CSS",
        description: "A utility-first CSS framework that provides low-level utility classes to build custom designs.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
    },
    {
        name: "Git",
        description: "A distributed version control system to track changes in source code during software development.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg"
    },

    // Backend Technologies
    {
        name: "Node.js",
        description: "A back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
    },
    {
        name: "Express.js",
        description: "A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
    },
    {
        name: "Django",
        description: "A high-level Python web framework that encourages rapid development and clean, pragmatic design.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg"
    },
    {
        name: "Ruby on Rails",
        description: "A server-side web application framework written in Ruby under the MIT License, emphasizing convention over configuration.",
        logo: "https://cdn.worldvectorlogo.com/logos/ruby.svg"
    },

    // Database Technologies
    {
        name: "MySQL",
        description: "An open-source relational database management system based on SQL (Structured Query Language).",
        logo: "https://cdn.worldvectorlogo.com/logos/mysql-3.svg"
    },
    {
        name: "MongoDB",
        description: "A source-available cross-platform document-oriented database program, classified as a NoSQL database.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg"
    },
    {
        name: "PostgreSQL",
        description: "An open-source relational database management system emphasizing extensibility and SQL compliance.",
        logo: "https://cdn.worldvectorlogo.com/logos/postgresql.svg"
    },
    {
        name: "Redis",
        description: "An open-source, in-memory data structure store, used as a database, cache, and message broker.",
        logo: "https://cdn.worldvectorlogo.com/logos/redis.svg"
    }
];


/* svg icons - https://worldvectorlogo.com/ */

const Technologies = () => {
    const settings = {
        dots: false,           // Disable dots for a cleaner look
        infinite: true,        // Enable infinite scrolling
        speed: 2000,          // Set a high speed to control how fast the slides move
        autoplay: true,        // Enable autoplay
        autoplaySpeed: 0,      // Set autoplay speed to 0 for continuous scrolling
        slidesToShow: 7,       // Number of items to display
        slidesToScroll: 1,     // Set to 1 to allow continuous smooth movement
        cssEase: "linear",     // Linear easing for smooth, consistent scrolling
        pauseOnHover: true,   // Do not stop on hover
        nextArrow: <></>,      // Disable next arrow
        prevArrow: <></>,      // Disable prev arrow
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    };


    /*  */

    const settings1 = {
        dots: false,           // Disable dots for a cleaner look
        infinite: true,        // Enable infinite scrolling
        speed: 2000,          // Set a high speed to control how fast the slides move
        autoplay: true,        // Enable autoplay
        autoplaySpeed: 0,      // Set autoplay speed to 0 for continuous scrolling
        slidesToShow: 7,       // Number of items to display
        slidesToScroll: 1,     // Set to 1 to allow continuous smooth movement
        cssEase: "linear",     // Linear easing for smooth, consistent scrolling
        pauseOnHover: true,   // Do not stop on hover
        nextArrow: <></>,      // Disable next arrow
        prevArrow: <></>,      // Disable prev arrow
        rtl: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    };

    return (
        <>
            <div className='w-full h-auto  xl:px-4 md:px-4 px-2 py-14 mt-14 flex flex-col gap-20 '>
                <div className="w-full h-auto ">

                    <Slider {...settings}>
                        {technologiesData.map((tech, index) => (


                            <>
                                <div key={index} className='w-[100px] h-[100px] rounded-full flex justify-center items-center p-4 bg-[#F5F7F8] cursor-pointer' title={tech.name}>
                                    <Image
                                        width={100}
                                        height={100}
                                        src={tech.logo}
                                        alt={tech.name}
                                        className='w-[80px] h-[80px] mb-2 object-contain'
                                    />
                                </div>
                            </>

                        ))}
                    </Slider>
                </div>

                <div className="w-full h-auto  ">

                    <Slider {...settings1}>
                        {technologiesData.map((tech, index) => (


                            <>
                                <div key={index} className='w-[100px] h-[100px] rounded-full flex justify-center items-center p-4 bg-[#F5F7F8] cursor-pointer' title={tech.name}>
                                    <Image
                                        width={100}
                                        height={100}
                                        src={tech.logo}
                                        alt={tech.name}
                                        className='w-[80px] h-[80px] mb-2 object-contain'
                                    />
                                </div>
                            </>

                        ))}
                    </Slider>
                </div>
            </div>

        </>

    );
}

export default Technologies;
