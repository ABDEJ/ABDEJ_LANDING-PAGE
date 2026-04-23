"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  Download,
  MessageCircle,
} from "lucide-react";
import AnimatedSection from "../Animations";


export default function ContactUs() {
  return (
    <section
      id="contact"
      className="bg-dark text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
               <Image
                      src="/AboutUsIcons/Gear.svg"
                      alt="Gear Icon"
                      width={65}
                      height={65}
                      className="-mr-1"
                    />
              <h2 className="text-3xl md:text-4xl font-extrabold">
                Contact Us
              </h2>
            </div>
            <p className="text-sm md:text-base text-gray-300 max-w-xl mx-auto">
              Kindly reach out for inquiries or solutions
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left Side - Form */}
            <div className="bg-dark-card/60 rounded-2xl p-5 md:p-6 border border-white/10 shadow-lg">
              <form className="space-y-4">
                <div>
                 <input
  type="text"
  placeholder="Full Name"
  className="w-full h-12 rounded-lg border border-white/20 bg-transparent px-4 text-sm text-white placeholder:text-gray-400 outline-none focus:outline-none focus:ring-0 focus:border-secondary"
/>
                </div>

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full h-12 rounded-lg border border-white/20 bg-transparent px-4 text-sm text-white outline-none focus:outline-none focus:ring-0 placeholder:text-gray-400 focus:border-secondary"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full h-12 rounded-lg border border-white/20 bg-transparent px-4 text-sm text-white outline-none focus:outline-none focus:ring-0 placeholder:text-gray-400 focus:border-secondary"
                />

                <input
                  type="text"
                  placeholder="Company's Name"
                  className="w-full h-12 rounded-lg border border-white/20 bg-transparent px-4 text-sm text-white outline-none focus:outline-none focus:ring-0 placeholder:text-gray-400 focus:border-secondary"
                />

                <textarea
                  placeholder="Message"
                  rows={6}
                  className="w-full rounded-lg border border-white/20 bg-transparent px-4 py-3 text-sm text-white outline-none focus:outline-none focus:ring-0 placeholder:text-gray-400 focus:border-secondary resize-none"
                />

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center  justify-center rounded-tl-full rounded-br-full bg-secondary px-6 py-3 text-sm font-semibold text-dark transition hover:opacity-90"
                  >
                    Send Message
                  </button>

                  <Link
                    href="https://wa.me/2340000000000"
                    target="_blank"
                    className="inline-flex items-center justify-center gap-2 rounded-tl-full rounded-br-full bg-green-500 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                  >
                    <MessageCircle size={18} />
                    Chat via Whatsapp
                  </Link>
                </div>
              </form>
            </div>

            {/* Right Side - Map + Company Info */}
            <div className="flex flex-col gap-6">
              <div className="bg-dark-card/60 rounded-2xl p-5 md:p-6 border border-white/10 shadow-lg">
                <div className="relative w-full h-[260px] md:h-[320px]">
                  <Image
                    src="/map.svg"
                    alt="World map"
                    width={783}
                    height={500}
                    className="object-contain"
                  />

                  {/* Floating flags / cards */}
                  {/* <div className="absolute top-[18%] left-[18%] bg-white rounded-md shadow-md px-2 py-1 text-[10px] text-black font-medium">
                    Germany
                  </div>
                  <div className="absolute top-[10%] left-[45%] bg-white rounded-md shadow-md px-2 py-1 text-[10px] text-black font-medium">
                    Australia
                  </div>
                  <div className="absolute top-[46%] left-[12%] bg-white rounded-md shadow-md px-2 py-1 text-[10px] text-black font-medium">
                    Brazil
                  </div>
                  <div className="absolute top-[48%] left-[44%] bg-white rounded-md shadow-md px-2 py-1 text-[10px] text-black font-medium">
                    Pakistan
                  </div>
                  <div className="absolute top-[60%] left-[58%] bg-white rounded-md shadow-md px-2 py-1 text-[10px] text-black font-medium">
                    Nigeria
                  </div>
                  <div className="absolute top-[68%] right-[10%] bg-white rounded-md shadow-md px-2 py-1 text-[10px] text-black font-medium">
                    Canada
                  </div> */}
                </div> 

                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-4">Company’s Info</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-300">
                    <div className="flex items-center gap-2">
                      <Mail size={16} className="text-secondary" />
                      <span>info@company.com</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-secondary" />
                      <span>Ajah</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Phone size={16} className="text-secondary" />
                      <span>+234 800 000 0000</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock3 size={16} className="text-secondary" />
                      <span>9:00 AM</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}