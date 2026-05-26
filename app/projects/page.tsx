'use client'
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import Hero from "@/components/home/Hero"
import PitchDeck from "@/components/home/PitchDeck"
import RequestQuote from "@/components/home/RequestQuote"
import Projects from "@/components/projects/Projects"




export default function ContactUsPage() {
  return (
    <main className="bg-dark text-white overflow-hidden">
      <Navbar />
      <Projects/>
      <RequestQuote/>
      <Footer/>
      </main>
  );
};