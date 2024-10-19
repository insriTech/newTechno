"use client"
import React from 'react'
import Nav from '../components/layout/Nav'
import OurServices from '../components/services/OurServices'
import Footer from '../components/layout/Footer'
import Hero from '../components/shared/Hero'

const services = () => {



    return (
        <>
            <Nav />
            <Hero
             title="Empowering Your Business with Tailored Solutions"
             subtitle="We provide a range of services from app development to digital marketing, designed to scale your business and enhance user experience."
             buttonText="Discover Our Story"
             onClick={() => console.log("Another button clicked!")}
            
            />
            <OurServices />
            <Footer/>
        </>
    )
}

export default services
