"use client"
import React from 'react'
import Nav from '../components/layout/Nav'
import Projectss from "../components/project/Projects"
import Footer from '../components/layout/Footer'
import Hero from '../components/shared/Hero'
const Projects = () => {
    return (
        <>
            <Nav />
            <Hero
             title="Crafting Digital Excellence, One Project at a Time"
             subtitle="Our design-led strategy has empowered visionary businesses, bringing their innovations to life through creativity and precision."
             buttonText=" Lets Connect"
             onClick={() => console.log("Another button clicked!")}

            />
            <Projectss/>
            <Footer/>
        </>
    )
}

export default Projects
