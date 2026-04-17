'use client'

import Header from "@/components/about-us/Header"
import Navbar from "@/components/layout/Navbar"
import AboutUs from "@/components/about-us/AboutUs"
import RequestQuote from "@/components/home/RequestQuote"
import Footer from "@/components/layout/Footer"


export default function AboutUsPage() {
  return (
    <main className="bg-dark text-white overflow-hidden">
      <Navbar />
      <Header/>
      <AboutUs/>
      <RequestQuote/>
      <Footer/>
    </main>
  )}