"use client"
import React from 'react'
import Nav from '../components/layout/Nav'
import Blogs from '../components/blog/Blogs'
import Footer from '../components/layout/Footer'
import Hero from '../components/shared/Hero'

const Blog = () => {
  return (
    <>
      <Nav />
      <Hero
        title="Discover Latest Trends in Digital Transformation & Innovation"
        subtitle="Explore our curated content to stay updated with the latest trends in digital transformation, design, and technology."
      />
      <Blogs />
      <Footer />
    </>
  )
}

export default Blog
