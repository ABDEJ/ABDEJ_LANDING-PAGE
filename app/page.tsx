"use client";

import AboutUs from "@/components/home/AboutUs";
import FAQ from "@/components/home/FAQ";
import Hero from "@/components/home/Hero";
import PitchDeckCTA from "@/components/home/PitchDeck";
import Projects from "@/components/home/Projects";
import RequestQuote from "@/components/home/RequestQuote";
import Services from "@/components/home/Services";
import StatsStrip from "@/components/home/StatsStrip";
import Testimonials from "@/components/home/Testimonials";
import WhyUs from "@/components/home/WhyUs";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";






export default function LandingPage() {
  return (
    <main className="bg-dark text-white overflow-hidden">
      <Navbar />
      <Hero />
       <Services />
      <Projects />
       <WhyUs />
     <section id="about-us" className="scroll-mt-40">
  <AboutUs />
</section>
         <Testimonials />
      <RequestQuote/>
       <StatsStrip />
      <FAQ />
      <PitchDeckCTA/>
      <Footer />   
    </main> 
  );
}