"use client"
import React from 'react'
import Nav from '../components/layout/Nav'
// import Hero from '../components/about/Hero'
import Whowe from '../components/about/Whowe'
import VisionMission from '../components/about/VisionMission'
import CoreValue from '../components/about/CoreValue'
// import WhyChooseUs from '../components/home/WhyChooseUs'
import Teams from '../components/home/Teams'
// import Testimonials from '../components/home/Testimonials'
import Careers from '../components/about/Careers'
import Footer from '../components/layout/Footer'
import Hero from '../components/shared/Hero'

const About = () => {
  return (
    <>
      <Nav />
      <Hero

        title="Transforming Ideas into Digital Reality"
        subtitle="Empowering Businesses Through Custom Software Solutions"
        buttonText="Discover Our Story "
        onClick={() => { alert('about us') }}

      />
      <Whowe />
      <VisionMission />
      <CoreValue />
      {/* <WhyChooseUs /> */}
      {/* <Testimonials /> */}
      <Teams />
      <Careers />
      <Footer />
    </>
  )
}

export default About
