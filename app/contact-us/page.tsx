'use client'
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import Hero from "@/components/home/Hero"
import ContactUs from "@/components/contact-us/ContactUs"
import PitchDeck from "@/components/home/PitchDeck"




export default function ContactUsPage() {
  return (
    <main className="bg-dark text-white overflow-hidden">
      <Navbar />
      <Hero/>
      <ContactUs/>
      <PitchDeck/>
      <Footer/>
      </main>
  );
};