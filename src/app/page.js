import React from "react";
import Nav from "./components/layout/Nav";
import Hero from "./components/home/Hero";
import Services from "./components/home/Services";
import WhyChooseUs from "./components/home/WhyChooseUs";
import Technologies from "./components/home/Technologies";
import Testimonials from "./components/home/Testimonials";
import Process from "./components/home/Process";
import Blog from "./components/home/Blog";
import Team from "./components/home/Teams";
import Action from "./components/home/Action";
import Footer from "./components/layout/Footer";
import Design from "./components/home/Design";
export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Design />
      <Services />
      <WhyChooseUs />
      <Technologies />
      <Testimonials />
      <Process />
      <Blog />
      <Team />
      <Action />
      <Footer />
    </>
  );
}
/* text */
